import { useState } from "react";
import { Calculator, FlaskConical, Atom, Dna, Landmark, ArrowRightLeft } from "lucide-react";

interface SubjectInteractiveLabProps {
  subjectId: string;
}

export function SubjectInteractiveLab({ subjectId }: SubjectInteractiveLabProps) {
  switch (subjectId) {
    case "matematika":
      return <MathLab />;
    case "kimyo":
      return <ChemistryLab />;
    case "fizika":
      return <PhysicsLab />;
    case "biologiya":
      return <BiologyLab />;
    case "tarix":
      return <HistoryLab />;
    default:
      return <MathLab />;
  }
}

/* ==================== 1. MATEMATIKA LAB ==================== */
function MathLab() {
  const [aStr, setAStr] = useState("1");
  const [bStr, setBStr] = useState("-5");
  const [cStr, setCStr] = useState("6");

  const [katetA, setKatetA] = useState("3");
  const [katetB, setKatetB] = useState("4");

  const a = Number(aStr);
  const b = Number(bStr);
  const c = Number(cStr);
  const validQuad = Number.isFinite(a) && Number.isFinite(b) && Number.isFinite(c) && a !== 0;

  const discriminant = validQuad ? b * b - 4 * a * c : 0;
  const x0 = validQuad ? -b / (2 * a) : 0;
  const y0 = validQuad ? a * x0 * x0 + b * x0 + c : 0;

  const ka = Math.max(0.01, Number(katetA) || 0);
  const kb = Math.max(0.01, Number(katetB) || 0);
  const hypo = Math.sqrt(ka * ka + kb * kb);
  const triArea = (ka * kb) / 2;
  const triPerim = ka + kb + hypo;

  return (
    <div className="space-y-6">
      <div className="border-b border-border pb-4">
        <div className="flex items-center gap-2 text-xs font-bold text-emerald-600">
          <Calculator className="h-4 w-4" />
          <span>Interaktiv Trenajyor</span>
        </div>
        <h3 className="mt-1 text-xl font-extrabold tracking-tight">
          Matematika Amaliy Laboratoriyasi
        </h3>
        <p className="text-xs sm:text-sm text-muted-foreground">
          Koeffitsiyentlarni kiriting va bosqichma-bosqich yechimni real vaqtda kuzating.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quadratic Equation Solver */}
        <div className="rounded-3xl border border-border bg-card p-6 shadow-sm space-y-4">
          <h4 className="text-base font-extrabold">
            Kvadrat tenglama yechuvchi (ax² + bx + c = 0)
          </h4>
          <div className="grid grid-cols-3 gap-3">
            <label className="space-y-1 text-xs font-semibold">
              <span>a (a ≠ 0)</span>
              <input
                type="number"
                value={aStr}
                onChange={(e) => setAStr(e.target.value)}
                className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm font-bold outline-none focus:border-emerald-500"
              />
            </label>
            <label className="space-y-1 text-xs font-semibold">
              <span>b</span>
              <input
                type="number"
                value={bStr}
                onChange={(e) => setBStr(e.target.value)}
                className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm font-bold outline-none focus:border-emerald-500"
              />
            </label>
            <label className="space-y-1 text-xs font-semibold">
              <span>c</span>
              <input
                type="number"
                value={cStr}
                onChange={(e) => setCStr(e.target.value)}
                className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm font-bold outline-none focus:border-emerald-500"
              />
            </label>
          </div>

          {validQuad ? (
            <div className="space-y-3 rounded-2xl border border-emerald-200/70 bg-emerald-50/50 dark:bg-emerald-950/20 dark:border-emerald-900/40 p-4 text-xs sm:text-sm tabular-nums">
              <div>
                <span className="font-bold">Tenglama: </span>
                <span className="font-mono font-bold">
                  {a}x² {b >= 0 ? `+ ${b}` : `− ${Math.abs(b)}`}x{" "}
                  {c >= 0 ? `+ ${c}` : `− ${Math.abs(c)}`} = 0
                </span>
              </div>
              <div>
                <span className="font-bold">Diskriminant: </span>
                <span className="font-mono font-bold text-emerald-700 dark:text-emerald-300">
                  D = b² − 4ac = {Number(discriminant.toFixed(4))}
                </span>
              </div>
              {discriminant > 0 && (
                <div className="space-y-1">
                  <div className="font-bold text-emerald-700 dark:text-emerald-300">
                    Ikkita turli haqiqiy ildiz (D &gt; 0):
                  </div>
                  <div className="font-mono">
                    x₁ = {((-b - Math.sqrt(discriminant)) / (2 * a)).toFixed(3)} · x₂ ={" "}
                    {((-b + Math.sqrt(discriminant)) / (2 * a)).toFixed(3)}
                  </div>
                </div>
              )}
              {discriminant === 0 && (
                <div className="font-bold text-emerald-700 dark:text-emerald-300">
                  Bitta ildiz (D = 0): x = {(-b / (2 * a)).toFixed(3)}
                </div>
              )}
              {discriminant < 0 && (
                <div className="font-bold text-amber-700 dark:text-amber-300">
                  D &lt; 0 bo‘lgani uchun haqiqiy ildizlar mavjud emas (∅).
                </div>
              )}
              <div className="border-t border-border/60 pt-2 text-xs text-muted-foreground">
                Parabola uchi: ({x0.toFixed(2)}; {y0.toFixed(2)}) · Viyet: x₁+x₂ ={" "}
                {(-b / a).toFixed(2)}, x₁·x₂ = {(c / a).toFixed(2)}
              </div>
            </div>
          ) : (
            <div className="rounded-xl bg-amber-50 p-3 text-xs font-semibold text-amber-800">
              a koeffitsiyenti 0 dan farqli son bo‘lishi kerak.
            </div>
          )}
        </div>

        {/* Right Triangle Calculator */}
        <div className="rounded-3xl border border-border bg-card p-6 shadow-sm space-y-4">
          <h4 className="text-base font-extrabold">
            To‘g‘ri burchakli uchburchak va Pifagor hisoblagichi
          </h4>
          <div className="grid grid-cols-2 gap-3">
            <label className="space-y-1 text-xs font-semibold">
              <span>1-katet (a, sm)</span>
              <input
                type="number"
                min="0.1"
                step="0.5"
                value={katetA}
                onChange={(e) => setKatetA(e.target.value)}
                className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm font-bold outline-none focus:border-emerald-500"
              />
            </label>
            <label className="space-y-1 text-xs font-semibold">
              <span>2-katet (b, sm)</span>
              <input
                type="number"
                min="0.1"
                step="0.5"
                value={katetB}
                onChange={(e) => setKatetB(e.target.value)}
                className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm font-bold outline-none focus:border-emerald-500"
              />
            </label>
          </div>

          <div className="grid grid-cols-2 gap-3 tabular-nums">
            <div className="rounded-2xl border border-border bg-background p-3.5">
              <div className="text-[11px] font-semibold text-muted-foreground">Gipotenuza (c)</div>
              <div className="mt-1 text-lg font-extrabold text-emerald-600">
                {hypo.toFixed(2)} sm
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-background p-3.5">
              <div className="text-[11px] font-semibold text-muted-foreground">Yuzi (S = ab/2)</div>
              <div className="mt-1 text-lg font-extrabold">{triArea.toFixed(2)} sm²</div>
            </div>
            <div className="rounded-2xl border border-border bg-background p-3.5">
              <div className="text-[11px] font-semibold text-muted-foreground">Perimetr (P)</div>
              <div className="mt-1 text-lg font-extrabold">{triPerim.toFixed(2)} sm</div>
            </div>
            <div className="rounded-2xl border border-border bg-background p-3.5">
              <div className="text-[11px] font-semibold text-muted-foreground">
                sin(α) = a/c · cos(α) = b/c
              </div>
              <div className="mt-1 text-sm font-extrabold font-mono">
                {(ka / hypo).toFixed(2)} · {(kb / hypo).toFixed(2)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==================== 2. KIMYO LAB ==================== */
const presetSubstances = [
  { formula: "H₂O", name: "Suv", molarMass: 18 },
  { formula: "CO₂", name: "Karbonat angidrid", molarMass: 44 },
  { formula: "H₂SO₄", name: "Sulfat kislota", molarMass: 98 },
  { formula: "NaOH", name: "Natriy gidroksid", molarMass: 40 },
  { formula: "NaCl", name: "Osh tuzi", molarMass: 58.5 },
  { formula: "CaCO₃", name: "Kalsiy karbonat", molarMass: 100 },
  { formula: "NH₃", name: "Ammiak", molarMass: 17 },
  { formula: "C₆H₁₂O₆", name: "Glyukoza", molarMass: 180 },
];

function ChemistryLab() {
  const [selectedFormula, setSelectedFormula] = useState("CO₂");
  const [massStr, setMassStr] = useState("88");
  const [soluteMass, setSoluteMass] = useState("25");
  const [waterMass, setWaterMass] = useState("175");
  const [phValue, setPhValue] = useState(7);

  const sub = presetSubstances.find((s) => s.formula === selectedFormula) ?? presetSubstances[0]!;
  const mass = Math.max(0, Number(massStr) || 0);
  const moles = mass / sub.molarMass;
  const volumeLiters = moles * 22.4;
  const particles = moles * 6.02;

  const sMass = Math.max(0, Number(soluteMass) || 0);
  const wMass = Math.max(0, Number(waterMass) || 0);
  const totalSolution = sMass + wMass;
  const percentConc = totalSolution > 0 ? (sMass / totalSolution) * 100 : 0;

  const phLabel =
    phValue < 3
      ? "Kuchli kislotali muhit"
      : phValue < 7
        ? "Kuchsiz kislotali muhit"
        : phValue === 7
          ? "Neytral muhit (toza suv)"
          : phValue <= 11
            ? "Kuchsiz ishqoriy muhit"
            : "Kuchli ishqoriy muhit";

  return (
    <div className="space-y-6">
      <div className="border-b border-border pb-4">
        <div className="flex items-center gap-2 text-xs font-bold text-cyan-600">
          <FlaskConical className="h-4 w-4" />
          <span>Interaktiv Stexiometriya &amp; Muhit</span>
        </div>
        <h3 className="mt-1 text-xl font-extrabold tracking-tight">Kimyo Amaliy Laboratoriyasi</h3>
        <p className="text-xs sm:text-sm text-muted-foreground">
          Modda miqdori (mol), gaz hajmi, eritma foiz konsentratsiyasi va pH muhitini jonli
          tekshiring.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Mole & Gas Volume Calculator */}
        <div className="rounded-3xl border border-border bg-card p-6 shadow-sm space-y-4">
          <h4 className="text-base font-extrabold">Mol, massa va gaz hajmi hisoblagichi</h4>

          <div className="flex flex-wrap gap-1.5">
            {presetSubstances.map((item) => (
              <button
                key={item.formula}
                type="button"
                onClick={() => setSelectedFormula(item.formula)}
                className={`rounded-xl px-2.5 py-1.5 text-xs font-bold transition cursor-pointer ${
                  selectedFormula === item.formula
                    ? "bg-cyan-600 text-white shadow-xs"
                    : "border border-border bg-background hover:bg-accent"
                }`}
              >
                {item.formula}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-border bg-background p-3">
              <div className="text-[11px] text-muted-foreground">Tanlangan modda</div>
              <div className="text-sm font-extrabold">
                {sub.name} (M = {sub.molarMass} g/mol)
              </div>
            </div>
            <label className="rounded-xl border border-border bg-background p-3 block">
              <span className="text-[11px] text-muted-foreground block">Massa m (gramm)</span>
              <input
                type="number"
                min="0"
                step="1"
                value={massStr}
                onChange={(e) => setMassStr(e.target.value)}
                className="mt-0.5 w-full bg-transparent text-sm font-extrabold outline-none"
              />
            </label>
          </div>

          <div className="grid grid-cols-3 gap-2.5 tabular-nums">
            <div className="rounded-2xl border border-cyan-200/70 bg-cyan-50/50 dark:bg-cyan-950/20 p-3">
              <div className="text-[11px] text-muted-foreground">Modda miqdori (n)</div>
              <div className="mt-1 text-base font-extrabold text-cyan-700 dark:text-cyan-300">
                {moles.toFixed(2)} mol
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-background p-3">
              <div className="text-[11px] text-muted-foreground">Hajm (n.sh. gaz)</div>
              <div className="mt-1 text-base font-extrabold">{volumeLiters.toFixed(2)} L</div>
            </div>
            <div className="rounded-2xl border border-border bg-background p-3">
              <div className="text-[11px] text-muted-foreground">Molekulalar (N)</div>
              <div className="mt-1 text-base font-extrabold">{particles.toFixed(2)}·10²³</div>
            </div>
          </div>
        </div>

        {/* Solution Concentration & pH Explorer */}
        <div className="rounded-3xl border border-border bg-card p-6 shadow-sm space-y-5">
          <div className="space-y-3">
            <h4 className="text-base font-extrabold">Eritma massa ulushi (w%)</h4>
            <div className="grid grid-cols-2 gap-3">
              <label className="space-y-1 text-xs font-semibold">
                <span>Erigan modda (g)</span>
                <input
                  type="number"
                  min="0"
                  value={soluteMass}
                  onChange={(e) => setSoluteMass(e.target.value)}
                  className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm font-bold outline-none focus:border-cyan-500"
                />
              </label>
              <label className="space-y-1 text-xs font-semibold">
                <span>Suv massasi (g)</span>
                <input
                  type="number"
                  min="0"
                  value={waterMass}
                  onChange={(e) => setWaterMass(e.target.value)}
                  className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm font-bold outline-none focus:border-cyan-500"
                />
              </label>
            </div>
            <div className="rounded-2xl border border-border bg-background p-3.5 text-xs sm:text-sm tabular-nums flex items-center justify-between">
              <span>
                Umumiy eritma: <strong>{totalSolution.toFixed(1)} g</strong>
              </span>
              <span className="font-extrabold text-cyan-600">w = {percentConc.toFixed(2)}%</span>
            </div>
          </div>

          <div className="space-y-2 border-t border-border/60 pt-4">
            <div className="flex items-center justify-between text-xs font-bold">
              <span>pH Shkalasi simulyatori</span>
              <span className="text-cyan-600 font-extrabold">pH = {phValue}</span>
            </div>
            <input
              type="range"
              min="0"
              max="14"
              step="1"
              value={phValue}
              onChange={(e) => setPhValue(Number(e.target.value))}
              className="w-full accent-cyan-600 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-muted-foreground font-semibold">
              <span>0 (Kuchli kislota)</span>
              <span>7 (Neytral)</span>
              <span>14 (Kuchli ishqor)</span>
            </div>
            <div className="rounded-xl border border-border bg-background p-3 text-xs space-y-1">
              <div className="font-bold">{phLabel}</div>
              <div className="text-muted-foreground">
                Lakmus:{" "}
                <strong>{phValue < 7 ? "Qizil" : phValue === 7 ? "Binafsha" : "Ko‘k"}</strong> ·
                Fenolftalein: <strong>{phValue > 7 ? "To‘q qizil (malina)" : "Rangsiz"}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==================== 3. FIZIKA LAB ==================== */
function PhysicsLab() {
  const [voltageStr, setVoltageStr] = useState("220");
  const [r1Str, setR1Str] = useState("20");
  const [r2Str, setR2Str] = useState("20");
  const [connection, setConnection] = useState<"series" | "parallel">("parallel");

  const [kmhStr, setKmhStr] = useState("72");
  const [celsiusStr, setCelsiusStr] = useState("27");

  const U = Math.max(0, Number(voltageStr) || 0);
  const R1 = Math.max(0.1, Number(r1Str) || 1);
  const R2 = Math.max(0.1, Number(r2Str) || 1);
  const rTotal = connection === "series" ? R1 + R2 : (R1 * R2) / (R1 + R2);
  const current = U / rTotal;
  const power = U * current;

  const kmh = Number(kmhStr) || 0;
  const ms = kmh / 3.6;
  const celsius = Number(celsiusStr) || 0;
  const kelvin = celsius + 273.15;

  return (
    <div className="space-y-6">
      <div className="border-b border-border pb-4">
        <div className="flex items-center gap-2 text-xs font-bold text-blue-600">
          <Atom className="h-4 w-4" />
          <span>Interaktiv Fizik Simulyator</span>
        </div>
        <h3 className="mt-1 text-xl font-extrabold tracking-tight">Fizika Amaliy Laboratoriyasi</h3>
        <p className="text-xs sm:text-sm text-muted-foreground">
          Elektr zanjiri parametrlari (Om qonuni) va birliklar konvertorini sinab ko‘ring.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-3xl border border-border bg-card p-6 shadow-sm space-y-4">
          <div className="flex items-center justify-between gap-2">
            <h4 className="text-base font-extrabold">Elektr zanjiri va Om qonuni</h4>
            <div className="flex gap-1.5">
              <button
                type="button"
                onClick={() => setConnection("series")}
                className={`rounded-lg px-2.5 py-1 text-xs font-bold cursor-pointer ${
                  connection === "series"
                    ? "bg-blue-600 text-white"
                    : "border border-border bg-background"
                }`}
              >
                Ketma-ket
              </button>
              <button
                type="button"
                onClick={() => setConnection("parallel")}
                className={`rounded-lg px-2.5 py-1 text-xs font-bold cursor-pointer ${
                  connection === "parallel"
                    ? "bg-blue-600 text-white"
                    : "border border-border bg-background"
                }`}
              >
                Parallel
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <label className="space-y-1 text-xs font-semibold">
              <span>Kuchlanish U (V)</span>
              <input
                type="number"
                min="0"
                value={voltageStr}
                onChange={(e) => setVoltageStr(e.target.value)}
                className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm font-bold outline-none focus:border-blue-500"
              />
            </label>
            <label className="space-y-1 text-xs font-semibold">
              <span>R₁ (Om)</span>
              <input
                type="number"
                min="0.1"
                value={r1Str}
                onChange={(e) => setR1Str(e.target.value)}
                className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm font-bold outline-none focus:border-blue-500"
              />
            </label>
            <label className="space-y-1 text-xs font-semibold">
              <span>R₂ (Om)</span>
              <input
                type="number"
                min="0.1"
                value={r2Str}
                onChange={(e) => setR2Str(e.target.value)}
                className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm font-bold outline-none focus:border-blue-500"
              />
            </label>
          </div>

          <div className="grid grid-cols-3 gap-2.5 tabular-nums">
            <div className="rounded-2xl border border-border bg-background p-3">
              <div className="text-[11px] text-muted-foreground">Umumiy R</div>
              <div className="mt-1 text-base font-extrabold">{rTotal.toFixed(2)} Ω</div>
            </div>
            <div className="rounded-2xl border border-blue-200/70 bg-blue-50/50 dark:bg-blue-950/20 p-3">
              <div className="text-[11px] text-muted-foreground">Tok kuchi (I = U/R)</div>
              <div className="mt-1 text-base font-extrabold text-blue-700 dark:text-blue-300">
                {current.toFixed(2)} A
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-background p-3">
              <div className="text-[11px] text-muted-foreground">Quvvat (P = UI)</div>
              <div className="mt-1 text-base font-extrabold">{power.toFixed(1)} W</div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-card p-6 shadow-sm space-y-4">
          <div className="flex items-center gap-2">
            <ArrowRightLeft className="h-4 w-4 text-blue-600" />
            <h4 className="text-base font-extrabold">Tezkor SI birliklar konvertori</h4>
          </div>

          <div className="space-y-4 tabular-nums">
            <div className="rounded-2xl border border-border bg-background p-4 space-y-2">
              <div className="flex items-center justify-between text-xs font-semibold">
                <span>Tezlik (km/soat → m/s)</span>
                <span className="text-muted-foreground">v(m/s) = v(km/soat) / 3.6</span>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="number"
                  value={kmhStr}
                  onChange={(e) => setKmhStr(e.target.value)}
                  className="w-32 rounded-xl border border-border bg-card px-3 py-1.5 text-sm font-bold outline-none focus:border-blue-500"
                />
                <span className="text-xs font-semibold text-muted-foreground">km/soat =</span>
                <span className="text-lg font-extrabold text-blue-600">{ms.toFixed(2)} m/s</span>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-background p-4 space-y-2">
              <div className="flex items-center justify-between text-xs font-semibold">
                <span>Harorat (°C → Kelvin)</span>
                <span className="text-muted-foreground">T = t°C + 273.15</span>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="number"
                  value={celsiusStr}
                  onChange={(e) => setCelsiusStr(e.target.value)}
                  className="w-32 rounded-xl border border-border bg-card px-3 py-1.5 text-sm font-bold outline-none focus:border-blue-500"
                />
                <span className="text-xs font-semibold text-muted-foreground">°C =</span>
                <span className="text-lg font-extrabold text-blue-600">{kelvin.toFixed(2)} K</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==================== 4. BIOLOGIYA LAB ==================== */
const bloodCompatibility: Record<string, string[]> = {
  "I (0)": ["I (0)", "II (A)", "III (B)", "IV (AB)"],
  "II (A)": ["II (A)", "IV (AB)"],
  "III (B)": ["III (B)", "IV (AB)"],
  "IV (AB)": ["IV (AB)"],
};

function BiologyLab() {
  const [dnaInput, setDnaInput] = useState("ATGGCCATTGGCTAA");
  const [donor, setDonor] = useState("I (0)");
  const [recipient, setRecipient] = useState("II (A)");

  const cleanDna = dnaInput
    .toUpperCase()
    .replace(/[^ATGS]/g, "")
    .slice(0, 36);

  const compMap: Record<string, string> = { A: "T", T: "A", G: "S", S: "G" };
  const rnaMap: Record<string, string> = { A: "U", T: "A", G: "S", S: "G" };

  const complementary = cleanDna
    .split("")
    .map((ch) => compMap[ch] ?? ch)
    .join("");
  const mrna = cleanDna
    .split("")
    .map((ch) => rnaMap[ch] ?? ch)
    .join("");

  const counts = {
    A: cleanDna.split("").filter((c) => c === "A").length,
    T: cleanDna.split("").filter((c) => c === "T").length,
    G: cleanDna.split("").filter((c) => c === "G").length,
    S: cleanDna.split("").filter((c) => c === "S").length,
  };
  const aminoCount = Math.floor(cleanDna.length / 3);
  const lengthNm = (cleanDna.length * 0.34).toFixed(2);
  const isBloodCompatible = (bloodCompatibility[donor] ?? []).includes(recipient);

  return (
    <div className="space-y-6">
      <div className="border-b border-border pb-4">
        <div className="flex items-center gap-2 text-xs font-bold text-teal-600">
          <Dna className="h-4 w-4" />
          <span>Molekulyar Biologiya &amp; Fiziologiya</span>
        </div>
        <h3 className="mt-1 text-xl font-extrabold tracking-tight">
          Biologiya Amaliy Laboratoriyasi
        </h3>
        <p className="text-xs sm:text-sm text-muted-foreground">
          DNK zanjiri bo‘yicha iRNK sintezini hamda qon guruhlari mosligini tekshiring.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-3xl border border-border bg-card p-6 shadow-sm space-y-4">
          <h4 className="text-base font-extrabold">DNK → iRNK Transkripsiya trenajyori</h4>
          <label className="block space-y-1 text-xs font-semibold">
            <span>DNK 1-zanjirini kiriting (faqat A, T, G, S harflari)</span>
            <input
              type="text"
              value={dnaInput}
              onChange={(e) => setDnaInput(e.target.value)}
              placeholder="Masalan: ATGGCCATT"
              className="w-full rounded-xl border border-border bg-background px-3 py-2 font-mono text-sm font-bold uppercase outline-none focus:border-teal-500"
            />
          </label>

          <div className="flex flex-wrap gap-1.5">
            {["ATGGCCATTGGCTAA", "ATGCGATACGTTTGA", "TACGGACTAAGC"].map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => setDnaInput(preset)}
                className="rounded-lg border border-border bg-background px-2.5 py-1 font-mono text-[11px] font-semibold hover:bg-accent cursor-pointer"
              >
                {preset}
              </button>
            ))}
          </div>

          <div className="space-y-2 rounded-2xl border border-teal-200/70 bg-teal-50/40 dark:bg-teal-950/20 p-4 font-mono text-xs sm:text-sm break-all">
            <div>
              <span className="font-sans text-xs font-bold text-muted-foreground">DNK-1: </span>
              {cleanDna || "—"}
            </div>
            <div>
              <span className="font-sans text-xs font-bold text-muted-foreground">DNK-2: </span>
              <span className="text-teal-700 dark:text-teal-300 font-bold">
                {complementary || "—"}
              </span>
            </div>
            <div>
              <span className="font-sans text-xs font-bold text-muted-foreground">iRNK : </span>
              <span className="text-indigo-700 dark:text-indigo-300 font-bold">{mrna || "—"}</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center text-xs tabular-nums">
            <div className="rounded-xl border border-border bg-background p-2.5">
              <div className="font-extrabold">{cleanDna.length} ta</div>
              <div className="text-[11px] text-muted-foreground">Nukleotid</div>
            </div>
            <div className="rounded-xl border border-border bg-background p-2.5">
              <div className="font-extrabold">{aminoCount} ta</div>
              <div className="text-[11px] text-muted-foreground">Triplet / Aminokislota</div>
            </div>
            <div className="rounded-xl border border-border bg-background p-2.5">
              <div className="font-extrabold">{lengthNm} nm</div>
              <div className="text-[11px] text-muted-foreground">Zanjir uzunligi</div>
            </div>
          </div>

          <div className="text-[11px] text-muted-foreground tabular-nums">
            Tarkib: A={counts.A}, T={counts.T}, G={counts.G}, S={counts.S}
          </div>
        </div>

        {/* Blood group compatibility checker */}
        <div className="rounded-3xl border border-border bg-card p-6 shadow-sm space-y-4">
          <h4 className="text-base font-extrabold">Qon guruhlari mosligi (ABO tizimi)</h4>
          <p className="text-xs text-muted-foreground">
            Donor va qabul qiluvchi (retsipiyent) qon guruhini tanlab moslikni tekshiring.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="text-xs font-bold text-muted-foreground">Donor (beruvchi)</div>
              <div className="grid grid-cols-2 gap-1.5">
                {["I (0)", "II (A)", "III (B)", "IV (AB)"].map((g) => (
                  <button
                    key={g}
                    type="button"
                    onClick={() => setDonor(g)}
                    className={`rounded-xl py-2 text-xs font-bold transition cursor-pointer ${
                      donor === g
                        ? "bg-teal-600 text-white"
                        : "border border-border bg-background hover:bg-accent"
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-bold text-muted-foreground">Retsipiyent (oluvchi)</div>
              <div className="grid grid-cols-2 gap-1.5">
                {["I (0)", "II (A)", "III (B)", "IV (AB)"].map((g) => (
                  <button
                    key={g}
                    type="button"
                    onClick={() => setRecipient(g)}
                    className={`rounded-xl py-2 text-xs font-bold transition cursor-pointer ${
                      recipient === g
                        ? "bg-teal-600 text-white"
                        : "border border-border bg-background hover:bg-accent"
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`rounded-2xl border p-4 text-xs sm:text-sm space-y-1 ${
              isBloodCompatible
                ? "border-emerald-300 bg-emerald-50/70 text-emerald-900 dark:bg-emerald-950/30 dark:text-emerald-200"
                : "border-red-300 bg-red-50/70 text-red-900 dark:bg-red-950/30 dark:text-red-200"
            }`}
          >
            <div className="font-extrabold">
              {isBloodCompatible
                ? `Mos keladi: ${donor} → ${recipient} guruhiga qon quyish mumkin.`
                : `Mos kelmaydi: ${donor} qonini ${recipient} guruhiga quyib bo‘lmaydi!`}
            </div>
            <p className="text-xs opacity-90">
              Eslatma: I (0) — universal donor, IV (AB) esa — universal retsipiyent hisoblanadi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==================== 5. TARIX LAB ==================== */
function toRoman(num: number): string {
  const map: [number, string][] = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];
  let n = Math.max(1, Math.floor(num));
  let res = "";
  for (const [val, sym] of map) {
    while (n >= val) {
      res += sym;
      n -= val;
    }
  }
  return res;
}

const timelineEvents = [
  {
    year: "Mil. avv. 329-yil",
    era: "Qadimgi davr",
    title: "Spitamen qo‘zg‘oloni",
    desc: "Sug‘diyona va Baqtriya xalqlarining Aleksandr Makedonskiyga qarshi ozodlik kurashi.",
  },
  {
    year: "Mil. avv. 138-yil",
    era: "Qadimgi davr",
    title: "Buyuk Ipak yo‘lining shakllanishi",
    desc: "Sharq va G‘arbni bog‘lagan eng yirik savdo va madaniyat ko‘prigi ochildi.",
  },
  {
    year: "1004-yil",
    era: "Birinchi Renessans",
    title: "Xorazm Ma’mun akademiyasi",
    desc: "Beruniy, Ibn Sino kabi allomalar ilmiy markazga to‘plandi.",
  },
  {
    year: "1370-yil",
    era: "Temuriylar davri",
    title: "Amir Temur saltanatiga asos solinishi",
    desc: "Movarounnahrda markazlashgan qudratli davlat tashkil etildi.",
  },
  {
    year: "1420–1428-yillar",
    era: "Temuriylar davri",
    title: "Mirzo Ulug‘bek madrasasi va rasadxonasi",
    desc: "Samarqandda jahon astronomiya maktabi va «Ziji Ko‘ragoniy» yaratildi.",
  },
  {
    year: "1911-yil",
    era: "Jadidchilik",
    title: "«Padarkush» dramasi va jadid maktablari",
    desc: "Mahmudxo‘ja Behbudiy milliy ma’rifatparvarlik va teatrga asos soldi.",
  },
  {
    year: "1991-yil 31-avgust",
    era: "Yangi O‘zbekiston",
    title: "O‘zbekiston Mustaqilligi e’lon qilindi",
    desc: "Mustaqil suveren O‘zbekiston Respublikasi dunyo xaritasidan o‘rin oldi.",
  },
  {
    year: "2023-yil 30-aprel",
    era: "Yangi O‘zbekiston",
    title: "Yangilangan Konstitutsiya qabul qilindi",
    desc: "Umumxalq referendumi asosida huquqiy-ijtimoiy davlat tamoyillari mustahkamlandi.",
  },
];

function HistoryLab() {
  const [yearInput, setYearInput] = useState("1370");
  const [isBce, setIsBce] = useState(false);
  const [eraFilter, setEraFilter] = useState("Barchasi");

  const yearNum = Math.max(1, Math.min(3000, Math.floor(Number(yearInput) || 1)));
  const century = Math.ceil(yearNum / 100);
  const millennium = Math.ceil(yearNum / 1000);
  const eras = ["Barchasi", ...Array.from(new Set(timelineEvents.map((e) => e.era)))];
  const visibleTimeline =
    eraFilter === "Barchasi" ? timelineEvents : timelineEvents.filter((e) => e.era === eraFilter);

  return (
    <div className="space-y-6">
      <div className="border-b border-border pb-4">
        <div className="flex items-center gap-2 text-xs font-bold text-amber-600">
          <Landmark className="h-4 w-4" />
          <span>Xronologiya &amp; Vaqt chizig‘i</span>
        </div>
        <h3 className="mt-1 text-xl font-extrabold tracking-tight">Tarix Amaliy Laboratoriyasi</h3>
        <p className="text-xs sm:text-sm text-muted-foreground">
          Istalgan yilning qaysi asrga tegishli ekanligini aniqlang va asosiy tarixiy davrlar
          xronologiyasini ko‘rib chiqing.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-5 rounded-3xl border border-border bg-card p-6 shadow-sm space-y-4">
          <h4 className="text-base font-extrabold">Yildan asrni aniqlash trenajyori</h4>
          <div className="flex items-center gap-3">
            <input
              type="number"
              min="1"
              max="3000"
              value={yearInput}
              onChange={(e) => setYearInput(e.target.value)}
              className="w-36 rounded-xl border border-border bg-background px-3 py-2 text-base font-extrabold outline-none focus:border-amber-500 tabular-nums"
            />
            <button
              type="button"
              onClick={() => setIsBce((prev) => !prev)}
              className={`rounded-xl px-3.5 py-2 text-xs font-bold transition cursor-pointer ${
                isBce
                  ? "bg-amber-600 text-white"
                  : "border border-border bg-background hover:bg-accent"
              }`}
            >
              {isBce ? "Miloddan avvalgi" : "Milodiy"}
            </button>
          </div>

          <div className="rounded-2xl border border-amber-200/70 bg-amber-50/50 dark:bg-amber-950/20 p-4 space-y-2 tabular-nums">
            <div className="text-xs text-muted-foreground">Natija:</div>
            <div className="text-lg font-extrabold text-amber-700 dark:text-amber-300">
              {isBce ? "Mil. avv. " : ""}
              {toRoman(century)} asr ({century}-asr)
            </div>
            <div className="text-xs font-semibold">
              {isBce ? "Mil. avv. " : ""}
              {millennium}-ming yillik ·{" "}
              {yearNum % 100 === 0
                ? "Asrning oxirgi yili"
                : yearNum % 100 <= 50
                  ? "Asrning birinchi yarmi"
                  : "Asrning ikkinchi yarmi"}
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 rounded-3xl border border-border bg-card p-6 shadow-sm space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h4 className="text-base font-extrabold">Tarixiy xronologiya lentasi</h4>
            <div className="flex flex-wrap gap-1.5">
              {eras.map((era) => (
                <button
                  key={era}
                  type="button"
                  onClick={() => setEraFilter(era)}
                  className={`rounded-lg px-2.5 py-1 text-[11px] font-bold transition cursor-pointer ${
                    eraFilter === era
                      ? "bg-amber-600 text-white"
                      : "border border-border bg-background hover:bg-accent"
                  }`}
                >
                  {era}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3 border-l-2 border-amber-400/70 pl-4">
            {visibleTimeline.map((ev, idx) => (
              <div key={idx} className="rounded-2xl border border-border bg-background/70 p-3.5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-extrabold text-amber-700 dark:text-amber-400">
                    {ev.year}
                  </span>
                  <span className="text-[11px] font-semibold text-muted-foreground">{ev.era}</span>
                </div>
                <div className="mt-1 text-sm font-bold">{ev.title}</div>
                <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed">{ev.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
