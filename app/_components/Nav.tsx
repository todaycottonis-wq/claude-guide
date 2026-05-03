import Link from "next/link";

const chapters = [
  { href: "/claude", label: "1. 클로드란?" },
  { href: "/prompting", label: "2. 잘 부탁하기" },
  { href: "/claude-code", label: "3. 클로드 코드" },
  { href: "/agents", label: "4. 에이전트" },
  { href: "/skills", label: "5. 스킬" },
  { href: "/tips", label: "6. 팁 모음" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-background/85 border-b border-border">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-3 flex items-center gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold tracking-tight text-foreground"
        >
          <span
            aria-hidden
            className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-accent text-white text-sm font-bold"
          >
            C
          </span>
          <span className="hidden sm:inline">클로드 가이드북</span>
        </Link>
        <nav className="ml-auto flex flex-wrap gap-1 text-[13px] sm:text-sm">
          {chapters.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="px-2.5 py-1.5 rounded-md text-muted hover:text-foreground hover:bg-accent-soft/60 transition-colors"
            >
              {c.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
