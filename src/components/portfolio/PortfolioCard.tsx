import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
type portfolioProps = {
  title: string;
  image: string;
  alt: string;
  description: string;
};

const PortfolioCard = ({
  title,
  image,
  description,
  alt,
}: portfolioProps) => {
  return (
    <div>
      <Card className="grid max-w-[400px] md:max-w-[400px]">
        <CardHeader>
          <CardTitle className="font-xl text-center md:font-md">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <Image src={image} alt={alt} width={400} height={400} className="w-full" />
          <CardDescription className="mt-2">{description}</CardDescription>
        </CardContent>
        <CardFooter className="items-center justify-center">
          <Button>Github</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PortfolioCard;
