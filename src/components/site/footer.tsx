import { ArrowUpIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { profile, socials } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-5xl px-5 pb-10">
      <Separator className="mb-8" />
      <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
        <p>
          © 2026 {profile.name}. Built with Next.js, shadcn/ui &amp; Framer Motion.
        </p>
        <div className="flex items-center gap-5">
          <a href={`${socials.github.url}/portfolio`} target="_blank" rel="noreferrer" className="hover:text-foreground">
            Source
          </a>
          <a
            href="https://github.com/andrefetch/portfolio"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground"
          >
            Original design inspiration
          </a>
          <a href="#top" className="group inline-flex items-center gap-1 hover:text-foreground">
            Top <ArrowUpIcon className="size-3.5 transition-transform group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
