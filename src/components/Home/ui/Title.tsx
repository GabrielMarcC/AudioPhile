import React from "react";

type Props = {
  label: string;
  textColor?: string;
  size?: string;
  leading?: string;
};

export const Title = ({ label, size, textColor, leading }: Props) => {
  const defaultStyle = `font-bold tracking-[2px] uppercase ${
    size ? size : "text-[28px]"
  } ${textColor ? textColor : "text-white"} ${
    leading ? leading : "leading-normal"
  }`;

  return <h2 className={`${defaultStyle}`}>{label}</h2>;
};
