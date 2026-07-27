import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Intro from "@/components/Intro/Intro";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Intro />
      </main>
    </>
  );
}
