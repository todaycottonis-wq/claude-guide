import PageShell from "../_components/PageShell";
import Callout from "../_components/Callout";

export const metadata = {
  title: "6장. 더 잘 쓰는 팁 모음 — 클로드 가이드북",
};

const sections = [
  {
    title: "부탁할 때",
    label: "Asking",
    tips: [
      {
        h: "작게 시작하기",
        b: "한꺼번에 큰일을 시키지 마세요. ‘웹사이트 다 만들어 줘’ 대신, ‘로그인 화면만 → 회원가입 → 마이페이지’ 식으로 잘게.",
      },
      {
        h: "‘너는 ___ 친구야’ 한 줄",
        b: "역할 부여는 가장 강력한 한 줄이에요. ‘너는 까다로운 한국어 선생님이야’ 한 줄이 결과를 완전히 바꿉니다.",
      },
      {
        h: "예시 한 줄을 같이",
        b: "‘부드러운 톤으로’ 같은 표현은 사람마다 뜻이 달라요. 한 줄짜리 예시가 그 어떤 설명보다 또렷합니다.",
      },
      {
        h: "결과의 그릇 정해 주기",
        b: "‘목록으로’, ‘표로’, ‘3줄로’. 그릇이 있으면 클로드는 그 안에 깔끔히 담아요.",
      },
    ],
  },
  {
    title: "결과를 받을 때",
    label: "Reviewing",
    tips: [
      {
        h: "초안이라고 생각하기",
        b: "클로드의 답은 ‘처음 본 사람의 초안’이에요. 글이라면 한 번 읽어 보고, 코드라면 한 번 돌려 보고, 숫자라면 한 번 계산해 봅니다.",
      },
      {
        h: "‘부분만 다시 써 줘’",
        b: "전체를 새로 받지 말고, 한 부분만 다시 부탁해요. ‘두 번째 문단의 말투를 더 부드럽게, 길이는 절반으로’처럼.",
      },
      {
        h: "출처 묻기",
        b: "‘이 사실의 근거는?’이라고 물으면 클로드는 자기 답을 다시 점검해요. 검색이 켜진 자리라면 출처 링크도 줘요.",
      },
      {
        h: "반대 의견 부탁",
        b: "‘이 결정의 위험 세 가지’, ‘이 글의 약점 세 가지’를 같이 받으면 결과가 단단해집니다.",
      },
    ],
  },
  {
    title: "헤맬 때",
    label: "Unstuck",
    tips: [
      {
        h: "새 대화로 시작",
        b: "같은 대화에서 너무 오래 헤맸다면, 한 번 깨끗이 비우고 다시 시작해 보세요. 옛날 이야기를 끌고 다닐 때보다 결과가 좋아질 때가 많아요.",
      },
      {
        h: "내 부탁을 한 번 점검",
        b: "‘방금 내가 한 부탁을 다섯 단어로 요약해 줘’라고 묻고, 클로드의 요약과 내 의도가 같은지 봅니다.",
      },
      {
        h: "단계 쪼개기",
        b: "한 번에 안 풀리면, ‘우선 A만 하고 결과 보고 B 하자’로 잘라요. 모든 큰일은 작은 일의 줄이에요.",
      },
    ],
  },
  {
    title: "안전과 비밀",
    label: "Safety",
    tips: [
      {
        h: "민감 정보는 적지 않기",
        b: "주민번호, 비밀번호, 친구의 전화번호, 회사의 영업비밀 같은 건 적지 마세요. 클로드뿐 아니라 어떤 인터넷 도구에도 마찬가지입니다.",
      },
      {
        h: "‘처음 본 폴더’에서 막 시키지 않기",
        b: "클로드 코드에서 중요한 폴더에 첫 부탁을 던지지 마세요. 빈 폴더에서 연습부터, 익숙해지면 자주 쓰는 폴더로.",
      },
      {
        h: "git으로 안전망",
        b: "되돌릴 수 있다는 사실이 가장 큰 안전망입니다. 작업 시작 전 커밋, 끝나고도 커밋.",
      },
      {
        h: "‘무엇이든 자동 허락’ 옵션은 천천히",
        b: "익숙해진 다음에. 처음에는 한 번씩 확인 누르는 습관이 안전해요.",
      },
    ],
  },
  {
    title: "더 빠르게",
    label: "Speed",
    tips: [
      {
        h: "/clear, /compact",
        b: "긴 대화에서 길을 잃었다면 /clear로 비우거나 /compact로 압축. 클로드도, 우리도 다시 또렷해져요.",
      },
      {
        h: "/init으로 폴더 안내문",
        b: "새 폴더에서 한 번 /init을 돌리면 CLAUDE.md가 만들어져요. 다음에 클로드가 들어올 때 자동으로 그 안내문을 봐요.",
      },
      {
        h: "자주 쓰는 부탁은 스킬로",
        b: "같은 부탁을 세 번 했다면 스킬을 만들어 두세요. 매번 절차를 다시 적지 않아도 됩니다.",
      },
      {
        h: "한 줄 이상이면 코드 블록",
        b: "긴 글이나 표를 부탁할 때, 코드 블록 ``` 안에 자료를 넣으면 본문과 자료가 헷갈리지 않아요.",
      },
    ],
  },
  {
    title: "팀과 함께",
    label: "Team",
    tips: [
      {
        h: "CLAUDE.md에 ‘우리 규칙’",
        b: "팀 폴더의 CLAUDE.md에 ‘우리 톤’, ‘쓰지 않는 표현’, ‘좋아하는 형식’을 적어 두면 누구가 켠 클로드든 같은 결로 일해요.",
      },
      {
        h: "에이전트로 분업",
        b: "디자인 보는 친구, 카피 쓰는 친구, 데이터 보는 친구를 각자 두면 결과가 또렷해지고 검토하기 쉬워져요.",
      },
      {
        h: "스킬은 회사의 ‘업무 매뉴얼’",
        b: "보고서 형식, 회의록 형식, 자기소개서 가이드 같은 ‘우리 방식’을 스킬로 만들어 폴더에 같이 두세요.",
      },
    ],
  },
];

