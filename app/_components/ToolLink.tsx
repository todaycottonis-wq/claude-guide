type Props = {
  name: string;
  url: string;
  domain: string;
  blurb: string;
  /** simple-icons.org slug (예: "github", "vercel") */
  iconSlug?: string;
  /** simple-icons 색상 hex(샵 없이). 생략하면 검정 */
  iconColor?: string;
};

export default function ToolLink({
  name,
  url,
  domain,
  blurb,
  iconSlug,
  iconColor = "0a0a0a",
}: Props) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer noopener"
      className="not-prose group my-6 flex items-center gap-4 rounded-xl border border-border bg-surface p-4 sm:p-5 hover:border-foreground hover:bg-background-alt transition-colors"
    >
      <span className="shrink-0 grid place-items-center w-12 h-12 rounded-lg bg-background-alt border border-border overflow-hidden">
        {iconSlug ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={`https://cdn.simpleicons.org/${iconSlug}/${iconColor}`}
            alt={`${name} 로고`}
            width={26}
            height={26}
            loading="lazy"
          />
        ) : (
          <span className="block h-2 w-2 rounded-full bg-foreground" />
        )}
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline gap-2 flex-wrap">
          <span className="font-bold tracking-tight text-foreground">
            {name}
          </span>
          <span className="text-[13px] text-subtle font-mono group-hover:text-accent transition-colors">
            {domain} ↗
          </span>
        </div>
        <p className="mt-0.5 text-[13.5px] text-muted leading-relaxed">
          {blurb}
        </p>
      </div>
    </a>
  );
}
