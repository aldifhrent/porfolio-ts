import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
type blogPost = {
  title: string;
  image: string;
  post: string;
  author_name: string;
  avatar_image: string;
  slug: string;
};
const BlogCard = ({
  title,
  image,
  post,
  author_name,
  avatar_image,
  slug,
}: blogPost) => {
  return (
    <div className="flex mb-4 items-center justify-center mx-auto">
        <Card className="w-[400px]">
          <CardHeader>
            <CardTitle className="text-center">{title}</CardTitle>
            <div className="flex items-center mt-4">
              <Avatar>
                {avatar_image ? (
                  <AvatarImage src={avatar_image} width={20} height={20} />
                ) : (
                  <AvatarFallback>CN</AvatarFallback>
                )}
              </Avatar>
              <h1 className="ml-2">{author_name}</h1>
            </div>
          </CardHeader>
          <CardContent>
            <Image
              src={image}
              alt="Example Blog"
              width={300}
              height={300}
              className="w-full h-[300px] object-cover mt-4"
            />
            <p className="mt-10 text-justify indent-8">{post}</p>
          </CardContent>
          <CardFooter>
            <Link href={`/blog/${slug}`}>
              <Button>Read More</Button>
            </Link>
          </CardFooter>
        </Card>
    </div>
  );
};

export default BlogCard;
