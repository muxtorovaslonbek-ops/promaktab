import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import {
  ArrowLeft,
  BookOpen,
  HelpCircle,
  BookMarked,
  CheckCircle2,
  Clock,
  Sparkles,
  RotateCcw,
  Copy,
  Check,
  Calculator,
  FlaskConical,
  Atom,
  Dna,
  Landmark,
  Lightbulb,
  FileText,
  PenTool,
  Eye,
  EyeOff,
  Search,
  AlertCircle,
  Table2,
} from "lucide-react";
import { subjectsData, subjectsOrder, type SubjectData, type SubjectLesson } from "@/data/subjects";
import { SubjectLogo } from "@/components/SubjectLogo";
import { PeriodicTable } from "@/components/PeriodicTable";
import logo from "@/assets/logo.png";

export const Route = createFileRoute("/darslar/$subject")({
  head: ({ params }) => {
    const subject = subjectsData[params.subject];
    const title = subject
      ? `${subject.title} — Darslar — Navoiy shahar 8-maktab`
      : "Fan darslari — Navoiy shahar 8-maktab";
    return {
      meta: [
        { title },
        {
          name: "description",
          content: subject
            ? `${subject.title} (${subject.grades}): darslar, formulalar, amaliy mashqlar, testlar va atamalar lug‘ati.`
            : "Maktab darslari o‘quv platformasi",
        },
      ],
    };
  },
  component: SubjectDetailPage,
});

const subjectIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  matematika: Calculator,
  kimyo: FlaskConical,
  fizika: Atom,
  biologiya: Dna,
  tarix: Landmark,
};

const subjectThemes: Record<
  string,
  {
    primary: string;
    primaryBg: string;
    border: string;
    badgeBg: string;
    badgeText: string;
    heroGradient: string;
  }
> = {
  matematika: {
    primary: "bg-emerald-600 hover:bg-emerald-700 text-white",
    primaryBg: "bg-emerald-600 text-white",
    border: "border-emerald-200 dark:border-emerald-900/40",
    badgeBg: "bg-emerald-100 dark:bg-emerald-950/60",
    badgeText: "text-emerald-700 dark:text-emerald-300",
    heroGradient: "from-emerald-600/15 via-emerald-500/5 to-transparent",
  },
  kimyo: {
    primary: "bg-cyan-600 hover:bg-cyan-700 text-white",
    primaryBg: "bg-cyan-600 text-white",
    border: "border-cyan-200 dark:border-cyan-900/40",
    badgeBg: "bg-cyan-100 dark:bg-cyan-950/60",
    badgeText: "text-cyan-700 dark:text-cyan-300",
    heroGradient: "from-cyan-600/15 via-cyan-500/5 to-transparent",
  },
  fizika: {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    primaryBg: "bg-blue-600 text-white",
    border: "border-blue-200 dark:border-blue-900/40",
    badgeBg: "bg-blue-100 dark:bg-blue-950/60",
    badgeText: "text-blue-700 dark:text-blue-300",
    heroGradient: "from-blue-600/15 via-blue-500/5 to-transparent",
  },
  biologiya: {
    primary: "bg-teal-600 hover:bg-teal-700 text-white",
    primaryBg: "bg-teal-600 text-white",
    border: "border-teal-200 dark:border-teal-900/40",
    badgeBg: "bg-teal-100 dark:bg-teal-950/60",
    badgeText: "text-teal-700 dark:text-teal-300",
    heroGradient: "from-teal-600/15 via-teal-500/5 to-transparent",
  },
  tarix: {
    primary: "bg-amber-600 hover:bg-amber-700 text-white",
    primaryBg: "bg-amber-600 text-white",
    border: "border-amber-200 dark:border-amber-900/40",
    badgeBg: "bg-amber-100 dark:bg-amber-950/60",
    badgeText: "text-amber-700 dark:text-amber-300",
    heroGradient: "from-amber-600/15 via-amber-500/5 to-transparent",
  },
};

