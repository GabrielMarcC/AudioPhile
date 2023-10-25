import React from "react";

type Props = {
  label: string;
  textColor?: string;
  size?: string;
  leading?: string;
  padding?: string;
};

export const Title = ({ label, size, textColor, leading, padding }: Props) => {
  const defaultStyle = `font-bold tracking-[2px] uppercase ${
    size ? size : "text-[28px]"
  } ${textColor ? textColor : "text-white"} ${
    leading ? leading : "leading-normal"
  }  ${padding ? padding : "p-0"}`;

  const tabletStyle = `${size} ${padding ? padding : "p-0"} ${
    leading ? leading : "leading-0"
  } md:text-center`;

  const desktopStyle = `lg:text-left`;

  return (
    <h2 className={`${defaultStyle} ${tabletStyle} ${desktopStyle}`}>
      {label}
    </h2>
  );
};
