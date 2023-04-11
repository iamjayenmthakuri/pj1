import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo or website name */}
          <div className="flex-shrink-0">
            <Link href="/" legacyBehavior>
              <a className="text-white font-bold text-xl">First !</a>
            </Link>
          </div>
          {/* Navigation links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline">
              <Link href="/" legacyBehavior>
                <a className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-300 focus:outline-none focus:text-gray-300">
                  Home
                </a>
              </Link>
              <Link href="/about" legacyBehavior>
                <a className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-300 focus:outline-none focus:text-gray-300">
                  About
                </a>
              </Link>
              <Link href="/contact" legacyBehavior>
                <a className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-300 focus:outline-none focus:text-gray-300">
                  Contact
                </a>
              </Link>
            </div>
          </div>
          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
              aria-label="Main menu"
              aria-expanded="false"
            >
              <svg
                className="block h-6 w-6"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
              </svg>
              <svg
                className="hidden h-6 w-6"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
