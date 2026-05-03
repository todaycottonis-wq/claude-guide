export default function ClaudeCode() {
  return (
    <svg
      viewBox="0 0 720 440"
      role="img"
      aria-label="클로드 코드 터미널 모형"
      className="w-full h-auto"
    >
      <rect width="720" height="440" rx="16" fill="#0a0a0a" />
      <rect
        x="0.5"
        y="0.5"
        width="719"
        height="439"
        rx="16"
        fill="none"
        stroke="#262626"
      />
      {/* dots */}
      <circle cx="22" cy="22" r="6" fill="#3f3f46" />
      <circle cx="42" cy="22" r="6" fill="#3f3f46" />
      <circle cx="62" cy="22" r="6" fill="#3f3f46" />
      <text
        x="360"
        y="27"
        fontSize="12"
        fill="#737373"
        textAnchor="middle"
        fontFamily="ui-monospace, monospace"
      >
        ~/projects/my-website — claude
      </text>
      <line x1="0" y1="44" x2="720" y2="44" stroke="#262626" />

      {/* terminal lines */}
      <g fontFamily="ui-monospace, Menlo, monospace" fontSize="13">
        <text x="24" y="80" fill="#a1a1aa">
          $ claude
        </text>
        <text x="24" y="108" fill="#fafafa" fontWeight="700">
          ✱ Claude Code v1.x
        </text>
        <text x="24" y="128" fill="#a1a1aa">
          {"  "}안녕하세요! 이 폴더에서 무엇을 도와드릴까요?
        </text>

        <text x="24" y="166" fill="#fafafa">
          ›{" "}
        </text>
        <text x="44" y="166" fill="#fafafa">
          로그인 페이지 만들어줘. 이메일이랑 비밀번호 받게.
        </text>

        <text x="24" y="200" fill="#fafafa" fontWeight="700">
          ⏺
        </text>
        <text x="44" y="200" fill="#fafafa">
          알겠어요. 먼저 폴더 구조를 살펴볼게요.
        </text>

        <text x="24" y="226" fill="#a1a1aa">
          {"  "}Read
        </text>
        <text x="80" y="226" fill="#737373">
          app/page.tsx
        </text>

        <text x="24" y="248" fill="#a1a1aa">
          {"  "}Write
        </text>
        <text x="80" y="248" fill="#737373">
          app/login/page.tsx
        </text>

        <text x="24" y="276" fill="#fafafa" fontWeight="700">
          ⏺
        </text>
        <text x="44" y="276" fill="#fafafa">
          완료! 라우트 /login 으로 들어가면 보여요.
        </text>

        <text x="24" y="302" fill="#a1a1aa">
          {"  "}변경 파일: 1개
        </text>
        <text x="24" y="320" fill="#a1a1aa">
          {"  "}+ app/login/page.tsx (새로 생김)
        </text>
      </g>

      {/* prompt input */}
      <rect
        x="16"
        y="380"
        width="688"
        height="40"
        rx="10"
        fill="#171717"
        stroke="#262626"
      />
      <text
        x="32"
        y="406"
        fontSize="13"
        fill="#737373"
        fontFamily="ui-monospace, monospace"
      >
        ›  다음 할 일을 적어 주세요…
      </text>
    </svg>
  );
}
