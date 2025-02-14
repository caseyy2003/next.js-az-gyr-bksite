import LeadCaptureForm from "@/components/LeadCaptureForm";
import Head from "next/head";
import Link from "next/link";

export const metadata = {
  title: "Bankruptcy Attorney in Yuma | Virtual Debt Relief Services",
  description: "Need a bankruptcy attorney in Yuma, Arizona? Our virtual bankruptcy services help you file for Chapter 7 or Chapter 13 from the comfort of your home.",
  keywords: "Bankruptcy Attorney Yuma, Chapter 7 Lawyer Yuma, Chapter 13 Attorney Yuma, Virtual Debt Relief Services"
};

const YumaBankruptcyPage = () => {
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
              "name": "Yuma Bankruptcy Attorney",
              "description": "Professional virtual bankruptcy services in Yuma, Arizona, helping individuals with Chapter 7 and Chapter 13 filings remotely.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "4425 E Agave Rd. Suite 110",
                "addressLocality": "Phoenix",
                "addressRegion": "AZ",
                "postalCode": "85044",
                "addressCountry": "US"
              },
              "telephone": "+1-480-886-0339",
              "url": "https://yourwebsite.com/bankruptcy-attorney-yuma"
            })
          }} 
        />
      </Head>

      {/* Page Content */}
      <h1 className="text-3xl font-bold mb-4">Bankruptcy Attorney in Yuma</h1>
      <p className="mb-6 text-lg">
        If you're facing overwhelming debt in Yuma, Arizona, bankruptcy may provide the relief you need. Whether you're dealing with **credit card debt, medical bills, wage garnishments, or foreclosure threats**, our experienced bankruptcy attorneys can help you navigate the process and regain financial stability.
      </p>

      <h2 className="text-2xl font-semibold mt-6">How Bankruptcy Can Help You</h2>
      <p className="mb-4">
        Bankruptcy is a **legal tool** designed to help individuals eliminate or restructure their debts. Filing for **Chapter 7 or Chapter 13 bankruptcy** can:
      </p>
      <ul className="list-disc ml-6">
        <li>✅ **Stop harassing creditor calls and collection actions**</li>
        <li>✅ **Prevent wage garnishment and bank levies**</li>
        <li>✅ **Stop foreclosure and repossession proceedings**</li>
        <li>✅ **Discharge qualifying debts and give you a fresh start**</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Chapter 7 vs. Chapter 13 Bankruptcy</h2>
      <p className="mb-4">
        There are two main types of personal bankruptcy filings available in Arizona:
      </p>
      <ul className="list-disc ml-6">
        <li><strong>Chapter 7 Bankruptcy:</strong> Also known as "liquidation bankruptcy," Chapter 7 eliminates most unsecured debts, such as **credit cards, personal loans, and medical bills**.</li>
        <li><strong>Chapter 13 Bankruptcy:</strong> This is a structured repayment plan that allows individuals to **catch up on secured debts** like **mortgage payments, car loans, and taxes** while keeping their assets.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Who Qualifies for Bankruptcy in Yuma?</h2>
      <p className="mb-4">
        To qualify for **Chapter 7 bankruptcy**, you must pass the **Means Test**, which evaluates your income and financial situation. If you don't qualify for Chapter 7, **Chapter 13 bankruptcy** may be a viable alternative, allowing you to reorganize your debts into manageable payments.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Our Virtual Bankruptcy Process</h2>
      <p className="mb-4">
        Our firm offers a **fully virtual bankruptcy service**, making it easy for Yuma residents to file from the comfort of their homes. The process includes:
      </p>
      <ul className="list-disc ml-6">
        <li>✔️ **Free Consultation:** Discuss your financial situation with a bankruptcy attorney.</li>
        <li>✔️ **Document Preparation:** We help gather and complete all necessary paperwork.</li>
        <li>✔️ **Electronic Filing:** Submit your case without needing to visit a law office.</li>
        <li>✔️ **Legal Representation:** Get guidance every step of the way from an experienced lawyer.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Take Control of Your Financial Future</h2>
      <p className="mb-4">
        Don’t let debt control your life. Take the **first step toward financial freedom** by scheduling a free consultation today.
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

export default YumaBankruptcyPage;
