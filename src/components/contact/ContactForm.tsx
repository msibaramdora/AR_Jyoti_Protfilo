"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ArrowUpRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name (at least 2 characters)"),
  email: z.string().email("Please enter a valid email address"),
  projectType: z.enum([
    "Architecture",
    "Interior Design",
    "3D Visualization",
    "Competition / Collaboration",
    "Job Opportunity / Studio Role",
    "Other Inquiries",
  ]),
  budgetRange: z.string().optional(),
  message: z.string().min(10, "Please provide a brief message (at least 10 characters)"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [submittedData, setSubmittedData] = useState<ContactFormData | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      projectType: "Architecture",
      budgetRange: "Flexible / To Discuss",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("submitting");

    // Integration point: You can easily connect this to Formspree, Resend, Nodemailer,
    // or a Next.js Server Action by making a fetch('/api/contact') or server action call.
    // For this demonstration, we simulate client validation and provide the exact payload:
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setSubmittedData(data);
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success" && submittedData) {
    return (
      <div className="bg-[#FCFAF7] border border-[#DDD7CD] p-8 sm:p-12 space-y-6">
        <div className="flex items-center space-x-3 text-emerald-800">
          <CheckCircle2 className="w-6 h-6 text-emerald-600" />
          <h3 className="font-serif text-2xl font-light text-[#252522]">
            Enquiry Prepared Successfully
          </h3>
        </div>

        <p className="text-sm text-[#77746D] leading-relaxed">
          Thank you, <strong className="text-[#252522]">{submittedData.name}</strong>. Your enquiry for{" "}
          <strong className="text-[#252522]">{submittedData.projectType}</strong> has been validated.
        </p>

        <div className="bg-[#F7F5F0] border border-[#E8E3DA] p-4 text-xs space-y-2 text-[#77746D]">
          <div className="font-medium text-[#252522] uppercase tracking-wider text-[10px]">
            Submission Summary
          </div>
          <p>
            <strong>Email:</strong> {submittedData.email}
          </p>
          <p>
            <strong>Project Scope:</strong> {submittedData.projectType} ({submittedData.budgetRange})
          </p>
          <p>
            <strong>Message:</strong> “{submittedData.message}”
          </p>
        </div>

        <div className="text-xs text-[#77746D] leading-relaxed border-t border-[#DDD7CD] pt-4">
          <p>
            You can also email Jyoti directly at{" "}
            <a
              href={`mailto:jyotisep2709@gmail.com?subject=Enquiry from ${encodeURIComponent(
                submittedData.name
              )} - ${encodeURIComponent(submittedData.projectType)}&body=${encodeURIComponent(
                submittedData.message
              )}`}
              className="text-[#252522] underline font-medium"
            >
              jyotisep2709@gmail.com
            </a>
            .
          </p>
        </div>

        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="text-xs uppercase tracking-widest text-[#252522] underline pt-2"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-[#FCFAF7] border border-[#DDD7CD] p-8 sm:p-10 space-y-6"
    >
      <div className="space-y-1 border-b border-[#E8E3DA] pb-4">
        <h3 className="font-serif text-2xl font-light text-[#252522]">
          Project Consultation Form
        </h3>
        <p className="text-xs text-[#77746D]">
          Please fill out the form below or email directly.
        </p>
      </div>

      {/* Name Field */}
      <div className="space-y-1.5">
        <label
          htmlFor="name"
          className="text-[11px] uppercase tracking-widest text-[#252522] font-semibold block"
        >
          Your Name <span className="text-amber-800">*</span>
        </label>
        <input
          id="name"
          type="text"
          placeholder="e.g. Ar. Priya Sharma / Studio Director"
          {...register("name")}
          className="w-full bg-[#F7F5F0] border border-[#DDD7CD] px-4 py-3 text-xs text-[#252522] placeholder-[#A39F97] focus:border-[#252522] focus:bg-white transition-colors"
        />
        {errors.name && (
          <p className="text-[11px] text-red-600 flex items-center space-x-1">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>{errors.name.message}</span>
          </p>
        )}
      </div>

      {/* Email Field */}
      <div className="space-y-1.5">
        <label
          htmlFor="email"
          className="text-[11px] uppercase tracking-widest text-[#252522] font-semibold block"
        >
          Your Email Address <span className="text-amber-800">*</span>
        </label>
        <input
          id="email"
          type="email"
          placeholder="e.g. priya@architecturestudio.com"
          {...register("email")}
          className="w-full bg-[#F7F5F0] border border-[#DDD7CD] px-4 py-3 text-xs text-[#252522] placeholder-[#A39F97] focus:border-[#252522] focus:bg-white transition-colors"
        />
        {errors.email && (
          <p className="text-[11px] text-red-600 flex items-center space-x-1">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>{errors.email.message}</span>
          </p>
        )}
      </div>

      {/* Project Type */}
      <div className="space-y-1.5">
        <label
          htmlFor="projectType"
          className="text-[11px] uppercase tracking-widest text-[#252522] font-semibold block"
        >
          Discipline or Inquiry Type
        </label>
        <select
          id="projectType"
          {...register("projectType")}
          className="w-full bg-[#F7F5F0] border border-[#DDD7CD] px-4 py-3 text-xs text-[#252522] focus:border-[#252522] focus:bg-white transition-colors cursor-pointer"
        >
          <option value="Architecture">Architecture (Planning, Form & Envelopes)</option>
          <option value="Interior Design">Interior Design (Retail, Residential, Wellness)</option>
          <option value="3D Visualization">3D Photorealistic Visualization (Renders & Walkthroughs)</option>
          <option value="Competition / Collaboration">Competition / Creative Collaboration</option>
          <option value="Job Opportunity / Studio Role">Junior Architect / Visualization Studio Role</option>
          <option value="Other Inquiries">General Inquiries</option>
        </select>
      </div>

      {/* Optional Budget Range */}
      <div className="space-y-1.5">
        <label
          htmlFor="budgetRange"
          className="text-[11px] uppercase tracking-widest text-[#252522] font-semibold block"
        >
          Estimated Budget or Timeline (Optional)
        </label>
        <select
          id="budgetRange"
          {...register("budgetRange")}
          className="w-full bg-[#F7F5F0] border border-[#DDD7CD] px-4 py-3 text-xs text-[#252522] focus:border-[#252522] focus:bg-white transition-colors cursor-pointer"
        >
          <option value="Flexible / To Discuss">Flexible / To Discuss</option>
          <option value="Immediate Project (Within 1 Month)">Immediate Project (Within 1 Month)</option>
          <option value="Upcoming Studio Role (Full-Time)">Upcoming Studio Role (Full-Time)</option>
          <option value="Freelance Visualization Project">Freelance Visualization Project</option>
          <option value="Academic / Competition Review">Academic / Competition Review</option>
        </select>
      </div>

      {/* Message */}
      <div className="space-y-1.5">
        <label
          htmlFor="message"
          className="text-[11px] uppercase tracking-widest text-[#252522] font-semibold block"
        >
          Project Details or Note <span className="text-amber-800">*</span>
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Briefly describe the site location, scope of work, timeline, or position details..."
          {...register("message")}
          className="w-full bg-[#F7F5F0] border border-[#DDD7CD] px-4 py-3 text-xs text-[#252522] placeholder-[#A39F97] focus:border-[#252522] focus:bg-white transition-colors resize-y"
        />
        {errors.message && (
          <p className="text-[11px] text-red-600 flex items-center space-x-1">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>{errors.message.message}</span>
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full bg-[#252522] text-[#F7F5F0] py-4 text-xs font-semibold uppercase tracking-[0.18em] hover:bg-black transition-colors flex items-center justify-center space-x-2 disabled:opacity-50"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin mr-2" />
              <span>Validating Enquiry...</span>
            </>
          ) : (
            <>
              <span>Submit Project Enquiry</span>
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </>
          )}
        </button>
      </div>

      <div className="text-[11px] text-[#77746D] text-center pt-2">
        Ready for production email delivery via Resend, Formspree, or Next.js server actions.
      </div>
    </form>
  );
}
