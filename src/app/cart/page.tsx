"use client";
import api from "@/api";
import { CheckoutButton } from "@/components/CheckoutButton";
import { ClearButton } from "@/components/ClearButton";
import { TransactionCard } from "@/components/TransactionCard";
import { useCartStore, useHistoryStore } from "@/modules/store";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function Transaction() {
  const [showChild, setShowChild] = useState<boolean>(false);
  const [paidAmount, setPaidAmount] = useState<number>(0);
  const { cart } = useCartStore();

  const postSubmit = async () => {
    try {
      const total_price = cart.reduce(
        (total, item) => total + item.product.price * item.quantity,
        0
      );
      const paid_amount = paidAmount;
      const products = cart.map((item) => ({
        id: item.product.id,
        quantity: item.quantity,
      }));

      if (paid_amount > total_price) {
        const response = await api.post("/transaction/create", {
          total_price,
          paid_amount,
          products,
        });
        console.log("Response:", response.data);
        useCartStore.getState().clearCart();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Checkout Succes, Check Ur History",
          showConfirmButton: true,
        });
        const responseHistory = await api.get("/transaction");
        useHistoryStore.getState().updateHistory(responseHistory.data);
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Uang Anda Kurang",
          showConfirmButton: false,
          timer: 1000,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  return (
    <div className="border-[5px] border-[#9288F8] rounded-lg w-[90vw] bg-[#322653] text-white flex">
      {/* Left Side */}
      {cart.length === 0 ? (
        <div className="h-[80vh] w-[75vw] flex items-center justify-center">
          Keranjang Anda kosong{" "}
        </div>
      ) : (
        <div className="h-[80vh] overflow-auto w-[75vw]">
          {cart.map((item, index) => (
            <TransactionCard
              key={index}
              product={item.product}
              quantity={item.quantity}
              onClick={() =>
                useCartStore.getState().deleteInCart(item.product.id)
              }
            />
          ))}
        </div>
      )}

      {/* Right Side */}
      <div className="flex flex-col justify-center px-[10px] text-[1em] items-center border-2 border-white rounded-md m-3 ">
        <div className="flex mb-10">
          Total Harga :{" "}
          {cart.reduce(
            (total, item) => total + item.product.price * item.quantity,
            0
          )}
        </div>
        <div className="flex flex-col items-center gap-2">
          Total Pembayaran:
          <input
            value={paidAmount === 0 ? "" : paidAmount}
            onChange={(e) => setPaidAmount(parseInt(e.target.value))}
            className="text-black rounded-md  w-[200px] border  [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none mb-10 p-2"
            type="number"
            placeholder="Isi Nominal"
          />
        </div>

        <CheckoutButton onClick={postSubmit} />
        <ClearButton onClick={() => useCartStore.getState().clearCart()} />
      </div>
    </div>
  );
}
