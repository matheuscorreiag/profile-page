import {
  WorkDetails,
  WorkDetailsProps,
} from "@/components/custom/work-details";
import { Button } from "@/components/ui/button";

const jobs: WorkDetailsProps[] = [
  {
    startYear: 2022,
    endYear: null,
    jobTitle: "Backend Developer in a Angola delivery company (current)",
    companyName: "Mamboo",
    imageUrl: "/images/mamboo.jpg",
  },
  {
    startYear: 2022,
    endYear: null,
    jobTitle: "Fullstack Developer",
    companyName: "FinderUp",
    imageUrl: "/images/saopaulo.webp",
  },
  {
    startYear: 2021,
    endYear: 2022,
    jobTitle: "Backend Stack Developer",
    companyName: "Autono.dev",
    imageUrl: "/images/joaopessoa.jpg",
  },
];
export function Timeline() {
  return (
    <div className="flex flex-col text-white py-16 xl:py-32 bg-neutral-950 h-full relative ">
      <h1 className="whitespace-nowrap text-center text-3xl font-bold leading-tight lg:text-[3rem] lg:leading-normal">
        Timeline
      </h1>

      <div className="lg:flex-row lg:gap-x-16 lg:gap-y-0 grid grid-cols-1 place-items-center px-page mt-24 relative">
        {jobs.map((job, index) => (
          <WorkDetails key={index} isFirst={index === 0} {...job} />
        ))}
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
        <Button className="h-11 border border-[#fa29bb] hover:border-[#fa29bb]/80">
          View more
        </Button>
      </div>
    </div>
  );
}
