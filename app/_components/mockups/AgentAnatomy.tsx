export default function AgentAnatomy() {
  return (
    <svg
      viewBox="0 0 720 460"
      role="img"
      aria-label="에이전트 파일의 구조 — 위쪽 카드와 아래쪽 안내문"
      className="w-full h-auto"
    >
      <rect width="720" height="460" rx="16" fill="#fafafa" />
      <rect
        x="0.5"
        y="0.5"
        width="719"
        height="459"
        rx="16"
        fill="none"
        stroke="#ececec"
      />

      <text x="40" y="42" fontSize="14" fontWeight="700" fill="#0a0a0a">
        에이전트 파일은 두 칸으로 나뉘어 있어요
      </text>

      {/* the file card */}
      <g>
        <rect
          x="60"
          y="68"
          width="320"
          height="356"
          rx="12"
          fill="#ffffff"
          stroke="#d4d4d4"
        />
        {/* file header tab */}
        <rect x="60" y="68" width="320" height="32" rx="12" fill="#0a0a0a" />
        <rect x="60" y="86" width="320" height="14" fill="#0a0a0a" />
        <text
          x="78"
          y="89"
          fontSize="12"
          fontFamily="ui-monospace, monospace"
          fill="#fafafa"
        >
          design-reviewer.md
        </text>
        <circle cx="364" cy="84" r="3" fill="#a1a1aa" />
        <circle cx="354" cy="84" r="3" fill="#525252" />
        <circle cx="344" cy="84" r="3" fill="#525252" />

        {/* frontmatter (top) */}
        <rect x="60" y="100" width="320" height="120" fill="#f4f4f5" />
        <g fontFamily="ui-monospace, monospace" fontSize="11.5">
          <text x="78" y="120" fill="#737373">
            ---
          </text>
          <text x="78" y="138" fill="#0a0a0a">
            name: design-reviewer
          </text>
          <text x="78" y="156" fill="#0a0a0a">
            description: 화면 캡처를 보고
          </text>
          <text x="78" y="172" fill="#0a0a0a">
            {"  "}좋은 점·고칠 점을 알려주는 친구.
          </text>
          <text x="78" y="190" fill="#0a0a0a">
            tools: Read, Grep
          </text>
          <text x="78" y="208" fill="#737373">
            ---
          </text>
        </g>

        {/* body (bottom) */}
        <g fontFamily="ui-sans-serif, system-ui" fontSize="12">
          <text x="78" y="244" fill="#0a0a0a" fontWeight="700">
            너는 친절한 디자인 리뷰 친구야.
          </text>
          <text x="78" y="266" fill="#525252">
            다음 순서로 답해 줘.
          </text>
          <text x="78" y="290" fill="#525252">
            1) 한 줄 요약
          </text>
          <text x="78" y="310" fill="#525252">
            2) 좋은 점 (구체적으로 두세 가지)
          </text>
          <text x="78" y="330" fill="#525252">
            3) 고칠 점 (이유와 함께)
          </text>
          <text x="78" y="350" fill="#525252">
            4) 우선순위 — 지금/여유 될 때
          </text>
          <text x="78" y="380" fill="#a1a1aa">
            말투는 부드럽고,
          </text>
          <text x="78" y="396" fill="#a1a1aa">
            어려운 용어는 풀어 써.
          </text>
        </g>
      </g>

      {/* labels — top */}
      <g>
        <line x1="380" y1="160" x2="430" y2="160" stroke="#0a0a0a" strokeWidth="1.5" />
        <rect
          x="430"
          y="120"
          width="240"
          height="86"
          rx="10"
          fill="#ffffff"
          stroke="#d4d4d4"
        />
        <text x="446" y="142" fontSize="13" fontWeight="700" fill="#0a0a0a">
          위쪽 = 프로필 카드
        </text>
        <text x="446" y="162" fontSize="11.5" fill="#525252">
          이름·설명·도구 가방을 적는 곳.
        </text>
        <text x="446" y="178" fontSize="11.5" fill="#525252">
          줄 시작과 끝을 ‘---’로 막아 둬요.
        </text>
        <text x="446" y="194" fontSize="11.5" fill="#737373">
          (이걸 frontmatter라고 불러요)
        </text>
      </g>

      {/* labels — bottom */}
      <g>
        <line x1="380" y1="320" x2="430" y2="320" stroke="#0a0a0a" strokeWidth="1.5" />
        <rect
          x="430"
          y="280"
          width="240"
          height="86"
          rx="10"
          fill="#ffffff"
          stroke="#d4d4d4"
        />
        <text x="446" y="302" fontSize="13" fontWeight="700" fill="#0a0a0a">
          아래쪽 = 안내문
        </text>
        <text x="446" y="322" fontSize="11.5" fill="#525252">
          이 친구가 일할 때 읽을 글.
        </text>
        <text x="446" y="338" fontSize="11.5" fill="#525252">
          말투, 일하는 순서, 답의 모양을
        </text>
        <text x="446" y="354" fontSize="11.5" fill="#525252">
          평소 글처럼 적어 두면 돼요.
        </text>
      </g>
    </svg>
  );
}
