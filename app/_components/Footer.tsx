import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface/60">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10 flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
        <p className="text-sm text-subtle">
          이 가이드는 비공식 학습 자료입니다. Claude·Claude Code의 정식 사양은{" "}
          <a
            href="https://docs.claude.com"
            className="underline text-sky"
            target="_blank"
            rel="noreferrer"
          >
            공식 문서
          </a>
          를 참고하세요.
        </p>
        <Link href="/" className="text-sm text-muted hover:text-foreground">
          ↑ 처음으로
        </Link>
      </div>
    </footer>
  );
}
