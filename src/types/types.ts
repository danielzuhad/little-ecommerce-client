export type ProductPost = {
  id: number;
  img_product?: string;
  name: string;
  price: number;
  stock: number;
};

export type CartItem = {
  product: ProductPost;
  quantity: number;
};
