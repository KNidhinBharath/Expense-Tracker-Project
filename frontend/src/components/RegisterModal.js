import { useState } from "react";
import API from "../api/api.js";

export default function RegisterModal({close}){
  const [form,setForm]=useState({});
  const [message,setMessage]=useState("");

  const submit=async()=>{
    await API.post("/auth/register",form);
    setMessage("Registered Successfully ✅");
  }

  return(
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl w-80">
        <h2 className="text-lg font-bold mb-2">Register</h2>

        <input className="border p-2 w-full mb-2" placeholder="Name" onChange={e=>setForm({...form,name:e.target.value})}/>
        <input className="border p-2 w-full mb-2" placeholder="Email" onChange={e=>setForm({...form,email:e.target.value})}/>
        <input className="border p-2 w-full mb-2" type="password" placeholder="Password" onChange={e=>setForm({...form,password:e.target.value})}/>

        <button className="bg-green-500 text-white p-2 rounded w-full" onClick={submit}>Register</button>

        {message && <p className="text-green-600 text-sm mt-2">{message}</p>}

        <button  className="mt-3 w-full text-center font-bold text-sm text-gray-500" onClick={close}>Close</button>

      </div>
    </div>
  );
}
