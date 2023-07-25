"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { useSession } from "next-auth/react";
import { useDispatch } from "react-redux";

import { setLoggedUser } from "@/redux/features/userSlice";

/**
 * @description Navbar, header of the app
 * @returns {JSX.Element}
 */
function Navbar(): JSX.Element {
  const [currentUser, setCurrentUser] = useState();
  const { data: session } = useSession();
  const dispatch = useDispatch();

  const providerId: string = session?.user?.id!;

  useEffect(() => {
    const getCurrentUser = async (providerId: string) => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URI}/api/user/${providerId}`
      );

      if (!res.ok) throw new Error(res.statusText);

      const user = await res.json();

      setCurrentUser(user);
    };

    getCurrentUser(providerId);

    dispatch(setLoggedUser(currentUser));
  }, [providerId, currentUser, dispatch]);

  return (
    <>
      <h1 className="text-xl font-bold">
        <Link href="/dashboard">Levian</Link>
      </h1>

      <nav className="flex gap-4">
        <Link
          href="/dashboard"
          className="flex items-center gap-2 hover:text-gray-400"
        >
          Dashboard
        </Link>

        <Link href="/api/auth/signout">Logout</Link>
      </nav>
    </>
  );
}

export default Navbar;
