export default function PromptCompare() {
  return (
    <svg
      viewBox="0 0 720 320"
      role="img"
      aria-label="좋은 부탁과 헷갈리는 부탁 비교"
      className="w-full h-auto"
    >
      <rect width="720" height="320" rx="16" fill="#fbfaf7" />
      <rect x="0.5" y="0.5" width="719" height="319" rx="16" fill="none" stroke="#e7e5e4" />

      {/* left: bad */}
      <g>
        <rect x="24" y="24" width="320" height="272" rx="14" fill="#ffe4e6" />
        <text x="44" y="56" fontSize="13" fontWeight="700" fill="#be185d">
          ✕ 헷갈리는 부탁
        </text>
        <rect x="44" y="76" width="280" height="40" rx="10" fill="#ffffff" />
        <text x="60" y="102" fontSize="13" fill="#1c1917">
          "이거 잘 좀 해줘"
        </text>

        <rect x="44" y="128" width="280" height="40" rx="10" fill="#ffffff" />
        <text x="60" y="154" fontSize="13" fill="#1c1917">
          "글 좀 써줘"
        </text>

        <rect x="44" y="180" width="280" height="40" rx="10" fill="#ffffff" />
        <text x="60" y="206" fontSize="13" fill="#1c1917">
          "코드 좀 짜줘"
        </text>

        <text x="44" y="252" fontSize="11.5" fill="#9f1239">
          → 무엇을, 누구한테, 어떤 모양으로
        </text>
        <text x="44" y="270" fontSize="11.5" fill="#9f1239">
          줄지 알 수 없어요.
        </text>
      </g>

      {/* right: good */}
      <g>
        <rect x="376" y="24" width="320" height="272" rx="14" fill="#d1fae5" />
        <text x="396" y="56" fontSize="13" fontWeight="700" fill="#047857">
          ✓ 분명한 부탁
        </text>
        <rect x="396" y="76" width="280" height="56" rx="10" fill="#ffffff" />
        <text x="412" y="100" fontSize="12.5" fill="#1c1917">
          "초등학교 5학년 동생에게 보낼
        </text>
        <text x="412" y="120" fontSize="12.5" fill="#1c1917">
          편지 3줄, 따뜻한 말투로 써줘"
        </text>

        <rect x="396" y="144" width="280" height="56" rx="10" fill="#ffffff" />
        <text x="412" y="168" fontSize="12.5" fill="#1c1917">
          "React로 로그인 화면 만들어 줘.
        </text>
        <text x="412" y="188" fontSize="12.5" fill="#1c1917">
          이메일·비밀번호만 받게."
        </text>

        <text x="396" y="232" fontSize="11.5" fill="#065f46">
          → 누구한테, 무엇을, 어떤 모양으로,
        </text>
        <text x="396" y="250" fontSize="11.5" fill="#065f46">
          얼마나 길게가 다 들어 있어요.
        </text>
        <text x="396" y="276" fontSize="11.5" fill="#065f46" fontWeight="700">
          예시 한 줄을 보여 주면 더 좋아요.
        </text>
      </g>
    </svg>
  );
}
