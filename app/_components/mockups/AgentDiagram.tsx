export default function AgentDiagram() {
  return (
    <svg
      viewBox="0 0 720 380"
      role="img"
      aria-label="에이전트 폴더 구조"
      className="w-full h-auto"
    >
      <rect width="720" height="380" rx="16" fill="#fafafa" />
      <rect
        x="0.5"
        y="0.5"
        width="719"
        height="379"
        rx="16"
        fill="none"
        stroke="#ececec"
      />

      <text x="40" y="44" fontSize="14" fontWeight="700" fill="#0a0a0a">
        내 프로젝트 폴더
      </text>

      {/* tree */}
      <g fontFamily="ui-monospace, Menlo, monospace" fontSize="13">
        <text x="40" y="80" fill="#0a0a0a">
          📁 my-website/
        </text>
        <text x="72" y="106" fill="#525252">
          ├─ app/
        </text>
        <text x="72" y="130" fill="#525252">
          ├─ package.json
        </text>
        <text x="72" y="156" fill="#0a0a0a" fontWeight="700">
          └─ .claude/
        </text>
        <text x="104" y="180" fill="#0a0a0a" fontWeight="700">
          └─ agents/
        </text>
      </g>

      {/* agent cards */}
      <g>
        <rect
          x="160"
          y="208"
          width="220"
          height="68"
          rx="12"
          fill="#ffffff"
          stroke="#d4d4d4"
          strokeWidth="1"
        />
        <text x="176" y="232" fontSize="13" fontWeight="700" fill="#0a0a0a">
          design-reviewer.md
        </text>
        <text x="176" y="252" fontSize="11" fill="#525252">
          UI를 보고 좋은 점·고칠 점을
        </text>
        <text x="176" y="266" fontSize="11" fill="#525252">
          알려 주는 친구
        </text>
      </g>
      <g>
        <rect
          x="400"
          y="208"
          width="220"
          height="68"
          rx="12"
          fill="#ffffff"
          stroke="#d4d4d4"
          strokeWidth="1"
        />
        <text x="416" y="232" fontSize="13" fontWeight="700" fill="#0a0a0a">
          test-runner.md
        </text>
        <text x="416" y="252" fontSize="11" fill="#525252">
          코드를 돌려 보고 잘 되는지
        </text>
        <text x="416" y="266" fontSize="11" fill="#525252">
          확인해 주는 친구
        </text>
      </g>
      <g>
        <rect
          x="160"
          y="290"
          width="220"
          height="68"
          rx="12"
          fill="#ffffff"
          stroke="#d4d4d4"
          strokeWidth="1"
        />
        <text x="176" y="314" fontSize="13" fontWeight="700" fill="#0a0a0a">
          copy-writer.md
        </text>
        <text x="176" y="334" fontSize="11" fill="#525252">
          광고 문구·푸시 알림을
        </text>
        <text x="176" y="348" fontSize="11" fill="#525252">
          다양하게 뽑아 주는 친구
        </text>
      </g>
      <g>
        <rect
          x="400"
          y="290"
          width="220"
          height="68"
          rx="12"
          fill="#ffffff"
          stroke="#d4d4d4"
          strokeWidth="1"
        />
        <text x="416" y="314" fontSize="13" fontWeight="700" fill="#0a0a0a">
          data-analyst.md
        </text>
        <text x="416" y="334" fontSize="11" fill="#525252">
          숫자 표를 보고 무슨 뜻인지
        </text>
        <text x="416" y="348" fontSize="11" fill="#525252">
          풀어 설명해 주는 친구
        </text>
      </g>

      {/* connector dotted line */}
      <path
        d="M150 220 L160 240"
        stroke="#a1a1aa"
        strokeDasharray="3 3"
      />
      <path
        d="M150 220 L160 322"
        stroke="#a1a1aa"
        strokeDasharray="3 3"
      />
    </svg>
  );
}
