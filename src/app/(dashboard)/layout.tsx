"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useDispatch } from "react-redux";

import { setUser } from "@/redux/features/userSlice";

import Navbar from "@/components/Navbar";
import useUser from "@/hooks/useUser";
import Loader from "@/utils/Loader";

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

  if (isLoading) return <Loader />;

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
