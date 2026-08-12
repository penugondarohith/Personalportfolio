"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutMe } from "@/components/AboutMe";
import { Education } from "@/components/Education";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { Certifications } from "@/components/Certifications";
import { VolunteerExperience } from "@/components/VolunteerExperience";
import { Footer } from "@/components/Footer";
import { CursorGlow } from "@/components/CursorGlow";

/**
 * Home — main landing page composing all sections.
 */
export default function Home() {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <AboutMe />
        <Education />
        <FeaturedProjects />
        <Certifications />
        <VolunteerExperience />
      </main>
      <Footer />
    </>
  );
}
