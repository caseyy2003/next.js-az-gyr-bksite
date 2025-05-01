// src/app/metadata.ts (This is a server component)
export const metadata = {
    title: "Arizona Bankruptcy Attorney |Serving All of Arizona",
    description: "Get expert bankruptcy assistance anywhere in Arizona. We provide Chapter 7 & Chapter 13 consultations in office or online. Free case evaluation.",
    keywords: "Bankruptcy Attorney, Debt Relief, Chapter 7, Chapter 13, Bankruptcy Lawyer",
    openGraph: {
      title: "Arizona Bankruptcy Attorney | Serving All of Arizona",
      description: "Get expert bankruptcy assistance in Arizona. We provide Chapter 7 & Chapter 13 consultations in office and online. Free consultaiton.",
      url: "https://yourwebsite.com",
      type: "website",
    },
    other: {
      "application/ld+json": JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LegalService",
        "name": "Arizona Bankruptcy Law Firm",
        "description": "In office or online ankruptcy assistance for Chapter 7 & Chapter 13. Get expert debt relief guidance today.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "4425 E Agave Rd. Suite 110",
          "addressLocality": "Phoenix",
          "addressRegion": "AZ",
          "postalCode": "85044",
          "addressCountry": "US",
        },
        "telephone": "+1-480-886-0339",
        "url": "https://myazlawfirm.com",
      }),
    },
  };
  