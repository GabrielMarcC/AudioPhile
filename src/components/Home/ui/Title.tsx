import React from "react";

type Props = {
  label: string;
  textColor?: string;
  size?: string;
  leading?: string;
  padding?: string;
  textAlign?: string;
};

export const Title = ({
  label,
  size,
  textColor,
  leading,
  padding,
  textAlign,
}: Props) => {
  const defaultStyle = `font-bold tracking-[2px] uppercase ${
    size ? size : "text-[28px]"
  } ${textColor ? textColor : "text-white"} ${
    leading ? leading : "leading-normal"
  }  ${padding ? padding : "p-0"} truncate whitespace-nowrap`;

  const tabletStyle = `${size ? size : "text-[40px]"} ${
    padding ? padding : "p-0"
  } ${
    leading ? leading : "leading-0"
  }  md:whitespace-nowrap md:truncate  md:tracking-normal`;

  const desktopStyle = `${
    textAlign ? textAlign : "text-left"
  } whitespace-nowrap`;

  return (
    <h2 className={`${defaultStyle} ${tabletStyle} ${desktopStyle}`}>
      {label}
    </h2>
  );
};
