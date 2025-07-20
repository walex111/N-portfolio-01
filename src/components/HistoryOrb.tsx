"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { FeatherIcon } from "lucide-react";

export default function HistoryText() {
  const router = useRouter();

  return (
    <motion.span
      onClick={() => router.push("/history")}
      className="cursor-pointer font-yukari text-4xl font-black"
      initial={{ rotateY: 0 }}
      animate={{ rotateY: 360 }}
      transition={{
        repeat: Infinity,
        duration: 12,
        ease: "linear",
      }}
      style={{ display: "inline-block", transformOrigin: "center center" }}
    >
      <FeatherIcon className="inline-block w-4 h-4 rotate-[310deg]" />
    </motion.span>
  );
}
