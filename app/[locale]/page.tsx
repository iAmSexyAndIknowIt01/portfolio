import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";

export default function Page() {
  return (
    <>
      <Header />

      <main className="container mx-auto">
        <Hero />
        <Skills />
        <Experience />
      </main>
    </>
  );
}
