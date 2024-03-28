"use client";

import Image from "next/image";
import React from "react";
import Button from "../Button";
import Dropdown from "../Dropdown";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center py-0 lg:py-4 px-0 md:px-4 lg:px-[4.571rem]">
      <div className="flex items-center">
        <div className="p-[1.28rem]">
          <Image src={"/logos/logo.png"} width={183} height={51} alt="" />
        </div>
        <div className="items-center hidden lg:flex">
        <Dropdown label="Product" className="px-5 py-4 ml-10" />
        <Dropdown label="Solution" className="px-5 py-4 ml-9" />
        <Link href={"/"} className="px-10 py-4 ml-9">
          <p className="text-2xl font-medium">Pricing</p>
        </Link>
        </div>
      </div>
      <Button className="hidden lg:block">Get Started</Button>
    </header>
  );
};

export default Navbar;
