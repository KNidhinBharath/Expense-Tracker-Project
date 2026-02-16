import { useState } from "react";
import API from "../api/api.js";

export default function useTransactions() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTransactions = async (params = "") => {
    setLoading(true);

    const res = await API.get(`/transactions${params}`);

    
    setTransactions(res.data.data);

    setLoading(false);
  };

  const addTransaction = async (data) => {
    await API.post("/transactions", data);
    fetchTransactions();
  };

  const updateTransaction = async (id, data) => {
    await API.put(`/transactions/${id}`, data);
    fetchTransactions();
  };

  const deleteTransaction = async (id) => {
    await API.delete(`/transactions/${id}`);
    fetchTransactions();
  };

  return {
    transactions,
    loading,
    fetchTransactions,
    addTransaction,
    updateTransaction,
    deleteTransaction,
  };
}
