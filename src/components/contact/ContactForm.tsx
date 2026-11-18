"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, Loader2, AlertCircle } from "lucide-react";
import { cn, isValidEmail, isValidPhone, isRateLimited } from "@/lib/utils";

// Text goes into a URL-encoded WhatsApp message (never into HTML), so strip control
// characters and cap length rather than HTML-escaping (which showed "&#x27;" in WhatsApp).
const cleanText = (v: string, max = 1000) =>
  v.replace(/[\u0000-\u0008\u000B-\u001F\u007F]/g, "").trim().slice(0, max);
import { SITE_CONFIG } from "@/lib/constants";

// KPR Construction = contract work for clients; KPR Developments = flats KPR sells.
const projectTypes = [
  "Residential - New Construction Contract",
  "Residential - Renovation Contract",
  "Commercial - New Construction Contract (Hospital, Office, Bank)",
  "Commercial - Renovation Contract",
  "Apartment Construction Contract for Landowners",
  "Buy a Flat (Available Flats)",
  "Other",
];

const budgetRanges = [
  "Under ₹25 Lakhs",
  "₹25 - 50 Lakhs",
  "₹50 Lakhs - 1 Crore",
  "₹1 - 3 Crore",
  "₹3 - 5 Crore",
  "Above ₹5 Crore",
];

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  projectType?: string;
  message?: string;
  rateLimit?: string;
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    const sanitizedName = cleanText(formData.name, 100);

    if (!sanitizedName || sanitizedName.length < 2) {
      newErrors.name = "Please enter a valid name (min 2 characters)";
    }
    if (!isValidEmail(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!isValidPhone(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!formData.projectType) {
      newErrors.projectType = "Please select a project type";
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = "Please describe your project (min 10 characters)";
    }
    if (isRateLimited("contact-form")) {
      newErrors.rateLimit = "Too many submissions. Please try again later.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      // Sanitize all inputs before sending
      const sanitizedData = {
        name: cleanText(formData.name, 100),
        email: formData.email.trim().toLowerCase(),
        phone: formData.phone.trim(),
        projectType: formData.projectType,
        budget: formData.budget,
        message: cleanText(formData.message, 1000),
      };

      // Send via WhatsApp as the primary submission method
      const whatsappMessage = `New Enquiry from Website:\n\nName: ${sanitizedData.name}\nEmail: ${sanitizedData.email}\nPhone: ${sanitizedData.phone}\nProject: ${sanitizedData.projectType}\nBudget: ${sanitizedData.budget || "Not specified"}\n\nMessage: ${sanitizedData.message}`;
      window.open(
        `${SITE_CONFIG.socialLinks.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`,
        "_blank",
        "noopener,noreferrer"
      );

      setIsSubmitting(false);
      setIsSubmitted(true);
    } catch {
      setIsSubmitting(false);
      setErrors({ rateLimit: "Something went wrong. Please try again." });
    }
  };

  return (
    <AnimatePresence mode="wait">
      {isSubmitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-16"
          role="status"
          aria-live="polite"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle className="w-10 h-10 text-green-500" />
          </motion.div>
          <h3 className="font-heading text-2xl font-bold text-navy-900 mb-2">
            Message Sent!
          </h3>
          <p className="text-charcoal-500 mb-6">
            Thank you for reaching out. We&apos;ll get back to you within 24 hours.
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({ name: "", email: "", phone: "", projectType: "", budget: "", message: "" });
              setErrors({});
            }}
            className="text-gold-600 hover:text-gold-700 font-medium"
          >
            Send Another Message
          </button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onSubmit={handleSubmit}
          className="space-y-6"
          noValidate
        >
          <h2 className="font-heading text-2xl font-bold text-navy-900 mb-6">
            Send Us a Message
          </h2>

          {errors.rateLimit && (
            <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm" role="alert">
              <AlertCircle className="w-4 h-4 shrink-0" />
              {errors.rateLimit}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FloatingInput label="Full Name" name="name" value={formData.name} onChange={handleChange} required error={errors.name} />
            <FloatingInput label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} required error={errors.email} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FloatingInput label="Phone Number" name="phone" type="tel" value={formData.phone} onChange={handleChange} required error={errors.phone} />
            <div className="relative">
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                aria-label="Project Type"
                className={cn(
                  "w-full px-4 py-3.5 border-2 rounded-lg text-charcoal-700 focus:border-gold-400 focus:outline-none transition-colors bg-white appearance-none cursor-pointer",
                  errors.projectType ? "border-red-400" : "border-charcoal-200"
                )}
                required
              >
                <option value="">Select Project Type</option>
                {projectTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              {errors.projectType && (
                <p className="text-red-500 text-xs mt-1">{errors.projectType}</p>
              )}
            </div>
          </div>

          <div>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              aria-label="Budget Range"
              className="w-full px-4 py-3.5 border-2 border-charcoal-200 rounded-lg text-charcoal-700 focus:border-gold-400 focus:outline-none transition-colors bg-white appearance-none cursor-pointer"
            >
              <option value="">Select Budget Range (Optional)</option>
              {budgetRanges.map((range) => (
                <option key={range} value={range}>{range}</option>
              ))}
            </select>
          </div>

          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              placeholder="Tell us about your project..."
              aria-label="Project message"
              maxLength={2000}
              className={cn(
                "w-full px-4 py-3.5 border-2 rounded-lg text-charcoal-700 focus:border-gold-400 focus:outline-none transition-colors resize-none placeholder:text-charcoal-300",
                errors.message ? "border-red-400" : "border-charcoal-200"
              )}
              required
            />
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">{errors.message}</p>
            )}
          </div>

          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-gold text-navy-900 font-semibold rounded-lg hover:shadow-gold-lg transition-all duration-300 disabled:opacity-70"
          >
            {isSubmitting ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Send className="w-5 h-5" />
            )}
            {isSubmitting ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}

function FloatingInput({
  label,
  name,
  type = "text",
  value,
  onChange,
  required = false,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  error?: string;
}) {
  const [focused, setFocused] = useState(false);
  const isActive = focused || value.length > 0;

  return (
    <div className="relative">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required={required}
        maxLength={type === "email" ? 254 : type === "tel" ? 15 : 100}
        autoComplete={type === "email" ? "email" : type === "tel" ? "tel" : "name"}
        aria-label={label}
        aria-invalid={!!error}
        className={cn(
          "w-full px-4 py-3.5 border-2 rounded-lg text-charcoal-700 focus:outline-none transition-all peer",
          error ? "border-red-400" : focused ? "border-gold-400" : "border-charcoal-200"
        )}
        placeholder=" "
      />
      <label
        className={cn(
          "absolute left-4 transition-all duration-200 pointer-events-none",
          isActive
            ? "-top-2.5 text-xs bg-white px-1 text-gold-600 font-medium"
            : "top-3.5 text-charcoal-400"
        )}
      >
        {label}
      </label>
      {error && (
        <p className="text-red-500 text-xs mt-1">{error}</p>
      )}
    </div>
  );
}
