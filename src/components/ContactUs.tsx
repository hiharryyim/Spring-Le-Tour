"use client";

import { useState, type FormEvent } from "react";

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(false);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: formData.get("company") as string,
      role: formData.get("role") as string,
      interest: formData.get("interest") as string,
      timeline: formData.get("timeline") as string,
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-24 bg-bg-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
            Contact Us
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-dark mb-4">
            Let&apos;s Build Something Together
          </h2>
          <p className="text-dark-light text-lg max-w-2xl mx-auto">
            Ready to explore our solutions? Reach out and our team will get back
            to you promptly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-dark mb-4">
                Get in Touch
              </h3>
              <p className="text-dark-light leading-relaxed mb-6">
                Whether you&apos;re a dealer looking for quality conversion
                packages, an entrepreneur launching a mobile fleet, or just
                curious about what we do, we&apos;d love to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-dark">Email</p>
                  <a
                    href="mailto:harry.yan@springletour.com"
                    className="text-primary hover:text-primary-dark transition-colors"
                  >
                    harry.yan@springletour.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-dark">Location</p>
                  <p className="text-dark-light">11562 Range View Rd, Jurupa Valley, CA 91752</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-dark/5">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-dark mb-2">
                  Message Sent!
                </h3>
                <p className="text-dark-light">
                  Thank you for reaching out. We&apos;ll get back to you
                  shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-dark mb-1.5"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-dark/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors bg-bg"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-dark mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-dark/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors bg-bg"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-dark mb-1.5"
                  >
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-dark/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors bg-bg"
                    placeholder="Your company (optional)"
                  />
                </div>
                <div>
                  <label
                    htmlFor="role"
                    className="block text-sm font-medium text-dark mb-1.5"
                  >
                    I am
                  </label>
                  <select
                    id="role"
                    name="role"
                    required
                    defaultValue=""
                    className="w-full px-4 py-3 rounded-lg border border-dark/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors bg-bg text-dark"
                  >
                    <option value="" disabled>
                      Select one
                    </option>
                    <option>Existing mobile / grooming business owner</option>
                    <option>New to the business, just starting out</option>
                    <option>DIY builder or dealer</option>
                    <option>Just exploring</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="interest"
                    className="block text-sm font-medium text-dark mb-1.5"
                  >
                    Interested in
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    required
                    defaultValue=""
                    className="w-full px-4 py-3 rounded-lg border border-dark/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors bg-bg text-dark"
                  >
                    <option value="" disabled>
                      Select one
                    </option>
                    <option>Mobile Pet Grooming Van</option>
                    <option>Adventure Camper</option>
                    <option>Foundation Kit only</option>
                    <option>Another mobile business category</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="timeline"
                    className="block text-sm font-medium text-dark mb-1.5"
                  >
                    Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    required
                    defaultValue=""
                    className="w-full px-4 py-3 rounded-lg border border-dark/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors bg-bg text-dark"
                  >
                    <option value="" disabled>
                      Select one
                    </option>
                    <option>Ready now</option>
                    <option>1 to 3 months</option>
                    <option>3 to 6 months</option>
                    <option>6+ months / just exploring</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-dark mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-dark/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors bg-bg resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                {error && (
                  <p className="text-red-600 text-sm text-center">
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-primary text-white py-3.5 rounded-full font-medium hover:bg-primary-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
