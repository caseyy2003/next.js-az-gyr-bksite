import Link from "next/link";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { serviceAreas } from "@/constants/serviceAreas";
import { generateMetadata } from "@/utils/generateMetadata"; // Import the function

export const metadata = generateMetadata("Yuma"); // Dynamic Metadata

const YumaBankruptcyPage = () => {
  return (
    <div className="container mx-auto p-6">
      
      {/* Page Content */}
      <h1 className="text-3xl font-bold mb-4">Bankruptcy Attorney in Yuma</h1>
      <p className="mb-6 text-lg">
        If you’re struggling with debt in Yuma, filing for bankruptcy may be the solution you need to regain control of your financial future. Our **experienced bankruptcy attorneys** provide **virtual legal services**, allowing you to complete the process from the comfort of your home. Whether you need **Chapter 7 bankruptcy** for debt elimination or **Chapter 13 bankruptcy** for restructuring, we are here to guide you every step of the way.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Understanding Your Bankruptcy Options</h2>
      <p className="mb-4">
        Bankruptcy is a legal process designed to help individuals eliminate or restructure their debt. The most common types of bankruptcy are:
      </p>
      <ul className="list-disc ml-6">
        <li><strong>Chapter 7 Bankruptcy</strong> – Erases most unsecured debts, including credit card balances and medical bills, giving you a fresh start.</li>
        <li><strong>Chapter 13 Bankruptcy</strong> – Allows individuals with regular income to create a structured repayment plan to catch up on debts while protecting assets.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Benefits of Filing for Bankruptcy in Yuma</h2>
      <p className="mb-4">
        Bankruptcy provides immediate relief from debt collectors and long-term financial benefits, including:
      </p>
      <ul className="list-disc ml-6">
        <li>Stops creditor harassment and collection calls.</li>
        <li>Prevents wage garnishments and lawsuits.</li>
        <li>Stops foreclosure and repossession actions.</li>
        <li>Eliminates eligible unsecured debts, offering financial relief.</li>
        <li>Allows you to rebuild your credit over time.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Who Qualifies for Bankruptcy?</h2>
      <p className="mb-4">
        To file for **Chapter 7**, you must pass a **Means Test**, which compares your income to Arizona’s median. **Chapter 13** is ideal for individuals with regular income who need to reorganize their debts under court supervision. Our attorneys will assess your eligibility and provide personalized legal guidance.
      </p>

      <h2 className="text-2xl font-semibold mt-6">How Our Virtual Bankruptcy Services Work</h2>
      <p className="mb-4">
        Our firm offers a **virtual bankruptcy process**, providing legal assistance remotely. The process includes:
      </p>
      <ul className="list-disc ml-6">
        <li>Free consultation to evaluate your financial situation.</li>
        <li>Preparation and filing of all bankruptcy paperwork.</li>
        <li>Electronic submission of your bankruptcy petition.</li>
        <li>Legal representation throughout the entire process.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Schedule a Free Bankruptcy Consultation</h2>
      <p className="mb-4">
        If you’re considering bankruptcy, consulting with an attorney can help you determine the best course of action. Contact us today for a **free consultation** and take the first step toward financial stability.
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

export default YumaBankruptcyPage;
