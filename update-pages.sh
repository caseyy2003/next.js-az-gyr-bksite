#!/bin/bash

# List of cities and their slugs
declare -A cities
cities["phoenix"]="Phoenix"
cities["mesa"]="Mesa"
cities["chandler"]="Chandler"
cities["glendale"]="Glendale"
cities["tempe"]="Tempe"
cities["peoria"]="Peoria"
cities["scottsdale"]="Scottsdale"
cities["surprise"]="Surprise"
cities["avondale"]="Avondale"
cities["goodyear"]="Goodyear"

# Loop through each city and generate the page.tsx
for slug in "${!cities[@]}"; do
  city="${cities[$slug]}"

  # Ensure directory exists
  mkdir -p /Users/caseyyontz/Desktop/my-blogs/src/app/bankruptcy-attorney-$slug

  # Generate nearby cities list (excluding the current city)
  nearby_cities=""
  for neighbor in "${!cities[@]}"; do
    if [[ "$neighbor" != "$slug" ]]; then
      nearby_cities+="  { name: \"${cities[$neighbor]}\", slug: \"$neighbor\" },\n"
    fi
  done

  # Write the corrected page.tsx
  cat <<EOP > /Users/caseyyontz/Desktop/my-blogs/src/app/bankruptcy-attorney-$slug/page.tsx
import Head from 'next/head';

const ${city}BankruptcyPage = () => {
  // JSON-LD Structured Data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Virtual Bankruptcy Attorney in ${city}",
    "address": { 
      "@type": "PostalAddress", 
      "streetAddress": "4425 E Agave Rd. Suite 110", 
      "addressLocality": "Phoenix",
      "addressRegion": "AZ", 
      "postalCode": "85044", 
      "addressCountry": "US" 
    },
    "serviceArea": { "@type": "AdministrativeArea", "name": "${city}" },
    "url": "https://yourwebsite.com/bankruptcy-attorney-$slug",
    "description": "Expert virtual bankruptcy services in ${city}, Arizona."
  };

  // Nearby service areas
  const nearbyCities = [
    
  ];

  return (
    <>
      <Head>
        <title>Bankruptcy Attorney in ${city} | Virtual Bankruptcy Law Firm</title>
        <meta name="description" content="Expert bankruptcy attorney services in ${city}, Arizona. We provide virtual bankruptcy services to help you achieve debt relief." />
        <meta name="keywords" content="Bankruptcy Attorney, ${city} Bankruptcy Lawyer, Debt Relief, Chapter 7, Chapter 13, Virtual Bankruptcy" />

        {/* JSON-LD Structured Data for SEO */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>

      <div>
        <h1>Bankruptcy Attorney in ${city}</h1>
        <p>We provide expert virtual bankruptcy services to residents of ${city}, Arizona. Get professional debt relief guidance from the comfort of your home.</p>

        <h2>Nearby Service Areas</h2>
        <ul>
          {nearbyCities.map((city) => (
            <li key={city.slug}>
              <a href={`/bankruptcy-attorney-${city.slug}`}>
                Bankruptcy Attorney in ${city.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ${city}BankruptcyPage;
EOP
done
