import { useEffect } from "react";
import {
  ArrowLeft,
  X,
  Info,
  Globe,
  Bot,
  Users,
  BookOpen,
  BookMarked,
  Award,
  Sparkles,
  CheckCircle2,
  GraduationCap,
  UserCheck,
} from "lucide-react";
import logo from "@/assets/logo.png";

const features = [
  {
    icon: Globe,
    color: "text-indigo-600 bg-indigo-50",
    title: "9 ta xorijiy til",
    desc: "Ingliz, rus, koreys, nemis, turk, fransuz, arab, xitoy va yapon tillarini interaktiv darslar, lug‘at va talaffuz mashqlari orqali o‘rganish.",
  },
  {
    icon: Bot,
    color: "text-sky-600 bg-sky-50",
    title: "AI Ustoz bilan jonli suhbat",
    desc: "Har bir tilda sun’iy intellekt bilan suhbatlashish, o‘zbekcha tarjimasini ko‘rish, audio talaffuzni tinglash va mikrofon orqali mashq qilish.",
  },
  {
    icon: Users,
    color: "text-orange-600 bg-orange-50",
    title: "Maktab to‘garaklari",
    desc: "Robototexnika, IT Club, Matematika va Sport to‘garaklari bo‘yicha darslar, topshiriqlar va amaliy mashg‘ulotlar.",
  },
  {
    icon: BookMarked,
    color: "text-cyan-600 bg-cyan-50",
    title: "Asosiy maktab darslari",
    desc: "Matematika, Kimyo (118 elementli Davriy jadval bilan), Fizika, Biologiya va Tarix fanlaridan nazariy darslar, formulalar, interaktiv laboratoriyalar, fleshkartalar, yechimli mashqlar va testlar orqali bilimlarni mustahkamlash.",
  },
  {
    icon: BookOpen,
    color: "text-emerald-600 bg-emerald-50",
    title: "Elektron va audio kutubxona",
    desc: "Badiiy asarlar, darsliklar va audio kitoblarni platformaning o‘zida qulay tarzda o‘qish hamda tinglash imkoniyati.",
  },
  {
    icon: Award,
    color: "text-amber-600 bg-amber-50",
    title: "Sertifikatlar va natijalar",
    desc: "O‘quvchilarning kunlik maqsadlari, o‘zlashtirish ko‘rsatkichlari va erishgan yutuqlarini tasdiqlovchi sertifikatlar tizimi.",
  },
  {
    icon: Sparkles,
    color: "text-purple-600 bg-purple-50",
    title: "Moslashuvchan dizayn",
    desc: "Kompyuter va mobil qurilmalarda qulay ishlash hamda foydalanuvchi didiga mos orqa fon rangini tanlash imkoniyati.",
  },
];

const benefits = [
  "9 ta til va maktab to‘garaklarini yagona raqamli ta’lim muhitida jamlaydi.",
  "O‘quvchilarga mustaqil ravishda talaffuz, so‘z boyligi va suhbat ko‘nikmalarini oshirishga yordam beradi.",
  "Darsdan tashqari vaqtni samarali o‘tkazish, kitobxonlik va zamonaviy IT bilimlarini rivojlantirishga xizmat qiladi.",
  "O‘qituvchi va o‘quvchilar uchun qulay, tezkor va tushunarli interfeysga ega.",
];