export default function Page() {
  return (
    <PageShell
      chapter="6장"
      title="더 잘 쓰는 팁 모음"
      intro={
        <>
          끝까지 따라온 김에, 매일 쓰면서 배운 작은 습관들을 모아 두었어요.
          <br />
          외울 필요는 없고, 막힐 때마다 한 번씩 다시 와서 봐요.
        </>
      }
      prev={{ href: "/skills", label: "5장. 스킬 만들기" }}
      next={{ href: "/companions", label: "7장. 함께 쓰는 친구들" }}
    >
      {sections.map((s, idx) => (
        <section key={s.title} className="not-prose mt-10 first:mt-0">
          <div className="flex items-baseline justify-between gap-4 mb-5">
            <h2 className="text-2xl font-bold tracking-[-0.025em]">
              {idx + 1}. {s.title}
            </h2>
            <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-subtle">
              {s.label}
            </span>
          </div>
          <ul className="grid sm:grid-cols-2 gap-px bg-border border border-border rounded-xl overflow-hidden">
            {s.tips.map((t, i) => (
              <li
                key={t.h}
                className="bg-surface p-5 sm:p-6 hover:bg-background-alt transition-colors"
              >
                <div className="text-[11px] font-mono text-subtle tabular-nums tracking-widest">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-2 text-[15.5px] font-bold tracking-[-0.02em]">
                  {t.h}
                </h3>
                <p className="mt-1.5 text-[14px] text-muted leading-[1.7]">
                  {t.b}
                </p>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <h2 className="mt-16">자주 묻는 질문</h2>

      <h3>‘대답이 너무 길어요’</h3>
      <p>
        길이를 정해 주세요. ‘<strong>3줄로</strong>’, ‘<strong>200자
        이내로</strong>’, ‘<strong>5개 항목으로</strong>’. 길이를 정하지
        않으면 클로드는 ‘잘 답해야지’ 싶어 길게 답하는 경향이 있어요.
      </p>

      <h3>‘클로드가 자꾸 사과해요’</h3>
      <p>
        ‘죄송합니다, 다시 시도하겠습니다’ 같은 말이 반복되면, ‘
        <strong>사과 빼고 본론만</strong>’이라고 한 줄 적어 보세요. 다시
        부탁할 때 <code>/clear</code>로 비우고 시작해도 됩니다.
      </p>

      <h3>‘한국어가 어색해요’</h3>
      <p>
        ‘번역체 빼고 자연스러운 한국어로’ 같은 한 줄을 더해요. 또는 좋아하는
        스타일의 글 한 줄을 예시로 같이 보여 주면 톤이 잘 맞아요.
      </p>

      <h3>‘답이 매번 달라요’</h3>
      <p>
        AI는 같은 부탁에도 매번 조금씩 다르게 답해요. 정해진 결과가 필요한
        일이라면 <strong>스킬</strong>이나 <strong>에이전트</strong>로 형식을
        고정해 두세요.
      </p>

      <h3>‘유료/무료 차이가 큰가요?’</h3>
      <p>
        무료 버전도 충분히 쓸 만합니다. 더 자주 쓰거나 더 큰 모델(Opus)을
        쓰고 싶다면 유료 플랜을 고려해요. 회사에서 쓴다면 팀 플랜이나
        API/Bedrock 연동도 가능합니다.
      </p>

      <Callout tone="good" title="이 책의 마지막 한 줄">
        클로드를 잘 쓰는 사람은 ‘<strong>잘 부탁하고, 잘 검사하고, 잘
        가르치는</strong>’ 사람이에요. 이 세 가지만 매일 조금씩 늘려도 한
        달 뒤엔 완전히 다른 결과를 받게 될 거예요.
      </Callout>
    </PageShell>
  );
}
