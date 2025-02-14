import Head from "next/head";
import Link from "next/link";
import LeadCaptureForm from "@/components/LeadCaptureForm";

export const metadata = {
  title: "Bankruptcy Attorney in Phoenix | Expert Legal Help",
  description: "Looking for a bankruptcy attorney in Phoenix, Arizona? Get expert legal assistance for Chapter 7 and Chapter 13 bankruptcy filings.",
  keywords: "Bankruptcy Attorney Phoenix, Phoenix Chapter 7 Lawyer, Phoenix Chapter 13 Attorney, Debt Relief in Phoenix"
};

const PhoenixBankruptcyPage = () => {
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
              "name": "Phoenix Bankruptcy Attorney",
              "description": "Experienced virtual bankruptcy services in Phoenix, Arizona, helping individuals with Chapter 7 and Chapter 13 filings.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "4425 E Agave Rd. Suite 110",
                "addressLocality": "Phoenix",
                "addressRegion": "AZ",
                "postalCode": "85044",
                "addressCountry": "US"
              },
              "telephone": "+1-480-886-0339",
              "url": "https://yourwebsite.com/bankruptcy-attorney-phoenix"
            })
          }} 
        />
      </Head>

      {/* Page Content */}
      <h1 className="text-3xl font-bold mb-4">Bankruptcy Attorney in Phoenix</h1>
      <p className="mb-6 text-lg">
        If you are struggling with overwhelming debt in Phoenix, filing for bankruptcy may provide a path to financial relief. Our experienced attorneys offer **virtual bankruptcy services**, allowing you to complete the entire process remotely. Whether you need help with **Chapter 7 bankruptcy** to eliminate debt or **Chapter 13 bankruptcy** to restructure it, we provide personalized legal guidance.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Understanding Your Bankruptcy Options</h2>
      <p className="mb-4">
        Bankruptcy is a legal solution that can help individuals eliminate or restructure debt. Knowing the difference between **Chapter 7** and **Chapter 13** bankruptcy can help you make an informed decision.
      </p>
      <ul className="list-disc ml-6">
        <li><strong>Chapter 7 Bankruptcy</strong> – A process that eliminates most unsecured debts, such as credit card balances and medical bills, giving you a financial reset.</li>
        <li><strong>Chapter 13 Bankruptcy</strong> – Allows individuals with regular income to develop a structured repayment plan, preventing foreclosure and repossession.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Benefits of Filing for Bankruptcy in Phoenix</h2>
      <p className="mb-4">
        Filing for bankruptcy provides immediate legal protections and long-term financial benefits:
      </p>
      <ul className="list-disc ml-6">
        <li>Stops creditor harassment and collection calls.</li>
        <li>Prevents wage garnishments and bank levies.</li>
        <li>Halts foreclosure proceedings, allowing homeowners to explore repayment options.</li>
        <li>Discharges eligible unsecured debts, offering financial relief.</li>
        <li>Gives individuals the opportunity to rebuild credit over time.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Who Qualifies for Bankruptcy?</h2>
      <p className="mb-4">
        To file for **Chapter 7**, you must pass a **Means Test**, which compares your income to the Arizona state median. **Chapter 13** is available for those with regular income who want to repay debts under court supervision. Our attorneys assess eligibility and guide clients through the process.
      </p>

      <h2 className="text-2xl font-semibold mt-6">How Our Virtual Bankruptcy Services Work</h2>
      <p className="mb-4">
        Our law firm offers a streamlined **virtual bankruptcy process**, allowing clients to receive professional legal assistance from the comfort of their homes. The process includes:
      </p>
      <ul className="list-disc ml-6">
        <li>Initial consultation to discuss your financial situation.</li>
        <li>Preparation and review of bankruptcy documents.</li>
        <li>Electronic filing of your bankruptcy petition.</li>
        <li>Legal representation throughout the process.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Schedule a Free Bankruptcy Consultation</h2>
      <p className="mb-4">
        If you are considering bankruptcy, speaking with an attorney can help you determine the best course of action. Contact us today for a **free consultation** and take the first step toward financial relief.
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

export default PhoenixBankruptcyPage;
