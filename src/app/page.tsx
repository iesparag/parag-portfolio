'use client';

import dynamic from 'next/dynamic';

const Navigation = dynamic(() => import('@/components/Navigation'), { ssr: false });
const HeroSection = dynamic(() => import('@/components/HeroSection'), { ssr: false });
const AboutSection = dynamic(() => import('@/components/AboutSection'), { ssr: false });
const ExperienceSection = dynamic(() => import('@/components/ExperienceSection'), { ssr: false });
const SkillsSection = dynamic(() => import('@/components/SkillsSection'), { ssr: false });
const ProjectsSection = dynamic(() => import('@/components/ProjectsSection'), { ssr: false });
const ContactSection = dynamic(() => import('@/components/ContactSection'), { ssr: false });

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
