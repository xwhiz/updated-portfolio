import Image from "next/image";

import CopyEmail from "@/components/CopyEmail";
import LocalTime from "@/components/LocalTime";
import SiteHeader from "@/components/SiteHeader";
import {
  caseStudies,
  certifications,
  education,
  hostOf,
  jobs,
  links,
  profile,
  projects,
  stack,
  stats,
  type CaseStudy,
  type Project,
} from "@/lib/data";
import portrait from "@/public/me.png";

const pad = (n: number) => String(n).padStart(2, "0");

export default function Home() {
  return (
    <>
      <a
        href="#work"
        className="sr-only z-50 bg-signal px-4 py-2 font-medium focus:not-sr-only focus:fixed focus:top-2 focus:left-2"
      >
        Skip to work
      </a>
      <SiteHeader />

      <main>
        <Hero />
        <Stats />
        <Marquee items={stack} />
        <Work />
        <SideProjects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

function Hero() {
  return (
    <section id="top" className="grid border-b-2 border-ink md:grid-cols-12">
      <div className="flex flex-col justify-between gap-16 p-4 md:col-span-8 md:p-8">
        <div className="flex flex-wrap justify-between gap-2">
          <p className="label">{profile.headline}</p>
          <p className="label text-mute">
            {profile.location} · <LocalTime />
          </p>
        </div>
        <h1 className="font-narrow text-[clamp(4rem,19vw,12rem)] font-black uppercase leading-[0.8] tracking-[-0.02em] md:text-[clamp(4rem,11.5vw,12rem)]">
          Muhammad
          <br />
          Hamza<span className="text-signal">.</span>
        </h1>
      </div>

      <figure className="relative border-t-2 border-ink bg-signal md:col-span-4 md:border-t-0 md:border-l-2">
        <Image
          src={portrait}
          alt="Portrait of Muhammad Hamza"
          preload
          sizes="(min-width: 768px) 33vw, 100vw"
          className="aspect-square h-full w-full object-cover object-top contrast-125 grayscale mix-blend-multiply"
        />
        <figcaption className="label absolute bottom-0 left-0 border-t-2 border-r-2 border-ink bg-paper px-3 py-2">
          Fig. 01 — Me
        </figcaption>
      </figure>

      <div className="grid border-t-2 border-ink md:col-span-12 md:grid-cols-12">
        <div className="p-4 md:col-span-7 md:p-8">
          <p className="text-xl leading-snug md:text-2xl">
            Curiosity took me from iOS to full-stack web, backend systems and
            ML. I&apos;ve shipped identity-verification SDKs, a retail platform
            for one of Qatar&apos;s largest chains, and real-time surveillance
            software.
          </p>
          <p className="label mt-6 flex items-center gap-2">
            <span className="size-2 bg-signal" aria-hidden="true" />
            Now: Software Engineer at {profile.current}
          </p>
        </div>
        <div className="grid grid-cols-2 border-t-2 border-ink md:col-span-5 md:border-t-0 md:border-l-2">
          <a
            href="#work"
            className="group flex flex-col justify-between gap-8 bg-ink p-4 text-paper hover:bg-signal hover:text-ink md:p-6"
          >
            <span className="label">01</span>
            <span className="flex items-end justify-between text-lg font-bold md:text-xl">
              See the work
              <Arrow className="rotate-90 transition-transform group-hover:translate-y-1" />
            </span>
          </a>
          <a
            href={links.email}
            className="group flex flex-col justify-between gap-8 border-l-2 border-ink p-4 hover:bg-signal md:p-6"
          >
            <span className="label">Email</span>
            <span className="flex items-end justify-between text-lg font-bold md:text-xl">
              Get in touch
              <Arrow className="-rotate-45 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <dl className="grid grid-cols-2 border-b-2 border-ink md:grid-cols-4">
      {stats.map((s, i) => (
        <div
          key={s.label}
          className={`flex flex-col justify-between gap-6 p-4 md:p-8 ${i % 2 ? "border-l-2" : ""} ${i > 1 ? "border-t-2 md:border-t-0" : ""} border-ink md:border-l-2 md:first:border-l-0`}
        >
          <dt className="label order-2 max-w-[22ch] text-mute">{s.label}</dt>
          <dd className="order-1 font-narrow text-6xl font-black leading-none md:text-7xl">{s.value}</dd>
        </div>
      ))}
    </dl>
  );
}

function Marquee({ items }: { items: string[] }) {
  const row = (hidden?: boolean) => (
    <ul aria-hidden={hidden} className="flex shrink-0 items-center">
      {items.map((item) => (
        <li key={item} className="flex items-center">
          <span className="px-6 font-wide text-lg font-bold uppercase md:text-xl">{item}</span>
          <span className="text-signal">✱</span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="overflow-hidden border-b-2 border-ink bg-ink py-3 text-paper">
      <div className="flex w-max animate-marquee">
        {row()}
        {row(true)}
      </div>
    </div>
  );
}

function SectionHead({ index, title, aside }: { index: string; title: string; aside?: string }) {
  return (
    <div className="grid grid-cols-[auto_1fr_auto] items-end border-b-2 border-ink">
      <span className="label self-stretch border-r-2 border-ink p-4 md:px-8">{index}</span>
      <h2 className="px-4 pt-6 pb-2 font-narrow text-[clamp(3rem,9vw,8rem)] font-black uppercase leading-[0.85] md:px-8">
        {title}
      </h2>
      {aside && <span className="label p-4 text-mute md:px-8">{aside}</span>}
    </div>
  );
}

function Chips({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li key={item} className="border-2 border-ink px-2 py-0.5 font-mono text-xs">
          {item}
        </li>
      ))}
    </ul>
  );
}

function Work() {
  return (
    <section id="work" className="border-b-2 border-ink">
      <SectionHead index="01" title="Selected work" aside={`(${pad(caseStudies.length)})`} />
      <ol>
        {caseStudies.map((study, i) => (
          <CaseStudyRow key={study.title} study={study} index={i + 1} />
        ))}
      </ol>
    </section>
  );
}

function CaseStudyRow({ study, index }: { study: CaseStudy; index: number }) {
  const featured = index === 1;

  return (
    <li className="grid gap-6 border-b-2 border-ink p-4 last:border-b-0 md:grid-cols-12 md:gap-8 md:p-8">
      <span className="label text-mute md:col-span-1">{pad(index)}</span>

      <div className="flex flex-col gap-5 md:col-span-6">
        <p className="label">
          {study.org} <span className="text-mute">/ {study.period}</span>
        </p>
        <h3 className="font-narrow text-5xl font-black uppercase leading-[0.9] md:text-6xl">{study.title}</h3>
        <p className="max-w-prose text-lg leading-relaxed">{study.summary}</p>
        {study.points.length > 0 && (
          <ul className="max-w-prose space-y-2">
            {study.points.map((point) => (
              <li key={point} className="grid grid-cols-[1.25rem_1fr] leading-relaxed">
                <span className="text-signal" aria-hidden="true">
                  —
                </span>
                {point}
              </li>
            ))}
          </ul>
        )}
        <div className="mt-auto pt-2">
          <Chips items={study.stack} />
        </div>
      </div>

      <div
        className={`flex min-h-48 flex-col md:min-h-64 border-2 border-ink md:col-span-5 ${featured ? "bg-signal text-ink" : "bg-ink text-paper"}`}
      >
        {study.modules ? (
          <ul className="grid flex-1 grid-cols-2">
            {study.modules.map((m, i) => (
              <li
                key={m}
                className={`flex flex-col justify-between gap-6 p-4 md:p-6 ${i % 2 ? "border-l-2" : ""} ${i > 1 ? "border-t-2" : ""} border-ink`}
              >
                <span className="label">{pad(i + 1)}</span>
                <span className="font-narrow text-3xl font-black uppercase leading-none md:text-4xl">{m}</span>
              </li>
            ))}
          </ul>
        ) : (
          study.metric && (
            <div className="flex flex-1 flex-col justify-between gap-6 p-4 md:p-6">
              <span className="label">{study.metric.label}</span>
              <span className="font-narrow text-[clamp(5rem,11vw,10rem)] font-black leading-[0.8]">
                {study.metric.value}
              </span>
            </div>
          )
        )}
      </div>
    </li>
  );
}

function SideProjects() {
  return (
    <section id="projects" className="border-b-2 border-ink">
      <SectionHead index="02" title="Side projects" aside={`(${pad(projects.length)})`} />
      <p className="label flex items-center justify-between border-b-2 border-ink px-4 py-2 text-mute md:hidden">
        Swipe <Arrow className="size-4" />
      </p>
      <ul className="flex snap-x snap-mandatory gap-0.5 overflow-x-auto overscroll-x-contain bg-ink md:grid md:grid-cols-3 md:overflow-visible">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </ul>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <li className="w-[85%] shrink-0 snap-start bg-paper md:w-auto">
      <a
        href={project.link}
        target="_blank"
        rel="noreferrer"
        className="group flex h-full flex-col gap-4 p-4 hover:bg-white md:p-6"
      >
        <div className="border-2 border-ink bg-ink transition-[transform,box-shadow] group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:shadow-hard">
          <Image
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            placeholder="blur"
            sizes="(min-width: 768px) 33vw, 100vw"
            className="aspect-[16/10] w-full object-cover object-top grayscale transition-[filter] group-hover:grayscale-0"
          />
        </div>
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-narrow text-3xl font-black uppercase leading-none group-hover:underline group-hover:decoration-signal group-hover:decoration-4 group-hover:underline-offset-4">
            {project.title}
          </h3>
          <Arrow className="-rotate-45 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <span
            className={`label border-2 border-ink px-2 py-0.5 ${project.kind === "Client" ? "bg-ink text-paper" : ""}`}
          >
            {project.kind}
          </span>
          <span className="label truncate text-mute">{project.label ?? hostOf(project.link)}</span>
        </div>
      </a>
    </li>
  );
}

function Experience() {
  return (
    <section id="experience" className="border-b-2 border-ink">
      <SectionHead index="03" title="Experience" aside="2023 — Now" />
      <ol>
        {jobs.map((job, i) => (
          <li
            key={job.company}
            className="grid gap-6 border-b-2 border-ink p-4 md:grid-cols-12 md:gap-8 md:p-8"
          >
            <div className="flex flex-col items-start gap-2 md:col-span-3">
              <h3 className="text-3xl font-bold leading-tight">{job.company}</h3>
              {(job.note || job.location) && (
                <p className="label text-mute">{job.note ?? job.location}</p>
              )}
              {i === 0 && <span className="label mt-1 bg-signal px-2 py-0.5">Now</span>}
            </div>

            <ul className="flex flex-col gap-3 md:col-span-4">
              {job.roles.map((role) => (
                <li key={role.title}>
                  <p className="text-xl font-medium">{role.title}</p>
                  <p className="label mt-1">{role.period}</p>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-5 md:col-span-5">
              {job.points.length > 0 ? (
                <ul className="space-y-2">
                  {job.points.map((point) => (
                    <li key={point} className="grid grid-cols-[1.25rem_1fr] leading-relaxed">
                      <span className="text-signal" aria-hidden="true">
                        —
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="leading-relaxed text-mute">Joined in August 2026.</p>
              )}
              {job.stack.length > 0 && <Chips items={job.stack} />}
            </div>
          </li>
        ))}
      </ol>

      <div className="grid md:grid-cols-12">
        <div className="flex flex-col gap-3 p-4 md:col-span-6 md:p-8">
          <p className="label text-mute">Education</p>
          <h3 className="text-3xl font-bold leading-tight">{education.degree}</h3>
          <p className="text-lg">{education.school}</p>
          <p className="label">{education.period}</p>
        </div>
        <div className="flex flex-col gap-4 border-t-2 border-ink p-4 md:col-span-6 md:border-t-0 md:border-l-2 md:p-8">
          <p className="label text-mute">Certifications</p>
          <ol className="space-y-2">
            {certifications.map((cert, i) => (
              <li key={cert} className="grid grid-cols-[2rem_1fr] items-baseline border-b border-ink/20 pb-2 last:border-b-0">
                <span className="label text-mute">{pad(i + 1)}</span>
                <span className="text-lg">{cert}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const channels = [
    { name: "Email", handle: profile.email, href: links.email, external: false },
    { name: "LinkedIn", handle: "in/muhammad-hamza-hx2552", href: links.linkedin, external: true },
    { name: "GitHub", handle: "@xwhiz", href: links.github, external: true },
  ];

  return (
    <section id="contact" className="bg-ink text-paper">
      <div className="grid gap-8 p-4 md:grid-cols-12 md:p-8 md:py-16">
        <span className="label md:col-span-1">04</span>
        <div className="md:col-span-11">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <p className="label text-paper/60">Got a project, a role, or a question?</p>
            <CopyEmail email={profile.email} />
          </div>
          <h2 className="font-wide text-[clamp(3.25rem,11vw,10rem)] font-black uppercase leading-[0.85] tracking-tight">
            Let&apos;s
            <br />
            talk<span className="text-signal">.</span>
          </h2>
        </div>
      </div>

      <ul>
        {channels.map((c) => (
          <li key={c.name} className="border-t-2 border-paper">
            <a
              href={c.href}
              {...(c.external ? { target: "_blank", rel: "noreferrer" } : {})}
              className="group grid grid-cols-[1fr_auto] items-center gap-4 p-4 hover:bg-signal hover:text-ink md:grid-cols-12 md:p-8"
            >
              <span className="flex flex-col gap-2 md:col-span-11 md:grid md:grid-cols-11 md:items-center">
                <span className="font-narrow text-5xl font-black uppercase md:col-span-6 md:text-7xl">
                  {c.name}
                </span>
                <span className="label break-all md:col-span-5">{c.handle}</span>
              </span>
              <Arrow className="size-10 -rotate-45 justify-self-end transition-transform group-hover:rotate-0 md:col-span-1 md:size-14" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-4 border-t-2 border-paper bg-ink p-4 text-paper md:px-8">
      <p className="label">
        © {new Date().getFullYear()} {profile.name} · {profile.location}
      </p>
      <a href="#top" className="label flex items-center gap-2 hover:text-signal">
        Back to top
        <Arrow className="size-4 -rotate-90" />
      </a>
    </footer>
  );
}

function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="square"
      className={`size-6 shrink-0 ${className}`}
    >
      <path d="M3 12h17M13 5l7 7-7 7" />
    </svg>
  );
}
