import Link from "next/link";

const chapters = [
  {
    href: "/claude",
    n: "1",
    title: "클로드란 누구야?",
    blurb:
      "글로 대화하는 똑똑한 친구. 어디서 만날 수 있는지, 무엇을 할 수 있는지부터 살펴봐요.",
  },
  {
    href: "/prompting",
    n: "2",
    title: "잘 부탁하는 법",
    blurb:
      "짧고 헷갈리는 부탁 대신, 친구가 알아듣게 말하는 다섯 가지 요령.",
  },
  {
    href: "/claude-code",
    n: "3",
    title: "클로드 코드 시작하기",
    blurb:
      "컴퓨터 안에 사는 도우미. 설치, 실행, 자주 쓰는 슬래시 명령까지 한 번에.",
  },
  {
    href: "/agents",
    n: "4",
    title: "에이전트 만들기",
    blurb:
      "‘그림 잘 그리는 친구’처럼 한 가지를 잘하는 클로드를 직접 만들어 둘 수 있어요.",
  },
  {
    href: "/skills",
    n: "5",
    title: "스킬 만들기",
    blurb:
      "자주 하는 일은 ‘사용설명서 묶음(스킬)’으로 만들어 두면, 클로드가 알아서 펴봐요.",
  },
  {
    href: "/tips",
    n: "6",
    title: "더 잘 쓰는 팁 모음",
    blurb:
      "안전하게 쓰는 법, 결과를 더 좋게 만드는 작은 습관, 막혔을 때 빠져나오는 길.",
  },
];

export default function Home() {
  return (
    <div>
      {/* hero */}
      <section className="border-b border-border bg-gradient-to-b from-amber-50/60 to-background">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
          <p className="text-sm font-semibold tracking-widest text-accent uppercase">
            초등학생도 따라 하는
          </p>
          <h1 className="mt-3 text-4xl sm:text-6xl font-bold tracking-tight leading-[1.05]">
            클로드 가이드북
          </h1>
          <p className="mt-6 max-w-2xl text-lg sm:text-xl text-muted leading-relaxed">
            <strong className="text-foreground">클로드</strong>를 처음 만지는
            사람을 위한 친절한 한국어 가이드. 잘 부탁하는 법부터, 코드를
            짜주는 <strong className="text-foreground">클로드 코드</strong>,
            나만의 <strong className="text-foreground">에이전트</strong>·
            <strong className="text-foreground">스킬</strong>을 만드는 방법까지
            비유와 그림으로 풀어 설명해요.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/claude"
              className="inline-flex items-center gap-2 rounded-full bg-accent text-white font-semibold px-6 py-3 hover:bg-amber-700 transition-colors"
            >
              1장부터 시작하기 →
            </Link>
            <Link
              href="/agents"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 font-semibold hover:border-accent transition-colors"
            >
              에이전트가 궁금해요
            </Link>
          </div>
        </div>
      </section>

      {/* TOC */}
      <section className="max-w-5xl mx-auto px-5 sm:px-8 py-16">
        <h2 className="text-2xl font-bold tracking-tight">목차</h2>
        <p className="mt-2 text-muted">
          앞에서부터 차례대로 봐도 좋고, 궁금한 장만 골라 봐도 괜찮아요.
        </p>
        <ul className="mt-8 grid sm:grid-cols-2 gap-4">
          {chapters.map((c) => (
            <li key={c.href}>
              <Link
                href={c.href}
                className="group block h-full rounded-2xl border border-border bg-surface p-6 hover:border-accent hover:shadow-sm transition"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-accent-soft text-accent font-bold">
                    {c.n}
                  </span>
                  <h3 className="text-lg font-bold group-hover:text-accent transition-colors">
                    {c.title}
                  </h3>
                </div>
                <p className="mt-3 text-[15px] text-muted leading-relaxed">
                  {c.blurb}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* who is this for */}
      <section className="border-t border-border bg-surface/60">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 py-16">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-accent">
                이 책이 어울리는 사람
              </p>
              <p className="mt-3 text-[15px] text-muted leading-relaxed">
                ‘클로드라는 말은 들어 봤는데 켜는 것부터 막막한’ 사람,
                <br />
                ‘질문을 했는데 답이 영 별로였던’ 사람,
                <br />
                ‘에이전트·스킬이 뭐길래 다들 만든다는 거지?’ 궁금했던 사람.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-accent">
                이 책의 약속
              </p>
              <p className="mt-3 text-[15px] text-muted leading-relaxed">
                어려운 말은 풀어서 쓰고, 비유를 자주 쓸게요. 화면이 필요한
                곳엔 그림(또는 진짜 캡처)을 함께 넣어 둡니다. 한 장은 한
                자리에서 다 읽을 만큼 짧게.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-accent">
                추천 진도
              </p>
              <p className="mt-3 text-[15px] text-muted leading-relaxed">
                1·2장은 누구나 먼저. 코딩이 궁금하면 3장부터, 자동화에 관심이
                있으면 4·5장으로. 6장은 언제든 다시 와서 봐도 좋아요.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
