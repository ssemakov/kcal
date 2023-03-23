import Head from "next/head";
import Image from "next/image";
import { Accordion } from "flowbite-react";
import { Inter } from "next/font/google";
import styles from "@styles/Home.module.css";
import MacrosCalculator from "@components/MacrosCalculator";
import { getContent, ContentData } from "@lib/content";

const inter = Inter({ subsets: ["latin"] });

interface ContentProps {
  description: ContentData;
}
export async function getStaticProps(): Promise<{ props: ContentProps }> {
  const description = await getContent("app_description");

  return {
    props: {
      description,
    },
  };
}

export default function Home({ description }: ContentProps) {
  return (
    <>
      <Head>
        <title>Calories calculator</title>
        <meta name="description" content="Simple calories calculator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto px-4 sm:px-6 lg:px-44">
        <article className="prose prose-gray py-8 prose-p:indent-4">
          <h2>Prepared dish calories and macros calculator</h2>
        </article>
        <Accordion collapseAll={true} alwaysOpen={true} flush={true}>
          <Accordion.Panel className="py-0">
            <Accordion.Title>{description.title}</Accordion.Title>
            <Accordion.Content>
              <article className="prose prose-gray pt-4 prose-p:indent-4">
                <div
                  dangerouslySetInnerHTML={{ __html: description.contentHtml }}
                />
              </article>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
        <div className="pt-2 sm:pt-8">
          <MacrosCalculator />
        </div>
      </div>
    </>
  );
}
