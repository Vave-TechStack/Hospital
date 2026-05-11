import { Metadata } from 'next';
import Navbar from '@/components/Website/Navbar';
import Hero from '@/components/Website/Hero';
import Services from '@/components/Website/Services';
import Journey from '@/components/Website/Journey';
import Doctors from '@/components/Website/Doctors';
import Promise from '@/components/Website/Promise';
import Infrastructure from '@/components/Website/Infrastructure';
import Finance from '@/components/Website/Finance';
import AppointmentForm from '@/components/Website/AppointmentForm';
import Footer from '@/components/Website/Footer';

export const metadata: Metadata = {
  title: 'Vave Fertility Center | Best IVF & Fertility Center in India',
  description: "Vave Fertility Center offers advanced IVF, IUI, and fertility treatments. We've helped 3,00,000+ families embrace the joy of parenthood.",
  keywords: 'fertility center, IVF hyderabad, IUI vijayawada, best fertility hospital AP, TS fertility center, Amma fertility',
};

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Journey />
      <Promise />
      <Services />
      <Infrastructure />
      <Doctors />
      <Finance />
      <AppointmentForm />
      <Footer />
    </main>
  );
}

