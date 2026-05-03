export default function PromptCompare() {
  return (
    <svg
      viewBox="0 0 720 320"
      role="img"
      aria-label="좋은 부탁과 헷갈리는 부탁 비교"
      className="w-full h-auto"
    >
      <rect width="720" height="320" rx="16" fill="#fafafa" />
      <rect
        x="0.5"
        y="0.5"
        width="719"
        height="319"
        rx="16"
        fill="none"
        stroke="#ececec"
      />

      {/* left: bad */}
      <g>
        <rect x="24" y="24" width="320" height="272" rx="14" fill="#ffffff" stroke="#ececec" />
        <g>
          <circle cx="44" cy="50" r="3" fill="#e11d48" />
          <text x="56" y="55" fontSize="11" fontWeight="700" fill="#9f1239" letterSpacing="2">
            BAD
          </text>
          <text x="100" y="55" fontSize="13" fontWeight="700" fill="#0a0a0a">
            헷갈리는 부탁
          </text>
        </g>
        <rect x="44" y="76" width="280" height="40" rx="10" fill="#fafafa" />
        <text x="60" y="102" fontSize="13" fill="#0a0a0a">
          “이거 잘 좀 해줘”
        </text>

        <rect x="44" y="128" width="280" height="40" rx="10" fill="#fafafa" />
        <text x="60" y="154" fontSize="13" fill="#0a0a0a">
          “글 좀 써줘”
        </text>

        <rect x="44" y="180" width="280" height="40" rx="10" fill="#fafafa" />
        <text x="60" y="206" fontSize="13" fill="#0a0a0a">
          “코드 좀 짜줘”
        </text>

        <text x="44" y="252" fontSize="11.5" fill="#737373">
          → 무엇을, 누구한테, 어떤 모양으로
        </text>
        <text x="44" y="270" fontSize="11.5" fill="#737373">
          줄지 알 수 없어요.
        </text>
      </g>

      {/* right: good */}
      <g>
        <rect x="376" y="24" width="320" height="272" rx="14" fill="#ffffff" stroke="#ececec" />
        <g>
          <circle cx="396" cy="50" r="3" fill="#10b981" />
          <text x="408" y="55" fontSize="11" fontWeight="700" fill="#065f46" letterSpacing="2">
            GOOD
          </text>
          <text x="456" y="55" fontSize="13" fontWeight="700" fill="#0a0a0a">
            분명한 부탁
          </text>
        </g>
        <rect x="396" y="76" width="280" height="56" rx="10" fill="#fafafa" />
        <text x="412" y="100" fontSize="12.5" fill="#0a0a0a">
          “초등학교 5학년 동생에게 보낼
        </text>
        <text x="412" y="120" fontSize="12.5" fill="#0a0a0a">
          편지 3줄, 따뜻한 말투로 써줘”
        </text>

        <rect x="396" y="144" width="280" height="56" rx="10" fill="#fafafa" />
        <text x="412" y="168" fontSize="12.5" fill="#0a0a0a">
          “React로 로그인 화면 만들어 줘.
        </text>
        <text x="412" y="188" fontSize="12.5" fill="#0a0a0a">
          이메일·비밀번호만 받게.”
        </text>

        <text x="396" y="232" fontSize="11.5" fill="#525252">
          → 누구한테, 무엇을, 어떤 모양으로,
        </text>
        <text x="396" y="250" fontSize="11.5" fill="#525252">
          얼마나 길게가 다 들어 있어요.
        </text>
        <text x="396" y="276" fontSize="11.5" fill="#0a0a0a" fontWeight="700">
          예시 한 줄을 보여 주면 더 좋아요.
        </text>
      </g>
    </svg>
  );
}
