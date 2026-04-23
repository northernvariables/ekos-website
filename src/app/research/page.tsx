import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Research & Analysis — EKOS Research Associates",
  description:
    "Explore EKOS Research's latest public opinion research, polling data, and policy analysis on Canadian federal politics, the economy, defence, immigration, and more.",
};

const topics = [
  "All",
  "Federal Politics",
  "Economy",
  "Defence & Security",
  "Immigration",
  "Health",
];

const articles = [
  {
    topic: "Federal Politics",
    title: "Canadians Increasingly Pessimistic About Direction of Country",
    date: "April 18, 2026",
    excerpt:
      "A new EKOS survey finds that nearly six in ten Canadians believe the country is headed in the wrong direction, marking the highest level of pessimism recorded since 2015.",
  },
  {
    topic: "Economy",
    title: "Middle Class Squeeze: Perceptions of Economic Mobility in Decline",
    date: "April 10, 2026",
    excerpt:
      "Our latest research reveals a growing disconnect between macroeconomic indicators and how Canadians experience economic progress in their daily lives.",
  },
  {
    topic: "Immigration",
    title: "Public Attitudes Toward Immigration at a Crossroads",
    date: "March 28, 2026",
    excerpt:
      "While Canadians remain broadly supportive of immigration, new data show a significant shift in attitudes toward temporary foreign workers and intake levels.",
  },
  {
    topic: "Defence & Security",
    title: "Defence Spending and NATO Commitments: Where Canadians Stand",
    date: "March 15, 2026",
    excerpt:
      "As geopolitical pressures mount, our polling shows a notable increase in public support for meeting Canada's NATO spending obligations.",
  },
  {
    topic: "Federal Politics",
    title: "Trust in Institutions Continues Its Long Decline",
    date: "March 5, 2026",
    excerpt:
      "Confidence in Parliament, the media, and the justice system has reached historic lows. EKOS tracking data reveals the depth of the institutional trust deficit.",
  },
  {
    topic: "Health",
    title: "Health Care Access: Regional Disparities Widen Post-Pandemic",
    date: "February 22, 2026",
    excerpt:
      "Canadians in rural and northern communities report significantly worse access to primary care compared to urban centres, according to new EKOS survey data.",
  },
];

const popularArticles = [
  "Canadians Increasingly Pessimistic About Direction of Country",
  "Public Attitudes Toward Immigration at a Crossroads",
  "Trust in Institutions Continues Its Long Decline",
  "Middle Class Squeeze: Perceptions of Economic Mobility in Decline",
  "Defence Spending and NATO Commitments: Where Canadians Stand",
];

export default function ResearchPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Research &amp; Analysis
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            Explore EKOS&apos;s latest public opinion research, polling data,
            and policy analysis. Our evidence-based approach provides
            authoritative insights into the issues shaping Canada.
          </p>
        </div>
      </section>

      {/* Topic Filters */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-2">
            {topics.map((topic) => (
              <button
                key={topic}
                type="button"
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  topic === "All"
                    ? "bg-navy text-white"
                    : "bg-gray-light text-near-black hover:bg-gold-light hover:text-navy"
                }`}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-gray-light py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-4 lg:gap-10">
            {/* Article Grid */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.map((article) => (
                  <article
                    key={article.title}
                    className="rounded-lg bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="inline-block rounded-full bg-gold-light px-3 py-0.5 text-xs font-medium text-navy">
                      {article.topic}
                    </span>
                    <h3 className="mt-3 font-serif text-lg font-semibold text-navy leading-snug">
                      {article.title}
                    </h3>
                    <p className="mt-1 text-xs text-gray-500">{article.date}</p>
                    <p className="mt-3 text-sm text-near-black/80 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <Link
                      href="#"
                      className="mt-4 inline-block text-sm font-medium text-gold-dark hover:text-navy transition-colors"
                    >
                      Read More &rarr;
                    </Link>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="mt-10 lg:mt-0">
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h2 className="font-serif text-lg font-semibold text-navy mb-4">
                  Most Popular
                </h2>
                <ol className="space-y-3">
                  {popularArticles.map((title, i) => (
                    <li key={title} className="flex gap-3">
                      <span className="text-sm font-bold text-gold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <Link
                        href="#"
                        className="text-sm text-near-black hover:text-navy transition-colors leading-snug"
                      >
                        {title}
                      </Link>
                    </li>
                  ))}
                </ol>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
