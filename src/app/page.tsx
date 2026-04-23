import Link from "next/link";
import { BarChart3, ClipboardCheck, TrendingUp, Users } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Mock Data                                                          */
/* ------------------------------------------------------------------ */

const pollingCards = [
  {
    title: "Direction of Country",
    rows: [
      { label: "Right Direction", value: 34 },
      { label: "Wrong Track", value: 52 },
    ],
  },
  {
    title: "Federal Vote Intention",
    rows: [
      { label: "LPC", value: 42 },
      { label: "CPC", value: 31 },
      { label: "NDP", value: 18 },
    ],
  },
  {
    title: "Economic Confidence",
    rows: [
      { label: "Positive", value: 28 },
      { label: "Negative", value: 58 },
    ],
  },
];

const researchItems = [
  {
    tag: "FEDERAL POLITICS",
    tagColor: "bg-navy text-white",
    title: "From Collapse to Dominance: The New Liberal Majority",
    date: "April 18, 2026",
    excerpt:
      "An in-depth look at how a remarkable realignment reshaped Canada\u2019s political landscape and what it means for the next Parliament.",
  },
  {
    tag: "DEFENCE",
    tagColor: "bg-navy-muted text-white",
    title: "Defence Spending Reaches Historic Highs",
    date: "April 12, 2026",
    excerpt:
      "Public opinion on NATO commitments and Canadian defence policy has shifted dramatically amid a changing geopolitical climate.",
  },
  {
    tag: "ECONOMY",
    tagColor: "bg-gold text-navy",
    title: "Dread Deepens to Record High",
    date: "April 5, 2026",
    excerpt:
      "Canadians\u2019 economic outlook has sunk to its lowest point in over a decade, driven by inflation fatigue and housing concerns.",
  },
  {
    tag: "ECONOMY",
    tagColor: "bg-gold text-navy",
    title: "The Erosion of Middle-Class Confidence",
    date: "March 28, 2026",
    excerpt:
      "A longitudinal analysis of declining middle-class optimism and the policy implications for federal and provincial governments.",
  },
  {
    tag: "FEDERAL POLITICS",
    tagColor: "bg-navy text-white",
    title: "Trust in Institutions at a Crossroads",
    date: "March 20, 2026",
    excerpt:
      "As democratic norms face new pressures, EKOS tracks how Canadians view Parliament, the judiciary, and the media.",
  },
];

