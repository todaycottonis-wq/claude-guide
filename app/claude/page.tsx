import PageShell from "../_components/PageShell";
import Callout from "../_components/Callout";
import CaptureSlot from "../_components/CaptureSlot";
import ClaudeChat from "../_components/mockups/ClaudeChat";

export const metadata = {
  title: "1장. 클로드란 누구야? — 클로드 가이드북",
};

const strengths = [
  {
    title: "긴 글 한 번에 읽기",
    body: "수십 페이지짜리 문서·회의록·계약서를 통째로 넣고 요약·검색·인용을 부탁할 수 있습니다. 같은 클로드라도 모델에 따라 한 번에 처리할 수 있는 길이가 다른데, 일상적으로 쓰는 모델도 책 한 권 분량은 무리 없이 다뤄요.",
  },
  {
    title: "차분한 글쓰기",
    body: "톤·말투·길이를 시키는 대로 또렷하게 잡습니다. ‘공식 / 친근 / 따뜻하지만 단정’ 같은 결을 잘 살려서, 한국어 보고서·메일·자기소개서를 자연스럽게 다듬어요.",
  },
  {
    title: "신중한 추론",
    body: "단순히 답을 던지지 않고 ‘왜 그런지’를 단계로 풀어 줍니다. 의사결정 비교, 장단점 정리, 코드 리뷰처럼 한 번 더 짚어 보는 일에 어울려요.",
  },
  {
    title: "안전한 기본값",
    body: "잘 모르는 일은 ‘잘 모르겠다’고 말하는 편이고, 위험한 부탁(예: 사기·차별·해 끼치기)에는 단호히 거절합니다. 사람의 눈으로 마지막 검사가 필요하다는 건 변하지 않지만, 처음 신뢰선이 비교적 보수적이에요.",
  },
];

const useCases = [
  {
    when: "월요일 아침",
    do: "지난 주 회의록과 슬랙 메모를 한 번에 넣고, ‘이번 주 우선순위 3개’를 뽑게 합니다.",
  },
  {
    when: "메일함이 꽉 찰 때",
    do: "영어 메일을 정중한 한국어 답장 초안으로 바꿔 달라고 부탁해요. 톤도 같이 정해 줘요.",
  },
  {
    when: "보고서 마감 전날",
    do: "초안을 통째로 붙여 넣고 ‘5학년이 이해할 만한 한 문장 요약’과 ‘논리적으로 약한 부분’을 표시받아요.",
  },
  {
    when: "새 프로젝트 시작",
    do: "이름 후보 30개, 슬로건 후보 20개처럼 ‘서로 다른 결로’ 발상을 부탁합니다.",
  },
  {
    when: "공부할 때",
    do: "어려운 개념을 ‘비유 두 개와 짧은 예시’로 설명해 달라고 합니다. 모를 때 다시 물으면 톤을 맞춰 다시 풀어 줘요.",
  },
  {
    when: "사진을 정리할 때",
    do: "영수증·도표·스크린샷을 올리면 무엇이 보이는지 적어 줍니다. 표로 정리해 달라고 하면 표로 와요.",
  },
];

