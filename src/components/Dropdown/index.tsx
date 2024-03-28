import React, { FC } from "react";
import Image from "next/image";

import clsx from "clsx";

interface Props {
  label: string;
  className?: string;
}

const Dropdown: FC<Props> = ({ label, className }) => {
  return (
    <div className={clsx("flex items-center gap-[0.71rem] hover:cursor-pointer", className)}>
      <p className="text-2xl font-medium">{label}</p>
      <Image src={"/icons/IcChevronDown.svg"} alt="" height={24} width={24} />
    </div>
  );
};

export default Dropdown;
