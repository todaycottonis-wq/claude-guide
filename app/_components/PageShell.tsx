import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  chapter: string;
  title: string;
  intro: ReactNode;
  prev?: { href: string; label: string };
  next?: { href: string; label: string };
  children: ReactNode;
};

export default function PageShell({
  chapter,
  title,
  intro,
  prev,
  next,
  children,
}: Props) {
  return (
    <article>
      {/* header band */}
      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 pt-16 sm:pt-24 pb-12">
          <div className="flex items-center gap-3 text-xs font-medium tracking-[0.18em] uppercase text-accent">
            <span className="block h-1 w-1 rounded-full bg-accent" />
            Chapter {chapter.replace(/[^0-9]/g, "")}
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-[-0.035em] leading-[1.08]">
            {title}
          </h1>
          <p className="mt-6 text-[17px] sm:text-lg text-muted leading-[1.75] max-w-2xl">
            {intro}
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
        <div className="prose-ko">{children}</div>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 gap-px bg-border border border-border rounded-xl overflow-hidden">
          {prev ? (
            <Link
              href={prev.href}
              className="group block bg-surface p-6 hover:bg-background-alt transition-colors"
            >
              <p className="text-xs tracking-[0.15em] uppercase text-subtle">
                이전
              </p>
              <p className="mt-2 font-bold tracking-tight group-hover:underline underline-offset-4">
                ← {prev.label}
              </p>
            </Link>
          ) : (
            <div className="bg-background-alt" />
          )}
          {next ? (
            <Link
              href={next.href}
              className="group block bg-surface p-6 hover:bg-background-alt transition-colors sm:text-right"
            >
              <p className="text-xs tracking-[0.15em] uppercase text-subtle">
                다음
              </p>
              <p className="mt-2 font-bold tracking-tight group-hover:underline underline-offset-4">
                {next.label} →
              </p>
            </Link>
          ) : (
            <div className="bg-background-alt" />
          )}
        </div>
      </div>
    </article>
  );
}
