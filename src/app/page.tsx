import { ProfileSection } from "@/components/custom/profile-section";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <div
        className="flex w-full h-full text-white pt-28 flex-col
                items-center justify-center px-page flex-1 px-page border-b border-zinc-800 py-16 xl:py-32"
      >
        <ProfileSection />
      </div>

      <div className="flex flex-col text-white px-page py-16 xl:py-32 bg-neutral-950">
        <h1 className="whitespace-nowrap text-center text-3xl font-bold leading-tight lg:text-[3rem] lg:leading-normal">
          Timeline
        </h1>
      </div>
    </div>
  );
}
