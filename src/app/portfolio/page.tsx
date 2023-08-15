import Header from "@/components/Header";
import PortfolioList from "@/components/portfolio/PortfolioList";
import React from "react";

const PortfolioPage = () => {
  return (
    <div>
      <Header />
      <h1>
        <PortfolioList />
      </h1>
    </div>
  );
};

export default PortfolioPage;
