type NotFinalizedPageProps = {
  pageName: string;
};

export function NotFinalizedPage({ pageName }: NotFinalizedPageProps) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-white">
      {pageName} is still under development, please come back later.
    </div>
  );
}
