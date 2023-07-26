"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useDispatch } from "react-redux";
import FadeLoader from "react-spinners/FadeLoader";

import { setUser } from "@/redux/features/userSlice";

import Navbar from "@/components/Navbar";
import useCurrentUser from "@/hooks/useCurrentUser";

/**
 * @description Main layout of the protected app
 * @returns {JSX.Element}
 */
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const { data: session } = useSession();
  const { data, isLoading, isError } = useCurrentUser(session?.user?.id!);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUser(data));
  }, [data, dispatch]);

  if (isLoading)
    return (
      <section className="flex flex-col justify-center items-center w-full h-[calc(100vh-80px)]">
        <FadeLoader color={"#818cf8"} />
      </section>
    );

  return (
    <div className="mx-4 my-4">
      <header className="flex justify-between items-center mb-4">
        <Navbar />
      </header>

      <main>{children}</main>

      <footer></footer>
    </div>
  );
}
