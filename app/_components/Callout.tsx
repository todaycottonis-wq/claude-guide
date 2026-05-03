import type { ReactNode } from "react";

type Tone = "tip" | "warn" | "note" | "good" | "bad";

const styles: Record<Tone, { bg: string; border: string; label: string; tag: string }> = {
  tip: {
    bg: "bg-accent-soft/60",
    border: "border-amber-300",
    label: "text-amber-700",
    tag: "꿀팁",
  },
  warn: {
    bg: "bg-rose-soft/60",
    border: "border-rose-300",
    label: "text-rose-700",
    tag: "조심!",
  },
  note: {
    bg: "bg-sky-soft/60",
    border: "border-sky-300",
    label: "text-sky-700",
    tag: "메모",
  },
  good: {
    bg: "bg-emerald-soft/60",
    border: "border-emerald-300",
    label: "text-emerald-700",
    tag: "이렇게 좋아요",
  },
  bad: {
    bg: "bg-rose-soft/60",
    border: "border-rose-300",
    label: "text-rose-700",
    tag: "이러면 헷갈려요",
  },
};

export default function Callout({
  tone = "tip",
  title,
  children,
}: {
  tone?: Tone;
  title?: string;
  children: ReactNode;
}) {
  const s = styles[tone];
  return (
    <aside
      className={`my-6 rounded-2xl border ${s.border} ${s.bg} px-5 py-4 not-prose`}
    >
      <p className={`text-xs font-bold uppercase tracking-wider ${s.label}`}>
        {title ?? s.tag}
      </p>
      <div className="mt-1 text-[15px] leading-relaxed text-foreground">
        {children}
      </div>
    </aside>
  );
}
