import Link from "next/link";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { serviceAreas } from "@/constants/serviceAreas";
import { generateMetadata } from "@/utils/generateMetadata"; // Import the function

export const metadata = generateMetadata("Glendale"); // Dynamic Metadata

const GlendaleBankruptcyPage = () => {
  return (
    <div className="container mx-auto p-6">
      {/* Page Content */}
      <h1 className="text-3xl font-bold mb-4">Bankruptcy Attorney in Glendale</h1>
      <p className="mb-6 text-lg">
        If you are facing overwhelming debt in Glendale, bankruptcy may offer a path to financial stability. Our experienced attorneys provide 
        <strong> virtual bankruptcy services</strong>, allowing you to complete the process remotely with expert guidance.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Understanding Your Bankruptcy Options</h2>
      <p className="mb-4">
        Bankruptcy can help individuals eliminate or restructure debt. Understanding the difference between 
        <strong> Chapter 7 </strong> and <strong> Chapter 13 </strong> bankruptcy is crucial when considering your options.
      </p>
      <ul className="list-disc ml-6">
        <li><strong>Chapter 7 Bankruptcy</strong> – Eliminates most unsecured debts, such as credit card balances and medical bills, giving you a financial reset.</li>
        <li><strong>Chapter 13 Bankruptcy</strong> – Allows individuals with regular income to develop a structured repayment plan, preventing foreclosure and repossession.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Benefits of Filing for Bankruptcy in Glendale</h2>
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
        To file for <strong> Chapter 7</strong>, you must pass a <strong>Means Test</strong>, which compares your income to the Arizona state median.
        <strong> Chapter 13</strong> is available for those with regular income who want to repay debts under court supervision. Our attorneys assess eligibility and guide clients through the process.
      </p>

      <h2 className="text-2xl font-semibold mt-6">How Our Virtual Bankruptcy Services Work</h2>
      <p className="mb-4">
        Our law firm offers a streamlined <strong> virtual bankruptcy process</strong>, allowing clients to receive professional legal assistance from the comfort of their homes. The process includes:
      </p>
      <ul className="list-disc ml-6">
        <li>Initial consultation to discuss your financial situation.</li>
        <li>Preparation and review of bankruptcy documents.</li>
        <li>Electronic filing of your bankruptcy petition.</li>
        <li>Legal representation throughout the process.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Schedule a Free Bankruptcy Consultation</h2>
      <p className="mb-4">
        If you are considering bankruptcy, speaking with an attorney can help you determine the best course of action. Contact us today for a <strong> free consultation</strong> and take the first step toward financial relief.
      </p>

      {/* Lead Capture Form */}
      <LeadCaptureForm />

      {/* FAQ Section */}
      <h2 className="text-2xl font-semibold mt-6">Frequently Asked Questions</h2>

      <details className="border rounded-md p-4 my-4">
        <summary className="font-semibold cursor-pointer">How do I know if I qualify for bankruptcy?</summary>
        <p className="mt-2">To file for Chapter 7, you must pass the **Arizona Means Test**. Chapter 13 is available for those with regular income who need a structured repayment plan.</p>
      </details>

      <details className="border rounded-md p-4 my-4">
        <summary className="font-semibold cursor-pointer">How long does bankruptcy take?</summary>
        <p className="mt-2">**Chapter 7 bankruptcy** typically takes **3-6 months**, while **Chapter 13** can last **3-5 years** depending on the repayment plan.</p>
      </details>

      <details className="border rounded-md p-4 my-4">
        <summary className="font-semibold cursor-pointer">Does filing for bankruptcy stop creditors from calling?</summary>
        <p className="mt-2">Yes. Once you file for bankruptcy, an **automatic stay** is issued by the court, stopping creditor harassment, wage garnishments, and collection calls.</p>
      </details>

      {/* Read More Link to Full FAQ Page */}
      <div className="mt-4">
        <Link href="/faq" className="text-blue-500 hover:underline">Read more FAQs</Link>
      </div>

      {/* Nearby Cities Section for Internal Linking */}
      <h2 className="text-2xl font-semibold mt-8">Nearby Cities We Serve</h2>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {serviceAreas.map((area) => (
          <li key={area.slug}>
            <Link href={`/bankruptcy-attorney-${area.slug}`} className="text-blue-600 hover:underline">
              Bankruptcy Attorney in {area.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Back to Homepage */}
      <div className="mt-6">
        <Link href="/" className="text-blue-500 hover:underline">← Back to Home</Link>
      </div>
    </div>
  );
};

export default GlendaleBankruptcyPage;
