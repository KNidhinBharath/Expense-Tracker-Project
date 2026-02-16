export default function TransactionFilters({ search, setSearch, onSearch }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex flex-col md:flex-row gap-3 items-center">

      {/* Search Input */}
      <input
        value={search}
        placeholder="Search transactions..."
        onChange={(e)=>setSearch(e.target.value)}
        className="border rounded-lg p-2 w-full md:flex-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {/* Search Button */}
      <button
        onClick={onSearch}
        className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg shadow font-medium"
      >
        Search
      </button>

    </div>
  );
}
