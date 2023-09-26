import React from "react";

// type Props = {
//   children: React.ReactNode;
//   height?: string;
//   bgcolor?: string;
//   margin?: string;
// };

// export const Card = ({ children, height, bgcolor, margin }: Props) => {
//   return (
//     <div
//       className={`w-[320px] ${height ? height : "h-[200px]"} ${
//         bgcolor ? bgcolor : "bg-white"
//       }  ${margin ? margin : "m-0"} rounded-lg`}
//     >
//       {children}
//     </div>
//   );
// };

type Props = {
  children: React.ReactNode;
  height?: string;
  bgcolor?: string;
  margin?: string;
};

export const Card = ({ children, height, bgcolor, margin }: Props) => {
  const defaultStyle = `flex  flex-col w-[320px] ${
    height ? height : "h-[200px]"
  } ${bgcolor ? bgcolor : "bg-white"}  ${margin ? margin : "m-0"} rounded-lg`;

  return <div className={`${defaultStyle}`}>{children}</div>;
};
