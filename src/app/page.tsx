import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PortfolioList from "@/components/portfolio/PortfolioList";
import BlogList from "@/components/blog/BlogList";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <PortfolioList/>
      {/* <BlogList/> */}
      <Footer/>
    </div>
  );
}
