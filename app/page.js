import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import HowItWorks from "@/components/HowItWorks";
import Bored from "@/components/Bored";
import Experiences from "@/components/Experiences";
import Stats from "@/components/Stats";
import Quotes from "@/components/Quotes";
import Cities from "@/components/Cities";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <Ticker />
      <HowItWorks />
      <Bored />
      <Experiences />
      <Stats />
      <Quotes />
      <Cities />
      <Faq />
      <Footer />
    </>
  );
}
