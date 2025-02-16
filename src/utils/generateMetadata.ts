export const generateMetadata = (city: string) => {
    return {
      title: `Bankruptcy Attorney in ${city} | Expert Legal Help`,
      description: `Looking for a bankruptcy attorney in ${city}, Arizona? Get expert legal assistance for Chapter 7 and Chapter 13 bankruptcy filings.`,
      keywords: `Bankruptcy Attorney ${city}, ${city} Chapter 7 Lawyer, ${city} Chapter 13 Attorney, Debt Relief in ${city}`,
      openGraph: {
        title: `Bankruptcy Attorney in ${city} | Expert Legal Help`,
        description: `Looking for a bankruptcy attorney in ${city}, Arizona? Get expert legal assistance for Chapter 7 and Chapter 13 bankruptcy filings.`,
        url: `https://yourwebsite.com/bankruptcy-attorney-${city.toLowerCase()}`,
        type: "website",
      },
      other: {
        "application/ld+json": JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LegalService",
          "name": `${city} Bankruptcy Attorney`,
          "description": `Experienced virtual bankruptcy services in ${city}, Arizona, helping individuals with Chapter 7 and Chapter 13 filings.`,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "4425 E Agave Rd. Suite 110",
            "addressLocality": "Phoenix",
            "addressRegion": "AZ",
            "postalCode": "85044",
            "addressCountry": "US"
          },
          "telephone": "+1-480-886-0339",
          "url": `https://arizonabankruptcyadvocates.com`
        })
      }
    };
  };
  