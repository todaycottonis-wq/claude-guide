import Link from "next/link";

const chapters = [
  {
    href: "/claude",
    n: "01",
    title: "클로드, 뭐 하는 친구예요?",
    blurb:
      "‘클로드(Claude)’가 무엇이고, 어디서 만날 수 있는지. 잘하는 일과 못하는 일.",
    tag: "기초",
  },
  {
    href: "/prompting",
    n: "02",
    title: "잘 부탁하는 법",
    blurb:
      "두루뭉술한 부탁 대신, 결과가 또렷해지는 다섯 가지 요령. 실전 시나리오 모음.",
    tag: "프롬프트",
  },
  {
    href: "/claude-code",
    n: "03",
    title: "클로드 코드, 처음 켜기",
    blurb:
      "터미널이 무서운 사람도 따라할 수 있는 첫 5분. 비코딩 사용법까지.",
    tag: "도구",
  },
  {
    href: "/agents",
    n: "04",
    title: "에이전트 만들기",
    blurb:
      "‘한 가지 잘하는 친구’를 글 한 장으로 만들어 두는 법. 처음 만드는 5단계.",
    tag: "자동화",
  },
  {
    href: "/skills",
    n: "05",
    title: "스킬 만들기",
    blurb:
      "‘자주 하는 일의 사용설명서 묶음’. 클로드가 필요할 때 알아서 펴 보는 책.",
    tag: "자동화",
  },
  {
    href: "/tips",
    n: "06",
    title: "더 잘 쓰는 팁 모음",
    blurb:
      "안전, 속도, 결과의 품질. 매일 쓰면서 쌓은 작은 습관들.",
    tag: "심화",
  },
];

const capabilities = [
  {
    title: "긴 글 한 번에 읽기",
    body: "회의록·계약서·논문 등 수십 페이지짜리 문서를 통째로 넣고 한 문단 요약을 받습니다. 한국어 긴 문맥 유지가 강한 영역.",
  },
  {
    title: "메일·문서 다듬기",
    body: "영어 메일을 정중한 한국어로(또는 그 반대로). 자기소개서·보고서의 톤·길이·말투까지 자연스럽게 맞춰요.",
  },
  {
    title: "회의록 정리",
    body: "거친 메모를 ‘결정 사항 / 액션 아이템 / 남은 질문’ 세 묶음으로. 매주 같은 형식으로 받기 좋아요.",
  },
  {
    title: "자료 분석·요약",
    body: "표·그래프·기사 묶음에서 ‘무엇이 중요한지’부터 짚어 줍니다. 숫자만 나열하지 않고 이유와 함께.",
  },
  {
    title: "아이디어 발산",
    body: "카피·이름·기획안 같은 발상이 필요할 때. ‘서로 결이 다른 후보 20개’ 같은 부탁을 잘 받아요.",
  },
  {
    title: "사진·캡처 읽기",
    body: "화면 캡처나 사진을 올리면 무엇이 보이는지 정리합니다. UX 리뷰, 영수증 정리, 차트 해석 모두.",
  },
  {
    title: "차분한 추론",
    body: "‘왜 그런지’를 단계로 나눠 설명하는 데 강해요. 비교 의사결정, 장단점 정리, 검토에 잘 어울립니다.",
  },
  {
    title: "코드 작업",
    body: "클로드 코드로 폴더 안의 파일을 직접 읽고 고칠 수 있어요. 프로토타입·디버깅·작은 자동화에 강합니다.",
  },
];

