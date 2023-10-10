import React from "react";

type Props = {
  children: React.ReactNode;
  height?: string;
  bgcolor?: string;
  margin?: string;
  position?: string;
  width?: string;
  display?: string;
};

export const Card = ({
  children,
  height,
  bgcolor,
  margin,
  position,
  width,
  display,
}: Props) => {
  const defaultStyle = `flex  flex-col w-[320px] ${
    height ? height : "h-[200px]"
  } ${bgcolor ? bgcolor : "bg-white"}  ${margin ? margin : "m-0"} ${
    position ? position : null
  } rounded-lg`;

  const tabletStyle = `custom:${display ? display : "flex"} md:${
    width ? width : "w-[680px]"
  } md:h-[320px]`;

  const desktopStyle = `lg:${width ? width : "w-[350px]"}`;

  return (
    <div className={`${defaultStyle} ${tabletStyle} ${desktopStyle}`}>
      {children}
    </div>
  );
};
