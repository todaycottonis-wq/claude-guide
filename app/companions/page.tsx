import PageShell from "../_components/PageShell";
import Callout from "../_components/Callout";
import CaptureSlot from "../_components/CaptureSlot";
import CompanionsFlow from "../_components/mockups/CompanionsFlow";
import Code from "../_components/Code";
import ToolLink from "../_components/ToolLink";

export const metadata = {
  title: "7장. 함께 쓰는 친구들 — 클로드 가이드북",
};

export default function Page() {
  return (
    <PageShell
      chapter="7장"
      title="함께 쓰는 친구들"
      intro={
        <>
          클로드 혼자서는 절반만 끝납니다.
          <br />
          만든 결과를 어디에 보관하고, 어떻게 인터넷에 띄우고, 데이터는 어디에
          담을지 — 이 자리들을 채워 주는 도구들이 따로 있어요.
          <br />이 장에서는 클로드와 가장 자주 짝을 이루는 네 친구를 소개합니다.
        </>
      }
      prev={{ href: "/tips", label: "6장. 더 잘 쓰는 팁 모음" }}
    >
      <h2>왜 ‘친구들’이 필요할까요?</h2>
      <p>
        클로드는 글을 써 주고 코드를 짜 줍니다. 그런데 그렇게 만든 결과를
        <strong> 어디에 보관</strong>할지, <strong>인터넷에 어떻게
        띄울지</strong>, 사용자들의 <strong>데이터는 어디에 담을지</strong>까지
        해 주지는 않아요. 마치 요리를 잘하는 친구는 요리만 해 주는 것과 같죠.
        식기와 식탁, 가게 자리, 손님 명단은 다른 친구들이 맡아 줘야 합니다.
      </p>
      <p>
        그래서 클로드를 잘 쓰는 사람들은 거의 모두 같은 친구 묶음을 같이
        들고 다녀요. <strong>Git</strong>(저장),{" "}
        <strong>GitHub</strong>(공유), <strong>Vercel</strong>(배포),{" "}
        <strong>Supabase</strong>(데이터). 이 네 명만 알아도 ‘만들고 →
        보관하고 → 띄우고 → 데이터까지’ 한 줄이 완성돼요.
      </p>

      <CaptureSlot caption="만들기는 클로드가, 보관은 Git·GitHub, 배포는 Vercel, 데이터는 Supabase가. 같은 흐름의 다섯 단계예요.">
        <CompanionsFlow />
      </CaptureSlot>

      <h2>① Git — 글·코드의 타임머신</h2>
      <ToolLink
        name="Git"
        url="https://git-scm.com/downloads"
        domain="git-scm.com"
        blurb="공식 사이트에서 운영체제별 설치 파일을 받을 수 있어요. Mac은 보통 이미 깔려 있어요."
        iconSlug="git"
        iconColor="F05032"
      />
      <p>
        <strong>Git</strong>은 ‘<strong>한 단계마다 도장을 찍어 두고
        언제든 그 시점으로 되돌아갈 수 있게 해 주는 도구</strong>’예요. 게임의
        세이브 포인트, 사진 앨범의 날짜 도장 같은 거예요. 망쳤다 싶으면
        직전 도장으로 돌아오면 돼요.
      </p>
      <ul>
        <li>
          <strong>커밋(commit)</strong> — ‘여기까지’ 도장을 찍는 일.
          한 단락 작업이 끝날 때마다 한 번씩.
        </li>
        <li>
          <strong>되돌리기</strong> — 망친 변경을 도장 시점으로 되돌릴
          수 있어요. 안전망이 생긴 셈.
        </li>
        <li>
          <strong>여러 사람 협업</strong> — 같이 작업해도 서로의 변경이
          섞이지 않게 합쳐 줘요.
        </li>
        <li>
          <strong>클로드 코드의 친구</strong> — 클로드 코드는 일을 시킬 때
          “이 변경을 커밋해도 될까요?”를 종종 물어봐요. 자주 커밋해 두면
          클로드가 망쳐도 1초 만에 되돌릴 수 있어요.
        </li>
      </ul>

      <Callout tone="tip" title="Git을 써야 할 가장 큰 이유 한 줄">
        <strong>되돌릴 수 있다</strong>는 사실이 만드는 사람을 자유롭게
        해 줘요. ‘망치면 어떡하지’가 사라지면 더 과감하게 시도할 수 있어요.
      </Callout>

      <h2>② GitHub — Git을 인터넷에 올려 둔 동네</h2>
      <ToolLink
        name="GitHub"
        url="https://github.com/join"
        domain="github.com"
        blurb="이메일로 회원가입. 공개 저장소·기본 협업 기능은 무료예요."
        iconSlug="github"
        iconColor="181717"
      />
      <p>
        Git은 내 컴퓨터에 있어요. 컴퓨터가 망가지면 같이 사라지죠. 그래서
        Git의 도장과 폴더를 <strong>인터넷에 안전하게 옮겨 두는 곳</strong>이
        필요해요. 그게 <strong>GitHub</strong>입니다.
      </p>
      <ul>
        <li>
          <strong>저장소(repository)</strong> — 한 프로젝트가 사는 폴더.
          공개로 둘 수도, 비공개로 둘 수도 있어요.
        </li>
        <li>
          <strong>공유와 협업</strong> — 다른 사람을 초대해 같이 작업, 의견을
          남기는 ‘이슈/PR’ 같은 도구가 있어요.
        </li>
        <li>
          <strong>이력 보기</strong> — 누가 언제 어떤 부분을 바꿨는지 인터넷
          창에서 한눈에 볼 수 있어요.
        </li>
        <li>
          <strong>클로드 코드와 짝궁</strong> — <code>gh</code>라는 명령으로
          클로드 코드가 직접 PR(변경 요청)을 만들기도 하고, GitHub Action이라는
          자동화로 클로드를 호출할 수도 있어요.
        </li>
      </ul>

      <Callout tone="note" title="Git ≠ GitHub">
        많이 헷갈리지만 둘은 다른 친구예요. <strong>Git</strong>은 도장
        찍는 도구(소프트웨어), <strong>GitHub</strong>은 그 도장과 폴더를
        보관해 주는 인터넷 동네(서비스)예요.
      </Callout>

      <h2>③ Vercel — 만든 사이트를 인터넷에 띄우는 임대인</h2>
      <ToolLink
        name="Vercel"
        url="https://vercel.com/signup"
        domain="vercel.com"
        blurb="GitHub 계정으로 바로 로그인 → 저장소 Import → Deploy. 클릭 세 번이면 사이트가 떠요."
        iconSlug="vercel"
        iconColor="000000"
      />
      <p>
        코드는 만들었는데, 친구가 인터넷 주소로 와서 볼 수는 없잖아요. 코드
        파일을 <strong>인터넷 주소(URL)로 띄워 주는 자리</strong>가{" "}
        <strong>Vercel</strong>이에요. 가게로 치면 ‘건물 임대인’이에요. 자리만
        빌려 주는 게 아니라, 손님이 빠르게 들어오도록 길도 깔아 줘요.
      </p>
      <ul>
        <li>
          <strong>GitHub와 연결</strong> — GitHub에 새 코드를 올리면 Vercel이
          자동으로 사이트를 다시 띄워 줘요. 사람이 따로 ‘올려라!’ 할 필요
          없어요.
        </li>
        <li>
          <strong>무료부터 시작</strong> — 개인 프로젝트나 작은 사이트는 돈
          없이도 시작할 수 있어요.
        </li>
        <li>
          <strong>도메인(주소) 연결</strong> — <code>my-site.com</code> 같은 내
          도메인을 사 와서 연결하면 됩니다.
        </li>
        <li>
          <strong>Next.js 친화적</strong> — 이 가이드북도 Next.js로 만들어 Vercel에
          띄워 둔 거예요. 같은 회사가 만든 도구 짝이라 가장 매끄럽게 작동해요.
        </li>
      </ul>

      <Code filename="대략 이런 흐름">{`# 1) 코드를 만들고
claude

# 2) Git으로 도장을 찍고
git add .
git commit -m "오늘의 변경"

# 3) GitHub에 올리면
git push

# 4) Vercel이 자동으로 사이트를 다시 띄워 줘요
#    (사람이 손댈 일 없음)`}</Code>

      <h2>④ Supabase — 서버 없이 ‘앱’을 만들게 해 주는 도우미</h2>
      <ToolLink
        name="Supabase"
        url="https://supabase.com/dashboard/sign-up"
        domain="supabase.com"
        blurb="GitHub 계정으로 가입. 무료 플랜으로 프로젝트 1개 바로 시작 — 데이터·로그인·파일 보관까지."
        iconSlug="supabase"
        iconColor="3FCF8E"
      />
      <p>
        사이트가 단순한 글이라면 Vercel만으로 충분해요. 그런데 <strong>회원가입
        · 로그인 · 게시글 · 댓글 · 사진 업로드</strong>처럼 사람들의 데이터를
        받아야 한다면 ‘<strong>저장 공간</strong>’이 필요합니다.
        <strong> Supabase</strong>는 그 공간을 ‘서버를 따로 만들지 않고도’ 빌려
        쓸 수 있게 해 주는 도우미예요.
      </p>
      <ul>
        <li>
          <strong>데이터베이스</strong> — 회원 명단, 게시글, 주문 내역 같은 표를
          저장해요. 엑셀의 무한 버전이라고 생각하면 가까워요.
        </li>
        <li>
          <strong>로그인 관리</strong> — 이메일 가입, 카카오·구글 로그인 같은
          기능을 직접 만들 필요 없이 켜기만 하면 작동해요.
        </li>
        <li>
          <strong>파일 보관</strong> — 사용자가 올린 사진·동영상·PDF를 안전하게
          보관해 줘요.
        </li>
        <li>
          <strong>실시간 변화</strong> — 채팅이나 공동 편집처럼 누군가
          바꾸면 다른 사람 화면이 즉시 갱신되는 일도 가능해요.
        </li>
      </ul>

      <Callout tone="tip" title="언제부터 Supabase를 붙이면 될까">
        ‘<strong>회원가입 · 로그인 · 사용자가 만든 콘텐츠</strong>’ 중 하나라도
        필요해지는 순간이에요. 그 전에는 굳이 안 붙여도 됩니다. ‘일단 사이트만
        띄우고, 데이터가 필요해지면 그때.’
      </Callout>

      <h2>(보너스) MCP — 클로드가 다른 도구와 이야기하는 표준</h2>
      <ToolLink
        name="Model Context Protocol"
        url="https://modelcontextprotocol.io"
        domain="modelcontextprotocol.io"
        blurb="MCP 공식 사이트. ‘무엇이 가능한지’ 둘러볼 수 있어요. 직접 만들지 않아도 누가 만든 커넥터를 가져다 쓰는 식으로 시작해요."
      />
      <p>
        <strong>MCP(Model Context Protocol)</strong>는 클로드가 외부 도구와
        주고받는 ‘<strong>공통의 언어 규칙</strong>’이에요. 이게 있으면
        클로드가 노션에 회의록을 적기도 하고, 슬랙에 메시지를 보내기도 하고,
        구글 드라이브의 문서를 읽어 오기도 해요.
      </p>
      <ul>
        <li>비유: 콘센트의 <strong>표준 모양</strong>. 모양만 같으면 어떤 가전이든 꽂혀요.</li>
        <li>지금 시점에서는 ‘이런 게 있다’ 정도만 알아도 충분합니다.</li>
        <li>
          관심이 생기면 클로드 데스크탑 앱 ‘설정 → 커넥터(Connectors)’에서
          몇 클릭으로 켤 수 있어요.
        </li>
      </ul>

      <h2>그래서, 어디서부터 시작하면 좋을까요?</h2>
      <ol>
        <li>
          <strong>Git부터.</strong> 아직 없다면{" "}
          <a
            href="https://git-scm.com/downloads"
            target="_blank"
            rel="noreferrer noopener"
          >
            git-scm.com
          </a>
          에서 설치 → 새 폴더에서 <code>git init</code> 한 번, 작업 끝날 때마다
          커밋. 이 한 가지만 익숙해져도 작업이 두려움 없이 빨라져요.
        </li>
        <li>
          <strong>GitHub.</strong>{" "}
          <a
            href="https://github.com/join"
            target="_blank"
            rel="noreferrer noopener"
          >
            github.com/join
          </a>
          에서 가입 → 첫 저장소 만들기. 클로드 코드한테{" "}
          <em>“이 폴더를 GitHub에 올려 줘”</em>라고 부탁하면 차근차근 알려 줘요.
        </li>
        <li>
          <strong>Vercel.</strong>{" "}
          <a
            href="https://vercel.com/new"
            target="_blank"
            rel="noreferrer noopener"
          >
            vercel.com/new
          </a>
          에 가서 GitHub 계정으로 로그인 → 만든 저장소를 ‘Import’ → Deploy.
          정말 클릭 세 번이에요.
        </li>
        <li>
          <strong>Supabase는 나중에.</strong> 데이터가 필요한 일이 생기면 그때{" "}
          <a
            href="https://supabase.com/dashboard/sign-up"
            target="_blank"
            rel="noreferrer noopener"
          >
            supabase.com
          </a>
          에 가입하고 붙이면 됩니다. 미리 붙이지 않아도 돼요.
        </li>
      </ol>

      <Callout tone="good" title="이 장에서 기억할 한 줄">
        만들기는 <strong>클로드</strong>, 보관은 <strong>Git·GitHub</strong>,
        띄우기는 <strong>Vercel</strong>, 데이터는 <strong>Supabase</strong>.
        이 다섯 친구의 이름과 자리만 알아도 ‘무엇이 어디에 있는지’ 헷갈릴
        일이 거의 없어집니다.
      </Callout>
    </PageShell>
  );
}
