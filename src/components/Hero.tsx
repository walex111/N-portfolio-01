import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Link2Icon } from "lucide-react";

export default function Hero() {
  return (
    <section className="font-spaceGro w-full flex items-center justify-between gap-8 text-center">
      <div className="max-w-xl text-start">
        <p>
          I build{" "}
          <span className="font-bold">
            intelligent, scalable web applications
          </span>{" "}
          that merge seamless user experiences with powerful{" "}
          <span className="font-bold">machine learning</span> — delivering
          real-world impact through thoughtful{" "}
          <span className="font-bold">design and precision engineering</span>.
        </p>
      </div>
      <div className="flex items-center justify-center gap-4">
        <Button
          variant="default"
          className="py-0 transition transform hover:scale-105 active:scale-95"
        >
          <Link
            className="flex items-center gap-3"
            href="https://emerald-randy-29.tiiny.site"
            target="_blank"
            rel="noopener noreferrer"
          >
            RESUME{" "}
            <span>
              <Link2Icon />
            </span>
          </Link>
        </Button>
        <Button
          variant="default"
          className="py-0 transition transform hover:scale-105 active:scale-95"
        >
          <Link
            className="flex items-center gap-3"
            href="mailto:owale07@gmail.com"
          >
            EMAIL{" "}
            <span>
              <Link2Icon />
            </span>
          </Link>
        </Button>
        <Button
          variant="default"
          className="py-0 transition transform hover:scale-105 active:scale-95"
        >
          <Link
            className="flex items-center gap-3"
            href="https://www.linkedin.com/in/samsonoketunmbi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LINKEDIN{" "}
            <span>
              <Link2Icon />
            </span>
          </Link>
        </Button>
        <Button
          variant="default"
          className="py-0 transition transform hover:scale-105 active:scale-95"
        >
          <Link
            className="flex items-center gap-3"
            href="https://github.com/walex111?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB{" "}
            <span>
              <Link2Icon />
            </span>
          </Link>
        </Button>
      </div>
    </section>
  );
}
