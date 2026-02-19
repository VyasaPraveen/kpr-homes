"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (visible) {
      const tooltipTimer = setTimeout(() => setShowTooltip(true), 4000);
      const hideTimer = setTimeout(() => setShowTooltip(false), 10000);
      return () => {
        clearTimeout(tooltipTimer);
        clearTimeout(hideTimer);
      };
    }
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <div className="fixed bottom-24 right-8 z-40 flex items-end gap-3">
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 10, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 10, scale: 0.9 }}
                className="bg-white rounded-xl shadow-card-hover px-4 py-3 max-w-[200px] relative"
              >
                <button
                  onClick={() => setShowTooltip(false)}
                  className="absolute -top-2 -left-2 w-5 h-5 bg-charcoal-200 rounded-full flex items-center justify-center text-charcoal-600 hover:bg-charcoal-300 transition-colors"
                >
                  <X className="w-3 h-3" />
                </button>
                <p className="text-sm text-charcoal-700 font-medium">
                  Chat with us on WhatsApp!
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* WhatsApp Button */}
          <motion.a
            href={SITE_CONFIG.socialLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-14 h-14 bg-[#25D366] rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow"
            aria-label="Chat on WhatsApp"
          >
            <svg
              viewBox="0 0 32 32"
              fill="white"
              className="w-7 h-7"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.924 15.924 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.312 22.594c-.39 1.1-1.932 2.014-3.166 2.28-.846.18-1.95.324-5.67-1.218-4.762-1.972-7.828-6.81-8.066-7.126-.228-.316-1.916-2.55-1.916-4.862 0-2.312 1.212-3.45 1.644-3.922.39-.426.914-.596 1.218-.596.15 0 .284.008.406.014.432.018.648.044.934.724.354.846 1.218 2.968 1.324 3.184.108.216.216.504.072.804-.134.306-.252.444-.468.696-.216.252-.42.444-.636.714-.198.234-.42.486-.174.918.246.426 1.094 1.8 2.35 2.916 1.614 1.434 2.944 1.896 3.394 2.094.348.154.762.118 1.02-.144.324-.336.726-.894 1.134-1.446.29-.39.654-.444 1.038-.294.39.144 2.466 1.164 2.892 1.374.426.216.708.318.81.498.108.18.108 1.038-.282 2.138z" />
            </svg>
            {/* Pulse animation */}
            <span className="absolute w-14 h-14 rounded-full bg-[#25D366] animate-ping opacity-30" />
          </motion.a>
        </div>
      )}
    </AnimatePresence>
  );
}
