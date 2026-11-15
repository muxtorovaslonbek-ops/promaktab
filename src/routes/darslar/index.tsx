import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  ArrowLeft,
  ChevronRight,
  Sparkles,
  BookOpen,
  Award,
  Search,
  CheckCircle2,
  Clock,
  HelpCircle,
  GraduationCap,
  FileText,
} from "lucide-react";
import { subjectsData, subjectsOrder } from "@/data/subjects";
import { SubjectLogo } from "@/components/SubjectLogo";
import logo from "@/assets/logo.png";

export const Route = createFileRoute("/darslar/")({
  head: () => ({
    meta: [
      { title: "Darslar — Navoiy shahar 8-maktab" },
      {
        name: "description",
        content:
          "Matematika, Kimyo, Fizika, Biologiya va Tarix fanlaridan to‘liq darslar, formulalar, amaliy mashqlar, testlar va lug‘at.",
      },
    ],
  }),
  component: DarslarIndex,
});

const subjectThemes: Record<
  string,
  { bg: string; border: string; glow: string; text: string; button: string }
> = {
  matematika: {
    bg: "from-emerald-500/10 via-emerald-500/5 to-transparent",
    border: "border-emerald-200 dark:border-emerald-900/40",
    glow: "bg-emerald-500/10 text-emerald-600",
    text: "text-emerald-600",
    button: "bg-emerald-600 hover:bg-emerald-700 text-white",
  },
  kimyo: {
    bg: "from-cyan-500/10 via-cyan-500/5 to-transparent",
    border: "border-cyan-200 dark:border-cyan-900/40",
    glow: "bg-cyan-500/10 text-cyan-600",
    text: "text-cyan-600",
    button: "bg-cyan-600 hover:bg-cyan-700 text-white",
  },
  fizika: {
    bg: "from-blue-500/10 via-blue-500/5 to-transparent",
    border: "border-blue-200 dark:border-blue-900/40",
    glow: "bg-blue-500/10 text-blue-600",
    text: "text-blue-600",
    button: "bg-blue-600 hover:bg-blue-700 text-white",
  },
  biologiya: {
    bg: "from-teal-500/10 via-teal-500/5 to-transparent",
    border: "border-teal-200 dark:border-teal-900/40",
    glow: "bg-teal-500/10 text-teal-600",
    text: "text-teal-600",
    button: "bg-teal-600 hover:bg-teal-700 text-white",
  },
  tarix: {
    bg: "from-amber-500/10 via-amber-500/5 to-transparent",
    border: "border-amber-200 dark:border-amber-900/40",
    glow: "bg-amber-500/10 text-amber-600",
    text: "text-amber-600",
    button: "bg-amber-600 hover:bg-amber-700 text-white",
  },
};

