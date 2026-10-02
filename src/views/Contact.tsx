'use client';

import React, { useState } from 'react';
import {
  AlertCircle,
  ArrowRight,
  Check,
  CheckCircle2,
  Loader2,
  Mail,
} from 'lucide-react';
import Section from '../components/Section';
import { cn } from '../lib/utils';

interface FormData {
  name: string;
  email: string;
  company: string;
  projectDetails: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  projectDetails?: string;
}

const initialForm: FormData = {
  name: '',
  email: '',
  company: '',
  projectDetails: '',
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const next: FormErrors = {};
    if (!formData.name.trim()) next.name = 'Name is required.';
    if (!formData.company.trim()) next.company = 'Company is required.';
    if (!formData.email.trim()) next.email = 'Email is required.';
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) next.email = 'Enter a valid email address.';
    if (!formData.projectDetails.trim()) next.projectDetails = 'Tell us enough about the workflow to start the discussion.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((current) => ({ ...current, [name]: undefined }));
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
        signal: AbortSignal.timeout(15000),
      });

      const result = await response.json().catch(() => ({}));
      if (!response.ok || result.success !== true) {
        throw new Error(result.error || 'Message delivery failed. Please email us directly.');
      }

      setIsSuccess(true);
      setFormData(initialForm);
    } catch (error) {
      const message =
        error instanceof Error && error.name !== 'TimeoutError'
          ? error.message
          : 'We could not confirm delivery. Please try again or email us directly.';
      setSubmitError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldClass = (hasError: boolean) =>
    cn(
      'mt-2 w-full rounded-xl border bg-zinc-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-700 focus:border-zinc-600',
      hasError ? 'border-red-800' : 'border-zinc-800',
    );

  return (
    <div className="pt-16">

      <Section className="border-b border-zinc-800 py-12 md:py-16" animate={false}>
        <div className="max-w-4xl">
          <p className="text-sm font-semibold text-zinc-500">Talk to us</p>
          <h1 className="mt-5 text-5xl font-semibold tracking-[-0.045em] text-white md:text-7xl">
            Start with the workflow that is breaking today.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400">
            Tell us where information, approvals, inventory, money, clinical work, or accountability break down. We will use that to determine what kind of system conversation is useful.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-24">
            <p className="text-sm font-semibold text-zinc-500">Useful context</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white md:text-4xl">
              A good first message does not need a specification.
            </h2>
            <p className="mt-5 text-sm leading-7 text-zinc-400">
              Describe the operational problem in plain language. We can map architecture after we understand the people, authority, data, and failure modes involved.
            </p>

            <div className="mt-8 space-y-3">
              {[
                'Which teams or departments touch the workflow?',
                'What system or manual process exists today?',
                'Where do delays, duplicate work, or data gaps appear?',
                'What must keep working during outages or partial failure?',
                'Which actions are financially, clinically, or operationally critical?',
              ].map((item) => (
                <div key={item} className="flex gap-3 rounded-xl border border-zinc-800 bg-zinc-900/40 p-4">
                  <div className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-500/10 text-emerald-400">
                    <Check className="h-3 w-3" />
                  </div>
                  <p className="text-sm leading-6 text-zinc-300">{item}</p>
                </div>
              ))}
            </div>

            <a
              href="mailto:help@gothamcoders.com"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-zinc-300"
            >
              <Mail className="h-4 w-4" />
              help@gothamcoders.com
            </a>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8 md:p-10">
            {isSuccess ? (
              <div className="py-10 text-center">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-emerald-500/10 text-emerald-400">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <h2 className="mt-6 text-2xl font-semibold text-white">Message accepted for delivery</h2>
                <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-zinc-400">
                  We received the form successfully. The team can continue the conversation with you by email.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-7 rounded-xl border border-zinc-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-zinc-900"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="text-sm font-medium text-zinc-300">
                    Name
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      autoComplete="name"
                      className={fieldClass(Boolean(errors.name))}
                      placeholder="Your name"
                      aria-invalid={Boolean(errors.name)}
                    />
                    {errors.name && <span className="mt-1.5 block text-xs text-red-400">{errors.name}</span>}
                  </label>

                  <label className="text-sm font-medium text-zinc-300">
                    Work email
                    <input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="email"
                      className={fieldClass(Boolean(errors.email))}
                      placeholder="you@company.com"
                      aria-invalid={Boolean(errors.email)}
                    />
                    {errors.email && <span className="mt-1.5 block text-xs text-red-400">{errors.email}</span>}
                  </label>
                </div>

                <label className="mt-5 block text-sm font-medium text-zinc-300">
                  Organization
                  <input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    autoComplete="organization"
                    className={fieldClass(Boolean(errors.company))}
                    placeholder="Company, hospital, or organization"
                    aria-invalid={Boolean(errors.company)}
                  />
                  {errors.company && <span className="mt-1.5 block text-xs text-red-400">{errors.company}</span>}
                </label>

                <label className="mt-5 block text-sm font-medium text-zinc-300">
                  What is the operational problem?
                  <textarea
                    name="projectDetails"
                    value={formData.projectDetails}
                    onChange={handleChange}
                    rows={8}
                    className={cn(fieldClass(Boolean(errors.projectDetails)), 'resize-y')}
                    placeholder="Describe the workflow, who uses it, what breaks today, and any important constraints."
                    aria-invalid={Boolean(errors.projectDetails)}
                  />
                  {errors.projectDetails && (
                    <span className="mt-1.5 block text-xs text-red-400">{errors.projectDetails}</span>
                  )}
                </label>

                {submitError && (
                  <div className="mt-5 flex gap-3 rounded-xl border border-red-900/60 bg-red-950/30 p-4 text-sm text-red-300">
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                    <span>{submitError}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-zinc-950 hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending
                    </>
                  ) : (
                    <>
                      Send inquiry
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>

                <p className="mt-4 text-center text-xs leading-5 text-zinc-600">
                  Do not include passwords, credentials, patient records, or other sensitive production data in this form.
                </p>
              </form>
            )}
          </div>
        </div>
      </Section>
    </div>
  );
}
