import type { Metadata } from "next";
import Link from "next/link";
import { BarChart3, ClipboardCheck, Users, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services — EKOS Research Associates",
  description:
    "EKOS offers public opinion research, program evaluation, human resources research, and market research services across Canada.",
};

const services = [
  {
    icon: BarChart3,
    title: "Public Opinion Research",
    description:
      "One of the most recognized and respected names in public opinion research in Canada. EKOS has completed thousands of public opinion research projects since 1980, spanning virtually every major issue area in Canadian public policy. Our expertise in survey design, sampling methodology, and data analysis delivers actionable insights for government, media, and the private sector.",
    href: "#",
  },
  {
    icon: ClipboardCheck,
    title: "Program Evaluation & Performance Measurement",
    description:
      "One of Canada's longest and most distinguished records in measuring effectiveness of government programs and policies. We apply rigorous evaluation frameworks to help organizations understand what works, what doesn't, and why. Our approach combines quantitative measurement with qualitative insight to produce evidence that drives real improvement.",
    href: "#",
  },
  {
    icon: Users,
    title: "Human Resources & Organizational Research",
    description:
      "Engaging employees in decision-making improves relationships, productivity, and performance. EKOS helps organizations understand their workforce through employee surveys, organizational assessments, and workplace culture research. Our tools identify strengths, diagnose challenges, and chart a path toward healthier, more effective workplaces.",
    href: "#",
  },
  {
    icon: TrendingUp,
    title: "Market Research",
    description:
      "Timely market intelligence with creative implementation strategies. We help organizations understand their markets, audiences, and competitive environments through a full suite of quantitative and qualitative research methods. From customer satisfaction studies to brand tracking, EKOS delivers the data you need to make confident strategic decisions.",
    href: "#",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Our Services
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            For over 45 years, EKOS has delivered rigorous research and
            evaluation services to government, non-profit, and private sector
            clients across Canada.
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="bg-gray-light py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="rounded-lg bg-white p-8 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold-light">
                    <Icon className="h-6 w-6 text-navy" />
                  </div>
                  <h2 className="mt-5 font-serif text-xl font-semibold text-navy">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-sm text-near-black/80 leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="mt-5 inline-block text-sm font-medium text-gold-dark hover:text-navy transition-colors"
                  >
                    Learn More &rarr;
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy">
            Ready to discuss your research needs?
          </h2>
          <p className="mt-3 text-near-black/70 max-w-lg mx-auto">
            Our team of experienced researchers is ready to help you design a
            study that delivers the insights you need.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center rounded-md bg-gold px-6 py-3 text-sm font-semibold text-navy hover:bg-gold-dark transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
