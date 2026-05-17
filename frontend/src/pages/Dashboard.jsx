import { useEffect, useState } from "react";
import api from "../services/api";

export default function Dashboard() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    api.get("/transactions/1").then(res => {
      setTransactions(res.data);
    });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Wealth Dashboard</h1>

      <div className="mt-4">
        {transactions.map(t => (
          <div key={t.id} className="p-2 border">
            {t.type} - {t.category} - ₦{t.amount}
          </div>
        ))}
      </div>
    </div>
  );
}
