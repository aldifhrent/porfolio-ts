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
  slug: string;
};

const PortfolioCard = ({ title, image, description, alt, slug}: portfolioProps) => {
  return (
    <Card className="max-w-[400px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Image src={image} alt={alt} width={400} height={400} />
        <CardDescription className="mt-2">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Link href={`portfolio/${slug}`}>
          <Button className="w-full">Read More</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default PortfolioCard;
