import { GraduationCapIcon } from "lucide-react";
import { Reveal, Section } from "@/components/site/section";
import { profile } from "@/data/portfolio";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About me"
      title={
        <>
          Where business, technology &amp; <span className="text-gradient">security</span> meet.
        </>
      }
    >
      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <div className="space-y-5 text-pretty text-lg leading-relaxed text-muted-foreground">
          {profile.about.map((paragraph, i) => (
            <Reveal key={i} delay={0.1 * i}>
              <p>{paragraph}</p>
            </Reveal>
          ))}
          <Reveal delay={0.25}>
            <a
              href={profile.school.url}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 rounded-xl border bg-card/60 p-3 pr-5 text-sm text-foreground backdrop-blur transition-colors hover:border-brand/50"
            >
              <span className="grid size-10 place-items-center rounded-lg bg-gradient-to-br from-brand/20 to-brand-2/20 text-brand">
                <GraduationCapIcon className="size-5" />
              </span>
              <span>
                <span className="block font-medium">{profile.school.name}</span>
                <span className="text-muted-foreground">
                  {profile.major ? profile.major : "Student"} · {profile.location}
                </span>
              </span>
            </a>
          </Reveal>
        </div>

        <div className="grid content-start gap-3">
          {profile.facts.map((fact, i) => (
            <Reveal key={fact.label} delay={0.1 + i * 0.1}>
              <div className="group relative overflow-hidden rounded-xl border bg-card/60 p-5 backdrop-blur transition-colors hover:border-brand/40">
                <div className="absolute inset-y-0 left-0 w-0.5 bg-gradient-to-b from-brand to-brand-2 opacity-0 transition-opacity group-hover:opacity-100" />
                <p className="font-mono text-xs tracking-wider text-muted-foreground uppercase">{fact.label}</p>
                <p className="mt-1 font-heading text-xl font-semibold">{fact.value}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
