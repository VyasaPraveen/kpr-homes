"use client";

import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-dark">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-heading text-8xl md:text-9xl font-bold text-gradient-gold mb-4">
            404
          </h1>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/">
              <motion.span
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-gold text-navy-900 font-semibold rounded-lg"
              >
                <Home className="w-5 h-5" />
                Back to Home
              </motion.span>
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
