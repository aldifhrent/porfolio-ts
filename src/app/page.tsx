"use client";

import Hero from "@/components/Hero";
import Header from "@/components/Header";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Portfolio",
  description: "Generated by create next app",
};
export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
    </div>
  );
}
