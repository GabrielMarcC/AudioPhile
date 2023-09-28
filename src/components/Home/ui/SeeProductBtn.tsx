"use client";

import React from "react";

type Props = {
  children: React.ReactNode;
  bgcolor?: string;
  margin?: string;
  textColor?: string;
};

export const SeeProductBtn = ({
  children,
  bgcolor,
  margin,
  textColor,
}: Props) => {
  const defaultStyle = `border-none w-[160px] h-[48px] cursor-pointer border border-black flex justify-center items-center uppercase text-[13px] font-bold tracking-[1px] ${
    bgcolor ? bgcolor : "bg-black"
  }  ${margin ? margin : "m-0"} ${textColor ? textColor : "text-white"}`;

  const tabletStyle = `md:mt-[55px]`;

  return (
    <div className={`${defaultStyle} ${tabletStyle}`} role="button">
      {children}
    </div>
  );
};
