export default function AgentFlow() {
  return (
    <svg
      viewBox="0 0 720 360"
      role="img"
      aria-label="사용자 부탁이 메인 클로드를 거쳐 적절한 에이전트로 전달되는 흐름"
      className="w-full h-auto"
    >
      <rect width="720" height="360" rx="16" fill="#fafafa" />
      <rect
        x="0.5"
        y="0.5"
        width="719"
        height="359"
        rx="16"
        fill="none"
        stroke="#ececec"
      />

      <text x="40" y="40" fontSize="14" fontWeight="700" fill="#0a0a0a">
        에이전트가 불려 오는 길
      </text>

      <defs>
        <marker
          id="aHead"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="8"
          markerHeight="8"
          orient="auto"
        >
          <path d="M0,0 L10,5 L0,10 Z" fill="#525252" />
        </marker>
        <marker
          id="aHeadLight"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="8"
          markerHeight="8"
          orient="auto"
        >
          <path d="M0,0 L10,5 L0,10 Z" fill="#a1a1aa" />
        </marker>
      </defs>

      {/* user */}
      <g>
        <circle
          cx="100"
          cy="180"
          r="40"
          fill="#ffffff"
          stroke="#d4d4d4"
          strokeWidth="1.5"
        />
        <text
          x="100"
          y="172"
          fontSize="12"
          fontWeight="700"
          fill="#0a0a0a"
          textAnchor="middle"
        >
          나
        </text>
        <text
          x="100"
          y="190"
          fontSize="10"
          fill="#737373"
          textAnchor="middle"
        >
          (사용자)
        </text>
        <text
          x="100"
          y="244"
          fontSize="11"
          fill="#525252"
          textAnchor="middle"
        >
          “이 화면 어때?”
        </text>
      </g>

      {/* arrow 1 */}
      <line
        x1="146"
        y1="180"
        x2="222"
        y2="180"
        stroke="#525252"
        strokeWidth="1.5"
        markerEnd="url(#aHead)"
      />

      {/* main claude */}
      <g>
        <rect x="222" y="130" width="160" height="100" rx="14" fill="#0a0a0a" />
        <text
          x="302"
          y="160"
          fontSize="13"
          fontWeight="700"
          fill="#fafafa"
          textAnchor="middle"
        >
          메인 클로드
        </text>
        <text
          x="302"
          y="184"
          fontSize="11"
          fill="#d4d4d4"
          textAnchor="middle"
        >
          “디자인 리뷰네!
        </text>
        <text
          x="302"
          y="202"
          fontSize="11"
          fill="#d4d4d4"
          textAnchor="middle"
        >
          그건 design-reviewer
        </text>
        <text
          x="302"
          y="220"
          fontSize="11"
          fill="#d4d4d4"
          textAnchor="middle"
        >
          한테 맡겨야지.”
        </text>
      </g>

      {/* arrow 2 */}
      <line
        x1="382"
        y1="180"
        x2="458"
        y2="180"
        stroke="#525252"
        strokeWidth="1.5"
        markerEnd="url(#aHead)"
      />

      {/* agent */}
      <g>
        <rect
          x="458"
          y="100"
          width="220"
          height="160"
          rx="14"
          fill="#ffffff"
          stroke="#d4d4d4"
          strokeWidth="1"
        />
        <rect x="458" y="100" width="220" height="32" rx="14" fill="#0a0a0a" />
        <rect x="458" y="118" width="220" height="14" fill="#0a0a0a" />
        <text
          x="568"
          y="120"
          fontSize="12"
          fontWeight="700"
          fill="#fafafa"
          textAnchor="middle"
        >
          design-reviewer
        </text>
        <text x="478" y="158" fontSize="11.5" fill="#525252">
          ① 화면 본다
        </text>
        <text x="478" y="178" fontSize="11.5" fill="#525252">
          ② 좋은 점 정리
        </text>
        <text x="478" y="198" fontSize="11.5" fill="#525252">
          ③ 고칠 점 정리
        </text>
        <text x="478" y="218" fontSize="11.5" fill="#525252">
          ④ 우선순위로 묶음
        </text>
        <text x="478" y="244" fontSize="10.5" fill="#737373" fontStyle="italic">
          → 결과만 들고 돌아옴
        </text>
      </g>

      {/* return arrow */}
      <path
        d="M458 280 C 380 320 200 320 146 220"
        fill="none"
        stroke="#a1a1aa"
        strokeWidth="1.5"
        strokeDasharray="4 4"
        markerEnd="url(#aHeadLight)"
      />
      <text x="320" y="316" fontSize="11" fill="#737373">
        리뷰 결과가 메인 클로드를 거쳐 사용자에게 전달돼요
      </text>
    </svg>
  );
}
