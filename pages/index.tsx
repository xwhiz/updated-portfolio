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

      <section
        id="social"
        className="flex flex-col gap-6 justify-center items-center p-6"
      >
        <p className="text-gray-600">Want to talk to me?</p>
        <h2 className="text-3xl text-gray-900">Let&apos;s Connect</h2>
        <ul className="flex flex-row justify-center items-center">
          <li>
            <a
              className="flex flex-col justify-center items-center hover:underline"
              href="https://www.linkedin.com/in/whiz-hamza"
              rel="noreferrer"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 48 48"
                className="h-8"
              >
                <path
                  fill="#0078d4"
                  d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"
                ></path>
                <path
                  d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z"
                  opacity=".05"
                ></path>
                <path
                  d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z"
                  opacity=".07"
                ></path>
                <path
                  fill="#fff"
                  d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"
                ></path>
              </svg>
              <p>LinkedIn</p>
            </a>
          </li>
          <li>
            <a
              className="flex flex-col justify-center items-center hover:underline"
              href="https://github.com/xwhiz"
              rel="noreferrer"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 30 30"
                className="h-8"
              >
                <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
              </svg>
              <p>Github</p>
            </a>
          </li>
        </ul>
      </section>

      <footer className="border-gray-200">
        <div className="container mx-auto flex flex-wrap items-center justify-between p-4">
          <Link href="/">
            <div className="flex items-center justify-start">
              <Image
                src="/logo.png"
                className="h-8"
                width={60}
                height={60}
                alt="Logo"
              />
              <span className="text-2xl font-semibold whitespace-nowrap ml-0 pl-0">
                Hamza
              </span>
            </div>
          </Link>
          <div className={`w-full md:w-auto`}>
            <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 hover:bg-gray-100 rounded md:bg-transparent md:hover:text-blue-700 md:hover:bg-transparent"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#work"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#work-experience"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700"
                >
                  Work Experience
                </a>
              </li>
              <li>
                <a
                  href="#social"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700"
                >
                  Connect
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
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
