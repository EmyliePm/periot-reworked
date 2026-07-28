import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Intro from "@/components/Intro/Intro";
import FeaturedWork from "@/components/FeaturedWork/FeaturedWork";
import Process from "@/components/Process/Process";
import CollectionIntro from "@/components/CollectionIntro/CollectionIntro";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Intro />
        <FeaturedWork />
        <Process />
        <CollectionIntro />
        <Contact />
      </main>
    </>
  );
}