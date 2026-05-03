import type { ReactNode } from "react";

type WorkshopProps = {
  title: string;
  duration?: string;
  difficulty?: string;
  children: ReactNode;
};

export default function Workshop({
  title,
  duration,
  difficulty,
  children,
}: WorkshopProps) {
  return (
    <section className="not-prose my-12 rounded-2xl border border-foreground overflow-hidden bg-surface">
      <header className="bg-foreground text-background px-6 sm:px-7 py-5 flex items-start sm:items-center justify-between gap-4 flex-wrap">
        <div className="min-w-0">
          <p className="text-[10px] font-bold tracking-[0.28em] uppercase text-accent flex items-center gap-2">
            <span className="block h-1 w-1 rounded-full bg-accent" />
            Hands-on · 실습
          </p>
          <h3 className="mt-2 text-xl sm:text-2xl font-bold tracking-[-0.025em]">
            {title}
          </h3>
        </div>
        <div className="flex items-center gap-3 text-[11px] tracking-[0.18em] uppercase text-stone-400 font-medium">
          {duration && <span>⏱ {duration}</span>}
          {difficulty && <span>· {difficulty}</span>}
        </div>
      </header>
      <div className="p-6 sm:p-8">
        <div className="prose-ko">{children}</div>
      </div>
    </section>
  );
}

type StepProps = {
  n: string | number;
  title: string;
  children: ReactNode;
};

export function Step({ n, title, children }: StepProps) {
  return (
    <div className="not-prose my-7 first:mt-0">
      <p className="text-[11px] font-mono tabular-nums tracking-[0.2em] text-accent font-bold">
        STEP {String(n).padStart(2, "0")}
      </p>
      <h4 className="mt-1.5 text-[17px] sm:text-lg font-bold tracking-[-0.02em] text-foreground">
        {title}
      </h4>
      <div className="mt-3 prose-ko">{children}</div>
    </div>
  );
}
