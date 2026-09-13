import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProblemSection from '@/components/ProblemSection';
import WorkflowSection from '@/components/WorkflowSection';
import FeatureGrid from '@/components/FeatureGrid';
import AIPipeline from '@/components/AIPipeline';
import LandRecordSchema from '@/components/LandRecordSchema';
import ValidationSection from '@/components/ValidationSection';
import GISSection from '@/components/GISSection';
import MonitoringDashboard from '@/components/MonitoringDashboard';
import TechnologyStack from '@/components/TechnologyStack';
import Stakeholders from '@/components/Stakeholders';
import GovernanceImpact from '@/components/GovernanceImpact';
import ArchitectureSection from '@/components/ArchitectureSection';
import CommandPalette from '@/components/CommandPalette';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
        <Navbar />
        <Hero />
        <ProblemSection />
        <WorkflowSection />
        <FeatureGrid />
        <AIPipeline />
        <LandRecordSchema />
        <ValidationSection />
        <GISSection />
        <MonitoringDashboard />
        <TechnologyStack />
        <Stakeholders />
        <GovernanceImpact />
        <ArchitectureSection />
        <CommandPalette />
        <Footer />
    </>
  );
}
