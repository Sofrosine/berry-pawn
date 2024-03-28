import { workSans } from "@/constants/fonts";
import clsx from "clsx";
import Image from "next/image";
import React, { FC } from "react";
import Button from "../Button";
import { currencyConverter } from "@/helpers";

interface Props {
  item: Pricing;
  index: number;
}

const CardPricing: FC<Props> = ({ item, index }) => {
  return (
    <div
      className={clsx(
        "flex flex-1 flex-col rounded-[0.71rem] relative justify-between w-[300px] lg:w-auto",
        item?.is_best_seller && "border-2 border-primary-lighter",
        index % 2 ? "bg-white" : "bg-white-2"
      )}
    >
      {item?.is_best_seller && (
        <div className="absolute flex justify-center w-full -top-6 z-50">
          <div className="bg-primary-light text-white px-6 py-2 rounded-3xl ">
            <p>Best Seller</p>
          </div>
        </div>
      )}
      <div className="flex flex-col items-center justify-between text-center px-7 pt-7 pb-[1.57rem]">
        <p className="text-xl">{item?.title}</p>
        <p className="text-grey my-4">{item?.subtitle}</p>
        <p className={clsx("text-3xl 2xl:text-[2.42rem] font-semibold", workSans.className)}>
          {currencyConverter(item?.price)}
        </p>
      </div>
      <div
        className={clsx(
          "flex items-center py-6 justify-center px-4 gap-2",
          index % 2 ? "bg-white-2" : "bg-white"
        )}
      >
        <p>{item?.files} Files</p>
        <Image src={"/icons/IcAsk.svg"} alt="" height={12} width={12} />
      </div>
      <div className="flex flex-col items-center px-8">
        <div className={clsx("flex items-center mt-6 justify-center gap-2")}>
          <p>{item?.generations}</p>
          <Image src={"/icons/IcAsk.svg"} alt="" height={12} width={12} />
        </div>
        <div className={clsx("flex items-center mt-6 justify-center gap-2")}>
          Up to {item?.files} files
        </div>
        <div className={clsx("flex items-center mt-6 justify-center gap-2")}>
          <p>{item?.pages} pages per File</p>
          <Image src={"/icons/IcAsk.svg"} alt="" height={12} width={12} />
        </div>
        <div className={clsx("flex items-center mt-6 justify-center gap-2")}>
          <p>{item?.limit}MB</p>
          <Image src={"/icons/IcAsk.svg"} alt="" height={12} width={12} />
        </div>
        <div className={clsx("flex items-center mt-7 justify-center gap-2")}>
          <Image src={"/icons/IcCheck.svg"} alt="" height={16} width={16} />
        </div>
        <div className={clsx("flex items-center mt-7 justify-center gap-2")}>
          <Image src={"/icons/IcCheck.svg"} alt="" height={16} width={16} />
        </div>
        <div className={clsx("flex items-center mt-7 justify-center gap-2")}>
          <Image src={"/icons/IcCheck.svg"} alt="" height={16} width={16} />
        </div>
        <Button
          className={clsx(
            "text-sm font-bold py-2 px-8 mb-6 mt-[3.85rem]",
            item?.price > 0 &&
              "border border-primary bg-white text-black font-normal hover:bg-white"
          )}
        >
          {item?.price > 0 ? "Select" : "Get Started Free"}
        </Button>
      </div>
    </div>
  );
};

export default CardPricing;
