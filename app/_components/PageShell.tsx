import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  chapter: string;
  title: string;
  intro: string;
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
    <article className="max-w-3xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
      <p className="text-sm font-semibold tracking-wide text-accent uppercase">
        {chapter}
      </p>
      <h1 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight">
        {title}
      </h1>
      <p className="mt-4 text-lg text-muted leading-relaxed">{intro}</p>
      <div className="mt-10 prose-ko">{children}</div>
      <hr className="my-14 border-border" />
      <div className="flex flex-col sm:flex-row gap-3 justify-between">
        {prev ? (
          <Link
            href={prev.href}
            className="group flex-1 rounded-xl border border-border p-4 hover:border-accent transition-colors"
          >
            <p className="text-xs text-subtle">← 이전 장</p>
            <p className="mt-1 font-semibold group-hover:text-accent">
              {prev.label}
            </p>
          </Link>
        ) : (
          <div className="flex-1" />
        )}
        {next ? (
          <Link
            href={next.href}
            className="group flex-1 rounded-xl border border-border p-4 hover:border-accent transition-colors text-right"
          >
            <p className="text-xs text-subtle">다음 장 →</p>
            <p className="mt-1 font-semibold group-hover:text-accent">
              {next.label}
            </p>
          </Link>
        ) : (
          <div className="flex-1" />
        )}
      </div>
    </article>
  );
}
