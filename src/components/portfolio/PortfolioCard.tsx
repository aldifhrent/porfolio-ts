import React from "react";
import Portfolio from "@/components/Portfolio";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
type portfolioProps = {
  title: string;
  image: string;
  alt: string;
  description: string;
  onClick: () => void;
};

const PortfolioCard = ({ title, image, description, alt }: portfolioProps) => {
  return (
    <Card className="w-auto">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Image src={image} alt={alt} width={400} height={400}/>
        <CardDescription>
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default PortfolioCard;
