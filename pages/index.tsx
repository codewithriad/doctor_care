import MarqueeComponent from "@/Components/Brand/MarqueeComponent";
import FindADoctor from "@/Components/FindADoctor";
import Footer from "@/Components/Footer";
import Hero from "@/Components/hero";
import Navbar from "@/Components/Navbar";
import Newsletter from "@/Components/Newsletter";
import Results from "@/Components/Results";
import Services from "@/Components/Services";
import TeamMembers from "@/Components/TeamMembers";
import Testimonials from "@/Components/Testimonials";
import WhyUs from "@/Components/WhyUs";

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
        {/* our testimonials */}
        <Testimonials />
        {/* our trusted companies */}
        <MarqueeComponent />
        {/* newsletter  */}
        <Newsletter />
      </main>
      {/* Footer */}
      <Footer />
    </>
  );
}
