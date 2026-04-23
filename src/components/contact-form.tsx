"use client";

import { useState } from "react";

const subjects = [
  "General Inquiry",
  "Public Opinion Research",
  "Program Evaluation",
  "Market Research",
  "Media Inquiry",
  "Probit Panel",
  "Other",
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // No backend wiring yet
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-lg bg-gold-light p-8 text-center">
        <h3 className="font-serif text-xl font-semibold text-navy">
          Thank you for your message
        </h3>
        <p className="mt-2 text-sm text-near-black/70">
          We will get back to you as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-near-black mb-1"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-near-black focus:outline-none focus:ring-2 focus:ring-gold"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-near-black mb-1"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-near-black focus:outline-none focus:ring-2 focus:ring-gold"
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-near-black mb-1"
        >
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-near-black focus:outline-none focus:ring-2 focus:ring-gold"
        />
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-near-black mb-1"
        >
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-near-black focus:outline-none focus:ring-2 focus:ring-gold"
        >
          <option value="">Select a subject</option>
          {subjects.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-near-black mb-1"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-near-black focus:outline-none focus:ring-2 focus:ring-gold"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-md bg-gold px-6 py-3 text-sm font-semibold text-navy hover:bg-gold-dark transition-colors"
      >
        Send Message
      </button>
    </form>
  );
}
