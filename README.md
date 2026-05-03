# 클로드 가이드북

초등학생도 따라 하는 Claude · Claude Code 한국어 입문 가이드.

- 라이브 사이트: (Vercel 연결 후 채워 주세요)
- 스택: Next.js 16 (App Router) · React 19 · Tailwind v4 · TypeScript

## 빠르게 보기

```bash
npm install
npm run dev
# http://localhost:3000
```

## 책 구조

| 장 | 주제 | 경로 |
| -- | ---- | ---- |
| 1장 | 클로드란 누구야? | `/claude` |
| 2장 | 잘 부탁하는 법 | `/prompting` |
| 3장 | 클로드 코드 시작하기 | `/claude-code` |
| 4장 | 에이전트 만들기 | `/agents` |
| 5장 | 스킬 만들기 | `/skills` |
| 6장 | 더 잘 쓰는 팁 모음 | `/tips` |

## 화면(스크린샷) 교체하기

각 장의 그림은 인라인 SVG로 그려져 있어요. 실제 화면 캡처로 바꾸고 싶다면:

1. 캡처를 PNG로 저장 (`public/captures/<이름>.png`)
2. 해당 페이지의 `<CaptureSlot>` 컴포넌트에 `src="/captures/<이름>.png"` 속성 추가
3. SVG 자식 요소는 지우거나, 그대로 두고 src만 채우면 캡처가 자동으로 보여요.

`<CaptureSlot>`은 `src`가 비어 있으면 SVG 모형(또는 placeholder)을, 채워져 있으면 캡처를 보여 줘요.

## Vercel 배포

1. [vercel.com/new](https://vercel.com/new)에 들어가 이 저장소를 import.
2. 프레임워크는 자동으로 Next.js로 잡혀요. 환경 변수는 없어도 됩니다.
3. Deploy.

## 라이선스

내용은 학습 자료이며, Claude·Anthropic의 공식 문서가 진실의 원천입니다.
