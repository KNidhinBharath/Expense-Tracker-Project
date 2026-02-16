export default function TransactionItem({ data, onDelete, onEdit }) {

  const formattedDate = new Date(data.date)
    .toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "2-digit",
    });

  return (
    <div className="grid grid-cols-5 gap-4 items-center p-4 border-b hover:bg-gray-50 transition">

      {/* Title */}
      <span className="font-medium text-gray-800">
        {data.title}
      </span>

      {/* Category */}
      <span className="text-sm bg-gray-100 text-gray-600 px-2 py-1 rounded w-fit">
        {data.category}
      </span>

      {/* Amount */}
      <span className="text-right font-semibold text-red-500">
        ₹{data.amount}
      </span>

      {/* Date */}
      <span className="text-right text-gray-500 text-sm">
        {formattedDate}
      </span>

      {/* Actions */}
      <div className="flex justify-end gap-2">
        <button
          onClick={()=>onEdit(data)}
          className="px-3 py-1 text-sm bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
        >
          Edit
        </button>

        <button
          onClick={()=>onDelete(data._id)}
          className="px-3 py-1 text-sm bg-red-500 hover:bg-red-600 text-white rounded-lg"
        >
          Delete
        </button>
      </div>

    </div>
  );
}
