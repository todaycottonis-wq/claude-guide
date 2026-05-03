export default function AgentAnatomy() {
  return (
    <svg
      viewBox="0 0 720 460"
      role="img"
      aria-label="에이전트 파일의 구조 — 위쪽 카드와 아래쪽 안내문"
      className="w-full h-auto"
    >
      <rect width="720" height="460" rx="16" fill="#fffaf0" />
      <rect x="0.5" y="0.5" width="719" height="459" rx="16" fill="none" stroke="#e7e5e4" />

      <text x="40" y="42" fontSize="14" fontWeight="700" fill="#1c1917">
        에이전트 파일은 두 칸으로 나뉘어 있어요
      </text>

      {/* the file card */}
      <g>
        <rect x="60" y="68" width="320" height="356" rx="12" fill="#ffffff" stroke="#d6d3d1" />
        {/* file header tab */}
        <rect x="60" y="68" width="320" height="32" rx="12" fill="#1c1917" />
        <rect x="60" y="86" width="320" height="14" fill="#1c1917" />
        <text x="78" y="89" fontSize="12" fontFamily="ui-monospace, monospace" fill="#fbbf24">
          design-reviewer.md
        </text>
        <circle cx="364" cy="84" r="3" fill="#fbbf24" />
        <circle cx="354" cy="84" r="3" fill="#a8a29e" />
        <circle cx="344" cy="84" r="3" fill="#a8a29e" />

        {/* frontmatter (top) */}
        <rect x="60" y="100" width="320" height="120" fill="#fef3c7" />
        <g fontFamily="ui-monospace, monospace" fontSize="11.5">
          <text x="78" y="120" fill="#a16207">---</text>
          <text x="78" y="138" fill="#1c1917">name: design-reviewer</text>
          <text x="78" y="156" fill="#1c1917">description: 화면 캡처를 보고</text>
          <text x="78" y="172" fill="#1c1917">  좋은 점·고칠 점을 알려주는 친구.</text>
          <text x="78" y="190" fill="#1c1917">tools: Read, Grep</text>
          <text x="78" y="208" fill="#a16207">---</text>
        </g>

        {/* body (bottom) */}
        <g fontFamily="ui-sans-serif, system-ui" fontSize="12">
          <text x="78" y="244" fill="#1c1917" fontWeight="700">
            너는 친절한 디자인 리뷰 친구야.
          </text>
          <text x="78" y="266" fill="#57534e">다음 순서로 답해 줘.</text>
          <text x="78" y="290" fill="#57534e">1) 한 줄 요약</text>
          <text x="78" y="310" fill="#57534e">2) 좋은 점 (구체적으로 두세 가지)</text>
          <text x="78" y="330" fill="#57534e">3) 고칠 점 (이유와 함께)</text>
          <text x="78" y="350" fill="#57534e">4) 우선순위 — 지금/여유 될 때</text>
          <text x="78" y="380" fill="#a8a29e">말투는 부드럽고,</text>
          <text x="78" y="396" fill="#a8a29e">어려운 용어는 풀어 써.</text>
        </g>
      </g>

      {/* labels — top */}
      <g>
        <line x1="380" y1="160" x2="430" y2="160" stroke="#d97706" strokeWidth="1.5" />
        <rect x="430" y="120" width="240" height="86" rx="10" fill="#ffffff" stroke="#fbbf24" />
        <text x="446" y="142" fontSize="13" fontWeight="700" fill="#78350f">
          위쪽 = 프로필 카드
        </text>
        <text x="446" y="162" fontSize="11.5" fill="#57534e">
          이름·설명·도구 가방을 적는 곳.
        </text>
        <text x="446" y="178" fontSize="11.5" fill="#57534e">
          줄 시작과 끝을 ‘---’로 막아 둬요.
        </text>
        <text x="446" y="194" fontSize="11.5" fill="#57534e">
          (이걸 frontmatter라고 불러요)
        </text>
      </g>

      {/* labels — bottom */}
      <g>
        <line x1="380" y1="320" x2="430" y2="320" stroke="#d97706" strokeWidth="1.5" />
        <rect x="430" y="280" width="240" height="86" rx="10" fill="#ffffff" stroke="#fbbf24" />
        <text x="446" y="302" fontSize="13" fontWeight="700" fill="#78350f">
          아래쪽 = 안내문
        </text>
        <text x="446" y="322" fontSize="11.5" fill="#57534e">
          이 친구가 일할 때 읽을 글.
        </text>
        <text x="446" y="338" fontSize="11.5" fill="#57534e">
          말투, 일하는 순서, 답의 모양을
        </text>
        <text x="446" y="354" fontSize="11.5" fill="#57534e">
          평소 글처럼 적어 두면 돼요.
        </text>
      </g>
    </svg>
  );
}
