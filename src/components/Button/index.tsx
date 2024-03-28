"use client";

import clsx from "clsx";
import React, { FC } from "react";

type Props = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<Props> = ({ children, className, onClick, ...props }) => {
  return (
    <button
      {...props}
      className={clsx("",className)}
      onClick={(e) => {
        onClick && onClick(e);
      }}
    >
      {children}
    </button>
  );
};

export default Button;
