"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href !== "/" && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <nav className="navbar w-full text-white px-8 py-4 flex justify-between items-center sticky top-0 z-50 shadow-lg">
      <h1 className="text-xl font-bold">Shivam</h1>

      <div className="space-x-6">
        <Link
          href="/"
          className={`${isActive("/")
              ? "text-white font-semibold border-b-2 border-blue-400 pb-1"
              : "text-gray-300"
            } hover:text-white transition`}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={`${isActive("/about")
              ? "text-white font-semibold border-b-2 border-blue-400 pb-1"
              : "text-gray-300"
            } hover:text-white transition`}
        >
          About
        </Link>
        <Link
          href="/projects"
          className={`${isActive("/projects")
              ? "text-white font-semibold border-b-2 border-blue-400 pb-1"
              : "text-gray-300"
            } hover:text-white transition`}
        >
          Projects
        </Link>
        <Link
          href="/contact"
          className={`${isActive("/contact")
              ? "text-white font-semibold border-b-2 border-blue-400 pb-1"
              : "text-gray-300"
            } hover:text-white transition`}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
