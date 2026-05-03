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
      title="클로드 코드, 처음 켜기"
      intro="‘클로드 코드(Claude Code)’는 컴퓨터 안에 사는 클로드입니다. 까만 창(터미널)에서 글로 부탁하면, 폴더 안의 파일을 읽고 고쳐 줘요. 처음에는 무서워 보여도, 막상 해 보면 카톡과 비슷합니다. 비전공자도 ‘파일 정리 / 글 다듬기 / 자동화’에 충분히 활용할 수 있어요."
      prev={{ href: "/prompting", label: "2장. 잘 부탁하는 법" }}
      next={{ href: "/agents", label: "4장. 에이전트 만들기" }}
    >
      <h2>이 친구는 어디에 살아요?</h2>
      <p>
        지금까지 본 클로드(웹·앱)는 <strong>인터넷 창</strong>에 살았어요.
        클로드 코드는 <strong>내 컴퓨터의 폴더 안</strong>에 삽니다. 그
        폴더의 파일을 읽고, 고치고, 새 파일을 만들 수 있어요. 그래서
        코딩하는 사람들에게 특히 인기가 많지만, <strong>비전공자에게도 충분히
        쓸모</strong>가 있습니다.
      </p>

      <h3>비전공자가 클로드 코드를 쓰는 자리</h3>
      <ul>
        <li>
          <strong>파일 한 묶음 정리하기</strong> — 사진 50장의 이름을
          ‘날짜_장소’로 한 번에 바꾼다거나, 영수증 PDF에서 금액을 모아
          엑셀로 만든다거나.
        </li>
        <li>
          <strong>긴 글 다듬기</strong> — 자기소개서·블로그 초안을 폴더에
          저장해 두고 ‘여기 글들 다 같은 톤으로 다듬어 줘’.
        </li>
        <li>
          <strong>매주 같은 일</strong> — 주간 보고서 양식 채우기, 이메일
          템플릿 만들기.
        </li>
        <li>
          <strong>작은 자동화</strong> — ‘이 폴더의 .docx 파일들 다 PDF로
          바꿔 줘’ 같은 잡일.
        </li>
      </ul>

      <CaptureSlot
        caption="터미널에서 클로드 코드와 대화하는 모습. 까만 창이지만 결국 ‘말로 부탁하는 도구’예요."
        hint="실제 화면을 넣고 싶다면 클로드 코드를 켠 터미널을 캡처해서 public/captures/claude-code.png로 저장하고 src 속성으로 가리키세요."
      >
        <ClaudeCode />
      </CaptureSlot>

      <h2>‘터미널’이 무서운 사람을 위한 한 줄</h2>
      <p>
        터미널은 <strong>‘글로 컴퓨터한테 말 거는 창’</strong>이에요. 우리가
        평소에 폴더를 클릭으로 여는 대신, 글로 ‘이 폴더 열어 줘’라고 적는
        곳입니다. 명령어가 무수히 많아 보이지만,{" "}
        <strong>클로드 코드를 쓰려고 외워야 할 명령어는 사실상 두 개</strong>
        예요.
      </p>
      <ul>
        <li>
          <code>cd 폴더경로</code> — 그 폴더로 들어가요. (cd는 change
          directory의 줄임말)
        </li>
        <li>
          <code>claude</code> — 클로드 코드를 켭니다.
        </li>
      </ul>

      <h2>설치는 한 줄로 끝</h2>
      <p>
        터미널을 켜고 아래 한 줄을 붙여 넣으세요. (Mac이면 ‘터미널’ 앱,
        Windows면 ‘PowerShell’이나 ‘Windows Terminal’입니다.)
      </p>
      <Code filename="터미널">{`npm install -g @anthropic-ai/claude-code`}</Code>
      <p>
        설치가 끝났다면, 작업할 폴더로 들어가서 <code>claude</code>라고
        입력해요.
      </p>
      <Code filename="터미널">{`cd ~/Desktop/내폴더
claude`}</Code>
      <p>
        그러면 클로드가 “안녕하세요!” 하고 인사를 합니다. 이제부터는
        평소처럼 한국어로 부탁하면 됩니다.
      </p>

      <Callout tone="note" title="작은 메모">
        처음 한 번은 <strong>로그인</strong>이 필요해요. 화면에 뜨는 주소를
        인터넷 창에서 열고 ‘로그인 → 허락’을 누르면 끝입니다.
      </Callout>

      <h2>처음 5분 시나리오</h2>
      <p>
        ‘설치는 했는데, 무얼 시켜 봐야 하지?’ 하는 분을 위해 비코딩 부탁
        다섯 개를 추렸어요. 빈 폴더를 새로 만들고, 그 안에서 따라 해 보면
        가장 안전합니다.
      </p>
      <ol>
        <li>
          <strong>안내문 만들기</strong> — “이 폴더에 어떤 일을 할지
          README.md를 한 페이지짜리로 만들어 줘.”
        </li>
        <li>
          <strong>한국어 글 다듬기</strong> — “draft.txt에 적힌 내 글을 더
          깔끔한 한국어로 다듬어서 같은 파일에 저장해 줘.”
        </li>
        <li>
          <strong>표 만들기</strong> — “이 폴더의 영수증.txt들을 보고
          ‘날짜·항목·금액·메모’ 표로 정리해서 receipts.csv를 만들어 줘.”
        </li>
        <li>
          <strong>이름 바꾸기</strong> — “photos 폴더의 사진 이름을
          ‘2026-05-01_여행1.jpg’ 식으로 바꿔 줘. 원본 이름은 메모로 남겨
          두고.”
        </li>
        <li>
          <strong>요약 만들기</strong> — “회의록.md 안의 회의 다섯 건을 각각
          세 줄로 요약해서 summary.md로 저장해 줘.”
        </li>
      </ol>

      <h2>‘이 파일 고쳐도 될까요?’ — 권한 묻는 창</h2>
      <p>
        클로드 코드는 <em>Read</em>(읽기), <em>Write</em>(쓰기) 같은{" "}
        <strong>도구</strong>를 갖고 있어요. 도구를 쓸 때는 우리에게
        “이 파일을 고쳐도 될까요?” 하고 물어봅니다. 우리는{" "}
        <strong>허락(Y)</strong>하거나 <strong>거절(N)</strong>을 누르면
        돼요.
      </p>

      <Callout tone="warn" title="허락 누르기 전 두 가지만 보기">
        <ol className="list-decimal pl-5 mt-1 space-y-1">
          <li>
            <strong>경로</strong> — 어느 폴더의 어느 파일을 건드리려 하나요?
            예상한 곳이 맞나요?
          </li>
          <li>
            <strong>동작</strong> — Read(읽기)면 안전, Write(쓰기)·Edit(고치기)면
            한 번 더 살펴보기. 특히 ‘rm’, ‘delete’가 보이면 멈춰요.
          </li>
        </ol>
      </Callout>

      <Callout tone="bad" title="처음에 피해야 할 것">
        ‘무엇이든 다 허락(Always allow)’은 처음에는{" "}
        <strong>피하는 게 좋아요</strong>. 의도치 않게 파일이 지워질 수
        있어요. 손에 익을 때까지는 한 번씩 확인해 주는 습관이 안전합니다.
      </Callout>

      <h2>자주 쓰는 슬래시 명령</h2>
      <p>
        대화창에서 <code>/</code>를 치면 명령어 목록이 떠요. 마치 게임의
        ‘메뉴 버튼’과 비슷합니다.
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
        안내문은 다음에 클로드가 들어올 때마다 자동으로 읽힙니다. 사람으로
        치면 ‘우리 집 사용 설명서’를 현관에 붙여 두는 셈이에요.
      </Callout>

      <h2>자주 막히는 곳 (FAQ)</h2>
      <h3>‘claude’ 명령이 없다고 나와요</h3>
      <p>
        설치가 끝났는데도 <code>claude: command not found</code>가 보이면,
        터미널을 한 번 닫았다가 다시 열어 보세요. 그래도 안 되면{" "}
        <code>npm root -g</code>를 실행해서 그 안에{" "}
        <code>@anthropic-ai/claude-code</code>가 있는지 확인합니다. 없으면{" "}
        <code>npm install -g @anthropic-ai/claude-code</code>를 다시 한번.
      </p>

      <h3>‘이 폴더에 들어가기 싫어요’ 같은 답이 나와요</h3>
      <p>
        클로드 코드는 켜진 폴더 바깥의 파일을 함부로 만지지 않아요. 안전을
        위한 기본값입니다. 그 폴더로 직접 <code>cd</code>해서 들어가서
        클로드를 켜야 그 안의 파일을 다룰 수 있습니다.
      </p>

      <h3>한국어 입력이 어색해요</h3>
      <p>
        터미널에서 한글 입력에 문제가 있다면 ‘iTerm2(Mac)’나 ‘Windows
        Terminal(Windows)’ 같은 좀 더 현대적인 터미널을 쓰는 걸 추천해요.
        디폴트 터미널보다 한글이 깔끔합니다.
      </p>

      <h3>너무 길어진 대화를 어떻게 해요?</h3>
      <p>
        <code>/clear</code>로 비우거나, 작업이 한 단락 끝났다면 <code>
        /compact</code>로 지금까지의 대화를 짧게 압축할 수 있어요.{" "}
        <code>/compact</code> 후에는 클로드가 ‘방금 무슨 일을 했는지’를 한
        문단으로 정리해 두고 새 부탁을 받기 좋은 상태가 됩니다.
      </p>

      <h2>안전 수칙 세 가지</h2>
      <ol>
        <li>
          <strong>중요한 폴더에서 처음부터 막 시키지 않기.</strong> 새
          폴더를 만들어 거기서 연습부터 합니다.
        </li>
        <li>
          <strong>git을 쓰는 곳이라면 자주 커밋.</strong> 망가져도 되돌릴
          수 있어요.
        </li>
        <li>
          <strong>한꺼번에 다 시키지 않기.</strong> 한 단계씩, 결과를 본
          다음 다음 부탁.
        </li>
      </ol>

      <Callout tone="good" title="이 장에서 기억할 한 줄">
        클로드 코드는 <strong>‘폴더 안에 사는 클로드’</strong>. 부탁은
        평소처럼, 다만 <strong>한 단계씩, 확인하면서</strong>. 비전공자에게도{" "}
        <strong>파일 정리·글 다듬기·작은 자동화</strong>에 충분히 쓸모가
        있습니다.
      </Callout>
    </PageShell>
  );
}