export function SubjectDetailPage() {
  const { subject: subjectParam } = Route.useParams();
  const subject: SubjectData = subjectsData[subjectParam] ?? subjectsData["matematika"]!;

  const [activeTab, setActiveTab] = useState<
    "lessons" | "periodic" | "references" | "exercises" | "quiz" | "glossary"
  >("lessons");
  const [selectedLessonIdx, setSelectedLessonIdx] = useState(0);
  const [completedLessons, setCompletedLessons] = useState<Record<string, boolean>>({});
  const [completedExercises, setCompletedExercises] = useState<Record<string, boolean>>({});
  const [revealedHints, setRevealedHints] = useState<Record<string, boolean>>({});
  const [revealedSolutions, setRevealedSolutions] = useState<Record<string, boolean>>({});
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [refSearch, setRefSearch] = useState("");
  const [glossarySearch, setGlossarySearch] = useState("");
  const copyTimerRef = useRef<number | null>(null);

  useEffect(() => {
    try {
      const rawLessons = localStorage.getItem("subject-lessons-v1");
      if (rawLessons) setCompletedLessons(JSON.parse(rawLessons) as Record<string, boolean>);
      const rawExercises = localStorage.getItem("subject-exercises-v1");
      if (rawExercises) setCompletedExercises(JSON.parse(rawExercises) as Record<string, boolean>);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    setSelectedLessonIdx(0);
    setQuizAnswers({});
    setCopiedId(null);
    setRefSearch("");
    setGlossarySearch("");
    setRevealedHints({});
    setRevealedSolutions({});
    setActiveTab((prev) => (prev === "periodic" && subject.id !== "kimyo" ? "lessons" : prev));
  }, [subject.id]);

  useEffect(() => {
    return () => {
      if (copyTimerRef.current !== null) {
        window.clearTimeout(copyTimerRef.current);
      }
    };
  }, []);

  const theme = subjectThemes[subject.id] ?? subjectThemes["matematika"]!;
  const Icon = subjectIcons[subject.id] ?? BookOpen;

  const safeLessonIdx =
    subject.lessons.length > 0 ? Math.min(selectedLessonIdx, subject.lessons.length - 1) : 0;
  const currentLesson: SubjectLesson | undefined =
    subject.lessons[safeLessonIdx] ?? subject.lessons[0];

  const toggleLessonComplete = (lessonId: string) => {
    setCompletedLessons((prev) => {
      const next = { ...prev, [lessonId]: !prev[lessonId] };
      try {
        localStorage.setItem("subject-lessons-v1", JSON.stringify(next));
      } catch {
        /* ignore */
      }
      return next;
    });
  };

  const toggleExerciseComplete = (exId: string) => {
    setCompletedExercises((prev) => {
      const next = { ...prev, [exId]: !prev[exId] };
      try {
        localStorage.setItem("subject-exercises-v1", JSON.stringify(next));
      } catch {
        /* ignore */
      }
      return next;
    });
  };

  const handleCopy = (text: string, id: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      void navigator.clipboard.writeText(text).catch(() => {});
      setCopiedId(id);
      if (copyTimerRef.current !== null) {
        window.clearTimeout(copyTimerRef.current);
      }
      copyTimerRef.current = window.setTimeout(() => setCopiedId(null), 1800);
    }
  };

  const completedLessonsCount = subject.lessons.filter((l) => completedLessons[l.id]).length;
  const completedExercisesCount = subject.exercises.filter((e) => completedExercises[e.id]).length;
  const quizCorrectCount = subject.quizzes.reduce(
    (acc, q) => (quizAnswers[q.id] === q.answer ? acc + 1 : acc),
    0,
  );

  const filteredRefs = subject.references.filter((r) => {
    const q = refSearch.trim().toLowerCase();
    return (
      !q ||
      r.title.toLowerCase().includes(q) ||
      r.expression.toLowerCase().includes(q) ||
      r.explanation.toLowerCase().includes(q)
    );
  });

  const filteredGlossary = subject.glossary.filter((g) => {
    const q = glossarySearch.trim().toLowerCase();
    return (
      !q ||
      g.term.toLowerCase().includes(q) ||
      g.definition.toLowerCase().includes(q) ||
      g.example.toLowerCase().includes(q)
    );
  });

  return (
    <div className="min-h-screen bg-app font-sans text-ink pb-20">
      {/* Top Header */}
      <header className="sticky top-0 z-30 border-b border-border bg-background/85 backdrop-blur-md px-4 sm:px-8 py-3.5">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Link
              to="/darslar"
              className="flex items-center gap-1.5 rounded-xl border border-border bg-card px-3 py-2 text-xs font-semibold shadow-xs transition hover:bg-accent cursor-pointer whitespace-nowrap shrink-0"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Darslar</span>
            </Link>

            <div className="flex items-center gap-2 pl-2 border-l border-border">
              <img
                src={logo}
                alt="Logo"
                className="h-8 w-8 drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]"
              />
              <span className="hidden sm:inline-block font-bold text-sm tracking-tight">
                {subject.title}
              </span>
            </div>
          </div>

          {/* Quick Subject Switchers */}
          <div className="flex items-center gap-1.5 overflow-x-auto py-1">
            {subjectsOrder.map((id) => {
              const item = subjectsData[id];
              if (!item) return null;
              const isCurrent = item.id === subject.id;
              const SIcon = subjectIcons[item.id] ?? BookOpen;
              return (
                <Link
                  key={item.id}
                  to="/darslar/$subject"
                  params={{ subject: item.id }}
                  className={`flex items-center gap-1.5 rounded-xl px-2.5 py-1.5 text-xs font-bold transition cursor-pointer whitespace-nowrap shrink-0 ${
                    isCurrent
                      ? `${theme.badgeBg} ${theme.badgeText} ring-1 ring-inset ring-current`
                      : "text-muted-foreground hover:bg-card hover:text-foreground"
                  }`}
                >
                  <SubjectLogo subjectId={item.id} className="h-4 w-4 shrink-0 rounded-sm" />
                  <span className="hidden md:inline">{item.shortName}</span>
                </Link>
              );
            })}

            <Link
              to="/ai-ustoz"
              className="ml-1 hidden sm:flex items-center gap-1.5 rounded-xl bg-brand px-3 py-1.5 text-xs font-bold text-white shadow-soft transition hover:scale-105 cursor-pointer whitespace-nowrap shrink-0"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>AI Ustoz</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 sm:px-8 pt-6 space-y-6">
        {/* Hero */}
        <section
          className={`relative overflow-hidden rounded-3xl border ${theme.border} bg-card bg-gradient-to-br ${theme.heroGradient} p-6 sm:p-8 shadow-sm`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-start gap-4">
                <SubjectLogo
                  subjectId={subject.id}
                  className="h-14 w-14 sm:h-16 sm:w-16 shrink-0 rounded-2xl shadow-md"
                />
                <div className="min-w-0">
                  <div className={`flex items-center gap-2 text-xs font-bold ${theme.badgeText}`}>
                    <Icon className="h-4 w-4" />
                    <span>{subject.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{subject.grades}</span>
                  </div>

                  <h1 className="mt-1 text-2xl sm:text-4xl font-extrabold tracking-tight">
                    {subject.title}
                  </h1>
                </div>
              </div>

              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl leading-relaxed">
                {subject.description}
              </p>

              <div className="rounded-xl border border-border/80 bg-background/60 p-3 text-xs italic text-foreground/80">
                “{subject.motto}”
              </div>
            </div>

            {/* Stats & Progress */}
            <div className="lg:col-span-4">
              <div className="rounded-2xl border border-border bg-card/90 backdrop-blur p-4 shadow-sm space-y-3 tabular-nums">
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Fan ko‘rsatkichlari
                </div>
                <div className="grid grid-cols-2 gap-2 text-center">
                  <div className="rounded-xl bg-background p-2.5 border border-border/60">
                    <div className="text-lg font-extrabold">{subject.lessons.length} ta</div>
                    <div className="text-[11px] text-muted-foreground">Dars mavzusi</div>
                  </div>
                  <div className="rounded-xl bg-background p-2.5 border border-border/60">
                    <div className="text-lg font-extrabold">{subject.references.length} ta</div>
                    <div className="text-[11px] text-muted-foreground">Asosiy qoida</div>
                  </div>
                  <div className="rounded-xl bg-background p-2.5 border border-border/60">
                    <div className="text-lg font-extrabold">{subject.exercises.length} ta</div>
                    <div className="text-[11px] text-muted-foreground">Amaliy mashq</div>
                  </div>
                  <div className="rounded-xl bg-background p-2.5 border border-border/60">
                    <div className="text-lg font-extrabold">{subject.quizzes.length} ta</div>
                    <div className="text-[11px] text-muted-foreground">Test savoli</div>
                  </div>
                </div>

                <div className="pt-1">
                  <div className="flex justify-between text-xs font-medium mb-1.5">
                    <span>O‘zlashtirish jarayoni</span>
                    <span className="font-bold">
                      {completedLessonsCount} / {subject.lessons.length} dars
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div
                      className={`h-full transition-all duration-500 ${theme.primaryBg}`}
                      style={{
                        width: `${
                          subject.lessons.length > 0
                            ? (completedLessonsCount / subject.lessons.length) * 100
                            : 0
                        }%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <div className="flex border-b border-border gap-2 overflow-x-auto pb-1">
          <button
            onClick={() => setActiveTab("lessons")}
            className={`flex items-center gap-2 border-b-2 px-4 py-2.5 text-xs sm:text-sm font-bold transition cursor-pointer whitespace-nowrap shrink-0 ${
              activeTab === "lessons"
                ? `border-current ${theme.badgeText}`
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            <BookOpen className="h-4 w-4" />
            <span>Darslar ({subject.lessons.length})</span>
          </button>

          {subject.id === "kimyo" && (
            <button
              onClick={() => setActiveTab("periodic")}
              className={`flex items-center gap-2 border-b-2 px-4 py-2.5 text-xs sm:text-sm font-bold transition cursor-pointer whitespace-nowrap shrink-0 ${
                activeTab === "periodic"
                  ? `border-current ${theme.badgeText}`
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              <Table2 className="h-4 w-4" />
              <span>Davriy jadval (118)</span>
            </button>
          )}

          <button
            onClick={() => setActiveTab("references")}
            className={`flex items-center gap-2 border-b-2 px-4 py-2.5 text-xs sm:text-sm font-bold transition cursor-pointer whitespace-nowrap shrink-0 ${
              activeTab === "references"
                ? `border-current ${theme.badgeText}`
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            <FileText className="h-4 w-4" />
            <span>
              {subject.referenceTabLabel} ({subject.references.length})
            </span>
          </button>

          <button
            onClick={() => setActiveTab("exercises")}
            className={`flex items-center gap-2 border-b-2 px-4 py-2.5 text-xs sm:text-sm font-bold transition cursor-pointer whitespace-nowrap shrink-0 ${
              activeTab === "exercises"
                ? `border-current ${theme.badgeText}`
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            <PenTool className="h-4 w-4" />
            <span>Amaliy Mashqlar ({subject.exercises.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("quiz")}
            className={`flex items-center gap-2 border-b-2 px-4 py-2.5 text-xs sm:text-sm font-bold transition cursor-pointer whitespace-nowrap shrink-0 ${
              activeTab === "quiz"
                ? `border-current ${theme.badgeText}`
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            <HelpCircle className="h-4 w-4" />
            <span>Test ({subject.quizzes.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("glossary")}
            className={`flex items-center gap-2 border-b-2 px-4 py-2.5 text-xs sm:text-sm font-bold transition cursor-pointer whitespace-nowrap shrink-0 ${
              activeTab === "glossary"
                ? `border-current ${theme.badgeText}`
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            <BookMarked className="h-4 w-4" />
            <span>Lug‘at ({subject.glossary.length})</span>
          </button>
        </div>

        {/* Tab 1: Lessons */}
        {activeTab === "lessons" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left Lesson Selector */}
            <div className="lg:col-span-4 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Mavzular ro‘yxati
              </h3>
              <div className="space-y-2">
                {subject.lessons.map((lesson, idx) => {
                  const isSelected = safeLessonIdx === idx;
                  const isDone = completedLessons[lesson.id];

                  return (
                    <button
                      key={lesson.id}
                      onClick={() => setSelectedLessonIdx(idx)}
                      className={`w-full text-left rounded-2xl border p-4 transition-all duration-200 cursor-pointer flex items-start justify-between gap-3 ${
                        isSelected
                          ? `${theme.border} bg-card shadow-md ring-1 ring-current ${theme.badgeText}`
                          : "border-border bg-card/60 hover:bg-card hover:border-border/80"
                      }`}
                    >
                      <div className="space-y-1 min-w-0">
                        <div className="flex items-center gap-1.5 text-[11px] font-semibold text-muted-foreground">
                          <span>{idx + 1}-dars</span>
                          <span aria-hidden="true">·</span>
                          <span>{lesson.grade}</span>
                          <span aria-hidden="true">·</span>
                          <span>{lesson.duration}</span>
                        </div>
                        <h4 className="text-sm font-bold line-clamp-1">{lesson.title}</h4>
                        <p className="text-xs text-muted-foreground line-clamp-1">
                          {lesson.summary}
                        </p>
                      </div>

                      <div className="pt-1 shrink-0">
                        {isDone ? (
                          <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                        ) : (
                          <div className="h-5 w-5 rounded-full border-2 border-muted-foreground/30" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Lesson Content */}
            <div className="lg:col-span-8">
              {currentLesson ? (
                <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-sm space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-muted-foreground">
                        <span>{currentLesson.grade}</span>
                        <span aria-hidden="true">·</span>
                        <span>{currentLesson.level}</span>
                        <span aria-hidden="true">·</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          {currentLesson.duration}
                        </span>
                      </div>
                      <h2 className="mt-2 text-xl sm:text-2xl font-extrabold tracking-tight">
                        {currentLesson.title}
                      </h2>
                    </div>

                    <button
                      onClick={() => toggleLessonComplete(currentLesson.id)}
                      className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition cursor-pointer shrink-0 whitespace-nowrap ${
                        completedLessons[currentLesson.id]
                          ? "bg-emerald-600 text-white"
                          : "border border-border bg-background hover:bg-accent text-foreground"
                      }`}
                    >
                      <CheckCircle2 className="h-4 w-4" />
                      <span>
                        {completedLessons[currentLesson.id]
                          ? "O‘zlashtirildi"
                          : "O‘zlashtirdim deb belgilash"}
                      </span>
                    </button>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {currentLesson.summary}
                  </p>

                  <div className="space-y-6">
                    {currentLesson.sections.map((section, sIdx) => (
                      <div
                        key={sIdx}
                        className="rounded-2xl border border-border/80 bg-background/50 p-5 space-y-3"
                      >
                        <h4 className="text-base font-bold">
                          {String(sIdx + 1).padStart(2, "0")}. {section.heading}
                        </h4>

                        <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed">
                          {section.content}
                        </p>

                        {section.formulaOrRule && (
                          <div className="relative rounded-xl bg-slate-950 p-4 font-mono text-xs sm:text-sm text-slate-100 overflow-x-auto">
                            <button
                              onClick={() => handleCopy(section.formulaOrRule!, `sec-${sIdx}`)}
                              className="absolute top-2.5 right-2.5 flex items-center gap-1 rounded-lg bg-slate-800 px-2.5 py-1 text-[11px] text-slate-200 hover:bg-slate-700 transition cursor-pointer"
                            >
                              {copiedId === `sec-${sIdx}` ? (
                                <>
                                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                                  <span>Nusxalandi</span>
                                </>
                              ) : (
                                <>
                                  <Copy className="h-3.5 w-3.5" />
                                  <span>Nusxa olish</span>
                                </>
                              )}
                            </button>
                            <div className="pr-24 whitespace-pre-wrap">{section.formulaOrRule}</div>
                          </div>
                        )}

                        <div className="rounded-xl border border-indigo-200/70 bg-indigo-50/60 dark:bg-indigo-950/20 dark:border-indigo-900/40 p-3.5 text-xs sm:text-sm leading-relaxed">
                          <span className="font-bold text-indigo-700 dark:text-indigo-300">
                            Amaliy misol:{" "}
                          </span>
                          <span className="text-foreground/90">{section.example}</span>
                        </div>

                        {section.keyTakeaways.length > 0 && (
                          <div className="rounded-xl border border-amber-200/60 bg-amber-50/50 dark:bg-amber-950/20 dark:border-amber-900/30 p-3.5 space-y-1.5">
                            <div className="flex items-center gap-1.5 text-xs font-bold text-amber-700 dark:text-amber-400">
                              <Lightbulb className="h-3.5 w-3.5" />
                              <span>Eslab qoling:</span>
                            </div>
                            <ul className="space-y-1 text-xs text-foreground/85 list-disc list-inside">
                              {section.keyTakeaways.map((tip, tipIdx) => (
                                <li key={tipIdx}>{tip}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Prev / Next Lesson */}
                  <div className="flex items-center justify-between border-t border-border pt-4">
                    <button
                      disabled={safeLessonIdx === 0}
                      onClick={() => setSelectedLessonIdx((prev) => Math.max(0, prev - 1))}
                      className="rounded-xl border border-border bg-card px-4 py-2 text-xs font-bold transition hover:bg-accent disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                    >
                      ← Oldingi dars
                    </button>

                    <button
                      disabled={safeLessonIdx === subject.lessons.length - 1}
                      onClick={() =>
                        setSelectedLessonIdx((prev) =>
                          Math.min(subject.lessons.length - 1, prev + 1),
                        )
                      }
                      className={`rounded-xl px-4 py-2 text-xs font-bold transition disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer ${theme.primary}`}
                    >
                      Keyingi dars →
                    </button>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        )}

        {/* Tab: Periodic Table (Kimyo) */}
        {activeTab === "periodic" && subject.id === "kimyo" && <PeriodicTable />}

        {/* Tab 2: References (Formulas / Laws / Dates) */}
        {activeTab === "references" && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-4">
              <div>
                <h3 className="text-xl font-extrabold tracking-tight">
                  {subject.title}: {subject.referenceTabLabel}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Eng muhim qonunlar, formulalar va tayanch ma’lumotlar to‘plami.
                </p>
              </div>
              <div className="relative w-full sm:w-72">
                <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  value={refSearch}
                  onChange={(e) => setRefSearch(e.target.value)}
                  placeholder="Qoida yoki formulani qidirish..."
                  className="w-full rounded-xl border border-border bg-card pl-10 pr-4 py-2 text-xs outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredRefs.map((ref) => (
                <div
                  key={ref.id}
                  className="rounded-2xl border border-border bg-card p-5 shadow-xs space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-base font-extrabold">{ref.title}</h4>
                      <button
                        onClick={() => handleCopy(ref.expression, ref.id)}
                        className="flex items-center gap-1 rounded-lg border border-border bg-background px-2.5 py-1 text-[11px] font-semibold hover:bg-accent transition cursor-pointer shrink-0"
                      >
                        {copiedId === ref.id ? (
                          <>
                            <Check className="h-3 w-3 text-emerald-600" />
                            <span>Nusxalandi</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-3 w-3" />
                            <span>Nusxa</span>
                          </>
                        )}
                      </button>
                    </div>
                    <div className="rounded-xl bg-slate-950 px-3.5 py-2.5 font-mono text-xs sm:text-sm text-slate-100 overflow-x-auto">
                      {ref.expression}
                    </div>
                    <p className="text-xs sm:text-sm text-foreground/85 leading-relaxed">
                      {ref.explanation}
                    </p>
                  </div>
                  <div className="text-[11px] text-muted-foreground border-t border-border/60 pt-2">
                    <span className="font-bold text-foreground">Qo‘llanilishi: </span>
                    {ref.usage}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Practice Exercises */}
        {activeTab === "exercises" && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-4">
              <div>
                <h3 className="text-xl font-extrabold tracking-tight">Amaliy Mashqlar</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Avval masalani mustaqil yechishga urinib ko‘ring, kerak bo‘lsa maslahat yoki
                  to‘liq yechimni oching.
                </p>
              </div>
              <div className="text-xs font-bold rounded-xl border border-border bg-card px-3.5 py-2 tabular-nums">
                Bajarildi: {completedExercisesCount} / {subject.exercises.length}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {subject.exercises.map((ex, idx) => {
                const isDone = Boolean(completedExercises[ex.id]);
                const showHint = Boolean(revealedHints[ex.id]);
                const showSolution = Boolean(revealedSolutions[ex.id]);

                return (
                  <div
                    key={ex.id}
                    className={`rounded-3xl border bg-card p-6 shadow-sm flex flex-col justify-between space-y-4 ${
                      isDone ? "border-emerald-400/70" : "border-border"
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-bold text-muted-foreground">
                          {idx + 1}-topshiriq · {ex.level}
                        </span>
                        <button
                          onClick={() => toggleExerciseComplete(ex.id)}
                          className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-bold transition cursor-pointer ${
                            isDone
                              ? "bg-emerald-600 text-white"
                              : "border border-border bg-background hover:bg-accent"
                          }`}
                        >
                          <CheckCircle2 className="h-3.5 w-3.5" />
                          <span>{isDone ? "Yechildi" : "Yechildi deb belgilash"}</span>
                        </button>
                      </div>

                      <h4 className="text-lg font-extrabold">{ex.title}</h4>
                      <p className="text-sm text-foreground/90 leading-relaxed">{ex.question}</p>

                      {showHint && (
                        <div className="rounded-xl border border-amber-200 bg-amber-50/70 dark:bg-amber-950/20 dark:border-amber-900/40 p-3 text-xs leading-relaxed">
                          <span className="font-bold text-amber-700 dark:text-amber-300">
                            Maslahat:{" "}
                          </span>
                          {ex.hint}
                        </div>
                      )}

                      {showSolution && (
                        <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 dark:bg-emerald-950/20 dark:border-emerald-900/40 p-3.5 text-xs sm:text-sm leading-relaxed">
                          <span className="font-bold text-emerald-700 dark:text-emerald-300">
                            To‘liq yechim:{" "}
                          </span>
                          {ex.solution}
                        </div>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2 border-t border-border/60">
                      <button
                        onClick={() =>
                          setRevealedHints((prev) => ({ ...prev, [ex.id]: !prev[ex.id] }))
                        }
                        className="flex items-center gap-1.5 rounded-xl border border-border bg-background px-3 py-2 text-xs font-bold hover:bg-accent transition cursor-pointer"
                      >
                        <Lightbulb className="h-3.5 w-3.5 text-amber-500" />
                        <span>{showHint ? "Maslahatni yopish" : "Maslahat ko‘rish"}</span>
                      </button>

                      <button
                        onClick={() =>
                          setRevealedSolutions((prev) => ({
                            ...prev,
                            [ex.id]: !prev[ex.id],
                          }))
                        }
                        className={`flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-bold transition cursor-pointer ${theme.primary}`}
                      >
                        {showSolution ? (
                          <>
                            <EyeOff className="h-3.5 w-3.5" />
                            <span>Yechimni yashirish</span>
                          </>
                        ) : (
                          <>
                            <Eye className="h-3.5 w-3.5" />
                            <span>Yechimni ko‘rish</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 4: Quiz */}
        {activeTab === "quiz" && (
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-4">
              <div>
                <h3 className="text-xl font-extrabold tracking-tight">
                  {subject.title} Sinov Testi
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Bilimlaringizni sinab ko‘ring va har bir savol ortidagi izohni o‘qing.
                </p>
              </div>

              <div className="flex items-center gap-3 tabular-nums">
                <div className="rounded-xl border border-border bg-card px-3 py-1.5 text-xs font-bold">
                  Natija:{" "}
                  <span className="text-emerald-600 font-extrabold">{quizCorrectCount}</span> /{" "}
                  {subject.quizzes.length}
                </div>
                <button
                  onClick={() => setQuizAnswers({})}
                  className="flex items-center gap-1.5 rounded-xl border border-border bg-card px-3 py-1.5 text-xs font-bold hover:bg-accent transition cursor-pointer"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  <span>Qayta boshlash</span>
                </button>
              </div>
            </div>

            <div className="space-y-5">
              {subject.quizzes.map((quiz, qIdx) => {
                const userSelected = quizAnswers[quiz.id];
                const hasAnswered = userSelected !== undefined;
                const isCorrect = userSelected === quiz.answer;

                return (
                  <div
                    key={quiz.id}
                    className="rounded-3xl border border-border bg-card p-6 shadow-sm space-y-4"
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-xl text-xs font-bold tabular-nums ${theme.primaryBg}`}
                      >
                        {qIdx + 1}
                      </span>
                      <h4 className="text-sm sm:text-base font-bold text-foreground">
                        {quiz.question}
                      </h4>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                      {quiz.options.map((opt, optIdx) => {
                        let btnStyle =
                          "border-border bg-background hover:bg-accent text-foreground";
                        if (hasAnswered) {
                          if (optIdx === quiz.answer) {
                            btnStyle =
                              "border-emerald-500 bg-emerald-500/10 text-emerald-700 font-bold dark:text-emerald-300";
                          } else if (userSelected === optIdx) {
                            btnStyle =
                              "border-red-500 bg-red-500/10 text-red-700 font-bold dark:text-red-300";
                          } else {
                            btnStyle = "opacity-55 border-border bg-background";
                          }
                        }

                        return (
                          <button
                            key={optIdx}
                            onClick={() =>
                              setQuizAnswers((prev) => ({ ...prev, [quiz.id]: optIdx }))
                            }
                            className={`rounded-2xl border p-3 text-left text-xs sm:text-sm transition-all duration-200 cursor-pointer flex items-center justify-between gap-2 ${btnStyle}`}
                          >
                            <span>{opt}</span>
                            {hasAnswered && optIdx === quiz.answer && (
                              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                            )}
                            {hasAnswered && userSelected === optIdx && optIdx !== quiz.answer && (
                              <AlertCircle className="h-4 w-4 text-red-600 shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {hasAnswered && (
                      <div
                        className={`rounded-2xl p-3 text-xs leading-relaxed ${
                          isCorrect
                            ? "bg-emerald-50 text-emerald-800 border border-emerald-200 dark:bg-emerald-950/30 dark:border-emerald-900 dark:text-emerald-200"
                            : "bg-amber-50 text-amber-800 border border-amber-200 dark:bg-amber-950/30 dark:border-amber-900 dark:text-amber-200"
                        }`}
                      >
                        <span className="font-bold">
                          {isCorrect ? "To‘g‘ri javob! " : "Noto‘g‘ri tanlov — Izoh: "}
                        </span>
                        {quiz.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 5: Glossary */}
        {activeTab === "glossary" && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-4">
              <div>
                <h3 className="text-xl font-extrabold tracking-tight">
                  {subject.title} Atamalar Lug‘ati
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Fan bo‘yicha muhim tushunchalar, ta’riflar va hayotiy misollar.
                </p>
              </div>
              <div className="relative w-full sm:w-72">
                <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  value={glossarySearch}
                  onChange={(e) => setGlossarySearch(e.target.value)}
                  placeholder="Atamani qidirish..."
                  className="w-full rounded-xl border border-border bg-card pl-10 pr-4 py-2 text-xs outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredGlossary.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-border bg-card p-5 shadow-xs space-y-2.5 flex flex-col justify-between"
                >
                  <div className="space-y-1.5">
                    <h4 className="text-base font-extrabold">{item.term}</h4>
                    <p className="text-xs text-foreground/85 leading-relaxed">{item.definition}</p>
                  </div>
                  <div className="rounded-xl bg-background/80 border border-border/60 p-2.5 text-[11px] text-muted-foreground">
                    <span className="font-bold text-foreground">Misol: </span>
                    {item.example}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* AI Ustoz CTA */}
        <section className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-bold">
              <Sparkles className="h-5 w-5 text-brand" />
              <span>{subject.title} bo‘yicha qo‘shimcha tushuntirish kerakmi?</span>
            </div>
            <p className="text-xs text-muted-foreground max-w-xl">
              AI Ustoz bilan suhbatlashib, murakkab misollarni birga yeching yoki qo‘shimcha test
              topshiriqlarini oling.
            </p>
          </div>
          <Link
            to="/ai-ustoz"
            className="shrink-0 flex items-center gap-2 rounded-xl bg-brand px-5 py-3 text-xs sm:text-sm font-bold text-white shadow-soft transition hover:scale-105 cursor-pointer whitespace-nowrap"
          >
            <Sparkles className="h-4 w-4" />
            <span>AI Ustoz bilan suhbatlashish</span>
          </Link>
        </section>
      </main>
    </div>
  );
}
