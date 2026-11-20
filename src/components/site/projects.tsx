"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRightIcon } from "lucide-react";
import type { MouseEvent } from "react";
import { FaGithub } from "react-icons/fa6";
import { cn } from "cn";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal, Section } from "@/components/site/section";
import { projects, socials, type Project } from "@/data/portfolio";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(my, [0, 1], [6, -6]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-6, 6]), { stiffness: 200, damping: 20 });
  const glowX = useTransform(mx, (v) => `${v * 100}%`);
  const glowY = useTransform(my, (v) => `${v * 100}%`);
  const glow = useMotionTemplate`radial-gradient(420px circle at ${glowX} ${glowY}, color-mix(in oklch, var(--brand) 22%, transparent), transparent 60%)`;

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };
  const onLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  const [c1, c2] = project.gradient;
  const href = project.live ?? project.repo;

  return (
    <Reveal delay={index * 0.1} className={cn("[perspective:1200px]", project.featured && "md:col-span-2")}>
      <motion.div
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="group relative h-full overflow-hidden rounded-2xl border bg-card/70 backdrop-blur transition-colors hover:border-brand/40"
      >
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: glow }}
        />

        <div className={cn("relative grid h-full gap-0", project.featured && "md:grid-cols-[1.1fr_1fr]")}>
          {/* Generated cover art */}
          <div
            className={cn(
              "relative m-3 mb-0 grid aspect-[16/9] place-items-center overflow-hidden rounded-xl",
              project.featured && "md:mb-3 md:aspect-auto md:min-h-64",
            )}
            style={{ background: `linear-gradient(135deg, ${c1}, ${c2})` }}
          >
            <div className="bg-grid absolute inset-0 opacity-40 mix-blend-overlay" />
            <motion.div
              aria-hidden
              className="absolute -top-1/2 -left-1/4 size-[120%] rounded-full bg-white/20 blur-3xl"
              animate={{ x: ["0%", "20%", "0%"], y: ["0%", "10%", "0%"] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="relative text-6xl drop-shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 sm:text-7xl">
              {project.glyph}
            </span>
            {project.featured && (
              <span className="absolute top-3 left-3 rounded-full bg-black/30 px-2.5 py-1 font-mono text-[10px] tracking-wider text-white uppercase backdrop-blur">
                Featured
              </span>
            )}
          </div>

          <div className="relative flex flex-col p-6">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-heading text-xl font-semibold tracking-tight">{project.title}</h3>
                {project.subtitle && <p className="mt-0.5 text-sm text-brand">{project.subtitle}</p>}
              </div>
              {href && (
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.title}`}
                  className="grid size-8 shrink-0 place-items-center rounded-full border text-muted-foreground transition-all group-hover:rotate-45 group-hover:border-brand/50 group-hover:text-foreground"
                >
                  <ArrowUpRightIcon className="size-4" />
                </a>
              )}
            </div>
            <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="font-mono text-[11px] font-normal">
                  {tag}
                </Badge>
              ))}
            </div>
            {(project.repo || project.live) && (
              <div className="mt-auto flex flex-wrap gap-2 pt-6">
                {project.repo && (
                  <Button asChild variant="outline" size="sm" className="rounded-full">
                    <a href={project.repo} target="_blank" rel="noreferrer">
                      <FaGithub /> Code
                    </a>
                  </Button>
                )}
                {project.live && (
                  <Button asChild size="sm" className="rounded-full">
                    <a href={project.live} target="_blank" rel="noreferrer">
                      Live site <ArrowUpRightIcon />
                    </a>
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </Reveal>
  );
}

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected work"
      title="Research & projects"
      description="From security research to web platforms that help students and communities."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
      <Reveal className="mt-10 flex justify-center">
        <Button asChild variant="ghost" className="group rounded-full">
          <a href={`${socials.github.url}?tab=repositories`} target="_blank" rel="noreferrer">
            <FaGithub /> See more on GitHub
            <ArrowUpRightIcon className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </Button>
      </Reveal>
    </Section>
  );
}