export default function Home() {
  return (
    <div>
      {/* hero */}
      <section className="border-b border-border">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-20 sm:pt-32 pb-20 sm:pb-28">
          <div className="flex items-center gap-3 text-[11px] font-medium tracking-[0.22em] uppercase text-subtle">
            <span className="block h-1 w-1 rounded-full bg-foreground" />
            AX Education
          </div>
          <h1 className="mt-7 text-[44px] sm:text-[88px] font-bold tracking-[-0.045em] leading-[1.0]">
            클로드,
            <br />
            오늘부터.
          </h1>
          <p className="mt-9 max-w-xl text-[17px] sm:text-xl text-muted leading-[1.7]">
            처음 클로드를 켜는 사람을 위한 한국어 입문서.
            <br />
            잘 부탁하는 법, 클로드 코드, 나만의 에이전트와 스킬까지 — 비유와
            그림으로 한 권에 담았습니다.
          </p>
          <div className="mt-12 flex items-center gap-6">
            <Link
              href="/claude"
              className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3.5 rounded-full text-sm font-semibold hover:bg-stone-700 transition"
            >
              시작하기
              <span aria-hidden>→</span>
            </Link>
            <span className="text-sm text-subtle">총 6장 · 약 30분</span>
          </div>
        </div>
      </section>

      {/* capabilities */}
      <section className="border-b border-border">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
          <div className="max-w-2xl">
            <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-subtle">
              What it&apos;s good at
            </p>
            <h2 className="mt-3 text-[32px] sm:text-5xl font-bold tracking-[-0.035em] leading-[1.1]">
              클로드가 특히 빛나는 순간
            </h2>
            <p className="mt-5 text-[17px] text-muted leading-[1.75]">
              같은 AI라도 모델마다 잘하는 영역이 다릅니다. 클로드는{" "}
              <strong className="text-foreground">긴 글</strong>,{" "}
              <strong className="text-foreground">차분한 글쓰기</strong>,{" "}
              <strong className="text-foreground">신중한 추론</strong>, 그리고{" "}
              <strong className="text-foreground">안전한 답</strong>에 특히
              강합니다. 일터와 일상에서 가장 자주 쓰게 되는 여덟 자리예요.
            </p>
          </div>

          <ul className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border rounded-xl overflow-hidden">
            {capabilities.map((c, i) => (
              <li
                key={c.title}
                className="bg-surface p-6 sm:p-7 hover:bg-background-alt transition-colors"
              >
                <div className="text-[11px] font-mono text-subtle tabular-nums tracking-widest">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-3 text-lg font-bold tracking-[-0.02em]">
                  {c.title}
                </h3>
                <p className="mt-2 text-[14px] text-muted leading-[1.7]">
                  {c.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* TOC — magazine style */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
        <div className="flex items-end justify-between gap-4 mb-2">
          <h2 className="text-[32px] sm:text-5xl font-bold tracking-[-0.035em]">
            목차
          </h2>
          <p className="text-sm text-subtle pb-2 hidden sm:block">
            앞에서부터 차례대로 봐도 좋고, 궁금한 장만 골라 봐도 괜찮아요.
          </p>
        </div>

        <ul className="border-t border-border">
          {chapters.map((c) => (
            <li key={c.href} className="border-b border-border">
              <Link
                href={c.href}
                className="group block py-7 sm:py-9 -mx-5 sm:-mx-8 px-5 sm:px-8 hover:bg-background-alt transition-colors"
              >
                <div className="grid grid-cols-[auto_1fr_auto] items-baseline gap-5 sm:gap-12">
                  <span className="text-sm sm:text-base font-mono text-subtle tabular-nums">
                    {c.n}
                  </span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-xl sm:text-3xl font-bold tracking-[-0.025em]">
                        {c.title}
                      </h3>
                      <span className="text-[10px] tracking-[0.18em] uppercase text-subtle border border-border rounded-full px-2 py-0.5">
                        {c.tag}
                      </span>
                    </div>
                    <p className="mt-2 text-[15px] sm:text-base text-muted leading-relaxed max-w-2xl">
                      {c.blurb}
                    </p>
                  </div>
                  <span
                    aria-hidden
                    className="text-xl sm:text-2xl text-subtle group-hover:text-foreground group-hover:translate-x-1 transition"
                  >
                    →
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* about */}
      <section className="border-t border-border bg-background-alt">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-20">
          <div className="grid md:grid-cols-3 gap-10 md:gap-16">
            <div>
              <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-subtle">
                Audience
              </p>
              <p className="mt-3 text-base text-foreground leading-[1.75]">
                클로드라는 이름은 들어 봤지만 어떻게 시작하는지 막막한 사람,
                질문을 했는데 답이 영 별로였던 사람, 에이전트·스킬이 뭐길래
                다들 만든다는지 궁금했던 사람.
              </p>
            </div>
            <div>
              <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-subtle">
                Approach
              </p>
              <p className="mt-3 text-base text-foreground leading-[1.75]">
                어려운 용어는 풀어 쓰고, 비유를 자주 씁니다. 화면이 필요한
                곳엔 그림(또는 진짜 캡처)을 함께 둡니다. 한 장은 한 자리에서
                다 읽을 만큼 짧게.
              </p>
            </div>
            <div>
              <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-subtle">
                How to read
              </p>
              <p className="mt-3 text-base text-foreground leading-[1.75]">
                1·2장은 누구든 먼저. 코드가 궁금하면 3장부터, 자동화에 관심이
                있으면 4·5장으로. 6장은 언제든 다시 와서 봐도 좋습니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
