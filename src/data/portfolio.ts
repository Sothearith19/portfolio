/**
 * ✏️  EDIT THIS FILE to update your portfolio.
 * Everything on the site (text, links, projects, experience, skills, awards) comes from here.
 * Lines marked TODO still need your real information.
 */

export const profile = {
  name: "Sothearith Horn",
  shortName: "Sothearith",
  initials: "SH",
  // Words that rotate in the hero headline.
  roles: ["MIS Student", "Security Researcher", "Web Developer", "Event Organizer"],
  title: "Management Information Systems Student",
  location: "Phnom Penh, Cambodia",
  school: {
    name: "Paragon International University",
    url: "https://www.paragoniu.edu.kh",
  },
  major: "Management Information Systems",
  status: "Final-year MIS student · Open to opportunities",
  tagline:
    "Final-year MIS student with a growing focus on information security: researching how people stay safe online, building web apps, and organizing student events.",
  about: [
    "I'm a final-year Management Information Systems student at Paragon International University in Phnom Penh, studying on a full scholarship.",
    "My focus is shifting toward information security. For my final-year project, I'm researching security awareness among Paragon IU students and staff: surveying the community, studying the human factors behind security risks, and turning the data into practical recommendations for the university.",
    "Alongside research, I build web applications with PHP, MySQL, and JavaScript, and I love bringing people together through events like the MIS Challenge.",
  ],
  // Short facts shown next to the About text.
  facts: [
    { label: "Studying", value: "MIS @ Paragon IU" },
    { label: "Researching", value: "Information security awareness" },
    { label: "Scholarship", value: "Full scholarship recipient" },
    { label: "Languages", value: "Khmer (native) · English (fluent)" },
  ],
  email: "sothearithhorn0@gmail.com",
  // TODO: put your resume PDF at public/resume.pdf, then set this to "/resume.pdf"
  resumeUrl: "",
  siteUrl: "https://portfolio-sothearithhorn.vercel.app",
} as const;

export const socials = {
  github: { username: "Sothearith19", url: "https://github.com/Sothearith19" },
  // TODO: add your LinkedIn URL, e.g. "https://www.linkedin.com/in/your-name/"
  linkedin: "",
} as const;

export type Project = {
  title: string;
  subtitle?: string;
  description: string;
  tags: string[];
  repo?: string;
  live?: string;
  /** Two colors used for the card's generated cover art. */
  gradient: [string, string];
  /** Emoji or short text shown on the cover. */
  glyph: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Information Security Awareness",
    subtitle: "Final Year Research Project · 2026 – Present",
    description:
      "Assessing how well Paragon IU students and staff understand information security. I'm designing the survey and data analysis, building a literature review on the human factors behind security risks, and turning the findings into practical recommendations for the university.",
    tags: ["Research", "Survey Design", "Data Analysis", "Information Security"],
    gradient: ["#7c3aed", "#06b6d4"],
    glyph: "🛡️",
    featured: true,
  },
  {
    title: "UniClub",
    subtitle: "Club Management Website",
    description:
      "A web platform where students browse school clubs, register, and manage club events, all in one place.",
    tags: ["PHP", "MySQL", "HTML", "CSS"],
    // TODO: add repo / live links if available, e.g. repo: "https://github.com/Sothearith19/uniclub"
    gradient: ["#f43f5e", "#f59e0b"],
    glyph: "🎓",
  },
  {
    title: "CareConnect",
    subtitle: "Online Health Platform",
    description:
      "A health and wellness website that helps underserved communities access reliable health information.",
    tags: ["HTML", "CSS", "JavaScript", "PHP"],
    // TODO: add repo / live links if available
    gradient: ["#10b981", "#3b82f6"],
    glyph: "🩺",
  },
  {
    title: "Portfolio v2",
    subtitle: "This website",
    description:
      "A fast, animated personal portfolio built with Next.js, Tailwind CSS, shadcn/ui, and Framer Motion, deployed on Vercel.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    repo: "https://github.com/Sothearith19/portfolio",
    live: "https://portfolio-sothearithhorn.vercel.app",
    gradient: ["#6366f1", "#ec4899"],
    glyph: "⚡",
  },
];

export type Experience = {
  role: string;
  org: string;
  url?: string;
  /** Leave empty if there is no date. */
  period: string;
  detail?: string;
  points: string[];
  type: "education" | "research" | "leadership" | "competition" | "work";
};

/** Newest first. */
export const experience: Experience[] = [
  {
    role: "Final Year Project: Information Security Awareness",
    org: "Paragon International University",
    url: "https://www.paragoniu.edu.kh",
    period: "2026 – Present",
    type: "research",
    points: [
      "Surveying Paragon IU students and staff to assess their level of information security awareness",
      "Building a literature review on security awareness and the human factors behind security risks",
      "Designing the survey and data analysis to give practical recommendations to the university",
    ],
  },
  {
    role: "Bachelor of Management Information Systems",
    org: "Paragon International University",
    url: "https://www.paragoniu.edu.kh",
    period: "2023 – Present",
    detail: "Full scholarship",
    type: "education",
    points: [],
  },
  {
    role: "Creative & Program Team",
    org: "MIS Challenge",
    // TODO: add the year of the MIS Challenge
    period: "",
    type: "leadership",
    points: [
      "Helped design the event flow and program schedule together with the program team",
      "Handled email communication with participants before and during the event",
      "Worked across the creative and program teams to deliver a smooth experience for participants",
    ],
  },
  {
    role: "Competitor",
    org: "SDG Challenge",
    period: "2022 – 2023",
    type: "competition",
    points: ["Presented tech-based sustainability solutions aligned with the UN Sustainable Development Goals"],
  },
  {
    role: "High School Diploma",
    org: "Hello American School",
    period: "2010 – 2019",
    type: "education",
    points: [],
  },
];

// Icon keys map to logos in src/components/site/tech-stack.tsx
export const techStack = {
  Programming: ["C++", "Java", "PHP", "JavaScript"],
  "Web & Data": ["HTML", "CSS", "MySQL", "Spring Boot"],
  Tools: ["VS Code", "XAMPP", "Figma", "Word", "Excel"],
} as const;

/** Non-technical skills, shown under the tech stack. */
export const otherSkills = {
  Research: ["Literature review", "Survey design", "Data analysis"],
  "Soft skills": ["Problem-solving", "Teamwork", "Communication"],
  Languages: ["Khmer (native)", "English (fluent)"],
} as const;

export type Award = { title: string; detail: string; glyph: string };

export const awards: Award[] = [
  {
    title: "Full Scholarships",
    detail: "Offered by Paragon International University, CamTech University, and the University of Cambodia",
    glyph: "🎓",
  },
  {
    title: "1st Place, English Speaking Competition",
    detail: "Grades 10–12",
    glyph: "🏆",
  },
];
