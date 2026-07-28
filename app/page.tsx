import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Intro from "@/components/Intro/Intro";
import FeaturedWork from "@/components/FeaturedWork/FeaturedWork";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Intro />
        <FeaturedWork />
      </main>
    </>
  );
}