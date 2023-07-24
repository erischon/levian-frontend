"use client";

import { SessionProvider } from "next-auth/react";

/**
 * @description AuthProvider component, used to wrap the entire app with the SessionProvider
 * @version 1.0.0
 * @returns  {JSX.Element}
 */
export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return <SessionProvider>{children}</SessionProvider>;
}
