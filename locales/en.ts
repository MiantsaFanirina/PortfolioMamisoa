export type Lang = "en" | "fr";

export type Dict = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    home: string;
    about: string;
    work: string;
    offers: string;
    experience: string;
    education: string;
    contact: string;
  };
  common: {
    menu: string;
    close: string;
    language: string;
    en: string;
    fr: string;
    scroll: string;
    index: string;
  };
  hero: {
    kicker: string;
    role: string;
    statement: string;
    ctaWork: string;
    ctaContact: string;
    location: string;
  };
  statement: {
    label: string;
    lead: string;
    body: string[];
  };
  work: {
    label: string;
    title: string;
    intro: string;
    view: string;
    all: string;
  };
  project: {
    back: string;
    next: string;
    prev: string;
    overview: string;
    year: string;
    client: string;
    role: string;
    category: string;
    stack: string;
    related: string;
    source: string;
  };
  offers: {
    label: string;
    title: string;
    intro: string;
  };
  experience: {
    label: string;
    title: string;
    intro: string;
  };
  education: {
    label: string;
    title: string;
  };
  stack: {
    label: string;
    title: string;
    intro: string;
  };
  about: {
    label: string;
    title: string;
    body: string[];
    resume: string;
  };
  contact: {
    label: string;
    title: string;
    body: string;
    cta: string;
  };
  footer: {
    rights: string;
    note: string;
  };
};

export const en: Dict = {
  meta: {
    title: "Mamisoa Hyacinthe, Full-Stack Engineer & Software Architect",
    description:
      "Portfolio of Mamisoa Hyacinthe, full-stack developer and software architect specialised in business applications, industrial systems and cloud infrastructure.",
  },
  nav: {
    home: "Home",
    about: "Profile",
    work: "Work",
    offers: "Expertise",
    experience: "Experience",
    education: "Education",
    contact: "Contact",
  },
  common: {
    menu: "Menu",
    close: "Close",
    language: "Language",
    en: "EN",
    fr: "FR",
    scroll: "Scroll",
    index: "Index",
  },
  hero: {
    kicker: "Software Engineer · Madagascar / UAE",
    role: "I build resilient business software",
    statement:
      "Full-stack engineer crafting secure, scalable applications: from industrial automation to cloud-native platforms.",
    ctaWork: "View selected work",
    ctaContact: "Start a conversation",
    location: "Madagascar · UAE",
  },
  statement: {
    label: "Statement",
    lead: "A decade engineering systems that move organisations.",
    body: [
      "I design and ship business applications where reliability is not a feature but a foundation: stock and production traceability, employee and finance workflows, money-transfer networks, and industrial control interfaces.",
      "My work lives at the intersection of software and the physical world: PLC and HMI automation, sensor-driven production lines, and cloud infrastructure that stays calm under load.",
    ],
  },
  work: {
    label: "Selected Work",
    title: "Engagements & products",
    intro:
      "A selection of the systems I have led, built and architected across industry, finance and entrepreneurship.",
    view: "Open case",
    all: "All engagements",
  },
  project: {
    back: "Back to work",
    next: "Next project",
    prev: "Previous project",
    overview: "Overview",
    year: "Year",
    client: "Client",
    role: "Role",
    category: "Field",
    stack: "Stack",
    related: "Related",
    source: "Source",
  },
  offers: {
    label: "Expertise",
    title: "What I bring to a team",
    intro:
      "Eight disciplines, one throughline: software that survives contact with production.",
  },
  experience: {
    label: "Experience",
    title: "Ten years, seven engagements",
    intro: "Roles spanning engineering, architecture and company leadership.",
  },
  education: {
    label: "Education",
    title: "Training & degrees",
  },
  stack: {
    label: "Toolkit",
    title: "Languages & frameworks",
    intro: "The stack I reach for when shipping.",
  },
  about: {
    label: "Profile",
    title: "Mamisoa Hyacinthe",
    body: [
      "Full-stack developer (web, mobile, desktop) with ten years of experience across .NET C#, PHP, Java, JavaScript and TypeScript. I stand out for technical leadership and clear communication.",
      "I adapt continuously to an evolving field, and I am available immediately for new engagements and interviews.",
    ],
    resume: "Download CV",
  },
  contact: {
    label: "Contact",
    title: "Let's build something durable.",
    body: "Reach out to discuss architecture, a product, or a team to lead. I reply to every serious enquiry.",
    cta: "Email Mamisoa",
  },
  footer: {
    rights: "© 2026 Mamisoa Hyacinthe. All rights reserved.",
    note: "Designed and built as an editorial portfolio.",
  },
};
