import { Dot } from "lucide-react";
import React from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { HamburgerMenu } from "./HamburgerMenu";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <nav className=" flex justify-between font-spaceGro">
      <Link
        href="/"
        className="font-yukari flex justify-center items-center leading-10 text-5xl font-black"
      >
        SAMSON <br />
        OKETUNMBI
      </Link>
      <div className="flex gap-4">
        <div className="gap-4 hidden sm:flex">
          <Button
            asChild
            variant="default"
            className="py-0 transition transform hover:scale-105 active:scale-95"
          >
            <Link href="/projects">
              PROJECTS{" "}
              <span>
                <Dot />
              </span>
            </Link>
          </Button>
          <Button
            asChild
            variant="default"
            className="py-0 transition transform hover:scale-105 active:scale-95"
          >
            <Link href="/info">
              INFO{" "}
              <span>
                <Dot />
              </span>
            </Link>
          </Button>
        </div>
        <ThemeSwitcher />
        <div className="sm:hidden">
          <HamburgerMenu />
        </div>
      </div>
    </nav>
  );
}
