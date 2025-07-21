import Hero from "@/components/Hero";
import HistoryOrb from "@/components/HistoryOrb";
import ImageCarousel from "@/components/ImageCarousel";
import React from "react";
import InfoData from "@/data/info";

export default function page() {
  return (
    <section className="flex flex-col flex-1 justify-center space-y-10 font-spaceGro">
      <Hero />
      <div className=" flex justify-between">
        <p className="font-muckley leading-8 text-3xl font-black">
          Full-Stack Developer <br />
          AI / ML Engineer
        </p>
        <div>
          <span className="font-muckley text-2xl">&copy; 2025 </span>
          <HistoryOrb />
        </div>
      </div>
      <div className="flex space-y-4 items-center justify-between">
        <div className="hidden lg:block">
          <ImageCarousel />
          <p className="text-gray-500 text-sm mt-2 w-1/2">
            A collection of my <span className="font-bold">Jobs</span>,
            showcasing my skills and experience in full-stack development and
            AI/ML engineering.
          </p>
        </div>
        <div className="flex flex-col space-y-4 px-2">
          <p className="text-sm">
            <span className="text-xl font-black">FONTS:</span> <br />{" "}
            <span>MUCKLEY</span> | <span>YUKARI MOBILE</span> |{" "}
            <span>SPACE GROTESK</span> | <span>WISMENTA</span>.
          </p>
          <p className="text-sm">
            <span className="text-xl font-black font-muckley">DESIGN: </span>
            DYREKT CRP <br />{" "}
            <span className="text-xl font-black font-muckley">DEV: </span>
            SAMSON T. OKETUNMBI <br />{" "}
          </p>
        </div>
        <div className="flex flex-col space-y-4 w-1/2">
          {InfoData.map((item, index) => (
            <div key={index} className="space-y-2 text-xl font-black">
              STACKS:
              <p className="text-gray-500 text-sm">
                {item.contentLang.join(", ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
