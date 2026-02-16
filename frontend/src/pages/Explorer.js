import { useEffect, useState } from "react";
import useTransactions from "../hooks/useTransactions";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";
import TransactionFilters from "../components/TransactionFilters";
import Navbar from "../components/Navbar";

export default function Explorer(){

  const {
    transactions,
    loading,
    fetchTransactions,
    addTransaction,
    updateTransaction,
    deleteTransaction
  } = useTransactions();

  const [search,setSearch] = useState("");
  const [page,setPage] = useState(1);
  const [editing,setEditing] = useState(null);

  
  useEffect(()=>{
    fetchTransactions(`?search=${search}&page=${page}`);
  },[search,page]);

  const handleSubmit=(data)=>{
    if(editing) updateTransaction(editing._id,data);
    else addTransaction(data);
    setEditing(null);
  };

  return(
  
  <div className="min-h-screen bg-gray-100">

    <Navbar/>

    <div className="max-w-6xl mx-auto p-6">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold ">Transaction Explorer</h2>
      </div>

      {/* Filters Card */}
      <div className="bg-white rounded-xl shadow p-5 mb-6">
        <TransactionFilters
          search={search}
          setSearch={setSearch}
        />
      </div>

      {/* Form Card */}
      <div className="bg-white rounded-xl shadow p-5 mb-6">
        <TransactionForm
          onSubmit={handleSubmit}
          editing={editing}
        />
      </div>

      {/* Loading */}
      {loading && (
        <div className="bg-white rounded-xl shadow p-6 text-gray-500">
          Loading transactions...
        </div>
      )}

      {/* Empty State */}
      {!loading && transactions.length===0 && (
        <div className="bg-white rounded-xl shadow p-6 text-gray-500">
          No transactions found
        </div>
      )}

      {/* List */}
      {!loading && transactions.length>0 && (
        <div className="bg-white rounded-xl shadow p-5 mb-6">
          <TransactionList
            list={transactions}
            onDelete={deleteTransaction}
            onEdit={setEditing}
          />
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4">
        <button
          className="bg-white px-4 py-2 rounded-lg shadow hover:bg-gray-50"
          onClick={()=>setPage(p=>Math.max(p-1,1))}
        >
          Prev
        </button>

        <span className="font-semibold text-gray-700">
          Page {page}
        </span>

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600"
          onClick={()=>setPage(p=>p+1)}
        >
          Next
        </button>
      </div>

    </div>
  </div>
);

}
