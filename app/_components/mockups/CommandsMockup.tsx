export default function CommandsMockup() {
  return (
    <svg
      viewBox="0 0 720 320"
      role="img"
      aria-label="자주 쓰는 슬래시 명령"
      className="w-full h-auto"
    >
      <rect width="720" height="320" rx="16" fill="#1c1917" />
      <rect x="0.5" y="0.5" width="719" height="319" rx="16" fill="none" stroke="#292524" />
      <circle cx="22" cy="22" r="6" fill="#f87171" />
      <circle cx="42" cy="22" r="6" fill="#fbbf24" />
      <circle cx="62" cy="22" r="6" fill="#34d399" />
      <line x1="0" y1="44" x2="720" y2="44" stroke="#292524" />

      <g fontFamily="ui-monospace, Menlo, monospace" fontSize="13">
        <text x="24" y="80" fill="#fbbf24">/help</text>
        <text x="160" y="80" fill="#a8a29e">— 무엇을 할 수 있는지 알려 줘요</text>

        <text x="24" y="112" fill="#fbbf24">/clear</text>
        <text x="160" y="112" fill="#a8a29e">— 지금 대화를 지우고 새로 시작</text>

        <text x="24" y="144" fill="#fbbf24">/agents</text>
        <text x="160" y="144" fill="#a8a29e">— 에이전트(친구들) 만들고 보기</text>

        <text x="24" y="176" fill="#fbbf24">/skills</text>
        <text x="160" y="176" fill="#a8a29e">— 스킬(사용설명서) 보기</text>

        <text x="24" y="208" fill="#fbbf24">/init</text>
        <text x="160" y="208" fill="#a8a29e">— 이 폴더의 안내문(CLAUDE.md) 만들기</text>

        <text x="24" y="240" fill="#fbbf24">/review</text>
        <text x="160" y="240" fill="#a8a29e">— 지금 변경 사항을 검토해 줘요</text>

        <text x="24" y="272" fill="#fbbf24">/config</text>
        <text x="160" y="272" fill="#a8a29e">— 글자 크기·테마 같은 설정 바꾸기</text>
      </g>
    </svg>
  );
}
