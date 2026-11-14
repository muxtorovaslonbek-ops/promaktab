import { useEffect, useRef, useState, useCallback } from "react";
import {
  Headphones,
  Play,
  Pause,
  RotateCcw,
  RotateCw,
  Volume2,
  VolumeX,
  X,
  Loader2,
} from "lucide-react";
import type { AudioBook } from "@/data/books";

interface YTPlayerInstance {
  playVideo: () => void;
  pauseVideo: () => void;
  stopVideo: () => void;
  loadVideoById: (videoId: string) => void;
  seekTo: (seconds: number, allowSeekAhead: boolean) => void;
  getCurrentTime: () => number;
  getDuration: () => number;
  mute: () => void;
  unMute: () => void;
  isMuted: () => boolean;
  setPlaybackRate: (rate: number) => void;
  destroy: () => void;
}

interface YTPlayerEvent {
  target: YTPlayerInstance;
  data: number;
}

interface YTGlobal {
  Player: new (
    el: HTMLElement | string,
    opts: {
      height?: string | number;
      width?: string | number;
      videoId?: string;
      playerVars?: Record<string, string | number>;
      events?: {
        onReady?: (e: YTPlayerEvent) => void;
        onStateChange?: (e: YTPlayerEvent) => void;
        onError?: (e: YTPlayerEvent) => void;
      };
    },
  ) => YTPlayerInstance;
  PlayerState: {
    ENDED: number;
    PLAYING: number;
    PAUSED: number;
    BUFFERING: number;
  };
}

function formatAudioTime(totalSeconds: number): string {
  if (!Number.isFinite(totalSeconds) || totalSeconds < 0) return "0:00";
  const secs = Math.floor(totalSeconds);
  const h = Math.floor(secs / 3600);
  const m = Math.floor((secs % 3600) / 60);
  const s = secs % 60;
  if (h > 0) {
    return `${h}:${m < 10 ? "0" : ""}${m}:${s < 10 ? "0" : ""}${s}`;
  }
  return `${m}:${s < 10 ? "0" : ""}${s}`;
}

