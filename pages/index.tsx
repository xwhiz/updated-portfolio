import Head from "next/head";
import type { NextPage } from "next";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Image from "next/image";
import Link from "next/link";

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

      <div className="container mx-auto p-4 flex flex-col gap-6 mb-10 md:mb-4 md:flex-row md:p-8 md:py-32">
        <div className="flex gap-4 flex-col flex-1">
          <div className="h-14 w-14 rounded-full overflow-hidden border">
            <Image
              src="/me.png"
              width={80}
              height={80}
              alt="My Image"
              className="block w-12 h-12 rounded-full"
            />
          </div>
          <h1 className="text-3xl leading-tight text-gray-800 max-w-[20ch] lg:text-4xl">
            Hello! I&apos;m Muhammad Hamza
          </h1>
        </div>

        <div className="flex-1">
          <h2 className="text-2xl mb-2 md:text-3xl">Software Developer</h2>
          <p className="text-gray-600 mb-8 max-w-prose text-sm">
            Passionate Software developer with interest in building highly
            efficient user experiences.
          </p>

          <Link href="/#work">
            <a className="leading-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
              See my work
            </a>
          </Link>

          <a
            type="button"
            className="border leading-none text-gray-800 border-gray-300 hover:text-white hover:bg-gray-800 transition-colors duration-300 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            href="https://www.linkedin.com/in/whiz-hamza/"
            target="_blank"
            rel="noreferrer"
          >
            Connect with me
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
