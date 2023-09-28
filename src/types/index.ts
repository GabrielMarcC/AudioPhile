export interface Iproduct {
  id: number;
  name: string;
  category: string;
  description: string;
  features: string;
  new: boolean;
  price: number;
}

export interface ImagesProduct {
  category: string;
  img: string;
}

export interface IGallery {
  category: string;
  img_product: string;
  name: string;
  img_1: string;
  img_2: string;
  img_3: string;
  img_tablet: string;
  no_bg_img: string;
}
