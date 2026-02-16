import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Explorer from "./pages/Explorer";
import ProtectedRoute from "./components/ProtectedRoute";




export default function App(){


  return(
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/login" element={<Landing/>}/>
      <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
      <Route path="/explorer" element={<ProtectedRoute><Explorer/></ProtectedRoute>}/>
    </Routes>
  );
}