export function useYouTubeAudioPlayer() {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const playerRef = useRef<YTPlayerInstance | null>(null);
  const readyRef = useRef(false);
  const pendingVideoIdRef = useRef<string | null>(null);

  const [activeBook, setActiveBook] = useState<AudioBook | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackRate, setPlaybackRateState] = useState(1);
  const [errorText, setErrorText] = useState<string | null>(null);

  const ensurePlayer = useCallback((initialVideoId?: string) => {
    if (typeof window === "undefined") return;
    const yt = (window as unknown as { YT?: YTGlobal }).YT;
    if (!yt?.Player || !hostRef.current || playerRef.current) return;

    playerRef.current = new yt.Player(hostRef.current, {
      height: "200",
      width: "200",
      videoId: initialVideoId || "",
      playerVars: {
        autoplay: initialVideoId ? 1 : 0,
        controls: 0,
        disablekb: 1,
        fs: 0,
        modestbranding: 1,
        playsinline: 1,
        rel: 0,
        origin: window.location.origin,
      },
      events: {
        onReady: (event) => {
          readyRef.current = true;
          const pending = pendingVideoIdRef.current;
          if (pending) {
            pendingVideoIdRef.current = null;
            event.target.loadVideoById(pending);
            event.target.playVideo();
          }
        },
        onStateChange: (event) => {
          const states = (window as unknown as { YT?: YTGlobal }).YT?.PlayerState;
          if (!states) return;
          if (event.data === states.PLAYING) {
            setIsPlaying(true);
            setIsLoading(false);
            setErrorText(null);
            const dur = event.target.getDuration();
            if (dur > 0) setDuration(dur);
          } else if (event.data === states.PAUSED) {
            setIsPlaying(false);
            setIsLoading(false);
          } else if (event.data === states.BUFFERING) {
            setIsLoading(true);
          } else if (event.data === states.ENDED) {
            setIsPlaying(false);
            setIsLoading(false);
          }
        },
        onError: () => {
          setIsLoading(false);
          setIsPlaying(false);
          setErrorText("Audio yuklashda xatolik yuz berdi. Internet aloqasini tekshiring.");
        },
      },
    });
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const win = window as unknown as {
      YT?: YTGlobal;
      onYouTubeIframeAPIReady?: () => void;
    };

    if (win.YT?.Player) {
      ensurePlayer();
    } else {
      const prevCallback = win.onYouTubeIframeAPIReady;
      win.onYouTubeIframeAPIReady = () => {
        prevCallback?.();
        ensurePlayer(pendingVideoIdRef.current ?? undefined);
      };
      if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        tag.async = true;
        document.head.appendChild(tag);
      }
    }

    return () => {
      if (playerRef.current) {
        try {
          playerRef.current.destroy();
        } catch {
          /* ignore */
        }
        playerRef.current = null;
        readyRef.current = false;
      }
    };
  }, [ensurePlayer]);

  useEffect(() => {
    if (!activeBook) return;
    const timer = window.setInterval(() => {
      const p = playerRef.current;
      if (!p || !readyRef.current) return;
      try {
        const cur = p.getCurrentTime();
        const dur = p.getDuration();
        if (Number.isFinite(cur)) setCurrentTime(cur);
        if (Number.isFinite(dur) && dur > 0) setDuration(dur);
      } catch {
        /* ignore */
      }
    }, 500);
    return () => window.clearInterval(timer);
  }, [activeBook]);

  const selectAndPlay = useCallback(
    (book: AudioBook) => {
      setErrorText(null);
      if (activeBook?.id === book.id) {
        if (playerRef.current && readyRef.current) {
          if (isPlaying) {
            playerRef.current.pauseVideo();
          } else {
            playerRef.current.playVideo();
          }
        }
        return;
      }

      setActiveBook(book);
      setCurrentTime(0);
      setDuration(0);
      setIsLoading(true);
      setIsPlaying(false);

      const yt = (window as unknown as { YT?: YTGlobal }).YT;
      if (playerRef.current && readyRef.current) {
        playerRef.current.loadVideoById(book.youtubeId);
        playerRef.current.playVideo();
        playerRef.current.setPlaybackRate(playbackRate);
      } else if (yt?.Player && !playerRef.current) {
        pendingVideoIdRef.current = book.youtubeId;
        ensurePlayer(book.youtubeId);
      } else {
        pendingVideoIdRef.current = book.youtubeId;
      }
    },
    [activeBook, ensurePlayer, isPlaying, playbackRate],
  );

  const togglePlay = useCallback(() => {
    if (!playerRef.current || !readyRef.current) return;
    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
  }, [isPlaying]);

  const seekBy = useCallback(
    (delta: number) => {
      if (!playerRef.current || !readyRef.current) return;
      const next = Math.max(0, Math.min(duration || 999999, currentTime + delta));
      playerRef.current.seekTo(next, true);
      setCurrentTime(next);
    },
    [currentTime, duration],
  );

  const seekTo = useCallback((seconds: number) => {
    if (!playerRef.current || !readyRef.current) return;
    playerRef.current.seekTo(seconds, true);
    setCurrentTime(seconds);
  }, []);

  const toggleMute = useCallback(() => {
    if (!playerRef.current || !readyRef.current) return;
    if (isMuted) {
      playerRef.current.unMute();
      setIsMuted(false);
    } else {
      playerRef.current.mute();
      setIsMuted(true);
    }
  }, [isMuted]);

  const cycleSpeed = useCallback(() => {
    const speeds = [1, 1.25, 1.5, 0.75];
    const next = speeds[(speeds.indexOf(playbackRate) + 1) % speeds.length] ?? 1;
    setPlaybackRateState(next);
    if (playerRef.current && readyRef.current) {
      try {
        playerRef.current.setPlaybackRate(next);
      } catch {
        /* ignore */
      }
    }
  }, [playbackRate]);

  const closePlayer = useCallback(() => {
    if (playerRef.current && readyRef.current) {
      try {
        playerRef.current.stopVideo();
      } catch {
        /* ignore */
      }
    }
    pendingVideoIdRef.current = null;
    setActiveBook(null);
    setIsPlaying(false);
    setIsLoading(false);
    setCurrentTime(0);
    setDuration(0);
    setErrorText(null);
  }, []);

  return {
    hostRef,
    activeBook,
    isPlaying,
    isLoading,
    isMuted,
    currentTime,
    duration,
    playbackRate,
    errorText,
    selectAndPlay,
    togglePlay,
    seekBy,
    seekTo,
    toggleMute,
    cycleSpeed,
    closePlayer,
  };
}

