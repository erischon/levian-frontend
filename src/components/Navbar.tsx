import Link from "next/link";

/**
 * @description Navbar, header of the app
 * @returns {JSX.Element}
 */
function Navbar(): JSX.Element {
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
