import { ReactNode } from "react";
import { Metadata } from "next";

type Props = {
  params: { id: string };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Product - ${params.id}`,
    description: "product details",
  };
};

export default function DetailLayout({ children }: { children: ReactNode }) {
  return <section>{children}</section>;
}
