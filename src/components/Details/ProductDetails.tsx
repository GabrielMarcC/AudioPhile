type Props = {
  data: Products;
  galleryData: Gallery;
};

export const ProductDetails = ({ data, galleryData }: Props) => {
  return (
    <div>
      <h2></h2>

      <p>{data.description}</p>
      <span></span>
    </div>
  );
};
