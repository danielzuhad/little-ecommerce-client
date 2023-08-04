"use client";
import Link from "next/link";
import { CartLogo } from "./CartLogo";
import { useCartStore, useHistoryStore } from "@/modules/store";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [showChild, setShowChild] = useState<boolean>(false);
  const { cartQuantity } = useCartStore();
  const cartStock = useCartStore().cart;
  const { history } = useHistoryStore();
  const [cart, setCart] = useState(0);

  useEffect(() => {
    setShowChild(true);
    setCart(cartQuantity);
  }, [cartQuantity]);

  if (!showChild) {
    return null;
  }
  return (
    <nav className="bg-[#322653] min-w-[60vw] h-[80px] rounded-md my-3 text-white flex justify-center items-center text-[27px] border-[5px] border-[#9288F8]">
      <ul className="flex gap-10 px-2 ">
        <li className="my-2">
          <Link
            className="p-2 border-white border-2 rounded-md hover:bg-blue-300 hover:text-[#292c4b] cursor-pointer active:bg-[#71daf2] focus:outline-none focus:ring focus:ring-[#71daf2]"
            href="/"
          >
            Home
          </Link>
        </li>
        <li className="my-2">
          <Link
            className="p-2 border-white border-2 rounded-md hover:bg-blue-300 hover:text-[#292c4b] cursor-pointer active:bg-[#71daf2] focus:outline-none focus:ring focus:ring-[#71daf2]"
            href="/create"
          >
            Create
          </Link>
        </li>
        <li className="my-2">
          {history.length > 0 && (
            <div className="absolute text-sm px-2 ml-[6em] mt-[-1em] bg-[#5ebdfd] rounded-full">
              !
            </div>
          )}
          <Link
            className="p-2 border-white border-2 rounded-md hover:bg-blue-300 hover:text-[#292c4b] cursor-pointer active:bg-[#71daf2] focus:outline-none focus:ring focus:ring-[#71daf2] "
            href="/history"
          >
            History
          </Link>
        </li>
        <li className="my-2">
          {cartStock.length > 0 && (
            <div className="absolute text-sm px-2 ml-[4em] mt-[-1em] bg-[#5ebdfd] rounded-full">
              !
            </div>
          )}
          <Link
            className="p-2 border-white border-2 rounded-md hover:bg-blue-300 hover:text-[#292c4b] cursor-pointer active:bg-[#71daf2] focus:outline-none focus:ring focus:ring-[#71daf2]"
            href="/cart"
          >
            Cart
          </Link>
        </li>
        <li className="flex justify-center items-center ">
          <CartLogo className="p-1  " />
          {/* angka */}
          <div>{cart}</div>
        </li>
      </ul>
    </nav>
  );
};
