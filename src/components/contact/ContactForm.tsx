"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const projectTypes = [
  "Residential - New Construction",
  "Residential - Renovation",
  "Commercial - Office Building",
  "Commercial - Retail Space",
  "Interior Design",
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

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <AnimatePresence mode="wait">
      {isSubmitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-16"
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
        >
          <h2 className="font-heading text-2xl font-bold text-navy-900 mb-6">
            Send Us a Message
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FloatingInput label="Full Name" name="name" value={formData.name} onChange={handleChange} required />
            <FloatingInput label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FloatingInput label="Phone Number" name="phone" type="tel" value={formData.phone} onChange={handleChange} required />
            <div className="relative">
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full px-4 py-3.5 border-2 border-charcoal-200 rounded-lg text-charcoal-700 focus:border-gold-400 focus:outline-none transition-colors bg-white appearance-none cursor-pointer"
                required
              >
                <option value="">Select Project Type</option>
                {projectTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
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
              className="w-full px-4 py-3.5 border-2 border-charcoal-200 rounded-lg text-charcoal-700 focus:border-gold-400 focus:outline-none transition-colors resize-none placeholder:text-charcoal-300"
              required
            />
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
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
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
        className={cn(
          "w-full px-4 py-3.5 border-2 rounded-lg text-charcoal-700 focus:outline-none transition-all peer",
          focused ? "border-gold-400" : "border-charcoal-200"
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
    </div>
  );
}
