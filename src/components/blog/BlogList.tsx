import { BlogData } from "@/app/utils/blog";
import React from "react";
import BlogCard from "./Blog";

type Props = {};

const BlogList = (props: Props) => {
  return (
    <>
      <h1>BlogList</h1>
      <div>
        {BlogData.map((item) => (
          <BlogCard key={item.id} title={item.title} image={item.image} post={item.post} author_name={item.author_name} avatar_image={""} slug={item.slug} />
        ))}
      </div>
    </>
  );
};

export default BlogList;
