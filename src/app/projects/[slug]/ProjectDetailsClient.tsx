"use client";

import { Button } from "@/components/ui/button";
import { Link2Icon } from "lucide-react";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Project {
  name: string;
  projectNo?: string;
  linkURL?: string;
  year?: string | number;
  projectImg?: string[];
  technologies?: string[];
}

export default function ProjectDetailClient({ project }: { project: Project }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = project.projectImg?.length || 0;
  const constraintsRef = useRef(null);

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalImages);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  return (
    <div className="w-full flex-1 flex flex-col justify-center py-10 overflow-hidden font-spaceGro">
      {/* Image Carousel */}
      <div className="w-full h-50 bg-amber-300 rounded relative overflow-hidden mb-10 flex items-center justify-center">
        <div className="absolute left-0 z-10 p-4">
          <Button onClick={goPrev} variant="ghost" size="sm">
            ←
          </Button>
        </div>
        <div className="absolute right-0 z-10 p-4">
          <Button onClick={goNext} variant="ghost" size="sm">
            →
          </Button>
        </div>

        <div
          className="relative w-full h-full flex items-center justify-center"
          ref={constraintsRef}
        >
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={currentIndex}
              className="absolute w-full h-full"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative h-[400px] w-full rounded-md overflow-hidden mx-auto">
                <Image
                  src={project.projectImg?.[currentIndex] || "/placeholder.png"}
                  alt={project.name}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Project Info */}
      <div className="flex flex-wrap space-x-30">
        <div className="flex flex-col font-muckley">
          <h2 className="text-3xl font-bold">{project.name}</h2>
          <p className="text-lg">{project.projectNo}</p>
          {project.linkURL && (
            <Button
              variant="outline"
              className="mt-5 transition transform hover:scale-105 active:scale-95"
              asChild
            >
              <a
                href={project.linkURL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Visit <Link2Icon size={16} />
              </a>
            </Button>
          )}
        </div>

        <div className="flex flex-wrap gap-18 pt-2">
          <div className="gap-4 flex flex-col">
            <p className="font-semibold">Year:</p>
            <p className="text-sm text-gray-500">{project.year}</p>
          </div>
          <div className="gap-4 flex flex-col">
            <p className="font-semibold">Company:</p>
            <p className="text-sm text-gray-500 font-bold">{project.name}</p>
          </div>
          <div className="gap-4 flex flex-col">
            <p className="font-semibold">Role:</p>
            <p className="text-sm text-gray-500">{project.name}</p>
          </div>
          <div className="gap-4 flex flex-col">
            <p className="font-semibold">Stack:</p>
            <ul className="text-sm text-gray-500 columns-2 gap-x-8 [list-style-type:disc] ml-4">
              {project.technologies?.map((item: string, index: number) => (
                <li key={index} className="mb-1 break-inside-avoid">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
