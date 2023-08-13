import React from "react";
import PortfolioCard from "./PortfolioCard";
import Portfolio from "@/components/Portfolio";
import { PortfolioData } from "@/app/utils/portfolio";

type PortolioProps = {
  title: string;
  image: string;
  alt: string;
  description: string;
};

const PortfolioList = () => {
  return (
    <div className="mt-36 max-w-[1440px] justify-center p-4 items-center mx-auto max-h-fit">
      <h1 className="text-center text-4xl font-bold">Portfolio List</h1>
      <div className="grid grid-cols-3 justify-center items-center mt-12 gap-4">
        {PortfolioData.map((item: PortolioProps) => (
          <PortfolioCard
            title={item.title}
            image={item.image}
            alt={item.alt}
            description={item.description}
            onClick={() => alert("Hello")}
          />
        ))}
      </div>
    </div>
  );
};

export default PortfolioList;
