"use client";

import { projectsData } from "@/data/projectsData";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";
import { slugify } from "@/lib/slugify";

export default function ProjectsPage() {
  return (
    <div className="w-full overflow-hidden">
      {/* Top and Bottom Gradient Overlays */}
      <div className="pointer-events-none fixed top-0 z-10 w-full" />
      <div className="pointer-events-none fixed bottom-0 z-10 w-full" />

      {/* Scrollable Content */}
      <div className="relative z-0 h-full py-10 overflow-y-scroll scroll-none">
        {projectsData.map((project, idx) => (
          <Link
            key={project.projectNo}
            href={`/projects/${slugify(project.name)}`}
          >
            <ProjectCard project={project} index={idx} />
          </Link>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({
  project,
}: {
  project: (typeof projectsData)[0];
  index: number;
}) {
  const { ref, inView } = useInView({ threshold: 0.6 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={
        inView ? { opacity: 1, scale: 1 } : { opacity: 0.4, scale: 0.95 }
      }
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={clsx(
        "flex items-center justify-center gap-6 py-3 shadow-md transition-all duration-300 font-spaceGro"
      )}
    >
      <div className="text-xl font-semibold">{project.projectNo}</div>
      <h2 className="text-2xl font-bold text-center font-muckley">
        {project.name}
      </h2>
      <div className="hidden lg:grid grid-cols-3 gap-4">
        {project.projectImg?.slice(0, 3).map((img, i) => (
          <div
            key={i}
            className="relative w-[200px] h-[80px] overflow-hidden rounded"
          >
            <Image
              src={img}
              alt={project.name}
              fill
              className="object-cover rounded"
            />
          </div>
        ))}
      </div>
      <h2 className="text-xl font-bold text-center font-muckley">
        {project.year}
      </h2>
    </motion.div>
  );
}
