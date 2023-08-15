import React, { useEffect } from "react";
import HeroSVG from "@/assets/hero.svg";
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Hero = () => {
  useEffect(() => {
    AOS.init();
  })
  return (
    <div className="mt-24 max-w-6xl mx-auto" data-aos="fade-left">
      {/*  */}
      <div className="grid md:grid-cols-2 sm:grid-cols-1 justify-between items-center md:ml-4 sm:ml-4">
        <div>
          <h1 className="font-poppins font-bold lg:text-4xl md:text-2xl sm:text-xl">
            Aldi Ahmad Fahrizi Ilmawan
          </h1>
          <h1 className="w-fit font-poppins text-center p-2 mt-2 mb-2 bg-black text-white dark:text-black dark:bg-white ">
            Student
          </h1>

          <p className="font-poppins whitespace-normal max-w-lg mt-2 text-md md:text-lg">
            Seorang mahasiswa yang tertarik di bidang teknologi dan
            cryptocurrency
          </p>
          {/* <Button
            variant={"default"}
            className=" font-poppinsmt-2 mb-2 md:mt-4"
          >
            Explore
          </Button> */}
        </div>
        {/* Image */}
        <Image src={HeroSVG} alt="Hero Image" width={400} height={400} className=""/>
      </div>
    </div>
  );
};

export default Hero;
