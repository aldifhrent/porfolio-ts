import React from "react";
import Link from "next/link";
import { Github, Instagram, Linkedin } from "lucide-react";


const SocialMedia = () => {
  return (
    <div className="w-12 h-48 gap-y-6 grid place-items-center fixed top-[35%] left-0 transform  bg-black dark:bg-white ">
      <div className="text-white dark:text-black">
        <div className="mb-6">
          <Link href="https://github.com/faraygd" target="_blank">
            <Github />
          </Link>
        </div>
        <div className="mb-6">
          <Link href="https://instagram.com/aldifhrent" target="_blank">
            <Instagram />
          </Link>
        </div>
        <div>
          <Link href="https://www.linkedin.com/in/aldi-ahmad-fahrizi-ilmawan-b46328224/" target="_blank">
            <Linkedin/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
