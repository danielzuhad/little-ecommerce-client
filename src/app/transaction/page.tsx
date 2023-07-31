"use client";
import { TransactionCard } from "@/components/TransactionCard";
import useCartStore from "@/modules/store";
import { useEffect, useState } from "react";

export default function Transaction() {
  const [showChild, setShowChild] = useState(false);
  const { cart } = useCartStore();
  console.log(cart);

  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  return (
    <div className="border-[5px] border-[#9288F8] rounded-lg w-[90vw] bg-[#322653] text-white">
      <div className="h-[80vh] overflow-auto">
        {cart.map((item, index) => (
          <TransactionCard
            key={index}
            product={item.product}
            quantity={item.quantity}
          />
        ))}
      </div>
    </div>
  );
}
