import { Link } from "react-router-dom";
import { useAuthContext } from "../context/useAuthContext";

export default function Sidebar() {
  const { isLoggedIn } = useAuthContext();

  if (!isLoggedIn) return null; // ← Sidebar znika gdy nie ma sesji

 return (
    <aside className="w-64 bg-slate-800 text-white flex flex-col">
      <div className="px-4 py-3 border-b border-slate-700">
        <h1 className="text-lg font-semibold">MENU</h1>
      </div>

      <nav className="flex-1 px-4 py-3 space-y-2">
        <Link
          to="/"
          className="block w-full text-left px-3 py-2 rounded hover:bg-slate-700"
        >
          Dashboard
        </Link>

        <Link
          to="/users"
          className="block w-full text-left px-3 py-2 rounded hover:bg-slate-700"
        >
          Użytkownicy
        </Link>

        <Link
          to="/settings"
          className="block w-full text-left px-3 py-2 rounded hover:bg-slate-700"
        >
          Ustawienia
        </Link>
      </nav>
    </aside>
  );
}