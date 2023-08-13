"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu } from "lucide-react";
import { ThemeButton } from "./ThemeButton";

const Header = () => {
  const pathname = usePathname();
  const isActive = (href: string) => {
    return pathname === href ? "font-bold" : "";
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="fixed inset-0 max-w-[1440px] max-h-fit mx-auto p-4 ">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="font-bold border border-black w-24 h-auto  border-r-4 border-b-4 rounded-lg text-center dark:border-white">
          <h1 className="">fhr</h1>
        </div>
        {/* Mobile Button */}
        <div className="cursor-pointer lg:hidden md:inline-block sm:inline-block">
          <button onClick={toggleOpen}>
            <Menu />
          </button>
        </div>
        {/* Menu */}
        <nav
          className={`lg:flex gap-4 items-center md:hidden sm:hidden ${
            isOpen ? "bg-black w-24 h-full" : ""
          }`}
        >
          <ThemeButton />
          <Link href="/" className={` hover:text-gray-500 ${isActive("/")}`}>
            Home
          </Link>
          <Link
            href="/portfolio"
            className={` hover:text-gray-500 ${isActive("/portfolio")}`}
          >
            Porfolio
          </Link>
          <Link
            href="/blog"
            className={` hover:text-gray-500 ${isActive("/blog")}`}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className={` hover:text-gray-500 ${isActive("/contact")}`}
          >
            Contact
          </Link>
          {/*  */}
        </nav>
      </div>
    </div>
  );
};

export default Header;
