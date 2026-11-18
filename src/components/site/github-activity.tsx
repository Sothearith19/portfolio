"use client";

import { motion } from "framer-motion";
import { ArrowUpRightIcon } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { Reveal } from "@/components/site/section";
import { socials } from "@/data/portfolio";

type Day = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };

const levelClass = [
  "bg-muted",
  "bg-brand/25",
  "bg-brand/50",
  "bg-brand/75",
  "bg-brand",
] as const;

export function GitHubActivity() {
  const [days, setDays] = useState<Day[] | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    // Public contribution data; no token needed.
    fetch(`https://github-contributions-api.jogruber.de/v4/${socials.github.username}?y=last`, {
      signal: controller.signal,
    })
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
      .then((data: { contributions: Day[] }) => setDays(data.contributions))
      .catch((err: unknown) => {
        if (!(err instanceof DOMException && err.name === "AbortError")) setFailed(true);
      });
    return () => controller.abort();
  }, []);

  const { weeks, total } = useMemo(() => {
    if (!days?.length) return { weeks: [] as (Day | null)[][], total: 0 };
    const sorted = [...days].sort((a, b) => a.date.localeCompare(b.date));
    const firstDow = new Date(`${sorted[0].date}T00:00:00Z`).getUTCDay();
    const padded: (Day | null)[] = [...Array(firstDow).fill(null), ...sorted];
    const result: (Day | null)[][] = [];
    for (let i = 0; i < padded.length; i += 7) result.push(padded.slice(i, i + 7));
    return { weeks: result, total: sorted.reduce((s, d) => s + d.count, 0) };
  }, [days]);

  return (
    <Reveal className="mt-16">
      <div className="rounded-2xl border bg-card/60 p-6 backdrop-blur">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <FaGithub className="size-6" />
            <div>
              <p className="font-heading font-semibold">GitHub activity</p>
              <p className="text-sm text-muted-foreground">
                {days
                  ? `${total.toLocaleString()} contributions in the last year`
                  : failed
                    ? "Couldn't load contributions right now."
                    : "Loading contributions…"}
              </p>
            </div>
          </div>
          <a
            href={socials.github.url}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
          >
            @{socials.github.username}
            <ArrowUpRightIcon className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="overflow-x-auto pb-2" dir="rtl">
          <div className="flex w-max gap-[3px]" dir="ltr">
            {weeks.length === 0
              ? Array.from({ length: 53 }).map((_, w) => (
                  <div key={w} className="flex flex-col gap-[3px]">
                    {Array.from({ length: 7 }).map((__, d) => (
                      <div key={d} className="size-[11px] animate-pulse rounded-[3px] bg-muted" />
                    ))}
                  </div>
                ))
              : weeks.map((week, w) => (
                  <motion.div
                    key={w}
                    className="flex flex-col gap-[3px]"
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: w * 0.012, duration: 0.3 }}
                  >
                    {week.map((day, d) =>
                      day ? (
                        <div
                          key={day.date}
                          title={`${day.count} contribution${day.count === 1 ? "" : "s"} on ${day.date}`}
                          className={`size-[11px] rounded-[3px] ${levelClass[day.level]}`}
                        />
                      ) : (
                        <div key={`empty-${d}`} className="size-[11px]" />
                      ),
                    )}
                  </motion.div>
                ))}
          </div>
        </div>

        <div className="mt-3 flex items-center justify-end gap-1.5 text-xs text-muted-foreground">
          Less
          {levelClass.map((c) => (
            <span key={c} className={`size-[11px] rounded-[3px] ${c}`} />
          ))}
          More
        </div>
      </div>
    </Reveal>
  );
}
