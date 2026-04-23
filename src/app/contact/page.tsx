import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact Us — EKOS Research Associates",
  description:
    "Get in touch with EKOS Research Associates. Located in Ottawa, Ontario.",
};

const officeInfo = [
  {
    icon: MapPin,
    label: "Address",
    lines: ["359 Kent Street, Suite 300", "Ottawa, ON K2P 0R6"],
  },
  {
    icon: Phone,
    label: "Phone",
    lines: ["(613) 235-7215"],
    href: "tel:+16132357215",
  },
  {
    icon: Mail,
    label: "Email",
    lines: ["pobox@ekos.com"],
    href: "mailto:pobox@ekos.com",
  },
  {
    icon: Clock,
    label: "Office Hours",
    lines: ["Monday - Friday", "9:00 AM - 5:00 PM ET"],
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Contact Us
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            Have a question about our research or interested in working with us?
            We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="bg-gray-light py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-5 lg:gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="rounded-lg bg-white p-8 shadow-sm">
                <h2 className="font-serif text-xl font-semibold text-navy mb-6">
                  Send Us a Message
                </h2>
                <ContactForm />
              </div>
            </div>

            {/* Office Info */}
            <div className="mt-10 lg:mt-0 lg:col-span-2">
              <div className="rounded-lg bg-white p-8 shadow-sm">
                <h2 className="font-serif text-xl font-semibold text-navy mb-6">
                  Our Office
                </h2>
                <div className="space-y-6">
                  {officeInfo.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="flex gap-4">
                        <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-gold-light">
                          <Icon className="h-5 w-5 text-navy" />
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-near-black">
                            {item.label}
                          </h3>
                          {item.lines.map((line) =>
                            item.href ? (
                              <a
                                key={line}
                                href={item.href}
                                className="block text-sm text-near-black/70 hover:text-navy transition-colors"
                              >
                                {line}
                              </a>
                            ) : (
                              <p
                                key={line}
                                className="text-sm text-near-black/70"
                              >
                                {line}
                              </p>
                            )
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
