"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto px-5 sm:px-10">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />

        <section id="home">
          <Hero />
        </section>

        <Grid />

        <section id="projects">
          <Projects />
        </section>

        <Clients />

        <section id="experience">
          <Experience />
        </section>

        <Approach />

        <section id="contact">
          <Footer />
        </section>
      </div>
    </main>
  );
}
