import type { Localized } from "./projects";

export type Offer = {
  title: Localized;
  description: Localized;
};

export const offers: Offer[] = [
  {
    title: {
      en: "Full-Stack Web & Mobile",
      fr: "Web & Mobile Full-Stack",
    },
    description: {
      en: "High-performance web and mobile apps with Symfony, Laravel, Next.js, React, NestJS, Angular, React Native and Node.js.",
      fr: "Applications web et mobiles performantes avec Symfony, Laravel, Next.js, React, NestJS, Angular, React Native et Node.js.",
    },
  },
  {
    title: {
      en: "Desktop & Industrial Apps",
      fr: "Applications Desktop & Industrielles",
    },
    description: {
      en: "Desktop and automation solutions with .NET C# (Blazor, Minimal API, WPF) and Java (Spring Boot).",
      fr: "Solutions desktop et d'automatisation en .NET C# (Blazor, Minimal API, WPF) et Java (Spring Boot).",
    },
  },
  {
    title: {
      en: "Infrastructure & DevOps",
      fr: "Infrastructure & DevOps",
    },
    description: {
      en: "Cloud deployment on Azure and AWS with CI/CD, monitoring and ELK logging.",
      fr: "Déploiement cloud sur Azure et AWS avec CI/CD, monitoring et logs ELK.",
    },
  },
  {
    title: {
      en: "Database & Security",
      fr: "Base de données & Sécurité",
    },
    description: {
      en: "Design and optimisation of MSSQL and MySQL databases for availability, performance and security.",
      fr: "Conception et optimisation de bases MSSQL et MySQL pour disponibilité, performance et sécurité.",
    },
  },
  {
    title: {
      en: "Architecture & Performance",
      fr: "Architecture & Performance",
    },
    description: {
      en: "Scalability and performance work, with unit and integration testing for code quality.",
      fr: "Travail sur la scalabilité et la performance, avec tests unitaires et d'intégration.",
    },
  },
  {
    title: {
      en: "Leadership & Delivery",
      fr: "Leadership & Pilotage",
    },
    description: {
      en: "Leading developer teams and managing projects to on-time, business-aligned delivery.",
      fr: "Direction d'équipes de développeurs et gestion de projet dans les délais et les objectifs métier.",
    },
  },
  {
    title: {
      en: "Digital Transformation",
      fr: "Transformation Digitale",
    },
    description: {
      en: "Modernising tools and recommending the right technologies to improve workflows.",
      fr: "Modernisation des outils et choix des bonnes technologies pour améliorer les processus.",
    },
  },
  {
    title: {
      en: "Training & Mentorship",
      fr: "Formation & Mentorat",
    },
    description: {
      en: "Training and mentorship on modern tech, clean code and DevOps workflows.",
      fr: "Formation et mentorat sur les technologies modernes, le clean code et le DevOps.",
    },
  },
];

export type Education = {
  title: Localized;
  desc: Localized;
};

export const education: Education[] = [
  {
    title: {
      en: "2020 — Master's in Industrial Computer Science & Networks",
      fr: "2020 — Master en Informatique Industrielle & Réseaux",
    },
    desc: {
      en: "University of Technology Specialist in Informatics (T.S.I)",
      fr: "Université de Technologie Spécialisée en Informatique (T.S.I)",
    },
  },
  {
    title: {
      en: "2017 — Bachelor's in Information Technology",
      fr: "2017 — Licence en Technologies de l'Information",
    },
    desc: {
      en: "Institut UNIVERS Informatique",
      fr: "Institut UNIVERS Informatique",
    },
  },
  {
    title: {
      en: "2012 — Master's in Engineering Informatics",
      fr: "2012 — Master en Informatique Industrielle",
    },
    desc: {
      en: "École d'Ingénieur de Genève (E.I.G)",
      fr: "École d'Ingénieur de Genève (E.I.G)",
    },
  },
];

export type Tech = { src: string; label: string };

export const techStack: Tech[] = [
  { src: "/tech-logo/cs.png", label: "C# / .NET" },
  { src: "/tech-logo/mdn.png", label: "MDN" },
  { src: "/tech-logo/ts.png", label: "TypeScript" },
  { src: "/tech-logo/next.png", label: "Next.js" },
  { src: "/tech-logo/nest.png", label: "NestJS" },
  { src: "/tech-logo/angular.png", label: "Angular" },
  { src: "/tech-logo/sf.png", label: "Symfony" },
  { src: "/tech-logo/sp.png", label: "Spring Boot" },
];

export type Social = { icon: string; href: string; label: string };

export const social: Social[] = [
  { icon: "/git.svg", href: "https://github.com/Andriamiamina", label: "GitHub" },
  { icon: "/twit.svg", href: "https://x.com", label: "X" },
  { icon: "/link.svg", href: "https://www.linkedin.com", label: "LinkedIn" },
];

export const profile = {
  name: "Mamisoa Hyacinthe",
  email: "mamisoa.hyacinthe90@gmail.com",
  cv: "/cv-mamisoa.pdf",
  avatar: "/avatar.png",
  initial: "MH",
};
