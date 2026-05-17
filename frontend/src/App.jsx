import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import AICoach from "./pages/AICoach";
import Admin from "./pages/Admin";
import Sidebar from "./layout/Sidebar";

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ marginLeft: "220px", width: "100%" }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/ai" element={<AICoach />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
