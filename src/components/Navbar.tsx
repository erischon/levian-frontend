"use client";

import { use } from "react";
import Link from "next/link";

import { useSession } from "next-auth/react";
import { useDispatch } from "react-redux";

import { setLoggedUser } from "@/redux/features/userSlice";
import { getUser } from "@/lib/getUser";

/**
 * @description Navbar, header of the app
 * @returns {JSX.Element}
 */
function Navbar(): JSX.Element {
  const { data: session } = useSession();
  const dispatch = useDispatch();

  const providerId = session?.id;

  // get user data
  const currentUser = use(getUser(providerId));

  dispatch(setLoggedUser(currentUser));

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
