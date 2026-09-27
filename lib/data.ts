import type { StaticImageData } from "next/image";

import pranary from "@/public/pranary.png";
import sentinel from "@/public/sentinel.png";
import natours from "@/public/natours.png";
import onehealth from "@/public/onehealth.png";
import omnifood from "@/public/omnifood.png";
import furniture from "@/public/furniture-store-img.jpg";
import business from "@/public/business-site-img.jpg";
import quiz from "@/public/quiz-app.png";
import weather from "@/public/weather-app-img.jpg";

export const siteUrl = "https://hamza-portfolio.vercel.app";

export const profile = {
  name: "Muhammad Hamza",
  headline: "Polyglot Software Engineer",
  location: "Islamabad, PK",
  current: "Volga Partners",
  email: "muhammadhamzam1486@gmail.com",
};

export const links = {
  linkedin: "https://www.linkedin.com/in/muhammad-hamza-hx2552",
  github: "https://github.com/xwhiz",
  email: `mailto:${profile.email}`,
};

export const stats = [
  { value: "3+", label: "Years shipping production software" },
  { value: "1M+", label: "Identities verified by my Finger SDK" },
  { value: "97%", label: "Face-recognition accuracy (FaceNet)" },
  { value: "’26", label: "BS Computational Science, NUST" },
];

export const stack = [
  "Swift",
  "SwiftUI",
  "Go",
  "NestJS",
  "Vue.js",
  "React",
  "Next.js",
  "PostgreSQL",
  "Redis",
  "Azure",
  "Docker",
  "FastAPI",
  "OpenCV",
  "C++",
];

export type CaseStudy = {
  title: string;
  org: string;
  period: string;
  summary: string;
  points: string[];
  stack: string[];
  /** Big figure shown in place of a screenshot. */
  metric?: { value: string; label: string };
  /** Shown instead of a metric when the work is a set of systems. */
  modules?: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    title: "Al Meera Retail OS",
    org: "Cowlar Design Studio",
    period: "2025 — 2026",
    summary:
      "Enterprise retail platform for Al Meera, one of Qatar's largest retail chains. It runs e-commerce, fulfilment, commercial operations and in-store workflows.",
    points: [
      "Scale Management System that syncs SAP PLU and product data to weighing scales across stores.",
      "Payment Gateway Orchestrator: one abstraction layer over multiple payment providers.",
      "Gift card platform integrated with POS for issuance and redemption in every store.",
      "Reusable Redis caching layer and faster high-traffic catalog APIs.",
    ],
    stack: ["Vue.js", "NestJS", "Go", "PostgreSQL", "Redis", "Azure", "Docker"],
    modules: ["Scale sync", "Payments", "Gift cards", "Caching"],
  },
  {
    title: "Finger Verification SDK",
    org: "truID",
    period: "2024 — 2025",
    summary:
      "Built truID's fingerprint verification SDK from scratch. It has now verified more than a million identities.",
    points: [],
    stack: ["Swift", "iOS"],
    metric: { value: "1M+", label: "Identities verified" },
  },
  {
    title: "iOS Identity Verification SDK",
    org: "truID",
    period: "2024 — 2025",
    summary:
      "Developed and integrated an identity verification SDK that matches users against NADRA, Pakistan's national database.",
    points: ["Refactored the SDK for maintainability, making development about 50% faster."],
    stack: ["Swift", "iOS"],
    metric: { value: "89%", label: "Match accuracy with NADRA" },
  },
  {
    title: "Askari Digital Onboarding",
    org: "truID",
    period: "2024 — 2025",
    summary:
      "Launched Askari's digital onboarding app on the App Store, streamlining how new customers register.",
    points: [],
    stack: ["Swift", "SwiftUI"],
    metric: { value: "iOS", label: "Live on the App Store" },
  },
  {
    title: "Video Surveillance Platform",
    org: "Sentinel AI",
    period: "2023 — 2024",
    summary:
      "Web-based surveillance app with multi-stream rendering, dashboards and real-time alerts, plus face-recognition attendance.",
    points: [
      "React frontend for multi-stream video and dashboards.",
      "Node.js APIs, with FastAPI serving the ML models.",
      "Real-time notifications over WebSockets, data in MongoDB.",
    ],
    stack: ["React", "Node.js", "FastAPI", "WebSockets", "MongoDB", "FaceNet"],
    metric: { value: "97%", label: "Face-recognition accuracy" },
  },
];

