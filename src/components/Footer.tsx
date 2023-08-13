import React from "react";
import { Instagram } from "lucide-react";
import { Github } from "lucide-react";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="mt-48 max-w[1440px] w-full h-24 bg-black ">
      {/*  */}
      <div className="flex gap-4 items-center justify-center">
        <Link href="https://www.instagram.com/aldifhrent" target="_blank">
          <Instagram color="white" />
        </Link>
        <Link href="https://www.github.com/faraygd" target="_blank">
          <Github color="white" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
