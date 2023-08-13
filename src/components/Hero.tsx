import React from "react";
import HeroSVG from "@/assets/hero.svg";
import Image from "next/image";
import { Button } from "./ui/button";
type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="mt-24 max-w-7xl mx-auto p-4 justify-center items-center">
      {/*  */}
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 justify-between items-center">
        <div>
          <h1 className="font-poppins font-bold lg:text-4xl md:text-2xl sm:text-xl">
            Aldi Ahmad Fahrizi Ilmawan
          </h1>
          <h1 className="w-fit font-poppins text-center p-1 mt-2 mb-2 bg-black text-white dark:text-black dark:bg-white ">
            Student
          </h1>

          <p className="font-poppins whitespace-normal max-w-lg mt-2 text-md md:text-lg">
            Seorang mahasiswa yang tertarik di bidang teknologi dan
            cryptocurrency
          </p>
          <Button
            variant={"default"}
            className=" font-poppinsmt-2 mb-2 md:mt-4"
          >
            Explore
          </Button>
        </div>
        {/* Image */}
        <div className="mr-24">
          <Image src={HeroSVG} alt="Hero Image" width={500} height={400} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
