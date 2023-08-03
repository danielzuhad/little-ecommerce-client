"use client";
import React, { useEffect, useState } from "react";
import api from "@/api";
import { HistoryType } from "@/types/types";
import { HistoryCard } from "@/components/HistoryCard";
import { ClearButton } from "@/components/ClearButton";
import { useHistoryStore } from "@/modules/store";

function History() {
  const [history, setHistory] = useState<HistoryType[]>([]);
  const [loading, setLoading] = useState(true);

  const historyState = useHistoryStore().history;

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        setLoading(true);
        const response = await api.get("/transaction");
        setHistory(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  const noOrder = history.map((item) => item.no_order);
  const totalPrice = history.map((item) => item.total_price);
  const paidAmount = history.map((item) => item.paid_amount);

  console.log(history);
  console.log(noOrder[0]);

  if (loading) {
    return <div>Loading....</div>;
  }

  return (
    <div>
      {historyState.length === 0 ? (
        <div className="border-[5px] p-4 border-[#9288F8] rounded-lg w-[90vw] h-[80vh] bg-[#322653] flex justify-center items-center text-[2em] text-white">
          Belum Ada Transaksi
        </div>
      ) : (
        <div className="border-[5px] p-4 border-[#9288F8] rounded-lg w-[90vw] h-[80vh] bg-[#322653] flex">
          {/* Left Side */}
          <div className="w-[70%]  h-full rounded-l-md  bg-[#f6f4f4fe] ">
            <div className="p-3 text-[1.5em]">No Order : {noOrder[0]}</div>
            <div className="flex flex-wrap h-[55vh] overflow-auto justify-center border-2 border-[#545454] ml-[2em]">
              {history.map((item) => (
                <div key={item.id} className="">
                  <HistoryCard
                    history={item.Product}
                    quantity={item.quantity}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="w-[30%] h-full rounded-r-md p-4 bg-[#f6f4f4fe]">
            <div className="text-[1.3em] mt-[50px] mb-[20px]">
              Total Harga : {totalPrice[0]}
            </div>
            <div className="text-[1.3em]">
              Total Pembayaran : {paidAmount[0]}
            </div>
            <div className="flex justify-center mt-[100px]">
              <ClearButton
                onClick={() => useHistoryStore.getState().clearHistory()}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default History;
