import { SITE } from '@/lib/data';

export default function JsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['ProfessionalService', 'LocalBusiness'],
        '@id': 'https://joolomee.com/#business',
        name: 'Joolomee',
        alternateName: ['Joana Lopes Mesquita', 'Brand by Root'],
        url: 'https://joolomee.com',
        logo: 'https://joolomee.com/logos/joolomee-small.png',
        image: 'https://joolomee.com/logos/joolomee-full.jpg',
        description:
          'Full Stack Design & Creative Direction studio based in Portimão, Portugal. Brand identity, web design & development, UI/UX, and creative direction for ambitious brands worldwide.',
        priceRange: '€€€',
        telephone: SITE.phone,
        email: SITE.email,
        founder: {
          '@type': 'Person',
          '@id': 'https://joolomee.com/#person',
          name: 'Joana Lopes Mesquita',
          givenName: 'Joana',
          familyName: 'Lopes Mesquita',
          jobTitle: 'Full Stack Designer & Creative Director',
          url: 'https://joolomee.com/about',
          image: 'https://joolomee.com/logos/joolomee-full.jpg',
          knowsLanguage: ['pt', 'en', 'es'],
          sameAs: [SITE.linkedin, SITE.behance, SITE.instagram],
          address: { '@type': 'PostalAddress', addressLocality: 'Portimão', addressRegion: 'Algarve', addressCountry: 'PT' },
        },
        address: { '@type': 'PostalAddress', addressLocality: 'Portimão', addressRegion: 'Algarve', postalCode: '8500', addressCountry: 'PT' },
        geo: { '@type': 'GeoCoordinates', latitude: SITE.geo.lat, longitude: SITE.geo.lon },
        areaServed: [
          { '@type': 'Country', name: 'Portugal' },
          { '@type': 'Country', name: 'Spain' },
          { '@type': 'Country', name: 'United Kingdom' },
          { '@type': 'Place', name: 'Europe' },
          { '@type': 'Place', name: 'Worldwide' },
        ],
        serviceArea: { '@type': 'GeoCircle', geoMidpoint: { '@type': 'GeoCoordinates', latitude: SITE.geo.lat, longitude: SITE.geo.lon }, geoRadius: 20000000 },
        knowsAbout: ['Brand Identity Design', 'Web Design', 'Web Development', 'Creative Direction', 'UI/UX Design', 'Webflow Development', 'Next.js Development', 'Social Media Design', 'Motion Graphics', 'Presentation Design'],
        sameAs: [SITE.linkedin, SITE.behance, SITE.instagram],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Design & Development Services',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Brand Strategy & Identity', serviceType: 'Branding' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Brand Refresh & Rebrand', serviceType: 'Branding' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Design & Development', serviceType: 'Web Development' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'UI/UX Design', serviceType: 'Design' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Social Media & Marketing Design', serviceType: 'Marketing' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Creative Direction', serviceType: 'Creative Services' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Presentation & Motion', serviceType: 'Motion Graphics' } },
          ],
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://joolomee.com/#website',
        name: 'Joolomee',
        alternateName: 'Remember me, Joolomee.',
        url: 'https://joolomee.com',
        inLanguage: ['en', 'pt', 'es', 'fr', 'de', 'it', 'nl'],
        publisher: { '@id': 'https://joolomee.com/#business' },
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://joolomee.com/work?q={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://joolomee.com/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What services does Joolomee offer?',
            acceptedAnswer: { '@type': 'Answer', text: 'Brand strategy and identity, brand refresh and rebrand, web design and development (Next.js, Webflow), UI/UX design, social media and marketing design, creative direction, and presentation and motion.' },
          },
          {
            '@type': 'Question',
            name: 'Where is Joolomee based?',
            acceptedAnswer: { '@type': 'Answer', text: 'Portimão, Algarve, Portugal — serving clients remotely across Europe and worldwide.' },
          },
          {
            '@type': 'Question',
            name: 'Which languages does Joana work in?',
            acceptedAnswer: { '@type': 'Answer', text: 'Portuguese (native), English and Spanish — fluently.' },
          },
          {
            '@type': 'Question',
            name: 'How does the process work?',
            acceptedAnswer: { '@type': 'Answer', text: 'Five steps: Listen (free discovery call), Map (strategy), Explore (visual directions), Craft (design & build), Launch (delivery + 30 days of care).' },
          },
        ],
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
