import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-black text-white px-8 py-4 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-xl font-bold">Shivam</h1>

      <div className="space-x-6">
        <Link href="/" className="hover:text-gray-300">
          Home
        </Link>
        <Link href="/about" className="hover:text-gray-300">
          About
        </Link>
        <Link href="/projects" className="hover:text-gray-300">
          Projects
        </Link>
        <Link href="/contact" className="hover:text-gray-300">
          Contact
        </Link>
      </div>
    </nav>
  );
}
