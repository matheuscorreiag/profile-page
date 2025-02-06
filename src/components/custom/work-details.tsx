import Image from "next/image";

type WorkDetailsProps = {
  startYear: number;
  endYear: number | null;
  jobTitle: string;
  companyName: string;
};

export function WorkDetails({
  startYear,
  endYear,
  jobTitle,
  companyName,
}: WorkDetailsProps) {
  return (
    <div className="flex flex-col xl:flex-row  w-full items-center justify-center">
      <div className="flex flex-col lg:flex-row w-full max-w-4xl items-center gap-x-24 ">
        <Image
          alt="Work photo"
          src="/images/job1.png"
          width={400}
          height={500}
          className="rounded-xl"
        />
        <div className="flex flex-col gap-y-4 justify-center items-center lg:justify-end my-16  w-full lg:items-end">
          <h1 className="text-md font-bold text-[#fa29bb]">
            {startYear} - {endYear || "Present"}{" "}
          </h1>
          <h2 className="text-2xl font-bold max-w-96">{jobTitle}</h2>
          <p className="text-zinc-400 font-light">{companyName}</p>
        </div>
      </div>
    </div>
  );
}
