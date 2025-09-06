import { Outlet } from "react-router-dom";
import { Home } from "../Pages/Home/Home";
import { Navbar } from "../Shared/Navbar/Navbar";

export const Layout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};
