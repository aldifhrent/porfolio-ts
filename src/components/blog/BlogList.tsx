import { BlogData } from "@/app/utils/blog";
import React from "react";
import BlogCard from "./Blog";

type Props = {};

const BlogList = (props: Props) => {
  return (
    <>
      <div>BlogList</div>
      <div>
        {BlogData.map((item) => (
          <BlogCard title={item.title} image={item.image} post={item.post} author_name={item.author_name} avatar_image={""} />
        ))}
      </div>
    </>
  );
};

export default BlogList;
