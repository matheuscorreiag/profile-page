"use client";

import { GitHubLogoIcon, InstagramLogoIcon } from "@radix-ui/react-icons";
import { LinkedinIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function ProfileSection() {
  return (
    <aside className="flex flex-row justify-between lg:justify-center gap-x-20">
      <div className="flex flex-col">
        <div className="flex flex-col">
          <h1 className="whitespace-nowrap text-3xl font-bold  lg:text-[3.5rem]">
            Matheus Correia
          </h1>
          <h2 className="mt-2 lg:mt-3 lg:text-2xl">Software Engineer</h2>
        </div>
        <div className="mt-4  text-zinc-400 font-light md:max-w-xs lg:mt-9 lg:text-[1.375rem]">
          <p>
            Passionate about building software and keep improving myself in it.
          </p>
          <p className="mt-4 lg:mt-6">
            Expert in the Javascrit world, with a strong background in React and
            Node.js.
          </p>
        </div>
        <div className="mt-3 flex items-center  lg:mt-6 w-full space-x-4">
          <Link href="https://github.com/matheuscorreiag" target="_blank">
            <GitHubLogoIcon className="w-6 h-6" />
          </Link>
          <Link
            href="https://www.instagram.com/matheuscorreiag"
            target="_blank"
          >
            <InstagramLogoIcon className="w-6 h-6" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/matheuscorreiag"
            target="_blank"
          >
            <LinkedinIcon className="w-6 h-6" />
          </Link>
        </div>
      </div>

      <div className="hidden flex-col items-center md:flex">
        <div className="relative aspect-square w-full max-w-lg overflow-hidden rounded-[8%] rounded-tl-none border-t border-l border-zinc-800 bg-zinc-900">
          <Image
            src="/images/profile.jpeg"
            width={400}
            height={400}
            alt="My profile picture"
            sizes="(min-width: 1000px) 1000px, 100vw"
          />
        </div>
      </div>
    </aside>
  );
}
