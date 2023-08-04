/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { ProductPost } from "@/types/types";

interface CartItem {
  product: ProductPost;
  quantity: number;
  onClick: React.MouseEventHandler;
}

export const TransactionCard = ({ product, quantity, onClick }: CartItem) => {
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
        <div className="flex flex-col justify-center gap-5 items-center">
          <div className="p-5">{product.price * quantity}</div>
          <button
            onClick={onClick}
            className="bg-[#da2c2c] rounded-full w-[30px] px-2 active:bg-[#430c0c] text-lg"
          >
            X
          </button>
        </div>
      </div>
    </>
  );
};
