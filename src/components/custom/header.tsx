"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

export function Header() {
  const pathname = usePathname();
  return (
    <div className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-zinc-950/60 px-page">
      <header className="flex h-full w-full py-8 tracking-normal max-h-16 text-base md:text-xl bg-opacity-10">
        <nav className="relative flex flex-1 items-center justify-between">
          <div className="w-full text-white flex items-center">MC</div>
          <div className="flex justify-end gap-2 sm:gap-11 w-full">
            <Link href="/">
              <Button
                className={twMerge(
                  "bg-transparent lg:text-lg font-thin hover:bg-transparent hover:text-white/80",
                  pathname === "/" && "font-bold"
                )}
              >
                Home
              </Button>
            </Link>
            <Link href="/about">
              <Button
                className={twMerge(
                  "bg-transparent lg:text-lg font-thin hover:bg-transparent hover:text-white/80",
                  pathname === "/about" && "font-bold"
                )}
              >
                About
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                className={twMerge(
                  "bg-transparent lg:text-lg font-thin hover:bg-transparent hover:text-white/80",
                  pathname === "/contact" && "font-bold"
                )}
              >
                Contact
              </Button>
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
}
