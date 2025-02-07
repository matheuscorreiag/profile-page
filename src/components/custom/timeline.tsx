import { WorkDetails } from "@/components/custom/work-details";

export function Timeline() {
  return (
    <div className="flex flex-col text-white py-16 xl:py-32 bg-neutral-950">
      <h1 className="whitespace-nowrap text-center text-3xl font-bold leading-tight lg:text-[3rem] lg:leading-normal">
        Timeline
      </h1>

      <div className="space-y-8 lg:flex-row lg:gap-x-16 lg:gap-y-0 grid grid-cols-1 place-items-center px-page mt-24 relative">
        <WorkDetails
          startYear={2022}
          endYear={null}
          jobTitle="Backend Developer in a Angola delivery company (current)"
          companyName="Mamboo"
          imageUrl="/images/mamboo.jpg"
        />

        <WorkDetails
          startYear={2022}
          endYear={null}
          jobTitle="Fullstack Developer"
          companyName="FinderUp"
          imageUrl="/images/saopaulo.webp"
        />
        <WorkDetails
          startYear={2021}
          endYear={2022}
          jobTitle="Backend Stack Developer"
          companyName="Autono.dev"
          imageUrl="/images/joaopessoa.jpg"
        />
        <div className="hidden lg:block absolute h-full w-0 border-l border-dashed border-white/50" />
      </div>
    </div>
  );
}
