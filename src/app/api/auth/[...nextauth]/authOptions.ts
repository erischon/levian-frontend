import { Google } from "@mui/icons-material";
import type { NextAuthOptions } from "next-auth";

import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      const userInfos = {
        providerId: user.id,
        name: user.name,
        email: user.email,
        image: user.image,
        provider: account?.provider,
      };

      // Call api to create user if not exists, and get user id
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URI}/auth/signin`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userInfos),
        }
      );
      const data = await res.json();
      const userId = data.userId._id;

      // Replace user id with the one from api
      user.id = userId;

      return true;
    },
  },
};
