import Link from "next/link";

export const metadata = {
  title: "Sem ligação",
  robots: { index: false, follow: false },
};

export default function OfflinePage() {
  return (
    <div className="mx-auto flex min-h-[50dvh] max-w-lg flex-col items-center justify-center px-4 py-16 text-center">
      <p className="font-display text-xl font-bold text-white">
        Sem ligação à internet
      </p>
      <p className="mt-3 text-sm leading-relaxed text-slate-400">
        Liga o Wi‑Fi ou os dados móveis e volta a tentar. Algumas páginas
        podem estar disponíveis em cache.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-xl bg-accent px-6 text-sm font-bold uppercase tracking-wide text-pitch-950 shadow-glow-sm"
      >
        Voltar ao início
      </Link>
    </div>
  );
}
