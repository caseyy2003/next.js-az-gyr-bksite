// src/app/metadata.ts (This is a server component)
export const metadata = {
    title: "Arizona Bankruptcy Attorney | Virtual Debt Relief Assistance",
    description: "Get expert bankruptcy assistance in Arizona. We provide Chapter 7 & Chapter 13 consultations virtually. Free case evaluation.",
    keywords: "Bankruptcy Attorney, Debt Relief, Chapter 7, Chapter 13, Virtual Bankruptcy Lawyer",
    openGraph: {
      title: "Arizona Bankruptcy Attorney | Virtual Debt Relief Assistance",
      description: "Get expert bankruptcy assistance in Arizona. We provide Chapter 7 & Chapter 13 consultations virtually. Free case evaluation.",
      url: "https://yourwebsite.com",
      type: "website",
    },
    other: {
      "application/ld+json": JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LegalService",
        "name": "Arizona Bankruptcy Law Firm",
        "description": "Virtual bankruptcy assistance for Chapter 7 & Chapter 13. Get expert debt relief guidance today.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "4425 E Agave Rd. Suite 110",
          "addressLocality": "Phoenix",
          "addressRegion": "AZ",
          "postalCode": "85044",
          "addressCountry": "US",
        },
        "telephone": "+1-480-886-0339",
        "url": "https://arizonabankruptcyadvocates.com",
      }),
    },
  };
  