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
