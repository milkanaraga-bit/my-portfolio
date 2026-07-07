import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Expertise } from "@/components/sections/expertise";
import { Projects } from "@/components/sections/projects";
import { Websites } from "@/components/sections/websites";
import { Certifications } from "@/components/sections/certifications";
import { Process } from "@/components/sections/process";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";
import { Skills } from "@/components/sections/skills";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Projects />
        <Websites />
        <Certifications />
        <Process />
        <Testimonials />
        <Contact />
        <Skills />
      </main>
      <Footer />
    </>
  );
}
