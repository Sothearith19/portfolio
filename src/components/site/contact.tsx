"use client";

import { motion } from "framer-motion";
import { CheckIcon, CopyIcon, MailIcon } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/section";
import { useCopy } from "@/components/site/use-copy";
import { profile, socials } from "@/data/portfolio";

export function Contact() {
  const { copied, copy } = useCopy();

  return (
    <section id="contact" className="relative mx-auto w-full max-w-5xl px-5 py-24 sm:py-32">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border bg-card/70 px-6 py-16 text-center backdrop-blur sm:px-16">
          <motion.div
            aria-hidden
            className="absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-brand/40 to-brand-2/40 blur-3xl"
            animate={{ opacity: [0.5, 0.9, 0.5], scale: [1, 1.08, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

          <div className="relative">
            <p className="mb-3 font-mono text-xs tracking-widest text-brand uppercase">What&apos;s next?</p>
            <h2 className="mx-auto max-w-2xl font-heading text-4xl font-bold tracking-tight text-balance sm:text-6xl">
              Let&apos;s build something <span className="text-gradient animate-shine">great</span> together.
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-pretty text-muted-foreground sm:text-lg">
              Whether it&apos;s an internship, a collaboration, or just to say hi, my inbox is always open.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg" className="h-12 rounded-full px-7 text-base shadow-xl shadow-brand/30">
                <a href={`mailto:${profile.email}`}>
                  <MailIcon /> Say hello
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-12 rounded-full px-5 font-mono text-sm"
                onClick={() => copy(profile.email)}
                aria-label="Copy email address"
              >
                {copied ? <CheckIcon className="text-emerald-500" /> : <CopyIcon />}
                {copied ? "Copied!" : profile.email}
              </Button>
            </div>

            <div className="mt-8 flex items-center justify-center gap-2">
              <Button asChild variant="ghost" size="icon-lg" className="rounded-full">
                <a href={socials.github.url} target="_blank" rel="noreferrer" aria-label="GitHub">
                  <FaGithub className="size-5" />
                </a>
              </Button>
              {socials.linkedin && (
                <Button asChild variant="ghost" size="icon-lg" className="rounded-full">
                  <a href={socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <FaLinkedin className="size-5" />
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
