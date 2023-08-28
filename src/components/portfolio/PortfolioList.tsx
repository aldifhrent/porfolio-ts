import React from "react";
import PortfolioCard from "./PortfolioCard";
import { PortfolioData } from "@/app/utils/portfolio";

type PortofolioProps = {
  id: number;
  title: string;
  image: string;
  alt: string;
  description: string;
};

const PortfolioList = () => {
  return (
    <div
      id="portfolio"
      className="mt-36 max-w-7xl justify-center p-4 items-center mx-auto max-h-fit"
    >
      <h1 className="font-poppins text-center text-4xl font-bold">Portfolio List</h1>
      <div className="grid grid-cols-3 sm:grid-rows-1 md:grid-rows-1 justify-center items-center mt-12 gap-4 md:grid-rows-3 sm:grid-rows-3">
        {PortfolioData.map((item: PortofolioProps) => (
          <PortfolioCard
            key={item.id}
            title={item.title}
            image={item.image}
            alt={item.alt}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default PortfolioList;
