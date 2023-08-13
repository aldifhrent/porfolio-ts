import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PortfolioList from "@/components/portfolio/PortfolioList";
import BlogList from "@/components/blog/BlogList";
export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <PortfolioList/>
      <BlogList/>
    </div>
  );
}
