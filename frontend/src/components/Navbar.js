import { useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";



export default function Navbar() {

  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate("/login"); 
  };

  return (
    <div className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Left */}
        <div className="flex items-center gap-6">
          <h1 className="text-lg font-bold">Expense Tracker</h1>

          {/* ✅ Conditional Link */}
          {location.pathname === "/dashboard" && (
            <Link
              to="/explorer"
              className="text-gray-600 hover:text-blue-500 font-medium"
            >
              Expenses
            </Link>
          )}

          {location.pathname === "/explorer" && (
            <Link
              to="/dashboard"
              className="text-gray-600 hover:text-blue-500 font-medium"
            >
              Dashboard
            </Link>
          )}
        </div>

        {/* Right */}
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow"
        >
          Logout
        </button>

      </div>
    </div>
  );
}
