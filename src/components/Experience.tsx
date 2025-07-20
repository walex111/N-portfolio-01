"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/mousewheel";
import { Link2Icon } from "lucide-react";
import { Button } from "./ui/button";
import { ExperienceData } from "@/data/ExperienceData";

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperCore | null>(null);

  const handlePaginationClick = (index: number) => {
    if (swiperRef.current && index !== activeIndex) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <section className="relative overflow-hidden font-spaceGro">
      <div className="fixed bottom-10 left-13 z-20 flex items-center gap-6">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="text-sm transition cursor-pointer"
        >
          Prev
        </button>

        <div className="flex gap-[18px] w-[180px]">
          {ExperienceData.map((_, index) => (
            <div
              key={index}
              onClick={() => handlePaginationClick(index)}
              className={`h-1 rounded cursor-pointer transition-all duration-300 ${
                index === activeIndex
                  ? "w-[60px] bg-accent cursor-default"
                  : "w-5 bg-gray-500 hover:bg-primary"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="text-sm transition cursor-pointer"
        >
          Next
        </button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Swiper
          direction="horizontal"
          mousewheel
          modules={[Mousewheel]}
          className="pr-16"
          slidesPerView={1}
          spaceBetween={40}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex); // realIndex handles loop mode
          }}
        >
          {ExperienceData.map((exp, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="space-y-4 flex flex-col md:flex-row"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="md:w-1/3 flex flex-col justify-between gap-1 font-muckley">
                  <div>
                    <p className="text-xl">{exp.experienceNo}</p>
                    <h3 className="text-2xl font-black w-[80%] mb-5 uppercase">
                      {exp.company}
                    </h3>
                    {exp.companySite && (
                      <Button
                        variant="outline"
                        className="py-0 w-1/2 transition transform hover:scale-105 active:scale-95"
                        asChild
                      >
                        <a
                          href={exp.companySite}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          Visit <Link2Icon size={16} />
                        </a>
                      </Button>
                    )}
                  </div>
                  <p className="text-sm font-spaceGro pr-5 text-gray-500">
                    {exp.details}
                  </p>
                </div>

                <div className="md:w-2/3">
                  <a
                    href={exp.companySite}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      width={1000}
                      height={160}
                      className="rounded-lg mb-4 object-cover w-full h-[160px] hover:scale-105 transition-transform duration-300"
                      src={exp.imgSrc}
                      alt="Project Preview"
                    />
                  </a>
                  <div className="flex flex-wrap gap-8 pt-2">
                    <div className="gap-4 flex flex-col">
                      <p className="font-semibold">Year:</p>
                      <p className="text-sm text-gray-500">{exp.year}</p>
                    </div>
                    <div className="gap-4 flex flex-col">
                      <p className="font-semibold">Location:</p>
                      <p className="text-sm text-gray-500">{exp.location}</p>
                    </div>
                    <div className="gap-4 flex flex-col">
                      <p className="font-semibold">Role:</p>
                      <p className="text-sm text-gray-500">{exp.role}</p>
                    </div>
                    <div className="gap-4 flex flex-col">
                      <p className="font-semibold">Stack:</p>
                      <ul className="text-sm text-gray-500 columns-3 gap-x-8 [list-style-type:disc] ml-4">
                        {exp.contentLang.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="mb-1 break-inside-avoid"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
}
