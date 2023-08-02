"use client";
import React, { useEffect, useState } from "react";
import api from "@/api";
import { HistoryCard } from "@/components/HistoryCard";
import { HistoryType } from "@/types/types";

function History() {
  const [history, setHistory] = useState<HistoryType>();
  const [loading, setLoading] = useState(true);

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

  let historyProduct = history?.Product;
  console.log(history);

  if (loading) {
    return <div>Loading....</div>;
  }

  return (
    <div className="border-[5px] border-[#9288F8] rounded-lg w-[90vw] bg-[#322653]">
      {history?.Product?.map((transaction, index) => (
        <HistoryCard key={index} history={transaction} />
      ))}
    </div>
  );
}

export default History;