interface AudioBookPlayerBarProps {
  book: AudioBook;
  isPlaying: boolean;
  isLoading: boolean;
  isMuted: boolean;
  currentTime: number;
  duration: number;
  playbackRate: number;
  errorText: string | null;
  onTogglePlay: () => void;
  onSeekBy: (delta: number) => void;
  onSeekTo: (seconds: number) => void;
  onToggleMute: () => void;
  onCycleSpeed: () => void;
  onClose: () => void;
}

export function AudioBookPlayerBar({
  book,
  isPlaying,
  isLoading,
  isMuted,
  currentTime,
  duration,
  playbackRate,
  errorText,
  onTogglePlay,
  onSeekBy,
  onSeekTo,
  onToggleMute,
  onCycleSpeed,
  onClose,
}: AudioBookPlayerBarProps) {
  const progress = duration > 0 ? Math.min(100, (currentTime / duration) * 100) : 0;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-4 py-3 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] shadow-2xl backdrop-blur-md sm:px-8">
      <div className="mx-auto max-w-5xl space-y-2">
        {/* Progress bar */}
        <div className="flex items-center gap-3 text-[11px] font-mono text-muted-foreground">
          <span className="w-12 text-right">{formatAudioTime(currentTime)}</span>
          <input
            type="range"
            min={0}
            max={duration > 0 ? Math.floor(duration) : 100}
            value={Math.floor(currentTime)}
            onChange={(e) => onSeekTo(Number(e.target.value))}
            disabled={duration <= 0}
            aria-label="Audio vaqtini surish"
            className="h-1.5 flex-1 cursor-pointer accent-indigo-600"
          />
          <span className="w-12">{duration > 0 ? formatAudioTime(duration) : "--:--"}</span>
        </div>

        {/* Controls row */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex min-w-0 flex-1 items-center gap-3">
            <div
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${book.accent} text-white shadow-sm`}
            >
              <Headphones className={`h-5 w-5 ${isPlaying ? "animate-pulse" : ""}`} />
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-extrabold text-ink">{book.title}</p>
              <p className="truncate text-xs text-muted-foreground">
                {errorText ? (
                  <span className="font-semibold text-red-600">{errorText}</span>
                ) : (
                  `${book.author} • Audio kitob`
                )}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={() => onSeekBy(-15)}
              className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl border border-border bg-card text-xs font-bold transition hover:bg-accent"
              title="15 soniya orqaga"
              aria-label="15 soniya orqaga"
            >
              <RotateCcw className="h-4 w-4" />
            </button>

            <button
              onClick={onTogglePlay}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl bg-brand text-white shadow-soft transition hover:scale-105"
              title={isPlaying ? "To‘xtatish" : "Tinglash"}
              aria-label={isPlaying ? "To‘xtatish" : "Tinglash"}
            >
              {isLoading ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : isPlaying ? (
                <Pause className="h-5 w-5" />
              ) : (
                <Play className="h-5 w-5 fill-white" />
              )}
            </button>

            <button
              onClick={() => onSeekBy(15)}
              className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl border border-border bg-card text-xs font-bold transition hover:bg-accent"
              title="15 soniya oldinga"
              aria-label="15 soniya oldinga"
            >
              <RotateCw className="h-4 w-4" />
            </button>

            <button
              onClick={onCycleSpeed}
              className="hidden h-9 cursor-pointer items-center justify-center rounded-xl border border-border bg-card px-2.5 text-xs font-bold transition hover:bg-accent sm:flex"
              title="Tezlikni o‘zgartirish"
            >
              {playbackRate}x
            </button>

            <button
              onClick={onToggleMute}
              className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl border border-border bg-card transition hover:bg-accent"
              title={isMuted ? "Ovozni yoqish" : "Ovozni o‘chirish"}
              aria-label={isMuted ? "Ovozni yoqish" : "Ovozni o‘chirish"}
            >
              {isMuted ? (
                <VolumeX className="h-4 w-4 text-red-500" />
              ) : (
                <Volume2 className="h-4 w-4" />
              )}
            </button>

            <button
              onClick={onClose}
              className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition hover:bg-accent hover:text-ink"
              title="Pleyerni yopish"
              aria-label="Pleyerni yopish"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Visual progress strip */}
        <div className="h-0.5 w-full overflow-hidden rounded-full bg-muted sm:hidden">
          <div className="h-full bg-brand transition-all" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  );
}
