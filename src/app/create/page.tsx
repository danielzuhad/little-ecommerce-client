"use client";
import React, { useState } from "react";

export default function Create() {
  const [name, setName] = useState<string>();
  const [price, setPrice] = useState<number>(0);
  const [stock, setStock] = useState<number>(0);
  const [imgProduct, setImgProduct] = useState<string>();
  console.log(imgProduct);
  return (
    <div className="border-[5px] p-4 border-[#9288F8] rounded-lg w-[90vw] h-[80vh] bg-[#322653] flex  justify-center">
      <div className="flex flex-col items-center  pt-6 sm:justify-center sm:pt-0 bg-gray-50 w-full rounded-md">
        <div>
          <a href="/">
            <h3 className="text-4xl font-bold text-purple-600">
              Isi Data Product
            </h3>
          </a>
        </div>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
          <form>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Name
              </label>
              <div className="flex flex-col items-start">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  name="name"
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-3"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Price
              </label>
              <div className="flex flex-col items-start">
                <input
                  placeholder="Isi Nominal"
                  value={price === 0 ? "" : price}
                  onChange={(e) => setPrice(parseInt(e.target.value))}
                  type="number"
                  className="p-3 block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50  [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Stock
              </label>
              <div className="flex flex-col items-start">
                <input
                  placeholder="Isi Stock"
                  value={stock === 0 ? "" : stock}
                  onChange={(e) => setStock(parseInt(e.target.value))}
                  type="number"
                  className="p-3 block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50  [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Gambar Product
              </label>
              <div className="flex flex-col items-start">
                <input
                  placeholder="Paste Link Gambar Disini"
                  value={imgProduct}
                  onChange={(e) => setImgProduct(e.target.value)}
                  type="text"
                  className="p-3 block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50  "
                />
              </div>
            </div>
            <div className="flex items-center justify-center  mt-4">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
              >
                Tambah
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