export function AboutModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Biz haqimizda"
      className="fixed inset-0 z-50 flex h-full w-full flex-col overflow-y-auto bg-app font-sans text-ink animate-in fade-in duration-200"
    >
      {/* Yuqori to'liq oyna sarlavha paneli */}
      <header className="sticky top-0 z-30 border-b border-border bg-background/90 px-4 py-4 backdrop-blur-md sm:px-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="flex cursor-pointer items-center gap-2 rounded-xl border border-border bg-card px-3 py-2 text-sm font-semibold shadow-sm transition hover:bg-accent"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Bosh sahifa</span>
            </button>
            <div className="flex items-center gap-3">
              <img src={logo} alt="Navoiy shahar 8-maktab" className="h-10 w-10 shrink-0" />
              <div>
                <h2 className="flex items-center gap-1.5 text-sm font-extrabold tracking-tight sm:text-base">
                  <Info className="h-4 w-4 text-brand" />
                  Biz haqimizda
                </h2>
                <p className="text-xs text-muted-foreground">
                  Navoiy shahar 8-maktab raqamli ta’lim platformasi
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-border bg-card shadow-sm transition hover:bg-accent"
            aria-label="Yopish"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Asosiy to'liq ekran kontenti */}
      <main className="mx-auto w-full max-w-6xl flex-1 space-y-8 px-4 py-6 pb-16 sm:px-8 sm:py-10">
        {/* Hero Banner */}
        <section className="rounded-3xl hero-anim p-6 text-primary-foreground shadow-soft sm:p-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-bold backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Platforma haqida</span>
          </div>
          <h1 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-4xl">
            Navoiy shahar 8-maktab ta’lim platformasi
          </h1>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-white/90 sm:text-base">
            Ushbu zamonaviy ta’lim ilovasi o‘quvchilarning xorijiy tillarni o‘rganishi, AI Ustoz
            bilan jonli muloqot qilishi, maktab to‘garaklarida qatnashishi hamda elektron va audio
            kutubxonadan foydalanishi uchun yaratilgan yagona raqamli muhitdir.
          </p>
        </section>

        {/* Ilova xususiyatlari */}
        <section>
          <h3 className="text-base font-extrabold uppercase tracking-wide text-brand sm:text-lg">
            Ilova xususiyatlari
          </h3>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-3.5 rounded-2xl glass-card p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft"
              >
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${item.color}`}
                >
                  <item.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-base font-bold text-ink">{item.title}</h4>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Foydali taraflari */}
        <section className="rounded-3xl border border-indigo-200/80 bg-indigo-50/75 p-6 shadow-sm sm:p-8">
          <h3 className="text-base font-extrabold uppercase tracking-wide text-indigo-700 sm:text-lg">
            Ilovaning foydali taraflari
          </h3>
          <ul className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
            {benefits.map((b) => (
              <li
                key={b}
                className="flex items-start gap-2.5 rounded-2xl bg-white/80 p-4 text-sm text-ink shadow-xs"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Loyiha asoschisi, Informatika o'qituvchisi va Jamoa a'zosi */}
        <section className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-3xl border border-indigo-200 bg-gradient-to-br from-indigo-50/90 to-white p-6 shadow-soft sm:p-7">
            <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-indigo-700 sm:text-sm">
              <GraduationCap className="h-5 w-5" />
              Loyiha asoschisi
            </div>
            <p className="mt-3 text-xl font-extrabold text-ink sm:text-2xl">
              Umurzoqova Farangiz Turniyoz qizi
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              Navoiy viloyati, Navoiy shahri, 8-maktab o‘quvchisi
            </p>
            <div className="mt-4 flex flex-wrap gap-2.5 text-xs font-bold text-indigo-800 sm:text-sm">
              <span className="rounded-xl bg-indigo-100/90 px-3 py-1.5">2010-yil 27-fevral</span>
              <span className="rounded-xl bg-indigo-100/90 px-3 py-1.5">10-B sinf o‘quvchisi</span>
            </div>
          </div>

          <div className="rounded-3xl border border-sky-200 bg-gradient-to-br from-sky-50/90 to-white p-6 shadow-soft sm:p-7">
            <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-sky-700 sm:text-sm">
              <UserCheck className="h-5 w-5" />
              Informatika o‘qituvchisi
            </div>
            <p className="mt-3 text-xl font-extrabold text-ink sm:text-2xl">
              Djurayeva Gulnoza Muzaffarovna
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              Navoiy viloyati, Navoiy shahri, 8-maktab informatika o‘qituvchisi
            </p>
          </div>

          <div className="rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50/90 to-white p-6 shadow-soft sm:p-7">
            <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-emerald-700 sm:text-sm">
              <Users className="h-5 w-5" />
              Jamoa a’zosi
            </div>
            <p className="mt-3 text-xl font-extrabold text-ink sm:text-2xl">
              Urinboyeva Ziyoda Maqsudovna
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              Navoiy viloyati, Navoiy shahri, 8-maktab o‘quvchisi
            </p>
          </div>
        </section>

        <div className="flex justify-center pt-2">
          <button
            onClick={onClose}
            className="w-full max-w-sm cursor-pointer rounded-2xl bg-brand py-3 text-sm font-bold text-primary-foreground shadow-soft transition hover:opacity-95"
          >
            Bosh sahifaga qaytish
          </button>
        </div>
      </main>
    </div>
  );
}
