import Link from "next/link";
import { ExternalLink } from "lucide-react";

const pressReleases = [
  {
    title: "EKOS Predicts Liberal Majority in 2025 Federal Election",
    date: "April 27, 2025",
    source: "EKOS Politics",
  },
  {
    title: "From Collapse to Dominance: Liberal Surge Reshapes Canadian Politics",
    date: "March 18, 2026",
    source: "EKOS Politics",
  },
  {
    title: "Defence Spending Support Reaches Historic Highs Among Canadians",
    date: "February 12, 2026",
    source: "EKOS Politics",
  },
  {
    title: "Dread Deepens to Record High as Canadians Rally to Carney",
    date: "January 22, 2026",
    source: "EKOS Politics",
  },
  {
    title: "Liberal Party Holds Stable Eight-Point Lead",
    date: "November 15, 2025",
    source: "EKOS Politics",
  },
];

const mediaCoverage = [
  {
    title: "EKOS Poll Shows Growing Support for NATO Defence Commitments",
    outlet: "CBC News",
    date: "February 2026",
  },
  {
    title: "Frank Graves on Canada's Conservative Collapse",
    outlet: "The Dean Blundell Show",
    date: "February 2025",
  },
  {
    title: "Canadians' Economic Outlook Sinks to Decade Low",
    outlet: "The Globe and Mail",
    date: "January 2026",
  },
  {
    title: "Polling Shows Two-Party Dynamic Dissolving Post-Election",
    outlet: "iPolitics",
    date: "April 2025",
  },
  {
    title: "Frank Graves Discusses Sovereignty Concerns on The Global Exchange",
    outlet: "The Global Exchange",
    date: "August 2024",
  },
  {
    title: "EKOS Founder Frank Graves Receives Honorary Doctorate from Carleton",
    outlet: "Carleton University",
    date: "June 2024",
  },
];

const presentations = [
  {
    title: "IVR: Cheaper and More Robust",
    author: "Frank Graves",
    type: "Methodology",
  },
  {
    title:
      "Interactive Voice Response: The Past, The Present, and Into the Future",
    author: "Frank Graves",
    type: "Methodology",
  },
  {
    title: "Northern Populism: Causes and Consequences of the New Ordered Outlook",
    author: "Frank Graves",
    type: "Policy Research",
  },
  {
    title:
      "Understanding the New Public Outlook on the Economy and Middle-Class Decline",
    author: "Frank Graves",
    type: "Policy Research",
  },
];

export default function MediaPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white">
            Media Centre
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
            Press releases, media coverage, and presentations from EKOS Research
            Associates.
          </p>
        </div>
      </section>

      {/* Press Releases */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                Latest
              </p>
              <h2 className="mt-2 font-serif text-3xl font-bold text-navy">
                Press Releases
              </h2>
            </div>
            <Link
              href="https://www.ekospolitics.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-navy hover:text-gold transition-colors"
            >
              EKOS Politics <ExternalLink className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="divide-y divide-gray-light">
            {pressReleases.map((item) => (
              <article
                key={item.title}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 py-5 group"
              >
                <div className="flex-1">
                  <h3 className="font-serif text-lg font-semibold text-navy group-hover:text-gold-dark transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-near-black/50">
                    {item.source}
                  </p>
                </div>
                <time className="shrink-0 text-sm text-near-black/40">
                  {item.date}
                </time>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EKOS in the Media */}
      <section className="bg-gray-light py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold">
              Coverage
            </p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-navy">
              EKOS in the Media
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediaCoverage.map((item) => (
              <article
                key={item.title}
                className="flex flex-col bg-white rounded-lg shadow-sm ring-1 ring-black/5 p-6 hover:shadow-md transition-shadow"
              >
                <span className="self-start rounded-full bg-navy px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                  {item.outlet}
                </span>
                <h3 className="mt-3 font-serif text-base font-semibold text-navy leading-snug flex-1">
                  {item.title}
                </h3>
                <time className="mt-3 text-xs text-near-black/40">
                  {item.date}
                </time>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Key Presentations */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold">
              Resources
            </p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-navy">
              Key Presentations
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {presentations.map((item) => (
              <article
                key={item.title}
                className="flex items-start gap-4 rounded-lg border border-gray-light p-6 hover:border-gold/30 transition-colors"
              >
                <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-gold-light">
                  <span className="text-sm font-bold text-gold-dark">PDF</span>
                </div>
                <div>
                  <h3 className="font-serif text-base font-semibold text-navy leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-near-black/50">
                    {item.author} &middot; {item.type}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl font-bold text-white">
            Media Inquiries
          </h2>
          <p className="mt-2 text-white/60">
            For press inquiries or to request an interview with Frank Graves,
            please contact us.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center rounded-md bg-gold px-7 py-3 text-sm font-semibold text-navy hover:bg-gold-dark transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
