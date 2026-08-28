export type Localized = { en: string; fr: string };

export type Project = {
  slug: string;
  index: string;
  field: Localized;
  title: Localized;
  client: Localized;
  role: Localized;
  year: string;
  period: Localized;
  location: Localized;
  stacks: string[];
  summary: Localized;
  highlights: Localized[];
  github?: string;
  cover: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "stock-management-yhaja",
    index: "01",
    field: { en: "Industrial · Desktop", fr: "Industrie · Desktop" },
    title: {
      en: "Stock & Traceability Management",
      fr: "Gestion des stocks & traçabilité",
    },
    client: { en: "YHAJA Madagascar", fr: "YHAJA Madagascar" },
    role: { en: "Project Manager", fr: "Chef de projet" },
    year: "2024",
    period: { en: "Dec 2024 — Mar 2022", fr: "Déc. 2024 — Mar. 2022" },
    location: { en: "Antananarivo, MG", fr: "Antananarivo, MG" },
    stacks: [
      ".NET CORE WPF",
      "EntityFrameworkCore",
      "Custom Controls",
      "AForge",
      "EPPlus",
      "XML / XSLT",
    ],
    summary: {
      en: "A business application for animal-feed and cheese production traceability, built on .NET Core WPF.",
      fr: "Une application métier de traçabilité pour la production de alimentation animale et de fromage, en .NET Core WPF.",
    },
    highlights: [
      {
        en: "Defined stock-management strategies for animal feed and cheese production.",
        fr: "Définition de stratégies de gestion des stocks pour l'alimentation animale et le fromage.",
      },
      {
        en: "Built a .NET Core C# WPF application tracking product traceability end-to-end.",
        fr: "Conception d'une application .NET Core C# WPF suivant la traçabilité produit de bout en bout.",
      },
      {
        en: "Trained employees to operate the new application and improved logistics scheduling.",
        fr: "Formation des employés et amélioration de la planification logistique.",
      },
      {
        en: "Modelled loans and debts tied to transactions within the system.",
        fr: "Modélisation des prêts et dettes liés aux transactions dans le système.",
      },
    ],
    github: "https://github.com/Andriamiamina/YAJA",
    cover: "/b1.svg",
    featured: true,
  },
  {
    slug: "nossidea-ceo",
    index: "02",
    field: { en: "Web · Architecture", fr: "Web · Architecture" },
    title: { en: "Nossidea — CEO & Product", fr: "Nossidea — CEO & Produit" },
    client: { en: "Nossidea Company, Madagascar", fr: "Nossidea Company, Madagascar" },
    role: { en: "Chief Executive Officer", fr: "Directeur Général" },
    year: "2024",
    period: { en: "2024 — 2023", fr: "2024 — 2023" },
    location: { en: "Antananarivo, MG", fr: "Antananarivo, MG" },
    stacks: [
      "PHP Symfony",
      "API Platform",
      "Tailwind",
      "React",
      "Docker",
      "Doctrine ORM",
      "MySQL",
      "PostgreSQL",
    ],
    summary: {
      en: "Led the development of a business application for Espace Santika using Symfony, API Platform and React.",
      fr: "Direction du développement d'une application métier pour Espace Santika avec Symfony, API Platform et React.",
    },
    highlights: [
      {
        en: "Led development of a business application for Espace Santika (Madagascar).",
        fr: "Direction du développement d'une application métier pour Espace Santika (Madagascar).",
      },
      {
        en: "Architected the stack around Symfony, API Platform and React with Dockerised delivery.",
        fr: "Architecture de la stack autour de Symfony, API Platform et React, livrée sous Docker.",
      },
    ],
    github: "https://github.com/Andriamiamina/Nossidea",
    cover: "/p1.svg",
  },
  {
    slug: "drinking-water-yhaja",
    index: "03",
    field: { en: "Industrial · IoT", fr: "Industrie · IoT" },
    title: {
      en: "Drinking Water Production (R&D)",
      fr: "Production d'eau potable (R&D)",
    },
    client: { en: "YHAJA Madagascar", fr: "YHAJA Madagascar" },
    role: { en: "Project Manager", fr: "Chef de projet" },
    year: "2022",
    period: { en: "Mar 2022 — Jul 2021", fr: "Mar. 2022 — Juil. 2021" },
    location: { en: "Antananarivo, MG", fr: "Antananarivo, MG" },
    stacks: [
      "TIA Portal",
      "Grafcet",
      "PLC & HMI",
      "Power Systems",
      "Azure Functions",
      "Azure Service Bus",
      "Terraform",
      ".NET MAUI",
      "Blazor",
    ],
    summary: {
      en: "Feasibility and execution preparation for a natural-source bottling plant — automation, control panels and cloud.",
      fr: "Étude de faisabilité et préparation d'une unité d'embouteillage à source — automatisation, armoires et cloud.",
    },
    highlights: [
      {
        en: "Prepared project plans, budgets, schedules and resource allocation.",
        fr: "Préparation des plans, budgets, calendriers et allocation des ressources.",
      },
      {
        en: "Designed and wired the motor-control electrical panel with the team.",
        fr: "Conception et câblage de l'armoire électrique de commande moteurs avec l'équipe.",
      },
      {
        en: "Built Archimedean screw decanters and a large UV filtration system (< 1 micron).",
        fr: "Réalisation de décanteuses à vis d'Archimède et d'un système de filtration UV (< 1 micron).",
      },
      {
        en: "Researched sodium hypochlorite water treatment and cloud orchestration (Azure, Terraform).",
        fr: "Étude du traitement par hypochlorite de sodium et de l'orchestration cloud (Azure, Terraform).",
      },
    ],
    cover: "/p3.svg",
  },
  {
    slug: "car-rental-aloccars",
    index: "04",
    field: { en: "Web · Mobile · AI", fr: "Web · Mobile · IA" },
    title: {
      en: "Car Rental Platform — Aloc-cars",
      fr: "Plateforme de location — Aloc-cars",
    },
    client: { en: "Aloc-cars, Switzerland", fr: "Aloc-cars, Suisse" },
    role: { en: "Business Application Developer", fr: "Développeur d'applications" },
    year: "2020",
    period: { en: "Sep 2020 — Jan 2023", fr: "Sep. 2020 — Jan. 2023" },
    location: { en: "Switzerland", fr: "Suisse" },
    stacks: [
      "PHP API Platform",
      "React",
      ".NET Core C#",
      "Docker",
      "Azure DevOps",
      "Angular 8",
      "Xamarin",
      "Python",
      "Keras",
      "TensorFlow",
    ],
    summary: {
      en: "Migrated a car-rental system to microservices with JWT auth and deep-learning vehicle inspection.",
      fr: "Migration d'un système de location vers les microservices, auth JWT et inspection véhicule par deep learning.",
    },
    highlights: [
      {
        en: "Migrated to microservices (PHP, Java, .NET Core, Docker, load balancing, DevOps).",
        fr: "Migration vers les microservices (PHP, Java, .NET Core, Docker, load balancing, DevOps).",
      },
      {
        en: "Hardened security with JWT authentication on ASP.NET Web API and Dapper.",
        fr: "Sécurisation via JWT sur ASP.NET Web API et Dapper.",
      },
      {
        en: "Rebuilt the front-end in Angular 8.",
        fr: "Refonte du front-end en Angular 8.",
      },
      {
        en: "Added deep-learning vehicle damage detection (Python, Keras, TensorFlow) on Xamarin mobile.",
        fr: "Ajout de détection de dommages par deep learning (Python, Keras, TensorFlow) sur mobile Xamarin.",
      },
    ],
    github: "https://github.com/Andriamiamina/aloccarsverstwo",
    cover: "/p2.svg",
    featured: true,
  },
  {
    slug: "consultant-yhaja",
    index: "05",
    field: { en: "Industrial · Embedded", fr: "Industrie · Embarqué" },
    title: {
      en: "Cheese Stock & Production Flows",
      fr: "Stocks de fromage & flux de production",
    },
    client: { en: "YHAJA Madagascar", fr: "YHAJA Madagascar" },
    role: { en: "Consultant Developer", fr: "Développeur consultant" },
    year: "2019",
    period: { en: "Dec 2019 — Jan 2019", fr: "Déc. 2019 — Jan. 2019" },
    location: { en: "Antananarivo, MG", fr: "Antananarivo, MG" },
    stacks: ["Stock Management", "IT Flows", "Grafcet", "Sensors", "ARM STM32"],
    summary: {
      en: "Business application for cheese stock, logistics and production flows controlled by STM32 sensors.",
      fr: "Application métier pour stocks de fromage, logistique et flux de production pilotés par capteurs STM32.",
    },
    highlights: [
      {
        en: "Built the cheese stock-management, logistics and production-flow application.",
        fr: "Conception de l'application de gestion des stocks, logistique et flux de production.",
      },
      {
        en: "Controlled the milk-production interface with sensors and ARM STM32 microcontrollers.",
        fr: "Pilotage de l'interface de production laitière via capteurs et microcontrôleurs ARM STM32.",
      },
    ],
    cover: "/grid.svg",
  },
  {
    slug: "employees-qmm",
    index: "06",
    field: { en: "Web · ERP", fr: "Web · ERP" },
    title: {
      en: "Employee Management System — QMM",
      fr: "Gestion du personnel — QMM",
    },
    client: { en: "QMM Consultant, Madagascar", fr: "QMM Consultant, Madagascar" },
    role: { en: "Business Application Developer", fr: "Développeur d'applications" },
    year: "2016",
    period: { en: "Dec 2015 — Jan 2015", fr: "Déc. 2015 — Jan. 2015" },
    location: { en: "Madagascar", fr: "Madagascar" },
    stacks: [
      "ASP.NET MVC",
      "Entity Framework",
      "MSSQL",
      "SignalR",
      "Hangfire",
      "AngularJS",
    ],
    summary: {
      en: "HR and finance workflow system for 500 employees with requests, validation and automated emails.",
      fr: "Système RH et finance pour 500 employés : demandes, validation et e-mails automatisés.",
    },
    highlights: [
      {
        en: "Role-based auth for Administrator, Data Entry, HR and Finance.",
        fr: "Authentification par rôles : Admin, Saisie, RH, Finance.",
      },
      {
        en: "Cash-advance, cover-letter, expense and medical-reimbursement request workflows with validation.",
        fr: "Workflows de demande d'avance, de prise en charge, de notes de frais et de remboursement médical.",
      },
      {
        en: "Integrated 500 employees from Excel and automated rejection emails to team leaders.",
        fr: "Intégration de 500 employés depuis Excel et e-mails automatiques de rejet aux chefs d'équipe.",
      },
      {
        en: "Authored the software specification documents.",
        fr: "Rédaction des cahiers des charges logiciels.",
      },
    ],
    github: "https://github.com/Andriamiamina/QMM",
    cover: "/p4.svg",
  },
  {
    slug: "money-transfer-cashxpress",
    index: "07",
    field: { en: "Web · Banking", fr: "Web · Banque" },
    title: {
      en: "Money Transfer — Cash-Xpress",
      fr: "Transfert d'argent — Cash-Xpress",
    },
    client: {
      en: "Cash-Xpress Genève & Pacoservices Lausanne",
      fr: "Cash-Xpress Genève & Pacoservices Lausanne",
    },
    role: { en: "Business Application Developer", fr: "Développeur d'applications" },
    year: "2014",
    period: { en: "Dec 2014 — Jan 2014", fr: "Déc. 2014 — Jan. 2014" },
    location: { en: "Genève · Lausanne, CH", fr: "Genève · Lausanne, CH" },
    stacks: [
      "ASP.NET WebForm",
      "Dapper",
      "MSSQL",
      "SOAP WebServices",
      "Windows Service",
      "WCF",
    ],
    summary: {
      en: "Deployed a money-transfer application across agencies in Cameroon and Ecuador with secure bot relays.",
      fr: "Déploiement d'une application de transfert d'argent dans des agences au Cameroun et en Équateur.",
    },
    highlights: [
      {
        en: "Spent 2 months in Douala (Cameroon) and 10 months in Quito (Ecuador) building the product.",
        fr: "2 mois à Douala (Cameroun) et 10 mois à Quito (Équateur) pour construire le produit.",
      },
      {
        en: "One UI, two databases — ASP.NET WebForm front-end with Dapper on MSSQL.",
        fr: "Une UI, deux bases — front ASP.NET WebForm avec Dapper sur MSSQL.",
      },
      {
        en: "Built secure communication bots (SOAP, console app, Windows Service scheduler).",
        fr: "Conception de bots de communication sécurisés (SOAP, console, planificateur Windows Service).",
      },
    ],
    github: "https://github.com/Andriamiamina/PacoCxMoney",
    cover: "/profile.svg",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacent(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug);
  if (i === -1) return { prev: undefined, next: undefined };
  return {
    prev: projects[(i - 1 + projects.length) % projects.length],
    next: projects[(i + 1) % projects.length],
  };
}
