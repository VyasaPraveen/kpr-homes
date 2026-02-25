"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const STORAGE_KEY = "kpr_visitor_count";
    const VISITED_KEY = "kpr_has_visited";

    let currentCount = parseInt(localStorage.getItem(STORAGE_KEY) || "0", 10);

    if (!localStorage.getItem(VISITED_KEY)) {
      currentCount += 1;
      localStorage.setItem(VISITED_KEY, "true");
      localStorage.setItem(STORAGE_KEY, currentCount.toString());
    }

    setCount(currentCount + 12847);
  }, []);

  if (count === null) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="flex items-center justify-center gap-2 text-gray-500 text-sm"
    >
      <Eye className="w-4 h-4 text-gold-400" />
      <span className="text-gray-400 font-medium tabular-nums">{count.toLocaleString()}</span>
      <span>visitors and counting</span>
    </motion.div>
  );
}
