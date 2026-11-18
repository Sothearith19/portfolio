/**
 * ✏️  EDIT THIS FILE to update your portfolio.
 * Everything on the site (text, links, projects, experience, tech) comes from here.
 * Lines marked TODO still need your real information.
 */

export const profile = {
  name: "Sothearith Horn",
  shortName: "Sothearith",
  initials: "SH",
  // Words that rotate in the hero headline.
  roles: ["Developer", "Student", "Builder", "Problem Solver"],
  location: "Phnom Penh, Cambodia",
  school: {
    name: "Paragon International University",
    url: "https://www.paragoniu.edu.kh",
  },
  // TODO: add your major, e.g. "Computer Science"
  major: "",
  status: "Open to internships & collaborations",
  // TODO: rewrite in your own words
  tagline:
    "I build clean, fast, and thoughtful things for the web, and I'm always learning something new.",
  about: [
    "I'm a student at Paragon International University in Phnom Penh, passionate about turning ideas into real products people can use.",
    "I enjoy working across the stack, from crafting smooth interfaces to figuring out how the pieces fit together behind the scenes. This portfolio is where I share what I'm building and learning.",
  ],
  // Short facts shown next to the About text.
  facts: [
    { label: "Based in", value: "Phnom Penh" },
    { label: "Studying at", value: "Paragon IU" },
    { label: "Currently", value: "Building & learning" },
  ],
  email: "shorn3@paragoniu.edu.kh",
  // TODO: put your resume at public/resume.pdf, then set this to "/resume.pdf"
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
    title: "Portfolio v2",
    description:
      "This site. A fast, animated personal portfolio built with Next.js, Tailwind CSS, shadcn/ui, and Framer Motion, deployed on Vercel.",
    tags: ["Next.js", "TypeScript", "Tailwind", "shadcn/ui", "Framer Motion"],
    repo: "https://github.com/Sothearith19/portfolio",
    live: "https://portfolio-sothearithhorn.vercel.app",
    gradient: ["#7c3aed", "#06b6d4"],
    glyph: "⚡",
    featured: true,
  },
  // TODO: replace these placeholders with your real projects
  {
    title: "Coming Soon",
    description:
      "A new project is in the works. Check back soon, or browse my GitHub to see what I'm building right now.",
    tags: ["In Progress"],
    repo: "https://github.com/Sothearith19?tab=repositories",
    gradient: ["#f43f5e", "#f59e0b"],
    glyph: "🚧",
  },
  {
    title: "Your Next Project",
    description:
      "Add a project in src/data/portfolio.ts with a title, description, tags, and links, and it will show up here automatically.",
    tags: ["Idea"],
    gradient: ["#10b981", "#3b82f6"],
    glyph: "💡",
  },
];

export type Experience = {
  role: string;
  org: string;
  url?: string;
  period: string;
  description: string;
  type: "education" | "work";
};

export const experience: Experience[] = [
  // TODO: add jobs or internships here (newest first), and your start year below
  {
    role: "Student",
    org: "Paragon International University",
    url: "https://www.paragoniu.edu.kh",
    period: "Present",
    description:
      "Studying and building projects in web development and software engineering.",
    type: "education",
  },
];

// Icon keys map to logos in src/components/site/tech-stack.tsx
export const techStack = {
  Frontend: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  Tools: ["Git", "GitHub", "Vercel", "VS Code", "Figma"],
} as const;
