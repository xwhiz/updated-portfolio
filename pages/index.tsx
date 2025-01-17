import Head from "next/head";
import type { NextPage } from "next";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Hamza's portfolio where he has feed all his professional data."
        />
        <meta
          name="keywords"
          content="Hamza, Portfolio, Developer, Developer Portfolio"
        />
        <meta name="author" content="Hamza" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Hamza</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <Header />
      <Hero />
      <Footer />
    </>
  );
};

export default Home;
