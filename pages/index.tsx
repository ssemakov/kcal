import Head from "next/head";
import Image from "next/image";

import { Inter } from "next/font/google";
import styles from "@components/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Simple calories calculator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="bg-teal-600 font-mono text-3xl">Hello world!</h1>
      <div className="p-4 pt-2">Hello</div>
    </>
  );
}
