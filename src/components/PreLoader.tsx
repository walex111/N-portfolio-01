"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 1000);
          return 100;
        }
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  if (!loading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 10, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col items-end justify-end bg-primary p-20 text-white font-muckley"
    >
      <div className="text-6xl tracking-wide font-yukari">{progress}%</div>
      <div className="mt-4 w-64 h-2 bg-white/20 rounded overflow-hidden">
        <motion.div
          className="h-full bg-primary"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "linear" }}
        />
      </div>
    </motion.div>
  );
}
