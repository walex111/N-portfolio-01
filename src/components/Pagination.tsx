"use client";

import { useState } from "react";

export default function ButtonSwitcher() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index: number) => {
    if (index === activeIndex) return;
    setActiveIndex(index);
  };

  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-5 flex gap-[18px]">
      {[0, 1, 2, 3].map((_, index) => (
        <div
          key={index}
          onClick={() => handleClick(index)}
          className={`h-5 rounded-full cursor-pointer transition-all duration-300 ${
            index === activeIndex
              ? "w-[60px] bg-white cursor-default"
              : "w-5 bg-white"
          }`}
        />
      ))}
    </div>
  );
}
