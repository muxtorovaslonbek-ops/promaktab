import { useState, useEffect } from "react";
import { Search, X, ChevronLeft, ChevronRight, Atom, Sparkles, Layers } from "lucide-react";
import {
  periodicElements,
  categoryMeta,
  type ElementCategory,
  type PeriodicElement,
} from "@/data/periodicTable";

const categoriesOrder: ElementCategory[] = [
  "alkali-metal",
  "alkaline-earth",
  "transition-metal",
  "post-transition",
  "metalloid",
  "nonmetal",
  "halogen",
  "noble-gas",
  "lanthanide",
  "actinide",
];

export function PeriodicTable() {
  const [selectedCategory, setSelectedCategory] = useState<ElementCategory | "all">("all");
  const [search, setSearch] = useState("");
  const [activeElement, setActiveElement] = useState<PeriodicElement | null>(null);

  useEffect(() => {
    if (!activeElement) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveElement(null);
      } else if (e.key === "ArrowLeft" && activeElement.number > 1) {
        const prev = periodicElements.find((el) => el.number === activeElement.number - 1);
        if (prev) setActiveElement(prev);
      } else if (e.key === "ArrowRight" && activeElement.number < 118) {
        const next = periodicElements.find((el) => el.number === activeElement.number + 1);
        if (next) setActiveElement(next);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeElement]);

  const query = search.trim().toLowerCase();

  const matchesElement = (el: PeriodicElement) => {
    const matchesCat = selectedCategory === "all" || el.category === selectedCategory;
    const matchesQuery =
      !query ||
      el.nameUz.toLowerCase().includes(query) ||
      el.nameLat.toLowerCase().includes(query) ||
      el.symbol.toLowerCase() === query ||
      el.symbol.toLowerCase().includes(query) ||
      String(el.number) === query;
    return matchesCat && matchesQuery;
  };

  const matchedCount = periodicElements.filter(matchesElement).length;

  const navigateElement = (delta: number) => {
    if (!activeElement) return;
    const next = periodicElements.find((el) => el.number === activeElement.number + delta);
    if (next) setActiveElement(next);
  };

  return (
    <div className="space-y-6">
      {/* Header & Search */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-border pb-4">
        <div>
          <h3 className="text-xl font-extrabold tracking-tight flex items-center gap-2">
            <Atom className="h-5 w-5 text-cyan-600" />
            <span>Mendeleyev davriy jadvali (118 ta element)</span>
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Istalgan kimyoviy element ustiga bosing — uning atom tuzilishi, xossalari va
            qo‘llanilishi haqida to‘liq ma’lumot ochiladi.
          </p>
        </div>

        <div className="relative w-full lg:w-80">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Element nomi, belgisi (Au) yoki raqami (79)..."
            className="w-full rounded-xl border border-border bg-card pl-10 pr-9 py-2 text-xs outline-none focus:border-cyan-600 focus:ring-2 focus:ring-cyan-500/20 transition"
          />
          {search && (
            <button
              type="button"
              onClick={() => setSearch("")}
              aria-label="Qidiruvni tozalash"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-full p-1 text-muted-foreground hover:bg-accent cursor-pointer"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Color-Coded Legend & Category Filter */}
      <div className="rounded-2xl border border-border bg-card/80 p-4 space-y-3">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
            Elementlar guruhi bo‘yicha ranglanishi va filtrlash:
          </span>
          <span className="text-xs font-bold text-cyan-700 dark:text-cyan-300 tabular-nums">
            Mos kelgan: {matchedCount} / 118
          </span>
        </div>

        <div className="flex flex-wrap gap-1.5">
          <button
            type="button"
            onClick={() => setSelectedCategory("all")}
            className={`inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-[11px] font-bold transition cursor-pointer ${
              selectedCategory === "all"
                ? "border-slate-900 bg-slate-900 text-white dark:border-white dark:bg-white dark:text-slate-900"
                : "border-border bg-background hover:bg-accent text-foreground"
            }`}
          >
            Barchasi (118)
          </button>

          {categoriesOrder.map((cat) => {
            const meta = categoryMeta[cat];
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(isSelected ? "all" : cat)}
                className={`inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-[11px] font-bold transition cursor-pointer ${
                  isSelected
                    ? `${meta.badgeClass} ring-2 ring-offset-1 ring-current`
                    : "border-border bg-background hover:bg-accent text-foreground"
                }`}
              >
                <span className={`h-2.5 w-2.5 rounded-sm shrink-0 ${meta.dotColor}`} />
                <span>{meta.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Periodic Table 18-Column Grid */}
      <div className="rounded-3xl border border-border bg-card p-3 sm:p-5 shadow-sm overflow-x-auto">
        <div
          className="grid gap-1.5 min-w-[940px] select-none"
          style={{
            gridTemplateColumns: "repeat(18, minmax(46px, 1fr))",
          }}
        >
          {/* Group Numbers (1..18) */}
          {Array.from({ length: 18 }, (_, i) => i + 1).map((g) => (
            <div
              key={`grp-${g}`}
              className="text-center text-[10px] font-bold text-muted-foreground pb-1 tabular-nums"
              style={{ gridRow: 1, gridColumn: g }}
            >
              {g}
            </div>
          ))}

          {/* Elements 1..118 positioned cleanly (+1 row offset for group header) */}
          {periodicElements.map((el) => {
            const meta = categoryMeta[el.category];
            const isMatch = matchesElement(el);
            const isSelected = activeElement?.number === el.number;
            // Offset row by +1 because row 1 holds group numbers (1..18)
            const gridRow = el.row + 1;

            return (
              <button
                key={el.number}
                type="button"
                onClick={() => setActiveElement(el)}
                title={`${el.number} · ${el.nameUz} (${el.symbol})`}
                style={{ gridRow, gridColumn: el.col }}
                className={`group relative flex flex-col justify-between rounded-lg border p-1.5 text-left transition duration-150 cursor-pointer min-h-[58px] ${
                  meta.cellClass
                } ${
                  isMatch
                    ? "opacity-100 hover:scale-105 hover:z-10 hover:shadow-md"
                    : "opacity-25 saturate-50 hover:opacity-75"
                } ${isSelected ? "ring-2 ring-cyan-600 ring-offset-1 z-10 scale-105 shadow-md" : ""}`}
              >
                <div className="flex items-start justify-between gap-0.5 leading-none">
                  <span className="text-[9px] font-extrabold tabular-nums opacity-80">
                    {el.number}
                  </span>
                  <span className="text-[8px] font-semibold tabular-nums opacity-65 truncate">
                    {el.atomicMass}
                  </span>
                </div>
                <div className="text-sm sm:text-base font-black tracking-tight leading-tight text-center my-0.5">
                  {el.symbol}
                </div>
                <div className="text-[8.5px] font-bold truncate text-center opacity-90 leading-none">
                  {el.nameUz}
                </div>
              </button>
            );
          })}

          {/* Lanthanides & Actinides Placeholders in Main Table (Period 6 Col 3 and Period 7 Col 3) */}
          <button
            type="button"
            onClick={() =>
              setSelectedCategory(selectedCategory === "lanthanide" ? "all" : "lanthanide")
            }
            style={{ gridRow: 7, gridColumn: 3 }}
            className="flex flex-col items-center justify-center rounded-lg border border-dashed border-pink-400 bg-pink-50/70 p-1 text-center text-pink-900 hover:bg-pink-100 transition cursor-pointer min-h-[58px] dark:bg-pink-950/40 dark:text-pink-100"
            title="Lantanoidlar (57–71)"
          >
            <span className="text-[10px] font-extrabold tabular-nums">57–71</span>
            <span className="text-[9px] font-bold">La–Lu</span>
          </button>

          <button
            type="button"
            onClick={() =>
              setSelectedCategory(selectedCategory === "actinide" ? "all" : "actinide")
            }
            style={{ gridRow: 8, gridColumn: 3 }}
            className="flex flex-col items-center justify-center rounded-lg border border-dashed border-fuchsia-400 bg-fuchsia-50/70 p-1 text-center text-fuchsia-900 hover:bg-fuchsia-100 transition cursor-pointer min-h-[58px] dark:bg-fuchsia-950/40 dark:text-fuchsia-100"
            title="Aktinoidlar (89–103)"
          >
            <span className="text-[10px] font-extrabold tabular-nums">89–103</span>
            <span className="text-[9px] font-bold">Ac–Lr</span>
          </button>

          {/* Spacer row label between main table and f-block */}
          <div
            style={{ gridRow: 9, gridColumn: "1 / span 18" }}
            className="h-3"
            aria-hidden="true"
          />

          {/* Row labels for Lanthanides (row 10) & Actinides (row 11) */}
          <div
            style={{ gridRow: 10, gridColumn: "1 / span 3" }}
            className="flex items-center justify-end pr-2 text-[11px] font-extrabold text-pink-700 dark:text-pink-300"
          >
            Lantanoidlar (6-davr) →
          </div>
          <div
            style={{ gridRow: 11, gridColumn: "1 / span 3" }}
            className="flex items-center justify-end pr-2 text-[11px] font-extrabold text-fuchsia-700 dark:text-fuchsia-300"
          >
            Aktinoidlar (7-davr) →
          </div>
        </div>
      </div>

      {/* Element Detail Modal when clicked */}
      {activeElement && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${activeElement.nameUz} elementi ma’lumotlari`}
          onClick={() => setActiveElement(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4 backdrop-blur-xs animate-in fade-in duration-150"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-2xl space-y-5"
          >
            {/* Top Bar */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <div
                  className={`flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-2xl border-2 shadow-sm ${
                    categoryMeta[activeElement.category].cellClass
                  }`}
                >
                  <span className="text-xs font-extrabold tabular-nums leading-none">
                    {activeElement.number}
                  </span>
                  <span className="text-3xl font-black tracking-tight leading-tight">
                    {activeElement.symbol}
                  </span>
                  <span className="text-[10px] font-bold tabular-nums opacity-80">
                    {activeElement.atomicMass}
                  </span>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-xs font-bold">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-0.5 ${
                        categoryMeta[activeElement.category].badgeClass
                      }`}
                    >
                      <span
                        className={`h-2 w-2 rounded-full ${
                          categoryMeta[activeElement.category].dotColor
                        }`}
                      />
                      {categoryMeta[activeElement.category].label}
                    </span>
                  </div>
                  <h4 className="mt-1.5 text-2xl sm:text-3xl font-extrabold tracking-tight text-ink">
                    {activeElement.nameUz}
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground font-semibold">
                    Lotincha nomi: <span className="italic">{activeElement.nameLat}</span>
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setActiveElement(null)}
                aria-label="Yopish"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-border bg-background hover:bg-accent transition cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Key Properties Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 tabular-nums">
              <div className="rounded-2xl border border-border bg-background/70 p-3">
                <div className="text-[11px] font-semibold text-muted-foreground">Tartib raqami</div>
                <div className="mt-0.5 text-base font-extrabold">Z = {activeElement.number}</div>
              </div>

              <div className="rounded-2xl border border-border bg-background/70 p-3">
                <div className="text-[11px] font-semibold text-muted-foreground">
                  Nisbiy atom massasi
                </div>
                <div className="mt-0.5 text-base font-extrabold">{activeElement.atomicMass}</div>
              </div>

              <div className="rounded-2xl border border-border bg-background/70 p-3">
                <div className="text-[11px] font-semibold text-muted-foreground">Davr va guruh</div>
                <div className="mt-0.5 text-base font-extrabold">
                  {activeElement.period}-davr · {activeElement.group}-guruh
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-background/70 p-3">
                <div className="text-[11px] font-semibold text-muted-foreground">
                  Agregat holati
                </div>
                <div className="mt-0.5 text-base font-extrabold">{activeElement.state}</div>
              </div>

              <div className="rounded-2xl border border-border bg-background/70 p-3">
                <div className="text-[11px] font-semibold text-muted-foreground">
                  Oksidlanish darajasi
                </div>
                <div className="mt-0.5 text-sm font-extrabold">{activeElement.oxidationStates}</div>
              </div>

              <div className="rounded-2xl border border-border bg-background/70 p-3">
                <div className="text-[11px] font-semibold text-muted-foreground">
                  Elektron konfiguratsiyasi
                </div>
                <div className="mt-0.5 text-xs sm:text-sm font-mono font-bold break-all">
                  {activeElement.electronConfig}
                </div>
              </div>
            </div>

            {/* Description & Uses */}
            <div className="space-y-3">
              <div className="rounded-2xl border border-border bg-background/60 p-4 space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wide text-cyan-700 dark:text-cyan-300">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Element haqida ma’lumot</span>
                </div>
                <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed">
                  {activeElement.summary}
                </p>
              </div>

              <div className="rounded-2xl border border-emerald-200/80 bg-emerald-50/50 dark:bg-emerald-950/20 dark:border-emerald-900/40 p-4 space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wide text-emerald-700 dark:text-emerald-300">
                  <Layers className="h-3.5 w-3.5" />
                  <span>Amaliy qo‘llanilishi</span>
                </div>
                <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed">
                  {activeElement.uses}
                </p>
              </div>

              <div className="text-xs text-muted-foreground px-1">
                <span className="font-bold text-foreground">Kashf etilishi: </span>
                {activeElement.discovered}
              </div>
            </div>

            {/* Prev / Next Navigation */}
            <div className="flex items-center justify-between gap-3 border-t border-border pt-4">
              <button
                type="button"
                disabled={activeElement.number <= 1}
                onClick={() => navigateElement(-1)}
                className="flex items-center gap-1.5 rounded-xl border border-border bg-background px-3.5 py-2 text-xs font-bold hover:bg-accent disabled:opacity-40 disabled:cursor-not-allowed transition cursor-pointer"
              >
                <ChevronLeft className="h-4 w-4" />
                <span>Oldingi element</span>
              </button>

              <span className="text-xs font-bold text-muted-foreground tabular-nums">
                {activeElement.number} / 118
              </span>

              <button
                type="button"
                disabled={activeElement.number >= 118}
                onClick={() => navigateElement(1)}
                className="flex items-center gap-1.5 rounded-xl bg-cyan-600 px-3.5 py-2 text-xs font-bold text-white hover:bg-cyan-700 disabled:opacity-40 disabled:cursor-not-allowed transition cursor-pointer"
              >
                <span>Keyingi element</span>
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
