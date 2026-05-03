export default function SkillDiagram() {
  return (
    <svg
      viewBox="0 0 720 380"
      role="img"
      aria-label="스킬 폴더 구조"
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

      <g fontFamily="ui-monospace, Menlo, monospace" fontSize="13">
        <text x="40" y="44" fontSize="14" fontWeight="700" fill="#0a0a0a">
          스킬 = 폴더 + 사용설명서
        </text>
        <text x="40" y="80" fill="#0a0a0a">
          📁 .claude/skills/
        </text>
        <text x="72" y="106" fill="#0a0a0a" fontWeight="700">
          └─ korean-essay/
        </text>
        <text x="104" y="130" fill="#525252">
          ├─ SKILL.md
        </text>
        <text x="104" y="154" fill="#525252">
          ├─ examples.md
        </text>
        <text x="104" y="178" fill="#525252">
          └─ checklist.md
        </text>
      </g>

      {/* the SKILL.md card */}
      <g>
        <rect
          x="380"
          y="60"
          width="300"
          height="280"
          rx="14"
          fill="#ffffff"
          stroke="#d4d4d4"
          strokeWidth="1"
        />
        <rect x="380" y="60" width="300" height="34" rx="14" fill="#0a0a0a" />
        <rect x="380" y="78" width="300" height="16" fill="#0a0a0a" />
        <text
          x="396"
          y="83"
          fontSize="13"
          fontWeight="700"
          fill="#fafafa"
          fontFamily="ui-monospace, monospace"
        >
          SKILL.md
        </text>

        <g fontFamily="ui-monospace, monospace" fontSize="11.5">
          <text x="396" y="116" fill="#737373">
            ---
          </text>
          <text x="396" y="134" fill="#0a0a0a">
            name: korean-essay
          </text>
          <text x="396" y="152" fill="#0a0a0a">
            description: 한국어 글쓰기를
          </text>
          <text x="396" y="168" fill="#0a0a0a">
            {"  "}고쳐 줄 때 펼치는 책.
          </text>
          <text x="396" y="184" fill="#0a0a0a">
            {"  "}맞춤법·문장 흐름을 본다.
          </text>
          <text x="396" y="200" fill="#737373">
            ---
          </text>
        </g>

        <g fontFamily="ui-sans-serif, system-ui" fontSize="12">
          <text x="396" y="226" fill="#525252">
            ▸ 어떻게 검사할지 단계별로
          </text>
          <text x="396" y="244" fill="#525252">
            {"  "}적어 둔다.
          </text>
          <text x="396" y="270" fill="#525252">
            ▸ 좋은 예시·나쁜 예시도
          </text>
          <text x="396" y="288" fill="#525252">
            {"  "}같은 폴더에 넣어 둔다.
          </text>
          <text x="396" y="316" fill="#525252">
            ▸ 클로드는 필요할 때 알아서
          </text>
          <text x="396" y="334" fill="#525252">
            {"  "}이 책을 펼쳐 본다.
          </text>
        </g>
      </g>
    </svg>
  );
}
