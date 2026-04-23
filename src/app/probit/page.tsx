import type { Metadata } from "next";
import Link from "next/link";
import { Shuffle, Globe, UsersRound, Smartphone } from "lucide-react";

export const metadata: Metadata = {
  title: "Probit Panel — EKOS Research Associates",
  description:
    "Probit is Canada's most rigorously constructed hybrid survey tool, with over 90,000 randomly recruited panelists providing representative insights.",
};

const features = [
  {
    icon: Shuffle,
    title: "Probability-Based Recruitment",
    description:
      "Everyone should be able to appear in the sample. Probit uses random digit dialling (RDD) to recruit participants, ensuring that every Canadian has a known, non-zero probability of being selected. This stands in sharp contrast to opt-in panels where self-selection bias undermines representativeness.",
  },
  {
    icon: Globe,
    title: "Full Coverage",
    description:
      "Internet surveys bolstered with phone-only and cell-phone-only households. By integrating online, telephone, and mobile response modes, Probit reaches Canadians who would be missed by any single-mode approach — including those without internet access and those who use only a cell phone.",
  },
  {
    icon: UsersRound,
    title: "90,000+ Canadians",
    description:
      "Constantly refreshed, randomly recruited panel. The Probit panel is maintained through continuous recruitment and regular panel refreshment, ensuring it remains current and representative of the evolving Canadian population across all regions, demographics, and socioeconomic groups.",
  },
];

export default function ProbitPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-l-4 border-gold pl-6">
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Probit Panel
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-gold-light font-medium">
              Canada&apos;s most rigorously constructed hybrid survey tool
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="bg-gray-light py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="rounded-lg bg-white p-8 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold-light">
                    <Icon className="h-6 w-6 text-navy" />
                  </div>
                  <h2 className="mt-5 font-serif text-lg font-semibold text-navy">
                    {feature.title}
                  </h2>
                  <p className="mt-3 text-sm text-near-black/80 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy">
            Methodology
          </h2>
          <div className="mt-6 space-y-4 text-sm text-near-black/80 leading-relaxed">
            <p>
              Probit is a hybrid probability panel designed to overcome the
              well-documented limitations of traditional online opt-in panels.
              While online panels have become the dominant mode of survey
              research, most rely on volunteer samples that systematically
              under-represent significant portions of the population.
            </p>
            <p>
              Probit addresses this gap by using random digit dialling (RDD) to
              recruit panelists, then offering them the choice of completing
              surveys online or by telephone. This multi-mode approach ensures
              that the roughly 10-15% of Canadians who are not online &mdash;
              disproportionately older, lower-income, and rural residents &mdash;
              are included in the sample frame.
            </p>
            <p>
              The result is a panel of over 90,000 Canadians that is
              continuously refreshed through new recruitment waves. Probit data
              can be weighted to known population parameters with greater
              confidence than opt-in panels, producing more accurate and
              reliable estimates of public opinion.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-light py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg bg-navy p-8 sm:p-10 text-center">
            <h2 className="font-serif text-2xl font-bold text-white">
              Already a panel member?
            </h2>
            <p className="mt-2 text-gray-300">
              Log in to your account to participate in active surveys.
            </p>
            <a
              href="#"
              className="mt-6 inline-flex items-center rounded-md bg-gold px-6 py-3 text-sm font-semibold text-navy hover:bg-gold-dark transition-colors"
            >
              Log In to Probit
            </a>
          </div>

          {/* SMS Note */}
          <div className="mt-8 flex items-start gap-3 rounded-lg bg-white p-6 shadow-sm">
            <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-gold-light">
              <Smartphone className="h-5 w-5 text-navy" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-navy">
                Received an SMS from us?
              </h3>
              <p className="mt-1 text-sm text-near-black/70">
                If you received an SMS from{" "}
                <span className="font-medium text-near-black">
                  647-691-1129
                </span>
                , it&apos;s from us. EKOS uses SMS to verify panel member
                identities and send survey invitations. You can safely respond
                to these messages.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
