'use client'

import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Generated by create next app",
};
type PortLayout = {
  children: React.ReactNode;
};
const layout = ({ children }: PortLayout) => {
  return <div>{children}</div>;
};

export default layout;
