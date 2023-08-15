"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { signIn } from "next-auth/react";
import { Input } from "@/components/ui/input";
import { Github } from "lucide-react";
import Header from "@/components/Header";

const Loginpage = () => {
  return (
    <>
      <Header />
      <div className="max-w-7xl mt-28 items-center justify-center mx-auto">
        <h1 className="text-6xl font-bold uppercase text-center mb-24">Login</h1>
        <form className="flex-col justify-center items-center">
          <Input type="email" placeholder="Email" width={30} className="mb-12"/>
          <Input type="password" placeholder="password" className="mb-12"/>
          <Button className="justify-center">Login</Button>
        </form>
        <hr className="mb-12"/>
        <div className="flex max-w-xl">
          <Button
            className="w-full"
            onClick={() =>
              signIn("github", {
                callbackUrl: "/",
              })
            }
          >
            <Github />
            Sign in Github
          </Button>
        </div>
      </div>
    </>
  );
};

export default Loginpage;
