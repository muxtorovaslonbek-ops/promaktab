import { useState, useRef, useEffect } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Search, X, ArrowRight, Bot, Award, BookOpen, Headphones, Users } from "lucide-react";
import { FlagIcon } from "@/components/FlagIcon";
import { books, audioBooks } from "@/data/books";

interface SearchItem {
  id: string;
  title: string;
  subtitle: string;
  to: string;
  kind: "lang" | "club" | "book" | "audio" | "page";
  code?: string;
  keywords: string;
}

const staticItems: SearchItem[] = [
  {
    id: "lang-ingliz",
    title: "Ingliz tili",
    subtitle: "English · 14 dars, lug‘at va testlar",
    to: "/tillar/ingliz",
    kind: "lang",
    code: "gb",
    keywords: "ingliz english til lugat dars test grammatika",
  },
  {
    id: "lang-rus",
    title: "Rus tili",
    subtitle: "Русский язык · 14 dars, lug‘at va testlar",
    to: "/tillar/rus",
    kind: "lang",
    code: "ru",
    keywords: "rus russian til lugat dars test grammatika",
  },
  {
    id: "lang-koreys",
    title: "Koreys tili",
    subtitle: "한국어 · Hangul, so‘zlar va dialoglar",
    to: "/tillar/koreys",
    kind: "lang",
    code: "kr",
    keywords: "koreys korean hangul til",
  },
  {
    id: "lang-nemis",
    title: "Nemis tili",
    subtitle: "Deutsch · Artikllar, lug‘at va darslar",
    to: "/tillar/nemis",
    kind: "lang",
    code: "de",
    keywords: "nemis german deutsch til",
  },
  {
    id: "lang-turk",
    title: "Turk tili",
    subtitle: "Türkçe · Kundalik muloqot va qoidalar",
    to: "/tillar/turk",
    kind: "lang",
    code: "tr",
    keywords: "turk turkish turkce til",
  },
  {
    id: "lang-fransuz",
    title: "Fransuz tili",
    subtitle: "Français · Fonetika, so‘zlar va dialog",
    to: "/tillar/fransuz",
    kind: "lang",
    code: "fr",
    keywords: "fransuz french francais til",
  },
  {
    id: "lang-arab",
    title: "Arab tili",
    subtitle: "العربية · Alifbo, harflar va iboralar",
    to: "/tillar/arab",
    kind: "lang",
    code: "sa",
    keywords: "arab arabic til alifbo",
  },
  {
    id: "lang-xitoy",
    title: "Xitoy tili",
    subtitle: "中文 · Pinyin, ohanglar va iyerogliflar",
    to: "/tillar/xitoy",
    kind: "lang",
    code: "cn",
    keywords: "xitoy chinese pinyin hsk til",
  },
  {
    id: "lang-yapon",
    title: "Yapon tili",
    subtitle: "日本語 · Hiragana, Katakana va so‘zlar",
    to: "/tillar/yapon",
    kind: "lang",
    code: "jp",
    keywords: "yapon japanese hiragana katakana til",
  },
  {
    id: "club-robototexnika",
    title: "Robototexnika to‘garagi",
    subtitle: "Arduino, sensorlar, motorlar va 5 ta loyiha",
    to: "/togaraklar/robototexnika",
    kind: "club",
    keywords: "robototexnika arduino sensor togarak",
  },
  {
    id: "club-it",
    title: "IT Club to‘garagi",
    subtitle: "HTML, CSS, JavaScript, Python va 5 ta loyiha",
    to: "/togaraklar/it-club",
    kind: "club",
    keywords: "it club dasturlash html css javascript python togarak",
  },
  {
    id: "club-matematika",
    title: "Matematika to‘garagi",
    subtitle: "Olimpiada masalalari, mantiq va geometriya",
    to: "/togaraklar/matematika",
    kind: "club",
    keywords: "matematika olimpiada mantiq geometriya togarak",
  },
  {
    id: "club-sport",
    title: "Sport to‘garagi",
    subtitle: "Shaxmat, yengil atletika va sog‘lom turmush",
    to: "/togaraklar/sport",
    kind: "club",
    keywords: "sport shaxmat atletika soglom turmush togarak",
  },
  {
    id: "page-ai",
    title: "AI Ustoz — Jonli Suhbat",
    subtitle: "9 ta tilda suhbat, tarjima va talaffuz",
    to: "/ai-ustoz",
    kind: "page",
    keywords: "ai ustoz suhbat chat talaffuz mikrofon",
  },
  {
    id: "page-cert",
    title: "Sertifikatlar",
    subtitle: "Rasmiy sertifikat namunasi va mezonlar",
    to: "/sertifikatlar",
    kind: "page",
    keywords: "sertifikat diplom taqdirlash maktab",
  },
  ...books.map((b) => ({
    id: `book-${b.id}`,
    title: b.title,
    subtitle: `${b.author} · Elektron kitob`,
    to: `/kutubxona/${b.id}`,
    kind: "book" as const,
    keywords: `${b.title} ${b.author} ${b.category} kitob pdf kutubxona`,
  })),
  ...audioBooks.map((ab) => ({
    id: `audio-${ab.id}`,
    title: `${ab.title} (Audio)`,
    subtitle: `${ab.author} · Audio kitob`,
    to: "/kutubxona",
    kind: "audio" as const,
    keywords: `${ab.title} ${ab.author} audio kitob tinglash kutubxona`,
  })),
];

