import Head from "next/head";
import type { NextPage } from "next";
import Header from "../components/Header";
import Image from "next/image";
import Link from "next/link";

type Project = {
  image: string;
  title: string;
  description: string;
  link: string;
};

const Home: NextPage = () => {
  const projects: Project[] = [
    {
      image: "/pranary.png",
      title: "Pranary",
      description:
        "A landing page for a business company that teaches and helps with Marketing, and Funding with AI.",
      link: "http://ec2-34-203-212-229.compute-1.amazonaws.com:3000",
    },
    {
      image: "/sentinel.png",
      title: "Sentinel AI",
      description:
        "A landing page for Sentinel AI, which is a security intelligence company that provides security services using cutting edge AI.",
      link: "https://sentinel-website.vercel.app",
    },
    {
      image: "/natours.png",
      title: "Natours",
      description:
        "Website for an imaginary tourism company with beautiful and sleek design. It utilizes Skewmorphism for creating of a very beautiful UI and UX.",
      link: "https://natours-projects.netlify.app",
    },
    {
      image: "/onehealth.png",
      title: "One Health Orginization",
      description:
        "The Molecular Parasitology & One Health Laboratory is a research-based laboratory that is working on the molecular epidemiology of parasitic diseases of animals and humans.",
      link: "http://one-health-official.vercel.app",
    },
    {
      image: "/omnifood.png",
      title: "Omnifood",
      description:
        "A website concept for an imaginary restaurant named Omnifood. It has food delivery service which is available 24/7.",
      link: "https://omnifood-design.netlify.app",
    },
    {
      image: "/furniture-store-img.JPG",
      title: "Woodie Furniture Store",
      description:
        "Website concept for a simple Furniture Store. They offer different variety of furniture and deliver them freely with money back guarantees.",
      link: "https://furniture-store-ws.netlify.app",
    },
    {
      image: "/business-site-img.JPG",
      title: "Innomerce",
      description:
        "Website concept for business consultation business that provides services like auditing, legal and financial advice, Marketing reserach, and investments.",
      link: "https://ws-bussiness-home-page.netlify.app",
    },
    {
      image: "/quiz-app.png",
      title: "Quizzacle",
      description:
        "A Quiz application that dynamically fetch questions from an questions API based on provided difficulty, category, and question types.",
      link: "https://quizzical-by-hamza.vercel.app",
    },
    {
      image: "/weather-app-img.JPG",
      title: "Weather App",
      description:
        "A simple weather application that asks for GPS location and based on those coordinates, it fetches weather data. That weather data is then presented with beautiful icon and background image.",
      link: "https://h-react-weather-app.netlify.app",
    },
  ];

  const experiences: { title: string; duration: string; skills: string[] }[] = [
    {
      title: "SWE",
      duration: "Jun 2024-Present",
      skills: [
        "Swift",
        "SwiftUI",
        "React",
        "Next.js",
        "MongoDB",
        "Deployment",
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
      ],
    },
    {
      title: "Junior SWE",
      duration: "Sep 2023-Feb 2024",
      skills: [
        "Computer Vision",
        "Machine Learning",
        "Deep Learning",
        "Next.js",
        "MERN Stack",
        "JavaScript",
        "TypeScript",
      ],
    },
    {
      title: "SWE Intern",
      duration: "Jun 2023-Aug 2023",
      skills: [
        "Computer Vision",
        "Machine Learning",
        "Deep Learning",
        "Next.js",
        "MERN Stack",
        "JavaScript",
        "TypeScript",
      ],
    },
  ];

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

      <header className="container mx-auto p-4 flex flex-col gap-6 mb-10 md:mb-4 md:flex-row md:p-8 md:py-32">
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
      </header>

      <section id="work" className="p-4 md:p-8 bg-[#f5f5f0]">
        <div className="container mx-auto">
          <h2 className="text-3xl mb-6 md:text-4xl md:mb-8">Projects</h2>

          <div className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-2 my-4 mb-6">
            {projects.map((project, i) => (
              <Project key={i} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section id="work-experience" className="p-4 md:p-8 bg-[#f5f5f0]">
        <div className="container mx-auto">
          <h2 className="text-3xl mb-6 md:text-4xl md:mb-8">
            Work Experience & Skills
          </h2>

          <div className="grid grid-cols-1 my-4 mb-6">
            {experiences.map(({ duration, title, skills }, i) => (
              <Experience
                key={i}
                duration={duration}
                title={title}
                skills={skills}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="social"></section>
    </>
  );
};

function Project({ project }: { project: Project }) {
  return (
    <article className="w-full bg-white border border-gray-200 rounded-xl shadow p-4">
      <a
        href={project.link}
        target="_blank"
        rel="noreferrer"
        className="border border-gray-100 flex items-center justify-center rounded-lg overflow-hidden"
      >
        <Image
          className="block object-cover"
          src={project.image}
          width={641}
          height={376}
          alt={project.title}
        />
      </a>
      <div className="mt-5">
        <a href="#">
          <h3 className="mb-2 text-2xl md:text-3xl md:mb-4 font-bold tracking-tight text-gray-900">
            {project.title}
          </h3>
        </a>
        <p className="mb-3 font-normal text-gray-700">{project.description}</p>
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Visit the website
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </article>
  );
}

function Experience({
  duration,
  title,
  skills,
}: {
  duration: string;
  title: string;
  skills: string[];
}) {
  return (
    <div className="w-full p-6 bg-white border border-gray-200 flex flex-col gap-4 items-center md:flex-row">
      <p className="flex-1 mb-3 font-normal text-gray-700">{duration}</p>
      <h5 className="flex-1 mb-2 text-2xl tracking-tight text-gray-900">
        {title}
      </h5>
      <ul className="flex-1 flex flex-row flex-wrap gap-4">
        {skills.map((s, i) => (
          <li key={i} className="text-gray-600">
            {s}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
