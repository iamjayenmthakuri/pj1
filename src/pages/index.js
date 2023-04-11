import Link from "next/link";
import Head from "next/head";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex h-screen">
        <Head>
          <title>Home | my Website </title>
        </Head>
        <div className="m-auto">
          <h1 className="text-6xl font-bold text-center">Hello World</h1>
        </div>
      </div>
    </>
  );
}
