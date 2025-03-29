import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./components/navigation/Header";
import { Footer } from "./components/navigation/Footer";

const base = "bg-gray-900 min-h-screen text-gray-200";
const small = "max-md:grid max-md:grid-rows-[auto_1fr_auto]";
const big = "md:grid md:grid-cols-[auto_1fr_auto]";

export const AppLayout = () => {
  return (
    <div className={`${base} ${small} ${big}`}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
