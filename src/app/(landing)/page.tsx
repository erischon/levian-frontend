import Link from "next/link";

import Button from "@/components/Button";

/**
 * @description Home page, displayed when the user is not logged in
 * @returns {JSX.Element}
 */
export default async function Home(): Promise<JSX.Element> {
  return (
    <main className="w-full h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-semibold mb-4">Bienvenue sur Levian !</h1>
      <h2 className="font-semibold text-xl mb-4">
        Outil de gestion du temps pour les indépendants
      </h2>
      <Link href="/api/auth/signin">
        <Button>Sign in</Button>
      </Link>

      <Link href="/api/auth/signout">
        <Button>Logout</Button>
      </Link>
    </main>
  );
}
