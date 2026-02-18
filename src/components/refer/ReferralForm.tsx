"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Loader2, PartyPopper } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";

export default function ReferralForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    yourName: "",
    yourEmail: "",
    yourPhone: "",
    friendName: "",
    friendEmail: "",
    friendPhone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          title="Refer Now"
          subtitle="Fill in the details below and we'll take it from here"
        />

        <div className="max-w-2xl mx-auto">
          <FadeInWhenVisible>
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
                    className="w-20 h-20 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <PartyPopper className="w-10 h-10 text-gold-600" />
                  </motion.div>
                  <h3 className="font-heading text-2xl font-bold text-navy-900 mb-2">
                    Referral Submitted!
                  </h3>
                  <p className="text-charcoal-500 mb-6">
                    Thank you for your referral! Our team will reach out to your
                    friend shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        yourName: "",
                        yourEmail: "",
                        yourPhone: "",
                        friendName: "",
                        friendEmail: "",
                        friendPhone: "",
                        message: "",
                      });
                    }}
                    className="text-gold-600 hover:text-gold-700 font-medium"
                  >
                    Refer Another Friend
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-8"
                >
                  {/* Your Details */}
                  <div>
                    <h3 className="font-heading text-lg font-bold text-navy-900 mb-4">
                      Your Details
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <input name="yourName" value={formData.yourName} onChange={handleChange} placeholder="Your Name" required className="px-4 py-3 border-2 border-charcoal-200 rounded-lg focus:border-gold-400 focus:outline-none transition-colors" />
                      <input name="yourEmail" value={formData.yourEmail} onChange={handleChange} type="email" placeholder="Your Email" required className="px-4 py-3 border-2 border-charcoal-200 rounded-lg focus:border-gold-400 focus:outline-none transition-colors" />
                      <input name="yourPhone" value={formData.yourPhone} onChange={handleChange} type="tel" placeholder="Your Phone" required className="px-4 py-3 border-2 border-charcoal-200 rounded-lg focus:border-gold-400 focus:outline-none transition-colors" />
                    </div>
                  </div>

                  {/* Friend's Details */}
                  <div>
                    <h3 className="font-heading text-lg font-bold text-navy-900 mb-4">
                      Friend&apos;s Details
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <input name="friendName" value={formData.friendName} onChange={handleChange} placeholder="Friend's Name" required className="px-4 py-3 border-2 border-charcoal-200 rounded-lg focus:border-gold-400 focus:outline-none transition-colors" />
                      <input name="friendEmail" value={formData.friendEmail} onChange={handleChange} type="email" placeholder="Friend's Email" required className="px-4 py-3 border-2 border-charcoal-200 rounded-lg focus:border-gold-400 focus:outline-none transition-colors" />
                      <input name="friendPhone" value={formData.friendPhone} onChange={handleChange} type="tel" placeholder="Friend's Phone" required className="px-4 py-3 border-2 border-charcoal-200 rounded-lg focus:border-gold-400 focus:outline-none transition-colors" />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Any message for your friend? (Optional)"
                      className="w-full px-4 py-3 border-2 border-charcoal-200 rounded-lg focus:border-gold-400 focus:outline-none transition-colors resize-none placeholder:text-charcoal-300"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-gold text-navy-900 font-semibold rounded-lg hover:shadow-gold-lg transition-all duration-300 disabled:opacity-70 text-lg"
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <Send className="w-5 h-5" />
                    )}
                    {isSubmitting ? "Submitting..." : "Submit Referral"}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
}
