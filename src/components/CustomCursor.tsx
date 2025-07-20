"use client";

import { motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setVisible(true);
      mouseX.set(e.clientX - 10);
      mouseY.set(e.clientY - 10);
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY]);

  if (!visible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none 
             w-5 h-5 rounded border border-accent 
             bg-accent-foreground shadow-default] 
             backdrop-blur-md 
             animate-pulse"
      style={{
        translateX: mouseX,
        translateY: mouseY,
      }}
    />
  );
};

export default CustomCursor;
