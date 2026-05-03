export default function ClaudeChat() {
  return (
    <svg
      viewBox="0 0 720 440"
      role="img"
      aria-label="클로드 채팅 화면 모형"
      className="w-full h-auto"
    >
      <rect width="720" height="440" rx="16" fill="#ffffff" />
      <rect
        x="0.5"
        y="0.5"
        width="719"
        height="439"
        rx="16"
        fill="none"
        stroke="#ececec"
      />
      {/* window dots */}
      <circle cx="22" cy="22" r="6" fill="#e5e5e5" />
      <circle cx="42" cy="22" r="6" fill="#e5e5e5" />
      <circle cx="62" cy="22" r="6" fill="#e5e5e5" />
      <line x1="0" y1="44" x2="720" y2="44" stroke="#ececec" />
      {/* sidebar */}
      <rect x="0" y="44" width="200" height="396" fill="#fafafa" />
      <line x1="200" y1="44" x2="200" y2="440" stroke="#ececec" />
      <rect x="16" y="64" width="168" height="32" rx="8" fill="#0a0a0a" />
      <text
        x="100"
        y="84"
        fontSize="13"
        fontFamily="ui-sans-serif, system-ui"
        fill="white"
        fontWeight="600"
        textAnchor="middle"
      >
        + 새 대화
      </text>
      <rect x="16" y="108" width="168" height="34" rx="8" fill="#ececec" />
      <text x="28" y="129" fontSize="12" fill="#0a0a0a">
        오늘 · 숙제 도와줘
      </text>
      <rect x="16" y="148" width="168" height="34" rx="8" fill="#ffffff" />
      <text x="28" y="169" fontSize="12" fill="#525252">
        어제 · 자기소개서 첨삭
      </text>
      <rect x="16" y="188" width="168" height="34" rx="8" fill="#ffffff" />
      <text x="28" y="209" fontSize="12" fill="#525252">
        요리 레시피 추천
      </text>

      {/* header */}
      <rect x="200" y="44" width="520" height="40" fill="#ffffff" />
      <line x1="200" y1="84" x2="720" y2="84" stroke="#ececec" />
      <text x="220" y="69" fontSize="13" fill="#0a0a0a" fontWeight="600">
        Claude Sonnet 4.6
      </text>
      <circle cx="700" cy="64" r="10" fill="#0a0a0a" />
      <text
        x="700"
        y="68"
        fontSize="11"
        fill="white"
        textAnchor="middle"
        fontWeight="700"
      >
        나
      </text>

      {/* user bubble */}
      <rect x="380" y="108" width="280" height="48" rx="14" fill="#f4f4f5" />
      <text x="400" y="130" fontSize="13" fill="#0a0a0a">
        강아지 키우는 법 알려줘
      </text>
      <text x="400" y="148" fontSize="13" fill="#0a0a0a">
        초등학생 동생도 이해하게
      </text>

      {/* claude avatar */}
      <circle cx="232" cy="200" r="14" fill="#0a0a0a" />
      <text
        x="232"
        y="204"
        fontSize="11"
        fill="#fafafa"
        textAnchor="middle"
        fontWeight="700"
      >
        C
      </text>

      {/* claude bubble */}
      <rect
        x="252"
        y="180"
        width="380"
        height="100"
        rx="14"
        fill="#ffffff"
        stroke="#ececec"
      />
      <text x="270" y="204" fontSize="13" fill="#0a0a0a" fontWeight="600">
        좋아요! 세 가지부터 시작해 볼게요.
      </text>
      <text x="270" y="226" fontSize="12" fill="#525252">
        1. 매일 산책 30분 — 다리가 튼튼해져요.
      </text>
      <text x="270" y="244" fontSize="12" fill="#525252">
        2. 깨끗한 물과 사료 — 정해진 시간에 챙겨요.
      </text>
      <text x="270" y="262" fontSize="12" fill="#525252">
        3. 동물 병원 등록 — 아플 때 바로 가요.
      </text>

      {/* input box */}
      <rect
        x="220"
        y="380"
        width="480"
        height="44"
        rx="22"
        fill="#ffffff"
        stroke="#ececec"
      />
      <text x="240" y="406" fontSize="13" fill="#a1a1aa">
        무엇이든 물어보세요…
      </text>
      <circle cx="676" cy="402" r="14" fill="#0a0a0a" />
      <path
        d="M670 402 L682 402 M676 396 L682 402 L676 408"
        stroke="white"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
