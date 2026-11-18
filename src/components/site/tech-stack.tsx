import { CodeIcon } from "lucide-react";
import type { IconType } from "react-icons";
import { FaCode } from "react-icons/fa6";
import {
  SiCss,
  SiDocker,
  SiFigma,
  SiFramer,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { Reveal, Section } from "@/components/site/section";
import { techStack } from "@/data/portfolio";

/** Add an entry here if you add a technology to techStack that needs a logo. */
const icons: Record<string, { icon: IconType; color: string }> = {
  HTML: { icon: SiHtml5, color: "#E34F26" },
  CSS: { icon: SiCss, color: "#663399" },
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  React: { icon: SiReact, color: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs, color: "currentColor" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
  "shadcn/ui": { icon: SiShadcnui, color: "currentColor" },
  "Framer Motion": { icon: SiFramer, color: "#0055FF" },
  "Node.js": { icon: SiNodedotjs, color: "#5FA04E" },
  Python: { icon: SiPython, color: "#3776AB" },
  MySQL: { icon: SiMysql, color: "#4479A1" },
  PostgreSQL: { icon: SiPostgresql, color: "#4169E1" },
  Docker: { icon: SiDocker, color: "#2496ED" },
  Git: { icon: SiGit, color: "#F05032" },
  GitHub: { icon: SiGithub, color: "currentColor" },
  Vercel: { icon: SiVercel, color: "currentColor" },
  "VS Code": { icon: FaCode, color: "#007ACC" },
  Figma: { icon: SiFigma, color: "#F24E1E" },
};

function TechPill({ name }: { name: string }) {
  const entry = icons[name];
  const Icon = entry?.icon ?? CodeIcon;
  return (
    <span className="group inline-flex shrink-0 items-center gap-2.5 rounded-xl border bg-card/60 px-4 py-2.5 text-sm backdrop-blur transition-all hover:-translate-y-0.5 hover:border-brand/40">
      <Icon
        className="size-5 grayscale transition-all duration-300 group-hover:grayscale-0"
        style={{ color: entry?.color }}
        aria-hidden
      />
      {name}
    </span>
  );
}

export function TechStack() {
  const all = Object.values(techStack).flat();

  return (
    <Section
      id="stack"
      eyebrow="Toolbox"
      title="Tech I work with"
      description="The languages, frameworks, and tools I reach for, and I'm always adding more."
    >
      <Reveal>
        <div className="mask-fade-edges group/marquee flex overflow-hidden [--marquee-duration:35s] [--marquee-gap:0.75rem]">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              aria-hidden={copy === 1}
              className="animate-marquee flex shrink-0 gap-3 pr-3 group-hover/marquee:[animation-play-state:paused]"
            >
              {all.map((name) => (
                <TechPill key={`${copy}-${name}`} name={name} />
              ))}
            </div>
          ))}
        </div>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {Object.entries(techStack).map(([group, items], i) => (
          <Reveal key={group} delay={i * 0.1}>
            <div className="h-full rounded-2xl border bg-card/60 p-6 backdrop-blur">
              <p className="mb-4 font-mono text-xs tracking-widest text-muted-foreground uppercase">{group}</p>
              <div className="flex flex-wrap gap-2">
                {items.map((name) => (
                  <TechPill key={name} name={name} />
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
