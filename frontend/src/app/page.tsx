import { Metadata } from 'next';
import Navbar from '@/components/Website/Navbar';
import Hero from '@/components/Website/Hero';
import Services from '@/components/Website/Services';
import AppointmentForm from '@/components/Website/AppointmentForm';
import Footer from '@/components/Website/Footer';

export const metadata: Metadata = {
  title: 'Vave Fertility Center | Best IVF & Fertility Center in AP & TS',
  description: 'Vave Fertility Center offers advanced IVF, IUI, and fertility treatments in Andhra Pradesh and Telangana. Start your parenthood journey with our expert specialists.',
  keywords: 'fertility center, IVF hyderabad, IUI vijayawada, best fertility hospital AP, TS fertility center',
};

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <AppointmentForm />
      <Footer />
    </main>
  );
}
