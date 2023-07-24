import type { Metadata } from "next";

import AuthProvider from "@/context/AuthProvider";

import "./globals.css";

export const metadata: Metadata = {
  title: "Levian MVP",
  description:
    "Levian is a project management tool for freelancers and small teams.",
};

/**
 * @description Root layout of the public app
 * @returns {JSX.Element}
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className="max-w-2xl mx-auto">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
