import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Intro from "@/components/Intro/Intro";
import FeaturedWork from "@/components/FeaturedWork/FeaturedWork";
import Process from "@/components/Process/Process";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Intro />
        <FeaturedWork />
        <Process />
      </main>
    </>
  );
}