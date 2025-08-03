
import type { FC } from "react";
import { Outlet } from "react-router";
import Header from "./Header";

const Layout : FC = ()=>{
  return(
    <>
    <Header />
    <main className="p-4">
        <Outlet />
    </main>
    </>
  )
}

export default Layout;
