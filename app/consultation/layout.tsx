import React from 'react';
import { ConsultationHeader } from '../../components/consultation/ConsultationHeader';
import { ConsultationFooter } from '../../components/consultation/ConsultationFooter';

export default function ConsultationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <ConsultationHeader />
      <div className="flex-grow">
        {children}
      </div>
      <ConsultationFooter />
    </div>
  );
}
