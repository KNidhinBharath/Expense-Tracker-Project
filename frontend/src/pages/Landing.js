import { useState } from "react";
import LoginModal from "../components/LoginModal.js";
import RegisterModal from "../components/RegisterModal.js";

export default function Landing() {
  const [openRegister, setOpenRegister] = useState(false);

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow w-96">
        <h1 className="text-2xl font-bold mb-4">Expense Tracker</h1>

        <LoginModal />

        <p className="mt-4 text-sm">
          Not registered?
          <button
            className="text-blue-500 ml-1"
            onClick={() => setOpenRegister(true)}
          >
            Register
          </button>
        </p>

        {openRegister && (
          <RegisterModal close={() => setOpenRegister(false)} />
        )}
      </div>
    </div>
  );
}