export function HomeSearch({ mobile = false }: { mobile?: boolean }) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const trimmed = query.trim().toLowerCase();
  const results = trimmed
    ? staticItems
        .filter(
          (item) =>
            item.title.toLowerCase().includes(trimmed) ||
            item.subtitle.toLowerCase().includes(trimmed) ||
            item.keywords.toLowerCase().includes(trimmed),
        )
        .slice(0, 6)
    : [];

  const goToItem = (to: string) => {
    setOpen(false);
    setQuery("");
    void navigate({ to });
  };

  return (
    <div
      ref={containerRef}
      className={`relative z-30 ${mobile ? "w-full" : "w-full max-w-[420px]"}`}
    >
      <div
        className={`flex w-full items-center gap-3 rounded-2xl glass-card shadow-soft transition focus-within:ring-2 focus-within:ring-brand ${
          mobile ? "px-4 py-3" : "animate-rise px-4 py-2.5"
        }`}
      >
        <Search className="h-5 w-5 shrink-0" />
        <input
          type="text"
          value={query}
          onFocus={() => setOpen(true)}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              setOpen(false);
            } else if (e.key === "Enter" && results[0]) {
              e.preventDefault();
              goToItem(results[0].to);
            }
          }}
          placeholder="Til, dars yoki mavzuni qidirish..."
          className={`w-full min-w-0 bg-transparent outline-none placeholder:text-ink/70 ${
            mobile ? "text-base" : "text-sm"
          }`}
        />
        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setOpen(false);
            }}
            aria-label="Qidiruvni tozalash"
            className="rounded-full p-0.5 text-ink/60 hover:bg-black/5 hover:text-ink cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {open && trimmed && (
        <div className="absolute left-0 right-0 top-full mt-2 overflow-hidden rounded-2xl border border-border bg-white/95 shadow-xl backdrop-blur-md">
          {results.length > 0 ? (
            <ul className="divide-y divide-border/60">
              {results.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => goToItem(item.to)}
                    className="flex w-full items-center justify-between gap-3 px-4 py-2.5 text-left transition hover:bg-indigo-50/70 cursor-pointer"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      {item.kind === "lang" && item.code ? (
                        <FlagIcon
                          code={item.code}
                          className="h-6 w-9 rounded-sm border border-border shadow-xs"
                        />
                      ) : item.kind === "club" ? (
                        <span className="flex h-7 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                          <Users className="h-4 w-4" />
                        </span>
                      ) : item.kind === "audio" ? (
                        <span className="flex h-7 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sky-600">
                          <Headphones className="h-4 w-4" />
                        </span>
                      ) : item.kind === "book" ? (
                        <span className="flex h-7 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
                          <BookOpen className="h-4 w-4" />
                        </span>
                      ) : item.id === "page-ai" ? (
                        <span className="flex h-7 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
                          <Bot className="h-4 w-4" />
                        </span>
                      ) : (
                        <span className="flex h-7 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-600">
                          <Award className="h-4 w-4" />
                        </span>
                      )}
                      <div className="min-w-0">
                        <p className="truncate text-sm font-bold text-ink">{item.title}</p>
                        <p className="truncate text-xs text-muted-foreground">{item.subtitle}</p>
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 shrink-0 text-indigo-600" />
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <div className="px-4 py-3 text-center text-xs font-medium text-muted-foreground">
              “{query}” bo‘yicha natija topilmadi
            </div>
          )}
        </div>
      )}
    </div>
  );
}
