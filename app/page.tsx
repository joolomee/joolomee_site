import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Manifesto from '@/components/Manifesto';
import Services from '@/components/Services';
import FeaturedWork from '@/components/FeaturedWork';
import AboutSnippet from '@/components/AboutSnippet';
import ContactCTA from '@/components/ContactCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Manifesto />
      <Services />
      <FeaturedWork />
      <AboutSnippet />
      <ContactCTA />
    </>
  );
}
