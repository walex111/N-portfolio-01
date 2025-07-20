"use client";

import * as React from "react";
import { EllipsisVerticalIcon, Dot } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ThemeSwitcher } from "./ThemeSwitcher";

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
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Move Goal</DrawerTitle>
            <DrawerDescription>Set your daily activity goal.</DrawerDescription>
          </DrawerHeader>
          <div className=" flex justify-between font-spaceGro">
            <div className="flex gap-4">
              <div className="md:flex gap-4 hidden sm:flex">
                <Button
                  variant="default"
                  className="py-0 transition transform hover:scale-105 active:scale-95"
                >
                  PROJECTS{" "}
                  <span>
                    <Dot />
                  </span>
                </Button>
                <Button
                  variant="default"
                  className="py-0  transition transform hover:scale-105 active:scale-95"
                >
                  INFO{" "}
                  <span>
                    <Dot />
                  </span>
                </Button>
              </div>
              <ThemeSwitcher />
              <div className="sm:hidden">
                <HamburgerMenu />
              </div>
            </div>
          </div>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
