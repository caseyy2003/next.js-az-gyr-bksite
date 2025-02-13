import Head from "next/head";
import Link from "next/link";

export const metadata = {
  title: "Bankruptcy Attorney in Tucson | Virtual Debt Relief Services",
  description: "Need a bankruptcy attorney in Tucson, Arizona? We provide expert virtual bankruptcy services for Chapter 7 and Chapter 13.",
  keywords: "Bankruptcy Attorney Tucson, Chapter 7 Lawyer Tucson, Chapter 13 Attorney Tucson, Virtual Bankruptcy Services"
};

const TucsonBankruptcyPage = () => {
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
              "name": "Tucson Bankruptcy Attorney",
              "description": "Experienced virtual bankruptcy services in Tucson, Arizona, helping individuals with Chapter 7 and Chapter 13 filings.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "4425 E Agave Rd. Suite 110",
                "addressLocality": "Phoenix",
                "addressRegion": "AZ",
                "postalCode": "85044",
                "addressCountry": "US"
              },
              "telephone": "480-886-0339",
              "url": "https://yourwebsite.com/bankruptcy-attorney-tucson"
            })
          }} 
        />
      </Head>

      {/* Page Content */}
      <h1>Bankruptcy Attorney in Tucson</h1>
      <p>
        Are you struggling with overwhelming debt in Tucson? Our virtual bankruptcy services allow you to file for 
        Chapter 7 or Chapter 13 bankruptcy from the comfort of your home. We provide personalized, expert legal 
        assistance to help you achieve financial freedom.
      </p>

      <p>
        <strong>Why Choose Us?</strong>  
        - 🏠 **100% Virtual Process** – No need to visit an office  
        - 💼 **Experienced Bankruptcy Attorney** – 17+ years of experience  
        - 📞 **Free Consultation** – Call **480-886-0339** today!
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

      {/* Featured Blog Posts */}
      <h2>Learn More About Bankruptcy</h2>
      <ul>
        <li><Link href="/arizona-bankruptcy-lawyers-blog/chapter-7-bankruptcy">Understanding Chapter 7 Bankruptcy</Link></li>
        <li><Link href="/arizona-bankruptcy-lawyers-blog/chapter-13-bankruptcy">Chapter 13 Bankruptcy Explained</Link></li>
        <li><Link href="/arizona-bankruptcy-lawyers-blog/bankruptcy-credit-score">How Bankruptcy Affects Your Credit Score</Link></li>
      </ul>
    </div>
  );
};

export default TucsonBankruptcyPage;
