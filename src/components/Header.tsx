"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  Cloud,
  CreditCard,
  Edit,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  Menu,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";
import { ThemeButton } from "./ThemeButton";
import Link from "next/link";
import { X } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { signIn, signOut, useSession } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();

  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const pathname = usePathname();
  const isActive = (href: string) => {
    return pathname === href ? "font-bold" : "";
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById("portfolio");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div
      className={`fixed inset-0 max-w-7xl max-h-fit mx-auto p-4 ${
        isScrolled ? " " : ""
      }`}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div
          className={`animate-bounce cursor-pointer text-center border-r-4 border-b-4  font-bold w-24 rounded-lg h-auto border  ${
            isScrolled ? " bg-black border-white text-white" : "border-black "
          }`}
        >
          <h1 className="font-poppins">fhr</h1>
        </div>
        {/* Menu */}
        <nav className="hidden lg:flex gap-4 items-center text-center font-poppins">
          <ThemeButton />
          <Link href="/" className={` hover:text-gray-500 ${isActive("/")}`}>
            Home
          </Link>
          <Link
            href="/portfolio "
            id="portfolio"
            onClick={scrollToPortfolio}
            className={` hover:text-gray-500 ${isActive("/portfolio")}`}
          >
            Portfolio
          </Link>
          <Link
            href="/portfolio"
            className={` hover:text-gray-500 ${isActive("/portfolio")}`}
          />
          {/* <Link
            href="/blog"
            className={` hover:text-gray-500 ${isActive("/blog")}`}
          >
            Blog
          </Link> */}
          {/* <Link
            href="/contact"
            className={` hover:text-gray-500 ${isActive("/contact")}`}
          >
            Contact
          </Link> */}

          {!session?.user ? (
            <Link href="/login">
              <Button>Login</Button>
            </Link>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="cursor-pointer">
                {session?.user.image ? (
                  <Avatar>
                    <AvatarImage src={session.user.image} />
                  </Avatar>
                ) : (
                  <Avatar>
                    <AvatarFallback>NONE</AvatarFallback>
                  </Avatar>
                )}
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>{session.user.name}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem disabled className="cursor-pointer">
                    <User className="mr-2 h-4 w-4" />
                    <span>Edit Profile</span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <Link href="/dashboard">
                    <DropdownMenuItem>
                      <UserPlus className="mr-2 h-4 w-4" />
                      <span>Dashboard</span>
                    </DropdownMenuItem>
                  </Link>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => signOut()}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </nav>
        <div onClick={toggleOpen} className="cursor-pointer lg:hidden">
          {isOpen ? <X /> : <Menu />}
        </div>

        {isOpen && (
          <nav className="absolute grid grid-rows top-0 right-0  w-48 bg-black h-screen lg:hidden">
            <ThemeButton />
            <Link href="/" className={` hover:text-gray-500 ${isActive("/")}`}>
              Home
            </Link>
            <Link
              href="/portfolio "
              id="portfolio"
              onClick={scrollToPortfolio}
              className={` hover:text-gray-500 ${isActive("/portfolio")}`}
            >
              Portfolio
            </Link>
            <Link
              href="/portfolio"
              className={` hover:text-gray-500 ${isActive("/portfolio")}`}
            />
          </nav>
        )}
      </div>
    </div>
  );
};

export default Header;
