import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Assess from "@/components/Assess";
import WhatIs from "@/components/WhatIs";
import Week from "@/components/Week";
import Radar from "@/components/Radar";
import Why from "@/components/Why";
import Referral from "@/components/Referral";
import Diploma from "@/components/Diploma";
import Wave from "@/components/Wave";
import Pricing from "@/components/Pricing";
import Gleb from "@/components/Gleb";
import How from "@/components/How";
import Faq from "@/components/Faq";
import Apply from "@/components/Apply";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Assess />
        <WhatIs />
        <Week />
        <Radar />
        <Why />
        <Referral />
        <Diploma />
        <Wave />
        <Pricing />
        <Gleb />
        <How />
        <Faq />
        <Apply />
      </main>
      <Footer />
    </>
  );
}
