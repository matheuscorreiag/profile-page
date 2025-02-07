import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

export type WorkDetailsProps = {
  startYear: number;
  endYear: number | null;
  jobTitle: string;
  companyName: string;
  imageUrl: string | StaticImport;
  isFirst?: boolean;
};

export function WorkDetails({
  startYear,
  endYear,
  jobTitle,
  companyName,
  imageUrl,
  isFirst,
}: WorkDetailsProps) {
  return (
    <div className="flex flex-col xl:flex-row  w-full items-center justify-center">
      <div className="flex flex-col lg:flex-row w-full max-w-4xl gap-x-24">
        <div className="flex w-full relative items-center justify-center lg:items-start lg:justify-start">
          <Image
            alt="Work photo"
            src={imageUrl}
            width={400}
            height={500}
            className="rounded-xl mt-8"
          />
          <div className="hidden lg:block absolute h-full w-0 border-l border-dashed border-white/50 -right-12 mt-36" />
          <div className="hidden lg:block w-3 h-3 absolute top-0 -right-[54px] rounded-full bg-[#fa29bb] mt-36" />
        </div>
        <div className="flex flex-col gap-y-4 justify-center items-center lg:justify-end my-16  w-full lg:items-end">
          <h1 className="text-md font-bold text-[#fa29bb]">
            {startYear} - {endYear || "Present"}{" "}
          </h1>
          <h2 className="text-2xl font-bold max-w-96 text-center lg:text-end">
            {jobTitle}
          </h2>
          <p className="text-zinc-400 font-light">{companyName}</p>
        </div>
      </div>
    </div>
  );
}
