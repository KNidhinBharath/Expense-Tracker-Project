
import { useEffect, useState } from "react";
import api from "../api/api.js";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";



export default function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    api.get("/dashboard").then(res => setData(res.data));
  }, []);

  if (!data)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-gray-500">Loading...</p>
      </div>
    );

  return (
  <div className="min-h-screen bg-gray-100">

    {/* Navbar */}
    <Navbar />

    {/* Page Content */}
    <div className="p-8 max-w-6xl mx-auto">

      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Dashboard</h2>
      
      </div>

      {/* Total Card */}
      <div className="bg-white rounded-xl shadow p-6 mb-6">
        <p className="text-gray-500">Total Expenses</p>
        <h3 className="text-2xl font-bold text-red-500">
          ₹{data.total}
        </h3>
      </div>

      {/* Grid Section */}
      <div className="grid md:grid-cols-2 gap-6">

        {/* Category Breakdown */}
       {/* Category Breakdown */}
<div className="bg-white rounded-xl shadow p-6">
  <h4 className="font-bold mb-4">Category Breakdown</h4>

  {/* Headings */}
  <div className="grid grid-cols-2 border-b pb-2 mb-2 text-sm font-semibold text-gray-500">
    <span>Category</span>
    <span className="text-right">Total</span>
  </div>

  {/* Rows */}
  <div className="space-y-2">
    {data.category.map(c => (
      <div
        key={c._id}
        className="grid grid-cols-2 items-center text-gray-700 hover:bg-gray-50 px-1 py-1 rounded transition"
      >
        <span>{c._id}</span>
        <span className="text-right font-semibold">₹{c.total}</span>
      </div>
    ))}
  </div>
</div>


        {/* Recent Transactions */}
<div className="bg-white rounded-xl shadow p-6">
  <h4 className="font-bold mb-4">Recent Transactions</h4>

  {/* Headings */}
  <div className="grid grid-cols-2 border-b pb-2 mb-2 text-sm font-semibold text-gray-500">
    <span>Title</span>
    <span className="text-right">Action</span>
  </div>

  {/* Rows */}
  <div className="space-y-2">
    {data.recent.map(r => (
      <div
        key={r._id}
        className="grid grid-cols-2 items-center text-gray-700 hover:bg-gray-50 px-1 py-1 rounded transition"
      >
        <span>{r.title}</span>
        <Link
          to="/explorer"
          className="text-right text-blue-500 hover:underline text-sm"
        >
          View
        </Link>
      </div>
    ))}
  </div>
</div>


      </div>
    </div>
  </div>
);

}
