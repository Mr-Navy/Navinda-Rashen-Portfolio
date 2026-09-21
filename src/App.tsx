import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { ProjectShowcase } from './components/ProjectShowcase';
import { OtherProjects } from './components/OtherProjects';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { BuildingInPublic } from './components/BuildingInPublic';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CVModal } from './components/CVModal';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [cvModalOpen, setCvModalOpen] = useState<boolean>(false);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'work', 'about', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#060807] text-[#f0fdf4] font-sans antialiased overflow-x-hidden selection:bg-[#10ef6f] selection:text-black">
      {/* ========================================================= */}
      {/* Ambient Background Glows inspired by Reference Image       */}
      {/* ========================================================= */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[700px] h-[550px] bg-[#10ef6f]/12 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="fixed top-[40%] right-[-10%] w-[500px] h-[500px] bg-[#10ef6f]/8 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="fixed bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#00e065]/7 rounded-full blur-[180px] pointer-events-none -z-10" />

      {/* Floating Header Navigation */}
      <Navbar
        activeSection={activeSection}
        onContactClick={() => setActiveSection('contact')}
      />

      {/* Main Content Area */}
      <main className="w-full pt-20">
        {/* HERO SECTION */}
        <Hero onOpenCV={() => setCvModalOpen(true)} />

        {/* INTERACTIVE COMMAND INTERFACE (Intro Status / Query) */}
        <InteractiveTerminal />

        {/* 01 / SELECTED WORK */}
        <ProjectShowcase />

        {/* RESEARCH & OPEN SOURCE ARCHIVES */}
        <OtherProjects />

        {/* 02 / ABOUT ME */}
        <About />

        {/* 03 / CAPABILITIES (My Skills) */}
        <Skills />

        {/* LIVE TELEMETRY (Building in Public) */}
        <BuildingInPublic />

        {/* 05 / GET IN TOUCH */}
        <Contact />
      </main>

      {/* FOOTER */}
      <Footer />

      {/* CV Modal */}
      <CVModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />
    </div>
  );
}
