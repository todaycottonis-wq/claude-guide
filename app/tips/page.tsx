import PageShell from "../_components/PageShell";
import Callout from "../_components/Callout";

export const metadata = {
  title: "6장. 더 잘 쓰는 팁 모음 — 클로드 가이드북",
};

export default function Page() {
  return (
    <PageShell
      chapter="6장"
      title="더 잘 쓰는 팁 모음"
      intro="끝까지 따라온 김에, 매일 쓰면서 배운 작은 습관들을 모아 두었어요. 외울 필요는 없고, 막힐 때마다 한 번씩 다시 와서 봐요."
      prev={{ href: "/skills", label: "5장. 스킬 만들기" }}
    >
      <h2>1. 작게 시작하기</h2>
      <p>
        한꺼번에 큰일을 시키지 마세요. ‘웹사이트 다 만들어 줘’ 대신,
        ‘<strong>로그인 화면만</strong> 만들어 줘 → 됐으면 그 다음에
        회원가입’ 식으로 작게 잘라요. 결과를 보고 다음을 부탁하면 빠르고
        안전해요.
      </p>

      <h2>2. 결과는 항상 한 번 더 보기</h2>
      <p>
        클로드의 답은 <strong>처음 본 사람의 초안</strong>이라고 생각하면
        좋아요. 글이라면 한 번 읽어 보고, 코드라면 한 번 돌려 보고,
        숫자라면 한 번 계산해 봐요. 사람의 마지막 검사가 결과의 품질을
        결정해요.
      </p>

      <h2>3. ‘다시 부탁하기’를 두려워하지 마요</h2>
      <p>
        첫 답이 마음에 안 들 땐 그냥 다시 말해요. 단,{" "}
        <strong>구체적으로</strong>. “별로야”보다는 “두 번째 문단의 말투를
        더 부드럽게, 길이는 절반으로”처럼.
      </p>

      <h2>4. 막혔을 땐 새 대화로</h2>
      <p>
        같은 대화에서 너무 오래 헤맸다면, <strong>한 번 깨끗하게 비우고</strong>
        다시 시작해 보세요. 웹·앱이라면 ‘새 대화’ 버튼, 클로드 코드라면{" "}
        <code>/clear</code>. 옛날 이야기를 끌고 다닐 때보다 결과가 좋아질
        때가 많아요.
      </p>

      <h2>5. 비밀과 개인정보는 적지 않기</h2>
      <Callout tone="warn">
        주민번호, 비밀번호, 친구의 전화번호, 회사의 영업비밀 같은 건
        <strong> 절대 적지 마세요</strong>. 클로드한테뿐 아니라 인터넷의
        어떤 도구에든 마찬가지예요.
      </Callout>

      <h2>6. ‘이런 모양으로 줘’를 미리 정하기</h2>
      <p>
        결과가 두루뭉술해서 못 쓰는 일이 가장 흔한 실수예요. 길이, 형식,
        말투, 받는 사람을 부탁할 때 같이 적어요. 반복되는 일이라면 그걸
        그대로 <strong>스킬</strong>로 만들어 두면 다음부터 편해요.
      </p>

      <h2>7. 클로드 코드 안전 수칙</h2>
      <ul>
        <li>
          처음에는 <strong>새 폴더</strong>에서 연습. 중요한 폴더에 바로
          시키지 않기.
        </li>
        <li>
          git으로 관리되는 폴더라면 <strong>자주 커밋</strong>해서 되돌릴
          수 있게.
        </li>
        <li>
          ‘이것 좀 지워 줘’, ‘이 폴더 비워 줘’ 같은 부탁은 한 번 더
          확인하기.
        </li>
        <li>
          ‘무엇이든 자동 허락’ 옵션은 <strong>익숙해진 다음에</strong>.
        </li>
      </ul>

      <h2>8. 좋은 부탁의 ‘다섯 가지 그릇’</h2>
      <p>매일 부탁할 때, 이 다섯 가지만 머릿속에서 한 번 굴려 보세요.</p>
      <ol>
        <li>
          <strong>받는 사람</strong>은 누구?
        </li>
        <li>
          <strong>무엇</strong>을 만들고 싶어?
        </li>
        <li>
          <strong>어떤 모양</strong>이면 좋겠어? (목록, 표, 문단)
        </li>
        <li>
          <strong>얼마나 길게</strong>?
        </li>
        <li>
          <strong>예시 한 줄</strong> 줘 볼까?
        </li>
      </ol>

      <h2>9. 클로드한테 가르쳐 주기</h2>
      <p>
        같은 실수를 두 번 봤다면 <strong>이번 한 번만 고치는 것</strong>으로
        끝내지 말고, 다음에도 이 폴더에 들어오는 모든 클로드가 알게 해요.
      </p>
      <ul>
        <li>
          폴더의 <code>CLAUDE.md</code>에 ‘이 프로젝트의 규칙’으로 적어 두기.
        </li>
        <li>
          반복되면 <strong>스킬</strong>로 옮기기.
        </li>
        <li>
          크게 다른 일이라면 <strong>에이전트</strong>로 분리하기.
        </li>
      </ul>

      <h2>10. 더 배우려면</h2>
      <ul>
        <li>
          공식 문서: <a href="https://docs.claude.com">docs.claude.com</a>
        </li>
        <li>
          클로드 코드 문서:{" "}
          <a href="https://docs.claude.com/en/docs/claude-code">
            docs.claude.com/claude-code
          </a>
        </li>
        <li>
          이 책에서 다룬 ‘에이전트·스킬’의 형식은 자주 업데이트돼요. 헷갈리는
          부분이 있으면 항상 <strong>node_modules의 docs</strong>나 공식
          문서를 ‘진짜 진실’로 삼아요.
        </li>
      </ul>

      <Callout tone="good" title="이 책의 마지막 한 줄">
        클로드를 잘 쓰는 사람은 ‘<strong>잘 부탁하고, 잘 검사하고, 잘
        가르치는</strong>’ 사람이에요. 이 세 가지만 매일 조금씩 늘려도 한
        달 뒤엔 완전히 다른 결과를 받게 될 거예요.
      </Callout>
    </PageShell>
  );
}
