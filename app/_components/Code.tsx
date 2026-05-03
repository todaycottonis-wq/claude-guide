type Props = {
  children: string;
  filename?: string;
};

export default function Code({ children, filename }: Props) {
  return (
    <div className="my-5 not-prose rounded-2xl overflow-hidden border border-stone-700 shadow-sm">
      {filename ? (
        <div className="bg-stone-900 text-stone-300 text-xs px-4 py-2 border-b border-stone-700 font-mono">
          {filename}
        </div>
      ) : null}
      <pre className="code-block whitespace-pre-wrap break-words">
        {children}
      </pre>
    </div>
  );
}
