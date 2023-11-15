"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavigationBar = () => {
  const pathName = usePathname();

  console.log(pathName, "kddk");

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
        <li className="px-2 py-1 nav-hover">Finished Lessons</li>
      </ul>
    </div>
  );
};

export default NavigationBar;
