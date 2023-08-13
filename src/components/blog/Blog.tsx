import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import exampleBlog from "@/assets/exampleblog.jpg";
import exampleAuthor from "@/assets/author.jpeg";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Image from "next/image";

type blogPost = {
  title: string;
  image: string;
  post: string;
  author_name: string;
  avatar_image: string;
};
const BlogCard = ({ title, image, post, author_name, avatar_image }: blogPost) => {
  return (
    <div className="mt-36 max-w-[1440px] justify-center p-4 items-center">
      <Card className="w-9/12 items-center justify-center mx-auto">
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
          <p className="mt-10 text-justify indent-8">
           {post}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogCard;
