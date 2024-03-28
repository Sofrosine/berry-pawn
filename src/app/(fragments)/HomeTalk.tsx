import Button from "@/components/Button";
import React from "react";

const HomeTalk = () => {
  return (
    <div className="flex flex-col items-center text-center px-8 lg:px-[12rem] py-[5.14rem]">
      <p className="font-bold leading-normal text-4xl md:text-[3.5rem] 2xl:text-[4.57rem]">{"Haven't found which package is right for you?"}</p>
      <p className="mt-8 mb-12 text-xl md:text-2xl text-grey-2">
        {
          "We've got you covered! Talk to our experts to find the best solution for you, anytime for free!"
        }
      </p>
      <Button className="font-medium">Talk to expert</Button>
    </div>
  );
};

export default HomeTalk;