export default function Page() {
  return (
    <PageShell
      chapter="1장"
      title="클로드란 누구야?"
      intro="클로드(Claude)는 글로 대화하는 AI예요. 글을 쓰고, 그림을 보고, 표를 읽고, 코드를 짜는 일까지 함께 해 줍니다. 이 장에서는 ‘이 친구가 어떤 친구인지’, 그리고 ‘특히 어디서 빛나는지’부터 살펴봐요."
      next={{ href: "/prompting", label: "2장. 잘 부탁하는 법" }}
    >
      <h2>한 줄로 말하면</h2>
      <p>
        클로드는 <strong>‘글로 대화하는 똑똑한 친구’</strong>입니다. 무엇을
        부탁하면 글로 답해 줘요. 어려운 책을 쉽게 풀어 주거나, 일기를 고쳐
        주거나, 게임 규칙을 만들어 주는 일도 잘합니다. 이미지를 보여 주면
        그 안에 무엇이 있는지도 설명해 줘요.
      </p>

      <Callout tone="note" title="작은 메모">
        클로드는 사람이 아닙니다. 모르는 것을 자신 있게 말하기도 하고,
        가끔 틀리기도 해요. <strong>중요한 일은 사람이 한 번 더 확인</strong>
        하는 게 좋습니다. 이 책 곳곳에서 같은 이야기를 반복할 거예요.
      </Callout>

      <h2>어디서 만날 수 있어요?</h2>
      <p>클로드는 한 군데에만 있지 않아요. 만나는 길이 여러 개입니다.</p>
      <ul>
        <li>
          <strong>웹사이트(claude.ai)</strong> — 인터넷 창에서 바로 켭니다.
          가입만 하면 끝. 가장 흔하게 쓰는 길이에요.
        </li>
        <li>
          <strong>데스크탑 앱</strong> — 컴퓨터에 깔아서 씁니다. 화면이 더
          넓고, 캡처를 끌어다 놓기에도 편해요.
        </li>
        <li>
          <strong>휴대폰 앱</strong> — 가방 안의 친구. 길에서 궁금한 걸
          물어볼 때 좋아요.
        </li>
        <li>
          <strong>클로드 코드(Claude Code)</strong> — <em>터미널</em>이라는
          까만 창에서 클로드와 이야기합니다. 코드를 짜고 고치는 일에 특히
          잘해요. 3장에서 자세히 만납니다.
        </li>
        <li>
          <strong>API</strong> — 다른 앱이 클로드와 이야기하도록 연결하는
          길. 개발자들이 많이 써요. 우리는 일단 몰라도 괜찮습니다.
        </li>
      </ul>

      <CaptureSlot
        caption="클로드 웹 화면 예시 — 왼쪽에 대화 목록, 가운데에 답변, 아래에 입력창."
        hint="실제 캡처로 바꾸려면 public/captures/claude-web.png 파일을 넣고, src 속성에 그 경로를 적어 주세요."
      >
        <ClaudeChat />
      </CaptureSlot>

      <h2>클로드는 특히 어디에 강해요?</h2>
      <p>
        같은 AI라도 모델마다 잘하는 영역이 조금씩 다릅니다. 클로드의 결을
        한 줄로 요약하면 <strong>‘긴 글, 차분한 글쓰기, 신중한 추론, 안전한
        기본값’</strong>이에요. 네 가지를 풀어서 보면 이렇습니다.
      </p>

      <div className="not-prose my-8 grid grid-cols-1 sm:grid-cols-2 gap-px bg-border border border-border rounded-xl overflow-hidden">
        {strengths.map((s, i) => (
          <div key={s.title} className="bg-surface p-6">
            <div className="text-[11px] font-mono text-subtle tabular-nums tracking-widest">
              {String(i + 1).padStart(2, "0")}
            </div>
            <h3 className="mt-2 text-base font-bold tracking-[-0.02em]">
              {s.title}
            </h3>
            <p className="mt-2 text-[14px] text-muted leading-[1.7]">
              {s.body}
            </p>
          </div>
        ))}
      </div>

      <h2>일상·직장에서 가장 자주 쓰게 되는 자리</h2>
      <p>
        ‘이론적으로’ 잘하는 일과 ‘실제로 매일 쓰게 되는’ 일은 조금 달라요.
        실제 사용자들이 가장 자주 부르는 자리들을 모았습니다. 비슷한 상황이
        있다면, 다음 장(2장)에서 ‘이걸 어떻게 부탁하면 좋은지’ 자세히
        다뤄요.
      </p>

      <div className="not-prose my-8 border border-border rounded-xl overflow-hidden divide-y divide-border">
        {useCases.map((u, i) => (
          <div
            key={u.when}
            className="grid grid-cols-[auto_1fr] items-baseline gap-4 sm:gap-8 px-5 sm:px-7 py-5"
          >
            <span className="text-[11px] font-mono text-subtle tabular-nums tracking-widest">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <p className="text-[15px] font-bold tracking-[-0.02em]">
                {u.when}
              </p>
              <p className="mt-1 text-[14.5px] text-muted leading-[1.75]">
                {u.do}
              </p>
            </div>
          </div>
        ))}
      </div>

      <h2>모델 이름이 자꾸 바뀌어요</h2>
      <p>
        클로드는 한 명이 아니라 <strong>여러 명의 형제</strong>예요. 큰
        형은 어려운 일을 잘하고, 둘째 형은 빠르고 똑똑하고, 막내는 작은 일을
        가볍게 합니다. 이름은 자주 새 버전이 나와요. 큰 흐름만 기억해도
        충분합니다.
      </p>
      <ul>
        <li>
          <strong>Opus</strong> — 가장 무거운 일을 잘하는 큰 형. 머리는 좋은
          만큼 답이 좀 늦을 때가 있어요. 깊은 추론, 긴 분석에.
        </li>
        <li>
          <strong>Sonnet</strong> — 똑똑하고 빠른 둘째. 일상에서 가장 많이
          만나게 됩니다.
        </li>
        <li>
          <strong>Haiku</strong> — 가볍고 잰걸음인 막내. 짧고 빠른 답이
          필요할 때.
        </li>
      </ul>

      <Callout tone="tip" title="고를 때는 이렇게">
        뭘 골라야 할지 모르겠다면 <strong>Sonnet으로 시작</strong>하세요.
        결과가 답답하다 싶으면 같은 질문을 Opus에 다시 묻고, 너무 오래
        걸리면 Haiku로 가볍게 시도해 보면 됩니다.
      </Callout>

      <h2>못하거나, 조심해야 하는 일</h2>
      <ul>
        <li>
          <strong>최신 사실</strong>은 잘 모릅니다. 어제 뉴스 같은 건 틀릴 수
          있어요. 검색 도구가 켜진 자리에서만 확인이 가능합니다.
        </li>
        <li>
          <strong>숫자 계산</strong>은 가끔 틀려요. 진짜 중요한 계산은
          계산기로 한 번 더 해 봅니다.
        </li>
        <li>
          <strong>나의 비밀</strong>이나 비밀번호는 적지 않아요. 글이 어떻게
          남는지 100% 보장하기 어렵습니다.
        </li>
        <li>
          <strong>딱 정해진 답</strong>이 있어야 하는 의료·법률 결정은 사람
          전문가의 확인이 필요해요.
        </li>
      </ul>

      <Callout tone="good" title="이 장에서 기억할 한 줄">
        클로드 = <strong>글로 대화하는 친구</strong>. 특히{" "}
        <strong>긴 글·차분한 글쓰기·신중한 추론</strong>에 강하고, 모르는
        일은 ‘모른다’고 말하는 결입니다. 단,{" "}
        <strong>중요한 답은 사람이 한 번 더 검사</strong>해요.
      </Callout>
    </PageShell>
  );
}
