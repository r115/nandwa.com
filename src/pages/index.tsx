import { type NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import { capture } from "@nandwa/utils/analytics";

const Home: NextPage = () => {
  useEffect(() => {
    if (window.location.host !== "localhost:3000") {
      capture("pageview", { url: window.location.pathname });
    }
  }, []);

  return (
    <>
      <Head>
        <title>Bernard Nandwa</title>
        <meta name="description" content="ramblings from an internet newbie" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#262325]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Bernard Nandwa
          </h1>
        </div>
      </main>
    </>
  );
};

export default Home;
