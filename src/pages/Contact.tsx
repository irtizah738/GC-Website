import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import Section from '../components/Section';
import { Heading } from '../components/ui/Heading';
import { Text } from '../components/ui/Text';
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

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    projectDetails: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.company.trim()) newErrors.company = 'Company is required';
    if (!formData.projectDetails.trim()) newErrors.projectDetails = 'Project details are required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    // Construct mailto link to send queries to help@gothamcoders.com
    const subject = encodeURIComponent(`System Inquiry: ${formData.company} - ${formData.name}`);
    const body = encodeURIComponent(
      `Project Inquiry from Gotham Coders AI Lab\n\n` +
      `------------------------------------------\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Company: ${formData.company}\n` +
      `------------------------------------------\n\n` +
      `Project Details:\n${formData.projectDetails}\n\n` +
      `Sent via Gotham Coders Contact Portal`
    );
    
    const mailtoUrl = `mailto:help@gothamcoders.com?subject=${subject}&body=${body}`;
    
    // Simulate processing
    await new Promise((resolve) => setTimeout(resolve, 800));
    
    // Open mail client
    window.location.href = mailtoUrl;
    
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <Section className="bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-zinc opacity-20 -z-10" />
        <div className="max-w-4xl space-y-8">
          <Text variant="caption">Inquiry // Discussion</Text>
          <Heading level={1}>
            Start a <span className="text-zinc-400 italic font-light">Technical</span> Discussion
          </Heading>
          <Text className="text-xl">
            Ready to scale your engineering? Let's discuss your project and how 
            our team can help you build the future of your organization.
          </Text>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="space-y-4">
              <Text variant="caption">Get in Touch</Text>
              <Heading level={2}>
                We're here to help you navigate your most complex technical challenges.
              </Heading>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-900 rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-zinc-900 dark:text-white" />
                </div>
                <div className="space-y-1">
                  <Heading level={4} className="text-xs uppercase tracking-widest">Email</Heading>
                  <a href="mailto:help@gothamcoders.com" className="text-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                    help@gothamcoders.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-900 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-zinc-900 dark:text-white" />
                </div>
                <div className="space-y-1">
                  <Heading level={4} className="text-xs uppercase tracking-widest">Office</Heading>
                  <Text className="text-lg">
                    Calslaan 47j, 051, Enschede, 7522MJ, Netherlands
                  </Text>
                </div>
              </div>
            </div>

            <div className="p-10 bg-zinc-950 border border-zinc-800 text-white rounded-xl space-y-8 relative overflow-hidden group shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-zinc-700 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-center justify-between">
                <Heading level={3} className="text-white">What Happens Next?</Heading>
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
                </div>
              </div>
              <ul className="space-y-6">
                {[
                  'Initial technical review of your requirements',
                  '30-minute discovery call with a senior architect',
                  'Detailed proposal and technical roadmap',
                  'Project kickoff and engineering phase'
                ].map((step, i) => (
                  <li key={step} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center text-[10px] font-mono font-bold text-zinc-400 border border-zinc-800">
                      0{i + 1}
                    </div>
                    <Text variant="small" className="text-zinc-500">{step}</Text>
                  </li>
                ))}
              </ul>
              <div className="pt-4 text-right">
                <Text variant="caption" className="text-zinc-800">PROCESS_V1.0</Text>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center space-y-8 py-12"
                >
                  <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                  </div>
                  <div className="space-y-4">
                    <Heading level={3}>Inquiry Prepared</Heading>
                    <Text variant="small" className="max-w-xs mx-auto">
                      We've prepared your technical inquiry. If your mail client didn't open automatically, please use the button below.
                    </Text>
                  </div>
                  <div className="flex flex-col gap-4">
                    <a
                      href={`mailto:help@gothamcoders.com?subject=${encodeURIComponent(`System Inquiry: ${formData.company} - ${formData.name}`)}&body=${encodeURIComponent(
                        `Project Inquiry from Gotham Coders AI Lab\n\n` +
                        `------------------------------------------\n` +
                        `Name: ${formData.name}\n` +
                        `Email: ${formData.email}\n` +
                        `Company: ${formData.company}\n` +
                        `------------------------------------------\n\n` +
                        `Project Details:\n${formData.projectDetails}\n\n` +
                        `Sent via Gotham Coders Contact Portal`
                      )}`}
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-xl font-bold transition-transform hover:scale-[1.02]"
                    >
                      Open Mail Client
                      <Send className="w-4 h-4" />
                    </a>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                    >
                      Back to Form
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <Text variant="caption" as="label" htmlFor="name">
                      Full Name
                    </Text>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={cn(
                        "w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-950 border rounded-xl outline-none transition-all focus:ring-2 focus:ring-zinc-900 dark:focus:ring-white",
                        errors.name ? "border-red-500" : "border-zinc-200 dark:border-zinc-800"
                      )}
                    />
                    {errors.name && (
                      <Text variant="small" className="text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </Text>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Text variant="caption" as="label" htmlFor="email">
                      Email Address
                    </Text>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className={cn(
                        "w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-950 border rounded-xl outline-none transition-all focus:ring-2 focus:ring-zinc-900 dark:focus:ring-white",
                        errors.email ? "border-red-500" : "border-zinc-200 dark:border-zinc-800"
                      )}
                    />
                    {errors.email && (
                      <Text variant="small" className="text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </Text>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Text variant="caption" as="label" htmlFor="company">
                      Company Name
                    </Text>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company Inc."
                      className={cn(
                        "w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-950 border rounded-xl outline-none transition-all focus:ring-2 focus:ring-zinc-900 dark:focus:ring-white",
                        errors.company ? "border-red-500" : "border-zinc-200 dark:border-zinc-800"
                      )}
                    />
                    {errors.company && (
                      <Text variant="small" className="text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.company}
                      </Text>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Text variant="caption" as="label" htmlFor="projectDetails">
                      Project Details
                    </Text>
                    <textarea
                      id="projectDetails"
                      name="projectDetails"
                      value={formData.projectDetails}
                      onChange={handleChange}
                      placeholder="Tell us about your project, technical challenges, and goals..."
                      rows={5}
                      className={cn(
                        "w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-950 border rounded-xl outline-none transition-all focus:ring-2 focus:ring-zinc-900 dark:focus:ring-white resize-none",
                        errors.projectDetails ? "border-red-500" : "border-zinc-200 dark:border-zinc-800"
                      )}
                    />
                    {errors.projectDetails && (
                      <Text variant="small" className="text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.projectDetails}
                      </Text>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-xl font-bold text-lg hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 disabled:opacity-70 disabled:scale-100"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Section>
    </div>
  );
}
