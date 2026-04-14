export default function JsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        name: 'Joolomee',
        alternateName: 'Brand by Root',
        url: 'https://joolomee.com',
        logo: 'https://joolomee.com/logo.svg',
        image: 'https://joolomee.com/joana-photo.jpg',
        description:
          'Full Stack Design & Creative Direction studio. Brand identity, web design & development, creative direction for ambitious brands worldwide.',
        founder: {
          '@type': 'Person',
          name: 'Joana Lopes Mesquita',
          jobTitle: 'Full Stack Designer & Creative Director',
          url: 'https://joolomee.com/about',
          sameAs: ['https://www.linkedin.com/in/joana-lopes-mesquita'],
        },
        address: { '@type': 'PostalAddress', addressLocality: 'Portimão', addressRegion: 'Algarve', addressCountry: 'PT' },
        geo: { '@type': 'GeoCoordinates', latitude: 37.1356, longitude: -8.5379 },
        areaServed: ['Portugal', 'Spain', 'Europe', 'Worldwide'],
        knowsAbout: ['Brand Identity Design','Web Design','Web Development','Creative Direction','UI/UX Design','Webflow Development','Social Media Design','Motion Graphics','Video Production'],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Design & Development Services',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Brand Strategy & Identity' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Brand Refresh & Rebrand' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Design & Development' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'UI/UX Design' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Social Media & Marketing Design' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Creative Direction' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Presentation & Motion' } },
          ],
        },
      },
      {
        '@type': 'WebSite',
        name: 'Joolomee',
        url: 'https://joolomee.com',
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://joolomee.com/work?q={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
