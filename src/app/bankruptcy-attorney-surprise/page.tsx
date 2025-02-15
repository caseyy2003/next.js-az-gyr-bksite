import Link from "next/link";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { serviceAreas } from "@/constants/serviceAreas";
import { generateMetadata } from "@/utils/generateMetadata"; // Import the function

export const metadata = generateMetadata("Surprise"); // Dynamic Metadata

const SurpriseBankruptcyPage = () => {
  return (
    <div className="container mx-auto p-6">
      
      {/* Page Content */}
      <h1 className="text-3xl font-bold mb-4">Bankruptcy Attorney in Surprise</h1>
      <p className="mb-6 text-lg">
        If you are struggling with overwhelming debt in Surprise, Arizona, bankruptcy may be a solution to regain financial stability. Our experienced bankruptcy attorneys provide **virtual legal services**, ensuring a smooth process from start to finish. Whether you need help with **Chapter 7 bankruptcy** to eliminate debt or **Chapter 13 bankruptcy** to restructure payments, we are here to assist you.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Understanding Your Bankruptcy Options</h2>
      <p className="mb-4">
        Bankruptcy is a legal tool designed to provide relief from financial burdens. Understanding the differences between **Chapter 7** and **Chapter 13** bankruptcy is crucial for making an informed decision.
      </p>
      <ul className="list-disc ml-6">
        <li><strong>Chapter 7 Bankruptcy</strong> – Eliminates most unsecured debts, including credit card bills and medical expenses, offering a fresh start.</li>
        <li><strong>Chapter 13 Bankruptcy</strong> – Establishes a structured repayment plan, allowing individuals to manage their debts while keeping important assets.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Benefits of Filing for Bankruptcy in Surprise</h2>
      <p className="mb-4">
        Filing for bankruptcy offers both immediate legal protection and long-term financial benefits:
      </p>
      <ul className="list-disc ml-6">
        <li>Stops collection calls and creditor harassment.</li>
        <li>Prevents wage garnishments and bank levies.</li>
        <li>Halts foreclosure proceedings, allowing homeowners to explore repayment solutions.</li>
        <li>Eliminates qualifying unsecured debts.</li>
        <li>Provides an opportunity to rebuild credit over time.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Who Qualifies for Bankruptcy?</h2>
      <p className="mb-4">
        Eligibility for **Chapter 7** bankruptcy is determined by a **Means Test**, which compares your income to the Arizona state median. **Chapter 13** bankruptcy is an option for those with regular income who want to restructure their debt under court supervision. Our attorneys evaluate each case to determine the best approach for your financial situation.
      </p>

      <h2 className="text-2xl font-semibold mt-6">How Our Virtual Bankruptcy Services Work</h2>
      <p className="mb-4">
        Our law firm offers a streamlined **virtual bankruptcy process**, allowing clients to receive expert legal guidance from the comfort of their homes. The process includes:
      </p>
      <ul className="list-disc ml-6">
        <li>A free consultation to assess your financial situation.</li>
        <li>Preparation and review of all necessary bankruptcy documents.</li>
        <li>Electronic filing of your bankruptcy petition.</li>
        <li>Legal representation throughout the entire process.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Schedule a Free Bankruptcy Consultation</h2>
      <p className="mb-4">
        If you are considering bankruptcy, speaking with an experienced attorney can help you determine the best course of action. Contact us today for a **free consultation** and take the first step toward financial relief.
      </p>

      {/* Lead Capture Form */}
      <LeadCaptureForm />

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

export default SurpriseBankruptcyPage;
