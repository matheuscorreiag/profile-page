import { ViewMoreButton } from "@/components/custom/view-more";
import {
  WorkDetails,
  WorkDetailsProps,
} from "@/components/custom/work-details";

const jobs: WorkDetailsProps[] = [
  {
    startYear: 2022,
    endYear: null,
    jobTitle: "Backend Developer in a Angolan software company 🇦🇴",
    companyName: "Mamboo",
    imageUrl: "/images/mamboo.jpg",
  },
  {
    startYear: 2022,
    endYear: null,
    jobTitle: "Fullstack Developer in a software company in 🇧🇷",
    companyName: "FinderUp",
    imageUrl: "/images/saopaulo.webp",
  },
  {
    startYear: 2021,
    endYear: 2022,
    jobTitle: "Backend Developer in a software company in 🇧🇷",
    companyName: "Autono.dev",
    imageUrl: "/images/joaopessoa.jpg",
  },
];
export function Timeline() {
  return (
    <div className="flex flex-col text-white bg-neutral-950 h-full relative outline outline-1 outline-zinc-800 p-8">
      <h1 className="whitespace-nowrap text-center text-3xl font-bold leading-tight lg:text-[3rem] lg:leading-normal">
        Timeline
      </h1>
      <div className="lg:flex-row lg:gap-x-16 lg:gap-y-0 grid grid-cols-1 place-items-center px-page mt-24 relative">
        {jobs.map((job, index) => (
          <WorkDetails key={index} {...job} />
        ))}

        <div className="w-full flex items-end justify-center h-full my-16 relative">
          <ViewMoreButton />
        </div>
      </div>
    </div>
  );
}
