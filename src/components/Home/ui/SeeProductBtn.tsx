type Props = {
  children: React.ReactNode;
  bgcolor?: string;
  margin?: string;
  textColor?: string;
  border?: string;
  hover?: string;
  padding?: string;
};

export const SeeProductBtn = ({
  children,
  bgcolor,
  margin,
  textColor,
  border,
  hover,
  padding,
}: Props) => {
  const defaultStyle = `w-[160px] h-[48px] cursor-pointer ${
    border ? border : "border-none"
  } flex justify-center items-center uppercase text-[13px] font-bold tracking-[1px] ${
    bgcolor ? bgcolor : "bg-black"
  }  ${margin ? margin : "m-0"} ${textColor ? textColor : "text-white"} ${
    padding ? padding : "p-0"
  }`;

  const tabletStyle = ` ${bgcolor ? bgcolor : "bg-black"}  ${
    margin ? margin : "m-0"
  } ${textColor ? textColor : "text-white"} ${
    border ? border : "border-none"
  } border`;

  const desktopStyle = `${hover}`;

  return (
    <div
      className={`${defaultStyle} ${tabletStyle} ${desktopStyle}`}
      role="button"
    >
      {children}
    </div>
  );
};
