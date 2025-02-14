import Head from "next/head";
import Link from "next/link";
import LeadCaptureForm from "@/components/LeadCaptureForm";

export const metadata = {
  title: "Bankruptcy Attorney in Flagstaff | Virtual Debt Relief Services",
  description: "Looking for a bankruptcy attorney in Flagstaff, Arizona? We provide expert virtual bankruptcy services, helping you file for Chapter 7 or Chapter 13 from home.",
  keywords: "Bankruptcy Attorney Flagstaff, Chapter 7 Lawyer Flagstaff, Chapter 13 Attorney Flagstaff, Debt Relief Flagstaff"
};

const FlagstaffBankruptcyPage = () => {
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
              "name": "Flagstaff Bankruptcy Attorney",
              "description": "Experienced virtual bankruptcy services in Flagstaff, Arizona, assisting individuals with Chapter 7 and Chapter 13 bankruptcy filings.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "4425 E Agave Rd. Suite 110",
                "addressLocality": "Phoenix",
                "addressRegion": "AZ",
                "postalCode": "85044",
                "addressCountry": "US"
              },
              "telephone": "+1-480-886-0339",
              "url": "https://yourwebsite.com/bankruptcy-attorney-flagstaff"
            })
          }} 
        />
      </Head>

      {/* Page Content */}
      <h1 className="text-3xl font-bold mb-4">Bankruptcy Attorney in Flagstaff</h1>
      <p className="mb-6 text-lg">
        If you are facing overwhelming debt in Flagstaff, our virtual bankruptcy services can provide a solution. Whether you need assistance with **Chapter 7 bankruptcy** to eliminate unsecured debt or a **Chapter 13 repayment plan** to restructure your finances, we can help you every step of the way.
      </p>

      <h2 className="text-2xl font-semibold mt-6">How Bankruptcy Can Help You</h2>
      <p className="mb-4">
        Filing for bankruptcy is a legal way to regain control of your financial future. It can **stop creditor harassment, wage garnishment, repossessions, and even foreclosure.** Our legal team specializes in virtual bankruptcy assistance, ensuring you receive expert legal guidance from the comfort of your home.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Understanding Chapter 7 & Chapter 13 Bankruptcy</h2>
      <ul className="list-disc ml-6">
        <li><strong>Chapter 7 Bankruptcy</strong> - Eliminates most unsecured debts like credit card balances, medical bills, and personal loans.</li>
        <li><strong>Chapter 13 Bankruptcy</strong> - Helps you develop a manageable repayment plan while protecting assets such as your home and car.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Who Qualifies for Bankruptcy in Flagstaff?</h2>
      <p className="mb-4">
        Not everyone is eligible for **Chapter 7**. To qualify, you must pass the **Means Test**, which evaluates your income and expenses. **Chapter 13** is available for individuals with steady income who can commit to a repayment plan. Our attorneys can help you determine the best option based on your unique situation.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Our Virtual Bankruptcy Process</h2>
      <p className="mb-4">
        Filing for bankruptcy has never been easier. Our virtual law firm allows you to complete the entire bankruptcy process remotely, including:
      </p>
      <ul className="list-disc ml-6">
        <li>✔️ **Free Consultation** – Discuss your financial situation with an attorney.</li>
        <li>✔️ **Document Preparation** – We guide you through completing all required forms.</li>
        <li>✔️ **Electronic Filing** – Submit your case online, eliminating the need for in-person court visits.</li>
        <li>✔️ **Legal Representation** – Our attorneys will handle all communications with the court and creditors.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Start Your Bankruptcy Case Today</h2>
      <p className="mb-4">
        If you're considering bankruptcy in Flagstaff, don't wait. Get the legal help you need today with a **free consultation** to discuss your debt relief options.
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

export default FlagstaffBankruptcyPage;
