import { useState, useEffect } from "react";
import {
  RotateCw,
  Shuffle,
  CheckCircle2,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export interface FlashcardItem {
  id: string;
  front: string;
  back: string;
  hint?: string;
}

interface SubjectFlashcardsProps {
  subjectId: string;
  subjectTitle: string;
  cards: FlashcardItem[];
  accentBgClass: string;
}

export function SubjectFlashcards({
  subjectId,
  subjectTitle,
  cards,
  accentBgClass,
}: SubjectFlashcardsProps) {
  const [orderedCards, setOrderedCards] = useState<FlashcardItem[]>(cards);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [filterMode, setFilterMode] = useState<"all" | "review">("all");
  const [knownMap, setKnownMap] = useState<Record<string, boolean>>({});

  useEffect(() => {
    try {
      const raw = localStorage.getItem("subject-flashcards-v1");
      if (raw) {
        setKnownMap(JSON.parse(raw) as Record<string, boolean>);
      }
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    setOrderedCards(cards);
    setCurrentIndex(0);
    setFlipped(false);
    setFilterMode("all");
  }, [subjectId, cards]);

  const visibleCards =
    filterMode === "review" ? orderedCards.filter((c) => !knownMap[c.id]) : orderedCards;

  const safeIndex = visibleCards.length > 0 ? Math.min(currentIndex, visibleCards.length - 1) : 0;
  const activeCard = visibleCards[safeIndex];

  const knownCount = cards.filter((c) => knownMap[c.id]).length;

  const markCard = (cardId: string, known: boolean) => {
    setKnownMap((prev) => {
      const next = { ...prev, [cardId]: known };
      try {
        localStorage.setItem("subject-flashcards-v1", JSON.stringify(next));
      } catch {
        /* ignore */
      }
      return next;
    });
    setFlipped(false);
    if (visibleCards.length > 1) {
      setCurrentIndex((prev) => (prev + 1 >= visibleCards.length ? 0 : prev + 1));
    }
  };

  const handleShuffle = () => {
    const copy = [...cards];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = copy[i];
      const swap = copy[j];
      if (tmp && swap) {
        copy[i] = swap;
        copy[j] = tmp;
      }
    }
    setOrderedCards(copy);
    setCurrentIndex(0);
    setFlipped(false);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-4">
        <div>
          <h3 className="text-xl font-extrabold tracking-tight">
            {subjectTitle}: Tezkor Fleshkartalar
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Kartani bosib javobni oching, yodlaganlaringizni belgilab bilimlaringizni mustahkamlang.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 tabular-nums">
          <div className="rounded-xl border border-border bg-card px-3 py-1.5 text-xs font-bold">
            Bilaman: <span className="text-emerald-600 font-extrabold">{knownCount}</span> /{" "}
            {cards.length}
          </div>
          <button
            type="button"
            onClick={handleShuffle}
            className="flex items-center gap-1.5 rounded-xl border border-border bg-card px-3 py-1.5 text-xs font-bold hover:bg-accent transition cursor-pointer"
          >
            <Shuffle className="h-3.5 w-3.5" />
            <span>Aralashtirish</span>
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => {
              setFilterMode("all");
              setCurrentIndex(0);
              setFlipped(false);
            }}
            className={`rounded-xl px-3.5 py-1.5 text-xs font-bold transition cursor-pointer ${
              filterMode === "all"
                ? accentBgClass
                : "border border-border bg-card text-muted-foreground hover:bg-accent"
            }`}
          >
            Barchasi ({cards.length})
          </button>
          <button
            type="button"
            onClick={() => {
              setFilterMode("review");
              setCurrentIndex(0);
              setFlipped(false);
            }}
            className={`rounded-xl px-3.5 py-1.5 text-xs font-bold transition cursor-pointer ${
              filterMode === "review"
                ? accentBgClass
                : "border border-border bg-card text-muted-foreground hover:bg-accent"
            }`}
          >
            Takrorlash kerak ({cards.length - knownCount})
          </button>
        </div>

        {visibleCards.length > 0 && (
          <span className="text-xs font-bold text-muted-foreground tabular-nums">
            {safeIndex + 1} / {visibleCards.length}
          </span>
        )}
      </div>

      {/* Card Stage */}
      {activeCard ? (
        <div className="space-y-4">
          <button
            type="button"
            onClick={() => setFlipped((prev) => !prev)}
            className="w-full min-h-[240px] rounded-3xl border-2 border-border bg-card p-8 shadow-md transition hover:border-brand/50 cursor-pointer flex flex-col items-center justify-center text-center space-y-4"
          >
            <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
              <RotateCw className="h-3.5 w-3.5" />
              <span>
                {flipped ? "Javob va izoh" : "Savol / Formula / Atama (ochish uchun bosing)"}
              </span>
            </div>

            <div className="text-lg sm:text-2xl font-extrabold leading-snug max-w-xl">
              {flipped ? activeCard.back : activeCard.front}
            </div>

            {!flipped && activeCard.hint && (
              <div className="text-xs text-muted-foreground">Maslahat: {activeCard.hint}</div>
            )}
          </button>

          {/* Controls */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <button
                type="button"
                disabled={visibleCards.length <= 1}
                onClick={() => {
                  setFlipped(false);
                  setCurrentIndex((prev) => (prev - 1 < 0 ? visibleCards.length - 1 : prev - 1));
                }}
                className="flex items-center gap-1 rounded-xl border border-border bg-card px-3.5 py-2 text-xs font-bold hover:bg-accent disabled:opacity-40 cursor-pointer"
              >
                <ChevronLeft className="h-4 w-4" />
                <span>Oldingi</span>
              </button>
              <button
                type="button"
                disabled={visibleCards.length <= 1}
                onClick={() => {
                  setFlipped(false);
                  setCurrentIndex((prev) => (prev + 1 >= visibleCards.length ? 0 : prev + 1));
                }}
                className="flex items-center gap-1 rounded-xl border border-border bg-card px-3.5 py-2 text-xs font-bold hover:bg-accent disabled:opacity-40 cursor-pointer"
              >
                <span>Keyingi</span>
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => markCard(activeCard.id, false)}
                className="flex items-center gap-1.5 rounded-xl border border-amber-300 bg-amber-50/70 px-3.5 py-2 text-xs font-bold text-amber-800 hover:bg-amber-100 transition cursor-pointer dark:bg-amber-950/30 dark:text-amber-300"
              >
                <HelpCircle className="h-4 w-4" />
                <span>Takrorlayman</span>
              </button>
              <button
                type="button"
                onClick={() => markCard(activeCard.id, true)}
                className="flex items-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-700 transition cursor-pointer shadow-xs"
              >
                <CheckCircle2 className="h-4 w-4" />
                <span>Bilaman</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="rounded-3xl border border-emerald-200 bg-emerald-50/60 dark:bg-emerald-950/20 p-8 text-center space-y-3">
          <CheckCircle2 className="h-10 w-10 text-emerald-600 mx-auto" />
          <h4 className="text-lg font-extrabold">Ajoyib! Barcha fleshkartalar o‘zlashtirildi</h4>
          <p className="text-xs text-muted-foreground">
            Takrorlash uchun «Barchasi» rejimini tanlashingiz mumkin.
          </p>
          <button
            type="button"
            onClick={() => setFilterMode("all")}
            className="rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white cursor-pointer"
          >
            Barcha kartalarga qaytish
          </button>
        </div>
      )}
    </div>
  );
}
