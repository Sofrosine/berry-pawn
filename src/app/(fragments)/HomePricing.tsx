import { CardPricing } from "@/components/Card";
import { PRICING_DATA, PRICING_SECONDARY_INFO } from "@/constants/data";
import React from "react";

const HomePricing = () => {
  return (
    <div className="flex px-0 md:px-8 xl:px-[7.14rem] overflow-x-scroll pt-8">
      <div className="hidden xl:flex flex-col pt-36 flex-1">
        <p className="font-bold">Core Features</p>
        <p className="py-6 mt-1.5 mb-1.5">Files Included</p>
        {PRICING_SECONDARY_INFO.map((item) => {
          return (
            <p className="pt-6" key={item}>
              {item}
            </p>
          );
        })}
      </div>
      {PRICING_DATA.map((item, index) => {
        return (
          <div key={item?.title} className="flex flex-1 z-50">
            <CardPricing item={item} index={index} />
          </div>
        );
      })}
    </div>
  );
};

export default HomePricing;
