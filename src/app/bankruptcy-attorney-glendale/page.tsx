import Head from "next/head";
import Link from "next/link";

export const metadata = {
  title: "Bankruptcy Attorney in Glendale | Virtual Bankruptcy Services",
  description: "Need a bankruptcy attorney in Glendale, Arizona? We provide expert virtual bankruptcy services, helping you file for Chapter 7 or Chapter 13 from home.",
  keywords: "Bankruptcy Attorney Glendale, Chapter 7 Lawyer Glendale, Chapter 13 Attorney Glendale, Virtual Bankruptcy Services"
};

const GlendaleBankruptcyPage = () => {
  return (
    <div>
      {/* SEO Metadata */}
      <Head>
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              "name": "Glendale Bankruptcy Attorney",
              "description": "Experienced virtual bankruptcy services in Glendale, Arizona, helping individuals with Chapter 7 and Chapter 13 filings.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "4425 E Agave Rd. Suite 110",
                "addressLocality": "Phoenix",
                "addressRegion": "AZ",
                "postalCode": "85044",
                "addressCountry": "US"
              },
              "telephone": "+1-555-555-5555",
              "url": "https://yourwebsite.com/bankruptcy-attorney-glendale"
            })
          }} 
        />
      </Head>

      {/* Page Content */}
      <h1>Bankruptcy Attorney in Glendale</h1>
      <p>
        If you’re struggling with overwhelming debt in Glendale, we can help.
        Our virtual bankruptcy services make it easy to file for Chapter 7 or 
        Chapter 13 from the comfort of your home.
      </p>

      <p>
        Schedule a free consultation today to explore your bankruptcy options.
        <Link href="/contact">
          <button>Get a Free Consultation</button>
        </Link>
      </p>

      {/* Nearby Cities Section for Internal Linking */}
      <h2>Nearby Cities We Serve</h2>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
  <li><Link href="/bankruptcy-attorney-phoenix">Phoenix</Link></li>
  <li><Link href="/bankruptcy-attorney-mesa">Mesa</Link></li>
  <li><Link href="/bankruptcy-attorney-chandler">Chandler</Link></li>
  <li><Link href="/bankruptcy-attorney-tempe">Tempe</Link></li>
  <li><Link href="/bankruptcy-attorney-glendale">Glendale</Link></li>
  <li><Link href="/bankruptcy-attorney-scottsdale">Scottsdale</Link></li>
  <li><Link href="/bankruptcy-attorney-peoria">Peoria</Link></li>
  <li><Link href="/bankruptcy-attorney-surprise">Surprise</Link></li>
  <li><Link href="/bankruptcy-attorney-avondale">Avondale</Link></li>
  <li><Link href="/bankruptcy-attorney-goodyear">Goodyear</Link></li>
  <li><Link href="/bankruptcy-attorney-tucson">Tucson</Link></li>
  <li><Link href="/bankruptcy-attorney-flagstaff">Flagstaff</Link></li>
  <li><Link href="/bankruptcy-attorney-prescott">Prescott</Link></li>
  <li><Link href="/bankruptcy-attorney-kingman">Kingman</Link></li>
  <li><Link href="/bankruptcy-attorney-casa-grande">Casa Grande</Link></li>
  <li><Link href="/bankruptcy-attorney-sierra-vista">Sierra Vista</Link></li>
  <li><Link href="/bankruptcy-attorney-apache-junction">Apache Junction</Link></li>
  <li><Link href="/bankruptcy-attorney-bullhead-city">Bullhead City</Link></li>
  <li><Link href="/bankruptcy-attorney-lake-havasu-city">Lake Havasu City</Link></li>
  <li><Link href="/bankruptcy-attorney-maricopa">Maricopa</Link></li>
  <li><Link href="/bankruptcy-attorney-yuma">Yuma</Link></li>
</ul>
    </div>
  );
};

export default GlendaleBankruptcyPage;
