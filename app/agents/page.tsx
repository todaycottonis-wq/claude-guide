import PageShell from "../_components/PageShell";
import Callout from "../_components/Callout";
import CaptureSlot from "../_components/CaptureSlot";
import AgentDiagram from "../_components/mockups/AgentDiagram";
import AgentAnatomy from "../_components/mockups/AgentAnatomy";
import AgentFlow from "../_components/mockups/AgentFlow";
import Code from "../_components/Code";

export const metadata = {
  title: "4장. 에이전트 만들기 — 클로드 가이드북",
};

export default function Page() {
  return (
    <PageShell
      chapter="4장"
      title="에이전트 만들기"
      intro={
        <>
          ‘에이전트’라고 하면 어쩐지 영화 속 비밀 요원 같지요.
          <br />
          하지만 클로드의 에이전트는 훨씬 친근해요. 한 줄로 말하면, ‘한 가지
          일만 잘하는 클로드 친구를 직접 만들어 두는 일’이에요.
          <br />
          왜 필요한지부터 처음 만드는 다섯 단계, 잘 쓰는 요령까지 천천히 같이
          가요.
        </>
      }
      prev={{ href: "/claude-code", label: "3장. 클로드 코드 시작하기" }}
      next={{ href: "/skills", label: "5장. 스킬 만들기" }}
    >
      <h2>이 장이 끝나면 할 수 있는 일</h2>
      <ul>
        <li>‘<strong>에이전트가 도대체 무엇이고 왜 필요한지</strong>’ 친구한테 한 문단으로 설명할 수 있어요.</li>
        <li>나만의 에이전트를 <strong>처음부터 끝까지 한 번 만들어</strong> 볼 수 있어요.</li>
        <li>에이전트가 <strong>알아서 불려 오게</strong> 만드는 비결을 알게 돼요.</li>
        <li>‘이건 에이전트로 만들면 좋겠다’ 싶은 일을 <strong>골라낼 수 있는 눈</strong>이 생겨요.</li>
      </ul>

      <h2>먼저, 비유 하나로 시작</h2>
      <p>
        우리가 매일 친구 한 명한테 모든 일을 부탁한다고 생각해 봐요.
        편지 써 달라고, 일정 정리해 달라고, 영어 메일 번역해 달라고, 사진
        보고 어디서 찍었는지 추측해 달라고…. 친구는 결국 머리가
        복잡해져요. 일이 뒤섞이고, 어떤 건 깜빡 잊고, 매번 톤도 들쭉날쭉해져요.
      </p>
      <p>
        그래서 똑똑한 사람들은 친구를 <strong>여러 명</strong> 두기 시작해요.
        ‘<strong>편지는 글솜씨 좋은 친구</strong>’, ‘<strong>일정은 꼼꼼한
        친구</strong>’, ‘<strong>영어는 그쪽 잘하는 친구</strong>’. 각자
        자기 분야만 신경 쓰니까 결과가 또렷하고, 다른 일과 섞이지 않아요.
      </p>
      <p>
        클로드의 <strong>에이전트</strong>가 바로 이 ‘<strong>여러 명의
        친구</strong>’예요. 차이가 있다면, 우리가 그 친구들의{" "}
        <strong>성격과 일하는 방식을 직접 정해서</strong> 둘 수 있다는 점이에요.
      </p>

      <Callout tone="note" title="에이전트라는 말이 어렵다면">
        영어 단어 <em>agent</em>는 ‘대신 일해 주는 사람’이라는 뜻이에요.
        부동산 ‘에이전트’가 집을 대신 알아봐 주는 것처럼요. 클로드의
        에이전트도 ‘<strong>나 대신 한 가지 일을 맡아 주는 클로드</strong>’라고
        생각하면 정확해요.
      </Callout>

      <h2>왜 굳이 따로 만들어요? 그냥 부탁하면 안 돼요?</h2>
      <p>
        물론 그냥 부탁해도 돼요. 다만 <strong>같은 부탁을 자주 한다면</strong>
        에이전트로 만들어 두는 편이 훨씬 편해요. 이유는 세 가지예요.
      </p>

      <h3>1) 매번 ‘어떻게 해 줘’를 다시 적지 않아도 돼요</h3>
      <p>
        ‘공식 톤으로, 3줄로, 받는 사람은 윗사람’ 같은 조건을 매번 새로
        쓰지 않아도, 친구한테 정해 둔 성격이라면 한 번에 통해요. 시키는
        쪽도, 일하는 쪽도 시간이 줄어요.
      </p>

      <h3>2) 결과가 매번 비슷한 모양으로 나와요</h3>
      <p>
        같은 친구한테 부탁한 결과는 톤과 형식이 비슷해요. 디자인 검토를
        부탁하면 항상 ‘한 줄 요약 → 좋은 점 → 고칠 점 → 우선순위’ 순서로
        와요. 비교하기도 좋고, 모아 두기도 좋아요.
      </p>

      <h3>3) 손이 많이 가는 일은 ‘대신’ 시킬 수 있어요</h3>
      <p>
        사진 50장을 보고 한 줄씩 설명을 다는 일, 긴 회의록을 짧게
        요약하는 일, 영어 메일 100통을 분류하는 일… 같은 패턴이 반복되는
        일은 에이전트한테 통째로 맡기고, 나는 결과만 받아 보면 돼요.
      </p>

      <CaptureSlot caption="사용자 부탁 → 메인 클로드가 ‘이건 그 친구 일이네’ 하고 적합한 에이전트로 넘김 → 에이전트가 자기 일만 하고 결과만 들고 돌아옴.">
        <AgentFlow />
      </CaptureSlot>

      <Callout tone="tip" title="이렇게 생각해도 좋아요">
        <strong>메인 클로드 = 사장님</strong>. <strong>에이전트 = 단골
        알바생</strong>. 사장님은 손님 부탁을 듣고 ‘이건 우리 베이커한테’,
        ‘이건 바리스타에게’ 하고 넘겨요. 알바생은 자기 자리에서 자기 일만
        하고, 결과만 사장님께 들고 와요.
      </Callout>

      <h2>그럼 에이전트는 도대체 무엇으로 이루어져 있어요?</h2>
      <p>
        놀랄 만큼 단순해요. 에이전트는 <strong>‘글이 적힌 파일 한
        장’</strong>이에요. 그게 다예요. 그 파일은 두 칸으로 나뉘어
        있어요. 위쪽엔 <strong>그 친구의 프로필 카드</strong>, 아래쪽엔
        <strong> 그 친구가 일할 때 따라야 할 안내문</strong>이에요.
      </p>

      <CaptureSlot caption="에이전트 파일의 단면도. 위쪽 노란 칸이 프로필 카드(이름·설명·도구), 아래쪽이 안내문이에요.">
        <AgentAnatomy />
      </CaptureSlot>

      <Callout tone="note" title="‘.md 파일’은 어렵지 않아요">
        파일 이름이 <code>design-reviewer.md</code>처럼 <strong>.md</strong>로
        끝나는데, 이건 <em>마크다운(Markdown)</em>이라는 형식이에요. 어렵게
        들리지만, 결국 <strong>‘조금만 꾸밀 수 있는 일반 글’</strong>이에요.
        메모장으로 열어서 평소처럼 글을 쓰고, 파일 이름 끝만{" "}
        <code>.md</code>로 두면 돼요.
      </Callout>

      <h3>위쪽 ‘프로필 카드’ — 무엇이 들어가나</h3>
      <p>
        이 부분은 줄 시작과 끝을 <code>---</code> 세 개로 막아 둬요. 이게
        ‘여기는 프로필 카드’라는 신호예요. 안에는 이런 게 들어가요.
      </p>
      <ul>
        <li>
          <strong>name</strong> — 이 친구의 이름. 영어/숫자/하이픈만 써요.
          예: <code>design-reviewer</code>, <code>email-translator</code>.
        </li>
        <li>
          <strong>description</strong> — <em>가장 중요해요.</em>{" "}
          ‘<strong>언제 부르는 친구인지</strong>’를 적는 한두 문장. 클로드가
          이 글을 보고 ‘아, 지금이 그 친구를 부를 때구나’ 하고 알아채거든요.
        </li>
        <li>
          <strong>tools</strong> — 이 친구가 들고 다닐 도구 가방. 안 적으면
          모든 도구를 다 써요. 보통은 필요한 것만 골라 줘요.
        </li>
        <li>
          <strong>model</strong> (선택) — 어떤 클로드(Opus/Sonnet/Haiku)를
          쓰게 할지. 생략하면 기본값을 따라요.
        </li>
      </ul>

      <h3>아래쪽 ‘안내문’ — 어떻게 일할지 글로 적기</h3>
      <p>
        프로필 카드 아래는 평범한 글이에요. ‘<strong>너는 이런 친구야,
        이렇게 답해 줘, 이런 순서로 일해 줘</strong>’를 평소 한국어로 적어
        두면 돼요. 시처럼 길게 쓸 필요는 없어요. 짧고 분명하게.
      </p>

      <h2>에이전트는 어디에 살까?</h2>
      <p>
        에이전트 파일은 <strong>두 군데</strong> 중 하나에 두면 돼요. 어느
        쪽이든 <code>.claude/agents/</code>라는 폴더 안에 살아요.
      </p>
      <ul>
        <li>
          <strong>이번 프로젝트에서만 쓸 거예요</strong> →{" "}
          <code>이 폴더/.claude/agents/이름.md</code>
          <br />
          예) <code>~/Desktop/내자기소개서/.claude/agents/essay-helper.md</code>
        </li>
        <li>
          <strong>어디서든 부르고 싶어요</strong> →{" "}
          <code>~/.claude/agents/이름.md</code>
          <br />
          (집 어느 방에서든 부를 수 있는 ‘우리 집 친구’예요.)
        </li>
      </ul>

      <Callout tone="warn" title="‘점(.)으로 시작하는 폴더’가 안 보여요">
        <code>.claude</code>처럼 점으로 시작하는 폴더는 컴퓨터에서 기본으로
        <strong> 숨겨져요</strong>. Mac이라면 <code>Cmd</code> +{" "}
        <code>Shift</code> + <code>.</code>를 누르면 보여요. Windows라면
        탐색기 ‘보기 → 숨김 항목’을 켜요. <strong>‘없는’ 게 아니라 ‘숨겨져
        있을’</strong> 뿐이에요.
      </Callout>

      <CaptureSlot caption=".claude/agents/ 폴더 한 칸 안에 ‘이름.md’ 파일들이 살아요. 각자가 한 명의 친구예요.">
        <AgentDiagram />
      </CaptureSlot>

      <h2>처음 만들어 보기 — 다섯 단계</h2>
      <p>
        ‘<strong>이메일 답장 다듬어 주는 친구</strong>’를 같이 만들어 봐요.
        비전공자라면 ‘에이, 코딩하는 거 아니야?’ 싶을 텐데, 이건 <strong>
        그냥 글 한 장 적는 일</strong>이에요.
      </p>

      <h3>1단계. 어떤 친구를 만들지 한 줄로 정해요</h3>
      <p>
        머릿속에 또렷한 한 줄이 있어야 해요. 예: ‘<strong>딱딱한 영어
        메일을 따뜻한 한국어 답장으로 다듬어 주는 친구</strong>.’
      </p>

      <h3>2단계. 작업할 폴더로 들어가서 클로드 코드를 켜요</h3>
      <p>
        3장에서 했던 그대로예요. 터미널을 열고, 폴더로 이동한 다음{" "}
        <code>claude</code>를 입력해요.
      </p>
      <Code filename="터미널">{`cd ~/Desktop/내폴더
claude`}</Code>

      <h3>3단계. 가장 쉬운 방법 — 클로드한테 만들어 달라고 부탁해요</h3>
      <p>
        에이전트는 결국 ‘파일 한 장 + 폴더’예요. 그러니 클로드 코드한테
        부탁하면 알아서 만들어 줘요. 비전공자에게 이게 가장 편해요.
      </p>
      <Code>{`이 폴더에 ".claude/agents/email-helper.md"라는 에이전트 파일을 만들어 줘.

성격: 딱딱한 영어 메일을 따뜻한 한국어 답장으로 다듬어 주는 친구.

답할 때 따라야 할 순서:
1) 원문 메일의 핵심 의도 한 줄 요약
2) 답장 본문 (3~5줄, 따뜻하지만 정중한 말투)
3) 중요한 약속이나 날짜가 있다면 굵게 표시

frontmatter의 description은 "영어 메일 답장이 필요할 때 호출되는 친구"라고 적어 줘.`}</Code>
      <p>
        클로드가 “파일을 만들어도 될까요?”라고 물으면 <strong>허락(Y)</strong>
        해 주세요. 끝나면 “만들었어요!” 하면서 보여 줄 거예요.
      </p>

      <Callout tone="tip" title="더 빠른 길도 있어요">
        클로드 코드 안에서 <code>/agents</code>라고 치면 에이전트를 만들고
        고치는 화면이 떠요. 이름과 설명만 채우면 자동으로 파일을 만들어
        줘요. 처음에는 클로드한테 글로 부탁하는 게 더 직관적일 수 있지만,
        익숙해지면 <code>/agents</code>가 빨라요.
      </Callout>

      <h3>4단계. 만들어진 파일을 한 번 열어 봐요</h3>
      <p>
        만들어진 파일을 메모장이나 ‘텍스트 편집기’로 열어 봐요. 위쪽엔{" "}
        <code>---</code>로 둘러싸인 프로필 카드, 아래쪽엔 안내문이 있을
        거예요. 어색한 부분이 있으면 <strong>한국어 글 고치듯</strong> 그
        자리에서 고쳐도 돼요. 파일을 저장하면 끝.
      </p>

      <h3>5단계. 정말 만들어졌는지 부르면서 확인해요</h3>
      <p>
        클로드 코드에 이렇게 적어 봐요.
      </p>
      <Code>{`아래 영어 메일 답장 좀 다듬어 줘:

"Hi, can we move tomorrow's call to 4pm instead of 3pm? Sorry for the late notice."`}</Code>
      <p>
        잘 만들어졌다면, 클로드가 <strong>email-helper</strong>라는 친구를
        부르고, 그 친구가 우리가 정해 둔 순서(요약 → 답장 → 굵게 표시)대로
        답을 내요. 만약 그냥 메인 클로드가 답한다면, 5장으로 넘어가기 전에
        <strong> 6번 ‘설명문이 가장 중요해요’</strong> 절을 꼭 읽어 보세요.
      </p>

      <Callout tone="good" title="여기까지 했다면">
        축하해요! 첫 에이전트를 만든 거예요. 클로드한테 글로 부탁만 해도
        만들 수 있다는 점이 가장 큰 비밀이에요. 이제부터는{" "}
        <strong>‘잘 쓰는 법’</strong>을 익혀 봐요.
      </Callout>

      <h2>부르는 두 가지 방법</h2>

      <h3>방법 1. 자동으로 불려 오게 하기</h3>
      <p>
        가장 우아한 방법이에요. 우리가 평소처럼 부탁하면, 클로드가 알아서
        ‘아, 이건 그 친구 일이네’ 하고 골라 불러요. 비결은 단 하나,{" "}
        <strong>프로필 카드의 <code>description</code>을 잘 적는 것</strong>
        이에요.
      </p>

      <h3>방법 2. 이름을 직접 불러 주기</h3>
      <p>
        급할 땐 직접 부르면 돼요. ‘<strong>email-helper 에이전트 불러서
        이거 다듬어 줘</strong>’처럼요. 에이전트 이름만 알면 언제든 호출할
        수 있어요.
      </p>

      <h2>설명문(description)이 가장 중요해요</h2>
      <p>
        에이전트를 만들고 ‘왜 안 불려 오지?’ 하는 일이 가장 많이 일어나는
        이유는 <strong>설명문이 흐릿해서</strong>예요. 클로드는 우리가 부탁한
        말과 각 에이전트의 <code>description</code>을 비교해 보고 누구를
        부를지 정해요. 그러니 설명문이 ‘<strong>언제·어떤 말이 나올
        때</strong>’를 또렷하게 담아야 해요.
      </p>

      <Callout tone="bad" title="이러면 거의 호출되지 않아요">
        <code>description: 영어 잘하는 친구</code>
        <br />
        <span className="text-sm text-rose-700">
          → ‘영어 잘하는’이 너무 두루뭉술. 어떤 일에 부르라는 건지 모르겠어요.
        </span>
      </Callout>

      <Callout tone="good" title="이렇게 적어 두면 잘 불려 와요">
        <code>
          description: 영어 메일이나 외국인 동료 메시지를 한국어 답장으로
          다듬어 줄 때 호출되는 친구. 사용자가 “답장 다듬어 줘”, “이 메일
          어떻게 답해?”, “정중한 한국어로 바꿔 줘” 같은 말을 하면 사용해요.
        </code>
      </Callout>

      <p>좋은 description의 모양은 보통 이런 식이에요.</p>
      <ol>
        <li>
          <strong>무엇을 하는 친구인가</strong> — “영어 메일을 한국어 답장으로
          다듬어 주는 친구.”
        </li>
        <li>
          <strong>어떤 입력이 들어올 때인가</strong> — “영어 메일 본문이나
          채팅 메시지가 들어오면.”
        </li>
        <li>
          <strong>어떤 말이 나올 때 부를지</strong> — “‘답장 다듬어 줘’,
          ‘이 메일 어떻게 답해?’ 같은 말이 나오면.”
        </li>
      </ol>

      <Callout tone="tip" title="작은 요령">
        실제로 사용자(=나)가 평소에 어떻게 말하는지 곰곰이 떠올려서, 그
        말투를 description에 그대로 넣어 두세요. 클로드가 그 말과 우리
        부탁을 비교해서 친구를 부르거든요.
      </Callout>

      <h2>도구 가방(tools)은 가볍게</h2>
      <p>
        에이전트한테 줄 도구 가방은 <strong>가벼울수록 좋아요</strong>.
        무거운 가방을 든 친구는 발이 느려요. 또 ‘파일을 지울 수 있는
        도구’를 글만 다듬는 친구한테 들려 줄 필요는 없잖아요.
      </p>
      <ul>
        <li>
          <strong>읽기만 하는 친구</strong> (글 다듬기, 디자인 검토): 보통{" "}
          <code>Read</code>, <code>Grep</code> 정도면 충분.
        </li>
        <li>
          <strong>인터넷에서 찾아오는 친구</strong> (시장 조사, 자료 검색):{" "}
          <code>WebSearch</code>, <code>WebFetch</code>를 추가.
        </li>
        <li>
          <strong>파일을 만들거나 고치는 친구</strong> (코드 작성, 보고서
          작성): <code>Write</code>, <code>Edit</code>를 추가.
        </li>
      </ul>
      <p>
        비전공자라면 처음에는 <strong><code>tools</code> 줄을 아예 안
        적어도</strong> 괜찮아요. 그러면 클로드가 알아서 필요한 만큼만 써요.
        나중에 결과가 어색해지면 그때 가방을 고치면 돼요.
      </p>

      <h2>자주 만들어 두면 좋은 친구 모음</h2>
      <p>
        실제로 비전공자가 많이 쓰는 에이전트 예시들이에요. 마음에 드는 게
        있으면 그대로 따라 만들어 보세요.
      </p>

      <h3>① 글 다듬기 친구 (essay-helper)</h3>
      <ul>
        <li><strong>언제</strong>: 자기소개서, 메일, 보고서를 다듬을 때.</li>
        <li><strong>받는 것</strong>: 다듬을 글, 누구에게 보낼 글인지.</li>
        <li>
          <strong>주는 것</strong>: 다듬은 본문 + ‘무엇을 왜 고쳤는지’ 짧은
          메모.
        </li>
      </ul>

      <h3>② 회의록 정리 친구 (meeting-notes)</h3>
      <ul>
        <li><strong>언제</strong>: 회의 끝나고 메모를 정리할 때.</li>
        <li><strong>받는 것</strong>: 거친 메모.</li>
        <li>
          <strong>주는 것</strong>: ‘오늘 결정된 것’, ‘다음에 할 일’, ‘남은
          질문’ 세 묶음으로 정리.
        </li>
      </ul>

      <h3>③ 영어 메일 답장 친구 (email-helper)</h3>
      <ul>
        <li><strong>언제</strong>: 영어 메일에 답해야 할 때.</li>
        <li><strong>받는 것</strong>: 원문 메일.</li>
        <li>
          <strong>주는 것</strong>: 핵심 의도 한 줄 요약 + 따뜻한 답장 본문.
        </li>
      </ul>

      <h3>④ 자료 찾아오는 친구 (researcher)</h3>
      <ul>
        <li><strong>언제</strong>: 새로운 주제를 빠르게 익히고 싶을 때.</li>
        <li><strong>받는 것</strong>: 알고 싶은 주제 한 줄.</li>
        <li>
          <strong>주는 것</strong>: 핵심 5줄 요약 + 출처 링크 3개 + 더
          깊이 알고 싶다면 어디로 가야 하는지.
        </li>
        <li>
          <strong>도구 가방</strong>: <code>WebSearch</code>,{" "}
          <code>WebFetch</code>.
        </li>
      </ul>

      <h3>⑤ 약속·일정 정리 친구 (planner)</h3>
      <ul>
        <li><strong>언제</strong>: 여러 사람 일정 잡거나, 할 일을 줄 세울 때.</li>
        <li><strong>받는 것</strong>: 후보 시간들, 사람들의 가능 시간.</li>
        <li>
          <strong>주는 것</strong>: 가장 잘 맞는 시간 추천 + 그렇게 고른
          이유.
        </li>
      </ul>

      <h2>흔한 실수 네 가지</h2>

      <h3>1. 한 친구한테 너무 많은 일을 시킨다</h3>
      <p>
        “글도 다듬고, 그림도 보고, 회의록도 정리하고…” → 결국 모든 게 어정쩡해져요.
        <strong> 한 친구는 한 가지 일</strong>이라는 원칙을 지켜요. 일이
        다르면 다른 친구를 만들어요.
      </p>

      <h3>2. 설명문(description)이 두루뭉술하다</h3>
      <p>
        “좋은 친구”, “도와주는 친구” 같은 표현은 클로드도 우리도 헷갈려요.
        <strong> ‘언제·어떤 말이 나올 때 부르는지’</strong>를 적어요.
      </p>

      <h3>3. 처음부터 너무 길게 안내문을 쓴다</h3>
      <p>
        다섯 줄로 시작해서, 일을 시켜 보고 어색한 점이 있을 때 한 줄씩
        보태는 게 가장 빨라요. 길게 쓰면 본인도 길을 잃어요.
      </p>

      <h3>4. 도구 가방을 너무 무겁게 준다</h3>
      <p>
        ‘<code>tools</code>를 안 적으면 다 쓸 수 있다’는 사실을 잊고, 모든
        도구를 다 적어 두는 분이 많아요. 글 다듬기 친구에게 인터넷 검색
        도구는 필요 없어요. 가방은 가볍게.
      </p>

      <h2>완성 체크리스트</h2>
      <ul>
        <li>이 친구가 하는 ‘<strong>한 가지 일</strong>’이 한 줄로 또렷한가요?</li>
        <li>
          <code>description</code>에 ‘<strong>언제·어떤 말이 나올 때</strong>
          부르는지’ 적혀 있나요?
        </li>
        <li>
          <strong>도구 가방</strong>이 필요한 만큼만 들어 있나요? (혹은
          비워서 자동으로?)
        </li>
        <li>
          안내문(아래쪽)이 <strong>다섯 줄 안팎</strong>으로 시작했나요?
          처음부터 길지 않게.
        </li>
        <li>
          진짜 부르면서 한 번 <strong>시켜 봤나요</strong>? 결과가 어색하면
          그때 한 줄씩 고쳐요.
        </li>
      </ul>

      <Callout tone="good" title="이 장에서 기억할 한 줄">
        에이전트 = <strong>‘한 가지 잘하는 친구’를 글로 적어 둔 파일</strong>.
        가장 큰 비밀은 <strong>‘설명문이 또렷할수록 알아서 잘 불려 온다’</strong>.
        만들기는 어렵지 않아요. <strong>클로드한테 ‘이런 친구 만들어
        줘’라고 부탁만 해도</strong> 됩니다.
      </Callout>
    </PageShell>
  );
}
