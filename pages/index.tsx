import Head from "next/head";
import Image from "next/image";

import { Inter } from "next/font/google";
import styles from "@styles/Home.module.css";
import MacrosCalculator from "@components/MacrosCalculator";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Calories calculator</title>
        <meta name="description" content="Simple calories calculator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto px-4 sm:px-6 lg:px-44">
        <article className="prose prose-slate pt-4">
          <h1 className="text-3xl">Calories calculator</h1>
          <p>How it works explanation</p>
        </article>
        <MacrosCalculator />
      </div>
    </>
  );
}
