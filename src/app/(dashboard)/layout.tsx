"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useDispatch } from "react-redux";
import BarLoader from "react-spinners/BarLoader";

import { setUser } from "@/redux/features/userSlice";

import Navbar from "@/components/Navbar";
import useUser from "@/hooks/useUser";

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
  const { user, isLoading, isError } = useUser(session?.user?.id!);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUser(user));
  }, [user, dispatch]);

  if (isLoading)
    return (
      <section className="flex flex-col justify-center items-center w-full h-[calc(100vh-80px)]">
        <BarLoader color={"#818cf8"} />
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
