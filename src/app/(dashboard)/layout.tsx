import Navbar from "@/components/Navbar";

/**
 * @description Main layout of the protected app
 * @returns {JSX.Element}
 */
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
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
