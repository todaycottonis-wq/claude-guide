import PageShell from "../_components/PageShell";
import Callout from "../_components/Callout";
import CaptureSlot from "../_components/CaptureSlot";
import AgentDiagram from "../_components/mockups/AgentDiagram";
import Code from "../_components/Code";

export const metadata = {
  title: "4장. 에이전트 만들기 — 클로드 가이드북",
};

export default function Page() {
  return (
    <PageShell
      chapter="4장"
      title="에이전트 만들기"
      intro="에이전트는 ‘한 가지 일을 잘하는 클로드 친구’예요. 친구 중에 그림 잘 그리는 친구, 수학 잘하는 친구가 따로 있는 것처럼, 클로드도 ‘디자인 봐주는 친구’, ‘테스트 돌려 주는 친구’를 따로 만들어 둘 수 있어요."
      prev={{ href: "/claude-code", label: "3장. 클로드 코드 시작하기" }}
      next={{ href: "/skills", label: "5장. 스킬 만들기" }}
    >
      <h2>왜 에이전트가 필요해?</h2>
      <p>
        한 명의 클로드한테 모든 일을 다 시키면 머리가 복잡해져요. 우리도
        시험 공부, 빨래, 요리, 운동을 한꺼번에 하면 헷갈리잖아요.
        에이전트를 따로 두면 각자 <strong>자기 일에만 집중</strong>해서, 더
        잘하고, 다른 일과 섞이지 않아요.
      </p>

      <CaptureSlot caption="에이전트는 프로젝트의 .claude/agents/ 폴더 안에 ‘이름.md’ 파일로 살아요.">
        <AgentDiagram />
      </CaptureSlot>

      <h2>에이전트는 결국 작은 마크다운 파일</h2>
      <p>
        멋있는 이름과 달리, 에이전트는 <strong>마크다운(.md) 파일 한
        장</strong>이에요. 위쪽에 ‘프로필 카드’가 있고, 아래쪽에 ‘이 친구
        한테 부탁할 때 읽힐 안내문’이 있어요.
      </p>
      <ul>
        <li>
          위쪽(프로필 카드): <strong>이름</strong>,{" "}
          <strong>설명(언제 부르는 친구인지)</strong>, <strong>쓸 수
          있는 도구</strong>, <strong>모델</strong> 같은 것.
        </li>
        <li>
          아래쪽(안내문): 이 친구가 일을 할 때 따라야 할 규칙. ‘이런
          말투로 답해라’, ‘이런 순서로 일해라’ 같은 것.
        </li>
      </ul>

      <h2>예시: ‘디자인 검토 친구’ 만들기</h2>
      <p>
        프로젝트 폴더에 <code>.claude/agents/design-reviewer.md</code> 파일을
        만들고 아래처럼 적어 보세요.
      </p>
      <Code filename=".claude/agents/design-reviewer.md">{`---
name: design-reviewer
description: 화면 캡처나 와이어프레임을 보고, 좋은 점·고칠 점·우선순위를 알려 주는 친구. 사용자가 "디자인 봐줘", "이 화면 어때?", "UX 리뷰" 같은 말을 하면 자동으로 호출됩니다.
tools: Read, Grep, WebSearch
---

너는 친절한 디자인 리뷰 친구야. 다음 순서로 답해 줘.

1) 한 줄 요약 — 이 화면이 뭘 하려는 화면인지.
2) 좋은 점 — 칭찬은 구체적으로 두세 가지.
3) 고칠 점 — '왜' 그런지 이유와 함께. 작은 것부터 큰 것 순.
4) 우선순위 - '지금 바로', '여유 될 때' 두 묶음으로.

말투는 부드럽고, 어려운 디자인 용어는 풀어 써.`}</Code>

      <Callout tone="note" title="frontmatter라는 위쪽 카드">
        <code>---</code> 사이에 적힌 부분은 <strong>frontmatter</strong>라고
        불러요. <code>name</code>, <code>description</code>은 꼭 있어야
        하고, <code>tools</code>는 필요한 것만 골라 주세요. 안 적으면 모든
        도구를 다 써요.
      </Callout>

      <h2>에이전트는 어디에 두지?</h2>
      <ul>
        <li>
          <strong>프로젝트용</strong>: <code>이 폴더/.claude/agents/</code>
          → 이 프로젝트에서만 쓰여요.
        </li>
        <li>
          <strong>나만의 도구함(전역)</strong>:{" "}
          <code>~/.claude/agents/</code> → 어떤 폴더에서 클로드를 켜도
          따라와요.
        </li>
      </ul>

      <h2>호출은 어떻게? — 두 가지 방법</h2>
      <ol>
        <li>
          <strong>자동 호출</strong> — frontmatter의 <code>description</code>
          이 좋으면, 클로드가 알아서 ‘이 일은 그 친구가 잘하겠네’ 하고
          불러요. 그래서 <strong>설명은 ‘언제 부르는지’를 또렷하게</strong>
          적어 주는 게 중요해요.
        </li>
        <li>
          <strong>직접 부르기</strong> — 그냥 “design-reviewer 에이전트
          불러서 봐줘.”처럼 이름을 직접 말해도 돼요.
        </li>
      </ol>

      <h2>설명문 잘 적는 요령</h2>
      <Callout tone="bad" title="이러면 거의 호출되지 않아요">
        <code>description: 디자인을 도와주는 친구</code>
      </Callout>
      <Callout tone="good" title="이렇게 적어 두세요">
        <code>
          description: 화면 캡처·와이어프레임·피그마 링크를 보고 UX
          리뷰를 해 주는 친구. 사용자가 "이 화면 어때?", "이 플로우 좀
          봐줘", "UX 리뷰" 같은 말을 하면 호출됩니다.
        </code>
      </Callout>
      <p>
        <strong>‘언제’</strong>와 <strong>‘어떤 말이 나올 때’</strong>를
        구체적으로 적어 두면, 자동 호출이 잘 일어나요.
      </p>

      <h2>도구는 꼭 필요한 만큼만</h2>
      <p>
        에이전트한테 줄 도구(<code>tools</code>)는 적게 줄수록 안전하고,
        결과도 깔끔해요. 글만 보면 되는 친구한테 ‘파일을 지울 수 있는
        도구’까지 줄 필요는 없잖아요. 디자인 검토 친구라면 <strong>Read,
        Grep, WebSearch</strong> 정도면 충분해요.
      </p>

      <h2>에이전트, 언제 만들지 신호 세 가지</h2>
      <ul>
        <li>같은 부탁을 <strong>세 번 이상 반복</strong>하고 있을 때.</li>
        <li>
          답변의 <strong>형식</strong>이 매번 같고, 그 형식대로 받고 싶을
          때.
        </li>
        <li>
          한 번에 <strong>여러 단계</strong>를 거쳐야 하고, 매번 같은
          순서로 진행할 때.
        </li>
      </ul>

      <Callout tone="tip" title="짧게 시작, 천천히 키우기">
        처음부터 완벽하게 만들지 마세요. <strong>‘이름·설명·간단한
        지시’ 세 줄</strong>만으로 시작해 보고, 부르면서 어색한 점이 있을
        때마다 안내문을 한 줄씩 보태는 게 가장 빨라요.
      </Callout>

      <Callout tone="good" title="이 장에서 기억할 한 줄">
        에이전트 = <strong>‘한 가지 잘하는 친구’의 마크다운 파일</strong>.
        <code>.claude/agents/이름.md</code>에 두면 끝. <strong>설명은
        ‘언제 부르는지’</strong>를 또렷하게.
      </Callout>
    </PageShell>
  );
}
