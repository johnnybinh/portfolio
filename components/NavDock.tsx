"use client";

import React from "react";

import { Dock, DockIcon } from "@/components/ui/dock";
import { Github, Linkedin } from "lucide-react";

import { House } from "lucide-react";
import { PencilRuler } from "lucide-react";
import { Album } from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import {
  TooltipProvider,
  TooltipTrigger,
  Tooltip,
  TooltipContent,
} from "./ui/tooltip";
import { CheckboxDemo } from "./ui/dark-mode-toggle-checkbox";

export type IconProps = React.HTMLAttributes<SVGElement>;

export function NavDock() {
  return (
    <div className="fixed w-full motion-preset-slide-down-md">
      <TooltipProvider>
        <Dock direction="middle">
          {NavLink.map((nav, index) => (
            <DockIcon key={index}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a scroll={true} href={nav.path}>
                    {nav.icon}
                  </a>
                </TooltipTrigger>
                <TooltipContent dir="down">
                  <p>{nav.tooltip}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}

          <Separator orientation="vertical" />
          {Social.map((nav, index) => (
            <DockIcon key={index}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link scroll={true} href={nav.path}>
                    {nav.icon}
                  </Link>
                </TooltipTrigger>
                <TooltipContent dir="down">
                  <p>{nav.tooltip}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
          <Separator orientation="vertical" />
          <CheckboxDemo />
        </Dock>
      </TooltipProvider>
    </div>
  );
}

const NavLink = [
  {
    path: "#home",
    icon: <House />,
    tooltip: "Home",
  },
  {
    path: "#project",
    icon: <PencilRuler />,
    tooltip: "Project",
  },
];

const Social = [
  {
    path: "https://github.com/johnnybinh",
    icon: <Github />,
    tooltip: "Github",
  },
  {
    path: "https://linkedin.com/in/binh-nguyen-918241294",
    icon: <Linkedin />,
    tooltip: "Github",
  },
];
