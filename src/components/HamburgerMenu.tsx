/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import * as React from "react";
import { EllipsisVerticalIcon, Dot, Link } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export function HamburgerMenu() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          variant="link"
          className="h-10 w-10 p-0 transition transform hover:scale-105 active:scale-95"
        >
          <EllipsisVerticalIcon />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle></DrawerTitle>
        </DrawerHeader>
        <div className="mx-auto w-full max-w-sm">
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
          </div>
          <DrawerFooter>
            <Button asChild className="font-spaceGro">
              <a href="/projects">
                PROJECTS{" "}
                <span>
                  <Dot />
                </span>
              </a>
            </Button>
            <Button asChild className="font-spaceGro w-full">
              <a href="/info">
                INFO{" "}
                <span>
                  <Dot />
                </span>
              </a>
            </Button>
            <DrawerClose asChild>
              <Button className="font-spaceGro" variant="outline">
                EXIT
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
