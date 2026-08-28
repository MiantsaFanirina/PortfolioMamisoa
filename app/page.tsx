import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Statement } from "@/components/Statement";
import { WorkIndex } from "@/components/WorkIndex";
import { Offers } from "@/components/Offers";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Stack } from "@/components/Stack";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import Loading from "@/components/loading";

export default function Home() {
  return (
    <>
      <Loading />
      <Navigation />
      <main className="relative">
        <Hero />
        <Statement />
        <WorkIndex />
        <Offers />
        <Experience />
        <Education />
        <Stack />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
