import type { ReactNode } from "react";

type Props = {
  caption: string;
  hint?: string;
  src?: string;
  alt?: string;
  children?: ReactNode;
};

export default function CaptureSlot({ caption, hint, src, alt, children }: Props) {
  return (
    <figure className="my-8 not-prose">
      <div className="relative rounded-2xl border border-border bg-surface overflow-hidden shadow-[0_1px_0_0_rgba(0,0,0,0.03),0_8px_24px_-12px_rgba(0,0,0,0.12)]">
        {src ? (
          <img src={src} alt={alt ?? caption} className="w-full h-auto block" />
        ) : (
          <div className="aspect-[16/10] w-full bg-stone-50 grid place-items-center">
            {children ? (
              children
            ) : (
              <div className="text-center px-6">
                <p className="text-sm font-semibold text-stone-500">
                  📸 여기에 실제 화면 캡처를 넣으세요
                </p>
                {hint ? (
                  <p className="mt-2 text-xs text-stone-400 max-w-md mx-auto">
                    {hint}
                  </p>
                ) : null}
              </div>
            )}
          </div>
        )}
      </div>
      <figcaption className="mt-2 text-sm text-subtle text-center">
        {caption}
      </figcaption>
    </figure>
  );
}
