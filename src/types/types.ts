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

export type HistoryType = {
  id: number;
  id_product: number;
  no_order: string;
  quantity: number;
  total_price: number;
  paid_amount: number;
  Product: ProductPost;
};
