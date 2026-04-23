import type { Metadata } from "next";
import Link from "next/link";
import { FlaskConical, Lightbulb, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "About EKOS — EKOS Research Associates",
  description:
    "Since 1980, EKOS Research Associates has been delivering rigorous, independent research to inform public policy and decision-making in Canada.",
};

const keyFacts = [
  { label: "Founded", value: "1980" },
  { label: "Headquarters", value: "Ottawa, ON" },
  { label: "Experience", value: "45+ Years" },
  { label: "Memberships", value: "CRIC & CES" },
];

const approaches = [
  {
    icon: FlaskConical,
    title: "Rigorous Methodology",
    description:
      "We employ the highest standards of social science methodology, including probability-based sampling, validated instruments, and transparent reporting. Our commitment to methodological rigour ensures the reliability of every finding.",
  },
  {
    icon: Lightbulb,
    title: "Evidence-Based Insights",
    description:
      "Every recommendation we make is grounded in data. We combine quantitative analysis with qualitative understanding to produce insights that stand up to scrutiny and reflect the complexity of public attitudes.",
  },
  {
    icon: Target,
    title: "Actionable Results",
    description:
      "Research is only as valuable as the decisions it enables. We translate findings into clear, practical guidance that helps our clients act with confidence on the issues that matter most.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            About EKOS
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            Knowledge for action — delivering rigorous, independent research to
            inform public policy and decision-making in Canada.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-12">
            {/* Left — Description */}
            <div className="lg:col-span-2 space-y-6 text-near-black/80 leading-relaxed">
              <p>
                Since its inception EKOS has had an unwavering focus on its core
                vision &mdash; knowledge for action. This vision has guided
                everything from the design of our research instruments to the
                way we communicate findings. We believe that rigorous,
                independent research is essential to sound public policy and
                informed democratic debate.
              </p>
              <p>
                EKOS Research Associates Inc. was founded in 1980 and has become
                one of Canada&apos;s most recognized names in public opinion
                research, program evaluation, and policy analysis. We have
                completed thousands of projects spanning virtually every major
                issue area in Canadian public policy.
              </p>
              <p>
                Our methodology philosophy is built on the conviction that the
                best research combines scientific rigour with practical
                relevance. We are committed to probability-based methods,
                transparent reporting, and research designs that capture the
                genuine complexity of public attitudes and experiences.
              </p>
              <p>
                We work with a diverse client base that includes federal and
                provincial government departments, non-profit organizations,
                media outlets, and private-sector firms. Regardless of the
                client, our commitment to independence and quality remains
                constant.
              </p>
            </div>

            {/* Right — Key Facts Sidebar */}
            <aside className="mt-10 lg:mt-0">
              <div className="rounded-lg bg-gray-light p-6">
                <h2 className="font-serif text-lg font-semibold text-navy mb-4">
                  Key Facts
                </h2>
                <dl className="space-y-4">
                  {keyFacts.map((fact) => (
                    <div key={fact.label}>
                      <dt className="text-xs font-medium uppercase tracking-wider text-near-black/50">
                        {fact.label}
                      </dt>
                      <dd className="mt-0.5 text-lg font-semibold text-navy">
                        {fact.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="mt-6 space-y-3">
                <Link
                  href="/about/team"
                  className="block rounded-md bg-navy px-4 py-3 text-center text-sm font-semibold text-white hover:bg-navy-muted transition-colors"
                >
                  Meet Our Team
                </Link>
                <Link
                  href="/probit"
                  className="block rounded-md border border-navy px-4 py-3 text-center text-sm font-semibold text-navy hover:bg-gray-light transition-colors"
                >
                  Research Infrastructure
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-gray-light py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy text-center">
            Our Approach
          </h2>
          <p className="mt-3 text-center text-near-black/70 max-w-xl mx-auto">
            Three principles guide every project we undertake.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {approaches.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-lg bg-white p-8 shadow-sm text-center"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold-light">
                    <Icon className="h-6 w-6 text-navy" />
                  </div>
                  <h3 className="mt-5 font-serif text-lg font-semibold text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-near-black/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
