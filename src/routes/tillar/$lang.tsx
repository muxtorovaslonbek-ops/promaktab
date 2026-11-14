import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useId, useEffect } from "react";
import {
  ArrowLeft,
  Volume2,
  CheckCircle,
  HelpCircle,
  BookOpen,
  MessageSquare,
  Sparkles,
  Award,
  ChevronRight,
  RotateCcw,
  Languages,
  PenLine,
  Lightbulb,
  Shuffle,
  ChevronLeft,
  Layers,
  List,
  BookMarked,
} from "lucide-react";
import { languagesData, type LanguageData } from "@/data/languages";
import logo from "@/assets/logo.png";

export const Route = createFileRoute("/tillar/$lang")({
  head: ({ params }) => {
    const lang = languagesData[params.lang];
    const title = lang
      ? `${lang.name} — Navoiy shahar 8-maktab`
      : "Til o‘rganish — Navoiy shahar 8-maktab";
    return {
      meta: [
        { title },
        {
          name: "description",
          content: lang
            ? `${lang.name} darslari, lug‘at, audio talaffuz va testlar.`
            : "Xorijiy tillarni o‘rganish",
        },
      ],
    };
  },
  component: LanguageDetailPage,
});

export function LanguageDetailPage() {
  const { lang: langParam } = Route.useParams();
  const searchInputId = useId();
  const lang: LanguageData = languagesData[langParam] ?? languagesData["ingliz"]!;

  const [activeTab, setActiveTab] = useState<
    "vocab" | "lessons" | "quiz" | "dialogue" | "alphabet"
  >("vocab");
  const [selectedLessonIndex, setSelectedLessonIndex] = useState(0);
  const [learnedWords, setLearnedWords] = useState<Record<string, boolean>>({});
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [taskInputs, setTaskInputs] = useState<Record<string, string>>({});
  const [taskChecked, setTaskChecked] = useState<Record<string, boolean>>({});
  const [taskHints, setTaskHints] = useState<Record<string, boolean>>({});
  const [speakingWordId, setSpeakingWordId] = useState<string | null>(null);
  const [vocabSearch, setVocabSearch] = useState("");
  const [vocabMode, setVocabMode] = useState<"grid" | "flashcards">("grid");
  const [flashcardIdx, setFlashcardIdx] = useState(0);
  const [flashcardFlipped, setFlashcardFlipped] = useState(false);
  const [shuffledOrder, setShuffledOrder] = useState<number[] | null>(null);

  useEffect(() => {
    setSelectedLessonIndex(0);
    setQuizAnswers({});
    setQuizSubmitted(false);
    setTaskInputs({});
    setTaskChecked({});
    setTaskHints({});
    setVocabSearch("");
    setFlashcardIdx(0);
    setFlashcardFlipped(false);
    setShuffledOrder(null);
  }, [lang.id]);

  const playSpeech = (text: string, locale: string, id?: string) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    if (id) setSpeakingWordId(id);

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = locale;
    utterance.rate = 0.85;

    // Pick a matching voice if available
    const voices = window.speechSynthesis.getVoices();
    const matchingVoice = voices.find((v) =>
      v.lang.toLowerCase().startsWith(locale.slice(0, 2).toLowerCase()),
    );
    if (matchingVoice) utterance.voice = matchingVoice;

    utterance.onend = () => setSpeakingWordId(null);
    utterance.onerror = () => setSpeakingWordId(null);

    window.speechSynthesis.speak(utterance);
  };

  const toggleLearned = (id: string) => {
    setLearnedWords((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const selectQuizAnswer = (qId: string, optionIdx: number) => {
    if (quizSubmitted) return;
    setQuizAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  const resetQuiz = () => {
    setQuizAnswers({});
    setQuizSubmitted(false);
  };

  const quizScore = lang.quiz.reduce((acc, q) => {
    return quizAnswers[q.id] === q.answer ? acc + 1 : acc;
  }, 0);

  const filteredVocabulary = lang.vocabulary.filter(
    (v) =>
      v.word.toLowerCase().includes(vocabSearch.toLowerCase()) ||
      v.translation.toLowerCase().includes(vocabSearch.toLowerCase()),
  );

  const flashcardDeck = shuffledOrder
    ? shuffledOrder
        .map((idx) => lang.vocabulary[idx])
        .filter((v): v is NonNullable<typeof v> => !!v)
    : lang.vocabulary;
  const safeFlashcardIdx =
    flashcardDeck.length > 0 ? Math.min(flashcardIdx, flashcardDeck.length - 1) : 0;
  const currentFlashcard = flashcardDeck[safeFlashcardIdx];

  const shuffleFlashcards = () => {
    const indices = lang.vocabulary.map((_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = indices[i]!;
      indices[i] = indices[j]!;
      indices[j] = tmp;
    }
    setShuffledOrder(indices);
    setFlashcardIdx(0);
    setFlashcardFlipped(false);
  };

  const allLangs = Object.values(languagesData);

  return (
    <div className="min-h-screen bg-app font-sans text-ink pb-20">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-30 border-b border-border bg-background/85 backdrop-blur-md px-4 sm:px-8 py-3.5">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              to="/tillar"
              className="flex items-center gap-1.5 rounded-xl border border-border bg-card px-3 py-1.5 text-xs font-semibold shadow-sm transition hover:bg-accent cursor-pointer"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Barcha tillar</span>
            </Link>

            <Link
              to="/"
              className="hidden sm:flex items-center gap-1.5 rounded-xl border border-border bg-card px-3 py-1.5 text-xs font-semibold shadow-sm transition hover:bg-accent cursor-pointer"
            >
              <span>Bosh sahifa</span>
            </Link>

            <div className="h-4 w-px bg-border mx-1 hidden sm:block" />

            <div className="flex items-center gap-2">
              <img
                src={`https://flagcdn.com/w80/${lang.code}.png`}
                alt={lang.name}
                className="h-6 w-9 rounded object-cover shadow-sm border border-border"
              />
              <span className="font-extrabold text-sm sm:text-base text-foreground">
                {lang.name}
              </span>
              <span className="text-xs text-muted-foreground font-medium hidden md:inline">
                ({lang.nativeName})
              </span>
            </div>
          </div>

          {/* Quick switcher between all 9 languages */}
          <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto max-w-[50%] py-1">
            {allLangs.map((item) => (
              <Link
                key={item.id}
                to="/tillar/$lang"
                params={{ lang: item.id }}
                className={`flex items-center gap-1 rounded-lg px-2.5 py-1 text-xs font-bold transition whitespace-nowrap cursor-pointer ${
                  item.id === lang.id
                    ? "bg-indigo-600 text-white shadow-sm"
                    : "bg-muted hover:bg-muted/80 text-muted-foreground"
                }`}
              >
                <span>{item.name.replace(" tili", "")}</span>
              </Link>
            ))}
          </div>
        </div>
      </header>

      {/* Hero Banner for this specific language */}
      <section className="mx-auto max-w-7xl px-4 sm:px-8 pt-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-6 sm:p-8 text-white shadow-lg border border-white/10">
          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2.5">
                <span className="rounded-full bg-indigo-500/20 border border-indigo-400/30 px-3 py-0.5 text-xs font-semibold text-indigo-300">
                  {lang.level}
                </span>
                <span className="text-xs text-indigo-200/80">
                  Navoiy shahar 8-maktab o‘quv dasturi
                </span>
              </div>

              <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight">
                {lang.name} — {lang.nativeName}
              </h1>

              <p className="mt-2 text-sm sm:text-base text-slate-300 leading-relaxed">
                {lang.description}
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-semibold text-indigo-200">
                <span>📚 {lang.stats.lessons} ta dars</span>
                <span>🔤 {lang.stats.words}+ so‘z va ibora</span>
                <span>👥 {lang.stats.learners} o‘quvchi</span>
                <span>⭐ {lang.stats.rating} reyting</span>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center rounded-2xl bg-white/10 border border-white/15 p-4 sm:p-6 backdrop-blur-md text-center min-w-[200px]">
              <img
                src={logo}
                alt="Logo"
                className="h-12 w-12 drop-shadow-[0_0_12px_rgba(99,102,241,0.8)]"
              />
              <span className="mt-2 text-xs font-bold text-white">O‘zlashtirish darajasi</span>
              <div className="mt-2 h-2.5 w-full rounded-full bg-white/20">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-indigo-400 to-sky-300 transition-all duration-500"
                  style={{
                    width: `${Math.min(100, Object.keys(learnedWords).length * 15 + 25)}%`,
                  }}
                />
              </div>
              <span className="mt-1.5 text-[11px] text-indigo-200 font-semibold">
                {Object.keys(learnedWords).length} / {lang.vocabulary.length} so‘z o‘zlashtirildi
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs navigation */}
      <section className="mx-auto max-w-7xl px-4 sm:px-8 mt-6">
        <div className="flex border-b border-border gap-2 overflow-x-auto pb-1">
          <button
            onClick={() => setActiveTab("vocab")}
            className={`flex items-center gap-2 border-b-2 px-4 py-3 text-sm font-bold transition whitespace-nowrap cursor-pointer ${
              activeTab === "vocab"
                ? "border-indigo-600 text-indigo-600"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            <Languages className="h-4 w-4" />
            Lug‘at va Iboralar ({lang.vocabulary.length})
          </button>

          <button
            onClick={() => setActiveTab("lessons")}
            className={`flex items-center gap-2 border-b-2 px-4 py-3 text-sm font-bold transition whitespace-nowrap cursor-pointer ${
              activeTab === "lessons"
                ? "border-indigo-600 text-indigo-600"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            <BookOpen className="h-4 w-4" />
            Darslar ({lang.lessons.length})
          </button>

          <button
            onClick={() => setActiveTab("quiz")}
            className={`flex items-center gap-2 border-b-2 px-4 py-3 text-sm font-bold transition whitespace-nowrap cursor-pointer ${
              activeTab === "quiz"
                ? "border-indigo-600 text-indigo-600"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            <HelpCircle className="h-4 w-4" />
            Test va Mashqlar ({lang.quiz.length + (lang.tasks?.length ?? 0)})
          </button>

          <button
            onClick={() => setActiveTab("dialogue")}
            className={`flex items-center gap-2 border-b-2 px-4 py-3 text-sm font-bold transition whitespace-nowrap cursor-pointer ${
              activeTab === "dialogue"
                ? "border-indigo-600 text-indigo-600"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            <MessageSquare className="h-4 w-4" />
            Suhbat va Dialog
          </button>

          <button
            onClick={() => setActiveTab("alphabet")}
            className={`flex items-center gap-2 border-b-2 px-4 py-3 text-sm font-bold transition whitespace-nowrap cursor-pointer ${
              activeTab === "alphabet"
                ? "border-indigo-600 text-indigo-600"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            <Sparkles className="h-4 w-4" />
            Alifbo va Grammatika
            {lang.grammarRules && lang.grammarRules.length > 0
              ? ` (${lang.grammarRules.length})`
              : ""}
          </button>
        </div>
      </section>

      {/* Main Tab Content */}
      <main className="mx-auto max-w-7xl px-4 sm:px-8 mt-6">
        {/* TAB 1: VOCABULARY & FLASHCARDS */}
        {activeTab === "vocab" && (
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-extrabold text-foreground">
                  Asosiy so‘z, ibora va fleshcardlar
                </h2>
                <p className="text-xs text-muted-foreground">
                  Har bir so‘zni audio talaffuzi bilan eshiting, fleshcardda sinang va o‘rganilgan
                  sifatida belgilang.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                <div className="inline-flex rounded-xl border border-border bg-muted/60 p-1">
                  <button
                    type="button"
                    onClick={() => setVocabMode("grid")}
                    className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition cursor-pointer ${
                      vocabMode === "grid"
                        ? "bg-card text-indigo-600 shadow-xs"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <List className="h-3.5 w-3.5" />
                    <span>Ro‘yxat ({filteredVocabulary.length})</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setVocabMode("flashcards")}
                    className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition cursor-pointer ${
                      vocabMode === "flashcards"
                        ? "bg-card text-indigo-600 shadow-xs"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Layers className="h-3.5 w-3.5" />
                    <span>Fleshcardlar ({lang.vocabulary.length})</span>
                  </button>
                </div>

                {vocabMode === "grid" && (
                  <div className="w-full sm:w-64">
                    <label htmlFor={searchInputId} className="sr-only">
                      So‘z yoki tarjimani qidirish
                    </label>
                    <input
                      id={searchInputId}
                      type="text"
                      value={vocabSearch}
                      onChange={(e) => setVocabSearch(e.target.value)}
                      placeholder="So‘z yoki tarjimani qidirish..."
                      className="w-full rounded-xl border border-border bg-card px-3.5 py-2 text-xs font-medium outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
                    />
                  </div>
                )}
              </div>
            </div>

            {vocabMode === "flashcards" && currentFlashcard ? (
              <div className="max-w-2xl mx-auto space-y-5">
                <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-xs">
                  <div className="flex items-center gap-3 text-xs font-bold">
                    <span className="rounded-lg bg-indigo-50 px-2.5 py-1 text-indigo-700">
                      Karta {safeFlashcardIdx + 1} / {flashcardDeck.length}
                    </span>
                    <span className="text-muted-foreground">
                      O‘rganildi: {Object.values(learnedWords).filter(Boolean).length}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={shuffleFlashcards}
                      className="flex items-center gap-1.5 rounded-xl border border-border bg-muted/60 px-3 py-1.5 text-xs font-bold hover:bg-muted transition cursor-pointer"
                    >
                      <Shuffle className="h-3.5 w-3.5" />
                      <span>Aralashtirish</span>
                    </button>
                    {shuffledOrder && (
                      <button
                        type="button"
                        onClick={() => {
                          setShuffledOrder(null);
                          setFlashcardIdx(0);
                          setFlashcardFlipped(false);
                        }}
                        className="flex items-center gap-1 rounded-xl border border-border bg-card px-3 py-1.5 text-xs font-bold text-muted-foreground hover:text-foreground transition cursor-pointer"
                      >
                        <RotateCcw className="h-3.5 w-3.5" />
                        <span>Tartiblash</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Progress bar */}
                <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                  <div
                    className="h-full bg-indigo-600 transition-all duration-300"
                    style={{
                      width: `${((safeFlashcardIdx + 1) / flashcardDeck.length) * 100}%`,
                    }}
                  />
                </div>

                {/* Interactive Flashcard */}
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => setFlashcardFlipped((prev) => !prev)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setFlashcardFlipped((prev) => !prev);
                    }
                  }}
                  className={`relative min-h-[300px] rounded-3xl border p-6 sm:p-8 shadow-md transition-all duration-300 flex flex-col justify-between cursor-pointer select-none ${
                    flashcardFlipped
                      ? "border-indigo-400 bg-gradient-to-br from-indigo-50/90 via-card to-sky-50/70"
                      : "border-border bg-card hover:border-indigo-300"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-full bg-muted px-3 py-1 text-[11px] font-bold text-muted-foreground uppercase tracking-wider">
                      {currentFlashcard.category}
                    </span>
                    <span
                      className={`rounded-full px-3 py-1 text-[11px] font-bold ${
                        flashcardFlipped
                          ? "bg-indigo-600 text-white"
                          : "bg-indigo-50 text-indigo-700"
                      }`}
                    >
                      {flashcardFlipped ? "Tarjima va misol" : "Old tomon"}
                    </span>
                  </div>

                  {!flashcardFlipped ? (
                    <div className="my-auto py-6 text-center space-y-3">
                      <h3 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                        {currentFlashcard.word}
                      </h3>
                      <p className="font-mono text-sm font-semibold text-indigo-600">
                        [{currentFlashcard.pronunciation}]
                      </p>
                      <div className="pt-2 flex justify-center">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            playSpeech(currentFlashcard.word, lang.locale, currentFlashcard.id);
                          }}
                          className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-4 py-2 text-xs font-bold text-white shadow hover:bg-indigo-500 transition cursor-pointer"
                        >
                          <Volume2 className="h-4 w-4" />
                          <span>Talaffuzni tinglash</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="my-auto py-6 text-center space-y-4">
                      <div className="text-xs font-semibold text-muted-foreground">
                        {currentFlashcard.word} ({currentFlashcard.pronunciation})
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-indigo-950">
                        {currentFlashcard.translation}
                      </h3>
                      <div className="mx-auto max-w-md rounded-2xl border border-indigo-200/80 bg-white/80 p-3.5 text-sm text-foreground space-y-2">
                        <p className="italic">"{currentFlashcard.example}"</p>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            playSpeech(currentFlashcard.example, lang.locale);
                          }}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-800 cursor-pointer"
                        >
                          <Volume2 className="h-3.5 w-3.5" />
                          <span>Misolni eshitish</span>
                        </button>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between border-t border-border/60 pt-3 text-xs text-muted-foreground">
                    <span>
                      {flashcardFlipped
                        ? "So‘zga qaytish uchun kartani bosing"
                        : "Tarjimasini ko‘rish uchun kartani bosing"}
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleLearned(currentFlashcard.id);
                      }}
                      className={`flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold transition cursor-pointer ${
                        learnedWords[currentFlashcard.id]
                          ? "bg-emerald-600 text-white"
                          : "bg-muted text-muted-foreground hover:bg-emerald-100 hover:text-emerald-700"
                      }`}
                    >
                      <CheckCircle className="h-3.5 w-3.5" />
                      <span>{learnedWords[currentFlashcard.id] ? "O‘rganildi" : "O‘rgandim"}</span>
                    </button>
                  </div>
                </div>

                {/* Flashcard Controls */}
                <div className="flex items-center justify-between gap-3">
                  <button
                    type="button"
                    disabled={safeFlashcardIdx === 0}
                    onClick={() => {
                      setFlashcardIdx((p) => Math.max(0, p - 1));
                      setFlashcardFlipped(false);
                    }}
                    className="flex items-center gap-1.5 rounded-xl border border-border bg-card px-4 py-2.5 text-xs font-bold shadow-xs hover:bg-accent disabled:opacity-40 cursor-pointer"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    <span>Oldingi</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFlashcardFlipped((p) => !p)}
                    className="rounded-xl border border-indigo-200 bg-indigo-50 px-5 py-2.5 text-xs font-bold text-indigo-700 hover:bg-indigo-100 transition cursor-pointer"
                  >
                    {flashcardFlipped ? "So‘zni ko‘rsatish" : "Tarjimani ochish"}
                  </button>

                  <button
                    type="button"
                    disabled={safeFlashcardIdx >= flashcardDeck.length - 1}
                    onClick={() => {
                      setFlashcardIdx((p) => Math.min(flashcardDeck.length - 1, p + 1));
                      setFlashcardFlipped(false);
                    }}
                    className="flex items-center gap-1.5 rounded-xl bg-indigo-600 px-4 py-2.5 text-xs font-bold text-white shadow hover:bg-indigo-500 disabled:opacity-40 cursor-pointer"
                  >
                    <span>Keyingi</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredVocabulary.map((item) => {
                  const isLearned = !!learnedWords[item.id];
                  const isSpeaking = speakingWordId === item.id;

                  return (
                    <div
                      key={item.id}
                      className={`relative flex flex-col justify-between rounded-2xl border p-5 transition duration-200 shadow-sm ${
                        isLearned
                          ? "border-emerald-300 bg-emerald-50/40"
                          : "border-border bg-card hover:border-indigo-300"
                      }`}
                    >
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <span className="rounded-md bg-muted px-2 py-0.5 text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                            {item.category}
                          </span>

                          <button
                            onClick={() => toggleLearned(item.id)}
                            className={`flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-semibold transition cursor-pointer ${
                              isLearned
                                ? "bg-emerald-600 text-white"
                                : "bg-muted text-muted-foreground hover:bg-emerald-100 hover:text-emerald-700"
                            }`}
                          >
                            <CheckCircle className="h-3.5 w-3.5" />
                            <span>{isLearned ? "O‘rganildi" : "Belgilash"}</span>
                          </button>
                        </div>

                        <div className="mt-3">
                          <div className="flex items-center gap-2">
                            <h3 className="text-xl font-bold text-foreground tracking-tight">
                              {item.word}
                            </h3>
                            <button
                              onClick={() => playSpeech(item.word, lang.locale, item.id)}
                              aria-label={`${item.word} talaffuzini tinglash`}
                              className={`flex h-8 w-8 items-center justify-center rounded-full transition cursor-pointer ${
                                isSpeaking
                                  ? "bg-indigo-600 text-white animate-pulse"
                                  : "bg-indigo-50 text-indigo-600 hover:bg-indigo-100"
                              }`}
                              title="Talaffuzni tinglash"
                            >
                              <Volume2 className="h-4 w-4" />
                            </button>
                          </div>

                          <p className="font-mono text-xs text-indigo-600 font-medium mt-0.5">
                            {item.pronunciation}
                          </p>
                          <p className="mt-2 text-sm font-semibold text-foreground">
                            {item.translation}
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 border-t border-border/60 pt-3">
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span className="italic truncate pr-2">"{item.example}"</span>
                          <button
                            onClick={() => playSpeech(item.example, lang.locale)}
                            aria-label="Misol jumla talaffuzini tinglash"
                            className="text-indigo-600 hover:text-indigo-800 text-[11px] font-bold flex items-center gap-1 shrink-0 cursor-pointer"
                          >
                            <Volume2 className="h-3 w-3" />
                            Eshitish
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* TAB 2: LESSONS */}
        {activeTab === "lessons" && (
          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6">
            {/* Lessons Sidebar */}
            <div className="space-y-3">
              <h3 className="font-extrabold text-base text-foreground mb-3">Darslar ro‘yxati</h3>
              {lang.lessons.map((lesson, idx) => (
                <button
                  key={lesson.id}
                  onClick={() => setSelectedLessonIndex(idx)}
                  className={`flex w-full items-start gap-3 rounded-2xl border p-4 text-left transition cursor-pointer ${
                    selectedLessonIndex === idx
                      ? "border-indigo-600 bg-indigo-50/70 shadow-sm"
                      : "border-border bg-card hover:bg-muted/50"
                  }`}
                >
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-xs font-bold ${
                      selectedLessonIndex === idx
                        ? "bg-indigo-600 text-white"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground">{lesson.title}</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      ⏱ {lesson.duration} · {lesson.level}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* Selected Lesson Reader */}
            {lang.lessons[selectedLessonIndex] && (
              <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-sm space-y-6">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-indigo-100 text-indigo-700 px-3 py-0.5 text-xs font-bold">
                      {lang.lessons[selectedLessonIndex].level}
                    </span>
                    <span className="text-xs text-muted-foreground font-semibold">
                      Davomiyligi: {lang.lessons[selectedLessonIndex].duration}
                    </span>
                  </div>

                  <h2 className="mt-3 text-2xl font-extrabold text-foreground">
                    {lang.lessons[selectedLessonIndex].title}
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {lang.lessons[selectedLessonIndex].description}
                  </p>
                </div>

                <div className="space-y-6 border-t border-border pt-6">
                  {lang.lessons[selectedLessonIndex].topics.map((topic, i) => (
                    <div
                      key={i}
                      className="rounded-2xl bg-muted/40 border border-border/80 p-5 space-y-3"
                    >
                      <h4 className="text-base font-bold text-foreground flex items-center gap-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-white text-xs">
                          {i + 1}
                        </span>
                        {topic.title}
                      </h4>

                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {topic.explanation}
                      </p>

                      <div className="rounded-xl bg-card border border-border p-3.5 space-y-2">
                        <div className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
                          Namunaviy misollar:
                        </div>
                        {topic.examples.map((ex, exIdx) => (
                          <div
                            key={exIdx}
                            className="flex items-center justify-between text-sm font-medium text-foreground py-1 border-b border-border/40 last:border-0"
                          >
                            <span>{ex}</span>
                            <button
                              onClick={() => playSpeech(ex, lang.locale)}
                              className="text-indigo-600 hover:text-indigo-800 text-xs font-semibold flex items-center gap-1 cursor-pointer"
                            >
                              <Volume2 className="h-3.5 w-3.5" />
                              Tinglash
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <button
                    disabled={selectedLessonIndex === 0}
                    onClick={() => setSelectedLessonIndex((p) => p - 1)}
                    className="flex items-center gap-2 rounded-xl border border-border px-4 py-2 text-xs font-bold disabled:opacity-40 cursor-pointer"
                  >
                    <ArrowLeft className="h-4 w-4" /> Oldingi dars
                  </button>

                  <button
                    disabled={selectedLessonIndex === lang.lessons.length - 1}
                    onClick={() => setSelectedLessonIndex((p) => p + 1)}
                    className="flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2 text-xs font-bold text-white shadow hover:bg-indigo-500 disabled:opacity-40 cursor-pointer"
                  >
                    Keyingi dars <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 3: QUIZ & PRACTICE */}
        {activeTab === "quiz" && (
          <div className="max-w-3xl mx-auto rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-extrabold text-foreground flex items-center gap-2">
                  <Award className="h-6 w-6 text-indigo-600" />
                  {lang.name} bo‘yicha bilimingizni sinang
                </h2>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Savollarga to‘g‘ri javob bering va darslarni qanchalik o‘zlashtirganingizni
                  tekshiring.
                </p>
              </div>

              {quizSubmitted && (
                <button
                  onClick={resetQuiz}
                  className="flex items-center gap-1.5 rounded-xl border border-border bg-muted px-3 py-1.5 text-xs font-bold hover:bg-muted/80 cursor-pointer"
                >
                  <RotateCcw className="h-3.5 w-3.5" /> Qayta topshirish
                </button>
              )}
            </div>

            <div className="space-y-6">
              {lang.quiz.map((q, qIndex) => {
                const selectedOpt = quizAnswers[q.id];
                const isCorrect = selectedOpt === q.answer;

                return (
                  <div
                    key={q.id}
                    className="rounded-2xl bg-muted/40 border border-border p-5 space-y-3"
                  >
                    <h3 className="text-sm sm:text-base font-bold text-foreground">
                      {qIndex + 1}. {q.question}
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {q.options.map((opt, optIdx) => {
                        let optStyle = "border-border bg-card hover:bg-accent text-foreground";
                        if (selectedOpt === optIdx) {
                          optStyle = "border-indigo-600 bg-indigo-50 text-indigo-900 font-bold";
                        }
                        if (quizSubmitted) {
                          if (optIdx === q.answer) {
                            optStyle =
                              "border-emerald-500 bg-emerald-100 text-emerald-900 font-bold";
                          } else if (selectedOpt === optIdx) {
                            optStyle = "border-red-500 bg-red-100 text-red-900 line-through";
                          }
                        }

                        return (
                          <button
                            key={optIdx}
                            onClick={() => selectQuizAnswer(q.id, optIdx)}
                            className={`flex items-center justify-between rounded-xl border p-3 text-xs sm:text-sm text-left transition cursor-pointer ${optStyle}`}
                          >
                            <span>{opt}</span>
                            {quizSubmitted && optIdx === q.answer && (
                              <CheckCircle className="h-4 w-4 text-emerald-600" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {quizSubmitted && (
                      <div
                        className={`mt-2 rounded-xl p-3 text-xs leading-relaxed ${
                          isCorrect
                            ? "bg-emerald-50 text-emerald-800"
                            : "bg-amber-50 text-amber-800"
                        }`}
                      >
                        <span className="font-bold">
                          {isCorrect ? "To‘g‘ri! " : "Tushuntirish: "}
                        </span>
                        {q.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {!quizSubmitted ? (
              <button
                onClick={() => setQuizSubmitted(true)}
                disabled={Object.keys(quizAnswers).length !== lang.quiz.length}
                className="w-full rounded-2xl bg-indigo-600 hover:bg-indigo-500 py-3 text-sm font-bold text-white shadow-md transition disabled:opacity-50 cursor-pointer"
              >
                Natijani tekshirish ({Object.keys(quizAnswers).length} / {lang.quiz.length} javob
                berildi)
              </button>
            ) : (
              <div className="rounded-2xl bg-indigo-50 border border-indigo-200 p-6 text-center space-y-2">
                <span className="text-3xl">🎉</span>
                <h3 className="text-xl font-extrabold text-indigo-950">
                  Sizning natijangiz: {quizScore} / {lang.quiz.length}
                </h3>
                <p className="text-xs text-indigo-700">
                  {quizScore === lang.quiz.length
                    ? "A'lo darajada! Siz barcha savollarga to‘g‘ri javob berdingiz."
                    : "Yaxshi natija! Xatolaringizni ko‘rib chiqib, qayta topshirishingiz mumkin."}
                </p>
              </div>
            )}

            {lang.tasks && lang.tasks.length > 0 && (
              <div className="mt-8 border-t border-border pt-6 space-y-5">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-extrabold text-foreground flex items-center gap-2">
                      <PenLine className="h-5 w-5 text-indigo-600" />
                      Amaliy topshiriqlar ({lang.tasks.length})
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Bo‘sh o‘rinlarni to‘ldiring, jumlalarni tarjima qiling va javobingizni
                      tekshiring.
                    </p>
                  </div>
                  {Object.keys(taskChecked).length > 0 && (
                    <button
                      onClick={() => {
                        setTaskInputs({});
                        setTaskChecked({});
                        setTaskHints({});
                      }}
                      className="flex items-center gap-1.5 rounded-xl border border-border bg-muted px-3 py-1.5 text-xs font-bold hover:bg-muted/80 cursor-pointer"
                    >
                      <RotateCcw className="h-3.5 w-3.5" /> Tozalash
                    </button>
                  )}
                </div>

                <div className="space-y-4">
                  {lang.tasks.map((task, idx) => {
                    const userVal = taskInputs[task.id] ?? "";
                    const isChecked = !!taskChecked[task.id];
                    const normalizedUser = userVal.trim().toLowerCase().replace(/[’']/g, "'");
                    const validAnswers = [task.answer, ...(task.acceptableAnswers ?? [])].map((a) =>
                      a.trim().toLowerCase().replace(/[’']/g, "'"),
                    );
                    const isCorrect = isChecked && validAnswers.includes(normalizedUser);
                    const showHint = !!taskHints[task.id];

                    return (
                      <div
                        key={task.id}
                        className="rounded-2xl border border-border bg-muted/40 p-5 space-y-3"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="rounded-full bg-indigo-100 px-2.5 py-0.5 text-[11px] font-bold text-indigo-700">
                            {idx + 1}-topshiriq · {task.type}
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              setTaskHints((prev) => ({ ...prev, [task.id]: !prev[task.id] }))
                            }
                            className="flex items-center gap-1 text-xs font-semibold text-amber-700 hover:underline cursor-pointer"
                          >
                            <Lightbulb className="h-3.5 w-3.5" />
                            {showHint ? "Maslahatni yashirish" : "Maslahat"}
                          </button>
                        </div>

                        <p className="text-sm sm:text-base font-bold text-foreground">
                          {task.prompt}
                        </p>

                        {showHint && (
                          <p className="rounded-xl bg-amber-50 border border-amber-200 px-3 py-2 text-xs text-amber-900">
                            💡 {task.hint}
                          </p>
                        )}

                        <div className="flex flex-col sm:flex-row gap-2">
                          <input
                            type="text"
                            value={userVal}
                            onChange={(e) => {
                              setTaskInputs((prev) => ({ ...prev, [task.id]: e.target.value }));
                              if (isChecked) {
                                setTaskChecked((prev) => ({ ...prev, [task.id]: false }));
                              }
                            }}
                            onKeyDown={(e) => {
                              if (e.key === "Enter" && userVal.trim()) {
                                setTaskChecked((prev) => ({ ...prev, [task.id]: true }));
                              }
                            }}
                            placeholder="Javobingizni yozing..."
                            className="flex-1 rounded-xl border border-border bg-card px-3.5 py-2 text-sm font-medium outline-none focus:ring-2 focus:ring-indigo-500"
                          />
                          <button
                            type="button"
                            disabled={!userVal.trim()}
                            onClick={() => setTaskChecked((prev) => ({ ...prev, [task.id]: true }))}
                            className="rounded-xl bg-indigo-600 px-4 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-indigo-500 disabled:opacity-40 cursor-pointer"
                          >
                            Tekshirish
                          </button>
                        </div>

                        {isChecked && (
                          <div
                            className={`rounded-xl p-3 text-xs leading-relaxed ${
                              isCorrect
                                ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                                : "bg-red-50 text-red-800 border border-red-200"
                            }`}
                          >
                            <span className="font-bold">
                              {isCorrect
                                ? "To‘g‘ri! Barakalla! "
                                : `To‘g‘ri javob: "${task.answer}". `}
                            </span>
                            {task.explanation}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 4: DIALOGUE */}
        {activeTab === "dialogue" && (
          <div className="max-w-3xl mx-auto rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-sm space-y-6">
            <div>
              <h2 className="text-xl font-extrabold text-foreground flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-indigo-600" />
                Jonli muloqot va dialog amaliyoti
              </h2>
              <p className="text-xs text-muted-foreground mt-0.5">
                Maktab muhitida o‘qituvchi va o‘quvchining namunaviy suhbati.
              </p>
            </div>

            <div className="space-y-4">
              {lang.dialogue.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-border bg-muted/30 p-4 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs text-indigo-600">{item.speaker}</span>
                    <button
                      onClick={() => playSpeech(item.text, lang.locale)}
                      className="flex items-center gap-1 rounded-full bg-indigo-50 px-2.5 py-1 text-[11px] font-bold text-indigo-600 hover:bg-indigo-100 cursor-pointer"
                    >
                      <Volume2 className="h-3.5 w-3.5" /> Tinglash
                    </button>
                  </div>
                  <p className="text-base font-semibold text-foreground tracking-tight">
                    {item.text}
                  </p>
                  <p className="text-xs text-muted-foreground">Tarjimasi: {item.translation}</p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl bg-indigo-50 border border-indigo-200/60 p-4 text-xs text-indigo-900 space-y-1">
              <span className="font-bold">💡 Ustoz maslahati:</span>
              <p>
                Ushbu dialogdagi jumlalarni ovoz chiqarib takrorlang va o‘z nutqingizni
                shakllantiring.
              </p>
            </div>
          </div>
        )}

        {/* TAB 5: ALPHABET & RULES */}
        {activeTab === "alphabet" && (
          <div className="max-w-3xl mx-auto rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-sm space-y-6">
            <div>
              <h2 className="text-xl font-extrabold text-foreground flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-indigo-600" />
                {lang.alphabetInfo.title}
              </h2>
              <p className="text-xs text-muted-foreground mt-0.5">
                {lang.alphabetInfo.description}
              </p>
            </div>

            <div className="rounded-2xl bg-muted/40 border border-border p-6 text-center space-y-3">
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                Alifbo namunasi
              </span>
              <div className="font-mono text-base sm:text-xl font-bold text-indigo-600 tracking-wider break-words py-2">
                {lang.alphabetInfo.sample}
              </div>
              <button
                onClick={() => playSpeech(lang.alphabetInfo.sample, lang.locale)}
                className="inline-flex items-center gap-1.5 rounded-full bg-indigo-600 px-4 py-1.5 text-xs font-bold text-white shadow hover:bg-indigo-500 cursor-pointer"
              >
                <Volume2 className="h-4 w-4" /> Alifbo talaffuzini eshitish
              </button>
            </div>

            {lang.grammarRules && lang.grammarRules.length > 0 && (
              <div className="space-y-4 border-t border-border pt-6">
                <div>
                  <h3 className="font-extrabold text-base sm:text-lg text-foreground flex items-center gap-2">
                    <BookMarked className="h-5 w-5 text-indigo-600" />
                    Asosiy grammatika qoidalari ({lang.grammarRules.length})
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Har bir qoida formulasi, tushuntirishi va audio misollari bilan.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {lang.grammarRules.map((rule, rIdx) => (
                    <div
                      key={rIdx}
                      className="rounded-2xl border border-border bg-muted/30 p-5 space-y-3"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h4 className="text-sm sm:text-base font-extrabold text-foreground flex items-center gap-2">
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-white text-xs font-bold">
                            {rIdx + 1}
                          </span>
                          {rule.title}
                        </h4>
                        <span className="rounded-full bg-indigo-100 px-2.5 py-0.5 text-[11px] font-bold text-indigo-700">
                          {rule.level}
                        </span>
                      </div>

                      <div className="rounded-xl border border-indigo-200/80 bg-indigo-50/70 px-3.5 py-2 font-mono text-xs font-bold text-indigo-900">
                        {rule.formula}
                      </div>

                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {rule.explanation}
                      </p>

                      <div className="rounded-xl bg-card border border-border p-3 space-y-1.5">
                        <div className="text-[11px] font-bold text-indigo-600 uppercase tracking-wider">
                          Misollar:
                        </div>
                        {rule.examples.map((ex, exIdx) => (
                          <div
                            key={exIdx}
                            className="flex items-center justify-between gap-2 text-xs sm:text-sm font-medium text-foreground py-1 border-b border-border/40 last:border-0"
                          >
                            <span>{ex}</span>
                            <button
                              type="button"
                              onClick={() => playSpeech(ex, lang.locale)}
                              className="text-indigo-600 hover:text-indigo-800 text-xs font-semibold flex items-center gap-1 shrink-0 cursor-pointer"
                            >
                              <Volume2 className="h-3.5 w-3.5" />
                              Tinglash
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-3 border-t border-border pt-6">
              <h3 className="font-extrabold text-base text-foreground">
                Muvaffaqiyatli o‘rganish bo‘yicha tavsiyalar:
              </h3>
              <ul className="space-y-2">
                {lang.tips.map((tip, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 rounded-xl border border-border bg-card p-3 text-xs leading-relaxed"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-700 font-bold text-[11px]">
                      {idx + 1}
                    </span>
                    <span className="text-foreground font-medium">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
