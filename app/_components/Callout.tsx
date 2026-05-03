import type { ReactNode } from "react";

type Tone = "tip" | "warn" | "note" | "good" | "bad";

const styles: Record<
  Tone,
  { dot: string; label: string; tag: string }
> = {
  tip: {
    dot: "bg-accent",
    label: "text-accent",
    tag: "TIP",
  },
  warn: {
    dot: "bg-rose-500",
    label: "text-rose-700",
    tag: "주의",
  },
  note: {
    dot: "bg-stone-400",
    label: "text-muted",
    tag: "NOTE",
  },
  good: {
    dot: "bg-emerald-500",
    label: "text-emerald-700",
    tag: "GOOD",
  },
  bad: {
    dot: "bg-rose-500",
    label: "text-rose-700",
    tag: "BAD",
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
    <aside className="my-7 not-prose rounded-xl border border-border bg-background-alt px-5 py-4">
      <div className="flex items-center gap-2">
        <span className={`block h-1.5 w-1.5 rounded-full ${s.dot}`} />
        <p
          className={`text-[11px] font-bold tracking-[0.18em] uppercase ${s.label}`}
        >
          {title ?? s.tag}
        </p>
      </div>
      <div className="mt-2 text-[15px] leading-[1.75] text-foreground">
        {children}
      </div>
    </aside>
  );
}
