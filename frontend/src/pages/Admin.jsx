import { useEffect, useState } from "react";
import api from "../services/api";

export default function Admin() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get("/admin/users").then(res => setUsers(res.data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Admin Panel</h1>

      {users.map(u => (
        <div key={u.id} className="border p-2 mt-2">
          {u.name} - {u.email}
        </div>
      ))}
    </div>
  );
}
