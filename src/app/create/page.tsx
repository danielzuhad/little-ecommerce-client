"use client";
import api from "@/api";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function Create() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [imgProduct, setImgProduct] = useState("");

  const createProduct = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (
      !name ||
      !price ||
      isNaN(price) ||
      price <= 0 ||
      isNaN(stock) ||
      stock < 0 ||
      !imgProduct
    ) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Invalid input. Please fill out all fields correctly.",
        showConfirmButton: false,
        timer: 2000,
      });
      return;
    }

    try {
      const response = await api.post("product/create", {
        name,
        price,
        stock,
        img_product: imgProduct,
      });
      console.log("Response:", response.data);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Product successfully added.",
        showConfirmButton: false,
        timer: 1000,
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        position: "center",
        icon: "error",
        title: "An error occurred. Please try again later.",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

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
                  placeholder="Nama Product"
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
                onClick={(e) => createProduct(e)}
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
