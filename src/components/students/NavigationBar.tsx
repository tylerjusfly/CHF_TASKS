"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";

const NavigationBar = () => {
  const pathName = usePathname();

  const auth = useAuth();

  return (
    <div className="border border-gray-600 mx-16 my-7 p-3 rounded">
      <ul className="flex flex-row gap-8">
        <Link href="/students">
          <li className={`px-2 py-1 nav-hover ${pathName === "/students" && "bg-black text-white rounded"}`}>Home</li>
        </Link>
        <Link href="/students/available">
          <li className={`px-2 py-1 nav-hover ${pathName === "/students/available" && "bg-black text-white rounded"}`}>
            Available Lessons
          </li>
        </Link>
        {/* <li className="px-2 py-1 nav-hover">Finished Lessons</li> */}
        <button onClick={auth.logout} className="px-2 py-1 nav-hover">
          LogOut
        </button>
      </ul>
    </div>
  );
};

export default NavigationBar;
