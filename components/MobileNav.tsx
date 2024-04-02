"use client";

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { SIDEBAR_LINKS } from "@/lib/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const MobileNav = () => {
  const pathname: string = usePathname();

  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src="/icons/hamburger.svg"
            alt="hamburger icon"
            width={36}
            height={36}
            className="cursor-pointer sm:hidden "
          />
        </SheetTrigger>
        <SheetContent side="left" className="bg-dark-1 border-none">
          <Link href="/" className="flex items-center gap-1">
            <Image
              src="/icons/logo.svg"
              alt="Xoom logo"
              width={32}
              height={32}
              className="max-sm:size-10"
            />
            <p className="text-[26px] font-extrabold text-white">Xoom</p>
          </Link>
          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
            <SheetClose asChild>
              <section className="flex h-full flex-col gap-6 pt-16 text-white">
                {SIDEBAR_LINKS.map((link) => {
                  const isActive =
                    (link.route === "/" && pathname === link.route) ||
                    (link.route !== "/" && pathname.startsWith(link.route));
                  return (
                    <Link
                      href={link.route}
                      key={link.label}
                      className={cn(
                        "flex gap-4 items-center p-4 rounded-lg w-full max-w-60",
                        { "bg-blue-1": isActive }
                      )}
                    >
                      <Image
                        src={link.imgUrl}
                        alt={link.label}
                        width={20}
                        height={20}
                      />
                      <p className="text-lg font-semibold">{link.label}</p>
                    </Link>
                  );
                })}
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
