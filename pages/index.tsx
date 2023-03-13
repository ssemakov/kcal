import Head from "next/head";
import Image from "next/image";

import { Inter } from "next/font/google";
import styles from "@styles/Home.module.css";
import Button from "@components/Button";
import Input from "@components/Input";
import WeightUnitsAdornment from "@components/WeightUnitsAdornment";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Simple calories calculator</title>
        <meta name="description" content="Simple calories calculator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <article className="prose prose-slate pt-4">
          <h1 className="text-3xl">Calories calculator</h1>
          <p>How it works explanation</p>
        </article>

        <div className="py-5 sm:py-6">
          <div className="grid grid-cols-1 gap-5">
            <Input
              id="prepared_weight"
              placeholder="0.0"
              label="Total cooked weight"
              Adornment={WeightUnitsAdornment}
            />
            <Input id="kcal" placeholder="0.0" label="Total calories" />
            <Input id="protein" placeholder="0.0" label="Protein" />
            <Input id="carbs" placeholder="0.0" label="Carbs" />
            <Input id="fat" placeholder="0.0" label="Fat" />
            <div className="py-8">
              <Button type="submit" title="Calculate" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
