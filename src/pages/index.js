import Link from "next/link";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import About from "./about";
import Contact from "./contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Navbar>
      <About />
      <Contact />
    </Navbar>
  );
}
