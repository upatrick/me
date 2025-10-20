import React, { Suspense, lazy } from "react";
import LoadingSpinner from "../components/LoadingSpinner";

// Lazy load components for better code splitting
const Hero = lazy(() => import("../components/Hero"));
const About = lazy(() => import("../components/About"));
const Experience = lazy(() => import("../components/Experience"));
const Projects = lazy(() => import("../components/Projects"));
const Skills = lazy(() => import("../components/Skills"));
const Contact = lazy(() => import("../components/Contact"));

export default function Home() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </Suspense>
  );
}
