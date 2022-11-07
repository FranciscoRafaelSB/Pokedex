import { FC, ReactNode } from "react";

import Head from "next/head";

import { Navbar } from "../ui";

interface Props {
  children: ReactNode | JSX.Element;
  title?: string;
}
const location = typeof window !== "undefined" ? window.location.origin : null;

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title ?? "Pokemon APP"}</title>
        <meta name="author" content="Francisco Rafael" />
        <meta
          name="description"
          content={`Pokemon information about ${title}`}
        />
        <meta
          name="keywords"
          content={`pokemon, pokemon app, pokemon information, pokedex, ${title}`}
        />

        <meta property="og:title" content={`Information about ${title}`} />
        <meta property="og:description" content={`This page is about`} />
        <meta property="og:image" content={`${location}/imgs/banner.png`} />
      </Head>

      <Navbar />
      <main className="main">{children}</main>
    </>
  );
};
