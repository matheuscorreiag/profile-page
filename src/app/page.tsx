import { ProfileSection } from "@/components/custom/profile-section";
import { Timeline } from "@/components/custom/timeline";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <div
        className="flex w-full h-full text-white pt-28 flex-col
                items-center justify-center flex-1 border-b border-zinc-800 py-16 xl:py-32 px-page"
      >
        <ProfileSection />
      </div>

      <Timeline />
    </div>
  );
}
