"use client";

import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import SessionNextProvider from "@/components/SessionNextProvider";
import SocialMedia from "@/components/SocialMedia";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SessionNextProvider>
            {children}
            <SocialMedia />
          </SessionNextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
