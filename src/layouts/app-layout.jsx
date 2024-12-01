import React from "react";
import Header from "@/components/header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <div>
      <main className="min-h-screen container">
        <Header />
        <Outlet />
      </main>
      <div className="p-10 text-center bg-gray-800 mt-10 text-white">
        &copy; {currentYear} Made by Raviranjan kumar
      </div>
    </div>
  );
};

export default AppLayout;
