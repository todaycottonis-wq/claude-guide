import PageShell from "../_components/PageShell";
import Callout from "../_components/Callout";
import CaptureSlot from "../_components/CaptureSlot";
import ClaudeChat from "../_components/mockups/ClaudeChat";

export const metadata = {
  title: "1장. 클로드란 누구야? — 클로드 가이드북",
};

export default function Page() {
  return (
    <PageShell
      chapter="1장"
      title="클로드란 누구야?"
      intro="클로드(Claude)는 한 마디로, 글로 대화하는 똑똑한 친구예요. 글을 쓰고, 그림을 보고, 표를 읽고, 코드를 짜는 일까지 함께 해줘요. 먼저 ‘이 친구를 어디서 만나는지’부터 살펴볼게요."
      next={{ href: "/prompting", label: "2장. 잘 부탁하는 법" }}
    >
      <h2>클로드는 어떤 친구일까?</h2>
      <p>
        클로드는 <strong>‘글로 대화하는 친구’</strong>라고 생각하면 가장
        쉬워요. 우리가 무엇을 부탁하면, 글로 대답을 해 줘요. 어려운 책을
        쉽게 풀어 주거나, 일기를 고쳐 주거나, 게임 규칙을 만들어 주는 일도
        잘해요. 그림을 보여 주면 그 그림을 설명해 줄 수도 있어요.
      </p>

      <Callout tone="note" title="작은 메모">
        클로드는 사람이 아니에요. 모르는 것을 자신 있게 말하기도 하고, 가끔
        틀리기도 해요. 그래서 <strong>중요한 일은 사람이 한 번 더 확인</strong>
        하는 게 좋아요. 이 책 곳곳에서 같은 이야기를 반복할 거예요.
      </Callout>

      <h2>클로드를 만나는 곳들</h2>
      <p>클로드는 한 군데에만 있지 않아요. 만나는 길이 여러 개랍니다.</p>
      <ul>
        <li>
          <strong>웹사이트(claude.ai)</strong> — 인터넷 창에서 바로 켜요.
          가입만 하면 끝. 가장 흔하게 쓰는 길이에요.
        </li>
        <li>
          <strong>데스크탑 앱</strong> — 컴퓨터에 깔아서 써요. 화면이 더
          넓고, 캡처를 끌어다 놓기도 편해요.
        </li>
        <li>
          <strong>휴대폰 앱</strong> — 가방 안의 친구. 길에서 궁금한 걸
          물어볼 때 좋아요.
        </li>
        <li>
          <strong>클로드 코드(Claude Code)</strong> — <em>터미널</em>이라는
          까만 창에서 클로드와 이야기해요. 코드를 짜고 고치는 일에 특히
          잘해요. 3장에서 자세히 만나요.
        </li>
        <li>
          <strong>API</strong> — 다른 앱이 클로드와 이야기하도록 연결하는
          길. 개발자들이 많이 써요. 우리는 일단 몰라도 괜찮아요.
        </li>
      </ul>

      <CaptureSlot
        caption="클로드 웹 화면 모형 — 왼쪽에 대화 목록, 가운데에 답변, 아래에 입력창."
        hint="실제 캡처로 바꾸려면 public/captures/claude-web.png 파일을 넣고, src 속성에 그 경로를 적어 주세요."
      >
        <ClaudeChat />
      </CaptureSlot>

      <h2>모델 이름이 자꾸 바뀌네?</h2>
      <p>
        클로드는 한 명이 아니라 <strong>여러 명의 형제</strong>예요. 큰
        형은 어려운 일을 잘하고, 둘째 형은 빠르고 똑똑하고, 막내는 작은 일을
        가볍게 해요. 이름은 자주 새 버전이 나와요. 지금은 이렇게 부른다는
        정도만 기억해도 충분해요.
      </p>
      <ul>
        <li>
          <strong>Opus</strong> — 가장 무거운 일을 잘하는 큰 형. 머리는 좋은
          만큼 답이 좀 늦을 때가 있어요.
        </li>
        <li>
          <strong>Sonnet</strong> — 똑똑하고 빠른 둘째. 일상에서 가장 많이
          만나게 돼요.
        </li>
        <li>
          <strong>Haiku</strong> — 가볍고 잰걸음인 막내. 짧고 빠른 답이
          필요할 때 좋아요.
        </li>
      </ul>

      <Callout tone="tip" title="고를 때는 이렇게">
        뭘 골라야 할지 모르겠다면 <strong>Sonnet으로 시작</strong>하세요.
        결과가 답답하다 싶으면 같은 질문을 Opus한테 다시 물어보고, 너무
        오래 걸리면 Haiku로 가볍게 시도해 보면 돼요.
      </Callout>

      <h2>클로드는 무엇을 잘하나요?</h2>
      <ul>
        <li>
          <strong>글쓰기</strong> — 편지, 발표문, 자기소개서 초안, 동화책
          한 페이지.
        </li>
        <li>
          <strong>읽고 정리하기</strong> — 긴 글을 짧게 요약하고, 핵심만
          뽑아 줘요.
        </li>
        <li>
          <strong>설명해 주기</strong> — ‘초등학생한테 설명해 줘’ 한 마디만
          붙여도 친절해져요.
        </li>
        <li>
          <strong>그림 읽기</strong> — 사진이나 표를 올리면 무엇이 보이는지
          말해 줘요.
        </li>
        <li>
          <strong>코드 짜기</strong> — 작은 웹사이트, 계산기, 게임의 뼈대
          같은 것을 만들어 줘요.
        </li>
        <li>
          <strong>아이디어 내기</strong> — 회사 이름 후보 20개, 행사 제목
          후보 30개… 같이 브레인스토밍을 해줘요.
        </li>
      </ul>

      <h2>못하거나, 조심해야 하는 일</h2>
      <ul>
        <li>
          <strong>최신 사실</strong>은 잘 몰라요. 어제 일어난 뉴스 같은 건
          틀릴 수 있어요. 검색 도구가 켜진 자리에서만 확인이 가능해요.
        </li>
        <li>
          <strong>숫자 계산</strong>은 가끔 틀려요. 진짜 중요한 계산은
          계산기로 한 번 더 해 봐요.
        </li>
        <li>
          <strong>나의 비밀</strong>이나 비밀번호는 적지 마세요. 글이 어떻게
          남는지 모르니까요.
        </li>
        <li>
          <strong>딱 정해진 답</strong>이 있어야 하는 의료·법률 결정은 사람
          전문가의 확인이 필요해요.
        </li>
      </ul>

      <Callout tone="good" title="이 장에서 기억할 한 줄">
        클로드 = <strong>글로 대화하는 친구</strong>. 잘하는 일이 많지만,
        <strong> 중요한 답은 사람이 한 번 더 검사</strong>한다.
      </Callout>
    </PageShell>
  );
}
