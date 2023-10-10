"use client";

import { ShowMoreType } from "@/utils/type";
import { useRouter } from "next/navigation";
import { CustomButton } from ".";
import { updateSearchParams } from "@/utils";

export default function ShowMore({ pageNumber, isNext }: ShowMoreType) {
  const router = useRouter();

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPathName = updateSearchParams("limit", newLimit.toString());

    router.push(newPathName);
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          title="Show More"
          type="button"
          isDisable={false}
          containerStyle="bg-primary-blue rounded-full text-white"
          handleClick={() => handleNavigation()}
        />
      )}
    </div>
  );
}
