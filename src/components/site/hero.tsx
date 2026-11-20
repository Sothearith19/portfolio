"use client";

import { AnimatePresence, motion, useScroll, useTransform, type Variants } from "framer-motion";
import { ArrowDownIcon, ArrowRightIcon, CheckIcon, CopyIcon, FileTextIcon, MapPinIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useCopy } from "@/components/site/use-copy";
import { profile, socials } from "@/data/portfolio";

const ease = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease } },
};

function RotatingRole() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % profile.roles.length), 2400);
    return () => clearInterval(id);
  }, []);

  return (
    // clip-path clips only vertically, so long words are never cut off at the side.
    <span className="relative inline-grid h-[1.15em] align-bottom [clip-path:inset(0_-100vw)]">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={profile.roles[index]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5, ease }}
          className="text-gradient animate-shine col-start-1 row-start-1 whitespace-nowrap"
        >
          {profile.roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

const terminalLines = [
  { prompt: "whoami", out: profile.name },
  { prompt: "major", out: profile.major },
  { prompt: "school", out: profile.school.name },
  { prompt: "focus", out: "Information security awareness" },
];

function TerminalCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateX: 12 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 1, delay: 0.5, ease }}
      className="relative w-full max-w-md [perspective:1000px]"
    >
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-brand/60 via-transparent to-brand-2/60 opacity-70 blur-[1px]" />
      <div className="relative overflow-hidden rounded-2xl border bg-card/80 shadow-2xl shadow-brand/10 backdrop-blur-xl">
        <div className="flex items-center gap-2 border-b px-4 py-3">
          <span className="size-3 rounded-full bg-[#ff5f57]" />
          <span className="size-3 rounded-full bg-[#febc2e]" />
          <span className="size-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 font-mono text-xs text-muted-foreground">~/sothearith — zsh</span>
        </div>
        <div className="space-y-3 p-5 font-mono text-[13px] leading-relaxed">
          {terminalLines.map((line, i) => (
            <motion.div
              key={line.prompt}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 + i * 0.35, duration: 0.4 }}
            >
              <p>
                <span className="text-brand-2">➜</span> <span className="text-brand">~</span>{" "}
                <span className="text-foreground">{line.prompt}</span>
              </p>
              <p className="text-muted-foreground">{line.out}</p>
            </motion.div>
          ))}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 + terminalLines.length * 0.35 }}
          >
            <span className="text-brand-2">➜</span> <span className="text-brand">~</span>{" "}
            <motion.span
              className="inline-block h-4 w-2 translate-y-0.5 bg-foreground"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}

export function Hero() {
  const { copied, copy } = useCopy();
  const { scrollY } = useScroll();
  const hintOpacity = useTransform(scrollY, [0, 150], [1, 0]);

  return (
    <section id="top" className="relative mx-auto flex min-h-svh w-full max-w-5xl flex-col justify-center px-5 pt-28 pb-16">
      <div className="grid items-center gap-14 lg:grid-cols-[1.25fr_1fr]">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border bg-background/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              {profile.status}
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 font-heading text-[2.6rem] leading-[1.08] font-bold tracking-tight sm:text-6xl xl:text-7xl"
          >
            Hi, I&apos;m {profile.shortName}.
            <span className="block text-muted-foreground">
              I&apos;m a <RotatingRole />
            </span>
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-xl text-pretty text-lg text-muted-foreground">
            {profile.tagline}
          </motion.p>

          <motion.p variants={item} className="mt-3 flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPinIcon className="size-4" /> {profile.location}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="group h-11 rounded-full px-6 text-sm shadow-lg shadow-brand/25">
              <a href="#projects">
                View my work
                <ArrowRightIcon className="transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            {profile.resumeUrl && (
              <Button asChild variant="outline" size="lg" className="h-11 rounded-full px-6 text-sm">
                <a href={profile.resumeUrl} target="_blank" rel="noreferrer">
                  <FileTextIcon /> Resume
                </a>
              </Button>
            )}
            <Button
              variant="outline"
              size="lg"
              className="h-11 rounded-full px-6 text-sm"
              onClick={() => copy(profile.email)}
            >
              {copied ? <CheckIcon className="text-emerald-500" /> : <CopyIcon />}
              {copied ? "Email copied!" : "Copy email"}
            </Button>

            <div className="ml-1 flex items-center gap-1">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button asChild variant="ghost" size="icon-lg" className="rounded-full">
                    <a href={socials.github.url} target="_blank" rel="noreferrer" aria-label="GitHub">
                      <FaGithub className="size-5" />
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>@{socials.github.username}</TooltipContent>
              </Tooltip>
              {socials.linkedin && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button asChild variant="ghost" size="icon-lg" className="rounded-full">
                      <a href={socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                        <FaLinkedin className="size-5" />
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>LinkedIn</TooltipContent>
                </Tooltip>
              )}
            </div>
          </motion.div>
        </motion.div>

        <div className="flex justify-center lg:justify-end">
          <TerminalCard />
        </div>
      </div>

      <motion.div
        style={{ opacity: hintOpacity }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 sm:block"
      >
        <motion.a
          href="#about"
          aria-label="Scroll to about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="flex flex-col items-center gap-2 text-xs text-muted-foreground"
        >
          <span className="font-mono tracking-widest uppercase">Scroll</span>
          <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
            <ArrowDownIcon className="size-4" />
          </motion.span>
        </motion.a>
      </motion.div>
    </section>
  );
}
