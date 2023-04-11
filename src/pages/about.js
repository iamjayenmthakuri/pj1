import Head from "next/head";
import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <>
      <Head>
        <title>About | My Website</title>
      </Head>
      <Navbar />
      <div className="container mx-auto my-10 px-4">
        <h1 className="text-3xl font-bold mb-5">About Us</h1>
        <p className="text-lg mb-10">
          We are a small team of passionate developers who love building things
          with code. Our mission is to create beautiful and functional websites
          and applications that help our clients achieve their goals.
        </p>
        <h2 className="text-xl font-bold mb-5">Our Team</h2>
      </div>
    </>
  );
}
