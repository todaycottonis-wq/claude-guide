import PageShell from "../_components/PageShell";
import Callout from "../_components/Callout";
import CaptureSlot from "../_components/CaptureSlot";
import PromptCompare from "../_components/mockups/PromptCompare";
import Code from "../_components/Code";

export const metadata = {
  title: "2장. 잘 부탁하는 법 — 클로드 가이드북",
};

export default function Page() {
  return (
    <PageShell
      chapter="2장"
      title="잘 부탁하는 법"
      intro="클로드는 친구처럼 부탁을 들어 줘요. 친구한테도 ‘이거 해줘’ 한 마디만 던지면 어리둥절하잖아요. 클로드도 똑같아요. 다섯 가지만 신경 쓰면 답이 훨씬 좋아져요."
      prev={{ href: "/claude", label: "1장. 클로드란 누구야?" }}
      next={{ href: "/claude-code", label: "3장. 클로드 코드 시작하기" }}
    >
      <h2>먼저, 비교해 볼게요</h2>
      <p>
        같은 부탁이라도 어떻게 말하느냐에 따라 결과가 완전히 달라져요.
      </p>

      <CaptureSlot caption="왼쪽처럼 두루뭉술하면 답도 두루뭉술. 오른쪽처럼 분명하면 답도 분명해져요.">
        <PromptCompare />
      </CaptureSlot>

      <h2>요령 1. ‘누구한테, 무엇을’ 분명하게</h2>
      <p>
        클로드한테 부탁할 때는 <strong>받는 사람</strong>과 <strong>결과의
        모양</strong>을 같이 알려 주세요. 친구한테 “편지 좀 써 줘” 하면 누구
        한테 보낼 건지 모르잖아요.
      </p>

      <Callout tone="bad" title="이러면 헷갈려요">
        “감사 인사 좀 써 줘.”
      </Callout>
      <Callout tone="good" title="이렇게 좋아요">
        <strong>학교 담임 선생님</strong>께 보낼 감사 편지를 <strong>3줄</strong>
        로 써 줘. 너무 거창하지 않게, 따뜻한 말투로.
      </Callout>

      <h2>요령 2. 결과의 모양을 미리 정해 주기</h2>
      <p>
        ‘목록으로’, ‘표로’, ‘짧은 문단으로’처럼 결과의 그릇을 정해 주세요.
        그릇이 있으면 클로드는 그 안에 깔끔하게 담아 줘요.
      </p>
      <ul>
        <li>“다섯 줄짜리 목록으로 만들어 줘”</li>
        <li>“표로 비교해 줘 — 항목, 장점, 단점”</li>
        <li>“200자 안쪽으로, 한 문단으로 정리해 줘”</li>
      </ul>

      <h2>요령 3. 예시를 한 줄 보여 주기</h2>
      <p>
        말로만 설명하기 어렵다면 <strong>‘이런 느낌’ 예시 한 줄</strong>을
        같이 줘 보세요. 클로드는 그 모양을 따라 만들어요.
      </p>
      <Code>{`예시: "오늘도 수고했어, 내일은 좀 더 천천히 걷자."
이런 느낌으로, 위로하는 한 줄짜리 메시지 다섯 개 만들어 줘.`}</Code>

      <h2>요령 4. 한 번에 한 가지만</h2>
      <p>
        하고 싶은 게 많을 땐, 한꺼번에 던지지 말고 <strong>차례대로</strong>
        부탁해요. 친구도 “세수하고, 이 닦고, 옷 입고, 책가방 싸고, 신발
        신고 나와!”라고 한꺼번에 외치면 까먹잖아요. 클로드도 같아요.
      </p>
      <Callout tone="tip" title="중간 점검을 부탁해요">
        “여기까지 정리해 보고, 다음에 어떻게 할지 같이 정해 줘.” 이렇게
        <strong> 중간에 멈춰서 같이 보는 습관</strong>이 결과를 훨씬 좋게
        만들어요.
      </Callout>

      <h2>요령 5. 마음에 안 들면 다시 부탁하기</h2>
      <p>
        첫 답이 별로라도 괜찮아요. <strong>“이 부분만 다시 써 줘”</strong>,
        <strong>“좀 더 짧게”</strong>, <strong>“말투를 더 부드럽게”</strong>처럼
        구체적으로 다시 부탁하면 점점 좋아져요. 답이 너무 엉뚱해졌다 싶으면
        새 대화로 깨끗하게 시작해도 좋아요.
      </p>

      <h2>이걸 다 합쳐 보면</h2>
      <Code>{`초등학교 5학년 동생에게 보낼 응원 메시지를 써 줘.

- 길이: 3줄
- 말투: 따뜻하고 부드럽게
- 분위기: '오늘도 잘했어'라는 느낌

예시: "오늘도 수고했어. 내일은 더 잘 될 거야. 너답게 가자."

이렇게 다섯 개 만들어 줘.`}</Code>
      <p>
        받는 사람, 길이, 말투, 예시, 개수 — 다섯 가지가 다 들어 있어요.
        이런 부탁을 받으면 클로드도 분명하게 답할 수 있어요.
      </p>

      <Callout tone="warn" title="조심!">
        주민등록번호, 비밀번호, 친구의 전화번호 같은 <strong>민감한
        정보</strong>는 적지 마세요. 인터넷에 적는 모든 글은 어디에 남는지
        100% 보장하기 어려워요.
      </Callout>

      <Callout tone="good" title="이 장에서 기억할 한 줄">
        부탁할 때는 <strong>‘누구한테, 무엇을, 어떤 모양으로, 얼마나 길게’</strong>
        — 이 네 가지만 챙겨도 답이 두 배는 좋아져요.
      </Callout>
    </PageShell>
  );
}
