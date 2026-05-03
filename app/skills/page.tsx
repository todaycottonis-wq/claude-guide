import PageShell from "../_components/PageShell";
import Callout from "../_components/Callout";
import CaptureSlot from "../_components/CaptureSlot";
import SkillDiagram from "../_components/mockups/SkillDiagram";
import Code from "../_components/Code";
import Workshop, { Step } from "../_components/Workshop";

export const metadata = {
  title: "5장. 스킬 만들기 — 클로드 가이드북",
};

export default function Page() {
  return (
    <PageShell
      chapter="5장"
      title="스킬 만들기"
      intro={
        <>
          스킬(Skill)은 ‘자주 하는 일의 사용설명서 묶음’이에요.
          <br />
          요리책 같은 거예요. 평소엔 책장에 꽂혀 있다가, 필요할 때만 클로드가
          알아서 펴 봐요.
          <br />
          ‘에이전트와 무엇이 다른지’부터 처음 만드는 5단계, 자주 만드는 스킬
          다섯 가지까지 같이 갑니다.
        </>
      }
      prev={{ href: "/agents", label: "4장. 에이전트 만들기" }}
      next={{ href: "/tips", label: "6장. 더 잘 쓰는 팁 모음" }}
    >
      <h2>이 장이 끝나면 할 수 있는 일</h2>
      <ul>
        <li>‘<strong>스킬과 에이전트의 차이</strong>’를 한 문단으로 설명할 수 있어요.</li>
        <li>나만의 스킬을 <strong>처음부터 끝까지 한 번 만들어</strong> 볼 수 있어요.</li>
        <li>스킬이 <strong>알아서 펴지게</strong> 만드는 비결을 알게 됩니다.</li>
        <li>‘이건 스킬로 만들어 두면 좋겠다’ 싶은 일을 <strong>골라낼 수 있는 눈</strong>이 생겨요.</li>
      </ul>

      <h2>한 줄로 시작</h2>
      <p>
        에이전트가 <strong>‘다른 사람’</strong>이라면, 스킬은{" "}
        <strong>‘책’</strong>이에요. 에이전트는 부탁을 받아서 따로 일하고
        결과만 들고 와요. 스킬은 클로드 본인이 일하다가 필요할 때 펴 보는
        매뉴얼입니다.
      </p>
      <ul>
        <li>
          ‘이 일은 누가 시켜도 늘 같은 절차로 처리해야 해’ → <strong>스킬</strong>.
        </li>
        <li>
          ‘이건 아예 다른 친구한테 통째로 맡겨야 해’ → <strong>에이전트</strong>.
        </li>
      </ul>

      <Callout tone="note" title="비유 하나 더">
        스킬은 <strong>요리책</strong>이에요. 평소엔 책장에 꽂혀 있다가,
        ‘오늘 김치찌개 끓이자’ 싶을 때 펴서 그 페이지를 보며 요리합니다.
        매번 외우지 않아도 되고, 펼쳤을 때 같은 순서로 결과가 나와요.
      </Callout>

      <h2>왜 스킬이 필요할까요?</h2>

      <h3>1) 같은 일을 늘 같은 모양으로</h3>
      <p>
        ‘회의록은 항상 결정·액션·질문 세 묶음’, ‘블로그 글은 항상 H2 4개·1500자
        안쪽’처럼 <strong>형식이 정해진 일</strong>은 스킬로 두면 매번 같은
        결과가 와요. 모아 두기도 좋고, 검토하기도 편해요.
      </p>

      <h3>2) 매번 절차를 다시 적지 않으려고</h3>
      <p>
        ‘회의록 정리할 때 이런 순서로 봐 줘…’ 같은 긴 안내를 매번 적지
        않아도 됩니다. 한 번 책으로 만들어 두면, 다음부터는 ‘회의록 정리해
        줘’ 한 마디면 끝.
      </p>

      <h3>3) 회사·팀 안에서 ‘우리 방식’을 공유하려고</h3>
      <p>
        ‘우리 팀의 보고서 톤’, ‘우리 회사의 자기소개서 작성 가이드’처럼
        조직마다 가진 작은 규칙들이 있어요. 스킬로 만들어 폴더에 넣어 두면,
        팀의 누구가 켠 클로드든 같은 책을 보고 일합니다.
      </p>

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

      <CaptureSlot caption="스킬은 폴더 한 칸을 차지해요. 그 안의 SKILL.md가 표지, 다른 파일들은 부록입니다.">
        <SkillDiagram />
      </CaptureSlot>

      <h2>처음 만들어 보기 — 다섯 단계</h2>
      <p>
        ‘<strong>한국어 글 다듬기</strong>’ 스킬을 같이 만들어 봐요. 비전공자라면
        ‘에이, 코딩하는 거 아니야?’ 싶을 텐데, 이건{" "}
        <strong>그냥 글 한 장 적는 일</strong>입니다.
      </p>

      <h3>1단계. 어떤 책으로 만들지 한 줄로 정해요</h3>
      <p>
        머릿속에 또렷한 한 줄이 있어야 해요. 예: ‘<strong>한국어 글의 흐름·맞춤법·말투를 점검해
        주는 책</strong>.’
      </p>

      <h3>2단계. 클로드 코드를 켭니다</h3>
      <p>
        3장에서 했던 그대로예요. 작업할 폴더로 들어가{" "}
        <code>claude</code>를 입력해요.
      </p>
      <Code filename="터미널">{`cd ~/Desktop/내폴더
claude`}</Code>

      <h3>3단계. 클로드한테 만들어 달라고 부탁해요</h3>
      <p>
        에이전트와 마찬가지로, 스킬도 결국 ‘파일 + 폴더’입니다. 클로드한테
        부탁하면 알아서 만들어 줘요. 비전공자에게 가장 편한 길.
      </p>
      <Code>{`이 폴더에 ".claude/skills/korean-essay/SKILL.md" 스킬을 만들어 줘.

표지(frontmatter)에는 이렇게 적어 줘.
- name: korean-essay
- description: 한국어 글의 흐름·맞춤법·말투를 점검할 때 펼치는 책. 사용자가 "글 다듬어 줘", "맞춤법 봐 줘", "이 자기소개서 어때?" 같은 말을 하면 사용한다.

본문에는 이런 순서로 일하라고 적어 줘.
1) 받는 사람·길이·말투를 먼저 묻는다
2) 한 문장이 너무 길지 않은지 본다 (40자 안쪽 권장)
3) 같은 말이 반복되는지 본다
4) 한자어를 풀어 쓸 자리가 있는지 본다
5) '되/돼', '안/않' 같은 자주 틀리는 맞춤법을 본다
6) 결과는 '다듬은 본문'과 '왜 고쳤는지' 두 묶음으로 준다`}</Code>
      <p>
        클로드가 “파일과 폴더를 만들어도 될까요?”라고 물으면 허락(Y).
        끝나면 “만들었어요!” 하면서 보여 줄 거예요.
      </p>

      <h3>4단계. 만들어진 파일을 한 번 열어 봐요</h3>
      <p>
        만들어진 파일을 텍스트 편집기로 열어 보세요. 위쪽엔{" "}
        <code>---</code>로 둘러싸인 표지(프로필 카드), 아래쪽엔 안내문이
        있을 거예요. 어색한 부분은 한국어 글 고치듯 그 자리에서 고쳐도 OK.
        파일을 저장하면 끝.
      </p>

      <h3>5단계. 정말 만들어졌는지 부르면서 확인해요</h3>
      <p>
        클로드 코드에 이렇게 적어 봐요.
      </p>
      <Code>{`아래 자기소개서 좀 다듬어 줘.

"저는 어렸을 때부터 책을 좋아해서 도서관에 자주 갔습니다..."`}</Code>
      <p>
        잘 만들어졌다면, 클로드가 우리가 정해 둔 순서(말투 묻기 → 점검 →
        다듬기 → 메모)대로 답을 냅니다.
      </p>

      <Callout tone="good" title="여기까지 했다면">
        축하해요! 첫 스킬을 만든 거예요. 같은 패턴으로{" "}
        <strong>‘회의록 정리’, ‘이메일 답장’, ‘블로그 SEO 점검’</strong>{" "}
        같은 책을 계속 만들 수 있습니다.
      </Callout>

      <h2>표지(description)가 가장 중요해요</h2>
      <p>
        스킬은 클로드가 <strong>알아서 펼쳐 봐요</strong>. 그러려면 ‘
        <strong>이 책이 어떨 때 펼치는 책인지</strong>’가 또렷해야 해요.
        에이전트와 똑같이, <code>description</code>이 가장 중요한 한 줄
        입니다.
      </p>

      <Callout tone="bad" title="이러면 거의 펼쳐지지 않아요">
        <code>description: 글 다듬는 책</code>
      </Callout>

      <Callout tone="good" title="이렇게 적어 두세요">
        <code>
          description: 한국어 글의 흐름·맞춤법·말투를 점검할 때 펼치는 책.
          사용자가 “글 다듬어 줘”, “맞춤법 봐 줘”, “이 자기소개서 어때?”
          같은 말을 하면 사용한다.
        </code>
      </Callout>

      <h2>스킬은 어디에 두지요?</h2>
      <ul>
        <li>
          <strong>이번 프로젝트에서만</strong> →{" "}
          <code>이 폴더/.claude/skills/이름/SKILL.md</code>
        </li>
        <li>
          <strong>어디서든</strong> →{" "}
          <code>~/.claude/skills/이름/SKILL.md</code>
        </li>
      </ul>

      <h2>좋은 스킬의 모양</h2>
      <ul>
        <li>
          <strong>한 가지 일</strong>만 한다. 한 권의 책에 모든 요리를 담으면
          못 찾아요. ‘된장찌개 책’, ‘김밥 책’처럼 잘게 나눠요.
        </li>
        <li>
          <strong>순서</strong>가 있다. 1·2·3처럼 단계로 적어 두면 클로드도
          그 순서대로 일해요.
        </li>
        <li>
          <strong>예시·체크리스트</strong>를 같이 둔다. 같은 폴더의 다른
          파일에 두면 본문이 짧아지고, 클로드는 필요할 때만 펴 봐요.
        </li>
      </ul>

      <h2>자주 만들어 두면 좋은 스킬 다섯 가지</h2>

      <h3>① 한국어 글 다듬기 (korean-essay)</h3>
      <ul>
        <li><strong>언제</strong>: 자기소개서·메일·보고서를 다듬을 때.</li>
        <li><strong>받는 것</strong>: 다듬을 글 + 받는 사람·길이·말투.</li>
        <li><strong>주는 것</strong>: 다듬은 본문 + 무엇을 왜 고쳤는지 메모.</li>
      </ul>

      <h3>② 회의록 정리 형식 (meeting-notes)</h3>
      <ul>
        <li><strong>언제</strong>: 회의 끝나고 거친 메모를 정리할 때.</li>
        <li><strong>받는 것</strong>: 회의 메모, 누가 참석했는지.</li>
        <li>
          <strong>주는 것</strong>: 결정 사항 / 액션 아이템(담당자·마감) /
          남은 질문 — 늘 같은 세 묶음.
        </li>
      </ul>

      <h3>③ 이메일 답장 형식 (email-reply)</h3>
      <ul>
        <li><strong>언제</strong>: 회사 이메일 답장을 쓸 때.</li>
        <li><strong>받는 것</strong>: 원문 메일 + ‘OK인지 NO인지 / 톤’.</li>
        <li>
          <strong>주는 것</strong>: 인사말 한 줄 + 핵심 답 두세 줄 + 끝인사 한
          줄. 항상 같은 길이.
        </li>
      </ul>

      <h3>④ 블로그 글 점검 (blog-checklist)</h3>
      <ul>
        <li><strong>언제</strong>: 블로그 초안을 올리기 전.</li>
        <li><strong>받는 것</strong>: 글 본문.</li>
        <li>
          <strong>주는 것</strong>: 제목 후보 5개 / 메타 설명 1개 / 부족한
          예시 자리 표시 / 길이·문단 수 점검.
        </li>
      </ul>

      <h3>⑤ 주간 일기 형식 (weekly-journal)</h3>
      <ul>
        <li><strong>언제</strong>: 매주 일요일 저녁, 한 주를 돌아볼 때.</li>
        <li><strong>받는 것</strong>: 한 주 동안 있던 일들의 짧은 메모.</li>
        <li>
          <strong>주는 것</strong>: ‘배운 것 3개 / 잘한 일 3개 / 다음 주에
          바꿀 것 1개’ — 매주 같은 모양.
        </li>
      </ul>

      <h2>에이전트와 함께 쓰면 더 좋아요</h2>
      <p>
        에이전트(친구)와 스킬(책)은 같이 쓸 때 빛나요. 예를 들어{" "}
        <code>copy-writer</code> 에이전트가 <code>korean-essay</code> 스킬을{" "}
        <strong>손에 들고</strong> 글을 다듬는 식이에요. 친구가 책을 보면서
        일하는 느낌입니다.
      </p>

      <Workshop
        title="‘주간 일기 형식’ 스킬 5분 만에 만들기"
        duration="약 5분"
        difficulty="쉬움"
      >
        <Step n={1} title="어떤 책으로 만들지 정해요">
          <p>
            매주 일요일 저녁, 한 주를 돌아볼 때 펼쳐 볼 책이에요. 매번 같은
            모양으로 정리해 두면 한 달 뒤 비교가 쉬워져요.
          </p>
        </Step>

        <Step n={2} title="클로드한테 책 만들어 달라고 부탁">
          <p>
            클로드 코드에 들어가서, 아래 부탁을 그대로 붙여 넣어요.
          </p>
          <Code>{`이 폴더에 ".claude/skills/weekly-journal/SKILL.md" 스킬을 만들어 줘.

표지(frontmatter)에 이렇게 적어 줘.
- name: weekly-journal
- description: 한 주를 돌아보고 일기로 정리할 때 펼치는 책. 사용자가 "이번 주 정리해 줘", "주간 회고", "한 주 일기" 같은 말을 하면 사용한다.

본문에는 다음 순서로 일하라고 적어 줘.
1) 받는 메모를 한 번 훑고, 한 주의 분위기를 한 줄로 적는다 (예: "잔잔했지만 단단했던 한 주")
2) 다음 세 묶음으로 정리한다
   - 배운 것 3개 (구체적인 사실 위주)
   - 잘한 일 3개 (작아도 좋아)
   - 다음 주에 바꿀 것 1개 (작고 실행 가능한 것)
3) 마지막에 '나에게 한 줄' — 다음 주 나에게 보내는 짧은 응원

말투는 차분하고, 평가하지 않는 톤으로.`}</Code>
        </Step>

        <Step n={3} title="한 번 펼쳐 보기">
          <p>새 대화에서 한 주의 메모를 던져 봐요.</p>
          <Code>{`이번 주 회고 좀 정리해 줘.

— 메모 —
- 월: 새 프로젝트 킥오프, 분위기 좋았음
- 화·수: 마감 자료 만드느라 야근 두 번
- 목: 상사 1on1, 피드백 두 가지 받음 (1) 메일 톤 더 단정하게 (2) 회의 시간 줄이기
- 금: 동료랑 점심, 진짜 오랜만이라 좋았음
- 토: 거의 잠만 잤음
- 일: 운동 한 번, 책 50p`}</Code>
        </Step>

        <Step n={4} title="잘 펼쳐졌다면">
          <p>
            클로드가 <strong>weekly-journal</strong> 스킬을 알아서 펴고,
            우리가 정해 둔 형식(분위기 한 줄 → 배운 것·잘한 일·바꿀 것 → 나에게
            한 줄)대로 정리해 줄 거예요. 매주 같은 부탁만 던져도 항상 같은
            모양으로 와요.
          </p>
        </Step>

        <Callout tone="tip" title="이렇게도 키워 보세요">
          <ul className="mt-1 list-disc pl-5 space-y-1">
            <li>
              같은 폴더에 <code>examples.md</code>를 두고 좋아하는 일기 톤의
              예시 한두 편을 적어 두면, 톤이 더 또렷해져요.
            </li>
            <li>
              매주 결과를 <code>journal/2026-W19.md</code> 식으로 저장하게
              하면 한 달 뒤 ‘배운 것’만 모아 보기도 쉬워요.
            </li>
          </ul>
        </Callout>
      </Workshop>

      <h2>흔한 실수 네 가지</h2>
      <ol>
        <li>
          <strong>한 권에 모든 요리를 담는다</strong> — 한 가지 일에 한
          권으로 잘게.
        </li>
        <li>
          <strong>표지(description)가 두루뭉술</strong> — ‘언제 펴는 책인지’
          또렷이.
        </li>
        <li>
          <strong>본문을 처음부터 길게 쓴다</strong> — 다섯 줄로 시작, 일을
          시켜 보고 한 줄씩 보태기.
        </li>
        <li>
          <strong>예시 없이 ‘이런 톤으로’만</strong> — 같은 폴더에{" "}
          <code>examples.md</code>를 두고 좋은/나쁜 예시 한 묶음씩.
        </li>
      </ol>

      <h2>완성 체크리스트</h2>
      <ul>
        <li>이 책이 다루는 ‘<strong>한 가지 일</strong>’이 한 줄로 또렷한가요?</li>
        <li>
          <code>description</code>에 ‘<strong>언제 펴는지</strong>’ 적혀
          있나요?
        </li>
        <li>본문이 <strong>다섯 줄 안팎</strong>으로 시작했나요?</li>
        <li>
          예시·체크리스트 같은 보조 자료가 같은 폴더에 같이 있나요?
        </li>
        <li>
          진짜 부르면서 한 번 <strong>시켜 봤나요</strong>?
        </li>
      </ul>

      <Callout tone="good" title="이 장에서 기억할 한 줄">
        스킬 = <strong>‘자주 하는 일의 사용설명서’</strong>.{" "}
        <code>.claude/skills/이름/SKILL.md</code>에 표지를 만들고,{" "}
        <strong>‘언제 펼치는 책’</strong>인지 또렷이 적어 두면 클로드가
        알아서 펴 봅니다. 만들기는 어렵지 않아요.{" "}
        <strong>클로드한테 ‘이런 책 만들어 줘’</strong>라고 부탁만 해도 됩니다.
      </Callout>
    </PageShell>
  );
}
