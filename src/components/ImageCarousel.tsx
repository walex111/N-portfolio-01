// components/ImageCarousel.tsx
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const images = [
  "/images/ethx.png",
  "/images/naver.png",
  "/images/placewise.png",
];

export default function ImageCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 3000); // Change image every 3s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-sm aspect-video overflow-hidden rounded-xl shadow-2xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -50, scale: 0.95 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={images[index]}
            alt={`Slide ${index}`}
            fill
            className="object-contain"
          />
        </motion.div>
      </AnimatePresence>

      {/* Optional: Dots */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full ${
              i === index
                ? "w-[60px] bg-primary cursor-default"
                : "w-5 bg-gray-500"
            } transition`}
          />
        ))}
      </div>
    </div>
  );
}
