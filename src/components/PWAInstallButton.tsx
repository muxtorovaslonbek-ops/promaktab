import { useState, useEffect } from "react";
import {
  Download,
  Smartphone,
  Share,
  PlusSquare,
  X,
  WifiOff,
  MonitorSmartphone,
} from "lucide-react";
import { usePWAInstall, useOnlineStatus } from "@/hooks/usePWAInstall";
import logo from "@/assets/logo.png";

export function PWAInstallButton({ variant = "sidebar" }: { variant?: "sidebar" | "mobileIcon" }) {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showGuide, setShowGuide] = useState(false);

  useEffect(() => {
    if (!showGuide) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowGuide(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [showGuide]);

  if (isInstalled) {
    return null;
  }

  const handleClick = async () => {
    if (isInstallable) {
      await install();
      return;
    }
    setShowGuide(true);
  };

  return (
    <>
      {variant === "mobileIcon" ? (
        <button
          type="button"
          onClick={() => void handleClick()}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-background text-brand shadow-soft active:scale-95 cursor-pointer"
          aria-label="Ilovani o‘rnatish"
          title="Ilovani qurilmaga o‘rnatish"
        >
          <Download className="h-5 w-5" />
        </button>
      ) : (
        <button
          type="button"
          onClick={() => void handleClick()}
          className="mt-2.5 flex w-full items-center justify-center gap-2 rounded-xl border border-primary-foreground/25 bg-primary-foreground/15 px-3 py-2 text-xs font-semibold text-primary-foreground transition hover:bg-primary-foreground/25 cursor-pointer"
          title="Platformani qurilmaga ilova sifatida o‘rnatish"
        >
          <Download className="h-4 w-4 shrink-0" />
          <span>Ilovani o‘rnatish</span>
        </button>
      )}

      {showGuide && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Ilovani o‘rnatish yo‘riqnomasi"
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
          onClick={() => setShowGuide(false)}
        >
          <div
            className="w-full max-w-md rounded-3xl border border-border bg-white p-6 text-ink shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <img src={logo} alt="8-maktab" className="h-12 w-12 shrink-0 rounded-2xl" />
                <div>
                  <h3 className="text-lg font-extrabold leading-tight">Ilovani o‘rnatish</h3>
                  <p className="text-xs text-muted-foreground">Navoiy shahar 8-maktab (PWA)</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowGuide(false)}
                className="rounded-full p-1.5 text-muted-foreground transition hover:bg-black/5 hover:text-ink cursor-pointer"
                aria-label="Yopish"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {isIOS ? (
              <div className="mt-5 space-y-3 text-sm text-foreground">
                <p className="text-xs font-medium text-muted-foreground">
                  iPhone yoki iPad (Safari) qurilmasiga ilova sifatida o‘rnatish uchun quyidagi
                  qadamlarni bajaring:
                </p>
                <div className="flex items-start gap-3 rounded-2xl border border-border bg-muted/40 p-3.5">
                  <Share className="mt-0.5 h-5 w-5 shrink-0 text-indigo-600" />
                  <div>
                    <p className="font-bold text-xs">1. “Ulashish” (Share) tugmasini bosing</p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Safari brauzerining pastki yoki yuqori panelidagi ulashish belgisini tanlang.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-border bg-muted/40 p-3.5">
                  <PlusSquare className="mt-0.5 h-5 w-5 shrink-0 text-indigo-600" />
                  <div>
                    <p className="font-bold text-xs">
                      2. “Bosh ekranga qo‘shish” (Add to Home Screen)
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Ro‘yxatdan shu bandni tanlab, yuqori o‘ng burchakdan “Qo‘shish” (Add) ni
                      bosing.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="mt-5 space-y-3 text-sm text-foreground">
                <p className="text-xs font-medium text-muted-foreground">
                  Platformani telefon yoki kompyuteringizga alohida ilova sifatida o‘rnatish uchun:
                </p>
                <div className="flex items-start gap-3 rounded-2xl border border-border bg-muted/40 p-3.5">
                  <MonitorSmartphone className="mt-0.5 h-5 w-5 shrink-0 text-indigo-600" />
                  <div>
                    <p className="font-bold text-xs">Kompyuterda (Chrome / Edge)</p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Manzil satrining o‘ng tomonidagi <strong>O‘rnatish (Install)</strong>{" "}
                      belgisini yoki brauzer menyusidan <strong>“Ilova sifatida o‘rnatish”</strong>{" "}
                      bandini bosing.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-border bg-muted/40 p-3.5">
                  <Smartphone className="mt-0.5 h-5 w-5 shrink-0 text-indigo-600" />
                  <div>
                    <p className="font-bold text-xs">Android telefonda (Chrome)</p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Brauzerning yuqori o‘ng burchagidagi <strong>⋮</strong> menyusini oching va{" "}
                      <strong>“Bosh ekranga qo‘shish” / “Ilovani o‘rnatish”</strong> ni tanlang.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <button
              type="button"
              onClick={() => setShowGuide(false)}
              className="mt-5 w-full rounded-2xl bg-brand py-2.5 text-sm font-bold text-primary-foreground shadow-soft transition hover:opacity-95 cursor-pointer"
            >
              Tushunarli
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export function OfflineIndicator() {
  const isOnline = useOnlineStatus();

  if (isOnline) return null;

  return (
    <div className="fixed bottom-4 left-4 z-[80] flex items-center gap-2 rounded-xl bg-amber-600 px-3.5 py-2 text-xs font-bold text-white shadow-lg">
      <WifiOff className="h-4 w-4 shrink-0" />
      <span>Oflayn rejim — keshlangan ma’lumotlar ishlatilmoqda</span>
    </div>
  );
}
