import React from 'react';
import { ContactHeader } from '../../../components/consultation/ContactHeader';
import { ContactForm } from '../../../components/consultation/ContactForm';
import { ContactSidebar } from '../../../components/consultation/ContactSidebar';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <ContactHeader />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start max-w-7xl mx-auto">
        <ContactForm />
        <ContactSidebar />
      </div>
    </main>
  );
}
