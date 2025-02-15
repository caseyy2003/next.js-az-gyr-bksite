import Link from "next/link";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { serviceAreas } from "@/constants/serviceAreas";
import { generateMetadata } from "@/utils/generateMetadata"; // Import the function

export const metadata = generateMetadata("Scottsdale"); // Dynamic Metadata

const ScottsdaleBankruptcyPage = () => {
  return (
    <div className="container mx-auto p-6">
      
      {/* Page Content */}
      <h1 className="text-3xl font-bold mb-4">Bankruptcy Attorney in Scottsdale</h1>
      <p className="mb-6 text-lg">
        If you're facing financial hardship in Scottsdale, filing for bankruptcy may provide the relief you need. Our experienced bankruptcy attorneys offer **virtual legal services**, making it easy to file from the comfort of your home. Whether you need assistance with **Chapter 7 bankruptcy** to eliminate debt or **Chapter 13 bankruptcy** to restructure it, we provide expert legal guidance.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Understanding Your Bankruptcy Options</h2>
      <p className="mb-4">
        Bankruptcy is a powerful legal tool that can help individuals and families regain control of their finances. Understanding the differences between **Chapter 7** and **Chapter 13** bankruptcy is essential.
      </p>
      <ul className="list-disc ml-6">
        <li><strong>Chapter 7 Bankruptcy</strong> – Eliminates most unsecured debts, such as credit card balances and medical bills, giving you a fresh financial start.</li>
        <li><strong>Chapter 13 Bankruptcy</strong> – Allows individuals with regular income to create a structured repayment plan, helping prevent foreclosure and repossession.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Benefits of Filing for Bankruptcy in Scottsdale</h2>
      <p className="mb-4">
        Filing for bankruptcy offers several benefits, including:
      </p>
      <ul className="list-disc ml-6">
        <li>Immediate relief from creditor harassment and collection calls.</li>
        <li>Protection against wage garnishments and bank levies.</li>
        <li>Halting foreclosure proceedings, giving homeowners options for repayment.</li>
        <li>Elimination of eligible unsecured debts for a fresh financial start.</li>
        <li>Opportunities to rebuild your credit over time.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Who Qualifies for Bankruptcy?</h2>
      <p className="mb-4">
        Eligibility for **Chapter 7** bankruptcy is determined by a **Means Test**, which compares your income to the Arizona state median. **Chapter 13** bankruptcy is an option for those with regular income who want to repay debts under court supervision. Our attorneys evaluate each client's situation to determine the best path forward.
      </p>

      <h2 className="text-2xl font-semibold mt-6">How Our Virtual Bankruptcy Services Work</h2>
      <p className="mb-4">
        Our law firm provides **virtual bankruptcy services**, ensuring a smooth and efficient filing process. The process includes:
      </p>
      <ul className="list-disc ml-6">
        <li>An initial consultation to assess your financial situation.</li>
        <li>Preparation and review of all necessary bankruptcy documents.</li>
        <li>Electronic filing of your bankruptcy petition.</li>
        <li>Comprehensive legal representation throughout the process.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Schedule a Free Bankruptcy Consultation</h2>
      <p className="mb-4">
        If you are considering bankruptcy, speaking with an experienced attorney can help you make an informed decision. Contact us today for a **free consultation** and take the first step toward financial relief.
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

export default ScottsdaleBankruptcyPage;
