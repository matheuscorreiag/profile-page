"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function ViewMoreButton() {
  const router = useRouter();
  return (
    <Button
      className="h-11 border border-[#fa29bb] hover:border-[#fa298a8b] hover:bg-primary"
      onClick={() => router.push("/about")}
    >
      View more
    </Button>
  );
}
