import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
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
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
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
      <Section className="bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-900">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-500">Contact</h1>
          <h2 className="text-5xl md:text-7xl font-bold text-zinc-900 dark:text-white leading-tight">
            Start a <span className="text-zinc-500 italic">Technical</span> Discussion
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Ready to scale your engineering? Let's discuss your project and how 
            our team can help you build the future of your organization.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-500">Get in Touch</h3>
              <p className="text-3xl font-bold text-zinc-900 dark:text-white leading-tight">
                We're here to help you navigate your most complex technical challenges.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-900 rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-zinc-900 dark:text-white" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-zinc-900 dark:text-white uppercase tracking-widest text-xs">Email</h4>
                  <a href="mailto:hello@gothamcoders.com" className="text-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                    hello@gothamcoders.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-900 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-zinc-900 dark:text-white" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-zinc-900 dark:text-white uppercase tracking-widest text-xs">Phone</h4>
                  <a href="tel:+1234567890" className="text-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-900 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-zinc-900 dark:text-white" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-zinc-900 dark:text-white uppercase tracking-widest text-xs">Office</h4>
                  <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    123 Tech Plaza, Gotham City, GC 10001
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-zinc-900 dark:bg-zinc-800 text-white rounded-3xl space-y-6">
              <h4 className="text-xl font-bold">What Happens Next?</h4>
              <ul className="space-y-4">
                {[
                  'Initial technical review of your requirements',
                  '30-minute discovery call with a senior architect',
                  'Detailed proposal and technical roadmap',
                  'Project kickoff and engineering phase'
                ].map((step, i) => (
                  <li key={step} className="flex items-center gap-3 text-sm text-zinc-400">
                    <div className="w-6 h-6 rounded-full bg-zinc-800 dark:bg-zinc-700 flex items-center justify-center text-[10px] font-bold text-zinc-500">
                      0{i + 1}
                    </div>
                    {step}
                  </li>
                ))}
              </ul>
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
                  className="text-center space-y-6 py-12"
                >
                  <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">Message Received</h3>
                    <p className="text-zinc-500 dark:text-zinc-400">
                      Our engineering team will review your project details and get back to you within 24 hours.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="text-sm font-bold uppercase tracking-widest text-zinc-900 dark:text-white hover:underline"
                  >
                    Send Another Message
                  </button>
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
                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                      Full Name
                    </label>
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
                      <p className="text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                      Email Address
                    </label>
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
                      <p className="text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="company" className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                      Company Name
                    </label>
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
                      <p className="text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.company}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="projectDetails" className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                      Project Details
                    </label>
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
                      <p className="text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.projectDetails}
                      </p>
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
