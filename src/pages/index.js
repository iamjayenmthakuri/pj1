import Link from "next/link";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });
const loaderProp = (src) => {
  return src;
};

export default function Home() {
  const [model, setModel] = useState(false);
  const [data, setData] = useState([]);
  const handleChange = () => {
    setModel(true);
  };

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UClFO6ULKU2XXQ_zb76JMUPQ&maxResults=10&key=AIzaSyBXZNqmoWyjokdweat6VU0tzCBcHhnEOK4`
      );
      const data = await response.json();

      setData(data);
    }

    fetchData();
  }, []);
  console.log(data, "jhsdasg");
  return (
    <>
      <Navbar />
      <div className="flex h-screen">
        <Head>
          <title>Home | my Website </title>
        </Head>
        <div className="m-auto">
          <div>
            {data?.items?.map((item) => (
              // <Link href="/movies" state={{ content: item.snippet.thumbnails }}>
              <div key={item.id}>
                <button className="bg-black text-white" onClick={handleChange}>
                  {item.snippet.channelTitle}
                </button>
              </div>
              // </Link>
            ))}
          </div>

          <h1 className="text-6xl font-bold text-center">Hello World</h1>

          {model && (
            <div>
              {data?.items?.map((item) => {
                return (
                  <div key={item.id}>
                    <Image
                      src={`${item.snippet.thumbnails.high.url}`}
                      alt="jksdh"
                      width={100}
                      height={100}
                      loader={loaderProp}
                      unoptimized
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
