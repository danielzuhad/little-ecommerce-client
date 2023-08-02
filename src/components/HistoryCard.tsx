/* eslint-disable @next/next/no-img-element */
import { ProductPost } from "@/types/types";
import React from "react";

interface ProductCardProps {
  history: ProductPost;
}

export const HistoryCard = ({ history }: ProductCardProps) => {
  return (
    <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      <img
        className="object-cover h-[320px]"
        src={history.img_product}
        alt="product image"
      />

      <div className="mt-4 px-5 pb-5">
        <h5 className="text-xl tracking-tight text-slate-900">
          {history.name}
        </h5>

        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-900">
              {history.price}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
