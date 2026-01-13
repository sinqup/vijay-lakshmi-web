import Header from "@/components/layout/Header";
import About from "@/components/sections/AboutUs";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Machines from "@/components/sections/Machines";
import WhyChooseUs from "@/components/sections/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <WhyChooseUs />
      <About />
      <Machines />
      <CTA />
      <Footer />
    </>
  );
}
