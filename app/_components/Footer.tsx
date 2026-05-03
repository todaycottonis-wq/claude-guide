import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12 flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-10">
          <div>
            <p className="font-bold tracking-tight text-foreground">
              Claude Guide
            </p>
            <p className="mt-1.5 text-sm text-subtle max-w-md leading-relaxed">
              한국어 입문 가이드. 비공식 학습 자료이며, 정식 사양은{" "}
              <a
                href="https://docs.claude.com"
                className="underline"
                target="_blank"
                rel="noreferrer"
              >
                docs.claude.com
              </a>
              을 따릅니다.
            </p>
          </div>
          <nav className="ml-auto flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
            <Link href="/claude" className="hover:text-foreground">
              1. 클로드
            </Link>
            <Link href="/prompting" className="hover:text-foreground">
              2. 잘 부탁하기
            </Link>
            <Link href="/claude-code" className="hover:text-foreground">
              3. 클로드 코드
            </Link>
            <Link href="/agents" className="hover:text-foreground">
              4. 에이전트
            </Link>
            <Link href="/skills" className="hover:text-foreground">
              5. 스킬
            </Link>
            <Link href="/tips" className="hover:text-foreground">
              6. 팁
            </Link>
            <Link href="/companions" className="hover:text-foreground">
              7. 친구들
            </Link>
          </nav>
        </div>
        <div className="flex items-center justify-between text-xs text-subtle border-t border-border pt-6">
          <span>© Claude Guide</span>
          <Link href="/" className="hover:text-foreground">
            맨 위로 ↑
          </Link>
        </div>
      </div>
    </footer>
  );
}
