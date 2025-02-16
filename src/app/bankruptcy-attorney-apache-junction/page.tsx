import Link from "next/link";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { serviceAreas } from "@/constants/serviceAreas";
import { generateMetadata } from "@/utils/generateMetadata"; // Import the function

export const metadata = generateMetadata("Apache Junction"); // Dynamic Metadata

const ApacheJunctionBankruptcyPage = () => {
  return (
    <div className="container mx-auto p-6">
      {/* Page Content */}
      <h1 className="text-3xl font-bold mb-4">Bankruptcy Attorney in Apache Junction</h1>
      <p className="mb-6 text-lg">
        If you are facing financial struggles in <strong>Apache Junction, Arizona</strong>, filing for bankruptcy may be a viable option for debt relief. Our experienced attorneys offer <strong>virtual bankruptcy services</strong>, allowing you to complete the entire process remotely.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Understanding Your Bankruptcy Options</h2>
      <p className="mb-4">
        Bankruptcy is a legal tool that helps individuals in **Apache Junction** eliminate or restructure debt. Understanding the difference between **Chapter 7** and **Chapter 13** bankruptcy is key to making the right decision.
      </p>
      <ul className="list-disc ml-6">
        <li><strong>Chapter 7 Bankruptcy</strong> – Eliminates most unsecured debts, such as credit card balances and medical bills.</li>
        <li><strong>Chapter 13 Bankruptcy</strong> – Provides a structured repayment plan to help individuals avoid foreclosure and repossession.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Who Qualifies for Bankruptcy in Apache Junction?</h2>
      <p className="mb-4">
        **Chapter 7** requires passing a **Means Test**, comparing your income to the Arizona state median. **Chapter 13** is for individuals with a regular income who need a repayment plan.
      </p>

      <h2 className="text-2xl font-semibold mt-6">How Our Virtual Bankruptcy Services Work</h2>
      <p className="mb-4">
        Our **virtual bankruptcy process** helps clients in **Apache Junction** complete bankruptcy filings from home, including:
      </p>
      <ul className="list-disc ml-6">
        <li>Consultation to assess your financial situation.</li>
        <li>Preparation and review of bankruptcy documents.</li>
        <li>Electronic filing of your petition.</li>
        <li>Full legal representation throughout the process.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Schedule a Free Bankruptcy Consultation</h2>
      <p className="mb-4">
        If you are considering bankruptcy, schedule a **free consultation** today to explore your options for financial relief.
      </p>

      {/* Lead Capture Form */}
      <LeadCaptureForm />

      {/* FAQ Section for SEO & User Engagement */}
      <h2 className="text-2xl font-semibold mt-6">Frequently Asked Questions</h2>

      <details className="border rounded-md p-4 my-4">
        <summary className="font-semibold cursor-pointer">What is the difference between Chapter 7 and Chapter 13 bankruptcy?</summary>
        <p className="mt-2">Chapter 7 eliminates most debts, while Chapter 13 involves a structured repayment plan.</p>
      </details>

      <details className="border rounded-md p-4 my-4">
        <summary className="font-semibold cursor-pointer">Will bankruptcy stop wage garnishment?</summary>
        <p className="mt-2">Yes, filing for bankruptcy triggers an **automatic stay**, which stops wage garnishments immediately.</p>
      </details>

      <details className="border rounded-md p-4 my-4">
        <summary className="font-semibold cursor-pointer">How long does bankruptcy stay on my credit report?</summary>
        <p className="mt-2">Chapter 7 bankruptcy stays on your credit report for **10 years**, while Chapter 13 remains for **7 years**.</p>
      </details>

      {/* Read More Link to Full FAQ Page */}
      <div className="mt-6">
        <Link href="/faq" className="text-blue-600 hover:underline">
          Read more FAQs about bankruptcy →
        </Link>
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

export default ApacheJunctionBankruptcyPage;
