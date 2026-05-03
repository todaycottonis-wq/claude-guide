import PageShell from "../_components/PageShell";
import Callout from "../_components/Callout";
import CaptureSlot from "../_components/CaptureSlot";
import SkillDiagram from "../_components/mockups/SkillDiagram";
import Code from "../_components/Code";

export const metadata = {
  title: "5장. 스킬 만들기 — 클로드 가이드북",
};

export default function Page() {
  return (
    <PageShell
      chapter="5장"
      title="스킬 만들기"
      intro="스킬(Skill)은 ‘자주 하는 일의 사용설명서 묶음’이에요. 요리책 같은 거예요. 클로드는 평소엔 그냥 책장에 꽂아 두고, 그 일이 필요할 때만 알아서 펴 봐요."
      prev={{ href: "/agents", label: "4장. 에이전트 만들기" }}
      next={{ href: "/tips", label: "6장. 더 잘 쓰는 팁 모음" }}
    >
      <h2>에이전트랑 뭐가 달라?</h2>
      <p>
        둘 다 클로드를 도와 주는 친구지만, 결이 조금 달라요.
      </p>
      <ul>
        <li>
          <strong>에이전트</strong>는 <em>다른 사람</em>이에요. 부탁을 받아서
          <strong> 따로 일하고</strong>, 자기 결과만 들고 와요.
        </li>
        <li>
          <strong>스킬</strong>은 <em>책</em>이에요. 클로드 본인이 일하다가
          <strong> 필요할 때 펼쳐 보는 안내서</strong>예요.
        </li>
      </ul>
      <p>
        그래서 ‘이 일은 누가 시켜도 늘 같은 절차로 처리해야 해’ 같을 때 →
        <strong> 스킬</strong>. ‘이건 아예 다른 친구한테 통째로 맡겨야 해’
        같을 때 → <strong>에이전트</strong>.
      </p>

      <CaptureSlot caption="스킬은 폴더 한 칸을 차지해요. 그 안의 SKILL.md가 표지, 다른 파일들은 부록이에요.">
        <SkillDiagram />
      </CaptureSlot>

      <h2>스킬은 ‘폴더 + SKILL.md’</h2>
      <p>
        스킬은 폴더 한 칸을 차지해요. 그 폴더 안에는 무조건{" "}
        <code>SKILL.md</code>라는 표지 파일이 있어야 하고, 같이 쓸 자료
        (예시·체크리스트·작은 스크립트)는 같은 폴더에 마음대로 넣어요.
      </p>
      <Code filename="폴더 구조">{`.claude/skills/
└─ korean-essay/
   ├─ SKILL.md        ← 표지 (필수)
   ├─ examples.md     ← 좋은 예시·나쁜 예시
   └─ checklist.md    ← 점검표`}</Code>

      <h2>예시: ‘한국어 글 다듬기’ 스킬</h2>
      <Code filename=".claude/skills/korean-essay/SKILL.md">{`---
name: korean-essay
description: 한국어 글을 다듬을 때 펼치는 책. 글의 흐름·맞춤법·말투를 본다. 사용자가 "글 좀 다듬어 줘", "맞춤법 봐줘", "이 자기소개서 어때?" 같은 말을 하면 사용한다.
---

# 한국어 글 다듬기

다음 순서로 일한다.

## 1) 먼저 무엇을 위한 글인지 묻는다
- 받는 사람(독자)
- 길이·말투·분위기

## 2) examples.md 의 좋은 예시·나쁜 예시를 한 번 본다

## 3) 글을 다음 기준으로 본다
- 한 문장이 너무 길지 않은가 (40자 안쪽 권장)
- 같은 말이 여러 번 반복되고 있지 않은가
- 한자어를 풀어 써도 되는 곳이 있는가
- 맞춤법: '되/돼', '안/않', 띄어쓰기

## 4) 결과는 두 덩어리로 준다
- 다듬은 본문
- 무엇을 왜 고쳤는지 짧은 메모`}</Code>

      <Callout tone="note" title="description이 핵심이에요">
        스킬은 클로드가 <strong>자동으로 펼쳐 봐요</strong>. 그러려면
        ‘<strong>이 책이 어떨 때 펼치는 책인지</strong>’가 또렷해야 해요.
        <code>description</code>에 ‘<strong>언제·어떤 말이 나올 때</strong>’
        를 구체적으로 적어 두는 게 가장 중요해요.
      </Callout>

      <h2>스킬은 어디에 두지?</h2>
      <ul>
        <li>
          프로젝트용: <code>이 폴더/.claude/skills/이름/SKILL.md</code>
        </li>
        <li>
          나만의 도구함: <code>~/.claude/skills/이름/SKILL.md</code>
        </li>
      </ul>

      <h2>좋은 스킬의 모양</h2>
      <ul>
        <li>
          <strong>한 가지 일</strong>만 한다. 한 권의 책에 모든 요리를
          담으면 못 찾아요. ‘된장찌개 책’, ‘김밥 책’처럼 잘게 나눠요.
        </li>
        <li>
          <strong>순서</strong>가 있다. 1·2·3처럼 단계별로 적어 두면 클로드도
          그 순서대로 일해요.
        </li>
        <li>
          <strong>예시·체크리스트</strong>를 같이 둔다. 같은 폴더의 다른
          파일에 두면 본문이 짧아지고, 클로드는 필요할 때만 그 파일을
          펴 봐요.
        </li>
      </ul>

      <h2>이런 일에 어울려요</h2>
      <ul>
        <li>
          <strong>같은 형식의 글</strong>을 매번 만든다. (회의록, 주간 보고,
          공지)
        </li>
        <li>
          <strong>같은 점검표</strong>로 검사한다. (맞춤법, PR 리뷰, 디자인
          체크)
        </li>
        <li>
          <strong>특수한 도구·라이브러리 사용법</strong>이 정해져 있다.
          (사내 디자인 시스템 사용법, 회사 데이터베이스 쿼리 규칙)
        </li>
      </ul>

      <h2>에이전트와 함께 쓰면 좋아요</h2>
      <p>
        에이전트(친구)와 스킬(책)은 같이 쓸 때 빛나요. 예를 들어{" "}
        <code>copy-writer</code> 에이전트가 <code>korean-essay</code> 스킬을
        <strong> 손에 들고</strong> 글을 다듬는 식이에요. 친구가 책을 보면서
        일하는 느낌.
      </p>

      <Callout tone="tip" title="작게 시작하는 법">
        SKILL.md를 <strong>다섯 줄</strong>로 시작해 보세요. 쓰면서 어색한
        점, 빠뜨린 단계가 보이면 그때 한 줄씩 보태요. 처음부터 길게 쓰면
        클로드도 우리도 길을 잃어요.
      </Callout>

      <Callout tone="good" title="이 장에서 기억할 한 줄">
        스킬 = <strong>‘자주 하는 일의 사용설명서’</strong>.{" "}
        <code>.claude/skills/이름/SKILL.md</code>에 표지를 만들고,{" "}
        <strong>‘언제 펼치는 책’</strong>인지 또렷하게 적어 두면 클로드가
        알아서 펴 봐요.
      </Callout>
    </PageShell>
  );
}
