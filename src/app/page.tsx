import { About } from "@/components/site/about";
import { Awards } from "@/components/site/awards";
import { Background } from "@/components/site/background";
import { Contact } from "@/components/site/contact";
import { Experience } from "@/components/site/experience";
import { Footer } from "@/components/site/footer";
import { GitHubActivity } from "@/components/site/github-activity";
import { Hero } from "@/components/site/hero";
import { Navbar } from "@/components/site/navbar";
import { Projects } from "@/components/site/projects";
import { ScrollProgress } from "@/components/site/scroll-progress";
import { TechStack } from "@/components/site/tech-stack";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Background />
      <Navbar />
      <main className="relative flex flex-col">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <TechStack />
        <div className="mx-auto -mt-16 w-full max-w-5xl px-5">
          <GitHubActivity />
        </div>
        <Awards />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
