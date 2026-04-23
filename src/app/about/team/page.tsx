import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Team — EKOS Research Associates",
  description:
    "Meet the leadership team at EKOS Research Associates, including President Frank Graves and Senior Vice President Susan Galley.",
};

const leaders = [
  {
    initials: "FG",
    name: "Frank Graves",
    role: "President",
    bio: "Frank Graves is the founder and president of EKOS Research Associates. With over 45 years of experience in social research, he is one of Canada's most recognized voices in public opinion research. His work focuses on the evolving relationship between citizens and government, with a particular emphasis on issues of social cohesion, economic mobility, and democratic health. Frank is a frequent commentator in national media and a sought-after speaker on Canadian public policy.",
  },
  {
    initials: "SG",
    name: "Susan Galley",
    role: "Senior Vice President",
    bio: "Susan Galley is the Senior Vice President of EKOS Research Associates, where she oversees the firm's survey operations and manages many of its largest research programs. With deep expertise in questionnaire design, sampling methodology, and data quality assurance, Susan ensures that every project meets the highest standards of rigour. She plays a central role in EKOS's public opinion research and program evaluation practice areas.",
  },
];

const affiliations = [
  {
    name: "Canadian Research Insights Council (CRIC)",
    description:
      "CRIC is the national body for the survey research and market intelligence profession in Canada. Membership signals a commitment to professional standards, transparency, and ethical practice.",
    href: "https://canadianresearchinsightscouncil.ca",
  },
  {
    name: "Canadian Evaluation Society (CES)",
    description:
      "CES promotes the theory, practice, and utilization of evaluation in Canada. EKOS's longstanding membership reflects our deep engagement with the evaluation community.",
    href: "https://evaluationcanada.ca",
  },
];

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Our Team
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            Our company is built around a core group of seasoned researchers
            with deep expertise across survey methodology, program evaluation,
            and public policy analysis.
          </p>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-navy mb-10">
            Leadership
          </h2>
          <div className="space-y-12">
            {leaders.map((leader) => (
              <div
                key={leader.name}
                className="flex flex-col sm:flex-row gap-6 sm:gap-8"
              >
                {/* Avatar Placeholder */}
                <div className="shrink-0 flex items-start">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gray-light">
                    <span className="font-serif text-2xl font-bold text-navy-muted">
                      {leader.initials}
                    </span>
                  </div>
                </div>
                {/* Bio */}
                <div>
                  <h3 className="font-serif text-xl font-semibold text-navy">
                    {leader.name}
                  </h3>
                  <p className="text-sm font-medium text-gold-dark">
                    {leader.role}
                  </p>
                  <p className="mt-3 text-sm text-near-black/80 leading-relaxed max-w-2xl">
                    {leader.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Affiliations */}
      <section className="bg-gray-light py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-navy mb-8">
            Professional Affiliations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {affiliations.map((aff) => (
              <div
                key={aff.name}
                className="rounded-lg bg-white p-6 shadow-sm"
              >
                <h3 className="font-serif text-lg font-semibold text-navy">
                  {aff.name}
                </h3>
                <p className="mt-2 text-sm text-near-black/80 leading-relaxed">
                  {aff.description}
                </p>
                <a
                  href={aff.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm font-medium text-gold-dark hover:text-navy transition-colors"
                >
                  Visit Website &rarr;
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back Link */}
      <section className="bg-white py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/about"
            className="text-sm font-medium text-navy hover:text-gold-dark transition-colors"
          >
            &larr; Back to About
          </Link>
        </div>
      </section>
    </>
  );
}
