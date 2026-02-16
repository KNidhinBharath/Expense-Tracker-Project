import { useState,useContext } from "react";
import API from "../api/api";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function LoginModal(){
  const {login}=useContext(AuthContext);
  const navigate=useNavigate();

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

 const submit = async () => {

 
  if (!email || !password) {
    alert("Please enter email and password");
    return;
  }

  try {
    const res = await API.post("/auth/login",{email,password});
    login(res.data.token);
    navigate("/dashboard");
  } catch(err){
    alert("Invalid login");
  }
};


 return(
  <div className="border rounded-xl shadow-md p-6 bg-white w-full max-w-sm mx-auto">
    
    <div className="flex flex-col gap-3">
      <input
        className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Email"
        onChange={e=>setEmail(e.target.value)}
      />

      <input
        className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        type="password"
        placeholder="Password"
        onChange={e=>setPassword(e.target.value)}
      />

      <button
        className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded font-semibold"
        onClick={submit}
      >
        Login
      </button>
    </div>

  </div>
);

}
