import Sidebar from "../components/Sidebar"
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="h-screen flex bg-gray-100">
      <Sidebar/>      
      <main className="flex-1 p-6">
          <Outlet />
      </main>
    </div>
  )
}
