"use client";
import React from "react";
import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";
import { Badge } from "primereact/badge";
import { Avatar } from "primereact/avatar";
import { Button } from "primereact/button";
import { deleteCookie } from "cookies-next";
import { usePathname, useRouter } from "next/navigation";
const authRoutes = ["/login", "/signup"];
export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const isNotAuthRoute = !authRoutes.includes(pathname);

  const logoutHandler = () => {

    deleteCookie("access_token");
    deleteCookie("userId");
    
    router.push("/login");
  };

  return (
    <>
      {isNotAuthRoute && (
        <div className="card flex justify-content-end p-1">
          <Button onClick={logoutHandler} label="Logout" />
        </div>
      )}
    </>
  );
}
