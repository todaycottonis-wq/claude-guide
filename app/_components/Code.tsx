"use client";

import { useState } from "react";

type Props = {
  children: string;
  filename?: string;
};

export default function Code({ children, filename }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(children);
      } else {
        // 아주 오래된 환경 폴백
        const ta = document.createElement("textarea");
        ta.value = children;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // 사용자가 권한 거부 등 — 조용히 실패
    }
  };

  return (
    <div className="my-6 not-prose rounded-lg overflow-hidden border border-stone-800">
      <div className="bg-stone-950 text-stone-400 text-[11px] tracking-[0.15em] uppercase pl-4 pr-2 py-1.5 border-b border-stone-800 font-mono flex items-center justify-between gap-3 min-h-[34px]">
        <span className="truncate">{filename ?? ""}</span>
        <button
          type="button"
          onClick={handleCopy}
          aria-label={copied ? "복사됨" : "코드 복사"}
          aria-live="polite"
          className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-stone-400 hover:text-stone-100 hover:bg-stone-800 active:bg-stone-700 transition-colors"
        >
          {copied ? (
            <>
              <svg
                viewBox="0 0 16 16"
                width="12"
                height="12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M3 8.5L6.5 12L13 4.5" />
              </svg>
              <span>복사됨</span>
            </>
          ) : (
            <>
              <svg
                viewBox="0 0 16 16"
                width="12"
                height="12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <rect x="5" y="5" width="9" height="9" rx="1.5" />
                <path d="M11 5V3.5A1.5 1.5 0 0 0 9.5 2H3.5A1.5 1.5 0 0 0 2 3.5v6A1.5 1.5 0 0 0 3.5 11H5" />
              </svg>
              <span>복사</span>
            </>
          )}
        </button>
      </div>
      <pre className="code-block whitespace-pre-wrap break-words">
        {children}
      </pre>
    </div>
  );
}
