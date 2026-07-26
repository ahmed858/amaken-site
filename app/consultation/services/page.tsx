import React from 'react';
import { ServicesHero } from '@/components/consultation/ServicesHero';
import { MarketResearchDeepDive } from '@/components/consultation/MarketResearchDeepDive';
import { HbuStudiesDetail } from '@/components/consultation/HbuStudiesDetail';
import { ConsultationSuccessHighlights } from '@/components/consultation/ConsultationSuccessHighlights';
import { ServicesBottomCTA } from '@/components/consultation/ServicesBottomCTA';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <ServicesHero />
      <MarketResearchDeepDive />
      <HbuStudiesDetail />
      <ConsultationSuccessHighlights />
      <ServicesBottomCTA />
    </main>
  );
}
