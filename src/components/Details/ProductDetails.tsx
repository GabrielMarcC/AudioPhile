import Image from "next/image";
import Link from "next/link";

type Props = {
  product: Products;
};

export const ProductDetails = ({ product }: Props) => {
  return (
    <div>
      <Link href={"/"}>voltar</Link>
      <Image
        src={product.img_product}
        alt={product.name}
        width={300}
        height={300}
      />
      <h2 className="text-dark-orange text-[14px] font-normal tracking-[10px] uppercase leading-normal">
        {product.new === true ? product.new : ""}
      </h2>

      <p>{product.description}</p>
      <span></span>
    </div>
  );
};
