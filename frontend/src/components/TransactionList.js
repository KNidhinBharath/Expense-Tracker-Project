import TransactionItem from "./TransactionItem";

export default function TransactionList({ list, onDelete, onEdit }) {
  return (
    <div className="bg-white rounded-xl shadow">

      {/* HEADERS */}
      <div className="grid grid-cols-5 gap-4 p-4 border-b text-sm font-semibold text-gray-600">
        <span>Title</span>
        <span>Category</span>
        <span className="text-right">Amount</span>
        <span className="text-right">Date</span>
        <span className="text-right">Actions</span>
      </div>

      {/* ROWS */}
      <div>
        {list.map((item) => (
          <TransactionItem
            key={item._id}
            data={item}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </div>

    </div>
  );
}
