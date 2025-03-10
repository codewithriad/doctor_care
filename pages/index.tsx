import FindADoctor from "@/Components/FindADoctor";
import Hero from "@/Components/hero";
import Navbar from "@/Components/Navbar";
import Results from "@/Components/Results";
import Services from "@/Components/Services";
import TeamMembers from "@/Components/TeamMembers";
import WhyUs from "@/Components/WhyUs";
// import team from "./api/team";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto">
        <Hero />
        {/* Adding a find a doctor component */}
        <FindADoctor />
        {/* Adding a results component */}
        <Results />
        {/* why choose use component */}
        <WhyUs />
        {/* Services we're providing */}
        <Services />
        {/* Our team members */}
        <TeamMembers />
      </main>
    </>
  );
}
