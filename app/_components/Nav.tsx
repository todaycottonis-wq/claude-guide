import Link from "next/link";

const chapters = [
  { href: "/claude", label: "클로드" },
  { href: "/prompting", label: "잘 부탁하기" },
  { href: "/claude-code", label: "클로드 코드" },
  { href: "/agents", label: "에이전트" },
  { href: "/skills", label: "스킬" },
  { href: "/tips", label: "팁" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-background/85 border-b border-border">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-14 flex items-center gap-8">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-bold tracking-tight text-foreground"
        >
          <span
            aria-hidden
            className="block h-2 w-2 rounded-full bg-foreground"
          />
          <span className="text-[15px]">Claude Guide</span>
        </Link>
        <nav className="ml-auto hidden sm:flex items-center gap-1 text-[13.5px]">
          {chapters.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="px-3 py-1.5 text-muted hover:text-foreground transition-colors"
            >
              {c.label}
            </Link>
          ))}
        </nav>
        <details className="ml-auto sm:hidden relative">
          <summary className="list-none cursor-pointer text-sm text-muted px-2 py-1">
            메뉴
          </summary>
          <div className="absolute right-0 top-full mt-2 w-44 rounded-lg border border-border bg-surface shadow-sm overflow-hidden">
            {chapters.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="block px-4 py-2.5 text-sm hover:bg-background-alt"
              >
                {c.label}
              </Link>
            ))}
          </div>
        </details>
      </div>
    </header>
  );
}
