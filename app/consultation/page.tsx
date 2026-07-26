import React from 'react';
import { ConsultationHero } from '../../components/consultation/ConsultationHero';
import { TrustSignals } from '../../components/consultation/TrustSignals';
import { CoreServices } from '../../components/consultation/CoreServices';
import { StrategicForesight } from '../../components/consultation/StrategicForesight';
import { ClientLogos } from '../../components/consultation/ClientLogos';
import { ConsultationCTA } from '../../components/consultation/ConsultationCTA';

export default function ConsultationPage() {
  return (
    <main className="min-h-screen bg-white">
      <ConsultationHero />
      {/* <TrustSignals /> */}
      <CoreServices />
      <StrategicForesight />
      <ClientLogos />
      <ConsultationCTA />
    </main>
  );
}
