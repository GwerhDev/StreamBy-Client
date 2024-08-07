"use client"

import { Footer } from '@/components/Sections/Footer';
import { Partners } from '@/components/Sections/Partners';
import { Features } from '@/components/Sections/Features';
import { Presentation } from '@/components/Sections/Presentation';
import { Testimonials } from '@/components/Sections/Testimonials';
import { Documentation } from '@/components/Sections/Documentation';
import { LoggedRedirection } from '@/components/Utils/LoggedRedirection';

export default function Home() {
  return (
    <main>
      <Presentation />
      <Partners />
      <Features />
      <Documentation />
      <Testimonials />
      <Footer />
      <LoggedRedirection />
    </main>
  );
};