export function DarslarIndex() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [completedLessons, setCompletedLessons] = useState<Record<string, boolean>>({});

  useEffect(() => {
    try {
      const raw = localStorage.getItem("subject-lessons-v1");
      if (raw) {
        setCompletedLessons(JSON.parse(raw) as Record<string, boolean>);
      }
    } catch {
      /* ignore */
    }
  }, []);

  const subjectsList = subjectsOrder
    .map((id) => subjectsData[id])
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  const filteredSubjects = subjectsList.filter((subject) => {
    const q = search.trim().toLowerCase();
    const matchesSearch =
      !q ||
      subject.title.toLowerCase().includes(q) ||
      subject.category.toLowerCase().includes(q) ||
      subject.description.toLowerCase().includes(q) ||
      subject.lessons.some((l) => l.title.toLowerCase().includes(q));

    if (!matchesSearch) return false;
    if (selectedCategory === "all") return true;
    return subject.category === selectedCategory;
  });

  const totalLessons = subjectsList.reduce((acc, s) => acc + s.lessons.length, 0);
  const totalRefs = subjectsList.reduce((acc, s) => acc + s.references.length, 0);
  const totalQuizzes = subjectsList.reduce((acc, s) => acc + s.quizzes.length, 0);
  const totalExercises = subjectsList.reduce((acc, s) => acc + s.exercises.length, 0);

  return (
    <div className="min-h-screen bg-app font-sans text-ink pb-16">
      {/* Top Header */}
      <header className="sticky top-0 z-30 border-b border-border bg-background/85 backdrop-blur-md px-4 sm:px-8 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-2 text-sm font-semibold shadow-sm transition hover:bg-accent cursor-pointer whitespace-nowrap shrink-0"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Bosh sahifa</span>
            </Link>

            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Navoiy shahar 8-maktab"
                className="h-9 w-9 drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]"
              />
              <div className="hidden sm:block">
                <h1 className="text-sm font-bold tracking-tight">Navoiy shahar 8-maktab</h1>
                <p className="text-xs text-muted-foreground">Asosiy Fanlar va Darslar Markazi</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/tillar"
              className="hidden md:flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-2 text-xs font-semibold shadow-sm transition hover:bg-accent cursor-pointer whitespace-nowrap"
            >
              <BookOpen className="h-3.5 w-3.5 text-indigo-500" />
              <span>Tillar</span>
            </Link>
            <Link
              to="/togaraklar"
              className="hidden md:flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-2 text-xs font-semibold shadow-sm transition hover:bg-accent cursor-pointer whitespace-nowrap"
            >
              <Award className="h-3.5 w-3.5 text-orange-500" />
              <span>To‘garaklar</span>
            </Link>
            <Link
              to="/ai-ustoz"
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-3.5 py-2 text-xs font-bold text-white shadow-md transition hover:scale-105 cursor-pointer whitespace-nowrap shrink-0"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>AI Ustoz</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="mx-auto max-w-7xl px-4 sm:px-8 pt-8 space-y-8">
        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-indigo-900/10 via-card to-background p-6 sm:p-10 shadow-lg">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-indigo-600">
              <GraduationCap className="h-4 w-4" />
              <span>5–11-sinflar · Umumta’lim fanlari · Nazariya va amaliyot</span>
            </div>
            <h2 className="max-w-3xl text-3xl sm:text-4xl font-extrabold tracking-tight text-balance">
              Maktab Darslari — Chuqur Bilim va Mustahkam Tayyorgarlik!
            </h2>
            <p className="max-w-2xl text-sm sm:text-base text-muted-foreground leading-relaxed">
              Matematika, Kimyo, Fizika, Biologiya va Tarix fanlaridan tizimli mavzular, asosiy
              formulalar va qonunlar, yechimli amaliy mashqlar, test sinovlari hamda atamalar
              lug‘ati bir joyda jamlangan.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 tabular-nums">
              <div className="rounded-2xl border border-border bg-background/60 p-3 shadow-xs">
                <div className="flex items-center gap-2 text-indigo-600 text-xs font-semibold">
                  <BookOpen className="h-4 w-4" />
                  <span>Mavzular</span>
                </div>
                <div className="mt-1 text-xl font-bold">{totalLessons} ta dars</div>
                <div className="text-[11px] text-muted-foreground">5 ta asosiy fan</div>
              </div>

              <div className="rounded-2xl border border-border bg-background/60 p-3 shadow-xs">
                <div className="flex items-center gap-2 text-cyan-600 text-xs font-semibold">
                  <FileText className="h-4 w-4" />
                  <span>Ma’lumotnoma</span>
                </div>
                <div className="mt-1 text-xl font-bold">{totalRefs}+ qoida</div>
                <div className="text-[11px] text-muted-foreground">Formula, qonun va sana</div>
              </div>

              <div className="rounded-2xl border border-border bg-background/60 p-3 shadow-xs">
                <div className="flex items-center gap-2 text-emerald-600 text-xs font-semibold">
                  <HelpCircle className="h-4 w-4" />
                  <span>Sinov testlari</span>
                </div>
                <div className="mt-1 text-xl font-bold">{totalQuizzes} ta savol</div>
                <div className="text-[11px] text-muted-foreground">Tushuntirishlar bilan</div>
              </div>

              <div className="rounded-2xl border border-border bg-background/60 p-3 shadow-xs">
                <div className="flex items-center gap-2 text-amber-600 text-xs font-semibold">
                  <Clock className="h-4 w-4" />
                  <span>Mashqlar</span>
                </div>
                <div className="mt-1 text-xl font-bold">{totalExercises} ta masala</div>
                <div className="text-[11px] text-muted-foreground">Yechim va maslahatlar</div>
              </div>
            </div>
          </div>
        </section>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            {[
              { id: "all", label: `Barcha fanlar (${subjectsList.length})` },
              { id: "Aniq fanlar", label: "Aniq fanlar" },
              { id: "Tabiiy fanlar", label: "Tabiiy fanlar" },
              { id: "Ijtimoiy fanlar", label: "Ijtimoiy fanlar" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`rounded-xl px-4 py-2 text-xs font-bold transition cursor-pointer whitespace-nowrap shrink-0 ${
                  selectedCategory === cat.id
                    ? "bg-brand text-white shadow-sm"
                    : "border border-border bg-card text-muted-foreground hover:bg-accent"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Fan yoki dars mavzusini qidirish..."
              className="w-full rounded-xl border border-border bg-card pl-10 pr-4 py-2 text-xs outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition"
            />
          </div>
        </div>

        {/* Subjects Grid */}
        {filteredSubjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSubjects.map((subject) => {
              const style = subjectThemes[subject.id] ?? subjectThemes["matematika"]!;
              const doneCount = subject.lessons.filter((l) => completedLessons[l.id]).length;

              return (
                <div
                  key={subject.id}
                  className={`group relative overflow-hidden rounded-3xl border ${style.border} bg-card bg-gradient-to-br ${style.bg} p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between`}
                >
                  <div className="space-y-4">
                    <div className="flex items-start gap-3.5">
                      <SubjectLogo
                        subjectId={subject.id}
                        className="h-14 w-14 shrink-0 rounded-2xl shadow-md transition duration-300 group-hover:scale-105"
                      />
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5 text-[11px] font-bold text-muted-foreground">
                          <span className={style.text}>{subject.category}</span>
                          <span aria-hidden="true">·</span>
                          <span>{subject.grades}</span>
                        </div>
                        <h3 className="text-xl font-extrabold tracking-tight">{subject.title}</h3>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {subject.description}
                    </p>

                    <div className="rounded-xl border border-border/80 bg-background/60 p-3 text-xs italic text-foreground/80">
                      “{subject.motto}”
                    </div>

                    <div className="space-y-1.5 pt-1">
                      <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        Asosiy yo‘nalishlar:
                      </p>
                      <ul className="space-y-1 text-xs">
                        {subject.outcomes.slice(0, 3).map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className={`h-3.5 w-3.5 mt-0.5 shrink-0 ${style.text}`} />
                            <span className="line-clamp-1">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-4 gap-2 pt-2 border-t border-border/60 tabular-nums">
                      <div className="text-center p-2 rounded-lg bg-background/60">
                        <div className="text-xs font-extrabold">{subject.stats.lessons} ta</div>
                        <div className="text-[10px] text-muted-foreground">Dars</div>
                      </div>
                      <div className="text-center p-2 rounded-lg bg-background/60">
                        <div className="text-xs font-extrabold">{subject.stats.references} ta</div>
                        <div className="text-[10px] text-muted-foreground">Qoida</div>
                      </div>
                      <div className="text-center p-2 rounded-lg bg-background/60">
                        <div className="text-xs font-extrabold">{subject.stats.quizzes} ta</div>
                        <div className="text-[10px] text-muted-foreground">Test</div>
                      </div>
                      <div className="text-center p-2 rounded-lg bg-background/60">
                        <div className="text-xs font-extrabold">
                          {doneCount}/{subject.lessons.length}
                        </div>
                        <div className="text-[10px] text-muted-foreground">O‘zlashtirildi</div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6">
                    <Link
                      to="/darslar/$subject"
                      params={{ subject: subject.id }}
                      className={`flex w-full items-center justify-center gap-2 rounded-xl py-3 px-4 text-sm font-bold shadow-md transition duration-200 cursor-pointer ${style.button}`}
                    >
                      <span>{subject.title} darslariga kirish</span>
                      <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="rounded-3xl border border-border bg-card p-10 text-center space-y-2">
            <p className="text-base font-bold">“{search}” bo‘yicha fan topilmadi</p>
            <p className="text-xs text-muted-foreground">
              Qidiruv so‘zini o‘zgartiring yoki barcha fanlar filtrini tanlang.
            </p>
          </div>
        )}

        {/* Bottom AI Ustoz Banner */}
        <section className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h4 className="text-lg font-bold flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-brand" />
              Mavzu yuzasidan qo‘shimcha savolingiz bormi?
            </h4>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-xl">
              AI Ustoz sizga murakkab formulalarni tushuntiradi, kimyoviy tenglamalarni yechishda
              yordam beradi va tarixiy sanalarni mustahkamlash uchun mashqlar tuzib beradi.
            </p>
          </div>
          <Link
            to="/ai-ustoz"
            className="shrink-0 flex items-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-bold text-white shadow-soft transition hover:scale-105 cursor-pointer whitespace-nowrap"
          >
            <Sparkles className="h-4 w-4" />
            <span>AI Ustozdan so‘rash</span>
          </Link>
        </section>
      </main>
    </div>
  );
}
