import Hero from "@/Components/hero";
import Navbar from "@/Components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto">
        <Hero />
      </main>
    </>
  );
}
