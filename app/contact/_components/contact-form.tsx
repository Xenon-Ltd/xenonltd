"use client";

import React, { useState } from "react";
import PrimaryButton from "@/shared/ui/primary-button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    organization: "",
    email: "",
    country: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API request
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSuccess(true);
      setFormData({
        firstName: "",
        lastName: "",
        organization: "",
        email: "",
        country: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl p-8 sm:p-10 border border-black/5 shadow-sm max-w-[528px] w-full">
      {isSuccess ? (
        <div className="text-center py-12 space-y-4">
          <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto">
            <svg
              className="h-6 w-6 text-emerald-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="font-heading text-2xl font-bold text-grey-800">
            Thank you!
          </h3>
          <p className="font-sans text-grey-500 text-sm sm:text-base leading-relaxed">
            Your message has been sent successfully. A sales specialist will be
            in touch with you shortly.
          </p>
          <button
            onClick={() => setIsSuccess(false)}
            className="mt-4 font-heading text-sm font-semibold text-primary-400 hover:text-primary-300 transition-colors"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="border-b border-grey-200/50 pb-4">
            <h3 className="font-heading text-2xl font-bold text-grey-800">
              Contact Sales
            </h3>
          </div>

          {/* First Name & Last Name row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="firstName"
                className="font-sans text-xs font-medium text-grey-700"
              >
                *First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Jane"
                className="w-full bg-[#F9F4F1] border border-black/10 rounded-xl px-4 py-3 font-sans text-sm text-grey-800 placeholder-[#98A2B3] focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="lastName"
                className="font-sans text-xs font-medium text-grey-700"
              >
                *Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Doe"
                className="w-full bg-[#F9F4F1] border border-black/10 rounded-xl px-4 py-3 font-sans text-sm text-grey-800 placeholder-[#98A2B3] focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Organization */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="organization"
              className="font-sans text-xs font-medium text-grey-700"
            >
              *Organization
            </label>
            <input
              type="text"
              id="organization"
              name="organization"
              required
              value={formData.organization}
              onChange={handleChange}
              placeholder="Your Bank / Fintech"
              className="w-full bg-[#F9F4F1] border border-black/10 rounded-xl px-4 py-3 font-sans text-sm text-grey-800 placeholder-[#98A2B3] focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
            />
          </div>

          {/* Work Email */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="email"
              className="font-sans text-xs font-medium text-grey-700"
            >
              Work Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="jane@yourbank.com"
              className="w-full bg-[#F9F4F1] border border-black/10 rounded-xl px-4 py-3 font-sans text-sm text-grey-800 placeholder-[#98A2B3] focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
            />
          </div>

          {/* Country */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="country"
              className="font-sans text-xs font-medium text-grey-700"
            >
              *Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              required
              value={formData.country}
              onChange={handleChange}
              placeholder="Select country..."
              className="w-full bg-[#F9F4F1] border border-black/10 rounded-xl px-4 py-3 font-sans text-sm text-grey-800 placeholder-[#98A2B3] focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
            />
          </div>

          {/* Message textarea */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="message"
              className="font-sans text-xs font-medium text-grey-700"
            >
              How can we help?
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your infrastructure needs or questions..."
              className="w-full bg-[#F9F4F1] border border-black/10 rounded-xl px-4 py-3 font-sans text-sm text-grey-800 placeholder-[#98A2B3] focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all resize-none min-h-[115px]"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <PrimaryButton
              type="submit"
              disabled={isSubmitting}
              className="w-[157px] h-[52px] text-base font-semibold"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </PrimaryButton>
          </div>
        </form>
      )}
    </div>
  );
}
