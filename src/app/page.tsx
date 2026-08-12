"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutMe } from "@/components/AboutMe";
import { WhatIBuild } from "@/components/WhatIBuild";
import { Experience } from "@/components/VolunteerExperience";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Certifications } from "@/components/Certifications";
import { GitHubActivity } from "@/components/GitHubActivity";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { CursorGlow } from "@/components/CursorGlow";

export default function Home() {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <AboutMe />
        <WhatIBuild />
        <Experience />
        <FeaturedProjects />
        <Skills />
        <Education />
        <Certifications />
        <GitHubActivity />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
