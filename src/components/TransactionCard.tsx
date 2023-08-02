/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ProductPost } from "@/types/types";

interface CartItem {
  product: ProductPost;
  quantity: number;
}

export const TransactionCard = ({ product, quantity }: CartItem) => {
  return (
    <>
      <div className="p-3 flex items-center border-2 border-white m-3 rounded-md justify-between text-[1.5em]">
        <div className="flex items-center gap-10">
          <img
            className="object-cover h-[200px]"
            src={product?.img_product}
            alt="Gambar Product"
          />
          <div>
            <div className="p-5 ">{product.name}</div>
            <div className="p-5">Quantity : {quantity} </div>
          </div>
        </div>
        <div className="p-5">{product.price * quantity}</div>
      </div>
    </>
  );
};
