export const generateMetadata = (city: string) => {
  const slug = `/bankruptcy-attorney-${city.toLowerCase().replace(/ /g, "-")}`;

  return {
    title: `Bankruptcy Attorney in ${city} | Expert Legal Help`,
    description: `Looking for a bankruptcy attorney in ${city}, Arizona? Get expert legal assistance for Chapter 7 and Chapter 13 bankruptcy filings.`,
    keywords: `Bankruptcy Attorney in ${city}, ${city} Bankruptcy Lawyer, Debt Relief Lawyer ${city}, Chapter 7 and Chapter 13 Bankruptcy in ${city}, Arizona Debt Relief`,
    openGraph: {
      title: `Bankruptcy Attorney in ${city} | Expert Legal Help`,
      description: `Looking for a bankruptcy attorney in ${city}, Arizona? Get expert legal assistance for Chapter 7 and Chapter 13 bankruptcy filings.`,
      url: `https://myazlawfirm.com${slug}`,
      type: "article", // More effective for legal and blog-type content
    },
    other: {
      "application/ld+json": JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LegalService",
        "name": `${city} Bankruptcy Attorney`,
        "description": `Experienced bankruptcy services in ${city}, Arizona, helping individuals with Chapter 7 and Chapter 13 filings.`,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "4425 E Agave Rd. Suite 110",
          "addressLocality": "Phoenix",
          "addressRegion": "AZ",
          "postalCode": "85044",
          "addressCountry": "US"
        },
        "telephone": "+1-480-886-0339",
        "url": `https://myazlawfirm.com${slug}` // Use correct dynamic URL
      }),
    },
  };
};
