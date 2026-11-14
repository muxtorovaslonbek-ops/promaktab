import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowLeft,
  BookOpen,
  Search,
  ChevronRight,
  Library,
  Headphones,
  Play,
  Pause,
  Loader2,
} from "lucide-react";
import { books, audioBooks, type Book, type AudioBook } from "@/data/books";
import { useYouTubeAudioPlayer, AudioBookPlayerBar } from "@/components/AudioBookPlayer";
import logo from "@/assets/logo.png";

export const Route = createFileRoute("/kutubxona/")({
  head: () => ({
    meta: [
      { title: "Kutubxona — Navoiy shahar 8-maktab" },
      {
        name: "description",
        content:
          "Navoiy 8-maktab onlayn kutubxonasi: elektron kitoblarni o‘qing va audio kitoblarni tinglang.",
      },
    ],
  }),
  component: KutubxonaPage,
});

function BookCover({ book, className }: { book: Book; className?: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 p-4 text-center text-sm font-bold text-white ${className ?? ""}`}
      >
        {book.title}
      </div>
    );
  }
  return (
    <img
      src={book.cover}
      alt={book.title}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`object-cover ${className ?? ""}`}
    />
  );
}

function AudioBookCover({ book }: { book: AudioBook }) {
  const [failed, setFailed] = useState(false);
  if (book.cover && !failed) {
    return (
      <div className="relative aspect-[3/4] w-full overflow-hidden">
        <img
          src={book.cover}
          alt={book.title}
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover"
        />
        <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-black/65 px-2.5 py-1 text-[11px] font-bold text-white backdrop-blur-sm">
          <Headphones className="h-3.5 w-3.5" />
          Audio
        </span>
      </div>
    );
  }
  return (
    <div
      className={`relative flex aspect-[3/4] w-full flex-col items-center justify-center bg-gradient-to-br ${book.accent} p-5 text-center text-white`}
    >
      <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-black/25 px-2.5 py-1 text-[11px] font-bold text-white backdrop-blur-sm">
        <Headphones className="h-3.5 w-3.5" />
        Audio
      </span>
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm">
        <Headphones className="h-8 w-8" />
      </div>
      <p className="mt-3 line-clamp-2 text-base font-extrabold leading-tight">{book.title}</p>
      <p className="mt-1 text-xs text-white/80">{book.author}</p>
    </div>
  );
}

function KutubxonaPage() {
  const [search, setSearch] = useState("");
  const [tab, setTab] = useState<"all" | "ebooks" | "audio">("all");
  const audio = useYouTubeAudioPlayer();

  const q = search.toLowerCase();
  const filtered = books.filter(
    (b) =>
      b.title.toLowerCase().includes(q) ||
      b.author.toLowerCase().includes(q) ||
      b.category.toLowerCase().includes(q),
  );
  const filteredAudio = audioBooks.filter(
    (b) =>
      b.title.toLowerCase().includes(q) ||
      b.author.toLowerCase().includes(q) ||
      b.category.toLowerCase().includes(q),
  );

  const showEbooks = tab === "all" || tab === "ebooks";
  const showAudio = tab === "all" || tab === "audio";

  return (
    <div
      className={`min-h-screen bg-app font-sans text-ink ${audio.activeBook ? "pb-36" : "pb-16"}`}
    >
      {/* Video ko'rinmasligi uchun ekran tashqarisidagi faqat-audio YouTube pleyer konteyneri */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed -left-[9999px] -top-[9999px] h-[200px] w-[200px] overflow-hidden opacity-0"
      >
        <div ref={audio.hostRef} />
      </div>

      <header className="sticky top-0 z-30 border-b border-border bg-background/80 px-4 py-4 backdrop-blur-md sm:px-8">
        <div className="mx-auto flex max-w-7xl items-center gap-4">
          <Link
            to="/"
            className="flex cursor-pointer items-center gap-2 rounded-xl border border-border bg-card px-3 py-2 text-sm font-semibold shadow-sm transition hover:bg-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Bosh sahifa</span>
          </Link>
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="h-9 w-9" />
            <div className="hidden sm:block">
              <h1 className="text-sm font-bold tracking-tight">Navoiy shahar 8-maktab</h1>
              <p className="text-xs text-muted-foreground">Onlayn kutubxona</p>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl space-y-8 px-4 pt-8 sm:px-8">
        <div className="rounded-3xl border border-border bg-gradient-to-br from-indigo-900/10 via-card to-background p-6 shadow-lg sm:p-10">
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-100/80 px-3 py-1 text-xs font-bold text-indigo-700">
              <Library className="h-3.5 w-3.5" />
              <span>{books.length} ta kitob</span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-100/80 px-3 py-1 text-xs font-bold text-sky-700">
              <Headphones className="h-3.5 w-3.5" />
              <span>{audioBooks.length} ta audio kitob</span>
            </div>
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">Kutubxona</h2>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
            Kitobni tanlang va to‘g‘ridan-to‘g‘ri saytda o‘qing yoki audio kitoblarni tinglang.
            Xohlasangiz, elektron kitoblarni yuklab ham olishingiz mumkin.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Kitob yoki muallifni qidirish..."
              className="w-full rounded-xl border border-border bg-card py-2 pl-10 pr-4 text-xs outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {(
              [
                { id: "all", label: "Barchasi" },
                { id: "ebooks", label: "Elektron kitoblar" },
                { id: "audio", label: "Audio kitoblar" },
              ] as const
            ).map((item) => (
              <button
                key={item.id}
                onClick={() => setTab(item.id)}
                className={`cursor-pointer rounded-xl px-3.5 py-2 text-xs font-bold transition ${
                  tab === item.id
                    ? "bg-brand text-white shadow-sm"
                    : "border border-border bg-card text-foreground hover:bg-accent"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {showEbooks && (
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-brand" />
              <h3 className="text-xl font-extrabold">Elektron kitoblar</h3>
            </div>
            {filtered.length === 0 ? (
              <p className="py-8 text-center text-sm text-muted-foreground">Kitob topilmadi.</p>
            ) : (
              <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
                {filtered.map((book) => (
                  <Link
                    key={book.id}
                    to="/kutubxona/$book"
                    params={{ book: book.id }}
                    className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-md transition duration-300 hover:-translate-y-1.5 hover:shadow-xl"
                  >
                    <BookCover book={book} className="aspect-[3/4] w-full" />
                    <div className="flex flex-1 flex-col gap-1 p-4">
                      <span className="text-[11px] font-bold text-indigo-600">{book.category}</span>
                      <h3 className="line-clamp-2 text-base font-extrabold leading-tight">
                        {book.title}
                      </h3>
                      <p className="text-xs text-muted-foreground">{book.author}</p>
                      <span className="mt-auto flex items-center gap-1 pt-3 text-xs font-bold text-brand">
                        <BookOpen className="h-4 w-4" />
                        O‘qish
                        <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </section>
        )}

        {showAudio && (
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <Headphones className="h-5 w-5 text-sky-600" />
              <h3 className="text-xl font-extrabold">Audio kitoblar</h3>
            </div>
            {filteredAudio.length === 0 ? (
              <p className="py-8 text-center text-sm text-muted-foreground">
                Audio kitob topilmadi.
              </p>
            ) : (
              <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
                {filteredAudio.map((ab) => {
                  const isCurrent = audio.activeBook?.id === ab.id;
                  const isPlayingThis = isCurrent && audio.isPlaying;
                  const isLoadingThis = isCurrent && audio.isLoading;

                  return (
                    <button
                      key={ab.id}
                      type="button"
                      onClick={() => audio.selectAndPlay(ab)}
                      className={`group flex cursor-pointer flex-col overflow-hidden rounded-2xl border bg-card text-left shadow-md transition duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
                        isCurrent ? "border-brand ring-2 ring-brand/30" : "border-border"
                      }`}
                    >
                      <AudioBookCover book={ab} />
                      <div className="flex w-full flex-1 flex-col gap-1 p-4">
                        <span className="text-[11px] font-bold text-sky-600">{ab.category}</span>
                        <h3 className="line-clamp-2 text-base font-extrabold leading-tight">
                          {ab.title}
                        </h3>
                        <p className="text-xs text-muted-foreground">{ab.author}</p>
                        <span className="mt-auto flex items-center gap-1.5 pt-3 text-xs font-bold text-brand">
                          {isLoadingThis ? (
                            <>
                              <Loader2 className="h-4 w-4 animate-spin" />
                              Yuklanmoqda...
                            </>
                          ) : isPlayingThis ? (
                            <>
                              <Pause className="h-4 w-4" />
                              Tinglanmoqda (To‘xtatish)
                            </>
                          ) : (
                            <>
                              <Play className="h-4 w-4 fill-current" />
                              Tinglash
                            </>
                          )}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </section>
        )}
      </main>

      {audio.activeBook && (
        <AudioBookPlayerBar
          book={audio.activeBook}
          isPlaying={audio.isPlaying}
          isLoading={audio.isLoading}
          isMuted={audio.isMuted}
          currentTime={audio.currentTime}
          duration={audio.duration}
          playbackRate={audio.playbackRate}
          errorText={audio.errorText}
          onTogglePlay={audio.togglePlay}
          onSeekBy={audio.seekBy}
          onSeekTo={audio.seekTo}
          onToggleMute={audio.toggleMute}
          onCycleSpeed={audio.cycleSpeed}
          onClose={audio.closePlayer}
        />
      )}
    </div>
  );
}
