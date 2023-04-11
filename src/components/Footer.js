import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-sm">© 2023 Company Name. All rights reserved.</div>
        <div className="text-sm">
          <Link href="#" className="hover:underline">
            Terms of Use
          </Link>
          <span className="mx-2">|</span>
          <Link href="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
