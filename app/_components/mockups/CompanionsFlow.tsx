export default function CompanionsFlow() {
  return (
    <svg
      viewBox="0 0 720 520"
      role="img"
      aria-label="클로드와 함께 쓰는 도구들의 흐름"
      className="w-full h-auto"
    >
      <rect width="720" height="520" rx="16" fill="#fafafa" />
      <rect
        x="0.5"
        y="0.5"
        width="719"
        height="519"
        rx="16"
        fill="none"
        stroke="#ececec"
      />

      <text x="40" y="40" fontSize="14" fontWeight="700" fill="#0a0a0a">
        만들고 → 저장하고 → 띄우고 → 데이터까지
      </text>

      <defs>
        <marker
          id="cFlowArrow"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="8"
          markerHeight="8"
          orient="auto"
        >
          <path d="M0,0 L10,5 L0,10 Z" fill="#525252" />
        </marker>
      </defs>

      {/* Step 1 — Claude Code */}
      <g>
        <rect
          x="60"
          y="68"
          width="240"
          height="62"
          rx="12"
          fill="#0a0a0a"
        />
        <text x="76" y="92" fontSize="11" fill="#a1a1aa" letterSpacing="2">
          STEP 1 · 만들기
        </text>
        <text x="76" y="116" fontSize="14" fill="#fafafa" fontWeight="700">
          클로드 / 클로드 코드
        </text>
      </g>

      {/* Arrow 1 */}
      <line
        x1="180"
        y1="138"
        x2="180"
        y2="158"
        stroke="#525252"
        strokeWidth="1.5"
        markerEnd="url(#cFlowArrow)"
      />

      {/* Step 2 — Git */}
      <g>
        <rect
          x="60"
          y="166"
          width="240"
          height="62"
          rx="12"
          fill="#ffffff"
          stroke="#d4d4d4"
        />
        <text x="76" y="190" fontSize="11" fill="#737373" letterSpacing="2">
          STEP 2 · 한 단계씩 저장
        </text>
        <text x="76" y="214" fontSize="14" fill="#0a0a0a" fontWeight="700">
          Git
        </text>
      </g>

      {/* Arrow 2 */}
      <line
        x1="180"
        y1="236"
        x2="180"
        y2="256"
        stroke="#525252"
        strokeWidth="1.5"
        markerEnd="url(#cFlowArrow)"
      />

      {/* Step 3 — GitHub */}
      <g>
        <rect
          x="60"
          y="264"
          width="240"
          height="62"
          rx="12"
          fill="#ffffff"
          stroke="#d4d4d4"
        />
        <text x="76" y="288" fontSize="11" fill="#737373" letterSpacing="2">
          STEP 3 · 인터넷에 올리기
        </text>
        <text x="76" y="312" fontSize="14" fill="#0a0a0a" fontWeight="700">
          GitHub
        </text>
      </g>

      {/* Arrow 3 — split into Vercel & Supabase */}
      <line
        x1="180"
        y1="334"
        x2="180"
        y2="354"
        stroke="#525252"
        strokeWidth="1.5"
      />
      <path
        d="M180 354 L180 380 L120 380 L120 400"
        stroke="#525252"
        strokeWidth="1.5"
        fill="none"
        markerEnd="url(#cFlowArrow)"
      />
      <path
        d="M180 354 L180 380 L240 380 L240 400"
        stroke="#525252"
        strokeWidth="1.5"
        fill="none"
        markerEnd="url(#cFlowArrow)"
      />

      {/* Step 4a — Vercel */}
      <g>
        <rect
          x="36"
          y="408"
          width="168"
          height="76"
          rx="12"
          fill="#ffffff"
          stroke="#d4d4d4"
        />
        <text x="52" y="432" fontSize="11" fill="#737373" letterSpacing="2">
          STEP 4 · 사이트 배포
        </text>
        <text x="52" y="456" fontSize="14" fill="#0a0a0a" fontWeight="700">
          Vercel
        </text>
        <text x="52" y="473" fontSize="10.5" fill="#737373">
          코드를 인터넷 주소로
        </text>
      </g>

      {/* Step 4b — Supabase */}
      <g>
        <rect
          x="156"
          y="408"
          width="168"
          height="76"
          rx="12"
          fill="#ffffff"
          stroke="#d4d4d4"
        />
        <text x="172" y="432" fontSize="11" fill="#737373" letterSpacing="2">
          데이터·로그인
        </text>
        <text x="172" y="456" fontSize="14" fill="#0a0a0a" fontWeight="700">
          Supabase
        </text>
        <text x="172" y="473" fontSize="10.5" fill="#737373">
          서버 없이 데이터 저장
        </text>
      </g>

      {/* Right side — narration */}
      <g>
        <line
          x1="360"
          y1="80"
          x2="360"
          y2="476"
          stroke="#ececec"
          strokeDasharray="3 4"
        />
        <text x="384" y="94" fontSize="11" fontWeight="700" fill="#737373" letterSpacing="2">
          한 문장 정리
        </text>

        <text x="384" y="124" fontSize="13" fill="#0a0a0a" fontWeight="700">
          ① 클로드가 코드를 짜고
        </text>
        <text x="384" y="142" fontSize="11.5" fill="#525252">
          내 컴퓨터 폴더 안에서.
        </text>

        <text x="384" y="174" fontSize="13" fill="#0a0a0a" fontWeight="700">
          ② Git이 단계마다 도장을 찍고
        </text>
        <text x="384" y="192" fontSize="11.5" fill="#525252">
          언제든 그 시점으로 되돌아갈 수 있게.
        </text>

        <text x="384" y="224" fontSize="13" fill="#0a0a0a" fontWeight="700">
          ③ GitHub에 그 폴더가 올라가고
        </text>
        <text x="384" y="242" fontSize="11.5" fill="#525252">
          내 컴퓨터 밖에 안전하게 보관·공유.
        </text>

        <text x="384" y="278" fontSize="13" fill="#0a0a0a" fontWeight="700">
          ④ Vercel이 그걸 사이트로 띄우고
        </text>
        <text x="384" y="296" fontSize="11.5" fill="#525252">
          GitHub에 새 코드만 올라오면 자동 재배포.
        </text>

        <text x="384" y="332" fontSize="13" fill="#0a0a0a" fontWeight="700">
          ⑤ Supabase가 데이터를 받는다
        </text>
        <text x="384" y="350" fontSize="11.5" fill="#525252">
          회원가입·게시글·사진 같은 진짜 콘텐츠.
        </text>

        <line x1="384" y1="376" x2="660" y2="376" stroke="#ececec" />

        <text x="384" y="400" fontSize="11" fill="#737373" fontStyle="italic">
          이 가이드북도 똑같은 흐름으로 떠 있어요.
        </text>
        <text x="384" y="418" fontSize="11" fill="#737373" fontStyle="italic">
          클로드 코드로 짜고, Git·GitHub로 보관하고,
        </text>
        <text x="384" y="436" fontSize="11" fill="#737373" fontStyle="italic">
          Vercel에 올렸어요. 데이터가 필요해지면
        </text>
        <text x="384" y="454" fontSize="11" fill="#737373" fontStyle="italic">
          Supabase를 붙이면 그날부터 ‘앱’이 됩니다.
        </text>
      </g>
    </svg>
  );
}
