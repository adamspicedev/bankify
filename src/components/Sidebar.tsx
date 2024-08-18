"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { sidebarLinks } from "../constants";
import { cn } from "../lib/utils";
import { usePathname } from "next/navigation";

const Sidebar = ({ user }: SiderbarProps) => {
  const pathName = usePathname();
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="mb-12 flex cursor-pointer items-center gap-2">
          <Image
            src="/icons/logo.svg"
            alt="Bankify"
            width={34}
            height={34}
            className="size-[24px] xl:size-14"
          />
          <h1 className="sidebar-logo">Bankify</h1>
        </Link>
        {sidebarLinks.map((link) => {
          const isActive = link.route === pathName;
          return (
            <Link
              href={link.route}
              key={link.route}
              className={cn("sidebar-link", {
                "bg-bank-gradient": isActive,
              })}
            >
              <div className="relative size-6">
                <Image
                  src={link.imgURL}
                  alt={link.label}
                  fill
                  className={cn({ "brightness-[3] invert-0": isActive })}
                />
              </div>
              <p
                className={cn("sidebar-label", {
                  "!text-white": isActive,
                })}
              >
                {link.label}
              </p>
            </Link>
          );
        })}
        USER
      </nav>
      Footer
    </section>
  );
};

export default Sidebar;
