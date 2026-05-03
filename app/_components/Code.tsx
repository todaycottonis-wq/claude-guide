type Props = {
  children: string;
  filename?: string;
};

export default function Code({ children, filename }: Props) {
  return (
    <div className="my-6 not-prose rounded-lg overflow-hidden border border-stone-800">
      {filename ? (
        <div className="bg-stone-950 text-stone-400 text-[11px] tracking-[0.15em] uppercase px-4 py-2 border-b border-stone-800 font-mono">
          {filename}
        </div>
      ) : null}
      <pre className="code-block whitespace-pre-wrap break-words">
        {children}
      </pre>
    </div>
  );
}
