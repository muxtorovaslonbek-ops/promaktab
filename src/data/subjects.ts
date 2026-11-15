export interface SubjectLessonSection {
  heading: string;
  content: string;
  formulaOrRule?: string;
  example: string;
  keyTakeaways: string[];
}

export interface SubjectLesson {
  id: string;
  title: string;
  grade: string;
  duration: string;
  level: "Asosiy" | "O‘rta" | "Chuqurlashtirilgan";
  summary: string;
  sections: SubjectLessonSection[];
}

export interface SubjectReferenceItem {
  id: string;
  title: string;
  expression: string;
  explanation: string;
  usage: string;
}

export interface SubjectExercise {
  id: string;
  title: string;
  level: string;
  question: string;
  hint: string;
  solution: string;
}

export interface SubjectQuizQuestion {
  id: string;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

export interface SubjectGlossaryItem {
  term: string;
  definition: string;
  example: string;
}

export interface SubjectFlashcard {
  id: string;
  front: string;
  back: string;
  hint?: string;
}

export interface SubjectData {
  id: string;
  title: string;
  shortName: string;
  category: "Aniq fanlar" | "Tabiiy fanlar" | "Ijtimoiy fanlar";
  grades: string;
  description: string;
  motto: string;
  referenceTabLabel: string;
  outcomes: string[];
  stats: {
    lessons: number;
    references: number;
    quizzes: number;
    hours: string;
  };
  lessons: SubjectLesson[];
  references: SubjectReferenceItem[];
  exercises: SubjectExercise[];
  quizzes: SubjectQuizQuestion[];
  glossary: SubjectGlossaryItem[];
  flashcards: SubjectFlashcard[];
}

export const subjectsOrder = ["matematika", "kimyo", "fizika", "biologiya", "tarix"] as const;

export const subjectsData: Record<string, SubjectData> = {
  matematika: {
    id: "matematika",
    title: "Matematika",
    shortName: "Matematika",
    category: "Aniq fanlar",
    grades: "5–11-sinflar",
    description:
      "Sonlar nazariyasi, algebraik ifodalar, tenglamalar, funksiyalar, planimetriya, stereometriya va ehtimollar nazariyasini tizimli o‘zlashtirish kursi.",
    motto: "Matematika — barcha fanlarning kaliti va mantiqiy tafakkur maktabidir.",
    referenceTabLabel: "Formulalar va teoremalar",
    outcomes: [
      "Qisqa ko‘paytirish formulalari va algebraik kasrlar ustida tezkor amallar bajarish",
      "Chiziqli, kvadrat, ratsional va ko‘rsatkichli tenglamalar hamda tengsizliklarni yechish",
      "Uchburchak, to‘rtburchak va aylana geometriyasi bo‘yicha asosiy teoremalarni qo‘llash",
      "Chiziqli, kvadratik va trigonometrik funksiyalarning grafik va xossalarini tahlil qilish",
      "Matnli masalalar, foizlar, progressiyalar va kombinatorika masalalarini ishlash",
    ],
    stats: {
      lessons: 14,
      references: 20,
      quizzes: 16,
      hours: "86 soat",
    },
    lessons: [
      {
        id: "mat-1",
        title: "Natural, butun va ratsional sonlar. Foiz va proporsiya",
        grade: "5–6-sinf",
        duration: "35 daqiqa",
        level: "Asosiy",
        summary:
          "Bo‘linish alomatlari, EKUB va EKUK, kasrlar ustida amallar hamda foiz va proporsiyaga oid amaliy masalalarni yechish usullari.",
        sections: [
          {
            heading: "Bo‘linish alomatlari, EKUB va EKUK",
            content:
              "Sonlarni tub ko‘paytuvchilarga ajratish kasrlarni qisqartirish va umumiy maxraj topishda asosiy vositadir. Ikki sonning eng katta umumiy bo‘luvchisi (EKUB) umumiy tub ko‘paytuvchilarning eng kichik darajalari ko‘paytmasiga teng; eng kichik umumiy karrali (EKUK) esa barcha tub ko‘paytuvchilarning eng katta darajalari ko‘paytmasidir.",
            formulaOrRule: "EKUB(a, b) · EKUK(a, b) = a · b",
            example:
              "24 va 36 sonlari uchun: 24 = 2³ · 3¹, 36 = 2² · 3². Shunda EKUB(24, 36) = 2² · 3¹ = 12; EKUK(24, 36) = 2³ · 3² = 72. Tekshirish: 12 · 72 = 864 = 24 · 36.",
            keyTakeaways: [
              "Raqamlari yig‘indisi 3 ga (9 ga) bo‘linsa, sonning o‘zi ham 3 ga (9 ga) bo‘linadi.",
              "1 soni tub ham emas, murakkab ham emas.",
            ],
          },
          {
            heading: "Kasrlar, proporsiya va foiz masalalari",
            content:
              "Proporsiya — ikki nisbatning tengligidir: a / b = c / d. Asosiy xossasiga ko‘ra chetki hadlar ko‘paytmasi o‘rta hadlar ko‘paytmasiga teng. Foiz esa sonning yuzdan bir qismi bo‘lib, iqtisodiy, kimyoviy eritma va kundalik hisoblarda keng qo‘llaniladi.",
            formulaOrRule: "a / b = c / d  ⇒  a · d = b · c;    p% of A = A · p / 100",
            example:
              "400 000 so‘mlik mahsulot avval 20% arzonlashdi, so‘ng yangi narx 10% oshdi. Arzonlashgandan keyin: 400 000 · 0.8 = 320 000 so‘m. So‘ng 10% oshsa: 320 000 · 1.1 = 352 000 so‘m.",
            keyTakeaways: [
              "Narx ketma-ket o‘zgarganda foizlar to‘g‘ridan-to‘g‘ri qo‘shilmaydi, balki ko‘paytuvchi orqali hisoblanadi.",
              "To‘g‘ri proporsional kattaliklarda birining ortishi ikkinchisini ham shuncha marta orttiradi.",
            ],
          },
        ],
      },
      {
        id: "mat-2",
        title: "Qisqa ko‘paytirish formulalari va ko‘phadlarni ko‘paytuvchilarga ajratish",
        grade: "7-sinf",
        duration: "40 daqiqa",
        level: "Asosiy",
        summary:
          "Algebraik ifodalarni soddalashtirish, qisqa ko‘paytirish ayniyatlari va to‘liq kvadrat ajratish usuli.",
        sections: [
          {
            heading: "Kvadrat va kub formulalari",
            content:
              "Qisqa ko‘paytirish formulalari algebraik kasrlarni qisqartirish, tenglamalarni yechish va funksiyalarning ekstremumini topishda poydevor bo‘lib xizmat qiladi.",
            formulaOrRule:
              "(a ± b)² = a² ± 2ab + b²;   a² − b² = (a − b)(a + b);   a³ ± b³ = (a ± b)(a² ∓ ab + b²)",
            example:
              "103² − 97² ifodani hisoblash: (103 − 97)(103 + 97) = 6 · 200 = 1200. (x² − 9) / (x − 3) kasrni x ≠ 3 da soddalashtirsak: (x − 3)(x + 3) / (x − 3) = x + 3.",
            keyTakeaways: [
              "a² + b² ni oddiy ko‘paytuvchilarga ajratib bo‘lmaydi, lekin (a + b)² − 2ab ko‘rinishida yozish mumkin.",
              "To‘liq kvadrat ajratish: x² + px = (x + p/2)² − (p/2)².",
            ],
          },
          {
            heading: "Guruhlash va umumiy ko‘paytuvchini qavsdan chiqarish",
            content:
              "Murakkab ko‘phadlarni ko‘paytuvchilarga ajratishda avval barcha hadlardagi umumiy ko‘paytuvchi qavsdan tashqariga chiqariladi, so‘ngra qisqa ko‘paytirish yoki guruhlash usullari qo‘llanadi.",
            formulaOrRule: "ax + ay + bx + by = a(x + y) + b(x + y) = (a + b)(x + y)",
            example:
              "x³ − 4x = x(x² − 4) = x(x − 2)(x + 2). Shu sababli x³ − 4x = 0 tenglamaning ildizlari x₁ = 0, x₂ = 2, x₃ = −2 bo‘ladi.",
            keyTakeaways: [
              "Har doim avval umumiy ko‘paytuvchini tekshiring.",
              "Guruhlashda qavs ichida bir xil ifoda hosil bo‘lishiga erishing.",
            ],
          },
        ],
      },
      {
        id: "mat-3",
        title: "Kvadrat tenglamalar, Viyet teoremasi va kvadratik funksiya",
        grade: "8-sinf",
        duration: "45 daqiqa",
        level: "O‘rta",
        summary:
          "Diskriminant orqali kvadrat tenglama yechish, Viyet teoremasi tatbiqlari va parabola grafigini qurish.",
        sections: [
          {
            heading: "Diskriminant va ildizlar soni",
            content:
              "ax² + bx + c = 0 (a ≠ 0) kvadrat tenglamaning ildizlari soni diskriminant D = b² − 4ac ishorasiga bog‘liq: D > 0 bo‘lsa 2 ta haqiqiy ildiz, D = 0 bo‘lsa 1 ta (karrali) ildiz, D < 0 bo‘lsa haqiqiy ildiz mavjud emas.",
            formulaOrRule: "D = b² − 4ac;   x₁,₂ = (−b ± √D) / (2a)",
            example:
              "2x² − 5x + 2 = 0: D = (−5)² − 4·2·2 = 25 − 16 = 9 > 0. x₁ = (5 + 3)/4 = 2, x₂ = (5 − 3)/4 = 0.5.",
            keyTakeaways: [
              "Agar b juft bo‘lsa (b = 2k), qulay formula: D₁ = k² − ac va x₁,₂ = (−k ± √D₁) / a.",
              "a + b + c = 0 bo‘lsa, bir ildizi albatta 1 ga, ikkinchisi c/a ga teng.",
            ],
          },
          {
            heading: "Viyet teoremasi va parabola uchi",
            content:
              "Keltirilgan x² + px + q = 0 kvadrat tenglama uchun Viyet teoremasi ildizlarning yig‘indisi va ko‘paytmasini topmasdan turib hisoblashga imkon beradi. y = ax² + bx + c funksiyaning grafigi parabola bo‘lib, uchining koordinatalari eng katta yoki eng kichik qiymatni aniqlaydi.",
            formulaOrRule: "x₁ + x₂ = −b/a,   x₁ · x₂ = c/a;   x₀ = −b/(2a),   y₀ = y(x₀)",
            example:
              "x² − 7x + 10 = 0 tenglama uchun x₁ + x₂ = 7, x₁ · x₂ = 10 ⇒ ildizlar 2 va 5. Shuningdek, x₁² + x₂² = (x₁ + x₂)² − 2x₁x₂ = 49 − 20 = 29.",
            keyTakeaways: [
              "a > 0 da parabola shoxlari yuqoriga, a < 0 da pastga qaragan bo‘ladi.",
              "Viyet teoremasini faqat D ≥ 0 bo‘lgandagina haqiqiy ildizlar uchun qo‘llang.",
            ],
          },
        ],
      },
      {
        id: "mat-4",
        title: "Arifmetik va geometrik progressiyalar",
        grade: "9-sinf",
        duration: "40 daqiqa",
        level: "O‘rta",
        summary:
          "Sonli ketma-ketliklar, umumiy had formulasi, dastlabki n ta had yig‘indisi va cheksiz kamayuvchi geometrik progressiya.",
        sections: [
          {
            heading: "Arifmetik progressiya",
            content:
              "Har bir hadi oldingi hadiga o‘zgarmas d sonini (ayirmani) qo‘shishdan hosil bo‘ladigan ketma-ketlik arifmetik progressiya deyiladi.",
            formulaOrRule:
              "aₙ = a₁ + (n − 1)d;   Sₙ = ((a₁ + aₙ) / 2) · n = ((2a₁ + (n − 1)d) / 2) · n",
            example:
              "a₁ = 3, d = 4 bo‘lsa, 10-had a₁₀ = 3 + 9·4 = 39. Dastlabki 10 ta had yig‘indisi: S₁₀ = ((3 + 39) / 2) · 10 = 210.",
            keyTakeaways: [
              "Har bir had qo‘shni hadlarining o‘rta arifmetigiga teng: aₙ = (aₙ₋₁ + aₙ₊₁) / 2.",
              "d > 0 da progressiya o‘suvchi, d < 0 da kamayuvchi bo‘ladi.",
            ],
          },
          {
            heading: "Geometrik progressiya va cheksiz yig‘indi",
            content:
              "Har bir hadi oldingi hadini o‘zgarmas q songa (maxrajga) ko‘paytirishdan hosil bo‘ladigan ketma-ketlik geometrik progressiyadir. Agar |q| < 1 bo‘lsa, cheksiz hadlar yig‘indisi aniq bir songa intiladi.",
            formulaOrRule:
              "bₙ = b₁ · qⁿ⁻¹;   Sₙ = b₁(qⁿ − 1)/(q − 1);   S = b₁ / (1 − q)  (|q| < 1)",
            example:
              "b₁ = 12, q = 1/3 cheksiz kamayuvchi geometrik progressiya yig‘indisi: S = 12 / (1 − 1/3) = 12 / (2/3) = 18.",
            keyTakeaways: [
              "bₙ² = bₙ₋₁ · bₙ₊₁ (geometrik o‘rta xossasi).",
              "Bank foizlari va bakteriyalar ko‘payishi geometrik progressiya bilan modellashtiriladi.",
            ],
          },
        ],
      },
      {
        id: "mat-5",
        title: "Planimetriya: Uchburchak, to‘rtburchak va aylana",
        grade: "7–9-sinf",
        duration: "45 daqiqa",
        level: "O‘rta",
        summary:
          "Pifagor teoremasi, sinuslar va kosinuslar teoremasi, yuz formulalari hamda aylanaga ichki va tashqi chizilgan burchaklar.",
        sections: [
          {
            heading: "To‘g‘ri burchakli va ixtiyoriy uchburchaklar",
            content:
              "To‘g‘ri burchakli uchburchakda gipotenuza kvadrati katetlar kvadratlari yig‘indisiga teng. Ixtiyoriy uchburchaklarda tomonlar va burchaklar o‘zaro sinuslar hamda kosinuslar teoremalari orqali bog‘lanadi.",
            formulaOrRule:
              "a² + b² = c²;   c² = a² + b² − 2ab·cos(γ);   a/sin(α) = b/sin(β) = c/sin(γ) = 2R",
            example:
              "Tomonlari a = 5, b = 8 va ular orasidagi burchagi 60° bo‘lgan uchburchak uchinchi tomoni: c² = 25 + 64 − 2·5·8·0.5 = 89 − 40 = 49 ⇒ c = 7. Yuzi: S = 0.5·5·8·sin(60°) = 10√3.",
            keyTakeaways: [
              "Uchburchak ichki burchaklari yig‘indisi doimo 180° ga teng.",
              "Geron formulasi: S = √(p(p − a)(p − b)(p − c)), bu yerda p = (a + b + c)/2.",
            ],
          },
          {
            heading: "Aylana, vatar va urinma xossalari",
            content:
              "Aylanaga ichki chizilgan burchak o‘zi tiralgan yoyning yarmiga, markaziy burchak esa yoyning o‘ziga teng. Diametrga tiralgan ichki chizilgan burchak doimo 90° bo‘ladi.",
            formulaOrRule: "L = 2πR;   S = πR²;   ∠ichki = ½ ∠markaziy",
            example:
              "Radiusi R = 6 sm bo‘lgan aylanada 60° li markaziy burchakka mos yoy uzunligi: l = 2π·6 · (60/360) = 2π sm.",
            keyTakeaways: [
              "Urinma urinish nuqtasiga o‘tkazilgan radiusga perpendikulyardir.",
              "Bir nuqtadan aylanaga o‘tkazilgan ikkita urinma kesmalari o‘zaro teng.",
            ],
          },
        ],
      },
      {
        id: "mat-6",
        title: "Trigonometriya va hosila asoslari",
        grade: "10–11-sinf",
        duration: "50 daqiqa",
        level: "Chuqurlashtirilgan",
        summary:
          "Asosiy trigonometrik ayniyatlar, qo‘shish formulalari, hosila jadvali va funksiyaning o‘sish-kamayish oraliqlarini tekshirish.",
        sections: [
          {
            heading: "Trigonometrik ayniyatlar va burchaklarni keltirish",
            content:
              "Birlik aylanada sin(α) nuqtaning ordinatasi, cos(α) esa abssissasidir. Shu sababli barcha asosiy trigonometrik ayniyatlar Pifagor teoremasidan bevosita kelib chiqadi.",
            formulaOrRule: "sin²α + cos²α = 1;   sin(2α) = 2sinα·cosα;   cos(2α) = cos²α − sin²α",
            example:
              "Agar sinα = 3/5 va α ∈ (0, π/2) bo‘lsa, cosα = √(1 − 9/25) = 4/5. Shunda sin(2α) = 2·(3/5)·(4/5) = 24/25.",
            keyTakeaways: [
              "1 + tg²α = 1 / cos²α ayniyat ko‘p tenglamalarni soddalashtiradi.",
              "I chorakda barcha funksiyalar musbat, II chorakda faqat sin musbat.",
            ],
          },
          {
            heading: "Hosila va funksiyani tekshirish",
            content:
              "Funksiyaning biror nuqtadagi hosilasi shu nuqtadagi o‘zgarish tezligini va grafik urinmasining burchak koeffitsiyentini bildiradi. f'(x) > 0 oraliqlarda funksiya o‘sadi, f'(x) < 0 oraliqlarda kamayadi.",
            formulaOrRule: "(xⁿ)' = n·xⁿ⁻¹;   (sin x)' = cos x;   (cos x)' = −sin x;   (eˣ)' = eˣ",
            example:
              "f(x) = x³ − 3x² funksiyaning statsionar nuqtalarini topish: f'(x) = 3x² − 6x = 3x(x − 2) = 0 ⇒ x = 0 (maksimum) va x = 2 (minimum).",
            keyTakeaways: [
              "O‘zgarmas sonning hosilasi 0 ga teng.",
              "Ekstremum nuqtada hosila nolga teng bo‘ladi yoki mavjud bo‘lmaydi.",
            ],
          },
        ],
      },
      {
        id: "mat-7",
        title: "Tengsizliklar va modul qatnashgan ifodalar",
        grade: "8–9-sinf",
        duration: "40 daqiqa",
        level: "O‘rta",
        summary:
          "Chiziqli va kvadrat tengsizliklarni intervallar usulida yechish, sonning moduli va modulli tenglamalar.",
        sections: [
          {
            heading: "Intervallar usuli bilan tengsizliklarni yechish",
            content:
              "Ratsional va kvadrat tengsizliklarni yechish uchun funksiya nolga aylanadigan nuqtalar (va maxraj nollari) son o‘qida belgilanib, oraliqlardagi ishoralar navbatma-navbat aniqlanadi. Manfiy songa ko‘paytirish yoki bo‘lishda tengsizlik ishorasi qarama-qarshisiga o‘zgaradi.",
            formulaOrRule: "(x − a)(x − b) > 0  ⇒  x ∈ (−∞; a) ∪ (b; +∞)   (a < b)",
            example:
              "x² − 5x + 6 ≤ 0 tengsizlikni yechamiz: (x − 2)(x − 3) ≤ 0. Ildizlar 2 va 3; oraliqlarda ishoralar +, −, +. Javob: x ∈ [2; 3].",
            keyTakeaways: [
              "Qat’iy tengsizliklarda (<, >) nuqtalar bo‘yalmaydi va qavs oddiy ( ) bo‘ladi.",
              "Juft karrali ildizdan o‘tganda ifoda ishorasi o‘zgarmaydi.",
            ],
          },
          {
            heading: "Sonning moduli xossalari",
            content:
              "Haqiqiy a sonning moduli |a| deb uning son o‘qidagi koordinatalar boshigacha bo‘lgan masofasiga aytiladi; shuning uchun |a| ≥ 0. Modulli tengsizliklar ikki tomonlama yoki birlashma ko‘rinishida ochiladi.",
            formulaOrRule: "|x| ≤ a ⇔ −a ≤ x ≤ a;    |x| ≥ a ⇔ x ≤ −a  yoki  x ≥ a   (a > 0)",
            example: "|2x − 3| < 5 ⇒ −5 < 2x − 3 < 5 ⇒ −2 < 2x < 8 ⇒ x ∈ (−1; 4).",
            keyTakeaways: [
              "√(a²) = |a| ayniyati algebra masalalarida ko‘p ishlatiladi.",
              "|x| = −5 kabi tenglamaning yechimi yo‘q (bo‘sh to‘plam ∅).",
            ],
          },
        ],
      },
      {
        id: "mat-8",
        title: "Ko‘rsatkichli va logarifmik tenglamalar",
        grade: "10–11-sinf",
        duration: "45 daqiqa",
        level: "Chuqurlashtirilgan",
        summary:
          "Ko‘rsatkichli funksiyaning monotonligi, asosni tenglashtirish, yangi o‘zgaruvchi kiritish va logarifmik tenglamalarda aniqlanish sohasi (AOS).",
        sections: [
          {
            heading: "Ko‘rsatkichli tenglamalar va tengsizliklar",
            content:
              "a > 0 va a ≠ 1 bo‘lganda aˣ = aʸ tenglamadan x = y kelib chiqadi. Tengsizliklarda agar asos a > 1 bo‘lsa ishora saqlanadi, 0 < a < 1 bo‘lsa ishora qarama-qarshi tomonga o‘zgaradi.",
            formulaOrRule: "aˣ = b (b > 0) ⇒ x = logₐb;   (0 < a < 1): aˣ > aʸ ⇒ x < y",
            example:
              "4ˣ − 3·2ˣ − 4 = 0 tenglamada 2ˣ = t (t > 0) belgilash kiritamiz: t² − 3t − 4 = 0 ⇒ t = 4 (t = −1 yaroqsiz). 2ˣ = 4 ⇒ x = 2.",
            keyTakeaways: [
              "aˣ > 0 har qanday haqiqiy x uchun o‘rinlidir.",
              "Asos 1 dan kichik kasr bo‘lganda tengsizlik ishorasini almashtirishni unutmang.",
            ],
          },
          {
            heading: "Logarifmik tenglamalarda aniqlanish sohasi",
            content:
              "logₐf(x) ifoda faqat f(x) > 0, a > 0 va a ≠ 1 shartlar bajarilgandagina ma’noga ega. Tenglamani yechish oxirida topilgan ildizlar aniqlanish sohasiga (AOS) tekshirilishi shart.",
            formulaOrRule: "logₐf(x) = logₐg(x)  ⇒  f(x) = g(x)  va  f(x) > 0, g(x) > 0",
            example:
              "log₂(x + 3) + log₂(x − 1) = 5. AOS: x > 1. Ko‘paytma xossasi: log₂((x + 3)(x − 1)) = 5 ⇒ x² + 2x − 3 = 32 ⇒ x² + 2x − 35 = 0 ⇒ x = 5 (x = −7 AOS ga kirmaydi).",
            keyTakeaways: [
              "Asosga o‘tish formulasi: logₐb = log_c(b) / log_c(a).",
              "Chet ildizlarni yo‘qotish uchun har doim logarifm ostidagi ifoda musbatligini tekshiring.",
            ],
          },
        ],
      },
      {
        id: "mat-9",
        title: "Stereometriya: ko‘pyoqlar va aylanish jismlari",
        grade: "10–11-sinf",
        duration: "45 daqiqa",
        level: "O‘rta",
        summary:
          "Fazoviy jismlarning sirt yuzi va hajmi: prizma, piramida, silindr, konus hamda shar (sfera).",
        sections: [
          {
            heading: "Prizma va piramida hajmi hamda sirti",
            content:
              "Prizmaning hajmi asos yuzi bilan balandlik ko‘paytmasiga teng. Piramida hajmi esa xuddi shunday asos va balandlikka ega prizma hajmining uchdan biriga teng bo‘ladi.",
            formulaOrRule: "V(prizma) = S(asos) · H;    V(piramida) = ⅓ · S(asos) · H",
            example:
              "Asosi tomoni 6 sm bo‘lgan kvadrat, balandligi 10 sm bo‘lgan muntazam to‘rtburchakli piramida hajmi: S(asos) = 36 sm², V = ⅓ · 36 · 10 = 120 sm³.",
            keyTakeaways: [
              "To‘g‘ri prizmaning yon sirti S(yon) = P(asos) · H ga teng.",
              "Kubning tomoni a bo‘lsa, V = a³, S(to‘la) = 6a², diagonali d = a√3.",
            ],
          },
          {
            heading: "Silindr, konus va shar formulalari",
            content:
              "Aylanish jismlari to‘g‘ri to‘rtburchak, to‘g‘ri burchakli uchburchak va yarim doirani o‘z o‘qi atrofida aylantirishdan hosil bo‘ladi.",
            formulaOrRule:
              "V(silindr) = πR²H;   V(konus) = ⅓πR²H;   V(shar) = ⁴⁄₃πR³;   S(sfera) = 4πR²",
            example:
              "Radiusi R = 3 sm va balandligi H = 4 sm bo‘lgan konusning yasovchisi l = √(3² + 4²) = 5 sm, yon sirti S(yon) = πRl = 15π sm².",
            keyTakeaways: [
              "Silindr va konus o‘q kesimlari mos ravishda to‘g‘ri to‘rtburchak va teng yonli uchburchakdir.",
              "Shar radiusi 2 marta ortsa, uning sirt yuzi 4 marta, hajmi esa 8 marta ortadi.",
            ],
          },
        ],
      },
      {
        id: "mat-10",
        title: "Kombinatorika va ehtimollar nazariyasi",
        grade: "9–11-sinf",
        duration: "40 daqiqa",
        level: "O‘rta",
        summary:
          "Faktorial, o‘rinlashtirish, guruhlash (kombinatsiya), Nyuton binomi hamda klassik ehtimollik formulasi.",
        sections: [
          {
            heading: "Kombinatorika asosiy formulalari",
            content:
              "n ta elementdan tartibi muhim bo‘lgan barcha o‘rin almashtirishlar soni Pₙ = n! ga teng. Tartib muhim bo‘lganda o‘rinlashtirish (Aₙᵏ), tartib muhim bo‘lmaganda esa guruhlash (Cₙᵏ) qo‘llaniladi.",
            formulaOrRule: "Pₙ = n!;   Aₙᵏ = n! / (n − k)!;   Cₙᵏ = n! / (k! · (n − k)!)",
            example:
              "Sinfdagi 10 nafar o‘quvchidan 3 kishilik navbatchilar guruhini necha xil usulda tanlash mumkin? Tartib muhim emas: C₁₀³ = (10 · 9 · 8) / (3 · 2 · 1) = 120 xil usul.",
            keyTakeaways: [
              "0! = 1 va Cₙ⁰ = Cₙⁿ = 1 deb qabul qilingan.",
              "Simmetriya xossasi: Cₙᵏ = Cₙⁿ⁻ᵏ.",
            ],
          },
          {
            heading: "Hodisa ehtimolligi va qo‘shish qoidasi",
            content:
              "Teng imkoniyatli tajribada A hodisaning ro‘y berish ehtimolligi P(A) = m / n formula bilan topiladi, bu yerda m — qulay natijalar soni, n — barcha mumkin bo‘lgan natijalar soni.",
            formulaOrRule: "P(A) = m / n   (0 ≤ P(A) ≤ 1);    P(Ā) = 1 − P(A)",
            example:
              "Qutida 4 ta qizil va 6 ta ko‘k shar bor. Tasodifan olingan bitta sharning qizil chiqish ehtimoli P = 4 / (4 + 6) = 0.4 (40%).",
            keyTakeaways: [
              "Muqarrar hodisaning ehtimolligi 1, mumkin bo‘lmagan hodisaniki 0 ga teng.",
              "Mustaqil A va B hodisalar birgalikda ro‘y berish ehtimoli P(A∩B) = P(A)·P(B).",
            ],
          },
        ],
      },
      {
        id: "mat-11",
        title: "Irratsional ifodalar va tenglamalar",
        grade: "9–10-sinf",
        duration: "40 daqiqa",
        level: "O‘rta",
        summary:
          "Kvadrat ildiz va n-darajali ildiz xossalari, kasr maxrajini irratsionallikdan qutqarish va irratsional tenglamalarni yechish.",
        sections: [
          {
            heading: "n-darajali ildiz xossalari",
            content:
              "Juft darajali ildiz √(2k)(a) faqat a ≥ 0 bo‘lganda aniqlanadi va qiymati manfiy bo‘lmaydi. Toq darajali ildiz esa barcha haqiqiy sonlar uchun mavjud.",
            formulaOrRule: "√(ab) = √a · √b;   √(a²) = |a|;   (ⁿ√a)ⁿ = a",
            example:
              "Maxrajni irratsionallikdan qutqarish: 6 / √3 = (6√3) / 3 = 2√3. Yoki 2 / (√5 − 1) = 2(√5 + 1) / (5 − 1) = (√5 + 1)/2.",
            keyTakeaways: [
              "Ildiz ichidan musbat sonni chiqarishda modul belgisini unutmang: √(x²) = |x|.",
              "Qo‘shma ifoda (a − √b)(a + √b) = a² − b yordamida maxraj ratsionallashtiriladi.",
            ],
          },
          {
            heading: "Irratsional tenglamalarni tekshirish",
            content:
              "√f(x) = g(x) ko‘rinishidagi tenglamani ikki tomonini kvadratga ko‘targanda chet ildizlar paydo bo‘lishi mumkin; shuning uchun g(x) ≥ 0 shartini qo‘yish yoki javobni o‘rniga qo‘yib tekshirish shart.",
            formulaOrRule: "√f(x) = g(x)  ⇔  { f(x) = (g(x))²,  g(x) ≥ 0 }",
            example:
              "√(x + 6) = x ⇒ x + 6 = x² (x ≥ 0 sharti bilan). x² − x − 6 = 0 ⇒ x = 3 va x = −2. x ≥ 0 bo‘lgani uchun yagona javob x = 3.",
            keyTakeaways: [
              "Arifmetik kvadrat ildiz qiymati hech qachon manfiy bo‘lmaydi.",
              "Kvadratga ko‘targandan so‘ng olingan barcha ildizlarni asl tenglamada tekshiring.",
            ],
          },
        ],
      },
      {
        id: "mat-12",
        title: "Vektorlar va koordinatalar usuli",
        grade: "8–10-sinf",
        duration: "40 daqiqa",
        level: "O‘rta",
        summary:
          "Vektor koordinatalari, uzunligi, vektorlarni qo‘shish, skalyar ko‘paytma va vektorlar orasidagi burchakni topish.",
        sections: [
          {
            heading: "Vektor koordinatalari va uzunligi",
            content:
              "A(x₁; y₁) va B(x₂; y₂) nuqtalar berilgan bo‘lsa, AB vektorining koordinatalari oxiridan boshini ayirish bilan topiladi: (x₂ − x₁; y₂ − y₁). Kesma o‘rtasi esa koordinatalar o‘rta arifmetigidir.",
            formulaOrRule: "|ā| = √(x² + y²);    ā + b̄ = (x₁ + x₂; y₁ + y₂)",
            example:
              "A(1; 2) va B(4; 6) nuqtalar orasidagi masofa: AB̄ = (3; 4), uzunligi |AB̄| = √(3² + 4²) = 5.",
            keyTakeaways: [
              "Ikki vektor kollinear (parallel) bo‘lsa, ularning mos koordinatalari proporsional: x₁/x₂ = y₁/y₂.",
              "Nol vektorning uzunligi 0 ga teng, yo‘nalishi ixtiyoriy.",
            ],
          },
          {
            heading: "Skalyar ko‘paytma va perpendikulyarlik",
            content:
              "Ikki vektorning skalyar ko‘paytmasi ularning uzunliklari va orasidagi burchak kosinusi ko‘paytmasiga teng. Koordinatalarda esa mos koordinatalar ko‘paytmalarining yig‘indisi bo‘ladi.",
            formulaOrRule: "ā · b̄ = |ā|·|b̄|·cosα = x₁x₂ + y₁y₂;   ā ⊥ b̄ ⇔ x₁x₂ + y₁y₂ = 0",
            example:
              "ā = (2; −3) va b̄ = (6; 4) vektorlar perpendikulyarmi? Skalyar ko‘paytma: 2·6 + (−3)·4 = 12 − 12 = 0 ⇒ Ha, perpendikulyar!",
            keyTakeaways: [
              "Skalyar ko‘paytma natijasi vektor emas, balki oddiy haqiqiy sondir.",
              "cosα = (ā · b̄) / (|ā| · |b̄|) orqali vektorlar orasidagi burchak topiladi.",
            ],
          },
        ],
      },
      {
        id: "mat-13",
        title: "Boshlang‘ich funksiya va aniq integral",
        grade: "11-sinf",
        duration: "45 daqiqa",
        level: "Chuqurlashtirilgan",
        summary:
          "Boshlang‘ich funksiya tushunchasi, integrallash jadvali, Nyuton-Leybnits formulasi va egri chiziqli trapetsiya yuzi.",
        sections: [
          {
            heading: "Boshlang‘ich funksiya va aniqmas integral",
            content:
              "Agar F'(x) = f(x) bo‘lsa, F(x) funksiya f(x) ning boshlang‘ich funksiyasi deyiladi. Integrallash differensiallashga (hosila olishga) teskari amaldir.",
            formulaOrRule: "∫xⁿ dx = xⁿ⁺¹ / (n + 1) + C  (n ≠ −1);   ∫cos x dx = sin x + C",
            example:
              "f(x) = 3x² − 4x funksiyaning umumiy boshlang‘ich funksiyasi: F(x) = x³ − 2x² + C.",
            keyTakeaways: [
              "Bitta funksiyaning boshlang‘ich funksiyalari o‘zaro o‘zgarmas son C ga farq qiladi.",
              "∫(1/x) dx = ln|x| + C; ∫eˣ dx = eˣ + C.",
            ],
          },
          {
            heading: "Egri chiziqli trapetsiya yuzini topish",
            content:
              "y = f(x) ≥ 0 grafigi, Ox o‘qi hamda x = a va x = b to‘g‘ri chiziqlar bilan chegaralangan shakl yuzi aniq integral yordamida Nyuton-Leybnits formulasi orqali hisoblanadi.",
            formulaOrRule: "S = ∫ₐᵇ f(x) dx = F(b) − F(a)",
            example:
              "y = x² parabolasi, y = 0 va x = 0, x = 3 chiziqlar bilan chegaralangan yuz: S = ∫₀³ x² dx = [x³/3]₀³ = 27/3 − 0 = 9 kv. birlik.",
            keyTakeaways: [
              "Fizikada tezlikning vaqt bo‘yicha aniq integrali bosib o‘tilgan yo‘lni beradi.",
              "Integrallash chegaralari almashtirilsa, integral ishorasi qarama-qarshisiga o‘zgaradi.",
            ],
          },
        ],
      },
      {
        id: "mat-14",
        title: "Matnli harakat, ish va aralashma masalalari",
        grade: "6–9-sinf",
        duration: "35 daqiqa",
        level: "Asosiy",
        summary:
          "Oqim bo‘ylab va oqimga qarshi harakat, birgalikda bajariladigan ish hamda eritma/qotishma konsentratsiyasiga doir matnli masalalar.",
        sections: [
          {
            heading: "Harakat va birgalikda ish masalalari",
            content:
              "Daryoda kater oqim bo‘ylab harakatlanganda tezligi v(kater) + v(oqim), oqimga qarshi esa v(kater) − v(oqim) bo‘ladi. Ish masalalarida butun ish «1» deb olinib, ish unumlari qo‘shiladi.",
            formulaOrRule: "1 / t(umumiy) = 1 / t₁ + 1 / t₂;    v(nisbiy) = v₁ ± v₂",
            example:
              "Birinchi quvur hovuzni 6 soatda, ikkinchisi 3 soatda to‘ldiradi. Ikkalasi birga: 1/6 + 1/3 = 3/6 = 1/2 ⇒ 2 soatda to‘ldiradi.",
            keyTakeaways: [
              "Qarama-qarshi harakatda yaqinlashish tezligi v₁ + v₂ ga teng.",
              "Bir tomonga harakatda quvib yetish tezligi v₁ − v₂ ga teng.",
            ],
          },
          {
            heading: "Aralashma va qotishma masalalari",
            content:
              "Ikki eritma aralashtirilganda erigan sof moddalar massalari yig‘indisi saqlanadi. Umumiy formula bilan istalgan konsentratsiyani topish mumkin.",
            formulaOrRule: "m₁·w₁ + m₂·w₂ = (m₁ + m₂)·w(aralashma)",
            example:
              "200 g 10% li tuz eritmasiga 300 g 20% li eritma qo‘shilsa: sof tuz = 20 + 60 = 80 g; umumiy massa 500 g; w = 80/500 · 100% = 16%.",
            keyTakeaways: [
              "Sof suv qo‘shilganda moddaning ulushi 0%, sof tuz qo‘shilganda 100% deb olinadi.",
              "Bug‘latilganda faqat erituvchi (suv) massasi kamayadi, tuz massasi o‘zgarmaydi.",
            ],
          },
        ],
      },
    ],
    references: [
      {
        id: "mref-1",
        title: "Kvadratlar ayirmasi",
        expression: "a² − b² = (a − b)(a + b)",
        explanation: "Ikki ifoda kvadratlarining ayirmasini ko‘paytuvchilarga ajratish formulasi.",
        usage: "Kasrlarni qisqartirish va tezkor og‘zaki hisoblashda.",
      },
      {
        id: "mref-2",
        title: "Kvadrat tenglama ildizlari",
        expression: "x₁,₂ = (−b ± √(b² − 4ac)) / (2a)",
        explanation: "ax² + bx + c = 0 tenglamaning umumiy yechim formulasi.",
        usage: "Har qanday D ≥ 0 bo‘lgan kvadrat tenglamada.",
      },
      {
        id: "mref-3",
        title: "Viyet teoremasi",
        expression: "x₁ + x₂ = −b/a,  x₁ · x₂ = c/a",
        explanation: "Kvadrat tenglama ildizlari va koeffitsiyentlari orasidagi bog‘lanish.",
        usage: "Ildizlarni tanlash va simmetrik ifodalarni hisoblashda.",
      },
      {
        id: "mref-4",
        title: "Pifagor teoremasi",
        expression: "a² + b² = c²",
        explanation: "To‘g‘ri burchakli uchburchak katetlari va gipotenuzasi munosabati.",
        usage: "Planimetriya, koordinata masalalari va vektor uzunligida.",
      },
      {
        id: "mref-5",
        title: "Kosinuslar teoremasi",
        expression: "c² = a² + b² − 2ab·cos(γ)",
        explanation:
          "Ixtiyoriy uchburchakning uchinchi tomonini ikki tomon va burchak orqali topish.",
        usage: "Uchburchak burchaklari yoki noma’lum tomonini topishda.",
      },
      {
        id: "mref-6",
        title: "Arifmetik progressiya yig‘indisi",
        expression: "Sₙ = ((a₁ + aₙ) / 2) · n",
        explanation: "Birinchi n ta hadning yig‘indisi.",
        usage: "Bir tekis o‘zgaruvchi ketma-ketliklarda.",
      },
      {
        id: "mref-7",
        title: "Cheksiz geometrik progressiya",
        expression: "S = b₁ / (1 − q),  |q| < 1",
        explanation: "Cheksiz kamayuvchi geometrik progressiyaning barcha hadlari yig‘indisi.",
        usage: "Davriy o‘nli kasrlarni oddiy kasrga aylantirishda.",
      },
      {
        id: "mref-8",
        title: "Logarifm asosiy xossalari",
        expression: "logₐ(xy) = logₐx + logₐy;  a^(logₐb) = b",
        explanation: "Ko‘paytma logarifmi va asosiy logarifmik ayniyat (a > 0, a ≠ 1).",
        usage: "Ko‘rsatkichli va logarifmik tenglamalarda.",
      },
      {
        id: "mref-9",
        title: "Trigonometrik asosiy ayniyat",
        expression: "sin²α + cos²α = 1",
        explanation: "Birlik aylanadan kelib chiquvchi asosiy bog‘lanish.",
        usage: "Barcha trigonometrik soddalashtirishlarda.",
      },
      {
        id: "mref-10",
        title: "Aylana va doira o‘lchamlari",
        expression: "L = 2πR,   S = πR²",
        explanation: "R radiusli aylana uzunligi va doira yuzi.",
        usage: "Geometriya va muhandislik hisoblarida.",
      },
      {
        id: "mref-11",
        title: "Ikkilangan burchak formulalari",
        expression: "sin(2α) = 2sinα·cosα;   cos(2α) = cos²α − sin²α",
        explanation:
          "Ikkilangan burchak sinus va kosinusini bir burchak funksiyalari orqali ifodalash.",
        usage: "Trigonometrik tenglamalar va darajani pasaytirishda.",
      },
      {
        id: "mref-12",
        title: "Prizma va piramida hajmi",
        expression: "V(prizma) = S(asos)·H;   V(piramida) = ⅓·S(asos)·H",
        explanation: "Ko‘pyoqli fazoviy jismlarning hajm formulalari.",
        usage: "Stereometriya va qurilish hisob-kitoblarida.",
      },
      {
        id: "mref-13",
        title: "Konus va shar formulalari",
        expression: "V(konus) = ⅓πR²H;   V(shar) = ⁴⁄₃πR³;   S(shar) = 4πR²",
        explanation: "Aylanish jismlarining hajmi va sfera sirt yuzi.",
        usage: "Fazoviy geometriya masalalarida.",
      },
      {
        id: "mref-14",
        title: "Guruhlash (Kombinatsiya) formulasi",
        expression: "Cₙᵏ = n! / (k! · (n − k)!)",
        explanation: "n ta elementdan tartibi ahamiyatsiz k tasini tanlash usullari soni.",
        usage: "Kombinatorika va ehtimollar nazariyasida.",
      },
      {
        id: "mref-15",
        title: "Nyuton-Leybnits aniq integral formulasi",
        expression: "∫ₐᵇ f(x)dx = F(b) − F(a)",
        explanation: "Egri chiziqli trapetsiya yuzini boshlang‘ich funksiya F(x) orqali topish.",
        usage: "Oliy matematika, maydon va ish hisoblarida.",
      },
      {
        id: "mref-16",
        title: "Skalyar ko‘paytma (Vektorlar)",
        expression: "ā · b̄ = x₁x₂ + y₁y₂ = |ā|·|b̄|·cosα",
        explanation: "Ikki vektor orasidagi burchak va perpendikulyarlik shartini aniqlash.",
        usage: "Analitik geometriya va fizika masalalarida.",
      },
      {
        id: "mref-17",
        title: "Ikki nuqta orasidagi masofa",
        expression: "d = √((x₂ − x₁)² + (y₂ − y₁)²)",
        explanation: "Koordinata tekisligida A(x₁; y₁) va B(x₂; y₂) nuqtalar orasidagi masofa.",
        usage: "Koordinatalar usuli va kesma uzunligida.",
      },
      {
        id: "mref-18",
        title: "Uchburchak yuzi (Geron formulasi)",
        expression: "S = √(p(p − a)(p − b)(p − c)),   p = (a + b + c)/2",
        explanation: "Uchta tomoni ma’lum bo‘lgan uchburchakning yuzini topish.",
        usage: "Planimetriya masalalarida balandlik noma’lum bo‘lganda.",
      },
      {
        id: "mref-19",
        title: "Sinuslar teoremasi",
        expression: "a / sinα = b / sinβ = c / sinγ = 2R",
        explanation: "Uchburchak tomonlari qarshisidagi burchaklar sinusiga proporsional.",
        usage: "Tashqi chizilgan aylana radiusi R ni topishda.",
      },
      {
        id: "mref-20",
        title: "Ko‘pburchak ichki burchaklar yig‘indisi",
        expression: "Σ = 180° · (n − 2)",
        explanation: "n tomonli qavariq ko‘pburchakning barcha ichki burchaklari yig‘indisi.",
        usage: "Muntazam ko‘pburchak burchagini topishda.",
      },
    ],
    exercises: [
      {
        id: "mex-1",
        title: "Foizli arzonlashtirish va ustama",
        level: "O‘rta",
        question:
          "Kitobning narxi 50 000 so‘m edi. U avval 10% ga oshirildi, keyin esa yangi narxi 20% ga arzonlashtirildi. Kitobning oxirgi narxini toping.",
        hint: "10% oshish — 1.1 ga ko‘paytirish, 20% arzonlashish — 0.8 ga ko‘paytirish demakdir.",
        solution:
          "1-qadam: 50 000 · 1.1 = 55 000 so‘m. 2-qadam: 55 000 · 0.8 = 44 000 so‘m. Javob: 44 000 so‘m.",
      },
      {
        id: "mex-2",
        title: "Viyet teoremasi tatbiqi",
        level: "O‘rta",
        question:
          "x² − 6x + 4 = 0 tenglamaning ildizlari x₁ va x₂ bo‘lsa, 1/x₁ + 1/x₂ ifodaning qiymatini hisoblang.",
        hint: "Kasrlarni umumiy maxrajga keltiring: (x₁ + x₂) / (x₁ · x₂).",
        solution:
          "Viyet teoremasiga ko‘ra x₁ + x₂ = 6 va x₁ · x₂ = 4. Shunda 1/x₁ + 1/x₂ = (x₁ + x₂) / (x₁ · x₂) = 6 / 4 = 1.5.",
      },
      {
        id: "mex-3",
        title: "To‘g‘ri burchakli uchburchak",
        level: "Asosiy",
        question:
          "Katetlari 9 sm va 12 sm bo‘lgan to‘g‘ri burchakli uchburchakning gipotenuzasini va yuzini toping.",
        hint: "Pifagor teoremasi c = √(a² + b²) va yuz formulasi S = ½ · a · b dan foydalaning.",
        solution:
          "c = √(9² + 12²) = √(81 + 144) = √225 = 15 sm. S = (9 · 12) / 2 = 54 sm². Javob: 15 sm va 54 sm².",
      },
      {
        id: "mex-4",
        title: "Arifmetik progressiya masalasi",
        level: "Chuqurlashtirilgan",
        question:
          "Arifmetik progressiyada a₃ = 11 va a₇ = 23 bo‘lsa, a₁ va progressiya ayirmasi d ni toping.",
        hint: "a₇ − a₃ = 4d tenglikdan foydalaning.",
        solution:
          "4d = 23 − 11 = 12 ⇒ d = 3. a₃ = a₁ + 2d = 11 ⇒ a₁ = 11 − 6 = 5. Javob: a₁ = 5, d = 3.",
      },
      {
        id: "mex-5",
        title: "Ko‘rsatkichli tenglama yechish",
        level: "O‘rta",
        question: "9ˣ − 4·3ˣ + 3 = 0 tenglamaning barcha haqiqiy ildizlarini toping.",
        hint: "9ˣ = (3ˣ)² ekanligidan foydalanib, 3ˣ = t deb belgilang.",
        solution:
          "t² − 4t + 3 = 0 ⇒ t₁ = 1, t₂ = 3. Demak, 3ˣ = 1 ⇒ x₁ = 0 va 3ˣ = 3 ⇒ x₂ = 1. Javob: {0; 1}.",
      },
      {
        id: "mex-6",
        title: "Kombinatorika va ehtimollik",
        level: "Chuqurlashtirilgan",
        question:
          "O‘yin shashkasining bitta toshi (kubik, 1 dan 6 gacha) bir marta tashlanganda juft yoki 5 dan katta son tushish ehtimoli qancha?",
        hint: "Qulay natijalarni sanang: juft sonlar {2, 4, 6}, 5 dan katta son {6}.",
        solution:
          "Umumiy natijalar n = 6. Qulay natijalar to‘plami {2, 4, 6} bo‘lib, m = 3 ta. P = 3 / 6 = 0.5.",
      },
      {
        id: "mex-7",
        title: "Irratsional tenglama",
        level: "O‘rta",
        question: "√(3x + 1) = 4 tenglamaning ildizini toping.",
        hint: "Har ikki tomonni kvadratga ko‘taring va tekshiring.",
        solution: "3x + 1 = 16 ⇒ 3x = 15 ⇒ x = 5. Tekshirish: √(15 + 1) = √16 = 4. Javob: 5.",
      },
      {
        id: "mex-8",
        title: "Vektorlar perpendikulyarligi",
        level: "O‘rta",
        question:
          "m ning qanday qiymatida ā = (4; m) va b̄ = (3; −2) vektorlar perpendikulyar bo‘ladi?",
        hint: "Perpendikulyar vektorlar skalyar ko‘paytmasi 0 ga teng: x₁x₂ + y₁y₂ = 0.",
        solution: "4·3 + m·(−2) = 0 ⇒ 12 − 2m = 0 ⇒ m = 6.",
      },
      {
        id: "mex-9",
        title: "Aniq integral hisobi",
        level: "Chuqurlashtirilgan",
        question: "∫₁³ (2x + 1) dx aniq integralning qiymatini hisoblang.",
        hint: "Boshlang‘ich funksiya F(x) = x² + x dan foydalaning.",
        solution: "F(3) − F(1) = (3² + 3) − (1² + 1) = 12 − 2 = 10.",
      },
      {
        id: "mex-10",
        title: "Birgalikda bajariladigan ish",
        level: "Asosiy",
        question:
          "Usta bir ishni 12 soatda, shogirdi esa 24 soatda bajaradi. Ular birgalikda ishlasa, shu ishni necha soatda tugatishadi?",
        hint: "1/t = 1/12 + 1/24.",
        solution: "1/t = 2/24 + 1/24 = 3/24 = 1/8 ⇒ t = 8 soat.",
      },
    ],
    quizzes: [
      {
        id: "mq-1",
        question: "x² − 9x + 14 = 0 kvadrat tenglama ildizlarining ko‘paytmasi nechaga teng?",
        options: ["9", "−9", "14", "−14"],
        answer: 2,
        explanation: "Viyet teoremasiga ko‘ra keltirilgan kvadrat tenglamada x₁ · x₂ = q = 14.",
      },
      {
        id: "mq-2",
        question: "EKUB(18, 45) va EKUK(18, 45) yig‘indisi nechaga teng?",
        options: ["90", "99", "81", "108"],
        answer: 1,
        explanation: "EKUB(18, 45) = 9 va EKUK(18, 45) = 90. Ularning yig‘indisi 9 + 90 = 99.",
      },
      {
        id: "mq-3",
        question: "25% i 60 ga teng bo‘lgan sonni toping.",
        options: ["15", "180", "240", "300"],
        answer: 2,
        explanation: "Sonning 25% i (ya’ni ¼ qismi) 60 bo‘lsa, sonning o‘zi 60 · 4 = 240 ga teng.",
      },
      {
        id: "mq-4",
        question:
          "Tomonlari 6 sm va 8 sm bo‘lgan to‘g‘ri burchakli uchburchakning gipotenuzasi qancha?",
        options: ["10 sm", "12 sm", "14 sm", "7 sm"],
        answer: 0,
        explanation: "c = √(6² + 8²) = √(36 + 64) = √100 = 10 sm.",
      },
      {
        id: "mq-5",
        question: "(2a − 3b)² ifoda qaysi ko‘phadga teng?",
        options: ["4a² − 9b²", "4a² − 6ab + 9b²", "4a² − 12ab + 9b²", "2a² − 12ab + 3b²"],
        answer: 2,
        explanation: "(2a − 3b)² = (2a)² − 2·2a·3b + (3b)² = 4a² − 12ab + 9b².",
      },
      {
        id: "mq-6",
        question: "log₂(32) ning qiymati nechaga teng?",
        options: ["4", "5", "6", "16"],
        answer: 1,
        explanation: "2⁵ = 32 bo‘lgani uchun log₂(32) = 5.",
      },
      {
        id: "mq-7",
        question: "Radiusi R = 5 sm bo‘lgan doiraning yuzi nechaga teng?",
        options: ["10π sm²", "20π sm²", "25π sm²", "50π sm²"],
        answer: 2,
        explanation: "Doira yuzi S = πR² = π · 5² = 25π sm².",
      },
      {
        id: "mq-8",
        question: "f(x) = x⁴ − 2x funksiyaning x = 1 nuqtadagi hosilasi f'(1) nechaga teng?",
        options: ["0", "2", "4", "−2"],
        answer: 1,
        explanation: "f'(x) = 4x³ − 2. x = 1 da f'(1) = 4·1³ − 2 = 2.",
      },
      {
        id: "mq-9",
        question: "|x − 3| = 7 tenglama ildizlarining yig‘indisi nechaga teng?",
        options: ["0", "3", "6", "14"],
        answer: 2,
        explanation: "x − 3 = 7 ⇒ x₁ = 10; x − 3 = −7 ⇒ x₂ = −4. Yig‘indi: 10 + (−4) = 6.",
      },
      {
        id: "mq-10",
        question:
          "6 ta kitobdan 2 tasini tanlab olish (tartibi muhim emas) necha xil usulda bajariladi?",
        options: ["12", "15", "30", "36"],
        answer: 1,
        explanation: "C₆² = (6 · 5) / 2 = 15 xil usul.",
      },
      {
        id: "mq-11",
        question: "Radiusi 3 sm bo‘lgan sharning sirt yuzi nechaga teng?",
        options: ["12π sm²", "18π sm²", "27π sm²", "36π sm²"],
        answer: 3,
        explanation: "Sfera sirt yuzi S = 4πR² = 4π · 3² = 36π sm².",
      },
      {
        id: "mq-12",
        question: "sin(30°) + cos(60°) ifodaning qiymati nechaga teng?",
        options: ["0", "0.5", "1", "√3"],
        answer: 2,
        explanation: "sin(30°) = 0.5 va cos(60°) = 0.5, yig‘indisi 0.5 + 0.5 = 1.",
      },
      {
        id: "mq-13",
        question: "A(2; −1) va B(5; 3) nuqtalar orasidagi masofa nechaga teng?",
        options: ["3", "4", "5", "7"],
        answer: 2,
        explanation: "d = √((5 − 2)² + (3 − (−1))²) = √(9 + 16) = √25 = 5.",
      },
      {
        id: "mq-14",
        question: "Muntazam oltiburchakning bitta ichki burchagi necha gradusga teng?",
        options: ["90°", "108°", "120°", "135°"],
        answer: 2,
        explanation: "180° · (6 − 2) / 6 = 720° / 6 = 120°.",
      },
      {
        id: "mq-15",
        question: "Tomonlari 13, 14, 15 bo‘lgan uchburchakning yarim perimetri p nechaga teng?",
        options: ["21", "42", "20", "14"],
        answer: 0,
        explanation: "p = (13 + 14 + 15) / 2 = 42 / 2 = 21.",
      },
      {
        id: "mq-16",
        question: "∫₀² 3x² dx aniq integralning qiymati nechaga teng?",
        options: ["4", "6", "8", "12"],
        answer: 2,
        explanation: "Boshlang‘ich funksiya F(x) = x³. F(2) − F(0) = 2³ − 0 = 8.",
      },
    ],
    glossary: [
      {
        term: "Diskriminant",
        definition: "Kvadrat tenglama ildizlari sonini aniqlaydigan ifoda: D = b² − 4ac.",
        example: "D > 0 bo‘lsa, tenglama ikkita turli haqiqiy ildizga ega.",
      },
      {
        term: "Ayniyat",
        definition:
          "O‘zgaruvchilarning barcha ruxsat etilgan qiymatlarida to‘g‘ri bo‘lgan tenglik.",
        example: "(a + b)(a − b) = a² − b² barcha haqiqiy sonlar uchun ayniyatdir.",
      },
      {
        term: "Gipotenuza",
        definition:
          "To‘g‘ri burchakli uchburchakda to‘g‘ri burchak qarshisida yotuvchi eng uzun tomon.",
        example: "3, 4, 5 tomonli uchburchakda gipotenuza 5 ga teng.",
      },
      {
        term: "Mediana",
        definition: "Uchburchak uchini qarshisidagi tomonning o‘rtasi bilan tutashtiruvchi kesma.",
        example: "Uchburchakning uchala medianasi bir nuqtada kesishib, 2:1 nisbatda bo‘linadi.",
      },
      {
        term: "Funksiya",
        definition: "Har bir x qiymatga yagona y qiymatni mos qo‘yuvchi bog‘lanish.",
        example: "y = 2x + 3 chiziqli funksiyadir.",
      },
      {
        term: "Logarifm",
        definition:
          "b sonini hosil qilish uchun a asosni ko‘tarish kerak bo‘lgan daraja ko‘rsatkichi.",
        example: "log₃(81) = 4, chunki 3⁴ = 81.",
      },
      {
        term: "Vektor",
        definition: "Ham son qiymatiga (uzunlik), ham yo‘nalishga ega bo‘lgan kesma.",
        example: "Tezlik va kuch fizikada vektor kattaliklardir.",
      },
      {
        term: "Hosila",
        definition: "Funksiyaning biror nuqtadagi o‘zgarish tezligini ifodalovchi limit.",
        example: "Yo‘lning vaqt bo‘yicha hosilasi oniy tezlikni beradi.",
      },
      {
        term: "Progressiya",
        definition: "Muayyan qonuniyat asosida tuzilgan sonlar ketma-ketligi.",
        example: "2, 6, 18, 54 — maxraji q = 3 bo‘lgan geometrik progressiya.",
      },
      {
        term: "Ehtimollik",
        definition: "Hodisaning yuz berish imkoniyatini 0 dan 1 gacha sonda ifodalovchi o‘lchov.",
        example: "Tanga tashlanganda gerb tushish ehtimoli P = 1/2 = 0.5.",
      },
      {
        term: "Asimptota",
        definition:
          "Funksiya grafigi cheksizlikka intilganda tobora yaqinlashib boradigan to‘g‘ri chiziq.",
        example: "y = 1/x giperbolasi uchun Ox va Oy o‘qlari asimptotadir.",
      },
      {
        term: "Kombinatsiya",
        definition: "n ta elementdan tartibi hisobga olinmay tuzilgan k elementli to‘plam (Cₙᵏ).",
        example: "5 ta rangdan 2 tasini aralashtirish usullari soni C₅² = 10.",
      },
      {
        term: "Piramida",
        definition:
          "Asosi ko‘pburchak, yon yoqlari esa umumiy uchga ega uchburchaklardan iborat ko‘pyoq.",
        example: "Misr ehromlari muntazam to‘rtburchakli piramida shakliga ega.",
      },
      {
        term: "Aniq integral",
        definition:
          "Egri chiziq ostidagi yuzani berilgan [a; b] kesmada hisoblovchi matematik amal.",
        example: "∫₀² x dx = [x²/2]₀² = 2.",
      },
      {
        term: "Irratsional son",
        definition:
          "Cheksiz davriy bo‘lmagan o‘nli kasr ko‘rinishida yoziladigan, m/n kasr shakliga keltirib bo‘lmaydigan son.",
        example: "√2, √3, π va e sonlari irratsional sonlardir.",
      },
      {
        term: "Skalyar ko‘paytma",
        definition:
          "Ikki vektor uzunliklari va ular orasidagi burchak kosinusi ko‘paytmasiga teng son.",
        example: "Vektorlar perpendikulyar bo‘lganda skalyar ko‘paytma 0 ga teng.",
      },
      {
        term: "Boshlang‘ich funksiya",
        definition: "Hosilasi berilgan f(x) funksiyaga teng bo‘lgan F(x) funksiya.",
        example: "f(x) = cos x uchun F(x) = sin x + C boshlang‘ich funksiyadir.",
      },
      {
        term: "Proporsiya",
        definition: "Ikki nisbatning tengligi (a : b = c : d).",
        example: "Chet hadlari ko‘paytmasi o‘rta hadlari ko‘paytmasiga teng: a·d = b·c.",
      },
      {
        term: "Tangens",
        definition:
          "To‘g‘ri burchakli uchburchakda o‘tkir burchak qarshisidagi katetning yopishgan katetga nisbati.",
        example: "tg(45°) = 1, tgα = sinα / cosα.",
      },
      {
        term: "Kollinear vektorlar",
        definition: "Bitta to‘g‘ri chiziqda yoki parallel to‘g‘ri chiziqlarda yotuvchi vektorlar.",
        example: "ā = (2; 4) va b̄ = (1; 2) vektorlar kollineardir.",
      },
    ],
    flashcards: [
      { id: "mfc-1", front: "Kvadratlar ayirmasi formulasi?", back: "a² − b² = (a − b)(a + b)" },
      {
        id: "mfc-2",
        front: "Kvadrat tenglama diskriminanti D = ?",
        back: "D = b² − 4ac; x₁,₂ = (−b ± √D) / (2a)",
      },
      {
        id: "mfc-3",
        front: "Viyet teoremasi (ax² + bx + c = 0)?",
        back: "x₁ + x₂ = −b/a va x₁ · x₂ = c/a",
      },
      {
        id: "mfc-4",
        front: "Pifagor teoremasi?",
        back: "a² + b² = c² (katetlar kvadratlari yig‘indisi gipotenuza kvadratiga teng)",
      },
      {
        id: "mfc-5",
        front: "Asosiy trigonometrik ayniyat?",
        back: "sin²α + cos²α = 1",
        hint: "Birlik aylanadan kelib chiqadi",
      },
      {
        id: "mfc-6",
        front: "Arifmetik progressiya n-hadi va yig‘indisi?",
        back: "aₙ = a₁ + (n−1)d;  Sₙ = ((a₁ + aₙ)/2) · n",
      },
      {
        id: "mfc-7",
        front: "logₐ(1) va logₐ(a) qiymatlari?",
        back: "logₐ(1) = 0;  logₐ(a) = 1 (a > 0, a ≠ 1)",
      },
      { id: "mfc-8", front: "Shar (sfera) hajmi va sirt yuzi?", back: "V = ⁴⁄₃πR³;  S = 4πR²" },
      { id: "mfc-9", front: "Piramida va konus hajmi?", back: "V = ⅓ · S(asos) · H" },
      {
        id: "mfc-10",
        front: "Guruhlash (Kombinatsiya) Cₙᵏ formulasi?",
        back: "Cₙᵏ = n! / (k! · (n − k)!)",
      },
      {
        id: "mfc-11",
        front: "sin(x) va cos(x) ning hosilalari?",
        back: "(sin x)' = cos x;  (cos x)' = −sin x",
      },
      {
        id: "mfc-12",
        front: "Ikki vektorning perpendikulyarlik sharti?",
        back: "Skalyar ko‘paytmasi 0 ga teng: x₁x₂ + y₁y₂ = 0",
      },
      {
        id: "mfc-13",
        front: "Geron formulasi (uchburchak yuzi)?",
        back: "S = √(p(p−a)(p−b)(p−c)), bu yerda p = (a+b+c)/2",
      },
      { id: "mfc-14", front: "Nyuton-Leybnits formulasi?", back: "∫ₐᵇ f(x)dx = F(b) − F(a)" },
    ],
  },

  kimyo: {
    id: "kimyo",
    title: "Kimyo",
    shortName: "Kimyo",
    category: "Tabiiy fanlar",
    grades: "7–11-sinflar",
    description:
      "Modda tuzilishi, Mendeleyev davriy qonuni, kimyoviy bog‘lanish, anorganik moddalar sinflari, eritmalar va organik kimyo asoslari.",
    motto: "Kimyo — tabiatdagi moddalar va ularning mo‘jizaviy o‘zgarishlari haqidagi fandir.",
    referenceTabLabel: "Qonunlar va reaksiyalar",
    outcomes: [
      "Atom tuzilishi va davriy jadvaldagi element xossalarini tahlil qilish",
      "Kimyoviy formulalar bo‘yicha molyar massa, mol va massa ulushini hisoblash",
      "Anorganik moddalarning 4 ta asosiy sinfi (oksid, asos, kislota, tuz) reaksiyalarini yozish",
      "Oksidlanish-qaytarilish reaksiyalarini elektron balans usulida tenglashtirish",
      "Uglevodorodlar va kislorodli organik birikmalarning sinflarini farqlash",
    ],
    stats: {
      lessons: 14,
      references: 20,
      quizzes: 16,
      hours: "82 soat",
    },
    lessons: [
      {
        id: "kim-1",
        title: "Atom tuzilishi va Mendeleyev davriy qonuni",
        grade: "7–8-sinf",
        duration: "35 daqiqa",
        level: "Asosiy",
        summary:
          "Proton, neytron va elektronlar, tartib raqami ma’nosi hamda davriy jadvalda xossalarning o‘zgarish qonuniyatlari.",
        sections: [
          {
            heading: "Atom yadrosi va elektron qobiq",
            content:
              "Atom musbat zaryadlangan yadro (proton p⁺ va neytron n⁰ lardan iborat) hamda uning atrofida harakatlanuvchi manfiy elektronlardan (e⁻) tashkil topgan elektroneytral zarrachadir.",
            formulaOrRule: "Z (tartib raqami) = N(p⁺) = N(e⁻);    A (massa soni) = Z + N(n⁰)",
            example:
              "Natriy (₁₁²³Na) atomida: Z = 11 ta proton va 11 ta elektron mavjud. Neytronlar soni: N = 23 − 11 = 12 ta. Elektron konfiguratsiyasi: 1s² 2s² 2p⁶ 3s¹.",
            keyTakeaways: [
              "Yadro zaryadi elementning kimyoviy xossalarini belgilaydi.",
              "Protonlar soni bir xil, neytronlar soni turlicha bo‘lgan atomlar izotoplar deyiladi.",
            ],
          },
          {
            heading: "Davr va guruh bo‘ylab xossalar o‘zgarishi",
            content:
              "Davrda chapdan o‘ngga borganda atom radiusi kamayadi, metallik xossasi susayib, metalmaslik va elektromanfiylik ortadi. Asosiy guruhlarda yuqoridan pastga tushganda elektron qavatlar soni ortgani sababli radius kattalashadi va metallik xossasi kuchayadi.",
            formulaOrRule:
              "Eng kuchli metallmas — Ftor (F);   Eng faol ishqoriy metall — Seziy/Fransiy",
            example:
              "3-davr elementlari Na → Mg → Al → Si → P → S → Cl qatorida ishqoriy metall xossasidan kuchli metallmas xossasigacha izchil o‘zgaradi.",
            keyTakeaways: [
              "Davr raqami atomdagi energetik qavatlar soniga teng.",
              "Asosiy guruh raqami tashqi qavatdagi valent elektronlar sonini ko‘rsatadi.",
            ],
          },
        ],
      },
      {
        id: "kim-2",
        title: "Modda miqdori (Mol), molyar massa va Avogadro qonuni",
        grade: "8-sinf",
        duration: "40 daqiqa",
        level: "Asosiy",
        summary:
          "Mol tushunchasi, Avogadro doimiysi, gazlarning molyar hajmi hamda zichlik va nisbiy zichlikka oid hisoblar.",
        sections: [
          {
            heading: "Mol, Avogadro soni va molyar massa",
            content:
              "1 mol — tarkibida 6.02 · 10²³ ta (Avogadro doimiysi Nₐ) zarracha saqlagan modda miqdoridir. 1 mol moddaning grammlarda olingan massasi molyar massa (M, g/mol) deyiladi va son jihatdan nisbiy molekulyar massaga (Mᵣ) teng.",
            formulaOrRule: "n = m / M = N / Nₐ;    Nₐ = 6.02 · 10²³ mol⁻¹",
            example:
              "36 gramm suv (H₂O, M = 18 g/mol) nechcha mol va nechta molekula? n = 36 / 18 = 2 mol. Molekulalar soni N = 2 · 6.02 · 10²³ = 1.204 · 10²⁴ ta.",
            keyTakeaways: [
              "Avogadro soni modda agregat holatiga bog‘liq emas.",
              "Kimyoviy tenglama koeffitsiyentlari moddalarning mol nisbatini bildiradi.",
            ],
          },
          {
            heading: "Gazlarning molyar hajmi (Normal sharoit)",
            content:
              "Normal sharoitda (n.sh.: T = 273 K yoki 0°C, P = 101.3 kPa) har qanday gazning 1 moli bir xil hajm — 22.4 litrni egallaydi.",
            formulaOrRule: "V = n · Vₘ   (Vₘ = 22.4 l/mol, n.sh.);    D(B) = M(A) / M(B)",
            example:
              "44.8 litr kislorod (O₂, M = 32 g/mol) n.sh. da: n = 44.8 / 22.4 = 2 mol, massasi m = 2 · 32 = 64 g. Kislorodning vodorodga nisbatan zichligi D(H₂) = 32 / 2 = 16.",
            keyTakeaways: [
              "Vₘ = 22.4 l/mol faqat gazlar uchun va faqat normal sharoitda qo‘llaniladi.",
              "Havoning o‘rtacha molyar massasi 29 g/mol deb olinadi.",
            ],
          },
        ],
      },
      {
        id: "kim-3",
        title: "Kimyoviy bog‘lanish turlari va kristall panjaralar",
        grade: "8–9-sinf",
        duration: "35 daqiqa",
        level: "O‘rta",
        summary:
          "Ion, kovalent (qutbli va qutbsiz), metall hamda vodorod bog‘lanish mexanizmlari va ularning modda xossalariga ta’siri.",
        sections: [
          {
            heading: "Kovalent va ion bog‘lanish",
            content:
              "Umumiy elektron juftlar hisobiga hosil bo‘ladigan bog‘lanish kovalent bog‘lanish deyiladi. Bir xil metallmas atomlari orasida qutbsiz (H₂, Cl₂, N₂), turli metallmaslar orasida esa qutbli kovalent bog‘lanish (HCl, H₂O, NH₃) yuzaga keladi. Metall va metallmas atomlari elektron berish-olish natijasida zaryadlangan ionlarga aylansa, ion bog‘lanish hosil bo‘ladi.",
            formulaOrRule:
              "ΔEM > 1.7 → Ion bog‘;   0 < ΔEM < 1.7 → Qutbli kovalent;   ΔEM = 0 → Qutbsiz",
            example:
              "NaCl — Na⁺ va Cl⁻ ionlari orasidagi ion bog‘ (yuqori erish haroratli, qattiq kristall); CH₄ — C va H orasidagi qutbli kovalent bog‘ (gaz holatda).",
            keyTakeaways: [
              "Vodorod bog‘lanishi suvning (H₂O) qaynash haroratini g‘ayrioddiy yuqori (100°C) qiladi.",
              "Atom kristall panjarali moddalar (olmos, kremniy) juda qattiq va qiyin eriydi.",
            ],
          },
        ],
      },
      {
        id: "kim-4",
        title: "Anorganik moddalarning asosiy sinflari",
        grade: "8–9-sinf",
        duration: "45 daqiqa",
        level: "Asosiy",
        summary:
          "Oksidlar, asoslar, kislotalar va tuzlarning tarkibi, nomlanishi hamda genetik bog‘lanish qatori.",
        sections: [
          {
            heading: "Oksidlar, kislotalar va asoslar",
            content:
              "Oksidlar ikki elementdan iborat bo‘lib, biri kislorod (−2) bo‘lgan murakkab moddalardir. Asosli oksidlarga asoslar, kislotali oksidlarga esa kislotalar mos keladi. Amfoter oksid va gidroksidlar (ZnO, Al₂O₃, Al(OH)₃) ham kislotalar, ham ishqorlar bilan reaksiyaga kirishadi.",
            formulaOrRule: "Kislota + Asos → Tuz + Suv (Neytrallanish reaksiyasi)",
            example:
              "H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O;   CaO + H₂O → Ca(OH)₂;   CO₂ + 2NaOH → Na₂CO₃ + H₂O.",
            keyTakeaways: [
              "Suvda eriydigan asoslar ishqorlar deyiladi (NaOH, KOH, Ba(OH)₂, Ca(OH)₂).",
              "Indikatorlar (lakmus, fenolftalein, metiloranj) muhit pH ini aniqlaydi.",
            ],
          },
          {
            heading: "Tuzlar va ion almashinish reaksiyalari",
            content:
              "Tuzlar metall atomlari (yoki ammoniy NH₄⁺) hamda kislota qoldig‘idan tashkil topgan. Eritmadagi almashinish reaksiyasi oxirigacha borishi uchun cho‘kma (↓), gaz (↑) yoki kam dissotsilanuvchi modda (H₂O) hosil bo‘lishi shart.",
            formulaOrRule: "AgNO₃ + NaCl → AgCl↓ (oq cho‘kma) + NaNO₃",
            example:
              "CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂↑ (gaz ajralib chiqqani uchun reaksiya oxirigacha boradi).",
            keyTakeaways: [
              "Nitratlar (NO₃⁻) va natriy/kaliy tuzlarining barchasi suvda yaxshi eriydi.",
              "O‘zaro reaksiyada cho‘kma, gaz yoki suv chiqmasa almashinish bormaydi.",
            ],
          },
        ],
      },
      {
        id: "kim-5",
        title: "Eritmalar, foiz konsentratsiya va pH muhit",
        grade: "9–10-sinf",
        duration: "40 daqiqa",
        level: "O‘rta",
        summary:
          "Eruvchanlik, erigan moddaning massa ulushi, molyar konsentratsiya, elektrolitik dissotsilanish va pH shkalasi.",
        sections: [
          {
            heading: "Massa ulushi va molyar konsentratsiya",
            content:
              "Erigan moddaning massa ulushi (w) erigan modda massasining butun eritma massasiga nisbatini ko‘rsatadi. Molyar konsentratsiya (C) esa 1 litr eritmada necha mol modda eriganini bildiradi.",
            formulaOrRule: "w = (m(modda) / m(eritma)) · 100%;    C = n / V(litr)",
            example:
              "20 g tuzni 180 g suvda eritganda: m(eritma) = 20 + 180 = 200 g. Shunda w = (20 / 200) · 100% = 10%.",
            keyTakeaways: [
              "m(eritma) = m(erigan modda) + m(erituvchi) = V · ρ.",
              "pH < 7 — kislotali, pH = 7 — neytral, pH > 7 — ishqoriy muhit.",
            ],
          },
        ],
      },
      {
        id: "kim-6",
        title: "Organik kimyo: Uglevodorodlar va funksional guruhlar",
        grade: "10–11-sinf",
        duration: "45 daqiqa",
        level: "Chuqurlashtirilgan",
        summary:
          "Uglerodning to‘rt valentligi, izomeriya, alkanlar, alkenlar, alkinlar, spirtlar va karbon kislotalar.",
        sections: [
          {
            heading: "To‘yingan va to‘yinmagan uglevodorodlar",
            content:
              "Alkanlarda (CₙH₂ₙ₊₂) faqat yakka σ-bog‘lar bo‘ladi va ular o‘rin olish reaksiyasiga kirishadi. Alkenlar (CₙH₂ₙ) qo‘sh bog‘ga, alkinlar (CₙH₂ₙ₋₂) esa uch bog‘ga ega bo‘lib, birikish reaksiyalariga kirishadi va bromli suvni rangsizlantiradi.",
            formulaOrRule: "Alkan: CₙH₂ₙ₊₂;   Alken: CₙH₂ₙ;   Alkin: CₙH₂ₙ₋₂;   Aren: C₆H₆",
            example:
              "Etilenning gidrogenlanishi: CH₂=CH₂ + H₂ → CH₃−CH₃ (etan). Metanning yonishi: CH₄ + 2O₂ → CO₂ + 2H₂O.",
            keyTakeaways: [
              "Organik birikmalarda uglerod doimo IV valentli bo‘ladi.",
              "Tarkibi bir xil, tuzilishi va xossalari har xil moddalar izomerlar deyiladi.",
            ],
          },
        ],
      },
      {
        id: "kim-7",
        title: "Oksidlanish-qaytarilish reaksiyalari va elektroliz",
        grade: "9–11-sinf",
        duration: "40 daqiqa",
        level: "O‘rta",
        summary:
          "Oksidlovchi va qaytaruvchi tushunchasi, elektron balans usuli, eritma va suyuqlanmalarning elektrolizi.",
        sections: [
          {
            heading: "Elektron balans usuli",
            content:
              "Oksidlanish-qaytarilish reaksiyalarida (OQR) qaytaruvchi elektron beradi (oksidlanish darajasi ortadi), oksidlovchi esa elektron oladi (oksidlanish darajasi kamayadi). Berilgan va olingan elektronlar soni doimo teng bo‘lishi kerak.",
            formulaOrRule: "Cu⁰ + 4HN⁺⁵O₃(kons) → Cu⁺²(NO₃)₂ + 2N⁺⁴O₂↑ + 2H₂O",
            example:
              "Cu⁰ − 2e⁻ → Cu⁺² (qaytaruvchi, ×1); N⁺⁵ + 1e⁻ → N⁺⁴ (oksidlovchi, ×2). Demak NO₂ oldiga 2, HNO₃ oldiga esa 4 koeffitsiyenti qo‘yiladi.",
            keyTakeaways: [
              "Oddiy moddalarda elementning oksidlanish darajasi 0 ga teng.",
              "Ftor barcha birikmalarida faqat −1 oksidlanish darajasini namoyon qiladi.",
            ],
          },
          {
            heading: "Katod va anod jarayonlari (Elektroliz)",
            content:
              "Elektrolit eritmasi yoki suyuqlanmasidan doimiy elektr toki o‘tganda katodda (−) qaytarilish, anodda (+) oksidlanish jarayoni kechadi. Faol metallarning (Li–Al) suvdagi eritmasida katodda metall o‘rniga suvdan H₂ ajraladi.",
            formulaOrRule: "2NaCl(eritma) + 2H₂O —(tok)→ H₂↑(katod) + Cl₂↑(anod) + 2NaOH",
            example:
              "CuSO₄ suvli eritmasi inert elektrodlarda elektroliz qilinganda katodda toza mis (Cu), anodda esa kislorod (O₂) ajralib chiqadi.",
            keyTakeaways: [
              "Katod — manfiy qutb, u yerga kationlar kelib elektron oladi.",
              "Kislorodli kislota qoldiqlari (SO₄²⁻, NO₃⁻) o‘rniga anodda suv oksidlanib O₂ chiqadi.",
            ],
          },
        ],
      },
      {
        id: "kim-8",
        title: "Kimyoviy reaksiya tezligi va muvozanat",
        grade: "9–11-sinf",
        duration: "40 daqiqa",
        level: "Chuqurlashtirilgan",
        summary:
          "Ta’sir etuvchi massalar qonuni, Vant-Goff qoidasi, katalizatorlar va Le Shatelye prinsipi.",
        sections: [
          {
            heading: "Reaksiya tezligiga ta’sir etuvchi omillar",
            content:
              "Reaksiya tezligi reaksiyaga kirishuvchi moddalar tabiati, konsentratsiya, harorat, katalizator va qattiq moddalar uchun sirt yuzasiga bog‘liq. Vant-Goff qoidasiga ko‘ra harorat har 10°C ga ko‘tarilganda reaksiya tezligi 2–4 marta ortadi.",
            formulaOrRule: "v = k · C(A)ᵃ · C(B)ᵇ;    v₂ = v₁ · γ^((T₂ − T₁)/10)",
            example:
              "Harorat koeffitsiyenti γ = 3 bo‘lganda harorat 20°C dan 50°C gacha ko‘tarilsa, tezlik 3^((50−20)/10) = 3³ = 27 marta ortadi.",
            keyTakeaways: [
              "Katalizator aktivlanish energiyasini pasaytirib, to‘g‘ri va teskari reaksiyani bir xilda tezlashtiradi.",
              "Qattiq modda maydalanganda uning sirt yuzi va reaksiya tezligi ortadi.",
            ],
          },
          {
            heading: "Le Shatelye muvozanat siljishi prinsipi",
            content:
              "Muvozanatda turgan tizimga tashqi ta’sir ko‘rsatilsa (harorat, bosim yoki konsentratsiya o‘zgarsa), muvozanat shu ta’sirni kamaytiradigan tomonga siljiydi.",
            formulaOrRule: "N₂ + 3H₂ ⇌ 2NH₃ + Q  (ΔH < 0, ekzotermik)",
            example:
              "Ammiak sintezida bosimni oshirish gaz molekulalari soni kamayadigan tarafga (o‘ngga — NH₃ hosil bo‘lishiga) muvozanatni siljitadi.",
            keyTakeaways: [
              "Haroratni oshirish endotermik (−Q), sovutish esa ekzotermik (+Q) tomonga siljitadi.",
              "Katalizator kimyoviy muvozanatni siljitmaydi, faqat muvozanatga kelish vaqtini qisqartiradi.",
            ],
          },
        ],
      },
      {
        id: "kim-9",
        title: "Metallar kimyosi va metallurgiya",
        grade: "9–10-sinf",
        duration: "35 daqiqa",
        level: "O‘rta",
        summary:
          "Ishqoriy va ishqoriy-yer metallar, amfoter alyuminiy, temir va uning birikmalari, metallar korroziyasi.",
        sections: [
          {
            heading: "Natriy, kalsiy va alyuminiy xossalari",
            content:
              "I-A guruh ishqoriy metallari (Li, Na, K) suv bilan shiddatli reaksiyaga kirishib ishqor va vodorod beradi. Alyuminiy esa amfoter metall bo‘lib, ham kislota, ham ishqor eritmasida eriydi.",
            formulaOrRule: "2Na + 2H₂O → 2NaOH + H₂↑;   2Al + 2NaOH + 6H₂O → 2Na[Al(OH)₄] + 3H₂↑",
            example:
              "Alyuminiy sirtida zich Al₂O₃ parda bo‘lgani uchun havo va sovuq suvda korroziyaga uchramaydi, termit payvandlashda temir oksidini qaytarishda ishlatiladi.",
            keyTakeaways: [
              "Olmaliq va Navoiy kon-metallurgiya kombinatlari O‘zbekistonda rangli va nodir metallar ishlab chiqarish markazlaridir.",
              "Qattiq suv tarkibida Ca²⁺ va Mg²⁺ ionlari ko‘p bo‘ladi.",
            ],
          },
          {
            heading: "Temir, cho‘yan va po‘lat",
            content:
              "Temir +2 va +3 oksidlanish darajasini namoyon qiladi. Domna pechida temir rudasidan uglerodli qaytarish yo‘li bilan cho‘yan (>2% C), undan esa kislorod puflab po‘lat (<2% C) olinadi.",
            formulaOrRule: "Fe₂O₃ + 3CO —(t°)→ 2Fe + 3CO₂↑",
            example:
              "Fe + HCl → FeCl₂ + H₂↑ (temir (II) tuzi hosil bo‘ladi), ammo Fe + Cl₂ → 2FeCl₃ (xlor kuchli oksidlovchi sifatida +3 gacha oksidlaydi).",
            keyTakeaways: [
              "Sovuq konsentrlangan HNO₃ va H₂SO₄ temir va alyuminiyni passivlashtiradi.",
              "Fe(OH)₂ oq-yashil, Fe(OH)₃ esa qo‘ng‘ir rangli cho‘kmadir.",
            ],
          },
        ],
      },
      {
        id: "kim-10",
        title: "Kislorodli va azotli organik birikmalar",
        grade: "10–11-sinf",
        duration: "45 daqiqa",
        level: "Chuqurlashtirilgan",
        summary:
          "Spirtlar, aldegidlar, karbon kislotalar, murakkab efirlar, uglevodlar, aminokislotalar va oqsillar.",
        sections: [
          {
            heading: "Spirtlar, aldegidlar va karbon kislotalar",
            content:
              "Spirtlar tarkibida gidroksil (−OH), aldegidlarda karbonil (−CHO), karbon kislotalarda esa karboksil (−COOH) funksional guruhi bo‘ladi. Spirtlar oksidlanib aldegidga, aldegidlar esa karbon kislotaga aylanadi.",
            formulaOrRule: "CH₃−CH₂OH —([O])→ CH₃−CHO —([O])→ CH₃−COOH",
            example:
              "Sirka kislota (CH₃COOH) va etanol reaksiyasidan yoqimli meva hidli etilatsetat (CH₃COOC₂H₅) murakkab efiri olinadi.",
            keyTakeaways: [
              "Aldegidlar «kumush ko‘zgu» reaksiyasini beradi.",
              "Metanol (CH₃OH) kuchli zaharli modda, etanol (C₂H₅OH) tibbiyot va sanoatda erituvchi sifatida qo‘llaniladi.",
            ],
          },
          {
            heading: "Uglevodlar, aminokislotalar va oqsillar",
            content:
              "Glyukoza (C₆H₁₂O₆) tirik organizmlar uchun asosiy energiya manbai bo‘lib, monosaxarid hisoblanadi. Aminokislotalar tarkibida ham asosli (−NH₂), ham kislotali (−COOH) guruh bo‘lgani uchun amfoter xossaga ega va peptid bog‘ (−CO−NH−) orqali oqsil zanjirini hosil qiladi.",
            formulaOrRule: "n H₂N−CH(R)−COOH → (−NH−CH(R)−CO−)ₙ + n H₂O",
            example:
              "Kraxmal (o‘simlik zaxira uglevodi) yod ta’sirida to‘q ko‘k rangga bo‘yaladi — bu kraxmalning sifat reaksiyasidir.",
            keyTakeaways: [
              "Oqsillar tarkibida 20 xil tabiiy α-aminokislota uchraydi.",
              "Yuqori harorat yoki kuchli kislota ta’sirida oqsilning tabiiy fazoviy tuzilishi buzilishi denaturatsiya deyiladi.",
            ],
          },
        ],
      },
      {
        id: "kim-11",
        title: "Metallmaslar: Vodorod, kislorod va galogenlar",
        grade: "8–9-sinf",
        duration: "40 daqiqa",
        level: "O‘rta",
        summary:
          "Vodorod va kislorodning olinishi, ozon allotropiyasi, galogenlar (F₂, Cl₂, Br₂, I₂) faolligi va xlorid kislota xossalari.",
        sections: [
          {
            heading: "Vodorod, kislorod va ozon",
            content:
              "Vodorod (H₂) — eng yengil gaz, ekologik toza yoqilg‘i bo‘lib, metall oksidlaridan toza metallarni qaytarib olishda ishlatiladi. Kislorod ikkita allotropik shaklga ega: kislorod (O₂) va ozon (O₃).",
            formulaOrRule: "2KMnO₄ —(t°)→ K₂MnO₄ + MnO₂ + O₂↑;   3O₂ ⇌ 2O₃",
            example:
              "Ozon qatlami stratosferada Quyoshning zararli ultrabinafsha nurlarini ushlab qolib, Yerdagi hayotni himoya qiladi.",
            keyTakeaways: [
              "Vodorod va kislorodning 2:1 hajmiy nisbatdagi aralashmasi «qaldiroq gaz» deyiladi.",
              "Kislorod havodan og‘ir (M = 32 g/mol, havo = 29 g/mol), vodorod esa havodan 14.5 marta yengil.",
            ],
          },
          {
            heading: "Galogenlar guruhi (VII-A)",
            content:
              "Ftor, xlor, brom va yod kuchli oksidlovchilardir. Guruhda yuqoridan pastga qarab galogenlarning metallmaslik faolligi kamayadi: har bir yuqori galogen o‘zidan pastdagi galogenni tuz eritmasidan siqib chiqaradi.",
            formulaOrRule: "Cl₂ + 2KBr → 2KCl + Br₂;   Ag⁺ + Cl⁻ → AgCl↓ (oq cho‘kma)",
            example:
              "Kumush nitrat (AgNO₃) eritmasi xlorid ionlarining sifat reaktivi bo‘lib, kislotada erimaydigan oq AgCl cho‘kma beradi.",
            keyTakeaways: [
              "Oddiy sharoitda F₂ va Cl₂ gaz, Br₂ suyuq, I₂ esa qattiq kristall moddadir.",
              "Ftor suvdagi kislorodni ham siqib chiqaradigan eng faol metallmasdir.",
            ],
          },
        ],
      },
      {
        id: "kim-12",
        title: "Azot, fosfor, uglerod va mineral o‘g‘itlar",
        grade: "9-sinf",
        duration: "40 daqiqa",
        level: "O‘rta",
        summary:
          "Azot va ammiak sintezi, nitrat kislotaning o‘ziga xos xossalari, fosfor allotropiyasi, uglerod oksidlari va NPK mineral o‘g‘itlari.",
        sections: [
          {
            heading: "Azot, ammiak va nitrat kislota",
            content:
              "Azot molekulasi (N≡N) mustahkam uch bog‘ga ega bo‘lgani uchun oddiy sharoitda juda inert. Sanoatda Gaber usulida ammiak (NH₃) olinadi. Nitrat kislota (HNO₃) metallar bilan reaksiyada deyarli hech qachon vodorod ajratmaydi, balki NO₂, NO yoki N₂O chiqaradi.",
            formulaOrRule: "N₂ + 3H₂ ⇌ 2NH₃;   NH₃ + HCl → NH₄Cl (tutun)",
            example:
              "Navoiyazot korxonasida tabiiy gaz va havo azotidan ammiak hamda azotli mineral o‘g‘itlar (karbamid, selitra) ishlab chiqariladi.",
            keyTakeaways: [
              "Ammoniy ionini (NH₄⁺) aniqlash uchun ishqor qo‘shib qizdiriladi — o‘tkir hidli NH₃ chiqadi.",
              "Kremniy (Si) yarimo‘tkazgich texnikasi va quyosh panellarining asosiy materialidir.",
            ],
          },
          {
            heading: "Mineral o‘g‘itlar (N, P, K)",
            content:
              "O‘simliklarning o‘sishi uchun uchta asosiy oziq elementi zarur: Azot (barg va poya o‘sishi), Fosfor (ildiz va meva pishishi), Kaliy (sovuqqa va kasalliklarga chidamlilik).",
            formulaOrRule:
              "Karbamid: CO(NH₂)₂;   Ammofos: NH₄H₂PO₄ + (NH₄)₂HPO₄;   Silvinit: KCl·NaCl",
            example:
              "Karbamid (mochevina) tarkibida 46.7% azot bo‘lib, eng konsentrlangan qattiq azotli o‘g‘it hisoblanadi.",
            keyTakeaways: [
              "Oq fosfor qorong‘ida nurlanadi va zaharli, qizil fosfor esa gugurt qutisi yonida ishlatiladi.",
              "O‘zbekistonda Qizilqum fosforitlari va Dehqonobod kaliy o‘g‘itlari zavodi mavjud.",
            ],
          },
        ],
      },
      {
        id: "kim-13",
        title: "Oltingugurt va sulfat kislota ishlab chiqarish",
        grade: "9–10-sinf",
        duration: "35 daqiqa",
        level: "O‘rta",
        summary:
          "Oltingugurt birikmalari (H₂S, SO₂, SO₃), kontakt usulida sulfat kislota ishlab chiqarishning 3 bosqichi va sulfat ioniga sifat reaksiyasi.",
        sections: [
          {
            heading: "Sulfat kislota olishning kontakt usuli",
            content:
              "«Kimyo sanoatining noni» deb ataluvchi sulfat kislota (H₂SO₄) pirit (FeS₂) yoki oltingugurtdan uch bosqichda olinadi. Ikkinchi bosqichda V₂O₅ (vanadiy (V) oksid) katalizatori qo‘llaniladi.",
            formulaOrRule: "1) S + O₂ → SO₂;   2) 2SO₂ + O₂ ⇌(V₂O₅) 2SO₃;   3) SO₃ + H₂O → H₂SO₄",
            example:
              "Sulfat kislota va sulfatlar (SO₄²⁻) borligini tekshirish uchun BaCl₂ eritmasi tomiziladi — kislotada erimaydigan oq BaSO₄ cho‘kma tushadi.",
            keyTakeaways: [
              "Konsentrlangan H₂SO₄ kuchli suv tortuvchi modda bo‘lib, organik moddalarni ko‘mirlashtiradi.",
              "Kislotani suyultirishda doimo kislota suvga oz-ozdan quyiladi (aksincha emas!).",
            ],
          },
          {
            heading: "Konsentrlangan sulfat kislotaning o‘ziga xosligi",
            content:
              "Suyultirilgan H₂SO₄ metallar bilan H₂ ajratadi, konsentrlangan issiq H₂SO₄ esa metallarni (hatto misni ham) oksidlab SO₂ gazi ajratadi.",
            formulaOrRule: "Cu + 2H₂SO₄(kons, t°) → CuSO₄ + SO₂↑ + 2H₂O",
            example:
              "Kumush yoki mis kabi passiv metallar ham issiq konsentrlangan sulfat kislotada eriydi.",
            keyTakeaways: [
              "Vodorod sulfid (H₂S) palag‘da tuxum hidli zaharli gazdir.",
              "Gips (CaSO₄·2H₂O) qizdirilib qurilish alebastri olinadi.",
            ],
          },
        ],
      },
      {
        id: "kim-14",
        title: "Polimerlar, tolalar va yashil kimyo",
        grade: "10–11-sinf",
        duration: "40 daqiqa",
        level: "Chuqurlashtirilgan",
        summary:
          "Polimerlanish va polikondensatlanish reaksiyalari, plastmassalar, tabiiy va sintetik tolalar hamda ekologik toza kimyo tamoyillari.",
        sections: [
          {
            heading: "Polimer olish usullari va plastmassalar",
            content:
              "Polimerlanishda monomerlar qo‘sh bog‘ uzilishi hisobiga qo‘shimcha modda ajratmasdan birikadi (polietilen, polipropilen, PVX). Polikondensatlanishda esa polimer bilan birga kichik molekula (masalan, H₂O) ajralib chiqadi.",
            formulaOrRule:
              "n CH₂=CH₂ → (−CH₂−CH₂−)ₙ  (polietilen);   n CH₂=CH−Cl → (−CH₂−CHCl−)ₙ (PVX)",
            example:
              "O‘zbekistondagi Sho‘rtan va Ustyurt gaz-kimyo majmualarida tabiiy gazdan yuqori sifatli polietilen va polipropilen granulalari ishlab chiqariladi.",
            keyTakeaways: [
              "Polimer tarkibida takrorlanuvchi qism struktura bo‘g‘ini, n esa polimerlanish darajasi deyiladi.",
              "Tabiiy kauchuk izopren (2-metilbutadiyen-1,3) polimeridir.",
            ],
          },
          {
            heading: "Tolalar tasnifi va yashil kimyo",
            content:
              "Tabiiy tolalarga paxta, zig‘ir (sellyuloza) hamda jun, ipak (oqsil) kiradi. Sun’iy tolalar tabiiy polimerdan (viskoza, atsetat), sintetik tolalar esa neft-gaz mahsulotlaridan (kapron, lavsan) olinadi.",
            formulaOrRule:
              "Paxta va viskoza → Sellyuloza tolalari;   Ipak, jun, kapron → Poliamid zanjirlari",
            example:
              "Chiqindisiz texnologiyalar, plastmassalarni qayta ishlash va biologik parchalanadigan polimerlar yaratish yashil kimyoning bosh maqsadidir.",
            keyTakeaways: [
              "Kauchukni oltingugurt bilan qizdirib rezina olish jarayoni vulkanizatsiya deyiladi.",
              "Yashil kimyo atrof-muhitga zararli erituvchilar va zaharli chiqindilarni kamaytirishga qaratilgan.",
            ],
          },
        ],
      },
    ],
    references: [
      {
        id: "kref-1",
        title: "Modda miqdori",
        expression: "n = m / M = V / 22.4 = N / 6.02·10²³",
        explanation: "Massa, hajm (n.sh. gazlar) va zarrachalar soni orqali molni topish.",
        usage: "Barcha stexiometrik kimyo masalalarida.",
      },
      {
        id: "kref-2",
        title: "Massa ulushi",
        expression: "w = (m(modda) / m(eritma)) · 100%",
        explanation: "Eritmadagi erigan modda ulushini foizda aniqlash.",
        usage: "Eritma tayyorlash va aralashtirish masalalarida.",
      },
      {
        id: "kref-3",
        title: "Molyar konsentratsiya",
        expression: "Cₘ = n / V(litr)  [mol/l]",
        explanation: "1 litr eritmadagi erigan modda mollar soni.",
        usage: "Tahliliy kimyo va titrlash hisoblarida.",
      },
      {
        id: "kref-4",
        title: "Gazning nisbiy zichligi",
        expression: "D(B) = M(A) / M(B)",
        explanation: "A gazning B gazga nisbatan necha marta og‘irligini ko‘rsatadi.",
        usage: "Noma’lum gazning molyar massasini topishda.",
      },
      {
        id: "kref-5",
        title: "Reaksiya unumi",
        expression: "η = (m(amaliy) / m(nazariy)) · 100%",
        explanation: "Amalda olingan mahsulotning nazariy hisoblanganiga nisbati.",
        usage: "Sanoat sintezi va masala yechishda.",
      },
      {
        id: "kref-6",
        title: "Metallarning faollik qatori",
        expression: "Li K Ba Ca Na Mg Al Zn Fe Ni Sn Pb (H) Cu Hg Ag Pt Au",
        explanation: "Vodoroddan chapdagi metallar suyultirilgan kislotalardan H₂ siqib chiqaradi.",
        usage: "Metall + kislota va metall + tuz reaksiyalarini tekshirishda.",
      },
      {
        id: "kref-7",
        title: "Kuchli kislotalar",
        expression: "HCl, HBr, HI, HNO₃, H₂SO₄, HClO₄",
        explanation: "Suvli eritmada to‘liq ionlarga dissotsilanadigan kislotalar.",
        usage: "Ion tenglamalar va pH tahlilida.",
      },
      {
        id: "kref-8",
        title: "Kuchli asoslar (ishqorlar)",
        expression: "LiOH, NaOH, KOH, RbOH, CsOH, Ba(OH)₂, Ca(OH)₂",
        explanation: "Suvda eriydigan va lakmusni ko‘k rangga bo‘yaydigan asoslar.",
        usage: "Neytrallanish va sifat reaksiyalarida.",
      },
      {
        id: "kref-9",
        title: "Mendeleyev-Klapeyron tenglamasi",
        expression: "P · V = (m / M) · R · T   (R = 8.314)",
        explanation: "Ixtiyoriy harorat va bosimdagi gaz holati tenglamasi.",
        usage: "Nostandart sharoitdagi gaz masalalarida.",
      },
      {
        id: "kref-10",
        title: "Esterifikatsiya reaksiyasi",
        expression: "R−COOH + R'−OH ⇌ R−COOR' + H₂O",
        explanation: "Karbon kislota va spirtdan murakkab efir hosil bo‘lishi.",
        usage: "Organik sintez va xushbo‘y moddalar olishda.",
      },
      {
        id: "kref-11",
        title: "Vant-Goff qoidasi",
        expression: "v₂ = v₁ · γ^((T₂ − T₁)/10)",
        explanation: "Harorat har 10°C oshganda reaksiya tezligi γ (2–4) marta ortadi.",
        usage: "Kimyoviy kinetika va reaksiya tezligini boshqarishda.",
      },
      {
        id: "kref-12",
        title: "Faradey elektroliz qonuni",
        expression: "m = (M · I · t) / (n · F),   F = 96 500 Kl/mol",
        explanation: "Elektrodlarda ajralgan modda massasi tok kuchi va vaqtga proporsional.",
        usage: "Elektrokimyo va toza metallar olish hisoblarida.",
      },
      {
        id: "kref-13",
        title: "Tuzlar gidrolizi muhiti",
        expression:
          "Kuchli asos + Kuchsiz kislota → pH > 7;  Kuchsiz asos + Kuchli kislota → pH < 7",
        explanation: "Tuz eritmasining muhiti uni hosil qilgan kislota va asos kuchiga bog‘liq.",
        usage: "Na₂CO₃ (ishqoriy) va AlCl₃ (kislotali) eritmalarni farqlashda.",
      },
      {
        id: "kref-14",
        title: "Amfoter oksid va gidroksidlar",
        expression: "BeO, ZnO, Al₂O₃, Cr₂O₃, Fe₂O₃ (faqat qizdirilganda)",
        explanation: "Ham kislotalar, ham ishqorlar bilan tuz va suv hosil qiluvchi birikmalar.",
        usage: "Amfoterlik zanjir reaksiyalarini yozishda.",
      },
      {
        id: "kref-15",
        title: "Disaxarid va polisaxarid formulalari",
        expression: "Saxaroza: C₁₂H₂₂O₁₁;   Kraxmal/Sellyuloza: (C₆H₁₀O₅)ₙ",
        explanation: "Murakkab uglevodlarning gidrolizi natijasida glyukoza (C₆H₁₂O₆) olinadi.",
        usage: "Biokimyo va oziq-ovqat sanoatida.",
      },
      {
        id: "kref-16",
        title: "Xlorid va sulfat ionlariga sifat reaksiyasi",
        expression: "Cl⁻ + Ag⁺ → AgCl↓ (oq);    SO₄²⁻ + Ba²⁺ → BaSO₄↓ (oq)",
        explanation: "Nitrat kislotada erimaydigan oq cho‘kmalar hosil bo‘lishi.",
        usage: "Anorganik moddalarni sifat tahlilida aniqlashda.",
      },
      {
        id: "kref-17",
        title: "Karbonat ioniga sifat reaksiyasi",
        expression: "CO₃²⁻ + 2H⁺ → CO₂↑ + H₂O  (ohakli suvni loyqalatadi)",
        explanation: "Kislota ta’sirida rangsiz karbonat angidrid gazi ajralishi.",
        usage: "Ohaktosh, soda va bo‘rni aniqlashda.",
      },
      {
        id: "kref-18",
        title: "Nitrat kislotaning metallar bilan reaksiyasi",
        expression: "Cu + 4HNO₃(kons) → Cu(NO₃)₂ + 2NO₂↑ + 2H₂O",
        explanation: "Nitrat kislota kuchli oksidlovchi sifatida azot oksidlari hosil qiladi.",
        usage: "OQR va metallarni eritish jarayonlarida.",
      },
      {
        id: "kref-19",
        title: "Avogadro qonuni va molyar hajm",
        expression: "Vₘ = 22.4 L/mol (n.sh. da, T = 273 K, P = 101.3 kPa)",
        explanation: "Normal sharoitda har qanday ideal gazning 1 moli 22.4 litr hajm egallaydi.",
        usage: "Gaz ishtirokidagi barcha hisob-kitoblarda.",
      },
      {
        id: "kref-20",
        title: "Vodorod ko‘rsatkichi (pH) shkalasi",
        expression: "pH = −lg[H⁺];   pH + pOH = 14 (25°C da)",
        explanation: "Eritmadagi vodorod ionlari konsentratsiyasini ko‘rsatuvchi kattalik.",
        usage: "Tibbiyot, tuproqshunoslik va analitik kimyoda.",
      },
    ],
    exercises: [
      {
        id: "kex-1",
        title: "Molyar massa va mol hisobi",
        level: "Asosiy",
        question: "88 gramm karbonat angidrid (CO₂) n.sh. da necha litr hajmni egallaydi?",
        hint: "Avval M(CO₂) = 12 + 2·16 = 44 g/mol ni toping, so‘ng n = m/M va V = n·22.4 dan foydalaning.",
        solution: "n(CO₂) = 88 / 44 = 2 mol. V(CO₂) = 2 · 22.4 = 44.8 litr.",
      },
      {
        id: "kex-2",
        title: "Eritma tayyorlash",
        level: "O‘rta",
        question:
          "300 g 15% li shakar eritmasiga yana 100 g suv qo‘shilsa, hosil bo‘lgan eritmaning foiz konsentratsiyasi qancha bo‘ladi?",
        hint: "Erigan modda massasi o‘zgarmaydi, faqat umumiy eritma massasi ortadi.",
        solution:
          "m(shakar) = 300 · 0.15 = 45 g. Yangi eritma massasi: 300 + 100 = 400 g. w = (45 / 400) · 100% = 11.25%.",
      },
      {
        id: "kex-3",
        title: "Kimyoviy tenglama bo‘yicha masala",
        level: "O‘rta",
        question:
          "13 gramm rux (Zn, Aᵣ = 65) mo‘l xlorid kislota (HCl) bilan reaksiyaga kirishganda n.sh. da necha litr vodorod ajralib chiqadi?",
        hint: "Reaksiya: Zn + 2HCl → ZnCl₂ + H₂↑. 1 mol Zn dan 1 mol H₂ chiqadi.",
        solution:
          "n(Zn) = 13 / 65 = 0.2 mol. Tenglama bo‘yicha n(H₂) = 0.2 mol. V(H₂) = 0.2 · 22.4 = 4.48 litr.",
      },
      {
        id: "kex-4",
        title: "Oksidlanish darajasini aniqlash",
        level: "Asosiy",
        question:
          "KMnO₄ va H₂SO₄ birikmalarida marganets (Mn) va oltingugurt (S) oksidlanish darajasini toping.",
        hint: "K = +1, H = +1, O = −2. Molekulada oksidlanish darajalari yig‘indisi 0 ga teng.",
        solution:
          "KMnO₄ da: +1 + x + 4(−2) = 0 ⇒ x = +7 (Mn⁺⁷). H₂SO₄ da: 2(+1) + y + 4(−2) = 0 ⇒ y = +6 (S⁺⁶).",
      },
      {
        id: "kex-5",
        title: "Vant-Goff harorat qoidasi",
        level: "O‘rta",
        question:
          "Reaksiyaning harorat koeffitsiyenti γ = 2 ga teng. Harorat 10°C dan 40°C gacha ko‘tarilsa, reaksiya tezligi necha marta ortadi?",
        hint: "Harorat o‘zgarishi ΔT = 40 − 10 = 30°C. v₂/v₁ = γ^(ΔT/10).",
        solution: "ΔT / 10 = 30 / 10 = 3. Tezlik 2³ = 8 marta ortadi.",
      },
      {
        id: "kex-6",
        title: "Reaksiya unumini hisoblash",
        level: "Chuqurlashtirilgan",
        question:
          "200 g ohaktosh (CaCO₃, M = 100 g/mol) qizdirilganda 33.6 litr (n.sh.) karbonat angidrid (CO₂) olindi. Reaksiya unumi necha foiz?",
        hint: "CaCO₃ → CaO + CO₂↑. Nazariy hajm bilan amaliy hajmni solishtiring.",
        solution:
          "n(CaCO₃) = 200 / 100 = 2 mol ⇒ V(nazariy CO₂) = 2 · 22.4 = 44.8 L. Unum η = (33.6 / 44.8) · 100% = 75%.",
      },
      {
        id: "kex-7",
        title: "Gazning havoga nisbatan zichligi",
        level: "Asosiy",
        question:
          "Karbonat angidridning (CO₂) havoga nisbatan zichligini hisoblang (M(havo) = 29 g/mol).",
        hint: "D(havo) = M(CO₂) / M(havo).",
        solution:
          "M(CO₂) = 44 g/mol. D(havo) = 44 / 29 ≈ 1.52 (demak CO₂ havodan 1.52 marta og‘ir).",
      },
      {
        id: "kex-8",
        title: "Karbamid tarkibidagi azot ulushi",
        level: "O‘rta",
        question: "Karbamid o‘g‘iti CO(NH₂)₂ tarkibida azotning massa ulushi necha foiz?",
        hint: "M(CO(NH₂)₂) = 12 + 16 + 2·(14 + 2) = 60 g/mol; ikkita azot massasi 28 g.",
        solution: "w(N) = (28 / 60) · 100% ≈ 46.67%.",
      },
      {
        id: "kex-9",
        title: "Eritmalarni aralashtirish",
        level: "Chuqurlashtirilgan",
        question:
          "200 g 10% li va 300 g 20% li tuz eritmalari aralashtirilsa, hosil bo‘lgan eritmaning konsentratsiyasi necha foiz bo‘ladi?",
        hint: "Har ikki eritmadagi tuz massalarini qo‘shib, umumiy eritma massasiga bo‘ling.",
        solution:
          "m(tuz) = 200·0.1 + 300·0.2 = 20 + 60 = 80 g. m(eritma) = 500 g. w = (80 / 500)·100% = 16%.",
      },
      {
        id: "kex-10",
        title: "Neytrallanish reaksiyasi",
        level: "O‘rta",
        question:
          "20 g natriy gidroksidni (NaOH, M = 40) to‘liq neytrallash uchun necha gramm xlorid kislota (HCl, M = 36.5) kerak?",
        hint: "NaOH + HCl → NaCl + H₂O (1 : 1 mol nisbatda).",
        solution:
          "n(NaOH) = 20 / 40 = 0.5 mol ⇒ n(HCl) = 0.5 mol ⇒ m(HCl) = 0.5 · 36.5 = 18.25 gramm.",
      },
    ],
    quizzes: [
      {
        id: "kq-1",
        question: "Kalsiy (₂₀⁴⁰Ca) atomining yadrosida nechta neytron mavjud?",
        options: ["10", "20", "40", "60"],
        answer: 1,
        explanation: "Neytronlar soni N = A − Z = 40 − 20 = 20 ta.",
      },
      {
        id: "kq-2",
        question: "Normal sharoitda 0.5 mol kislorod (O₂) qancha hajm egallaydi?",
        options: ["5.6 litr", "11.2 litr", "22.4 litr", "44.8 litr"],
        answer: 1,
        explanation: "V = n · Vₘ = 0.5 · 22.4 = 11.2 litr.",
      },
      {
        id: "kq-3",
        question: "Fenolftalein indikatori ishqoriy muhitda qanday rangga kiradi?",
        options: ["Ko‘k", "Sariq", "To‘q qizil (malina)", "Rangsiz qoladi"],
        answer: 2,
        explanation: "Fenolftalein ishqoriy eritmada malina (to‘q qizil) rangga bo‘yaladi.",
      },
      {
        id: "kq-4",
        question: "Qaysi birikmada ion bog‘lanish mavjud?",
        options: ["CO₂", "NH₃", "KCl", "CH₄"],
        answer: 2,
        explanation: "KCl faol metall (K) va faol metallmas (Cl) orasidagi ion bog‘lanishli modda.",
      },
      {
        id: "kq-5",
        question: "Alkenlar gomologik qatorining umumiy formulasi qaysi?",
        options: ["CₙH₂ₙ₊₂", "CₙH₂ₙ", "CₙH₂ₙ₋₂", "CₙH₂ₙ₋₆"],
        answer: 1,
        explanation: "Bitta qo‘sh bog‘ saqlovchi alkenlar CₙH₂ₙ umumiy formulasiga ega.",
      },
      {
        id: "kq-6",
        question: "Suvning (H₂O) molyar massasi nechaga teng?",
        options: ["16 g/mol", "18 g/mol", "20 g/mol", "32 g/mol"],
        answer: 1,
        explanation: "M(H₂O) = 2·1 + 16 = 18 g/mol.",
      },
      {
        id: "kq-7",
        question: "Qaysi metall suyultirilgan sulfat kislotadan vodorodni siqib chiqara olmaydi?",
        options: ["Zn", "Fe", "Mg", "Cu"],
        answer: 3,
        explanation: "Mis (Cu) metallarning faollik qatorida vodoroddan o‘ngda joylashgan.",
      },
      {
        id: "kq-8",
        question: "Kislotali muhit uchun pH qiymati qanday bo‘ladi?",
        options: ["pH < 7", "pH = 7", "pH > 7", "pH = 14"],
        answer: 0,
        explanation: "pH < 7 kislotali, pH = 7 neytral, pH > 7 ishqoriy muhitdir.",
      },
      {
        id: "kq-9",
        question:
          "Mendeleyev davriy jadvalidagi jami tasdiqlangan kimyoviy elementlar soni nechta?",
        options: ["92 ta", "108 ta", "114 ta", "118 ta"],
        answer: 3,
        explanation:
          "Zamonaviy davriy jadvalda 1 (Vodorod) dan 118 (Oganesson) gacha 118 ta element bor.",
      },
      {
        id: "kq-10",
        question: "Ammiak (NH₃) molekulasida azotning oksidlanish darajasi nechaga teng?",
        options: ["+3", "−3", "+5", "0"],
        answer: 1,
        explanation: "Vodorod +1 bo‘lgani uchun x + 3(+1) = 0 ⇒ x = −3.",
      },
      {
        id: "kq-11",
        question: "Kraxmalni aniqlash uchun qaysi sifat reaktivi ishlatiladi?",
        options: ["Yod eritmasi", "Fenolftalein", "Kumush oksid", "Mis (II) sulfat"],
        answer: 0,
        explanation: "Yod eritmasi kraxmal bilan reaksiyaga kirishib to‘q ko‘k rang beradi.",
      },
      {
        id: "kq-12",
        question: "Osh tuzi (NaCl) suvli eritmasining elektrolizida katodda qaysi gaz ajraladi?",
        options: ["Kislorod", "Xlor", "Vodorod", "Azot"],
        answer: 2,
        explanation:
          "Natriy faol metall bo‘lgani uchun katodda suv qaytarilib vodorod (H₂) ajraladi.",
      },
      {
        id: "kq-13",
        question: "Sulfat ionini (SO₄²⁻) aniqlash uchun qaysi reaktivdan foydalaniladi?",
        options: ["Bariy xlorid (BaCl₂)", "Fenolftalein", "Kumush nitrat", "Natriy gidroksid"],
        answer: 0,
        explanation: "Ba²⁺ + SO₄²⁻ → BaSO₄↓ — kislotada erimaydigan oq cho‘kma hosil bo‘ladi.",
      },
      {
        id: "kq-14",
        question: "Kontakt usulida SO₂ ni SO₃ ga oksidlashda qaysi katalizator ishlatiladi?",
        options: [
          "Temir (Fe)",
          "Vanadiy (V) oksidi (V₂O₅)",
          "Platina (Pt) tolasi",
          "Marganets (MnO₂)",
        ],
        answer: 1,
        explanation:
          "Sulfat kislota ishlab chiqarishda SO₂ ni oksidlashda V₂O₅ katalizatori qo‘llaniladi.",
      },
      {
        id: "kq-15",
        question: "Galogenlar ichida eng kuchli oksidlovchi va faol metallmas qaysi?",
        options: ["Yod (I₂)", "Brom (Br₂)", "Xlor (Cl₂)", "Ftor (F₂)"],
        answer: 3,
        explanation:
          "Ftor (F) davriy jadvaldagi eng elektrmanfiy (3.98) element va eng kuchli oksidlovchidir.",
      },
      {
        id: "kq-16",
        question:
          "Kauchukni oltingugurt bilan qizdirib rezinaga aylantirish jarayoni nima deyiladi?",
        options: ["Polimerlanish", "Kreking", "Vulkanizatsiya", "Gidrogenlash"],
        answer: 2,
        explanation:
          "Vulkanizatsiya kauchuk molekulalarini oltingugurt ko‘priklari bilan bog‘lab mustahkam rezina beradi.",
      },
    ],
    glossary: [
      {
        term: "Katalizator",
        definition:
          "Kimyoviy reaksiya tezligini oshirib, o‘zi reaksiya oxirida sarflanmay qoladigan modda.",
        example: "H₂O₂ parchalanishida MnO₂ katalizator vazifasini bajaradi.",
      },
      {
        term: "Izotop",
        definition:
          "Protonlar soni bir xil, lekin atom massasi turlicha bo‘lgan bir xil element atomlari.",
        example: "Uglerodning ¹²C, ¹³C va ¹⁴C izotoplari mavjud.",
      },
      {
        term: "Elektrolit",
        definition:
          "Suvli eritmada yoki suyuqlanmada ionlarga ajralib, elektr tokini o‘tkazuvchi modda.",
        example: "Osh tuzi (NaCl), sulfat kislota va natriy gidroksid kuchli elektrolitlardir.",
      },
      {
        term: "Amfoterlik",
        definition: "Moddaning sharoitga qarab ham kislota, ham asos xossasini namoyon etishi.",
        example: "Zn(OH)₂ va Al₂O₃ amfoter birikmalardir.",
      },
      {
        term: "Valentlik",
        definition:
          "Element atomining boshqa element atomlarining ma’lum sonini biriktirib olish xususiyati.",
        example: "Kislorod doimo II valentli, uglerod organik birikmalarda IV valentli.",
      },
      {
        term: "Izomeriya",
        definition:
          "Tarkibi va molekulyar massasi bir xil, ammo kimyoviy tuzilishi turlicha bo‘lgan moddalar hodisasi.",
        example: "Butan va izobutan (C₄H₁₀) o‘zaro izomerlardir.",
      },
      {
        term: "Oksidlovchi",
        definition:
          "Reaksiya davomida o‘ziga elektron biriktirib oluvchi (oksidlanish darajasi pasayuvchi) zarracha.",
        example: "KMnO₄, HNO₃ va Cl₂ kuchli oksidlovchilardir.",
      },
      {
        term: "Qaytaruvchi",
        definition:
          "Reaksiya jarayonida elektron beruvchi (oksidlanish darajasi ortuvchi) zarracha.",
        example: "Ishqoriy metallar va uglerod yuqori haroratda qaytaruvchi bo‘ladi.",
      },
      {
        term: "Gidroliz",
        definition:
          "Tuz ionlarining suv molekulalari bilan ta’sirlashib, kuchsiz elektrolit hosil qilishi.",
        example: "Na₂CO₃ eritmasi gidroliz tufayli ishqoriy muhitga ega bo‘ladi.",
      },
      {
        term: "Polimer",
        definition:
          "Ko‘plab takrorlanuvchi kichik bo‘g‘inlardan (monomerlardan) tashkil topgan yuqori molekulyar birikma.",
        example: "Polietilen etilen (CH₂=CH₂) ning polimerlanishidan olinadi.",
      },
      {
        term: "Allotropiya",
        definition:
          "Bitta kimyoviy element atomlarining tuzilishi va xossalari har xil bir nechta oddiy modda hosil qilishi.",
        example: "Uglerodning allotropik shakl o‘zgarishlari: olmos, grafit va fulleren.",
      },
      {
        term: "Peptid bog‘",
        definition: "Aminokislotalarni oqsil zanjiriga bog‘lovchi −CO−NH− kimyoviy bog‘lanish.",
        example: "Oqsillar polipeptid zanjirlaridan tashkil topgan.",
      },
      {
        term: "Elektrmanfiylik",
        definition:
          "Element atomining kimyoviy bog‘da umumiy elektron juftini o‘ziga tortish qobiliyati.",
        example: "Ftor (3.98) eng yuqori elektrmanfiylikka ega elementdir.",
      },
      {
        term: "Vulkanizatsiya",
        definition:
          "Tabiiy yoki sintetik kauchukni oltingugurt bilan qizdirib elastik rezinaga aylantirish.",
        example: "Avtomobil shinalari ishlab chiqarishda qo‘llaniladi.",
      },
      {
        term: "Esterifikatsiya",
        definition:
          "Karbon kislota va spirtning o‘zaro ta’sirlashib murakkab efir va suv hosil qilishi.",
        example: "Sirka kislota + etanol → etilatsetat + suv.",
      },
      {
        term: "Denaturatsiya",
        definition:
          "Harorat, kislota yoki nurlanish ta’sirida oqsilning tabiiy fazoviy tuzilishining buzilishi.",
        example: "Tuxum oqsili qizdirilganda qotib qolishi.",
      },
      {
        term: "Stexiometriya",
        definition:
          "Kimyoviy reaksiyada qatnashuvchi moddalarning massa va hajmiy nisbatlarini o‘rganuvchi bo‘lim.",
        example: "Reaksiya tenglamasi bo‘yicha hosil bo‘ladigan mahsulot massasini topish.",
      },
      {
        term: "Passivlashuv",
        definition:
          "Metall sirtida himoya oksid pardasi hosil bo‘lib, keyingi reaksiyaning to‘xtashi.",
        example: "Sovuq konsentrlangan HNO₃ temir va alyuminiyni passivlashtiradi.",
      },
      {
        term: "Gomologlar",
        definition:
          "Tuzilishi va kimyoviy xossalari o‘xshash, bir-biridan bitta yoki bir nechta −CH₂− guruhiga farq qiluvchi moddalar.",
        example: "Metan (CH₄), etan (C₂H₆), propan (C₃H₈).",
      },
      {
        term: "Kreking",
        definition:
          "Neft tarkibidagi yirik uglevodorod molekulalarini yuqori haroratda kichik bo‘laklarga parchalash.",
        example: "Mazutdan qo‘shimcha benzin olish jarayoni.",
      },
    ],
    flashcards: [
      {
        id: "kfc-1",
        front: "Avogadro doimiysi Nₐ nechaga teng?",
        back: "6.02 · 10²³ mol⁻¹ (1 mol moddadagi zarrachalar soni)",
      },
      {
        id: "kfc-2",
        front: "Normal sharoitda (n.sh.) 1 mol gazning hajmi?",
        back: "Vₘ = 22.4 litr/mol",
      },
      {
        id: "kfc-3",
        front: "pH < 7, pH = 7 va pH > 7 qanday muhit?",
        back: "pH < 7 kislotali, pH = 7 neytral, pH > 7 ishqoriy muhit",
      },
      {
        id: "kfc-4",
        front: "Fenolftalein ishqorda qanday rangga kiradi?",
        back: "To‘q qizil (malina) rangga; kislota va neytralda rangsiz",
      },
      {
        id: "kfc-5",
        front: "Alkan, alken va alkin umumiy formulalari?",
        back: "Alkan: CₙH₂ₙ₊₂; Alken: CₙH₂ₙ; Alkin: CₙH₂ₙ₋₂",
      },
      {
        id: "kfc-6",
        front: "Xlorid (Cl⁻) va Sulfat (SO₄²⁻) sifat reaktivlari?",
        back: "Cl⁻ uchun AgNO₃ (oq AgCl↓); SO₄²⁻ uchun BaCl₂ (oq BaSO₄↓)",
      },
      {
        id: "kfc-7",
        front: "Amfoter oksid va gidroksidlar (misollar)?",
        back: "Al₂O₃, ZnO, BeO, Cr₂O₃ — ham kislota, ham ishqor bilan reaksiyaga kirishadi",
      },
      {
        id: "kfc-8",
        front: "Oksidlovchi va qaytaruvchi farqi?",
        back: "Oksidlovchi elektron oladi (darajasi ↓); Qaytaruvchi elektron beradi (darajasi ↑)",
      },
      {
        id: "kfc-9",
        front: "Le Shatelye prinsipi nima deydi?",
        back: "Muvozanatdagi tizimga tashqi ta’sir ko‘rsatilsa, muvozanat ta’sirni kamaytiruvchi tomonga siljiydi",
      },
      {
        id: "kfc-10",
        front: "Kraxmalning sifat reaktivi?",
        back: "Yod (I₂) eritmasi bilan to‘q ko‘k rang hosil qiladi",
      },
      {
        id: "kfc-11",
        front: "Mendeleyev-Klapeyron tenglamasi?",
        back: "P·V = n·R·T (bu yerda R = 8.314 J/(mol·K))",
      },
      {
        id: "kfc-12",
        front: "Havo tarkibi (hajm bo‘yicha)?",
        back: "~78% Azot (N₂), ~21% Kislorod (O₂), ~1% Argon va CO₂",
      },
      {
        id: "kfc-13",
        front: "Kontakt usulida SO₂ → SO₃ katalizatori?",
        back: "Vanadiy (V) oksidi — V₂O₅",
      },
      {
        id: "kfc-14",
        front: "Eng yengil metall va eng og‘ir (suyuq) metall?",
        back: "Eng yengil — Litiy (Li); xona haroratida suyuq metall — Simob (Hg)",
      },
    ],
  },

  fizika: {
    id: "fizika",
    title: "Fizika",
    shortName: "Fizika",
    category: "Tabiiy fanlar",
    grades: "6–11-sinflar",
    description:
      "Mexanika, molekulyar fizika va termodinamika, elektr va magnetizm, optika hamda atom fizikasi qonuniyatlarini amaliy masalalar bilan o‘rganish.",
    motto: "Fizika — koinotning harakat va energiya tilini o‘rgatuvchi fundamental fandir.",
    referenceTabLabel: "Qonunlar va formulalar",
    outcomes: [
      "Tekis va tekis tezlanuvchan harakat grafiklarini hamda tenglamalarini tahlil qilish",
      "Nyuton qonunlari, impuls va energiyaning saqlanish qonunlarini masalalarga tatbiq etish",
      "Ideal gaz qonunlari, issiqlik miqdori va termodinamika qonunlarini hisoblash",
      "Om qonuni, ketma-ket va parallel ulangan elektr zanjirlarini hisoblash",
      "Yorug‘likning qaytish, sinish qonunlari va linza formulasidan foydalanish",
    ],
    stats: {
      lessons: 14,
      references: 20,
      quizzes: 16,
      hours: "84 soat",
    },
    lessons: [
      {
        id: "fiz-1",
        title: "Kinematika: To‘g‘ri chiziqli tekis va tekis tezlanuvchan harakat",
        grade: "7–9-sinf",
        duration: "40 daqiqa",
        level: "Asosiy",
        summary:
          "Trayektoriya, yo‘l va ko‘chish, tezlik, tezlanish hamda erkin tushish harakati tenglamalari.",
        sections: [
          {
            heading: "Tekis va tezlanuvchan harakat tenglamalari",
            content:
              "To‘g‘ri chiziqli tekis harakatda tezlik o‘zgarmas bo‘ladi (v = const). Agar tezlik har sekundda bir xil kattalikka o‘zgarsa, bunday harakat tekis tezlanuvchan harakat deyiladi va uning o‘zgarish jadalligi tezlanish (a) bilan o‘lchanadi.",
            formulaOrRule: "v = v₀ + at;    S = v₀t + at² / 2;    v² − v₀² = 2aS",
            example:
              "Tinch holatdan (v₀ = 0) a = 2 m/s² tezlanish bilan harakat boshlagan avtomobil t = 5 s da v = 0 + 2·5 = 10 m/s tezlikka erishadi va S = (2 · 25) / 2 = 25 m yo‘l bosadi.",
            keyTakeaways: [
              "SI tizimida tezlik birligi m/s (1 m/s = 3.6 km/soat).",
              "Erkin tushish tezlanishi g ≈ 9.8 m/s² (masalalarda ko‘pincha 10 m/s² olinadi).",
            ],
          },
        ],
      },
      {
        id: "fiz-2",
        title: "Dinamika: Nyuton qonunlari va tabiatdagi kuchlar",
        grade: "7–9-sinf",
        duration: "45 daqiqa",
        level: "Asosiy",
        summary:
          "Inersiya, massa va kuch, Nyutonning uchta qonuni, og‘irlik kuchi, elastiklik va ishqalanish kuchlari.",
        sections: [
          {
            heading: "Nyutonning uch qonuni",
            content:
              "I qonun: Tashqi kuch ta’sir etmasa yoki kuchlar muvozanatlashsa, jism tinch yoki to‘g‘ri chiziqli tekis harakatda qoladi. II qonun: Jism tezlanishi unga ta’sir etuvchi natijaviy kuchga to‘g‘ri, massasiga teskari proporsional. III qonun: Ikki jism bir-biriga miqdor jihatdan teng, yo‘nalish jihatdan qarama-qarshi kuch bilan ta’sir etadi.",
            formulaOrRule: "F = m · a;    F₁ = −F₂;    F(ishq) = μ · N",
            example:
              "Massasi 4 kg bo‘lgan jismga 12 N kuch ta’sir etsa (ishqalanish yo‘q), uning tezlanishi a = F / m = 12 / 4 = 3 m/s² bo‘ladi.",
            keyTakeaways: [
              "Kuchning SI dagi birligi Nyuton (1 N = 1 kg·m/s²).",
              "Butun olam tortishish qonuni: F = G · m₁m₂ / r².",
            ],
          },
        ],
      },
      {
        id: "fiz-3",
        title: "Ish, quvvat, energiya va saqlanish qonunlari",
        grade: "8–9-sinf",
        duration: "40 daqiqa",
        level: "O‘rta",
        summary:
          "Mexanik ish, quvvat, kinetik va potensial energiya hamda to‘liq mexanik energiyaning saqlanish qonuni.",
        sections: [
          {
            heading: "Kinetik, potensial energiya va FIK",
            content:
              "Harakatlanayotgan jism kinetik energiyaga, Yer sathidan balandlikda turgan yoki deformatsiyalangan jism esa potensial energiyaga ega. Yopiq tizimda (ishqalanishsiz) to‘liq mexanik energiya o‘zgarmaydi.",
            formulaOrRule: "A = F·S·cosα;   N = A / t;   Eₖ = mv²/2;   Eₚ = mgh;   Eₖ + Eₚ = const",
            example:
              "Massasi 2 kg tosh h = 20 m balandlikdan tushib yerga yetganda potensial energiyasi to‘liq kinetik energiyaga aylanadi: Eₖ = mgh = 2·10·20 = 400 J, tezligi v = √(2gh) = 20 m/s.",
            keyTakeaways: [
              "Ish va energiya birligi — Joul (J), quvvat birligi — Vatt (W).",
              "Foydali ish koeffitsiyenti (FIK): η = (A(foydali) / A(umumiy)) · 100%.",
            ],
          },
        ],
      },
      {
        id: "fiz-4",
        title: "Molekulyar fizika va termodinamika asoslari",
        grade: "10-sinf",
        duration: "45 daqiqa",
        level: "O‘rta",
        summary:
          "MKN asosiy qoidalari, ideal gaz holat tenglamasi, issiqlik miqdori va termodinamikaning I qonuni.",
        sections: [
          {
            heading: "Issiqlik jarayonlari va termodinamika I qonuni",
            content:
              "Barcha moddalar uzluksiz issiqlik harakatidagi molekulalardan iborat. Tizimga berilgan issiqlik miqdori (Q) uning ichki energiyasini o‘zgartirishga (ΔU) va tashqi kuchlarga qarshi ish bajarishga (A) sarflanadi.",
            formulaOrRule: "Q = c·m·ΔT;    Q = ΔU + A;    η(Karno) = (T₁ − T₂) / T₁",
            example:
              "2 kg suvni (c = 4200 J/(kg·K)) 20°C dan 70°C gacha isitish uchun kerakli issiqlik: Q = 4200 · 2 · (70 − 20) = 420 000 J = 420 kJ.",
            keyTakeaways: [
              "Mutlaq harorat Kelvinda o‘lchanadi: T(K) = t(°C) + 273.",
              "Izotermik jarayonda (T = const) ichki energiya o‘zgarmaydi (ΔU = 0).",
            ],
          },
        ],
      },
      {
        id: "fiz-5",
        title: "Elektr toki, Om qonuni va elektr zanjirlari",
        grade: "8 va 10-sinf",
        duration: "45 daqiqa",
        level: "O‘rta",
        summary:
          "Elektr zaryadi, Kulon qonuni, tok kuchi, kuchlanish, qarshilik hamda ketma-ket va parallel ulanish qoidalari.",
        sections: [
          {
            heading: "Zanjirning bir qismi uchun Om qonuni va Joul-Lens qonuni",
            content:
              "O‘tkazgichdan o‘tayotgan tok kuchi uchlaridagi kuchlanishga to‘g‘ri, qarshiligiga teskari proporsional. Ketma-ket ulanganda tok kuchi bir xil, qarshiliklar qo‘shiladi; parallel ulanganda kuchlanish bir xil, o‘tkazuvchanliklar qo‘shiladi.",
            formulaOrRule: "I = U / R;   R(ketma) = R₁ + R₂;   1/R(par) = 1/R₁ + 1/R₂;   Q = I²Rt",
            example:
              "Qarshiliklari 6 Om va 3 Om bo‘lgan ikkita rezistor parallel ulansa: R = (6 · 3) / (6 + 3) = 18 / 9 = 2 Om. 12 V kuchlanishda umumiy tok I = 12 / 2 = 6 A.",
            keyTakeaways: [
              "Ampermetr zanjirga ketma-ket, voltmetr esa parallel ulanadi.",
              "Elektr tokining quvvati: P = U · I = I²R = U²/R.",
            ],
          },
        ],
      },
      {
        id: "fiz-6",
        title: "Optika va kvant fizikasi asoslari",
        grade: "11-sinf",
        duration: "40 daqiqa",
        level: "Chuqurlashtirilgan",
        summary:
          "Yorug‘likning qaytish va sinish qonunlari, yupqa linza formulasi, fotoeffekt va Eynshteyn tenglamasi.",
        sections: [
          {
            heading: "Geometrik optika va kvantlar",
            content:
              "Yorug‘lik bir muhitdan ikkinchisiga o‘tganda tezligi o‘zgarishi tufayli sinadi. Kvant fizikasida yorug‘lik E = hν energiyali fotonlar oqimi sifatida qaraladi; yorug‘lik ta’sirida metalldan elektronlar ajralib chiqishi fotoeffekt deyiladi.",
            formulaOrRule: "1/F = 1/d + 1/f;    D = 1/F (dptr);    hν = A(chiqish) + mv²/2",
            example:
              "Fokus masofasi F = 20 sm = 0.2 m bo‘lgan yig‘uvchi linzaning optik kuchi: D = 1 / 0.2 = +5 dioptriya.",
            keyTakeaways: [
              "Vakuumda yorug‘lik tezligi c = 3 · 10⁸ m/s.",
              "Yig‘uvchi linza uchun F > 0, sochuvchi linza uchun F < 0.",
            ],
          },
        ],
      },
      {
        id: "fiz-7",
        title: "Mexanik tebranishlar, to‘lqinlar va akustika",
        grade: "9 va 11-sinf",
        duration: "40 daqiqa",
        level: "O‘rta",
        summary:
          "Garmonik tebranishlar, matematik va prujinali mayatnik davri, to‘lqin uzunligi hamda tovush hodisalari.",
        sections: [
          {
            heading: "Matematik va prujinali mayatniklar",
            content:
              "Tebranish davri T — bitta to‘liq tebranish uchun ketgan vaqt, chastota ν = 1/T esa 1 sekunddagi tebranishlar sonidir (Gerts, Hz). Matematik mayatnik davri uning massasiga emas, faqat ip uzunligi va erkin tushish tezlanishiga bog‘liq.",
            formulaOrRule: "T = 2π√(l / g)  (matematik);    T = 2π√(m / k)  (prujinali)",
            example:
              "Uzunligi l = 2.5 m bo‘lgan matematik mayatnikning tebranish davri: T ≈ 2 · 3.14 · √(2.5 / 10) = 6.28 · 0.5 = 3.14 s.",
            keyTakeaways: [
              "Chastota birligi — Gerts (1 Hz = 1 s⁻¹).",
              "Prujina bikrligi 4 marta ortsa, tebranish davri 2 marta kamayadi.",
            ],
          },
          {
            heading: "Mexanik to‘lqinlar va tovush",
            content:
              "To‘lqin — tebranishlarning muhitda vaqt davomida tarqalishi. To‘lqin tezligi v = λ · ν formulasi bilan topiladi. Odam qulog‘i 16 Hz dan 20 000 Hz gacha chastotali tovushlarni eshitadi.",
            formulaOrRule: "v = λ · ν = λ / T;    Tovushning havodagi tezligi ≈ 340 m/s",
            example:
              "Chastotasi 680 Hz bo‘lgan tovushning havodagi to‘lqin uzunligi: λ = v / ν = 340 / 680 = 0.5 metr.",
            keyTakeaways: [
              "16 Hz dan past tovushlar infratovush, 20 kHz dan yuqorisi ultratovush deyiladi.",
              "Tovush vakuumda tarqalmaydi, qattiq jismlarda esa eng tez tarqaladi.",
            ],
          },
        ],
      },
      {
        id: "fiz-8",
        title: "Magnit maydoni va elektromagnit induksiya",
        grade: "8 va 11-sinf",
        duration: "45 daqiqa",
        level: "Chuqurlashtirilgan",
        summary:
          "Tokli o‘tkazgichga ta’sir etuvchi Amper kuchi, harakatlanuvchi zaryadga Lorens kuchi va Faradeyning elektromagnit induksiya qonuni.",
        sections: [
          {
            heading: "Amper kuchi va Lorens kuchi",
            content:
              "Magnit maydoni tokli o‘tkazgichga Amper kuchi bilan, harakatlanayotgan q zaryadli zarrachaga esa Lorens kuchi bilan ta’sir etadi. Kuch yo‘nalishi chap qo‘l qoidasi bilan aniqlanadi.",
            formulaOrRule: "F(Amper) = I · B · l · sinα;    F(Lorens) = |q| · v · B · sinα",
            example:
              "Induksiyasi B = 0.5 T maydonga tik joylashgan l = 0.4 m simdan I = 5 A tok o‘tsa, Amper kuchi F = 5 · 0.5 · 0.4 · sin(90°) = 1 N.",
            keyTakeaways: [
              "Zaryad magnit maydoniga parallel kirsa (α = 0°), Lorens kuchi nolga teng.",
              "Lorens kuchi ish bajarmaydi, faqat zarracha tezligi yo‘nalishini o‘zgartirib aylana bo‘ylab buradi.",
            ],
          },
          {
            heading: "Elektromagnit induksiya va Lens qoidasi",
            content:
              "Yopiq konturni kesib o‘tuvchi magnit oqimi Φ = B·S·cosα o‘zgarganda konturda induksiya elektr yurituvchi kuchi (EYuK) va induksiya toki hosil bo‘ladi.",
            formulaOrRule: "εᵢ = − ΔΦ / Δt;    εᵢ = B · l · v · sinα",
            example:
              "Kontur orqali magnit oqimi 0.2 s ichida 0.8 Vb dan 0.2 Vb gacha kamaysa, induksiya EYuK moduli |εᵢ| = |0.2 − 0.8| / 0.2 = 3 V.",
            keyTakeaways: [
              "Elektr generatorlar va transformatorlar elektromagnit induksiya hodisasiga asoslangan.",
              "Lens qoidasiga ko‘ra induksiya toki o‘zini hosil qilgan sababga qarshilik ko‘rsatadi.",
            ],
          },
        ],
      },
      {
        id: "fiz-9",
        title: "O‘zgaruvchan tok va elektromagnit to‘lqinlar",
        grade: "11-sinf",
        duration: "40 daqiqa",
        level: "Chuqurlashtirilgan",
        summary:
          "Tomson formulasi, o‘zgaruvchan tokning ta’sir etuvchi qiymatlari, transformator va elektromagnit to‘lqinlar shkalasi.",
        sections: [
          {
            heading: "Tebranish konturi va transformator",
            content:
              "Induktivlik g‘altagi L va kondensator C dan iborat tebranish konturida erkin elektromagnit tebranishlar davri Tomson formulasi bilan topiladi. Transformator kuchlanishni oshirib yoki pasaytirib beradi.",
            formulaOrRule:
              "T = 2π√(L · C);    U₁ / U₂ = N₁ / N₂ = k  (transformatsiya koeffitsiyenti)",
            example:
              "Birlamchi chulg‘amda N₁ = 1000 ta, ikkilamchi chulg‘amda N₂ = 100 ta o‘ram bor. Kirish kuchlanishi U₁ = 220 V bo‘lsa, chiqish kuchlanishi U₂ = 220 / 10 = 22 V.",
            keyTakeaways: [
              "O‘zbekiston elektr tarmoqlarida chastota ν = 50 Hz, ta’sir etuvchi kuchlanish 220 V.",
              "Kuchlanishning ta’sir etuvchi qiymati U = U(max) / √2 ga teng.",
            ],
          },
          {
            heading: "Elektromagnit to‘lqinlar shkalasi",
            content:
              "Barcha elektromagnit to‘lqinlar ko‘ndalang bo‘lib, vakuumda c = 3·10⁸ m/s tezlik bilan tarqaladi. Chastotasi ortishi tartibida: radioto‘lqinlar → infraqizil → ko‘rinadigan yorug‘lik → ultrabinafsha → rentgen → gamma nurlar.",
            formulaOrRule: "c = λ · ν = 3 · 10⁸ m/s",
            example:
              "FM radio stansiyasi 100 MHz (10⁸ Hz) chastotada uzatsa, to‘lqin uzunligi λ = (3·10⁸) / 10⁸ = 3 metr.",
            keyTakeaways: [
              "To‘lqin uzunligi qisqargan sari foton energiyasi E = hν ortib boradi.",
              "Mobil aloqa, Wi-Fi va sun’iy yo‘ldoshlar mikroto‘lqin diapazonida ishlaydi.",
            ],
          },
        ],
      },
      {
        id: "fiz-10",
        title: "Atom va yadro fizikasi asoslari",
        grade: "11-sinf",
        duration: "45 daqiqa",
        level: "Chuqurlashtirilgan",
        summary:
          "Rezerford modeli, Bor postulatlari, radioaktiv yemirilish qonuni, bog‘lanish energiyasi va yadro reaksiyalari.",
        sections: [
          {
            heading: "Radioaktivlik va yarim yemirilish davri",
            content:
              "Beqaror atom yadrolarining o‘z-o‘zidan boshqa yadrolarga aylanib α (⁴He), β (elektron) yoki γ nurlar chiqarishi radioaktivlik deyiladi. Yadrolar sonining yarmi parchalanadigan vaqt yarim yemirilish davri T½ dir.",
            formulaOrRule: "N = N₀ · 2^(−t / T½);    α-yemirilish: Z → Z − 2,  A → A − 4",
            example:
              "Radioaktiv izotopning yarim yemirilish davri T½ = 4 kun. 12 kundan so‘ng (3 ta davr) dastlabki atomlarning 2⁻³ = ⅛ qismi (12.5%) saqlanib qoladi.",
            keyTakeaways: [
              "β⁻-yemirilishda yadro zaryadi Z bir birlikka ortadi (Z + 1), massa soni A o‘zgarmaydi.",
              "Yadro reaktorlarida boshqariladigan zanjir reaksiyasi amalga oshiriladi.",
            ],
          },
          {
            heading: "Massa defekti va yadro energiyasi",
            content:
              "Yadro massasi uni tashkil etuvchi erkin proton va neytronlar massalari yig‘indisidan kichik bo‘ladi. Bu farq Δm massa defekti deyiladi va yadro bog‘lanish energiyasini belgilaydi.",
            formulaOrRule: "ΔE = Δm · c²;    Δm = Z·mₚ + (A − Z)·mₙ − M(yadro)",
            example:
              "Quyosh qa’rida vodorod yadrolarining qo‘shilib geliyga aylanishi (termoyadro sintezi) ulkan miqdorda energiya chiqaradi.",
            keyTakeaways: [
              "Yengil yadrolar sintezida ham, og‘ir yadrolar bo‘linishida ham energiya ajraladi.",
              "1 atom massa birligi ~931.5 MeV energiyaga ekvivalent.",
            ],
          },
        ],
      },
      {
        id: "fiz-11",
        title: "Gidrostatika: Paskal qonuni va suyuqlik bosimi",
        grade: "7–8-sinf",
        duration: "35 daqiqa",
        level: "Asosiy",
        summary:
          "Qattiq jism, suyuqlik va gaz bosimi, Paskal qonuni, gidravlik press hamda tutash idishlar qonuni.",
        sections: [
          {
            heading: "Gidrostatik bosim va tutash idishlar",
            content:
              "Suyuqlik ustunining idish tubiga beradigan bosimi suyuqlik zichligi va ustun balandligiga proporsional bo‘lib, idish shakliga bog‘liq emas. Tutash idishlarda bir jinsli suyuqlik sathlari bir xil balandlikda turadi.",
            formulaOrRule: "P = ρ · g · h;    P(atmosfera) ≈ 101 325 Pa = 760 mm sim. ust.",
            example:
              "10 metr chuqurlikdagi suv bosimi: P = 1000 · 10 · 10 = 100 000 Pa = 100 kPa (taxminan 1 atmosfera).",
            keyTakeaways: [
              "Dengizga chuqur tushgan sari bosim ortadi, tog‘ga chiqqanda atmosfera bosimi kamayadi.",
              "Torrichelli tajribasida atmosfera bosimi birinchi marta o‘lchangan.",
            ],
          },
          {
            heading: "Paskal qonuni va gidravlik press",
            content:
              "Suyuqlik yoki gazga ko‘rsatilgan bosim hamma tomonga bir xil uzatiladi. Gidravlik pressda kichik porshenga kichik kuch berib, katta porshenda juda katta kuchdan yutish mumkin.",
            formulaOrRule: "F₂ / F₁ = S₂ / S₁",
            example:
              "Kichik porshen yuzasi 5 sm², kattasiniki 200 sm². Kichigiga 100 N kuch berilsa, katta porshen 100 · (200/5) = 4000 N yukni ko‘taradi.",
            keyTakeaways: [
              "Gidravlik tormozlar, domkratlar va ekskavatorlar Paskal qonunida ishlaydi.",
              "Kuchdan necha marta yutilsak, masofadan shuncha marta yutqazamiz (ish saqlanadi).",
            ],
          },
        ],
      },
      {
        id: "fiz-12",
        title: "Aylanma harakat va Butun olam tortishish qonuni",
        grade: "9–10-sinf",
        duration: "40 daqiqa",
        level: "O‘rta",
        summary:
          "Chiziqli va burchak tezlik, markazga intilma tezlanish, Nyutonning tortishish qonuni va birinchi kosmik tezlik.",
        sections: [
          {
            heading: "Aylana bo‘ylab tekis harakat",
            content:
              "Jism aylana bo‘ylab doimiy v tezlikda harakatlanganda ham tezlik yo‘nalishi uzluksiz o‘zgarib turgani uchun markazga intilma tezlanishga ega bo‘ladi.",
            formulaOrRule: "v = ω · R = 2πR / T;    a(m.i.) = v² / R = ω² · R",
            example:
              "Radiusi 20 m burilishdan 10 m/s tezlikda o‘tayotgan avtomobilning markazga intilma tezlanishi: a = 10² / 20 = 5 m/s².",
            keyTakeaways: [
              "Burchak tezlik ω = 2πν radian/sekund (rad/s) da o‘lchanadi.",
              "Markazga intilma kuch F = mv²/R doimo aylana markaziga yo‘nalgan.",
            ],
          },
          {
            heading: "Butun olam tortishish qonuni",
            content:
              "Koinotdagi har ikki jism bir-birini massalari ko‘paytmasiga to‘g‘ri, oralaridagi masofa kvadratiga teskari proporsional kuch bilan tortadi.",
            formulaOrRule: "F = G · (m₁ · m₂) / r²   (G = 6.67 · 10⁻¹¹ N·m²/kg²);   v₁ ≈ 7.9 km/s",
            example:
              "Yer sun’iy yo‘ldoshiga aylanish uchun jismga Yer sirtiga parallel ravishda kamida 7.9 km/s (birinchi kosmik) tezlik berish kerak.",
            keyTakeaways: [
              "Sayyoralar Quyosh atrofida ellips orbitalari bo‘ylab harakatlanadi (Kepler qonunlari).",
              "Yerning tortishish tezlanishi g = G·M(Yer) / R² ≈ 9.8 m/s².",
            ],
          },
        ],
      },
      {
        id: "fiz-13",
        title: "Elektr maydoni, potensial va kondensatorlar",
        grade: "10-sinf",
        duration: "40 daqiqa",
        level: "Chuqurlashtirilgan",
        summary:
          "Kulon qonuni, elektr maydon kuchlanganligi, kuchlanish, kondensator sig‘imi va elektr maydon energiyasi.",
        sections: [
          {
            heading: "Kulon qonuni va maydon kuchlanganligi",
            content:
              "Vakuumdagi ikki nuqtaviy zaryadning o‘zaro ta’sir kuchi Kulon qonuni bilan aniqlanadi. Kuchlanganlik E esa birlik musbat zaryadga maydon tomonidan ta’sir etuvchi kuchdir.",
            formulaOrRule: "F = k · |q₁q₂| / r²  (k = 9·10⁹);   E = F / q = U / d",
            example:
              "Bir jinsli elektr maydonida ikki plastinka orasidagi masofa d = 0.05 m va kuchlanish U = 100 V bo‘lsa, kuchlanganlik E = 100 / 0.05 = 2000 V/m.",
            keyTakeaways: [
              "Bir xil ishorali zaryadlar itarishadi, qarama-qarshi ishoralilari tortishadi.",
              "Yopiq tizimda elektr zaryadlarning algebraik yig‘indisi saqlanadi.",
            ],
          },
          {
            heading: "Kondensator sig‘imi va energiyasi",
            content:
              "Kondensator — elektr zaryadi va energiyasini to‘plovchi qurilma. Uning asosiy xarakteristikasi elektr sig‘im C bo‘lib, Farad (F) da o‘lchanadi.",
            formulaOrRule: "C = q / U = εε₀S / d;    W = C · U² / 2 = q · U / 2",
            example:
              "Sig‘imi C = 20 mkF (20·10⁻⁶ F) bo‘lgan kondensator U = 100 V kuchlanishgacha zaryadlanganda to‘plangan energiya: W = 20·10⁻⁶ · 100² / 2 = 0.1 J.",
            keyTakeaways: [
              "Kondensatorlar parallel ulanganda sig‘imlar qo‘shiladi: C = C₁ + C₂.",
              "Ketma-ket ulanganda 1/C = 1/C₁ + 1/C₂ formula ishlatiladi.",
            ],
          },
        ],
      },
      {
        id: "fiz-14",
        title: "Nisbiylik nazariyasi va lazer fizikasi asoslari",
        grade: "11-sinf",
        duration: "40 daqiqa",
        level: "Chuqurlashtirilgan",
        summary:
          "Eynshteyn maxsus nisbiylik nazariyasi postulatlari, vaqt va uzunlik nisbiyligi, lazerlarning ishlash prinsipi va qo‘llanilishi.",
        sections: [
          {
            heading: "Maxsus nisbiylik nazariyasi",
            content:
              "Eynshteynning ikki postulati: 1) Barcha inersial sanoq tizimlarida tabiat qonunlari bir xildir; 2) Vakuumdagi yorug‘lik tezligi c barcha sanoq tizimlarida o‘zgarmas (3·10⁸ m/s) va tabiatdagi eng katta tezlikdir.",
            formulaOrRule: "τ = τ₀ / √(1 − v²/c²);    l = l₀ · √(1 − v²/c²)",
            example:
              "Juda katta (yorug‘lik tezligiga yaqin) tezlikda harakatlanayotgan kosmik kemada vaqt Yerda turgan kuzatuvchiga nisbatan sekinroq o‘tadi.",
            keyTakeaways: [
              "Hech qanday moddiy zarracha vakuumdagi yorug‘lik tezligi c dan tez harakatlana olmaydi.",
              "Tinchlikdagi energiya E₀ = mc² bilan aniqlanadi.",
            ],
          },
          {
            heading: "Lazer nurlanishi va xossalari",
            content:
              "Lazer — atomlarning majburiy nurlanishi asosida monoxromatik (bir rangli), kogerent va o‘ta ingichka yo‘nalgan yorug‘lik oqimini hosil qiluvchi kvant generatoridir.",
            formulaOrRule: "LASER = Light Amplification by Stimulated Emission of Radiation",
            example:
              "Lazerlar optik tolali internet aloqasida, ko‘z jarrohligida, metall kesishda va uzoq masofalarni (masalan, Oyga masofani) o‘lchashda qo‘llaniladi.",
            keyTakeaways: [
              "Lazer nuri juda kichik yuzaga ulkan energiya zichligini to‘play oladi.",
              "O‘zbekistonda Fanlar akademiyasining Fizika-texnika institutida quyosh energiyasi va lazer texnologiyalari tadqiq etiladi.",
            ],
          },
        ],
      },
    ],
    references: [
      {
        id: "fref-1",
        title: "Nyutonning II qonuni",
        expression: "F = m · a",
        explanation: "Jismga ta’sir etuvchi natijaviy kuch massa va tezlanish ko‘paytmasiga teng.",
        usage: "Dinamikaning barcha harakat masalalarida.",
      },
      {
        id: "fref-2",
        title: "To‘liq mexanik energiya",
        expression: "E = mv²/2 + mgh = const",
        explanation:
          "Konservativ kuchlar tizimida kinetik va potensial energiya yig‘indisi saqlanadi.",
        usage: "Balandlikdan tushish va mayatnik harakatlarida.",
      },
      {
        id: "fref-3",
        title: "Impuls saqlanish qonuni",
        expression: "m₁v₁ + m₂v₂ = m₁v₁' + m₂v₂'",
        explanation: "Yopiq tizim jismlarining umumiy impulsi to‘qnashuvda o‘zgarmaydi.",
        usage: "Elastik va noelastik to‘qnashuvlar, reaktiv harakatda.",
      },
      {
        id: "fref-4",
        title: "Arximed kuchi",
        expression: "Fₐ = ρ(suyuqlik) · g · V(botgan)",
        explanation: "Suyuqlik yoki gazga botirilgan jismga ta’sir etuvchi itaruvchi kuch.",
        usage: "Jismlarning suzish shartlarini aniqlashda.",
      },
      {
        id: "fref-5",
        title: "Ideal gaz holat tenglamasi",
        expression: "P · V = ν · R · T",
        explanation: "Gaz bosimi, hajmi va mutlaq harorati orasidagi bog‘lanish.",
        usage: "Izojarayonlar va gaz qonunlarida.",
      },
      {
        id: "fref-6",
        title: "Termodinamikaning I qonuni",
        expression: "Q = ΔU + A",
        explanation: "Tizimga berilgan issiqlik ichki energiya o‘zgarishi va ishga sarflanadi.",
        usage: "Issiqlik dvigatellari va gaz kengayishida.",
      },
      {
        id: "fref-7",
        title: "Om qonuni",
        expression: "I = U / R   yoki   I = ε / (R + r)",
        explanation: "Zanjir qismi va to‘liq zanjir uchun tok kuchi formulasi.",
        usage: "Elektrotexnika va elektr zanjirlarini hisoblashda.",
      },
      {
        id: "fref-8",
        title: "Joul-Lens qonuni",
        expression: "Q = I² · R · t",
        explanation: "Tokli o‘tkazgichda ajraladigan issiqlik miqdori.",
        usage: "Isitish asboblari va qisqa tutashuv tahlilida.",
      },
      {
        id: "fref-9",
        title: "Yupqa linza formulasi",
        expression: "1 / F = 1 / d + 1 / f",
        explanation: "Fokus masofasi, buyum va tasvirgacha bo‘lgan masofalar bog‘lanishi.",
        usage: "Ko‘zoynak, lupa va fotoapparat optikasida.",
      },
      {
        id: "fref-10",
        title: "Eynshteyn fotoeffekt tenglamasi",
        expression: "hν = A(chiqish) + mv²/2",
        explanation:
          "Foton energiyasi elektronni chiqarish va unga kinetik energiya berishga ketadi.",
        usage: "Quyosh batareyalari va kvant fizikasida.",
      },
      {
        id: "fref-11",
        title: "Matematik mayatnik davri",
        expression: "T = 2π√(l / g)",
        explanation: "Ip uzunligi l bo‘lgan mayatnikning bitta to‘liq tebranish vaqti.",
        usage: "Tebranishlar va g ni aniqlash laboratoriyalarida.",
      },
      {
        id: "fref-12",
        title: "To‘lqin tezligi tenglamasi",
        expression: "v = λ · ν = λ / T",
        explanation: "To‘lqinning tarqalish tezligi, uzunligi va chastotasi orasidagi bog‘lanish.",
        usage: "Akustika va radioto‘lqinlar fizikasida.",
      },
      {
        id: "fref-13",
        title: "Amper va Lorens kuchlari",
        expression: "Fₐ = I·B·l·sinα;   F_L = |q|·v·B·sinα",
        explanation: "Magnit maydonining tokli o‘tkazgich va harakatdagi zaryadga ta’siri.",
        usage: "Elektrodvigatellar va zarracha tezlatkichlarda.",
      },
      {
        id: "fref-14",
        title: "Faradey induksiya qonuni",
        expression: "εᵢ = − ΔΦ / Δt",
        explanation: "Magnit oqimi o‘zgarish tezligiga teng bo‘lgan induksiya EYuK.",
        usage: "Generator va transformator ishlashida.",
      },
      {
        id: "fref-15",
        title: "Eynshteyn massa-energiya bog‘lanishi",
        expression: "E = m · c²;   ΔE = Δm · c²",
        explanation: "Jism massasi bilan uning to‘liq energiyasi orasidagi fundamental nisbat.",
        usage: "Yadro energetikasi va nisbiylik nazariyasida.",
      },
      {
        id: "fref-16",
        title: "Gidrostatik bosim va Paskal pressi",
        expression: "P = ρ·g·h;   F₂ / F₁ = S₂ / S₁",
        explanation: "Suyuqlik ustuni bosimi va gidravlik mashinada kuchdan yutish nisbati.",
        usage: "Suv omborlari, sho‘ng‘ish va gidravlik qurilmalarda.",
      },
      {
        id: "fref-17",
        title: "Butun olam tortishish qonuni",
        expression: "F = G · (m₁ · m₂) / r²   (G = 6.67·10⁻¹¹)",
        explanation: "Massaga ega bo‘lgan ikki jism orasidagi gravitatsion tortishish kuchi.",
        usage: "Astronomiya va kosmik parvozlar hisobida.",
      },
      {
        id: "fref-18",
        title: "Markazga intilma tezlanish",
        expression: "a = v² / R = ω² · R",
        explanation: "Aylana bo‘ylab harakatda tezlik yo‘nalishining o‘zgarishini belgilaydi.",
        usage: "Burilishlar, sentrifuga va orbital harakatlarda.",
      },
      {
        id: "fref-19",
        title: "Kulon qonuni",
        expression: "F = k · |q₁ · q₂| / r²   (k = 9·10⁹ N·m²/Kl²)",
        explanation: "Qo‘zg‘almas ikki nuqtaviy zaryadning o‘zaro elektrostatik ta’sir kuchi.",
        usage: "Elektrostatika masalalarini yechishda.",
      },
      {
        id: "fref-20",
        title: "Kondensator energiyasi",
        expression: "W = C · U² / 2 = q² / (2C)",
        explanation:
          "Zaryadlangan kondensator plastinkalari orasida to‘plangan elektr maydon energiyasi.",
        usage: "Elektron sxemalar va impuls qurilmalarda.",
      },
    ],
    exercises: [
      {
        id: "fex-1",
        title: "Erkin tushish vaqti",
        level: "Asosiy",
        question:
          "Jism 45 metr balandlikdan boshlang‘ich tezliksiz erkin tushsa, yerga necha sekundda yetadi? (g = 10 m/s²)",
        hint: "h = gt² / 2 formulasidan t = √(2h / g) ni toping.",
        solution: "t = √(2 · 45 / 10) = √9 = 3 sekund.",
      },
      {
        id: "fex-2",
        title: "Parallel qarshilik va tok",
        level: "O‘rta",
        question:
          "Har biri 10 Om bo‘lgan ikkita lampa 20 V kuchlanish manbaiga parallel ulandi. Umumiy tok kuchini toping.",
        hint: "Avval umumiy qarshilik R = 10 / 2 = 5 Om ni hisoblang, so‘ng I = U / R.",
        solution: "R(umumiy) = 5 Om. I = 20 / 5 = 4 Amper.",
      },
      {
        id: "fex-3",
        title: "Arximed kuchi hisobi",
        level: "Asosiy",
        question:
          "Hajmi 0.02 m³ bo‘lgan temir bo‘lagi suvga (ρ = 1000 kg/m³) to‘liq botirilganda unga qancha itaruvchi kuch ta’sir etadi? (g = 10 m/s²)",
        hint: "Fₐ = ρ · g · V.",
        solution: "Fₐ = 1000 · 10 · 0.02 = 200 N.",
      },
      {
        id: "fex-4",
        title: "Gidroelektrostansiya quvvati",
        level: "Chuqurlashtirilgan",
        question:
          "Har sekundda 500 kg suv 10 metr balandlikdan tushmoqda. Suv oqimining quvvati necha kilovatt? (g = 10 m/s²)",
        hint: "1 sekundda bajarilgan ish P = A / t = mgh / t.",
        solution: "P = (500 · 10 · 10) / 1 = 50 000 W = 50 kW.",
      },
      {
        id: "fex-5",
        title: "Transformator chulg‘amlari hisobi",
        level: "O‘rta",
        question:
          "Transformator birlamchi chulg‘amida 800 ta, ikkilamchisida 200 ta o‘ram bor. Agar birlamchiga 220 V kuchlanish berilsa, ikkilamchidan necha Volt olinadi?",
        hint: "U₁ / U₂ = N₁ / N₂ nisbatdan foydalaning.",
        solution: "U₂ = U₁ · (N₂ / N₁) = 220 · (200 / 800) = 220 / 4 = 55 V.",
      },
      {
        id: "fex-6",
        title: "Radioaktiv yarim yemirilish",
        level: "Chuqurlashtirilgan",
        question:
          "Boshlang‘ich massasi 64 g bo‘lgan radioaktiv moddaning yarim yemirilish davri 5 soat. 15 soatdan keyin bu moddadan necha gramm qoladi?",
        hint: "Nechta yarim yemirilish davri o‘tganini toping: n = t / T½ = 15 / 5 = 3.",
        solution: "m = m₀ / 2ⁿ = 64 / 2³ = 64 / 8 = 8 gramm qoladi.",
      },
      {
        id: "fex-7",
        title: "Gidravlik pressda kuch hisobi",
        level: "Asosiy",
        question:
          "Gidravlik press kichik porshenining yuzi 4 sm², katta porshenining yuzi 120 sm². Kichik porshenga 50 N kuch bilan bosilsa, katta porshen qancha kuchni ko‘tara oladi?",
        hint: "F₂ / F₁ = S₂ / S₁ nisbatdan F₂ ni toping.",
        solution: "F₂ = 50 · (120 / 4) = 50 · 30 = 1500 N.",
      },
      {
        id: "fex-8",
        title: "Markazga intilma tezlanish",
        level: "O‘rta",
        question:
          "Velosipedchi radiusi 25 m bo‘lgan aylana shaklidagi trekda 10 m/s o‘zgarmas tezlik bilan harakatlanmoqda. Uning markazga intilma tezlanishini toping.",
        hint: "a = v² / R.",
        solution: "a = 10² / 25 = 100 / 25 = 4 m/s².",
      },
      {
        id: "fex-9",
        title: "Kondensator energiyasi",
        level: "O‘rta",
        question:
          "Elektr sig‘imi 40 mkF bo‘lgan kondensator 50 V kuchlanishga ulansa, unda necha milijoul energiya to‘planadi?",
        hint: "W = C · U² / 2. 40 mkF = 40 · 10⁻⁶ F.",
        solution: "W = (40·10⁻⁶ · 50²) / 2 = 20·10⁻⁶ · 2500 = 0.05 J = 50 mJ.",
      },
      {
        id: "fex-10",
        title: "Issiqlik miqdori va solishtirma issiqlik sig‘imi",
        level: "Asosiy",
        question:
          "2 kg suvni (c = 4200 J/(kg·°C)) 20°C dan 70°C gacha isitish uchun qancha issiqlik miqdori kerak?",
        hint: "Q = c · m · (t₂ − t₁).",
        solution: "Q = 4200 · 2 · (70 − 20) = 4200 · 100 = 420 000 J = 420 kJ.",
      },
    ],
    quizzes: [
      {
        id: "fq-1",
        question: "SI tizimida kuchning o‘lchov birligi nima?",
        options: ["Joul", "Nyuton", "Paskal", "Vatt"],
        answer: 1,
        explanation:
          "Kuch Nyuton (N) da, ish/energiya Joul (J) da, bosim Paskal (Pa) da o‘lchanadi.",
      },
      {
        id: "fq-2",
        question: "72 km/soat tezlik m/s da qanchaga teng?",
        options: ["10 m/s", "15 m/s", "20 m/s", "36 m/s"],
        answer: 2,
        explanation: "km/soat ni m/s ga o‘tkazish uchun 3.6 ga bo‘linadi: 72 / 3.6 = 20 m/s.",
      },
      {
        id: "fq-3",
        question: "Elektr qarshiligi qaysi asbob bilan emas, qaysi birlikda o‘lchanadi?",
        options: ["Amper", "Volt", "Om", "Kulon"],
        answer: 2,
        explanation: "Elektr qarshiligining birligi — Om (Ω).",
      },
      {
        id: "fq-4",
        question: "Massasi 3 kg jism 4 m/s tezlik bilan harakatlansa, kinetik energiyasi qancha?",
        options: ["12 J", "24 J", "48 J", "6 J"],
        answer: 1,
        explanation: "Eₖ = mv²/2 = 3 · 4² / 2 = 48 / 2 = 24 J.",
      },
      {
        id: "fq-5",
        question: "Ampermetr elektr zanjiriga qanday ulanadi?",
        options: ["Ketma-ket", "Parallel", "Faqat erga", "Aralash"],
        answer: 0,
        explanation: "Tok kuchini o‘lchash uchun ampermetr iste’molchi bilan ketma-ket ulanadi.",
      },
      {
        id: "fq-6",
        question: "27°C harorat Kelvin shkalasida nechaga teng?",
        options: ["246 K", "273 K", "300 K", "327 K"],
        answer: 2,
        explanation: "T = t + 273 = 27 + 273 = 300 K.",
      },
      {
        id: "fq-7",
        question: "Optik kuchi +4 dptr bo‘lgan linzaning fokus masofasi qancha?",
        options: ["0.25 m", "0.5 m", "4 m", "2.5 m"],
        answer: 0,
        explanation: "F = 1 / D = 1 / 4 = 0.25 m (25 sm).",
      },
      {
        id: "fq-8",
        question: "Yorug‘likning vakuumdagi tezligi taxminan qancha?",
        options: ["300 m/s", "3·10⁵ m/s", "3·10⁸ m/s", "3·10¹⁰ m/s"],
        answer: 2,
        explanation: "Yorug‘likning vakuumdagi tezligi c ≈ 3·10⁸ m/s (300 000 km/s).",
      },
      {
        id: "fq-9",
        question: "Tebranishlar chastotasi 5 Hz bo‘lsa, tebranish davri qanchaga teng?",
        options: ["0.2 s", "0.5 s", "2 s", "5 s"],
        answer: 0,
        explanation: "T = 1 / ν = 1 / 5 = 0.2 sekund.",
      },
      {
        id: "fq-10",
        question:
          "Prujina bikrligi k = 100 N/m bo‘lib, 0.04 m ga cho‘zildi. Elastiklik kuchi qancha?",
        options: ["0.4 N", "4 N", "40 N", "25 N"],
        answer: 1,
        explanation: "Guk qonuniga ko‘ra F = k · x = 100 · 0.04 = 4 N.",
      },
      {
        id: "fq-11",
        question: "Elektr zanjirida kuchlanish 220 V va tok kuchi 5 A bo‘lsa, quvvat nechaga teng?",
        options: ["44 W", "225 W", "1100 W", "440 W"],
        answer: 2,
        explanation: "P = U · I = 220 · 5 = 1100 W (1.1 kW).",
      },
      {
        id: "fq-12",
        question: "Radioaktiv α-zarracha tarkibi nimadan iborat?",
        options: [
          "Elektronlar oqimi",
          "Fotonlar oqimi",
          "Geliy yadrosi (2p + 2n)",
          "Yolg‘iz neytron",
        ],
        answer: 2,
        explanation: "α-zarracha ikki proton va ikki neytrondan tashkil topgan ₂⁴He yadrosidir.",
      },
      {
        id: "fq-13",
        question: "Normal atmosfera bosimi simob ustuni hisobida taxminan nechaga teng?",
        options: ["700 mm sim. ust.", "760 mm sim. ust.", "820 mm sim. ust.", "1000 mm sim. ust."],
        answer: 1,
        explanation: "Normal atmosfera bosimi 760 mm simob ustuni (yoki ~101.3 kPa) ga teng.",
      },
      {
        id: "fq-14",
        question:
          "Birinchi kosmik tezlik (Yer sun’iy yo‘ldoshiga aylanish tezligi) taxminan qancha?",
        options: ["3.2 km/s", "7.9 km/s", "11.2 km/s", "16.7 km/s"],
        answer: 1,
        explanation:
          "Yer yaqinida aylanish uchun v₁ ≈ 7.9 km/s, Yerdan uchib ketish uchun v₂ ≈ 11.2 km/s kerak.",
      },
      {
        id: "fq-15",
        question: "Kondensatorlar parallel ulanganda umumiy elektr sig‘imi qanday topiladi?",
        options: ["C = C₁ + C₂", "1/C = 1/C₁ + 1/C₂", "C = C₁ · C₂", "C = (C₁ − C₂)/2"],
        answer: 0,
        explanation:
          "Parallel ulanganda kondensatorlarning plastinka yuzalari qo‘shilgandek bo‘ladi: C = C₁ + C₂.",
      },
      {
        id: "fq-16",
        question: "Suyuqlik ustuni bosimi (P = ρgh) qaysi kattalikka bog‘liq EMAS?",
        options: [
          "Suyuqlik zichligiga",
          "Ustun balandligiga",
          "Idish tubining shakliga",
          "Erkin tushish tezlanishiga",
        ],
        answer: 2,
        explanation:
          "Gidrostatik bosim idishning shakli va suyuqlik hajmiga emas, faqat ρ, g va h ga bog‘liq.",
      },
    ],
    glossary: [
      {
        term: "Inersiya",
        definition:
          "Jismning tashqi kuch ta’sir etmaganda o‘z tinch yoki tekis harakat holatini saqlash xossasi.",
        example: "Avtobus keskin tormoz berganda yo‘lovchilar inersiya tufayli oldinga og‘adi.",
      },
      {
        term: "Tezlanish",
        definition:
          "Tezlikning vaqt birligi ichida o‘zgarish jadalligini ko‘rsatuvchi vektor kattalik.",
        example: "SI birligi m/s².",
      },
      {
        term: "Bosim",
        definition: "Yuzaga tik ta’sir etuvchi kuchning shu yuza maydoniga nisbati (P = F / S).",
        example: "Pichoq tig‘i ingichka bo‘lgani uchun kichik kuch bilan katta bosim hosil qiladi.",
      },
      {
        term: "Ichki energiya",
        definition:
          "Jismni tashkil etuvchi barcha zarrachalarning issiqlik harakati va o‘zaro ta’sir energiyalari yig‘indisi.",
        example: "Gaz qizdirilganda uning ichki energiyasi ortadi.",
      },
      {
        term: "Elektr toki",
        definition: "Zaryadlangan zarrachalarning tartibli va yo‘nalgan harakati.",
        example: "Metallarda elektr tokini erkin elektronlar hosil qiladi.",
      },
      {
        term: "Qarshilik",
        definition: "O‘tkazgichning elektr toki o‘tishiga ko‘rsatadigan to‘sqinligi (R = ρl / S).",
        example: "Mis sim qarshiligi nixrom simnikidan ancha kichik.",
      },
      {
        term: "Magnit induksiya",
        definition: "Magnit maydonining kuch xarakteristikasi, Tesla (T) da o‘lchanadi.",
        example: "Kompas ignasi Yerning magnit maydoni bo‘ylab yo‘naladi.",
      },
      {
        term: "Rezonans",
        definition:
          "Majburiy tebranishlar chastotasi tizimning xususiy chastotasiga tenglashganda amplitudaning keskin ortishi.",
        example: "Radio qabul qilgichni kerakli to‘lqinga sozlash elektr rezonansiga asoslangan.",
      },
      {
        term: "Dispersiya",
        definition:
          "Muhitning sindirish ko‘rsatkichi yorug‘lik to‘lqin uzunligiga bog‘liqligi tufayli oq nurning ranglarga ajralishi.",
        example: "Kamalak va shisha prizmada 7 xil rang spektrining hosil bo‘lishi.",
      },
      {
        term: "Foton",
        definition:
          "Elektromagnit nurlanishning (yorug‘likning) eng kichik bo‘linmas energiya kvanti.",
        example: "Fotonning tinchlikdagi massasi nolga teng.",
      },
      {
        term: "Transformator",
        definition:
          "Elektromagnit induksiya yordamida o‘zgaruvchan tok kuchlanishini o‘zgartirib beruvchi qurilma.",
        example:
          "Elektr uzatish liniyalarida energiya isrofini kamaytirish uchun kuchlanishni oshiradi.",
      },
      {
        term: "Radioaktivlik",
        definition:
          "Atom yadrolarining o‘z-o‘zidan nurlanish chiqarib boshqa element yadrosiga aylanishi.",
        example: "Uran va radiy elementlarining tabiiy yemirilishi.",
      },
      {
        term: "Interferensiya",
        definition:
          "Ikki kogerent to‘lqinning ustma-ust tushishi natijasida tebranishlarning kuchayishi yoki susayishi.",
        example: "Sovun pufagi va suv yuzasidagi yupqa moy pardasidagi kamalak ranglari.",
      },
      {
        term: "Kvant",
        definition:
          "Fizik kattalikning (masalan, energiyaning) qabul qilishi mumkin bo‘lgan eng kichik bo‘linmas porsiyasi.",
        example: "Elektromagnit maydon kvanti — foton.",
      },
      {
        term: "Ampermetr",
        definition: "Elektr zanjiridagi tok kuchini o‘lchash uchun ketma-ket ulanadigan asbob.",
        example: "Ideal ampermetrning ichki qarshiligi nolga yaqin bo‘ladi.",
      },
      {
        term: "Voltmetr",
        definition:
          "Zanjir qismidagi elektr kuchlanishini o‘lchash uchun parallel ulanadigan asbob.",
        example: "Ideal voltmetrning ichki qarshiligi juda katta bo‘ladi.",
      },
      {
        term: "Adiabatik jarayon",
        definition:
          "Tashqi muhit bilan issiqlik almashinuvisiz (Q = 0) sodir bo‘ladigan termodinamik jarayon.",
        example: "Dizel dvigatelida havoning tez siqilishi.",
      },
      {
        term: "Suyuqlikning sirt tarangligi",
        definition:
          "Suyuqlik sirtining o‘z maydonini iloji boricha kichraytirishga intilish xossasi.",
        example: "Suv tomchisining sharsimon shakl olishi va hasharotlarning suv yuzida yurishi.",
      },
      {
        term: "Diffuziya",
        definition:
          "Ikki modda molekulalarining issiqlik harakati natijasida o‘z-o‘zidan bir-biriga aralashishi.",
        example: "Atir hidining xona bo‘ylab tarqalishi yoki choyning suvda rang berishi.",
      },
      {
        term: "Elektromagnit to‘lqin",
        definition:
          "O‘zgaruvchan elektr va magnit maydonlarining fazoda yorug‘lik tezligida tarqalishi.",
        example: "Radioto‘lqinlar, rentgen nurlari va ko‘rinadigan yorug‘lik.",
      },
    ],
    flashcards: [
      {
        id: "ffc-1",
        front: "Nyutonning II qonuni formulasi?",
        back: "F = m · a (Kuch = massa × tezlanish)",
      },
      {
        id: "ffc-2",
        front: "Mexanik ish va Quvvat birliklari?",
        back: "Ish A — Joul (J); Quvvat P = A/t — Vatt (W)",
      },
      {
        id: "ffc-3",
        front: "Arximed (itaruvchi) kuchi formulasi?",
        back: "Fₐ = ρ(suyuqlik) · g · V(botgan)",
      },
      {
        id: "ffc-4",
        front: "Mendeleyev-Klapeyron (ideal gaz) tenglamasi?",
        back: "P · V = ν · R · T (R = 8.31 J/(mol·K))",
      },
      {
        id: "ffc-5",
        front: "Termodinamikaning I qonuni?",
        back: "Q = ΔU + A (berilgan issiqlik ichki energiyani oshiradi va ish bajaradi)",
      },
      {
        id: "ffc-6",
        front: "Zanjir qismi uchun Om qonuni?",
        back: "I = U / R (Tok kuchi kuchlanishga to‘g‘ri, qarshilikka teskari proporsional)",
      },
      {
        id: "ffc-7",
        front: "Joul-Lens qonuni?",
        back: "Q = I² · R · t (o‘tkazgichdan ajralgan issiqlik)",
      },
      {
        id: "ffc-8",
        front: "Yupqa linza formulasi va optik kuchi?",
        back: "1/F = 1/d + 1/f;  D = 1/F (dioptriya)",
      },
      {
        id: "ffc-9",
        front: "Matematik mayatnik davri T = ?",
        back: "T = 2π√(l / g) — ip uzunligiga bog‘liq, massaga emas",
      },
      {
        id: "ffc-10",
        front: "Yorug‘likning vakuumdagi tezligi c = ?",
        back: "c ≈ 3 · 10⁸ m/s (300 000 km/s)",
      },
      {
        id: "ffc-11",
        front: "Birinchi va ikkinchi kosmik tezliklar?",
        back: "v₁ ≈ 7.9 km/s (Yer atrofida aylanish); v₂ ≈ 11.2 km/s (Yerdan uchib ketish)",
      },
      { id: "ffc-12", front: "Gidrostatik bosim formulasi?", back: "P = ρ · g · h" },
      {
        id: "ffc-13",
        front: "Amper kuchi va Lorens kuchi?",
        back: "Fₐ = I·B·l·sinα;  F_L = |q|·v·B·sinα",
      },
      { id: "ffc-14", front: "Eynshteyn fotoeffekt tenglamasi?", back: "hν = A(chiqish) + mv²/2" },
    ],
  },

  biologiya: {
    id: "biologiya",
    title: "Biologiya",
    shortName: "Biologiya",
    category: "Tabiiy fanlar",
    grades: "5–11-sinflar",
    description:
      "Hujayra biologiyasi (sitologiya), botanika, zoologiya, odam anatomiyasi va fiziologiyasi, genetika hamda ekologiya asoslari.",
    motto:
      "Biologiya — hayotning sir-asrorlarini va tirik tabiat uyg‘unligini ochib beruvchi fandir.",
    referenceTabLabel: "Asosiy jarayonlar va qonunlar",
    outcomes: [
      "Prokariot va eukariot hujayra tuzilishini hamda organoidlar vazifasini bilish",
      "Fotosintez, hujayra nafas olishi va oqsil biosintezi bosqichlarini tushuntirish",
      "Odam qon aylanish, nafas olish, hazm va asab tizimlari faoliyatini tahlil qilish",
      "Mendel genetika qonunlari va irsiyat masalalarini yechish",
      "Ekotizimlar, oziq zanjirlari va biologik xilma-xillikni asrash tamoyillarini egallash",
    ],
    stats: {
      lessons: 14,
      references: 20,
      quizzes: 16,
      hours: "78 soat",
    },
    lessons: [
      {
        id: "bio-1",
        title: "Hujayra — hayotning asosiy tuzilish va funksional birligi",
        grade: "6 va 9-sinf",
        duration: "35 daqiqa",
        level: "Asosiy",
        summary:
          "O‘simlik va hayvon hujayralarining farqlari, yadro, mitoxondriya, ribosoma, xloroplast va membrana vazifalari.",
        sections: [
          {
            heading: "Hujayra organoidlari va ularning vazifasi",
            content:
              "Barcha tirik organizmlar (viruslardan tashqari) hujayradan tuzilgan. Eukariot hujayrada irsiy axborotni saqlovchi shakllangan yadro mavjud; bakteriyalar esa prokariot bo‘lib, DNK si sitoplazmada erkin joylashadi.",
            formulaOrRule:
              "Mitoxondriya → ATF (energiya);  Ribosoma → Oqsil sintezi;  Xloroplast → Fotosintez",
            example:
              "O‘simlik hujayrasida hayvon hujayrasidan farqli ravishda sellyuloza qobiq, plastidalar (xloroplast) va yirik markaziy vakuola bo‘ladi.",
            keyTakeaways: [
              "Golji majmuasi moddalarni saralaydi va hujayradan tashqariga chiqarishga tayyorlaydi.",
              "Lizosomalar hujayra ichidagi hazm va eski qismlarni parchalash uchun javobgar.",
            ],
          },
        ],
      },
      {
        id: "bio-2",
        title: "Fotosintez va energiya almashinuvi",
        grade: "6 va 10-sinf",
        duration: "40 daqiqa",
        level: "O‘rta",
        summary:
          "Yorug‘lik va qorong‘ulik fazalari, xlorofill roli, nafas olish bilan farqi hamda ATF hosil bo‘lishi.",
        sections: [
          {
            heading: "Fotosintez tenglamasi va ahamiyati",
            content:
              "Yashil o‘simliklar quyosh nuri energiyasi yordamida karbonat angidrid va suvdan organik modda (glyukoza) sintezlab, atmosferaga erkin kislorod ajratib chiqaradi. Nafas olish esa buning aksi bo‘lib, glyukoza kislorod ishtirokida parchalanib 38 molekula ATF energiyasi hosil qiladi.",
            formulaOrRule: "6CO₂ + 6H₂O  —(yorug‘lik, xlorofill)→  C₆H₁₂O₆ + 6O₂↑",
            example:
              "Fotosintezning yorug‘lik bosqichida xloroplast tilakoidlarida suv fotolizi ro‘y berib O₂ chiqadi; qorong‘ulik bosqichida esa stromada CO₂ dan glyukoza yig‘iladi.",
            keyTakeaways: [
              "Fotosintez faqat yorug‘likda va xloroplastlarda kechadi.",
              "Hujayra nafas olishi barcha tirik hujayralarda kecha-yu kunduz to‘xtovsiz davom etadi.",
            ],
          },
        ],
      },
      {
        id: "bio-3",
        title: "O‘simlik va hayvonot dunyosi xilma-xilligi",
        grade: "6–7-sinf",
        duration: "35 daqiqa",
        level: "Asosiy",
        summary:
          "Tuban va yuksak o‘simliklar, gulli o‘simliklarning ko‘payishi hamda umurtqasiz va umurtqali hayvonlar sinflari.",
        sections: [
          {
            heading: "O‘simlik to‘qimalari va gulli o‘simliklarda qo‘sh urug‘lanish",
            content:
              "O‘simliklarda ksilema ildizdan barglarga suv va mineral tuzlarni, floema esa barglarda hosil bo‘lgan organik moddalarni barcha a’zolarga tashiydi. Yopiq urug‘li (gulli) o‘simliklarda Navashin kashf etgan qo‘sh urug‘lanish xosdir.",
            formulaOrRule:
              "1-spermiy + tuxum hujayra → zigota (2n);   2-spermiy + markaziy hujayra → endosperm (3n)",
            example:
              "Bug‘doy, olma va paxta gulli o‘simliklardir; qarag‘ay va archa esa ochiq urug‘li o‘simliklar guruhiga kiradi (ularning mevasi bo‘lmaydi).",
            keyTakeaways: [
              "Qon aylanish tizimi: baliqlarda 2 kamerali yurak, qushlar va sutemizuvchilarda 4 kamerali yurak.",
              "Barcha sutemizuvchilarga diafragma va bolalarini sut bilan boqish xos.",
            ],
          },
        ],
      },
      {
        id: "bio-4",
        title: "Odam anatomiyasi: Qon aylanish, nafas olish va asab tizimi",
        grade: "8-sinf",
        duration: "45 daqiqa",
        level: "O‘rta",
        summary:
          "Yurak tuzilishi, katta va kichik qon aylanish doiralari, qon tarkibi, o‘pka alveolalari va refleks yoyi.",
        sections: [
          {
            heading: "Katta va kichik qon aylanish doiralari",
            content:
              "Odam yuragi 4 kamerali: ikki bo‘lmacha va ikki qorinchadan iborat. Katta qon aylanish doirasi chap qorinchadan aorta bilan boshlanib, barcha a’zolarga kislorod eltadi va o‘ng bo‘lmachada tugaydi. Kichik doira o‘ng qorinchadan boshlanib, o‘pkada qonni kislorodga boyitadi va chap bo‘lmachaga qaytadi.",
            formulaOrRule:
              "Eritrotsit → O₂ tashish (gemoglobin);  Leykotsit → Immunitet;  Trombotsit → Qon ivishi",
            example:
              "Sog‘lom katta odamda yurak tinch holatda minutiga 60–80 marta uradi, qon pH ko‘rsatkichi qat’iy 7.35–7.45 atrofida saqlanadi.",
            keyTakeaways: [
              "Arteriyalar qonni yurakdan olib ketadi, venalar esa yurakka olib keladi.",
              "Markaziy asab tizimi bosh miya va orqa miyadan tashkil topgan.",
            ],
          },
        ],
      },
      {
        id: "bio-5",
        title: "DNK, RNK, oqsil biosintezi va Mendel qonunlari",
        grade: "9–10-sinf",
        duration: "45 daqiqa",
        level: "Chuqurlashtirilgan",
        summary:
          "Komplementarlik tamoyili, transkripsiya va translyatsiya, genotip/fenotip va irsiyat masalalari.",
        sections: [
          {
            heading: "Nuklein kislotalar va genetik kod",
            content:
              "DNK qo‘sh spiral bo‘lib, unda adenin (A) doimo timin (T) bilan, guanin (G) esa sitozin (S) bilan bog‘lanadi (Chargaff qoidasi). iRNK da timin o‘rnida uratsil (U) bo‘ladi. Har uchta nukleotid (kodon) bitta aminokislotani kodlaydi.",
            formulaOrRule:
              "DNK: A=T, G≡S;    iRNK: A↔U;    Oqsil sintezi: DNK →(transkripsiya)→ iRNK →(translyatsiya)→ Oqsil",
            example:
              "Agar DNK zanjiri A-T-G-S-S-A bo‘lsa, unga komplementar ikkinchi DNK zanjiri T-A-S-G-G-T, iRNK zanjiri esa U-A-S-G-G-U bo‘ladi. Monoduragay chatishtirishda Aa × Aa dan F₂ da fenotip bo‘yicha 3:1 nisbat olinadi.",
            keyTakeaways: [
              "Mendelning I qonuni — bir xillik, II qonuni — ajralish (3:1), III qonuni — mustaqil taqsimlanish.",
              "Mitoz natijasida 2 ta bir xil diploid (2n), meyozda esa 4 ta gaploid (n) jinsiy hujayra hosil bo‘ladi.",
            ],
          },
        ],
      },
      {
        id: "bio-6",
        title: "Ekologiya va biosfera barqarorligi",
        grade: "11-sinf",
        duration: "35 daqiqa",
        level: "Asosiy",
        summary:
          "Ekologik omillar, produtsentlar, konsumentlar va redutsentlar, ekologik piramida qoidasi va Qizil kitob.",
        sections: [
          {
            heading: "Oziq zanjiri va 10% qoidasi",
            content:
              "Ekotizimda yashil o‘simliklar organik modda yaratuvchi produtsentlar, hayvonlar tayyor moddani iste’mol qiluvchi konsumentlar, bakteriya va zamburug‘lar esa qoldiqlarni minerallashtiruvchi redutsentlardir.",
            formulaOrRule:
              "Lindeman 10% qoidasi: Keyingi trofik darajaga energiyaning ~10% i o‘tadi",
            example:
              "O‘t (1000 kg) → Chigirtka (100 kg) → Baqa (10 kg) → Ilon (1 kg). Shuning uchun yirik yirtqichlar soni doimo o‘txo‘rlardan kam bo‘ladi.",
            keyTakeaways: [
              "Abiotik (harorat, yorug‘lik, namlik), biotik va antropogen omillar farqlanadi.",
              "Orol dengizi muammosi va biologik xilma-xillikni saqlash O‘zbekiston ekologiyasining dolzarb vazifasidir.",
            ],
          },
        ],
      },
      {
        id: "bio-7",
        title: "Ovqat hazm qilish, ayirish tizimi va vitaminlar",
        grade: "8-sinf",
        duration: "40 daqiqa",
        level: "Asosiy",
        summary:
          "Hazm kanali a’zolari va fermentlar, jigar vazifasi, buyrak nefroni hamda asosiy vitaminlarning ahamiyati.",
        sections: [
          {
            heading: "Hazm jarayoni va fermentlar",
            content:
              "Og‘iz bo‘shlig‘ida amilaza kraxmalni parchalaydi. Oshqozonda xlorid kislota (HCl) muhitida pepsin fermenti oqsillarni parchalaydi. Ingichka ichakda oshqozon osti bezi fermentlari va o‘t suyuqligi ta’sirida barcha oziq moddalar so‘riladigan holga keladi.",
            formulaOrRule:
              "Oqsillar → Aminokislotalar;   Yog‘lar → Glitserin + Yog‘ kislotalari;   Uglevodlar → Glyukoza",
            example:
              "Jigar ishlab chiqargan o‘t suyuqligi tarkibida ferment bo‘lmasa ham, u yog‘larni mayda tomchilarga emulgatsiyalab hazmni tezlashtiradi.",
            keyTakeaways: [
              "Oziq moddalar qonga va limfaga asosan ingichka ichak vorsinkalari orqali so‘riladi.",
              "Odamda 32 ta tish bo‘lib, emal tana eng qattiq to‘qimasi hisoblanadi.",
            ],
          },
          {
            heading: "Buyraklar va vitaminlar ahamiyati",
            content:
              "Ayirish tizimining asosiy a’zosi buyraklar bo‘lib, uning tuzilish birligi nefron deb ataladi. Vitaminlar moddalar almashinuvida fermentlar tarkibiga kiruvchi hayotiy zarur moddalardir.",
            formulaOrRule:
              "Sutkada ~150–180 L birlamchi siydik → reabsorbsiya → ~1.5 L ikkilamchi siydik",
            example:
              "Vitamin C (askorbin kislota) yetishmasa singa, Vitamin D yetishmasa bolalarda raxit, Vitamin A yetishmasa shabko‘rlik kasalligi rivojlanadi.",
            keyTakeaways: [
              "Suvda eriydigan vitaminlar: C va B guruhi; yog‘da eriydiganlar: A, D, E, K.",
              "Ter bezlari va o‘pkalar ham modda almashinuvi qoldiqlarini chiqarishda qatnashadi.",
            ],
          },
        ],
      },
      {
        id: "bio-8",
        title: "Endokrin tizim va gumoral boshqaruv",
        grade: "8–9-sinf",
        duration: "35 daqiqa",
        level: "O‘rta",
        summary:
          "Ichki sekretsiya bezlari (gipofiz, qalqonsimon bez, buyrak usti bezlari, oshqozon osti bezi) va gormonlar vazifasi.",
        sections: [
          {
            heading: "Gipofiz va qalqonsimon bez gormonlari",
            content:
              "Ichki sekretsiya bezlarining chiqarish yo‘llari bo‘lmaydi; ular ishlab chiqargan biologik faol moddalar — gormonlar to‘g‘ridan-to‘g‘ri qonga quyiladi. Gipofiz «bosh bez» sifatida boshqa bezlarni boshqaradi va o‘sish gormonini ishlab chiqaradi.",
            formulaOrRule: "Qalqonsimon bez (Tiroksin, yod saqlaydi) → Modda almashinuvi tezligi",
            example:
              "Oziq-ovqat va suvda yod yetishmaganda qalqonsimon bez kattalashib endemik buqoq kasalligi yuzaga keladi, shuning uchun yodlangan tuz iste’mol qilinadi.",
            keyTakeaways: [
              "Bolalikda o‘sish gormoni ko‘p ishlab chiqarilsa gigantizm, kam bo‘lsa pakanalik kuzatiladi.",
              "Asab tizimi tez va aniq, endokrin tizim esa sekinroq, ammo uzoqroq ta’sir ko‘rsatadi.",
            ],
          },
          {
            heading: "Insulin, glyukagon va adrenalin",
            content:
              "Oshqozon osti bezi aralash bez bo‘lib, gormoni — insulin qondagi ortiqcha glyukozani jigarda glikogenga aylantirib shakarni pasaytiradi. Buyrak usti bezidan ajraladigan adrenalin esa stress vaqtida yurak urishini tezlashtiradi.",
            formulaOrRule: "Insulin: qondagi qand ↓;    Glyukagon va Adrenalin: qondagi qand ↑",
            example:
              "Insulin yetishmasligi yoki hujayralarning unga sezgirligi pasayishi qandli diabet kasalligiga olib keladi.",
            keyTakeaways: [
              "Aralash sekretsiya bezlariga oshqozon osti bezi va jinsiy bezlar kiradi.",
              "Gormonlar nihoyatda kam konsentratsiyada ham kuchli fiziologik ta’sir ko‘rsatadi.",
            ],
          },
        ],
      },
      {
        id: "bio-9",
        title: "Evolyutsiya ta’limoti va antropogenez",
        grade: "10–11-sinf",
        duration: "40 daqiqa",
        level: "O‘rta",
        summary:
          "Ch. Darvin ta’limoti, yashash uchun kurash, tabiiy tanlanish turlari va odam evolutsiyasining asosiy bosqichlari.",
        sections: [
          {
            heading: "Evolyutsiyaning harakatlantiruvchi kuchlari",
            content:
              "Tirik tabiat tarixiy taraqqiyotining asosiy omillari: irsiy o‘zgaruvchanlik (mutatsiyalar), yashash uchun kurash va tabiiy tanlanishdir. Tabiiy tanlanish harakatlantiruvchi, stabillashtiruvchi va dizruptiv shakllarda kechadi.",
            formulaOrRule:
              "Mutatsion o‘zgaruvchanlik + Yashash uchun kurash → Tabiiy tanlanish → Moslanish",
            example:
              "Sanoat shaharlarida daraxt po‘stlog‘i qoraygach, qora tusli kapalaklar qushlardan yaxshiroq yashirinib ko‘paygan — bu harakatlantiruvchi tanlanishga yaqqol misoldir.",
            keyTakeaways: [
              "Yashash uchun kurashning uch xili bor: tur ichida, turlararo va noqulay muhitga qarshi.",
              "O‘xshash tuzilishga ega, ammo vazifasi har xil a’zolar gomologik a’zolar (masalan, qush qanoti va odam qo‘li) deyiladi.",
            ],
          },
          {
            heading: "Tur hosil bo‘lishi va antropogenez",
            content:
              "Yangi turlar geografik (hududiy ajralish) yoki ekologik izolyatsiya natijasida shakllanadi. Odam evolyutsiyasida tik yurish, qo‘l kaftining mehnatga moslashishi, miya hajmining ortishi va nutq rivojlanishi hal qiluvchi rol o‘ynagan.",
            formulaOrRule:
              "Avstralopitek → Homo habilis → Homo erectus → Neandertal → Homo sapiens",
            example:
              "O‘zbekiston hududidagi Teshiktosh g‘oridan topilgan neandertal bola qoldiqlari Markaziy Osiyo qadimgi odamlar makoni bo‘lganini tasdiqlaydi.",
            keyTakeaways: [
              "Barcha zamonaviy insonlar yagona biologik tur — Homo sapiens ga mansub.",
              "Antropogenezda biologik omillar bilan birga ijtimoiy omillar (mehnat, til, jamiyat) muhim o‘rin tutadi.",
            ],
          },
        ],
      },
      {
        id: "bio-10",
        title: "Mikrobiologiya, viruslar va biotexnologiya",
        grade: "10–11-sinf",
        duration: "40 daqiqa",
        level: "Chuqurlashtirilgan",
        summary:
          "Viruslarning tuzilishi, bakteriyalar ahamiyati, gen muhandisligi, klonlash va zamonaviy tibbiyot biotexnologiyasi.",
        sections: [
          {
            heading: "Viruslar — hujayrasiz hayot shakllari",
            content:
              "Viruslar mustaqil modda almashinuvi va oqsil sinteziga ega emas; ular faqat tirik hujayra ichiga kirgandagina ko‘paya oladigan hujayra ichi parazitlaridir. Virus kapsid (oqsil qobiq) va DNK yoki RNK dan iborat.",
            formulaOrRule: "Virus = Nuklein kislota (DNK yoki RNK) + Kapsid (oqsil qobiq)",
            example:
              "Bakteriofaglar — bakteriyalarni zararlovchi viruslar bo‘lib, antibiotiklarga chidamli infeksiyalarni davolashda istiqbolli vosita hisoblanadi.",
            keyTakeaways: [
              "Antibiotiklar bakteriyalarga ta’sir qiladi, ammo viruslarga ta’sir etmaydi.",
              "Vaksinalar organizmda kuchsizlantirilgan qo‘zg‘atuvchiga qarshi antitelo hosil qiladi.",
            ],
          },
          {
            heading: "Gen muhandisligi va biotexnologiya",
            content:
              "Gen muhandisligi bir organizmning foydali genini ajratib olib, boshqa organizm (masalan, bakteriya) hujayrasiga ko‘chirish orqali qimmatli moddalar olish imkonini beradi.",
            formulaOrRule:
              "Odam insulin geni + Bakteriya plazmidi → Rekombinant DNK → Toza insulin sintezi",
            example:
              "Hozirgi kunda qandli diabet bemorlari uchun insulinning asosiy qismi gen muhandisligi yo‘li bilan ichak tayoqchasi bakteriyalaridan olinadi.",
            keyTakeaways: [
              "PCR (Polimeraza zanjir reaksiyasi) DNK bo‘lagini millionlab nusxada ko‘paytirish usulidir.",
              "O‘zbekistonda Genomika va bioinformatika markazida «Porloq» paxta navlari yaratilgan.",
            ],
          },
        ],
      },
      {
        id: "bio-11",
        title: "O‘simliklar dunyosi: vegetativ va generativ organlar",
        grade: "5–6-sinf",
        duration: "35 daqiqa",
        level: "Asosiy",
        summary:
          "Ildiz, poya va barg tuzilishi, gul va meva hosil bo‘lishi, gulli o‘simliklarda qo‘sh urug‘lanish va o‘simliklar tasnifi.",
        sections: [
          {
            heading: "Vegetativ organlar: ildiz, poya va barg",
            content:
              "O‘simlikning oziqlanishi, suv shimishi va o‘sishini ta’minlovchi a’zolar vegetativ organlardir. Ildiz tuproqdan suv va mineral tuzlarni so‘radi, poyadagi ksilema (yog‘ochlik) naylari suvni yuqoriga, floema (lub) esa bargda hosil bo‘lgan organik moddalarni pastga tashiydi.",
            formulaOrRule: "Ksilema (suv + mineral, ↑);    Floema (organik moddalar, ↓)",
            example:
              "Ikki pallali o‘simliklarda (olma, g‘o‘za) o‘q ildiz tizimi, bir pallalilarda (bug‘doy, piyoz) esa popuk ildiz tizimi bo‘ladi.",
            keyTakeaways: [
              "Barg ostidagi og‘izchalar gaz almashinuvi va suv bug‘lanishini (transpiratsiya) boshqaradi.",
              "Kambiy hujayralarining bo‘linishi hisobiga daraxt poyasi eniga o‘sadi va yillik halqalar hosil bo‘ladi.",
            ],
          },
          {
            heading: "Gul, changlanish va qo‘sh urug‘lanish",
            content:
              "Gul — gulli (yopiq urug‘li) o‘simliklarning ko‘payish organi. 1898-yilda S. G. Navashin gulli o‘simliklarda qo‘sh urug‘lanish hodisasini kashf etgan: bitta spermiy tuxum hujayrani (2n murtak), ikkinchisi esa markaziy hujayrani (3n endosperm) urug‘lantiradi.",
            formulaOrRule:
              "Spermiy (n) + Tuxum (n) → Murtak (2n);   Spermiy (n) + Markaziy (2n) → Endosperm (3n)",
            example:
              "Urug‘chi tugunchasidan meva, urug‘kurtakdan esa urug‘ rivojlanadi; hasharotlar bilan changlanadigan gullar yirik, rangli va nektarli bo‘ladi.",
            keyTakeaways: [
              "Yo‘sin, qirqquloq va ochiq urug‘lilar (archa, qarag‘ay) da gullar va mevalar bo‘lmaydi.",
              "O‘zbekiston florasi 4500 ga yaqin yovvoyi o‘simlik turlarini o‘z ichiga oladi.",
            ],
          },
        ],
      },
      {
        id: "bio-12",
        title: "Hayvonot olami: umurtqasizlar va umurtqalilar",
        grade: "7-sinf",
        duration: "40 daqiqa",
        level: "Asosiy",
        summary:
          "Bir hujayralilar, bo‘shliqichlilar, bo‘g‘imoyoqlilar hamda baliqlar, suvda ham quruqlikda yashovchilar, sudralib yuruvchilar, qushlar va sutemizuvchilar.",
        sections: [
          {
            heading: "Umurtqasiz hayvonlarning xilma-xilligi",
            content:
              "Hayvonlar turlarining 95% dan ortig‘ini umurtqasizlar tashkil qiladi. Bo‘g‘imoyoqlilar (qisqichbaqasimonlar, o‘rgimchaksimonlar va hasharotlar) xitin tashqi skeletiga va bo‘g‘imli oyoqlarga ega.",
            formulaOrRule:
              "Hasharotlar: 3 juft (6 ta) oyoq;   O‘rgimchaksimonlar: 4 juft (8 ta) oyoq",
            example:
              "Tut ipak qurti (Bombyx mori) to‘liq o‘zgarish bilan rivojlanadi: tuxum → qurt (lichinka) → g‘umbak → kapalak (imago).",
            keyTakeaways: [
              "Yomg‘ir chuvalchangi tuproqni yumshatib gumus qatlamini boyitadi.",
              "Asalari gulli o‘simliklarni changlatuvchi eng muhim foydali hasharotdir.",
            ],
          },
          {
            heading: "Umurtqali hayvonlarda yurak va qon aylanish evolutsiyasi",
            content:
              "Xordalilar orasida yurak kameralari va qon aylanish doiralari murakkablashib borgan: baliqlarda 2 kamerali yurak (1 doira), amfibiya va sudralib yuruvchilarda 3 kamerali, qushlar va sutemizuvchilarda esa to‘liq 4 kamerali yurak va issiqqonlilik shakllangan.",
            formulaOrRule:
              "Baliq (2 kam.) → Amfibiya/Reptiliya (3 kam.) → Qush/Sutemizuvchi (4 kam.)",
            example:
              "Issiqqonlilik (gomoyotermiya) qushlar va sutemizuvchilarga qishda ham faol hayot kechirish imkonini beradi.",
            keyTakeaways: [
              "Baliqlar jabra bilan, amfibiyalar teri va o‘pka bilan, qushlar esa o‘pka va havo xaltachalari bilan nafas oladi.",
              "Qizil kitobga O‘zbekistonning nodir hayvonlari — qor qoploni, Jayron, Buxoro bug‘usi va tuvaloq kiritilgan.",
            ],
          },
        ],
      },
      {
        id: "bio-13",
        title: "Odam tayanch-harakat tizimi (Skelet va muskullar)",
        grade: "8-sinf",
        duration: "35 daqiqa",
        level: "Asosiy",
        summary:
          "Suyaklarning tarkibi va birikishi, bosh, gavda va qo‘l-oyoq skeleti, ko‘ndalang-targ‘il muskullarning qisqarishi va qomat gigiyenasi.",
        sections: [
          {
            heading: "Suyaklar tuzilishi va skelet bo‘limlari",
            content:
              "Odam skeletida 200 dan ortiq suyak bo‘lib, ular tarkibidagi organik moddalar (ossein) suyakka elastiklik, mineral tuzlar (kalsiy va fosfor) esa qattiqlik beradi. Umurtqa pog‘onasi 33–34 ta umurtqadan iborat.",
            formulaOrRule:
              "Suyak = Organik modda (~1/3, qayishqoqlik) + Mineral tuzlar (~2/3, qattiqlik)",
            example:
              "Ko‘krak qafasi 12 juft qovurg‘a, ko‘krak umurtqalari va to‘sh suyagidan tuzilib, yurak hamda o‘pkalarni himoya qiladi.",
            keyTakeaways: [
              "Suyaklarning harakatchan birikishi bo‘g‘im deb ataladi.",
              "Yassitovonlik va skoliozning oldini olish uchun to‘g‘ri o‘tirish va sport bilan shug‘ullanish zarur.",
            ],
          },
          {
            heading: "Muskullar turlari va ishlashi",
            content:
              "Odam organizmida uch xil muskul to‘qimasi bor: skelet (ko‘ndalang-targ‘il, ixtiyoriy), silliq (ichki organlar, ixtiyorsiz) va yurak muskuli. Muskullar qisqarishi uchun ATF energiyasi va Ca²⁺ ionlari zarur.",
            formulaOrRule:
              "Statik ish (ushlab turish) → tez charchatadi;   Dinamik ish (harakat) → chidamliroq",
            example:
              "Muskullar uzoq vaqt zo‘riqib ishlaganda kislorod yetishmay sut kislota to‘planadi — bu muskul charchashi deb ataladi.",
            keyTakeaways: [
              "Aktiv dam olish (bir faoliyat turini boshqasiga almashtirish) charchoqni tezroq ketkazadi.",
              "Bosh miya bilan birga umurtqa pog‘onasi ichida orqa miya joylashgan.",
            ],
          },
        ],
      },
      {
        id: "bio-14",
        title: "Sezgi organlari va oliy asab faoliyati",
        grade: "8–9-sinf",
        duration: "40 daqiqa",
        level: "O‘rta",
        summary:
          "Ko‘rish analizatori (ko‘z tuzilishi, uzoqdan va yaqindan ko‘rish), eshitish analizatori (quloq) hamda shartli va shartsiz reflekslar.",
        sections: [
          {
            heading: "Ko‘z va quloq tuzilishi (Analizatorlar)",
            content:
              "Har bir analizator 3 qismdan iborat: retseptor → o‘tkazuvchi nerv → bosh miya po‘stlog‘idagi markaz. Ko‘zda tasvir gavhar orqali to‘r pardada teskari holda hosil bo‘ladi; tayoqchalar qorong‘ida, kolbachalar esa rangli ko‘rishni ta’minlaydi.",
            formulaOrRule:
              "Miopiya (yaqindan ko‘rish) → Botik (sochuvchi) linza;   Gipermetropiya → Qavariq (yig‘uvchi) linza",
            example:
              "O‘rta quloqda uchta eshitish suyakchasi (bolg‘acha, sandoncha, uzangi) tovush tebranishlarini kuchaytirib ichki quloqdagi chig‘anoqqa uzatadi.",
            keyTakeaways: [
              "Yevstaxiy nayi o‘rta quloqdagi havo bosimini atmosfera bosimi bilan tenglashtiradi.",
              "Ichki quloqdagi yarim doira kanallar muvozanat (vestibulyar) organi vazifasini bajaradi.",
            ],
          },
          {
            heading: "Shartsiz va shartli reflekslar",
            content:
              "I. P. Pavlov ta’limotiga ko‘ra shartsiz reflekslar tug‘ma va tur uchun doimiy bo‘ladi (masalan, emish, yo‘tal, tizza refleksi). Shartli reflekslar esa hayot davomida bosh miya katta yarim sharlari po‘stlog‘ida orttiriladi.",
            formulaOrRule:
              "Shartsiz refleks = Tug‘ma;    Shartli refleks = Tajriba va o‘qish natijasi",
            example:
              "O‘quvchining dars qo‘ng‘irog‘ini eshitganda partasiga o‘tirishi yoki ovqat hididan so‘lak ajralishi shartli refleksdir.",
            keyTakeaways: [
              "Odamda nutq va tafakkur bilan bog‘liq ikkinchi signal tizimi rivojlangan.",
              "Sog‘lom uyqu (8 soat) miya neyronlarining tiklanishi va xotirani mustahkamlash uchun zarur.",
            ],
          },
        ],
      },
    ],
    references: [
      {
        id: "bref-1",
        title: "Fotosintez reaksiyasi",
        expression: "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂",
        explanation: "Xloroplastlarda quyosh nuri ishtirokida glyukoza va kislorod sintezi.",
        usage: "O‘simliklar fiziologiyasi va biosfera modda almashinuvida.",
      },
      {
        id: "bref-2",
        title: "Aerob nafas olish",
        expression: "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + 38 ATF",
        explanation: "Glyukozaning to‘liq oksidlanib hujayra uchun energiya berishi.",
        usage: "Mitoxondriyadagi energetik almashinuvda.",
      },
      {
        id: "bref-3",
        title: "Chargaff qoidasi",
        expression: "A = T,   G = S   va   (A+G) = (T+S)",
        explanation: "DNK qo‘sh spiralidagi nukleotidlar sonining tengligi.",
        usage: "Molekulyar biologiya masalalarini yechishda.",
      },
      {
        id: "bref-4",
        title: "Genetik kod nisbati",
        expression: "1 aminokislota = 3 nukleotid (1 triplet)",
        explanation: "Oqsil zanjiridagi har bir aminokislota uchta nukleotid bilan kodlanadi.",
        usage: "DNK va iRNK uzunligini hisoblashda.",
      },
      {
        id: "bref-5",
        title: "Mendel II qonuni (Ajralish)",
        expression: "Aa × Aa → 1AA : 2Aa : 1aa  (fenotip 3:1)",
        explanation: "Geterozigota F₁ avloddagi belgilarning F₂ da ajralishi.",
        usage: "Monoduragay genetik masalalarda.",
      },
      {
        id: "bref-6",
        title: "Mendel III qonuni",
        expression: "AaBb × AaBb → fenotip 9 : 3 : 3 : 1",
        explanation: "Ikki juft muqobil belgining bir-biridan mustaqil irsiylanishi.",
        usage: "Diduragay chatishtirish masalalarida.",
      },
      {
        id: "bref-7",
        title: "Mitoz va meyoz natijasi",
        expression: "Mitoz: 2n → 2×(2n);   Meyoz: 2n → 4×(n)",
        explanation: "Somatik hujayralar mitozda, jinsiy hujayralar (gametalar) meyozda bo‘linadi.",
        usage: "Hujayra sikli va ko‘payish mavzularida.",
      },
      {
        id: "bref-8",
        title: "Lindeman qoidasi",
        expression: "Eₙ₊₁ ≈ 0.1 · Eₙ  (10% qoidasi)",
        explanation:
          "Oziq zanjirining har bir keyingi bosqichiga energiyaning o‘ndan bir qismi o‘tadi.",
        usage: "Ekologik piramida masalalarida.",
      },
      {
        id: "bref-9",
        title: "Odam xromosomalari",
        expression: "2n = 46 (44 autosoma + XX/XY)",
        explanation: "Odam somatik hujayrasida 46 ta, jinsiy hujayrasida 23 ta xromosoma bor.",
        usage: "Odam genetikasi va jins irsiylanishida.",
      },
      {
        id: "bref-10",
        title: "Qon guruhlari mosligi",
        expression: "I (0) — universal donor;  IV (AB) — universal retsipiyent",
        explanation: "ABO tizimi bo‘yicha qon quyishda agglyutinogen va agglyutinin mosligi.",
        usage: "Odam fiziologiyasi va tibbiyot asoslarida.",
      },
      {
        id: "bref-11",
        title: "Asosiy vitaminlar va kasalliklar",
        expression: "A (Shabko‘rlik), B₁ (Beri-beri), C (Singa), D (Raxit)",
        explanation:
          "Vitaminlar yetishmasligi (avitaminoz) o‘ziga xos kasalliklarni keltirib chiqaradi.",
        usage: "Sog‘lom ovqatlanish va fiziologiyada.",
      },
      {
        id: "bref-12",
        title: "Asosiy gormonlar va bezlar",
        expression: "Gipofiz (Somatotropin), Qalqonsimon (Tiroksin), Oshqozon osti (Insulin)",
        explanation: "Qonga ajralib organlar ishini boshqaruvchi biologik faol moddalar.",
        usage: "Endokrin tizim va gomeostaz tahlilida.",
      },
      {
        id: "bref-13",
        title: "DNK qo‘sh spiral qadam o‘lchami",
        expression: "1 nukleotid = 0.34 nm;   1 o‘ram = 10 juft nukleotid = 3.4 nm",
        explanation: "Uotson va Krik modeliga ko‘ra DNK molekulasining geometrik parametrlari.",
        usage: "Molekulyar genetika hisoblash masalalarida.",
      },
      {
        id: "bref-14",
        title: "Evolyutsiyaning harakatlantiruvchi kuchlari",
        expression: "Irsiy o‘zgaruvchanlik + Yashash uchun kurash + Tabiiy tanlanish",
        explanation:
          "Charlz Darvin nazariyasiga ko‘ra turlarning moslanishi va yangi turlar paydo bo‘lishi.",
        usage: "Evolyutsion ta’limot mavzularida.",
      },
      {
        id: "bref-15",
        title: "Tirik organizmlar sistemasi",
        expression: "Tur → Urug‘ → Oila → Turkum → Sinf → Tip (Bo‘lim) → Dunyo",
        explanation: "Karl Linney tomonidan asos solingan biologik tasniflash iyerarxiyasi.",
        usage: "Botanika va zoologiya taksonomiyasida.",
      },
      {
        id: "bref-16",
        title: "Gulli o‘simliklarda qo‘sh urug‘lanish",
        expression: "Murtak = 2n (1-spermiy + tuxum);  Endosperm = 3n (2-spermiy + markaziy)",
        explanation: "Yopiq urug‘li o‘simliklarga xos noyob ko‘payish jarayoni (S. G. Navashin).",
        usage: "Botanika va genetika masalalarida.",
      },
      {
        id: "bref-17",
        title: "Odam skeleti va yurak urishi me’yori",
        expression: "Suyaklar > 200 ta;  Puls = 60–80 zarba/daq;  Bosim ≈ 120/80 mm sim. ust.",
        explanation: "Sog‘lom katta odamning asosiy anatomik va fiziologik ko‘rsatkichlari.",
        usage: "Odam fiziologiyasi va tibbiyot asoslarida.",
      },
      {
        id: "bref-18",
        title: "Odam nafas olish hajmlari",
        expression: "Tinch nafas ≈ 500 ml;   O‘pkaning tiriklik sig‘imi ≈ 3500–4500 ml",
        explanation: "Spirometr asbobi yordamida o‘lchanadigan o‘pka havo sig‘imlari.",
        usage: "Nafas olish tizimi gigiyenasida.",
      },
      {
        id: "bref-19",
        title: "DNK va RNK nukleotidlari farqi",
        expression: "DNK: A, T, G, S (dezoksiriboza);   RNK: A, U, G, S (riboza)",
        explanation: "DNK qo‘sh zanjirli va Timinli, RNK esa bir zanjirli va Uratsillidir.",
        usage: "Transkripsiya va molekulyar biologiyada.",
      },
      {
        id: "bref-20",
        title: "O‘tkazuvchi to‘qimalar (Ksilema va Floema)",
        expression:
          "Ksilema: suv va tuzlar (ildiz → barg);  Floema: organik moddalar (barg → ildiz)",
        explanation: "O‘simlik tanasida moddalarning ikki yo‘nalishli tashilishi.",
        usage: "O‘simliklar anatomiyasi va fiziologiyasida.",
      },
    ],
    exercises: [
      {
        id: "bex-1",
        title: "DNK nukleotidlari foizini topish",
        level: "O‘rta",
        question:
          "DNK molekulasida adenin (A) nukleotidlari 22% ni tashkil etsa, timin (T), guanin (G) va sitozin (S) necha foizdan bo‘ladi?",
        hint: "Chargaff qoidasi: A = T, G = S va A + T + G + S = 100%.",
        solution:
          "A = T = 22%. Qolgan foiz: 100% − (22% + 22%) = 56%. Shunda G = S = 56% / 2 = 28%.",
      },
      {
        id: "bex-2",
        title: "Oqsil va iRNK uzunligi",
        level: "O‘rta",
        question:
          "150 ta aminokislotadan iborat oqsilni kodlovchi iRNK molekulasida nechta nukleotid bo‘ladi?",
        hint: "Har 1 ta aminokislota 3 ta nukleotid (1 triplet) bilan kodlanadi.",
        solution: "150 · 3 = 450 ta nukleotid (stop-kodonsiz hisobda).",
      },
      {
        id: "bex-3",
        title: "Ekologik piramida masalasi",
        level: "Asosiy",
        question:
          "O‘t → quyon → tulki oziq zanjirida massasi 5 kg bo‘lgan tulki ulg‘ayishi uchun kamida necha kilogramm o‘t kerak bo‘ladi?",
        hint: "Har bir o‘tishda 10 marta ko‘proq massa talab qilinadi (10% qoidasi).",
        solution: "Quyon massasi: 5 · 10 = 50 kg. O‘t massasi: 50 · 10 = 500 kg.",
      },
      {
        id: "bex-4",
        title: "Monoduragay chatishtirish",
        level: "Asosiy",
        question:
          "Sariq urug‘li geterozigota no‘xat (Aa) o‘zaro chatishtirilganda olingan 400 ta urug‘dan taxminan nechtasi yashil (aa) bo‘ladi?",
        hint: "Aa × Aa dan ¼ qismi aa (retsessiv belgi) chiqadi.",
        solution: "400 · ¼ = 100 ta yashil urug‘li no‘xat hosil bo‘ladi.",
      },
      {
        id: "bex-5",
        title: "DNK molekulasining uzunligini topish",
        level: "Chuqurlashtirilgan",
        question:
          "300 ta aminokislotadan iborat oqsilni kodlovchi gen (ikki zanjirli DNK bo‘lagi) uzunligini nanometrlarda hisoblang.",
        hint: "1 aminokislota = 3 ta nukleotid jufti; 1 nukleotid uzunligi 0.34 nm.",
        solution:
          "Bir zanjirdagi nukleotidlar soni: 300 · 3 = 900 ta. Gen uzunligi: 900 · 0.34 = 306 nm.",
      },
      {
        id: "bex-6",
        title: "Nafas olish va energetik almashinuv",
        level: "O‘rta",
        question:
          "Hujayrada 4 mol glyukoza to‘liq (aerob) oksidlanganda jami necha mol ATF energiyasi hosil bo‘ladi?",
        hint: "1 mol glyukoza to‘liq oksidlanganda 38 mol ATF hosil bo‘ladi (2 glikolizda + 36 mitoxondriyada).",
        solution: "4 · 38 = 152 mol ATF hosil bo‘ladi.",
      },
      {
        id: "bex-7",
        title: "DNK dan iRNK sintezi (Transkripsiya)",
        level: "O‘rta",
        question:
          "DNK zanjiri A-T-G-S-S-A-T-G-A ketma-ketlikka ega. Undan sintezlanadigan iRNK zanjirini yozing.",
        hint: "Komplementarlik: A→U, T→A, G→S, S→G (RNK da T o‘rniga U yoziladi).",
        solution: "iRNK ketma-ketligi: U-A-S-G-G-U-A-S-U.",
      },
      {
        id: "bex-8",
        title: "Gulli o‘simliklarda xromosoma soni",
        level: "Chuqurlashtirilgan",
        question:
          "Makka­jo‘xori barg hujayrasida 20 ta xromosoma (2n = 20) bor. Uning tuxum hujayrasi va triploid endospermida nechta xromosoma bo‘ladi?",
        hint: "Tuxum hujayra gaploid (n), endosperm esa triploid (3n).",
        solution:
          "n = 20 / 2 = 10 ta (tuxum hujayrada). Endospermda 3n = 3 · 10 = 30 ta xromosoma.",
      },
      {
        id: "bex-9",
        title: "Qon aylanish tezligi",
        level: "Asosiy",
        question:
          "Yurak minutiga 70 marta urib, har qisqarishda 70 ml qon haydaydi. 10 daqiqada yurak jami necha litr qon haydaydi?",
        hint: "1 daqiqadagi hajmni topib 10 ga ko‘paytiring va litrga o‘tkazing (1 L = 1000 ml).",
        solution: "1 daqiqada: 70 · 70 = 4900 ml = 4.9 L. 10 daqiqada: 4.9 · 10 = 49 litr qon.",
      },
      {
        id: "bex-10",
        title: "Diduragay chatishtirish nisbati",
        level: "O‘rta",
        question:
          "Mendelning uchinchi qonuniga ko‘ra AaBb × AaBb chatishtirishda 160 ta avlod olinsa, shundan nechtasida ikkala retsessiv belgi (aabb) namoyon bo‘ladi?",
        hint: "Fenotipik nisbat 9 : 3 : 3 : 1 (jami 16 qismdan 1 qismi aabb).",
        solution: "160 · (1 / 16) = 10 ta avlodda ikkala retsessiv belgi ko‘rinadi.",
      },
    ],
    quizzes: [
      {
        id: "bq-1",
        question: "Hujayrada ATF energiyasini sintezlovchi asosiy organoid qaysi?",
        options: ["Ribosoma", "Mitoxondriya", "Golji majmuasi", "Lizosoma"],
        answer: 1,
        explanation: "Mitoxondriya hujayraning energetik stansiyasi bo‘lib, ATF ishlab chiqaradi.",
      },
      {
        id: "bq-2",
        question: "Oqsillar qaysi organoidda sintezlanadi?",
        options: ["Vakuola", "Ribosoma", "Sentriola", "Peroksisoma"],
        answer: 1,
        explanation: "Ribosomalar iRNK ma’lumoti asosida aminokislotalardan oqsil yig‘adi.",
      },
      {
        id: "bq-3",
        question: "Odam yuragi nechta kameradan iborat?",
        options: ["2 ta", "3 ta", "4 ta", "5 ta"],
        answer: 2,
        explanation: "Odam yuragi 2 ta bo‘lmacha va 2 ta qorinchadan (jami 4 kamera) tuzilgan.",
      },
      {
        id: "bq-4",
        question: "DNK tarkibida uchramaydigan azotli asos qaysi?",
        options: ["Adenin", "Timin", "Guanin", "Uratsil"],
        answer: 3,
        explanation: "Uratsil faqat RNK tarkibida bo‘ladi; DNK da uning o‘rnida Timin joylashadi.",
      },
      {
        id: "bq-5",
        question: "O‘simlik hujayrasini hayvon hujayrasidan ajratib turuvchi belgi qaysi?",
        options: [
          "Yadro borligi",
          "Mitoxondriya borligi",
          "Xloroplast va sellyuloza qobiq",
          "Ribosoma borligi",
        ],
        answer: 2,
        explanation:
          "Sellyuloza qobiq va plastidalar (xloroplast) faqat o‘simlik hujayralariga xos.",
      },
      {
        id: "bq-6",
        question: "Qon ivishida qaysi qon hujayralari (shaklli elementlari) ishtirok etadi?",
        options: ["Eritrotsitlar", "Leykotsitlar", "Trombotsitlar", "Neyronlar"],
        answer: 2,
        explanation: "Trombotsitlar (qon plastinkalari) qon ivishini ta’minlaydi.",
      },
      {
        id: "bq-7",
        question:
          "Meyoz bo‘linish natijasida bitta diploid hujayradan nechta hujayra hosil bo‘ladi?",
        options: ["2 ta diploid", "4 ta gaploid", "2 ta gaploid", "4 ta diploid"],
        answer: 1,
        explanation:
          "Meyozda xromosomalar soni 2 marta kamayib, 4 ta gaploid (n) hujayra hosil bo‘ladi.",
      },
      {
        id: "bq-8",
        question: "Oziq zanjiridagi bakteriya va zamburug‘lar qaysi guruhga kiradi?",
        options: ["Produtsentlar", "Konsumentlar", "Redutsentlar", "Parazitlar"],
        answer: 2,
        explanation: "Redutsentlar o‘lik organik qoldiqlarni noorganik moddalargacha parchalaydi.",
      },
      {
        id: "bq-9",
        question: "Qaysi vitamin yetishmasligi bolalarda raxit kasalligiga sabab bo‘ladi?",
        options: ["Vitamin A", "Vitamin B₁", "Vitamin C", "Vitamin D"],
        answer: 3,
        explanation:
          "Vitamin D kalsiy va fosfor almashinuvini boshqaradi, yetishmasa suyaklar yumshaydi (raxit).",
      },
      {
        id: "bq-10",
        question: "Qondagi qand (glyukoza) miqdorini pasaytiruvchi gormon qaysi?",
        options: ["Adrenalin", "Insulin", "Tiroksin", "Somatotropin"],
        answer: 1,
        explanation:
          "Oshqozon osti bezi gormoni insulin glyukozaning hujayralarga kirishini ta’minlab qandni kamaytiradi.",
      },
      {
        id: "bq-11",
        question: "Buyrakning asosiy tuzilish va funksional birligi nima deb ataladi?",
        options: ["Neyron", "Alveola", "Nefron", "Osteon"],
        answer: 2,
        explanation:
          "Har bir buyrakda qonni filtrlab siydik hosil qiluvchi 1 millionga yaqin nefron mavjud.",
      },
      {
        id: "bq-12",
        question: "Bakteriyalarni zararlaydigan viruslar nima deb ataladi?",
        options: ["Bakteriofaglar", "Retroviruslar", "Saprotroflar", "Sianobakteriyalar"],
        answer: 0,
        explanation:
          "Bakteriofag — «bakteriyalarni yutuvchi» virus bo‘lib, faqat bakteriya hujayrasida ko‘payadi.",
      },
      {
        id: "bq-13",
        question: "Gulli o‘simliklarda endospermdagi xromosomalar to‘plami qanday bo‘ladi?",
        options: ["Gaploid (n)", "Diploid (2n)", "Triploid (3n)", "Tetraploid (4n)"],
        answer: 2,
        explanation:
          "Qo‘sh urug‘lanishda 2n markaziy hujayraga n spermiy qo‘shilib 3n endosperm hosil qiladi.",
      },
      {
        id: "bq-14",
        question:
          "O‘simliklarda suv va mineral tuzlar qaysi to‘qima orqali ildizdan bargga ko‘tariladi?",
        options: ["Floema", "Ksilema (yog‘ochlik)", "Po‘stloq", "Kambiy"],
        answer: 1,
        explanation:
          "Ksilema naychalari suv va minerallarni yuqoriga, floema esa organik moddalarni pastga tashiydi.",
      },
      {
        id: "bq-15",
        question: "Odam qon guruhlari tizimida qaysi guruh «universal donor» hisoblanadi?",
        options: ["I (0) guruhi", "II (A) guruhi", "III (B) guruhi", "IV (AB) guruhi"],
        answer: 0,
        explanation:
          "I (0) guruh eritrotsitlarida A va B agglyutinogenlari yo‘qligi uchun boshqa guruhlarga mos keladi.",
      },
      {
        id: "bq-16",
        question:
          "Yaqindan ko‘rish (miopiya) nuqsonini tuzatish uchun qanday linzali ko‘zoynak taqiladi?",
        options: ["Qavariq (yig‘uvchi)", "Botiq (sochuvchi)", "Yassi oyna", "Prizma"],
        answer: 1,
        explanation:
          "Miopiyada tasvir to‘r parda oldida tushadi, uni orqaga surish uchun botiq (sochuvchi) linza ishlatiladi.",
      },
    ],
    glossary: [
      {
        term: "Gomeostaz",
        definition:
          "Organizm ichki muhitining (harorat, qon tarkibi, bosim) nisbiy doimiylikda saqlanishi.",
        example: "Odam tana haroratining ~36.6°C da ushlab turilishi.",
      },
      {
        term: "Fotosintez",
        definition:
          "Yorug‘lik energiyasi yordamida anorganik moddalardan organik modda hosil bo‘lish jarayoni.",
        example: "O‘simlik barglari kun davomida kislorod ishlab chiqaradi.",
      },
      {
        term: "Mutatsiya",
        definition:
          "Genetik materialning (DNK ketma-ketligi yoki xromosoma sonining) to‘satdan o‘zgarishi.",
        example: "Yangi belgi paydo bo‘lishiga olib keluvchi gen mutatsiyasi.",
      },
      {
        term: "Genotip",
        definition: "Organizm hujayrasidagi barcha genlar majmuasi.",
        example: "AA, Aa yoki aa harflar bilan belgilanadi.",
      },
      {
        term: "Fenotip",
        definition: "Organizmning ko‘zga ko‘rinadigan tashqi va ichki belgilari yig‘indisi.",
        example: "Ko‘z rangi, bo‘y uzunligi va gul rangi.",
      },
      {
        term: "Refleks",
        definition:
          "Organizmning tashqi yoki ichki ta’sirga markaziy asab tizimi orqali beradigan javob reaksiyasi.",
        example: "Issiq buyumga tekkanda qo‘lni tez tortib olish.",
      },
      {
        term: "Immunitet",
        definition:
          "Organizmning kasallik qo‘zg‘atuvchi mikroblar va yot moddalardan himoyalanish qobiliyati.",
        example: "Emlash natijasida sun’iy faol immunitet shakllanadi.",
      },
      {
        term: "Simbioz",
        definition: "Ikki turli organizmning bir-biriga foyda keltirib birga yashashi.",
        example: "Dukkakli o‘simliklar ildizidagi tugunak bakteriyalari.",
      },
      {
        term: "Transpiratsiya",
        definition: "O‘simlik barglaridagi og‘izchalar orqali suvning bug‘lanishi.",
        example: "Issiq kunda bargni qizib ketishdan saqlaydi.",
      },
      {
        term: "Biosfera",
        definition: "Yerning barcha tirik organizmlar tarqalgan va faoliyat yuritadigan qobig‘i.",
        example: "Atmosfera quyi qismi, gidrosfera va litosfera yuqori qismini qamrab oladi.",
      },
      {
        term: "Ferment",
        definition:
          "Tirik hujayralarda kimyoviy reaksiyalarni minglab marta tezlashtiruvchi biologik katalizator (oqsil).",
        example: "So‘lakdagi amilaza va oshqozondagi pepsin.",
      },
      {
        term: "Gormon",
        definition:
          "Ichki sekretsiya bezlari tomonidan qonga ishlab chiqariladigan biologik faol modda.",
        example: "Insulin, adrenalin va tiroksin.",
      },
      {
        term: "Antitelo",
        definition:
          "Immun tizimi tomonidan yot modda (antigen) yoki mikroblarni zararsizlantirish uchun ishlab chiqariladigan oqsil.",
        example: "Emlashdan keyin qonda himoya antitelolari shakllanadi.",
      },
      {
        term: "Endosperm",
        definition:
          "Urug‘ tarkibida rivojlanayotgan murtakni oziq moddalar bilan ta’minlovchi to‘qima.",
        example: "Bug‘doy donining asosiy unli qismi triploid endospermdir.",
      },
      {
        term: "Ksilema",
        definition:
          "O‘simliklarda suv va mineral tuzlarni ildizdan poya va barglarga tashuvchi naylar tizimi.",
        example: "Daraxt tanasining yog‘ochlik qismini tashkil etadi.",
      },
      {
        term: "Analizator",
        definition:
          "Tashqi ta’sirni qabul qilib tahlil etuvchi tizim: retseptor, nerv yo‘li va miya markazi.",
        example: "Ko‘rish, eshitish, hid bilish va ta’m bilish analizatorlari.",
      },
      {
        term: "Antropogenez",
        definition:
          "Insonning biologik tur sifatida paydo bo‘lishi va tarixiy rivojlanish jarayoni.",
        example: "Avstralopitekdan Homo sapiens gacha bo‘lgan evolyutsion yo‘l.",
      },
      {
        term: "Bakteriofag",
        definition: "Faqat bakteriyalar hujayrasini zararlab, ularda ko‘payadigan viruslar guruhi.",
        example: "Ichak infeksiyalariga qarshi tibbiyotda qo‘llaniladi.",
      },
      {
        term: "Nefron",
        definition: "Buyrakning qonni filtrlab siydik hosil qiluvchi asosiy mikroskopik birligi.",
        example: "Har bir buyrakda taxminan 1 millionta nefron ishlaydi.",
      },
      {
        term: "Allopatriya",
        definition:
          "Populyatsiyalarning geografik to‘siqlar (tog‘, daryo) tufayli ajralib yangi tur hosil qilishi.",
        example: "Orollarda yashovchi qush turlarining alohida shakllanishi.",
      },
    ],
    flashcards: [
      {
        id: "bfc-1",
        front: "Hujayrada ATF sintezlovchi «energetik stansiya»?",
        back: "Mitoxondriya (1 mol glyukozadan jami 38 mol ATF)",
      },
      {
        id: "bfc-2",
        front: "Oqsillar qaysi organoidda sintezlanadi?",
        back: "Ribosoma (iRNK ma’lumoti asosida aminokislotalardan)",
      },
      {
        id: "bfc-3",
        front: "Fotosintez umumiy tenglamasi?",
        back: "6CO₂ + 6H₂O —(yorug‘lik)→ C₆H₁₂O₆ + 6O₂",
      },
      { id: "bfc-4", front: "Chargaff qoidasi (DNK)?", back: "A = T, G = S;  (A + G) = (T + S)" },
      {
        id: "bfc-5",
        front: "DNK va RNK dagi azotli asoslar farqi?",
        back: "DNK da Timin (T), RNK da esa uning o‘rnida Uratsil (U) bo‘ladi",
      },
      {
        id: "bfc-6",
        front: "Mitoz va Meyoz bo‘linish natijalari?",
        back: "Mitoz: 2 ta diploid (2n) hujayra; Meyoz: 4 ta gaploid (n) hujayra",
      },
      {
        id: "bfc-7",
        front: "Odam xromosomalari soni?",
        back: "Somatik hujayrada 46 ta (2n), jinsiy hujayrada 23 ta (n)",
      },
      {
        id: "bfc-8",
        front: "Mendel II va III qonunlari ajralish nisbati?",
        back: "Monoduragay (II): 3 : 1; Diduragay (III): 9 : 3 : 3 : 1",
      },
      {
        id: "bfc-9",
        front: "Vitamin C va Vitamin D yetishmasligi kasalliklari?",
        back: "Vitamin C → Singa; Vitamin D → Raxit (suyak yumshashi)",
      },
      {
        id: "bfc-10",
        front: "Oshqozon osti bezi gormoni Insulin vazifasi?",
        back: "Qondagi ortiqcha glyukozani glikogenga aylantirib qandni pasaytiradi",
      },
      { id: "bfc-11", front: "Buyrakning asosiy tuzilish birligi?", back: "Nefron" },
      {
        id: "bfc-12",
        front: "Lindeman 10% ekologik qoidasi?",
        back: "Oziq zanjirining keyingi pog‘onasiga energiyaning ~10% i o‘tadi",
      },
      {
        id: "bfc-13",
        front: "Gulli o‘simliklar murtagi va endospermi ploidligi?",
        back: "Murtak diploid (2n), endosperm triploid (3n)",
      },
      {
        id: "bfc-14",
        front: "Universal donor va universal retsipiyent qon guruhlari?",
        back: "Donor: I (0); Retsipiyent: IV (AB)",
      },
    ],
  },

  tarix: {
    id: "tarix",
    title: "Tarix",
    shortName: "Tarix",
    category: "Ijtimoiy fanlar",
    grades: "5–11-sinflar",
    description:
      "Qadimgi dunyo tamaddunlari, Buyuk Ipak yo‘li, Ilk va Ikkinchi Renessans, Temuriylar davri, jadidchilik hamda Yangi O‘zbekiston tarixi.",
    motto: "Tarix — o‘tmish saboqlari orqali bugunni anglash va kelajakni qurish ilmidir.",
    referenceTabLabel: "Muhim sanalar va shaxslar",
    outcomes: [
      "Qadimgi Sharq, Yunoniston, Rim va Markaziy Osiyo ilk davlatlari tarixini tahlil qilish",
      "Buyuk Ipak yo‘li, Qoraxoniylar, Xorazmshohlar va Sharq Uyg‘onish davri (IX–XII asrlar) allomalarini bilish",
      "Amir Temur davlatchiligi va Temuriylar Renessansi (XIV–XV asrlar) yutuqlarini o‘rganish",
      "Xonliklar davri, jadidchilik harakati va milliy uyg‘onish g‘oyalarini anglash",
      "1991-yil O‘zbekiston mustaqilligi va zamonaviy demokratik islohotlar xronologiyasini bilish",
    ],
    stats: {
      lessons: 14,
      references: 20,
      quizzes: 16,
      hours: "76 soat",
    },
    lessons: [
      {
        id: "tar-1",
        title: "Qadimgi dunyo sivilizatsiyalari va O‘rta Osiyo ilk davlatlari",
        grade: "5–6-sinf",
        duration: "35 daqiqa",
        level: "Asosiy",
        summary:
          "Misr, Mesopotamiya, Yunoniston, Rim hamda Baqtriya, Sug‘diyona, Xorazm va Kang‘ davlatlari.",
        sections: [
          {
            heading: "Eng qadimgi sharq sivilizatsiyalari va yurtimiz tarixi",
            content:
              "Insoniyat tarixida ilk shahar-davlatlar Nil, Dajla-Frot, Hind va Xuanxe daryolari vodiylarida vujudga kelgan. Markaziy Osiyoda esa miloddan avvalgi VIII–VII asrlarda Qadimgi Baqtriya va Xorazm davlatlari shakllangan. Ahamoniylar bosqiniga qarshi To‘maris (mil. avv. 530-yil) va Shiroq jasorati vatanparvarlik timsoliga aylangan.",
            formulaOrRule:
              "Mil. avv. 329–327-yillar — Spitamenning Aleksandr Makedonskiyga qarshi qo‘zg‘oloni",
            example:
              "Buyuk Ipak yo‘li (mil. avv. II asr) Xitoydan boshlanib, Farg‘ona, Samarqand, Buxoro va Marv orqali O‘rta yer dengizigacha cho‘zilgan xalqaro savdo va madaniyat ko‘prigi bo‘lgan.",
            keyTakeaways: [
              "Avesto — Zardushtiylikning muqaddas kitobi va Markaziy Osiyo xalqlarining eng qadimgi yozma manbasi.",
              "Kushon imperiyasi (I–III asrlar) davrida shaharsozlik, hunarmandchilik va yozuv yuksak darajada rivojlangan.",
            ],
          },
        ],
      },
      {
        id: "tar-2",
        title: "Birinchi Renessans: IX–XII asrlar ilm-fan va madaniyat yuksalishi",
        grade: "7-sinf",
        duration: "40 daqiqa",
        level: "O‘rta",
        summary:
          "Somoniylar, Qoraxoniylar, G‘aznaviylar va Xorazmshohlar davri; Al-Xorazmiy, Beruniy, Ibn Sino, Farg‘oniy va Buxoriy merosi.",
        sections: [
          {
            heading: "Buyuk allomalar va jahon ilm-faniga qo‘shilgan hissa",
            content:
              "IX–XII asrlarda Movarounnahr va Xuroson jahon ilm-fanining markaziga aylandi. Muhammad al-Xorazmiy algebra faniga asos soldi («Al-jabr»), Ahmad al-Farg‘oniy Nil daryosi sathini o‘lchovchi «Miqyosi Nil»ni yaratdi, Abu Rayhon Beruniy Yer radiusini juda yuqori aniqlikda hisobladi, Abu Ali ibn Sino esa «Tib qonunlari» asari bilan tibbiyotni besh asr oldinga boshladi.",
            formulaOrRule:
              "1004–1017-yillar — Xorazm Ma’mun akademiyasi (Urganchda Beruniy va Ibn Sino faoliyati)",
            example:
              "Al-Xorazmiyning nomidan zamonaviy «algoritm» atamasi, uning asaridan esa «algebra» so‘zi kelib chiqqan. Imom al-Buxoriy va Imom at-Termiziy hadis ilmida oliy maqomga erishdilar.",
            keyTakeaways: [
              "1097–1231-yillarda Xorazmshohlar davlati Markaziy Osiyodagi qudratli saltanatga aylandi.",
              "Jaloliddin Manguberdi mo‘g‘ul bosqinchilariga qarshi mardonavor kurash olib borgan milliy qahramondir.",
            ],
          },
        ],
      },
      {
        id: "tar-3",
        title: "Amir Temur davlatchiligi va Temuriylar Renessansi",
        grade: "7–8-sinf",
        duration: "45 daqiqa",
        level: "O‘rta",
        summary:
          "Amir Temurning markazlashgan davlat barpo etishi, «Temur tuzuklari», Mirzo Ulug‘bek rasadxonasi va Alisher Navoiy davri.",
        sections: [
          {
            heading: "Sohibqiron Amir Temur va Ikkinchi Uyg‘onish davri",
            content:
              "1370-yilda Amir Temur Movarounnahrda tarqoqlikka barham berib, poytaxti Samarqand bo‘lgan qudratli markazlashgan davlat tuzdi. Uning «Kuch — adolatdadir» shiori va «Temur tuzuklari» davlat boshqaruvining mustahkam huquqiy asosi bo‘ldi. XIV–XV asrlarda Samarqand va Hirotda me’morchilik, astronomiya, adabiyot va miniatyura san’ati misli ko‘rilmagan cho‘qqiga chiqdi.",
            formulaOrRule:
              "1336–1405 — Amir Temur;   1409–1449 — Mirzo Ulug‘bek hukmronligi;   1441–1501 — Alisher Navoiy",
            example:
              "Mirzo Ulug‘bek Samarqandda ulkan rasadxona qurdirib, 1018 ta yulduz koordinatasini o‘z ichiga olgan «Ziji jadidi Ko‘ragoniy»ni yaratdi. Alisher Navoiy turkiy tilda «Xamsa» yozib o‘zbek adabiy tilini yuksaltirdi.",
            keyTakeaways: [
              "Registon ansambli, Go‘ri Amir va Shohi Zinda Temuriylar me’morchiligining durdonalaridir.",
              "Zahiriddin Muhammad Bobur «Boburnoma» asari bilan tarix va adabiyotda o‘chmas iz qoldirdi.",
            ],
          },
        ],
      },
      {
        id: "tar-4",
        title: "O‘zbek xonliklari va XVI–XIX asrlar siyosiy hayoti",
        grade: "8–9-sinf",
        duration: "35 daqiqa",
        level: "Asosiy",
        summary:
          "Buxoro amirligi, Xiva va Qo‘qon xonliklarining tashkil topishi, boshqaruv tizimi va ijtimoiy-iqtisodiy hayoti.",
        sections: [
          {
            heading: "Uchta o‘zbek davlati: Buxoro, Xiva va Qo‘qon",
            content:
              "XVI asrdan XIX asr o‘rtalarigacha mintaqada Buxoro xonligi (1756-yildan Mang‘itlar sulolasi davrida amirlik), Xiva xonligi (1511-yilda tashkil topgan, keyinroq Qo‘ng‘irotlar sulolasi) hamda Qo‘qon xonligi (1709-yilda Minglar sulolasi tomonidan asos solingan) faoliyat yuritgan.",
            formulaOrRule: "1511 — Xiva xonligi;   1709 — Qo‘qon xonligi;   1756 — Buxoro amirligi",
            example:
              "Qo‘qon xonligida Nodirabegim va Uvaysiy adabiy muhitni rivojlantirgan; Xivada esa Muhammad Rahimxon II (Feruz) ilm-fan va kitobat san’atiga homiylik qilgan.",
            keyTakeaways: [
              "O‘zaro urushlar va tarqoqlik XIX asr ikkinchi yarmida Rossiya imperiyasi istilosiga yo‘l ochdi.",
              "Toshkent, Samarqand va Farg‘ona vodiysi mudofaasida xalq qahramonona qarshilik ko‘rsatdi.",
            ],
          },
        ],
      },
      {
        id: "tar-5",
        title: "Jadidchilik harakati va milliy uyg‘onish davri",
        grade: "9–10-sinf",
        duration: "40 daqiqa",
        level: "O‘rta",
        summary:
          "Usuli jadid maktablari, Behbudiy, Avloniy, Fitrat va Cho‘lpon g‘oyalari hamda Turkiston muxtoriyati.",
        sections: [
          {
            heading: "Ma’rifatparvar jadidlar va «Ozodlik — bilimda» g‘oyasi",
            content:
              "XIX asr oxiri – XX asr boshlarida Turkistonda Mahmudxo‘ja Behbudiy, Munavvarqori Abdurashidxonov, Abdulla Avloniy, Abdurauf Fitrat, Abdulhamid Cho‘lpon va Abdulla Qodiriy boshchiligida jadidchilik harakati shakllandi. Ular yangi usul maktablari ochdilar, milliy matbuot va teatrga asos soldilar.",
            formulaOrRule: "1917-yil 27-noyabr — Qo‘qonda Turkiston Muxtoriyati e’lon qilindi",
            example:
              "Abdulla Avloniy «Tarbiya biz uchun yo hayot — yo mamot, yo najot — yo halokat» deb ta’kidlagan; Mahmudxo‘ja Behbudiy birinchi o‘zbek dramasi «Padarkush»ni yozgan.",
            keyTakeaways: [
              "Jadidlar yoshlarni Germaniya va boshqa ilg‘or mamlakatlarga o‘qishga yuborganlar.",
              "1937–1938-yillardagi stalincha qatag‘onlar ko‘plab milliy ziyolilar hayotiga zomin bo‘ldi.",
            ],
          },
        ],
      },
      {
        id: "tar-6",
        title: "Jahon tarixi burilishlari va Mustaqil O‘zbekiston (1991–bugun)",
        grade: "10–11-sinf",
        duration: "40 daqiqa",
        level: "Asosiy",
        summary:
          "XX asr jahon tarixi asosiy voqealari, Ikkinchi jahon urushidagi o‘zbek xalqi jasorati, Mustaqillik va Konstitutsiya.",
        sections: [
          {
            heading: "O‘zbekiston Respublikasining mustaqillikka erishishi",
            content:
              "1991-yil 31-avgustda O‘zbekiston Respublikasining davlat mustaqilligi e’lon qilindi va 1-sentabr Mustaqillik kuni sifatida belgilandi. 1991-yil 18-noyabrda Davlat bayrog‘i, 1992-yil 2-iyulda Davlat gerbi, 1992-yil 8-dekabrda O‘zbekiston Konstitutsiyasi va 10-dekabrda Davlat madhiyasi qabul qilindi.",
            formulaOrRule:
              "1991-yil 31-avgust — Mustaqillik;   1992-yil 2-mart — BMTga a’zolik;   1992-yil 8-dekabr — Konstitutsiya",
            example:
              "Ikkinchi jahon urushi yillarida (1941–1945) O‘zbekistondan 1,95 milliondan ziyod kishi frontga safarbar etildi, yurtimiz 1,5 milliondan ortiq evakuatsiya qilingan kishilarga, jumladan 200 mingdan ortiq bolalarga boshpana berdi.",
            keyTakeaways: [
              "1994-yil 1-iyulda milliy valyuta — so‘m muomalaga kiritildi.",
              "2023-yil 30-aprel referendumida yangilangan Konstitutsiya qabul qilindi.",
            ],
          },
        ],
      },
      {
        id: "tar-7",
        title: "Qadimgi Yunoniston va Qadimgi Rim tamaddunlari",
        grade: "6-sinf",
        duration: "40 daqiqa",
        level: "Asosiy",
        summary:
          "Yunon polislari (Afina va Sparta), Afina demokratiyasi, yunon-fors urushlari, Rim respublikasi va imperiyasi.",
        sections: [
          {
            heading: "Yunon polislari va antik madaniyat",
            content:
              "Mil. avv. VIII–VI asrlarda Yunonistonda mustaqil shahar-davlatlar — polislar shakllandi. Afinada Perikl davrida quldorlik demokratiyasi gullab-yashnadi, Sparta esa qat’iy harbiy intizomi bilan ajralib turdi.",
            formulaOrRule:
              "Mil. avv. 776-yil — Ilk Olimpiya o‘yinlari;   Mil. avv. 490-yil — Marafon jangi",
            example:
              "Yunonistonda Suqrot, Aflotun va Arastu falsafasi, Gerodot tarixi, Sofokl teatri hamda Parfenon me’morchiligi jahon madaniyatiga asos soldi.",
            keyTakeaways: [
              "«Demokratiya» yunoncha «xalq hokimiyati» ma’nosini anglatadi.",
              "Mil. avv. 334–323-yillarda Aleksandr Makedonskiy yirik saltanat tuzdi.",
            ],
          },
          {
            heading: "Rim respublikasidan imperiyagacha",
            content:
              "Mil. avv. 753-yilda asos solingan Rim avval podsholik, mil. avv. 509-yildan respublika, mil. avv. 27-yilda Oktavian Avgust davridan esa imperiyaga aylandi. Rim huquqi zamonaviy Yevropa qonunchiligining negizi bo‘ldi.",
            formulaOrRule:
              "Mil. avv. 74–71-yillar — Spartak qo‘zg‘oloni;   395-yil — Rim imperiyasining ikkiga bo‘linishi",
            example:
              "Kolizey amfiteatri, Panteon, akveduklar va tosh yotqizilgan Rim yo‘llari antik muhandislikning yorqin namunalaridir.",
            keyTakeaways: [
              "476-yilda G‘arbiy Rim imperiyasining qulashi bilan Qadimgi dunyo tarixi yakunlanadi.",
              "Sharqiy Rim (Vizantiya) imperiyasi yana ming yil (1453-yilgacha) mavjud bo‘ldi.",
            ],
          },
        ],
      },
      {
        id: "tar-8",
        title: "O‘rta asrlar: Arab xalifaligi, Saljuqiylar va Yevropa",
        grade: "7-sinf",
        duration: "40 daqiqa",
        level: "O‘rta",
        summary:
          "Islom dinining vujudga kelishi, Arab xalifaligi, Buyuk Saljuqiylar davlati hamda Yevropada feodal jamiyat va salib yurishlari.",
        sections: [
          {
            heading: "Arab xalifaligi va Saljuqiylar davlati",
            content:
              "VII asrda Arabiston yarim orolida Islom dini paydo bo‘lib, yagona Arab xalifaligi tashkil topdi. Bag‘doddagi «Bayt ul-hikma»da Xorazmiy, Farg‘oniy va Marvaziy kabi vatandoshlarimiz jahon ilm-fanini boyitdilar. XI asrda To‘g‘rulbek boshchiligida Buyuk Saljuqiylar davlati vujudga keldi.",
            formulaOrRule:
              "622-yil — Hijrat boshlanishi;   1040-yil — Dandanakon jangi (Saljuqiylar g‘alabasi)",
            example:
              "Nizomulmulk Saljuqiylar davlatida vazir bo‘lib, «Siyosatnoma» asarini yozgan va «Nizomiya» madrasalar tarmog‘iga asos solgan.",
            keyTakeaways: [
              "751-yildagi Talas jangida Markaziy Osiyoda qog‘oz ishlab chiqarish texnologiyasi keng tarqaldi.",
              "O‘rta asrlar Sharq ilm-fani Yevropa Uyg‘onishiga kuchli turtki berdi.",
            ],
          },
          {
            heading: "O‘rta asrlar Yevropa feodalizmi",
            content:
              "G‘arbiy Yevropada feodal yer egaligi, ritsarlik, katolik cherkovining kuchli ta’siri va o‘rta asr universitetlari (Bolonya, Parij, Oksford) shakllandi. 1096–1270-yillarda Yaqin Sharqqa salib yurishlari uyushtirildi.",
            formulaOrRule:
              "800-yil — Buyuk Karl imperiyasi;   1215-yil — Angliyada «Buyuk ozodlik xartiyasi»",
            example:
              "Salib yurishlari natijasida yevropaliklar Sharqning ilm-fani, tibbiyoti, shakar, ipak va gigiyena madaniyati bilan yaqindan tanishdilar.",
            keyTakeaways: [
              "1337–1453-yillarda Angliya va Fransiya o‘rtasida Yuz yillik urush bo‘lib o‘tdi.",
              "1453-yilda Usmoniylar sultoni Mehmed II Konstantinopolni egalladi.",
            ],
          },
        ],
      },
      {
        id: "tar-9",
        title: "Yevropa Uyg‘onish davri va Buyuk geografik kashfiyotlar",
        grade: "8-sinf",
        duration: "40 daqiqa",
        level: "O‘rta",
        summary:
          "Italiya Renessansi va humanizm, kitob bosish ixtirosi, Kolumb, Vasko da Gama va Magellan ekspeditsiyalari.",
        sections: [
          {
            heading: "Yevropa Renessansi va Reformatsiya",
            content:
              "XIV–XVI asrlarda Yevropada inson qadr-qimmati va aql-idrokini ulug‘lovchi humanizm g‘oyalari yoyildi. Leonardo da Vinchi, Mikelanjelo, Rafael san’atda, Kopernik va Galiley esa fanda inqilob yasadilar. Iogann Gutenbergning kitob bosish dastgohi bilimlar tarqalishini tezlashtirdi.",
            formulaOrRule:
              "1445-yil — Gutenberg bosma dastgohi;   1517-yil — Martin Lyuter va Reformatsiya boshlanishi",
            example:
              "Nikolay Kopernik Quyosh tizimining geliosentrik modelini asoslab berdi (ilgari Abu Rayhon Beruniy bu g‘oyani ilgari surgan edi).",
            keyTakeaways: [
              "«Renessans» so‘zi fransuzcha «qayta tug‘ilish, uyg‘onish» ma’nosini beradi.",
              "Kitob chop etishning yo‘lga qo‘yilishi savodxonlikni keskin oshirdi.",
            ],
          },
          {
            heading: "Buyuk geografik kashfiyotlar",
            content:
              "XV asr oxiri – XVI asr boshlarida Hindistonga dengiz yo‘lini izlash natijasida yangi qit’alar kashf etildi va dunyo okeanlari o‘rganildi.",
            formulaOrRule:
              "1492-yil — X. Kolumb (Amerika);   1498-yil — Vasko da Gama (Hindiston);   1519–1522 — F. Magellan (Dunyo bo‘ylab sayohat)",
            example:
              "Magellan ekspeditsiyasi Yerning sharsimon ekanligini amalda to‘liq isbotladi va Tinch okeanini kesib o‘tdi.",
            keyTakeaways: [
              "Yevropaga Amerikadan kartoshka, pomidor, makkajo‘xori va kakao kirib keldi.",
              "Savdo markazi O‘rta dengizdan Atlantika okeaniga ko‘chdi.",
            ],
          },
        ],
      },
      {
        id: "tar-10",
        title: "XIX–XXI asrlar jahon tarixi va xalqaro tashkilotlar",
        grade: "9–11-sinf",
        duration: "45 daqiqa",
        level: "Chuqurlashtirilgan",
        summary:
          "Sanoat inqiloblari, BMT tashkil topishi, Sovuq urushning tugashi va globallashuv davrida O‘zbekistonning o‘rni.",
        sections: [
          {
            heading: "Sanoat inqilobi va XX asr burilish nuqtalari",
            content:
              "Bug‘ dvigateli, temir yo‘llar va elektr energiyasi insoniyatni agrar jamiyatdan industrial jamiyatga olib chiqdi. Ikkinchi jahon urushidan so‘ng tinchlik va hamkorlikni ta’minlash uchun Birlashgan Millatlar Tashkiloti (BMT) tuzildi.",
            formulaOrRule:
              "1945-yil 24-oktabr — BMT tashkil topishi;   1948-yil 10-dekabr — Inson huquqlari umumjahon deklaratsiyasi",
            example:
              "1961-yil 12-aprelda Yuriy Gagarin fazoga uchib kosmik erani boshlab berdi; 1969-yilda esa insoniyat Oyga qadam qo‘ydi.",
            keyTakeaways: [
              "BMT bosh qarorgohi Nyu-York shahrida joylashgan; 6 ta rasmiy tili mavjud.",
              "YuNESKO — BMTning fan, ta’lim va madaniyat masalalari bo‘yicha tashkiloti (Samarqand, Buxoro, Xiva ro‘yxatga kiritilgan).",
            ],
          },
          {
            heading: "Yangi O‘zbekiston tashqi siyosati va xalqaro nufuzi",
            content:
              "O‘zbekiston BMT, ShHT (Shanxay hamkorlik tashkiloti), Turkiy davlatlar tashkiloti, MDH va Islom hamkorlik tashkilotining faol a’zosidir. Markaziy Osiyo davlatlari bilan yaxshi qo‘shnichilik va do‘stlik siyosati mintaqaviy barqarorlikni mustahkamlamoqda.",
            formulaOrRule:
              "2001-yil — ShHT tashkil topishi (O‘zbekiston ta’sischilardan);   2022-yil — Samarqand sammiti",
            example:
              "2023-yilda BMT Bosh Assambleyasi O‘zbekiston tashabbusi bilan «Markaziy Osiyo — tinchlik, ishonch va hamkorlik zonasi» rezolyutsiyasini qabul qildi.",
            keyTakeaways: [
              "O‘zbekiston ko‘p qirrali, tinchliksevar va pragmatik tashqi siyosat yuritadi.",
              "Orolbo‘yi mintaqasini ekologik innovatsiyalar zonasiga aylantirish xalqaro miqyosda qo‘llab-quvvatlandi.",
            ],
          },
        ],
      },
      {
        id: "tar-11",
        title: "Qadimgi Misr, Mesopotamiya, Hindiston va Xitoy",
        grade: "6-sinf",
        duration: "35 daqiqa",
        level: "Asosiy",
        summary:
          "Buyuk daryo vodiylarida vujudga kelgan ilk sivilizatsiyalar, iyeroglif va mixxat yozuvlari, Xammurapi qonunlari hamda Buyuk Xitoy devori.",
        sections: [
          {
            heading: "Qadimgi Misr va Ikki daryo oralig‘i (Mesopotamiya)",
            content:
              "Nil daryosi vodiysida Qadimgi Misr (mil. avv. IV ming yillik oxiri), Dajla va Frot daryolari oralig‘ida esa Shumer, Akkad va Bobil davlatlari vujudga keldi. Bobil shohi Xammurapi insoniyat tarixidagi ilk yozma qonunlar majmuasini tuzdirgan.",
            formulaOrRule:
              "Misr: iyeroglif yozuvi va papirus;   Mesopotamiya: mixxat yozuvi va sopol taxtachalar",
            example:
              "Misr fir’avni Xufu (Xeops) sharafiga qurilgan piramida Qadimgi dunyoning yetti mo‘jizasidan bugungi kungacha saqlanib qolgan yagona obidadir.",
            keyTakeaways: [
              "Shumerliklar g‘ildirakni ixtiro qilgan va 60 lik sanoq tizimiga (soatda 60 daqiqa) asos solganlar.",
              "Misrda 365 kunlik quyosh taqvimi yaratilgan.",
            ],
          },
          {
            heading: "Qadimgi Hindiston va Qadimgi Xitoy yutuqlari",
            content:
              "Hind va Gang vodiylarida shaharsozlik (Mohenjodoro, Xarappa), shaxmat o‘yini hamda o‘nlik sanoq raqamlari («nol» tushunchasi) paydo bo‘ldi. Qadimgi Xitoyda esa ipak, qog‘oz, kompas va porox kashf etilib, Sin Shixuandi davrida Buyuk Xitoy devori qurildi.",
            formulaOrRule: "Xitoyning 4 buyuk ixtirosi: Qog‘oz · Kompas · Porox · Kitob bosish",
            example:
              "Xitoylik olim Chjan Syan mil. avv. 138-yilda Farg‘ona (Davan) vodiysiga kelib, Buyuk Ipak yo‘lining shakllanishiga hissa qo‘shgan.",
            keyTakeaways: [
              "Konfutsiy Qadimgi Xitoyning buyuk mutafakkiri va axloqiy ta’limot asoschisidir.",
              "Mil. avv. III asrda Hindistonni podsho Ashoka yagona davlatga birlashtirdi.",
            ],
          },
        ],
      },
      {
        id: "tar-12",
        title: "Qoraxoniylar, G‘aznaviylar va Xorazmshohlar davlati",
        grade: "7-sinf",
        duration: "40 daqiqa",
        level: "O‘rta",
        summary:
          "IX–XIII asr boshlarida Markaziy Osiyo davlatchiligi, Yusuf Xos Hojib va Mahmud Koshg‘ariy merosi, Jaloliddin Manguberdining jasorati.",
        sections: [
          {
            heading: "Qoraxoniylar va turkiy adabiyot yuksalishi",
            content:
              "X asr oxirida tashkil topgan Qoraxoniylar davlatida turkiy til va madaniyat yuksak darajada rivojlandi. Buxorodagi Minorai Kalon (1127) va Vobkent minorasi ushbu davr me’morchiligining nodir namunalaridir.",
            formulaOrRule:
              "«Qutadg‘u bilig» (Yusuf Xos Hojib, 1069);   «Devonu lug‘otit-turk» (Mahmud Koshg‘ariy, 1072–1074)",
            example:
              "Mahmud Koshg‘ariy yaratgan «Devonu lug‘otit-turk» asarida turkiy qabilalar tili bilan birga dunyoning ilk doiraviy xaritasidan biri ham berilgan.",
            keyTakeaways: [
              "Ahmad Yassaviy «Devoni hikmat» asari bilan tasavvuf adabiyotini boshlab berdi.",
              "G‘aznaviylar davlatida Mahmud G‘aznaviy va Al-Beruniy faoliyat yuritgan.",
            ],
          },
          {
            heading: "Xorazmshohlar va Jaloliddin Manguberdi",
            content:
              "XII asr oxiri – XIII asr boshlarida Anushteginiylar sulolasi boshchiligidagi Xorazmshohlar davlati Sharqdagi eng yirik saltanatlardan biriga aylandi. 1219–1221-yillardagi mo‘g‘ul bosqiniga qarshi Najmiddin Kubro, Temur Malik va Jaloliddin Manguberdi mardonavor kurash olib bordilar.",
            formulaOrRule:
              "1221-yil — Parvon va Sind daryosi janglari;   1999-yil — Jaloliddin Manguberdi ordeni ta’sisi",
            example:
              "Jaloliddin Manguberdi Parvon jangida mo‘g‘ul qo‘shinini mag‘lub etib, Sind daryosi bo‘yida mislsiz jasorat ko‘rsatgani uchun Chingizxonning o‘zi ham uni e’tirof etgan.",
            keyTakeaways: [
              "Xorazm poytaxti Gurganj (Ko‘hna Urganch) mudofaasida shayx Najmiddin Kubro «Yo Vatan, yo sharafli o‘lim» shiori bilan shahid bo‘ldi.",
              "O‘zbekistonda Jaloliddin Manguberdining vatanparvarligi milliy qahramonlik timsoli sanaladi.",
            ],
          },
        ],
      },
      {
        id: "tar-13",
        title: "Shayboniylar, Ashtarxoniylar va Uch xonlik davri",
        grade: "8-sinf",
        duration: "40 daqiqa",
        level: "O‘rta",
        summary:
          "XVI–XIX asrlarda Buxoro xonligi (amirligi), Xiva va Qo‘qon xonliklarining tashkil topishi, Abdullaxon II islohotlari va me’morchilik.",
        sections: [
          {
            heading: "Shayboniylar va Abdullaxon II davri",
            content:
              "1500-yilda Muhammad Shayboniyxon Movarounnahrda Shayboniylar sulolasiga asos soldi (poytaxt avval Samarqand, keyin Buxoro). Abdullaxon II (1557–1598) davrida mamlakat siyosiy jihatdan birlashtirilib, karvonsaroylar, sardobalar, ko‘priklar va madrasalar qurildi.",
            formulaOrRule:
              "1512-yil — Xiva xonligi (Ilbarsxon);   1709-yil — Qo‘qon xonligi (Shohruxbiy);   1756-yil — Buxoroda Mang‘itlar",
            example:
              "Samarqanddagi Registon maydonini bezab turgan Sherdor va Tillakori madrasalari XVII asrda Samarqand hokimi Yalangto‘sh Bahodir tashabbusi bilan bunyod etilgan.",
            keyTakeaways: [
              "Ashtarxoniylar davrida (1601–1756) Subhonqulixon tibbiyot va kutubxonachilikka katta e’tibor berdi.",
              "Xiva xonligida Abulg‘oziy Bahodirxon «Shajarayi turk» tarixiy asarini yozdi.",
            ],
          },
          {
            heading: "Qo‘qon adabiy muhiti va xonliklar taqdiri",
            content:
              "XIX asr boshlarida Qo‘qon xoni Umarxon va uning rafiqasi Nodirabegim homiyligida kuchli adabiy muhit shakllanib, Uvaysiy, Maxmur, Gulxaniy kabi shoirlar ijod qildilar. XIX asr ikkinchi yarmida esa uch xonlik chor Rossiyasi tomonidan bosib olindi.",
            formulaOrRule:
              "1865-yil — Toshkent mudofaasi;   1868–1873-yillar — Buxoro va Xiva protektoratlari",
            example:
              "Xiva shahridagi Ichan qal’a majmuasi, Kalta Minor va Toshhovli saroyi XIX asr Xorazm me’morchiligining durdonasidir.",
            keyTakeaways: [
              "Muhammad Rahimxon II (Feruz) Xivada birinchi toshbosma nashriyotni ochgan.",
              "1916-yilda Turkistonda mardikorlikka olishga qarshi Jizzax va boshqa shaharlarda qo‘zg‘olon ko‘tarildi.",
            ],
          },
        ],
      },
      {
        id: "tar-14",
        title: "O‘zbekistonning YuNESKO merosi va buyuk obidalari",
        grade: "5–11-sinf",
        duration: "35 daqiqa",
        level: "Asosiy",
        summary:
          "Ichan qal’a, Samarqand, Buxoro va Shahrisabz tarixiy markazlari, Chotqol biosfera qo‘riqxonasi va nomoddiy madaniy meros.",
        sections: [
          {
            heading: "YuNESKO Butunjahon merosi ro‘yxatidagi shaharlar",
            content:
              "O‘zbekiston hududidagi noyob me’moriy obidalar umumjahon ahamiyatiga ega. 1990-yilda Xivadagi Ichan qal’a Markaziy Osiyoda birinchi bo‘lib YuNESKO Butunjahon merosi ro‘yxatiga kiritildi.",
            formulaOrRule:
              "1990 — Ichan qal’a (Xiva);  1993 — Buxoro;  2000 — Shahrisabz;  2001 — Samarqand",
            example:
              "Samarqanddagi Registon ansambli (Ulug‘bek, Sherdor, Tillakori madrasalari) va Go‘ri Amir maqbarasi O‘zbekistonning dunyoga mashhur tashrif qog‘ozidir.",
            keyTakeaways: [
              "G‘arbiy Tyan-Shan (Chotqol qo‘riqxonasi) va Turon cho‘llari YuNESKO tabiiy merosi ro‘yxatidan joy olgan.",
              "Navoiy viloyatidagi Sarmishsoy qoyatosh suratlari ming yillik qadimiy san’at yodgorligidir.",
            ],
          },
          {
            heading: "Nomoddiy madaniy meros durdonalari",
            content:
              "Shashmaqom, Katta ashula, Navro‘z bayrami, Palov tayyorlash an’anasi, Askiya, Baxsichilik san’ati, Atlas va adras to‘qish texnologiyasi hamda Kulolchilik maktabi YuNESKOning nomoddiy madaniy meros ro‘yxatiga kiritilgan.",
            formulaOrRule:
              "Shashmaqom · Navro‘z · Askiya · Baxshichilik · Marg‘ilon atlasi · Xorazm lazgisi",
            example:
              "1997-yilda Buxoro va Xiva shaharlarining 2500 yilligi, 2007-yilda esa Samarqandning 2750 yilligi xalqaro miqyosda nishonlandi.",
            keyTakeaways: [
              "Tarixiy yodgorliklarni asrab-avaylash har bir fuqaroning konstitutsiyaviy burchidir.",
              "O‘zbekistonda ziyorat turizmi va ekoturizm jadal rivojlanmoqda.",
            ],
          },
        ],
      },
    ],
    references: [
      {
        id: "tref-1",
        title: "Spitamen qo‘zg‘oloni",
        expression: "Mil. avv. 329–327-yillar",
        explanation: "Sug‘diyona va Baqtriya xalqlarining Aleksandr Makedonskiyga qarshi kurashi.",
        usage: "Qadimgi Markaziy Osiyo tarixida.",
      },
      {
        id: "tref-2",
        title: "Buyuk Ipak yo‘li ochilishi",
        expression: "Mil. avv. II asr (138-yil)",
        explanation: "Sharq va G‘arbni bog‘lagan transkontinental savdo va madaniyat yo‘li.",
        usage: "Jahon va o‘zbek davlatchiligi tarixida.",
      },
      {
        id: "tref-3",
        title: "Xorazm Ma’mun akademiyasi",
        expression: "1004–1017-yillar",
        explanation: "Urganchdagi «Dorul-hikma va maorif» ilmiy markazi.",
        usage: "Birinchi Renessans davri ilm-fani.",
      },
      {
        id: "tref-4",
        title: "Amir Temur davlati tashkil topishi",
        expression: "1370-yil",
        explanation: "Balx qurultoyida Amir Temur Movarounnahr amiri etib e’lon qilindi.",
        usage: "Temuriylar saltanati boshlanishi.",
      },
      {
        id: "tref-5",
        title: "Mirzo Ulug‘bek hukmronligi",
        expression: "1409–1449-yillar",
        explanation: "Samarqandda ilm-fan, madrasa va rasadxona ravnaq topgan davr.",
        usage: "Ikkinchi Renessans tarixida.",
      },
      {
        id: "tref-6",
        title: "Qo‘qon xonligi tashkil topishi",
        expression: "1709-yil",
        explanation: "Shohruxbiy tomonidan Farg‘ona vodiysida asos solingan davlat.",
        usage: "O‘zbek xonliklari davrida.",
      },
      {
        id: "tref-7",
        title: "Birinchi jahon urushi",
        expression: "1914–1918-yillar",
        explanation: "Antanta va Uchlar ittifoqi o‘rtasidagi global urush.",
        usage: "XX asr jahon tarixida.",
      },
      {
        id: "tref-8",
        title: "Ikkinchi jahon urushi",
        expression: "1939–1945-yillar",
        explanation: "Insoniyat tarixidagi eng yirik urush; fashizm ustidan G‘alaba bilan tugagan.",
        usage: "Jahon va O‘zbekiston tarixida.",
      },
      {
        id: "tref-9",
        title: "O‘zbekiston Mustaqilligi",
        expression: "1991-yil 31-avgust (1-sentabr — bayram)",
        explanation: "O‘zbekiston Respublikasi mustaqil davlat deb e’lon qilindi.",
        usage: "Eng yangi tarixda.",
      },
      {
        id: "tref-10",
        title: "O‘zbekiston BMTga a’zo bo‘lishi",
        expression: "1992-yil 2-mart",
        explanation:
          "O‘zbekiston teng huquqli a’zo sifatida Birlashgan Millatlar Tashkilotiga kirdi.",
        usage: "Tashqi siyosat va diplomatiya tarixida.",
      },
      {
        id: "tref-11",
        title: "Konstitutsiya qabul qilinishi",
        expression: "1992-yil 8-dekabr",
        explanation: "O‘zbekiston Respublikasining Asosiy Qonuni qabul qilindi.",
        usage: "Huquqiy davlatchilik tarixida.",
      },
      {
        id: "tref-12",
        title: "Milliy valyuta — So‘m",
        expression: "1994-yil 1-iyul",
        explanation: "O‘zbekistonning mustaqil milliy valyutasi muomalaga kiritildi.",
        usage: "Iqtisodiy islohotlar tarixida.",
      },
      {
        id: "tref-13",
        title: "Buyuk geografik kashfiyot (Amerika)",
        expression: "1492-yil 12-oktabr",
        explanation: "Xristofor Kolumb ekspeditsiyasi Amerika qit’asi qirg‘oqlariga yetib bordi.",
        usage: "Yangi davr jahon tarixida.",
      },
      {
        id: "tref-14",
        title: "BMT tashkil topishi",
        expression: "1945-yil 24-oktabr",
        explanation:
          "Tinchlik va xalqaro xavfsizlikni saqlash uchun Birlashgan Millatlar Tashkiloti tuzildi.",
        usage: "Xalqaro munosabatlar tarixida.",
      },
      {
        id: "tref-15",
        title: "O‘zbekiston Davlat bayrog‘i",
        expression: "1991-yil 18-noyabr",
        explanation: "Mustaqil O‘zbekiston Respublikasining Davlat bayrog‘i tasdiqlandi.",
        usage: "Davlat ramzlari tarixida.",
      },
      {
        id: "tref-16",
        title: "Yangilangan Konstitutsiya",
        expression: "2023-yil 30-aprel",
        explanation:
          "Umumxalq referendumida O‘zbekistonning yangi tahrirdagi Konstitutsiyasi qabul qilindi.",
        usage: "Zamonaviy huquqiy islohotlarda.",
      },
      {
        id: "tref-17",
        title: "«Qutadg‘u bilig» asari yozilishi",
        expression: "1069–1070-yillar (Yusuf Xos Hojib)",
        explanation: "Qoraxoniylar davrida yaratilgan ilk yirik turkiy badiiy-siyosiy doston.",
        usage: "O‘zbek va turkiy xalqlar madaniyati tarixida.",
      },
      {
        id: "tref-18",
        title: "Ichan qal’a YuNESKO ro‘yxatiga kirishi",
        expression: "1990-yil (Xiva)",
        explanation: "Markaziy Osiyoda YuNESKO Butunjahon merosiga kiritilgan ilk yodgorlik.",
        usage: "Madaniy meros va turizm tarixida.",
      },
      {
        id: "tref-19",
        title: "Minorai Kalon qurilishi",
        expression: "1127-yil (Buxoro, Arslonxon)",
        explanation:
          "Qoraxoniylar davri muhandislik va me’morchilik mo‘jizasi (balandligi 46.5 m).",
        usage: "O‘rta asrlar me’morchiligi tarixida.",
      },
      {
        id: "tref-20",
        title: "Shayboniylar davlati boshlanishi",
        expression: "1500-yil (Muhammad Shayboniyxon)",
        explanation: "Movarounnahrda Shayboniylar sulolasi hukmronligining boshlanishi.",
        usage: "XVI asr O‘rta Osiyo tarixida.",
      },
    ],
    exercises: [
      {
        id: "tex-1",
        title: "Xronologik ketma-ketlikni tuzish",
        level: "Asosiy",
        question:
          "Quyidagi voqealarni yuz bergan sanasi bo‘yicha eng qadimgisidan boshlab tartiblang: A) Xorazm Ma’mun akademiyasi; B) Spitamen qo‘zg‘oloni; C) Amir Temurning hokimiyatga kelishi; D) O‘zbekiston Konstitutsiyasi qabul qilinishi.",
        hint: "Mil. avv. IV asr → XI asr boshi → XIV asr → XX asr oxiri.",
        solution:
          "To‘g‘ri tartib: B (mil. avv. 329-yil) → A (1004-yil) → C (1370-yil) → D (1992-yil 8-dekabr).",
      },
      {
        id: "tex-2",
        title: "Alloma va asarni moslashtirish",
        level: "O‘rta",
        question:
          "1) Al-Xorazmiy, 2) Mirzo Ulug‘bek, 3) Ibn Sino, 4) Alisher Navoiy — ularning asosiy asarlarini ayting.",
        hint: "Matematika, astronomiya, tibbiyot va adabiyot sohalarini eslang.",
        solution:
          "1) Al-Xorazmiy — «Al-jabr val-muqobala»; 2) Ulug‘bek — «Ziji jadidi Ko‘ragoniy»; 3) Ibn Sino — «Tib qonunlari»; 4) Navoiy — «Xamsa».",
      },
      {
        id: "tex-3",
        title: "Davlat ramzlari sanalari",
        level: "Asosiy",
        question:
          "O‘zbekiston Respublikasi Davlat bayrog‘i, gerbi va madhiyasi qaysi sanalarda qabul qilingan?",
        hint: "Bayroq 1991-yil kuzda, gerb va madhiya 1992-yilda qabul qilingan.",
        solution:
          "Davlat bayrog‘i — 1991-yil 18-noyabr; Davlat gerbi — 1992-yil 2-iyul; Davlat madhiyasi — 1992-yil 10-dekabr.",
      },
      {
        id: "tex-4",
        title: "Jadidchilik g‘oyalarini tahlil qilish",
        level: "O‘rta",
        question:
          "Nima uchun XIX asr oxiri – XX asr boshlarida jadidlar aynan «usuli jadid» maktablarini ochishni birinchi o‘ringa qo‘ydilar?",
        hint: "Jamiyat taraqqiyoti va mustaqillik uchun qanday kadrlar kerak edi?",
        solution:
          "Chunki jadidlar dunyoviy fanlar, xorijiy tillar va zamonaviy savodxonlikni o‘qitmasdan turib jamiyatni yangilab hamda milliy ozodlikka erishib bo‘lmasligini teran anglagan edilar.",
      },
      {
        id: "tex-5",
        title: "Buyuk geografik kashfiyotlar xronologiyasi",
        level: "O‘rta",
        question:
          "Kolumb, Vasko da Gama va Magellan ekspeditsiyalari qaysi yillarda va qayerga uyushtirilganini tartib bilan yozing.",
        hint: "1492 → 1498 → 1519–1522 yillar ketma-ketligini eslang.",
        solution:
          "1) X. Kolumb (1492) — Amerika kashf etildi; 2) Vasko da Gama (1498) — Afrika janubi orqali Hindistonga dengiz yo‘li; 3) F. Magellan (1519–1522) — ilk dunyo bo‘ylab dengiz sayohati.",
      },
      {
        id: "tex-6",
        title: "Birinchi va Ikkinchi Renessansni solishtirish",
        level: "Chuqurlashtirilgan",
        question:
          "Markaziy Osiyoda Birinchi (IX–XII asrlar) va Ikkinchi (XIV–XV asrlar) Renessansning kamida uchta yirik allomasini ayting.",
        hint: "Matematika, tibbiyot, astronomiya va adabiyot namoyandalarini ajrating.",
        solution:
          "Birinchi Renessans: Al-Xorazmiy, Abu Rayhon Beruniy, Abu Ali ibn Sino (shuningdek Al-Farg‘oniy, Imom Buxoriy). Ikkinchi Renessans: Mirzo Ulug‘bek, Alisher Navoiy, Ali Qushchi (shuningdek Qozizoda Rumiy, Kamoliddin Behzod).",
      },
      {
        id: "tex-7",
        title: "Yildan asrni aniqlash",
        level: "Asosiy",
        question:
          "Quyidagi yillar qaysi asrga tegishli: 622-yil, 1004-yil, 1370-yil, 1991-yil, 2000-yil?",
        hint: "Oxirgi ikki raqam 00 dan katta bo‘lsa, yuzlikka 1 qo‘shiladi.",
        solution:
          "622 — VII asr; 1004 — XI asr; 1370 — XIV asr; 1991 — XX asr; 2000 — XX asr (asrning so‘nggi yili).",
      },
      {
        id: "tex-8",
        title: "YuNESKO ro‘yxatidagi shaharlar",
        level: "O‘rta",
        question:
          "O‘zbekistonning qaysi 4 ta tarixiy shahri (majmuasi) YuNESKO Butunjahon merosi ro‘yxatiga kiritilgan?",
        hint: "Xorazm, Buxoro, Qashqadaryo va Samarqand viloyatlaridagi tarixiy markazlar.",
        solution:
          "1) Ichan qal’a (Xiva, 1990); 2) Buxoro tarixiy markazi (1993); 3) Shahrisabz tarixiy markazi (2000); 4) Samarqand — madaniyatlar chorrahasi (2001).",
      },
      {
        id: "tex-9",
        title: "Qadimgi sivilizatsiya ixtirolarini moslash",
        level: "Asosiy",
        question:
          "1) Qadimgi Misr, 2) Shumer, 3) Qadimgi Hindiston, 4) Qadimgi Xitoy — ularning asosiy kashfiyotlarini ko‘rsating.",
        hint: "Papirus, mixxat, nol raqami va kompas/qog‘oz.",
        solution:
          "1) Misr — papirus va 365 kunlik taqvim; 2) Shumer — mixxat va 60 lik sanoq; 3) Hindiston — shaxmat va o‘nlik raqamlar; 4) Xitoy — qog‘oz, kompas, ipak.",
      },
      {
        id: "tex-10",
        title: "Xonliklar asoschilarini aniqlash",
        level: "O‘rta",
        question:
          "Xiva (1512), Qo‘qon (1709) xonliklari va Buxoroda Mang‘itlar sulolasi (1756) asoschilari kimlar edi?",
        hint: "Ilbarsxon, Shohruxbiy va Muhammad Rahimbiy.",
        solution:
          "Xiva xonligi — Ilbarsxon; Qo‘qon xonligi — Shohruxbiy; Buxoroda Mang‘itlar sulolasi (amirlik) — Muhammad Rahimbiy.",
      },
    ],
    quizzes: [
      {
        id: "tq-1",
        question: "Amir Temur qaysi yili Movarounnahrda markazlashgan davlatga asos soldi?",
        options: ["1336-yil", "1370-yil", "1405-yil", "1409-yil"],
        answer: 1,
        explanation:
          "1370-yil Balx qurultoyida Amir Temur Movarounnahrning oliy hukmdori etib saylandi.",
      },
      {
        id: "tq-2",
        question: "«Al-jabr val-muqobala» asari muallifi kim?",
        options: ["Abu Rayhon Beruniy", "Ahmad al-Farg‘oniy", "Muhammad al-Xorazmiy", "Ibn Sino"],
        answer: 2,
        explanation: "Algebra faniga asos solgan ushbu asarni Muhammad al-Xorazmiy yozgan.",
      },
      {
        id: "tq-3",
        question: "O‘zbekiston Respublikasi qachon BMTga to‘la huquqli a’zo bo‘ldi?",
        options: ["1991-yil 31-avgust", "1992-yil 2-mart", "1992-yil 8-dekabr", "1994-yil 1-iyul"],
        answer: 1,
        explanation: "1992-yil 2-martda BMT binosi oldida O‘zbekiston bayrog‘i hilpiradi.",
      },
      {
        id: "tq-4",
        question: "Zardushtiylikning muqaddas kitobi va qadimgi yozma manbasi qaysi?",
        options: ["Rigveda", "Avesto", "Ziji Ko‘ragoniy", "Qutadg‘u bilig"],
        answer: 1,
        explanation:
          "Avesto Markaziy Osiyo xalqlarining eng qadimgi yozma yodgorliklaridan biridir.",
      },
      {
        id: "tq-5",
        question: "Birinchi o‘zbek milliy dramasi «Padarkush»ning muallifi kim?",
        options: [
          "Abdulla Qodiriy",
          "Mahmudxo‘ja Behbudiy",
          "Abdulhamid Cho‘lpon",
          "Abdulla Avloniy",
        ],
        answer: 1,
        explanation:
          "Mahmudxo‘ja Behbudiy 1911-yilda yozgan «Padarkush» asari bilan o‘zbek dramaturgiyasiga asos soldi.",
      },
      {
        id: "tq-6",
        question: "Samarqandda rasadxona qurdirib, 1018 ta yulduz jadvalini tuzgan alloma kim?",
        options: ["Al-Farg‘oniy", "Mirzo Ulug‘bek", "Ali Qushchi", "Qozizoda Rumiy"],
        answer: 1,
        explanation:
          "Mirzo Ulug‘bek boshchiligida tuzilgan «Ziji jadidi Ko‘ragoniy» jahon astronomiyasining nodir asaridir.",
      },
      {
        id: "tq-7",
        question: "O‘zbekiston Respublikasi Konstitutsiyasi qachon qabul qilingan?",
        options: [
          "1991-yil 18-noyabr",
          "1992-yil 2-iyul",
          "1992-yil 8-dekabr",
          "1993-yil 1-sentabr",
        ],
        answer: 2,
        explanation: "1992-yil 8-dekabr — O‘zbekiston Respublikasining Konstitutsiyasi kuni.",
      },
      {
        id: "tq-8",
        question: "Buyuk Ipak yo‘liga taxminan qaysi davrda asos solingan?",
        options: ["Mil. avv. X asrda", "Mil. avv. II asrda", "Milodiy V asrda", "Milodiy X asrda"],
        answer: 1,
        explanation:
          "Buyuk Ipak yo‘li miloddan avvalgi II asrda (mil. avv. 138-yildan boshlab) shakllangan.",
      },
      {
        id: "tq-9",
        question:
          "Yerning sharsimon ekanligini ilk dunyo bo‘ylab sayohatda amalda isbotlagan ekspeditsiya kimga tegishli?",
        options: ["Xristofor Kolumb", "Vasko da Gama", "Fernan Magellan", "Marko Polo"],
        answer: 2,
        explanation:
          "Fernan Magellan boshchiligidagi ekspeditsiya (1519–1522) ilk bor dunyoni aylanib chiqqan.",
      },
      {
        id: "tq-10",
        question: "Birlashgan Millatlar Tashkiloti (BMT) qachon tashkil topgan?",
        options: [
          "1918-yil 11-noyabr",
          "1945-yil 24-oktabr",
          "1948-yil 10-dekabr",
          "1991-yil 31-avgust",
        ],
        answer: 1,
        explanation:
          "1945-yil 24-oktabrda BMT Nizomi kuchga kirdi va bu sana BMT kuni sifatida nishonlanadi.",
      },
      {
        id: "tq-11",
        question: "Birinchi Olimpiya o‘yinlari Qadimgi Yunonistonda qaysi yilda o‘tkazilgan?",
        options: ["Mil. avv. 776-yil", "Mil. avv. 490-yil", "Mil. avv. 334-yil", "Milodiy 100-yil"],
        answer: 0,
        explanation:
          "Qadimgi Yunonistonda ilk Olimpiya o‘yinlari miloddan avvalgi 776-yilda Olimpiya shahrida o‘tkazilgan.",
      },
      {
        id: "tq-12",
        question:
          "O‘zbekiston Respublikasining milliy valyutasi — so‘m qachon muomalaga kiritilgan?",
        options: [
          "1991-yil 1-sentabr",
          "1992-yil 8-dekabr",
          "1994-yil 1-iyul",
          "1996-yil 1-yanvar",
        ],
        answer: 2,
        explanation:
          "1994-yil 1-iyuldan O‘zbekistonning to‘laqonli milliy valyutasi — so‘m muomalaga kiritildi.",
      },
      {
        id: "tq-13",
        question: "«Devonu lug‘otit-turk» asarining muallifi kim?",
        options: ["Yusuf Xos Hojib", "Mahmud Koshg‘ariy", "Ahmad Yugnakiy", "Alisher Navoiy"],
        answer: 1,
        explanation:
          "XI asrda Mahmud Koshg‘ariy turkiy tillar qomusini — «Devonu lug‘otit-turk»ni yaratdi.",
      },
      {
        id: "tq-14",
        question:
          "O‘zbekistondan birinchi bo‘lib YuNESKO Butunjahon merosi ro‘yxatiga kiritilgan obida qaysi?",
        options: ["Registon ansambli", "Buxoro arki", "Ichan qal’a (Xiva)", "Oqsaroy"],
        answer: 2,
        explanation:
          "1990-yilda Xivadagi Ichan qal’a Markaziy Osiyoda birinchi bo‘lib YuNESKO ro‘yxatiga kirdi.",
      },
      {
        id: "tq-15",
        question: "Qadimgi dunyoda «mixxat» yozuvi va 60 lik sanoq tizimini kimlar ixtiro qilgan?",
        options: ["Misrliklar", "Shumerliklar", "Finikiyaliklar", "Yunonlar"],
        answer: 1,
        explanation:
          "Mesopotamiyadagi shumerliklar sopol taxtachalarga mixxat yozgan va soatni 60 daqiqaga bo‘lgan.",
      },
      {
        id: "tq-16",
        question:
          "Jaloliddin Manguberdi mo‘g‘ullar ustidan yirik g‘alaba qozongan mashhur jang qaysi?",
        options: ["Parvon jangi (1221)", "Jangoy jangi", "Dandanakon jangi", "Anqara jangi"],
        answer: 0,
        explanation:
          "1221-yilda Parvon yaqinida Jaloliddin Manguberdi qo‘shini mo‘g‘ullarning yirik lashkarini tor-mor etgan.",
      },
    ],
    glossary: [
      {
        term: "Renessans",
        definition:
          "«Uyg‘onish davri» — ilm-fan, san’at, adabiyot va ma’naviyatning mislsiz yuksalish davri.",
        example: "IX–XII asrlar Birinchi, XIV–XV asrlar Ikkinchi Sharq Renessansi deb ataladi.",
      },
      {
        term: "Xronologiya",
        definition:
          "Tarixiy voqealarning yuz berish vaqti va ketma-ketligini o‘rganuvchi yordamchi fan.",
        example: "Miloddan avvalgi va milodiy sanalarni hisoblash.",
      },
      {
        term: "Arxeologiya",
        definition:
          "Moddiy manbalar (qazilma yodgorliklar, sopol, tangalar) asosida o‘tmishni o‘rganuvchi fan.",
        example: "Afrosiyob va Varaxsha shaharlaridagi qazishmalar.",
      },
      {
        term: "Buyuk Ipak yo‘li",
        definition:
          "Qadimgi va o‘rta asrlarda Xitoyni Markaziy Osiyo orqali Yevropa bilan bog‘lagan savdo yo‘li.",
        example: "Samarqand va Buxoro bu yo‘ldagi yirik savdo markazlari bo‘lgan.",
      },
      {
        term: "Tuzukot",
        definition: "Davlat boshqaruvi qoidalari, qonun-qoidalar va harbiy tartiblar majmuasi.",
        example: "«Temur tuzuklari» asari.",
      },
      {
        term: "Jadidchilik",
        definition:
          "XIX asr oxiri – XX asr boshlarida maorif, matbuot va ijtimoiy islohotlar uchun kurashgan harakat.",
        example: "Jadidlar yangi usul maktablarida dunyoviy fanlarni o‘qitdilar.",
      },
      {
        term: "Suverenitet",
        definition: "Davlatning ichki va tashqi siyosatda to‘liq mustaqilligi va ustuvorligi.",
        example: "1991-yilda O‘zbekiston o‘z davlat suverenitetini qo‘lga kiritdi.",
      },
      {
        term: "Konstitutsiya",
        definition: "Davlatning oliy yuridik kuchga ega bo‘lgan Asosiy Qonuni.",
        example: "Fuqarolarning asosiy huquq va burchlarini belgilaydi.",
      },
      {
        term: "Sivilizatsiya",
        definition:
          "Insoniyat jamiyatining yozuv, shaharsozlik, davlat va madaniyatga ega yuksak bosqichi.",
        example: "Qadimgi Misr va Movarounnahr sivilizatsiyalari.",
      },
      {
        term: "Numizmatika",
        definition: "Qadimgi tangalar va pul muomalasi tarixini o‘rganuvchi fan.",
        example: "Kushon va Temuriylar davri tangalarini tahlil qilish.",
      },
      {
        term: "Demokratiya",
        definition:
          "Xalq hokimiyati — fuqarolar davlat boshqaruvida bevosita yoki vakillari orqali qatnashadigan siyosiy tuzum.",
        example: "Qadimgi Afina demokratiyasi va zamonaviy saylov tizimlari.",
      },
      {
        term: "Humanizm",
        definition:
          "Insonni, uning qadr-qimmati, erkinligi va ma’naviy kamolotini oliy qadriyat deb biluvchi dunyoqarash.",
        example:
          "Alisher Navoiy asarlarida va Yevropa Uyg‘onish davrida humanizm markaziy o‘rinda turadi.",
      },
      {
        term: "Diplomatiya",
        definition:
          "Davlatlar va xalqaro tashkilotlar o‘rtasida tinch muzokaralar hamda rasmiy aloqalar olib borish san’ati.",
        example: "Amir Temur va Yevropa qirollari o‘rtasidagi elchilik maktublari.",
      },
      {
        term: "Referendum",
        definition:
          "Davlat va jamiyat hayotining eng muhim masalalari bo‘yicha o‘tkaziladigan umumxalq ovoz berishi.",
        example:
          "2023-yil 30-aprelda yangilangan Konstitutsiya bo‘yicha umumxalq referendumi o‘tkazildi.",
      },
      {
        term: "Protektorat",
        definition:
          "Bir davlatning tashqi siyosati va mudofaasi boshqa kuchli davlat nazoratiga o‘tgan qaramlik shakli.",
        example:
          "XIX asr oxirida Buxoro amirligi va Xiva xonligi Rossiya imperiyasi protektoratiga aylangan.",
      },
      {
        term: "Muarrix",
        definition: "Tarixiy voqealarni o‘rganib, yozib qoldiruvchi tarixchi olim, solnomachi.",
        example: "Sharafiddin Ali Yazdiy («Zafarnoma» muallifi) mashhur muarrixdir.",
      },
      {
        term: "Sardoba",
        definition:
          "Qadimgi savdo yo‘llari va cho‘l hududlarida yomg‘ir hamda qor suvini saqlash uchun qurilgan gumbazli suv ombori.",
        example: "Malikcho‘l va Qarshi cho‘lidagi tarixiy sardobalar.",
      },
      {
        term: "Iyeroglif",
        definition: "So‘z yoki bo‘g‘inni anglatuvchi qadimgi tasviriy yozuv belgisi.",
        example: "Qadimgi Misr ehromlari va maqbaralaridagi bitiklar.",
      },
      {
        term: "Polis",
        definition:
          "Qadimgi Yunonistonda o‘z qonunlari va boshqaruviga ega mustaqil shahar-davlat.",
        example: "Afina va Sparta eng mashhur yunon polislari bo‘lgan.",
      },
      {
        term: "Maorif",
        definition: "Aholi orasida bilim, madaniyat, maktab va savodxonlikni yoyish tizimi.",
        example: "Jadidlar xalq maorifini yuksaltirishni bosh maqsad deb bilganlar.",
      },
    ],
    flashcards: [
      {
        id: "tfc-1",
        front: "Spitamen qo‘zg‘oloni qachon bo‘lgan?",
        back: "Mil. avv. 329–327-yillar (Aleksandr Makedonskiyga qarshi)",
      },
      {
        id: "tfc-2",
        front: "Buyuk Ipak yo‘liga asos solingan davr?",
        back: "Mil. avv. II asr (mil. avv. 138-yildan boshlab)",
      },
      {
        id: "tfc-3",
        front: "Xorazm Ma’mun akademiyasi faoliyat yillari?",
        back: "1004–1017-yillar (Urganchda, Beruniy va Ibn Sino davri)",
      },
      {
        id: "tfc-4",
        front: "Amir Temur qachon Movarounnahr amiri etib saylangan?",
        back: "1370-yil (Balx qurultoyida)",
      },
      {
        id: "tfc-5",
        front: "«Al-jabr val-muqobala» va «Tib qonunlari» mualliflari?",
        back: "Muhammad al-Xorazmiy va Abu Ali ibn Sino",
      },
      {
        id: "tfc-6",
        front: "Mirzo Ulug‘bekning mashhur astronomik asari?",
        back: "«Ziji jadidi Ko‘ragoniy» (1018 ta yulduz jadvali)",
      },
      {
        id: "tfc-7",
        front: "«Qutadg‘u bilig» va «Devonu lug‘otit-turk» mualliflari?",
        back: "Yusuf Xos Hojib (1069) va Mahmud Koshg‘ariy (1072)",
      },
      {
        id: "tfc-8",
        front: "Birinchi o‘zbek dramasi «Padarkush» muallifi?",
        back: "Mahmudxo‘ja Behbudiy (1911-yil)",
      },
      {
        id: "tfc-9",
        front: "O‘zbekiston Mustaqilligi va BMTga a’zolik sanalari?",
        back: "Mustaqillik: 1991-yil 31-avgust; BMT: 1992-yil 2-mart",
      },
      {
        id: "tfc-10",
        front: "Davlat bayrog‘i, gerbi va madhiyasi sanalari?",
        back: "Bayroq: 18.11.1991; Gerb: 02.07.1992; Madhiya: 10.12.1992",
      },
      {
        id: "tfc-11",
        front: "Konstitutsiya va Milliy valyuta (So‘m) sanalari?",
        back: "Konstitutsiya: 1992-yil 8-dekabr (yangilangani: 30.04.2023); So‘m: 1994-yil 1-iyul",
      },
      {
        id: "tfc-12",
        front: "YuNESKO ro‘yxatidagi O‘zbekistonning 4 ta tarixiy shahri?",
        back: "Xiva (Ichan qal’a, 1990), Buxoro (1993), Shahrisabz (2000), Samarqand (2001)",
      },
      { id: "tfc-13", front: "BMT tashkil topgan aniq sana?", back: "1945-yil 24-oktabr" },
      {
        id: "tfc-14",
        front: "Ilk Olimpiya o‘yinlari qachon va qayerda o‘tkazilgan?",
        back: "Mil. avv. 776-yil, Qadimgi Yunoniston (Olimpiya)",
      },
    ],
  },
};
