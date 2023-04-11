import Image from "next/image";
import { Inter } from "next/font/google";
import About from "./components/About/About";
import Contact from "@/pages/components/Contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div>This is Home Page</div>
    </>
  );
}
