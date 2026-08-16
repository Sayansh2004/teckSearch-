import { Outlet } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import SidePanel from "./components/common/SidePanel";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1">
        <SidePanel />
        <main className="flex-1 overflow-x-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  );
}