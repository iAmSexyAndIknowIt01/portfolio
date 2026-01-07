import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import PageTransition from "@/components/PageTransition";

export default function Page() {
  return (
    <>
      <Header />
      <PageTransition>
        <main className="container mx-auto space-y-32">
          <Hero />
          <Skills />
          <Experience />
          <Projects />
        </main>
      </PageTransition>
    </>
  );
}
