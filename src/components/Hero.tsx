import React from "react";
import HeroSVG from "@/assets/hero.svg";
import Image from "next/image";
import { Button } from "./ui/button";
type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="mt-24 max-w-[1440px] mx-auto p-4 max-h-fit">
      {/*  */}
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 justify-between items-center ml-24 1">
        <div>
          <h1 className="font-bold lg:text-4xl md:text-2xl sm:text-xl">
            Aldi Ahmad Fahrizi Ilmawan
          </h1>
          <h1 className="w-14 text-center p-1 mt-2 mb-2 bg-white text-black dark:text-white dark:bg-black ">
            Intern
          </h1>

          <p className="whitespace-normal max-w-lg mt-2 text-md md:text-lg">
            Seorang mahasiswa yang tertarik di bidang teknologi dan cryptocurrency
          </p>
          <Button variant={"default"} className=" mt-2 mb-2 md:mt-4">
            Explore
          </Button>
        </div>
        {/* Image */}
        <div className="mr-24">
          <Image src={HeroSVG} alt="Hero Image" width={400} height={400} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
