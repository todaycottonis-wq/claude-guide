import type { ReactNode } from "react";

type Props = {
  caption: string;
  hint?: string;
  src?: string;
  alt?: string;
  children?: ReactNode;
};

export default function CaptureSlot({
  caption,
  hint,
  src,
  alt,
  children,
}: Props) {
  return (
    <figure className="my-10 not-prose">
      <div className="rounded-xl border border-border bg-surface overflow-hidden">
        {src ? (
          <img src={src} alt={alt ?? caption} className="w-full h-auto block" />
        ) : children ? (
          <div className="bg-background-alt">{children}</div>
        ) : (
          <div className="aspect-[16/10] w-full bg-background-alt grid place-items-center">
            <div className="text-center px-6">
              <p className="text-xs font-bold tracking-[0.18em] uppercase text-subtle">
                Screenshot
              </p>
              <p className="mt-2 text-sm font-medium text-muted">
                여기에 실제 화면 캡처를 넣으세요
              </p>
              {hint ? (
                <p className="mt-2 text-xs text-subtle max-w-md mx-auto">
                  {hint}
                </p>
              ) : null}
            </div>
          </div>
        )}
      </div>
      <figcaption className="mt-3 text-[13px] text-subtle">
        {caption}
      </figcaption>
    </figure>
  );
}
