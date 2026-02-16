import { useState, useEffect } from "react";

export default function TransactionForm({ onSubmit, editing }) {
  const [form, setForm] = useState({
    title: "",
    amount: "",
    category: "",
    date: "",
    notes: "",
  });

  useEffect(() => {
    if (editing) setForm(editing);
  }, [editing]);

  const handleSubmit = () => {
    onSubmit(form);
    setForm({ title: "", amount: "", category: "", date: "", notes: "" });
  };

  return (
  <div className="bg-white rounded-xl shadow p-6 max-w-2xl">

    <h3 className="text-lg font-bold mb-4">
      {editing ? "Edit Transaction" : "Add Transaction"}
    </h3>

    <div className="grid md:grid-cols-2 gap-4">

      <input
        className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Title"
        value={form.title}
        onChange={(e)=>setForm({...form,title:e.target.value})}
      />

      <input
        className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Amount"
        value={form.amount}
        onChange={(e)=>setForm({...form,amount:e.target.value})}
      />

      <input
        className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Category"
        value={form.category}
        onChange={(e)=>setForm({...form,category:e.target.value})}
      />

      <input
        type="date"
        className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={form.date}
        onChange={(e)=>setForm({...form,date:e.target.value})}
      />

      {/* Notes full width */}
      <input
        className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 md:col-span-2"
        placeholder="Notes"
        value={form.notes}
        onChange={(e)=>setForm({...form,notes:e.target.value})}
      />

    </div>

    <button
      onClick={handleSubmit}
      className="mt-5 bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg shadow font-semibold"
    >
      {editing ? "Update" : "Save"}
    </button>

  </div>
);

}