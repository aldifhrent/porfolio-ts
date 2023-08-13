import React from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog",
    description: "Generated by create next app",
  };
type BlogLayout = {
    children: React.ReactNode
}

const layout = ({children}: BlogLayout) => {
  return (
    <div>{children}</div>
  )
}

export default layout