const services = [
  {
    icon: BarChart3,
    title: "Public Opinion Research",
    description:
      "Telephone, online, and mixed-mode surveys with rigorous probability-based sampling through our Probit panel.",
  },
  {
    icon: ClipboardCheck,
    title: "Program Evaluation",
    description:
      "Evidence-based evaluation frameworks that help governments and organizations measure real-world impact.",
  },
  {
    icon: TrendingUp,
    title: "Market Research",
    description:
      "Actionable market intelligence combining quantitative analytics with deep qualitative insight.",
  },
  {
    icon: Users,
    title: "Citizen Engagement",
    description:
      "Innovative consultation methodologies that give citizens a meaningful voice in public policy decisions.",
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                                */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <>
      {/* ============================================================ */}
      {/* 1. HERO                                                       */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden bg-navy">
        {/* Dot-grid background pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #D4A843 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        {/* Subtle diagonal gradient overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-navy via-transparent to-navy-muted opacity-80" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28 sm:py-36 lg:py-44 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Knowledge for Action
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl leading-relaxed text-white/75">
            Canada&apos;s leading public opinion and policy research firm —
            providing rigorous, evidence-based insights since 1980.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/research"
              className="inline-flex items-center rounded-md bg-gold px-7 py-3 text-sm font-semibold text-navy shadow-lg hover:bg-gold-dark transition-colors"
            >
              View Latest Research
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center rounded-md border-2 border-white/30 px-7 py-3 text-sm font-semibold text-white hover:border-white hover:bg-white/10 transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. POLLING TRACKERS                                           */}
      {/* ============================================================ */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                Polling Trackers
              </p>
              <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-navy">
                Latest Polling Data
              </h2>
            </div>
            <Link
              href="/research?type=polling"
              className="hidden sm:inline-flex text-sm font-medium text-navy hover:text-gold transition-colors"
            >
              View all polls &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pollingCards.map((card) => (
              <div
                key={card.title}
                className="border-l-4 border-navy rounded-lg bg-white shadow-sm ring-1 ring-black/5 p-6"
              >
                <h3 className="text-sm font-semibold uppercase tracking-wider text-navy-muted mb-5">
                  {card.title}
                </h3>
                <div className="space-y-4">
                  {card.rows.map((row) => (
                    <div key={row.label}>
                      <div className="flex items-baseline justify-between mb-1.5">
                        <span className="text-sm text-near-black/70">
                          {row.label}
                        </span>
                        <span className="font-serif text-2xl font-bold text-gold">
                          {row.value}%
                        </span>
                      </div>
                      {/* Bar */}
                      <div className="h-2 w-full rounded-full bg-gray-light overflow-hidden">
                        <div
                          className="h-full rounded-full bg-navy"
                          style={{ width: `${row.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-[11px] text-near-black/40">
                  Source: EKOS/Probit &middot; Field: April 14-17, 2026
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/research?type=polling"
              className="text-sm font-medium text-navy hover:text-gold transition-colors"
            >
              View all polls &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. LATEST RESEARCH                                            */}
      {/* ============================================================ */}
      <section className="bg-gray-light py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold">
              Insights
            </p>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-navy">
              Latest Research &amp; Analysis
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchItems.slice(0, 5).map((item, i) => (
              <Link
                key={i}
                href="/research"
                className="group flex flex-col bg-white rounded-lg shadow-sm ring-1 ring-black/5 overflow-hidden hover:shadow-md transition-shadow"
              >
                {/* Color accent top bar */}
                <div className="h-1 w-full bg-navy group-hover:bg-gold transition-colors" />
                <div className="flex flex-col flex-1 p-6">
                  <span
                    className={`self-start rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${item.tagColor}`}
                  >
                    {item.tag}
                  </span>
                  <h3 className="mt-3 font-serif text-lg font-semibold text-navy leading-snug group-hover:text-gold-dark transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-near-black/60 flex-1">
                    {item.excerpt}
                  </p>
                  <p className="mt-4 text-xs text-near-black/40">{item.date}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/research"
              className="inline-flex items-center text-sm font-semibold text-navy hover:text-gold transition-colors"
            >
              View All Research &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. ABOUT SNIPPET                                              */}
      {/* ============================================================ */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                About EKOS
              </p>
              <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-navy leading-snug">
                Rigorous Research,
                <br className="hidden sm:block" /> Real-World Impact
              </h2>
              <p className="mt-6 text-base leading-relaxed text-near-black/70">
                Since 1980, EKOS Research Associates has maintained an unwavering
                focus on its core vision — knowledge for action. We combine
                probability-based survey research with advanced analytics to
                provide governments, institutions, and the media with insights
                that drive meaningful policy decisions.
              </p>
              <p className="mt-4 text-base leading-relaxed text-near-black/70">
                Our proprietary Probit panel is one of Canada&apos;s largest
                probability-based online panels, enabling us to produce some of
                the most accurate and representative public opinion data
                available.
              </p>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center text-sm font-semibold text-navy hover:text-gold transition-colors"
              >
                Learn more about EKOS &rarr;
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                { number: "45+", label: "Years of Research" },
                { number: "90,000+", label: "Panel Members" },
                { number: "500+", label: "Studies Completed" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center lg:text-left rounded-lg bg-gray-light p-6"
                >
                  <p className="font-serif text-4xl font-bold text-gold">
                    {stat.number}
                  </p>
                  <p className="mt-2 text-sm font-medium text-navy-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. SERVICES                                                   */}
      {/* ============================================================ */}
      <section className="bg-navy py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold">
              What We Do
            </p>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-white">
              Our Services
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((svc) => {
              const Icon = svc.icon;
              return (
                <div key={svc.title} className="text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
                    <Icon className="h-7 w-7 text-gold" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-white">
                    {svc.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {svc.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-14 text-center">
            <Link
              href="/services"
              className="inline-flex items-center rounded-md border-2 border-gold/40 px-7 py-3 text-sm font-semibold text-gold hover:bg-gold hover:text-navy transition-colors"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. NEWSLETTER SIGNUP                                          */}
      {/* ============================================================ */}
      <section className="bg-gold">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h2 className="font-serif text-2xl font-bold text-navy">
                Stay Informed
              </h2>
              <p className="mt-1 text-sm text-navy/70">
                Get the latest insights from EKOS Research delivered to your
                inbox.
              </p>
            </div>
            <form
              action="#"
              className="flex w-full max-w-md flex-col sm:flex-row gap-3"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="you@example.com"
                className="flex-1 rounded-md border-0 bg-white px-4 py-3 text-sm text-near-black placeholder:text-near-black/40 shadow-sm ring-1 ring-inset ring-navy/10 focus:ring-2 focus:ring-navy"
              />
              <button
                type="submit"
                className="rounded-md bg-navy px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-navy-muted transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
