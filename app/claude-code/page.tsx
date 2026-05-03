import PageShell from "../_components/PageShell";
import Callout from "../_components/Callout";
import CaptureSlot from "../_components/CaptureSlot";
import ClaudeCode from "../_components/mockups/ClaudeCode";
import CommandsMockup from "../_components/mockups/CommandsMockup";
import Code from "../_components/Code";

export const metadata = {
  title: "3장. 클로드 코드 시작하기 — 클로드 가이드북",
};

export default function Page() {
  return (
    <PageShell
      chapter="3장"
      title="클로드 코드 시작하기"
      intro="‘클로드 코드(Claude Code)’는 컴퓨터 안에 사는 도우미예요. 까만 창(터미널)에서 글로 부탁하면, 폴더 안의 파일을 읽고 고쳐 줘요. 처음에는 까매서 무서워 보여도, 막상 해 보면 카톡이랑 비슷해요."
      prev={{ href: "/prompting", label: "2장. 잘 부탁하는 법" }}
      next={{ href: "/agents", label: "4장. 에이전트 만들기" }}
    >
      <h2>이 친구는 어디에 살아?</h2>
      <p>
        지금까지 본 클로드(웹·앱)는 <strong>인터넷 창</strong>에 살았어요.
        클로드 코드는 <strong>내 컴퓨터의 폴더 안</strong>에 살아요. 그 폴더의
        파일을 읽고, 고치고, 새 파일을 만들 수 있어요. 그래서 코딩하는
        사람들에게 특히 인기가 많아요.
      </p>

      <CaptureSlot
        caption="터미널에서 클로드 코드와 대화하는 모습. 까만 창이지만 결국 ‘말로 부탁하는 도구’예요."
        hint="실제 화면을 넣고 싶다면 클로드 코드를 켠 터미널을 캡처해서 public/captures/claude-code.png로 저장하고 src 속성으로 가리키세요."
      >
        <ClaudeCode />
      </CaptureSlot>

      <h2>설치는 한 줄로 끝</h2>
      <p>
        터미널을 켜고 아래 한 줄을 붙여 넣으세요. (Mac이면 ‘터미널’ 앱,
        Windows면 ‘PowerShell’이나 ‘Windows Terminal’이에요.)
      </p>
      <Code filename="터미널">{`npm install -g @anthropic-ai/claude-code`}</Code>
      <p>
        설치가 끝났다면, 작업할 폴더로 들어가서 <code>claude</code>라고
        입력해요.
      </p>
      <Code filename="터미널">{`cd ~/Desktop/my-website
claude`}</Code>
      <p>
        그러면 클로드가 “안녕하세요!” 하고 인사를 해요. 이제부터는 우리가
        평소에 부탁하던 그대로 글로 적으면 돼요.
      </p>

      <Callout tone="note" title="작은 메모">
        처음 한 번은 <strong>로그인</strong>을 해야 해요. 화면에 뜨는
        주소를 인터넷 창에서 열고 ‘로그인 → 허락’을 누르면 끝.
      </Callout>

      <h2>첫 부탁은 이렇게</h2>
      <p>
        부탁은 평소처럼 한국어로. 단, 폴더 안에서 일하므로 ‘<strong>이
        폴더의 무엇을</strong>’ 만지면 되는지 같이 알려 주는 게 좋아요.
      </p>
      <Code>{`이 폴더의 README를 읽어 보고,
이 프로젝트가 무엇을 하는 건지 한 문단으로 설명해 줘.`}</Code>
      <p>
        클로드 코드는 <em>Read</em>(읽기), <em>Write</em>(쓰기) 같은
        <strong> 도구</strong>를 갖고 있어요. 도구를 쓸 때는 우리한테
        “이 파일을 고쳐도 될까요?” 하고 물어봐요. 우리는 <strong>허락(Y)</strong>
        하거나 <strong>안 됨(N)</strong>을 누르면 돼요.
      </p>

      <Callout tone="warn" title="조심!">
        ‘무엇이든 다 허락(Always allow)’은 처음에는 <strong>피하는 게
        좋아요</strong>. 의도치 않게 파일이 지워질 수 있어요. 손에 익을
        때까지는 한 번씩 확인해 주는 습관이 안전해요.
      </Callout>

      <h2>자주 쓰는 슬래시 명령</h2>
      <p>
        대화창에서 <code>/</code>를 치면 명령어 목록이 떠요. 마치 게임의
        ‘메뉴 버튼’과 비슷해요.
      </p>

      <CaptureSlot caption="자주 쓰는 슬래시 명령들 — 외울 필요는 없고, 필요할 때 / 만 쳐서 골라 쓰면 돼요.">
        <CommandsMockup />
      </CaptureSlot>

      <h2>일이 끝났다 싶으면</h2>
      <p>
        한 가지 일이 끝나면 <code>/clear</code>로 깨끗하게 비우고 새 대화로
        시작해 보세요. 대화가 너무 길어지면 클로드가 옛날 이야기까지 다
        끌고 다녀서 헷갈릴 때가 있어요.
      </p>

      <Callout tone="tip" title="습관 한 가지">
        새 폴더에서 <code>/init</code>을 한 번 돌려 보세요.
        <strong> CLAUDE.md</strong>라는 ‘이 폴더 안내문’이 만들어져요. 그
        안내문은 다음에 클로드가 들어올 때마다 자동으로 읽혀요. 사람으로
        치면 ‘우리 집 사용 설명서’를 현관에 붙여 두는 셈이에요.
      </Callout>

      <h2>안전 수칙 세 가지</h2>
      <ol>
        <li>
          <strong>중요한 폴더에서 처음부터 막 시키지 않기.</strong> 새
          폴더를 만들어 거기서 연습부터 해요.
        </li>
        <li>
          <strong>git을 쓰는 곳이라면 자주 커밋.</strong> 망가져도 되돌릴
          수 있어요.
        </li>
        <li>
          <strong>한꺼번에 다 시키지 않기.</strong> 한 단계씩, 결과를
          본 다음 다음 부탁.
        </li>
      </ol>

      <Callout tone="good" title="이 장에서 기억할 한 줄">
        클로드 코드는 <strong>‘폴더 안에 사는 클로드’</strong>. 부탁은 평소처럼,
        다만 <strong>한 단계씩, 확인하면서</strong>.
      </Callout>
    </PageShell>
  );
}
