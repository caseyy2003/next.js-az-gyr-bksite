import LeadCaptureForm from "@/components/LeadCaptureForm";
import Head from "next/head";
import Link from "next/link";

export const metadata = {
  title: "Bankruptcy Attorney in Surprise | Trusted Debt Relief",
  description: "Looking for a bankruptcy attorney in Surprise, Arizona? Get expert legal assistance for Chapter 7 and Chapter 13 bankruptcy filings.",
  keywords: "Bankruptcy Attorney Surprise, Surprise Chapter 7 Lawyer, Surprise Chapter 13 Attorney, Debt Relief in Surprise"
};

const SurpriseBankruptcyPage = () => {
  return (
    <div className="container mx-auto p-6">
      {/* SEO Metadata */}
      <Head>
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              "name": "Surprise Bankruptcy Attorney",
              "description": "Experienced virtual bankruptcy services in Surprise, Arizona, assisting individuals with Chapter 7 and Chapter 13 bankruptcy filings.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "4425 E Agave Rd. Suite 110",
                "addressLocality": "Phoenix",
                "addressRegion": "AZ",
                "postalCode": "85044",
                "addressCountry": "US"
              },
              "telephone": "+1-480-886-0339",
              "url": "https://yourwebsite.com/bankruptcy-attorney-surprise"
            })
          }} 
        />
      </Head>

      {/* Page Content */}
      <h1 className="text-3xl font-bold mb-4">Bankruptcy Attorney in Surprise</h1>
      <p className="mb-6 text-lg">
        If you are struggling with overwhelming debt in Surprise, bankruptcy may be a viable solution. Our experienced attorneys offer virtual bankruptcy services, allowing you to file for Chapter 7 or Chapter 13 bankruptcy remotely. We are committed to helping you regain financial control.
      </p>

      <h2 className="text-2xl font-semibold mt-6">How Bankruptcy Can Help</h2>
      <p className="mb-4">
        Bankruptcy is a legal process that helps individuals eliminate or restructure debt. Key benefits include:
      </p>
      <ul className="list-disc ml-6">
        <li>Stopping creditor harassment and collection calls</li>
        <li>Preventing wage garnishments and bank levies</li>
        <li>Halting foreclosure and repossession proceedings</li>
        <li>Providing a structured repayment plan or complete debt discharge</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Chapter 7 and Chapter 13 Bankruptcy</h2>
      <p className="mb-4">
        Understanding the differences between Chapter 7 and Chapter 13 bankruptcy can help you determine the best course of action.
      </p>
      <ul className="list-disc ml-6">
        <li><strong>Chapter 7 Bankruptcy</strong> – Eliminates most unsecured debts, including medical bills and credit card balances</li>
        <li><strong>Chapter 13 Bankruptcy</strong> – A structured repayment plan that allows individuals to manage debt over time while keeping assets</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Who Qualifies for Bankruptcy in Surprise?</h2>
      <p className="mb-4">
        Bankruptcy eligibility depends on various factors, including income, assets, and debt type. To file for Chapter 7, you must pass a Means Test that evaluates your financial situation. Chapter 13 is available for those with regular income who want to restructure debt and avoid foreclosure.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Our Virtual Bankruptcy Process</h2>
      <p className="mb-4">
        We offer a streamlined virtual bankruptcy process, allowing you to complete your filing remotely. The process includes:
      </p>
      <ul className="list-disc ml-6">
        <li>Comprehensive consultation to assess your financial situation</li>
        <li>Preparation and review of all bankruptcy paperwork</li>
        <li>Electronic filing of your bankruptcy case</li>
        <li>Legal representation throughout the process</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Schedule a Free Bankruptcy Consultation</h2>
      <p className="mb-4">
        If you are considering bankruptcy, speaking with an experienced attorney can help you determine the best course of action. Contact us today for a free consultation and take the first step toward financial relief.
      </p>

      {/* Lead Capture Form */}
      <LeadCaptureForm />

      {/* Nearby Cities Section for Internal Linking */}
      <h2 className="text-2xl font-semibold mt-8">Nearby Cities We Serve</h2>
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

      {/* Back to Homepage */}
      <div className="mt-6">
        <Link href="/" className="text-blue-500 hover:underline">← Back to Home</Link>
      </div>
    </div>
  );
};

export default SurpriseBankruptcyPage;
