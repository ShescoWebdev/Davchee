import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Button from "../common/Button";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Button />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Layout;