export type Project = {
  title: string;
  kind: "Client" | "Concept" | "App";
  link: string;
  /** Shown instead of the URL host when the host is not presentable. */
  label?: string;
  image: StaticImageData;
};

export const projects: Project[] = [
  {
    title: "Pranary",
    kind: "Client",
    link: "http://ec2-34-203-212-229.compute-1.amazonaws.com:3000",
    label: "staging server",
    image: pranary,
  },
  { title: "Sentinel AI", kind: "Client", link: "https://sentinel-website.vercel.app", image: sentinel },
  { title: "One Health", kind: "Client", link: "http://one-health-official.vercel.app", image: onehealth },
  { title: "Quizzacle", kind: "App", link: "https://quizzical-by-hamza.vercel.app", image: quiz },
  { title: "Weather App", kind: "App", link: "https://h-react-weather-app.netlify.app", image: weather },
  { title: "Natours", kind: "Concept", link: "https://natours-projects.netlify.app", image: natours },
  { title: "Omnifood", kind: "Concept", link: "https://omnifood-design.netlify.app", image: omnifood },
  { title: "Woodie Furniture", kind: "Concept", link: "https://furniture-store-ws.netlify.app", image: furniture },
  { title: "Innomerce", kind: "Concept", link: "https://ws-bussiness-home-page.netlify.app", image: business },
];

export type Job = {
  company: string;
  note?: string;
  location?: string;
  roles: { title: string; period: string }[];
  points: string[];
  stack: string[];
};

export const jobs: Job[] = [
  {
    company: "Volga Partners",
    roles: [{ title: "Software Engineer", period: "Aug 2026 — Present" }],
    points: [],
    stack: [],
  },
  {
    company: "Cowlar Design Studio",
    note: "Cowlar, YC W17",
    roles: [{ title: "Polyglot Engineer", period: "Aug 2025 — Jun 2026" }],
    points: [
      "Built and scaled the Retail OS behind Al Meera's e-commerce, fulfilment and in-store operations.",
      "Shipped scale management, payment orchestration and a POS-integrated gift card platform.",
      "Resolved production issues across payments, caching and API performance at scale.",
    ],
    stack: ["Vue.js", "Express.js", "NestJS", "Go", "PostgreSQL", "MySQL", "Redis", "Azure", "Docker", "GitLab CI/CD"],
  },
  {
    company: "truID",
    location: "Islamabad",
    roles: [{ title: "Software Engineer", period: "Jun 2024 — Aug 2025" }],
    points: [
      "Built the iOS identity verification SDK, reaching 89% match accuracy with NADRA.",
      "Created the Finger Verification SDK, which has verified over 1 million identities.",
      "Refactored the SDK for maintainability, speeding up development by about 50%.",
      "Launched Askari's digital onboarding app on the App Store.",
    ],
    stack: ["Swift", "SwiftUI", "iOS"],
  },
  {
    company: "Sentinel AI",
    location: "Islamabad · NSTP NUST",
    roles: [
      { title: "Junior Full Stack Developer", period: "Sep 2023 — Feb 2024" },
      { title: "Full Stack Developer Intern", period: "Jun 2023 — Aug 2023" },
    ],
    points: [
      "Built a video surveillance web app: React multi-stream dashboards, Node.js APIs and FastAPI for ML.",
      "Added real-time WebSocket notifications and hit 97% face-recognition accuracy for attendance with FaceNet.",
      "As an intern, co-built the company homepage in Next.js with Lottie animations.",
      "Ran YOLO + OpenCV in C++ on a Jetson Nano for real-time object detection.",
    ],
    stack: ["React", "Node.js", "FastAPI", "MongoDB", "WebSockets", "Next.js", "C++", "OpenCV"],
  },
];

export const education = {
  school: "National University of Sciences and Technology (NUST)",
  degree: "BS Computational Science",
  period: "Sep 2022 — May 2026",
};

export const certifications = [
  "Neural Networks and Deep Learning — DeepLearning.AI",
  "React Native, v3",
  "Intermediate React Native, v2",
  "My Dev Setup Is Better Than Yours",
  "Vim Fundamentals",
];

export function hostOf(url: string) {
  return new URL(url).host.replace(/^www\./, "");
}
