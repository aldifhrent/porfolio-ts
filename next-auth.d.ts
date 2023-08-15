import NextAuth from "next-auth"

declare module "next-auth" {
  interface User {
    name: string
  }

  interface Session {
    user: {
      image: string;
      name: string
    }
  }
}