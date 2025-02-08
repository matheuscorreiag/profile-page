import { ProfileSection } from "@/components/custom/profile-section";
import { Timeline } from "@/components/custom/timeline";
import { GitHubLogoIcon, InstagramLogoIcon } from "@radix-ui/react-icons";
import { LinkedinIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col w-full max-w-full ">
      <div className="flex w-full h-full text-white pt-28 flex-col items-center justify-center flex-1 py-16 xl:py-32">
        <ProfileSection />
      </div>
      <Timeline />
      <footer className="flex items-center justify-center gap-x-8 text-white p-8">
        <Link href="https://github.com/matheuscorreiag" target="_blank">
          <GitHubLogoIcon className="w-6 h-6" />
        </Link>
        <Link href="https://www.instagram.com/matheuscorreiag" target="_blank">
          <InstagramLogoIcon className="w-6 h-6" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/matheuscorreiag"
          target="_blank"
        >
          <LinkedinIcon className="w-6 h-6 m " />
        </Link>
      </footer>
    </div>
  );
}
