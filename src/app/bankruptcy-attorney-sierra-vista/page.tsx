import Link from "next/link";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { serviceAreas } from "@/constants/serviceAreas";
import { generateMetadata } from "@/utils/generateMetadata"; // Import the function

export const metadata = generateMetadata("Sierra Vista"); // Dynamic Metadata

const SierraVistaBankruptcyPage = () => {
  return (
    <div className="container mx-auto p-6">
      
      {/* Page Content */}
      <h1 className="text-3xl font-bold mb-4">Bankruptcy Attorney in Sierra Vista</h1>
      <p className="mb-6 text-lg">
        If you’re facing financial difficulties in Sierra Vista, filing for bankruptcy may provide the relief you need. Our experienced bankruptcy attorneys offer **virtual legal services**, making the process convenient and stress-free. Whether you need help with **Chapter 7 bankruptcy** to eliminate debt or **Chapter 13 bankruptcy** to create a repayment plan, we are here to guide you every step of the way.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Understanding Your Bankruptcy Options</h2>
      <p className="mb-4">
        Bankruptcy is a legal solution that can help individuals and families reset their financial situation. Understanding the differences between **Chapter 7** and **Chapter 13** bankruptcy is crucial.
      </p>
      <ul className="list-disc ml-6">
        <li><strong>Chapter 7 Bankruptcy</strong> – Eliminates most unsecured debts, such as credit card balances and medical bills, providing a fresh start.</li>
        <li><strong>Chapter 13 Bankruptcy</strong> – Allows individuals with steady income to create a structured repayment plan, helping prevent foreclosure and repossession.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Benefits of Filing for Bankruptcy in Sierra Vista</h2>
      <p className="mb-4">
        Filing for bankruptcy provides immediate legal protections and long-term financial benefits:
      </p>
      <ul className="list-disc ml-6">
        <li>Stops harassing calls from creditors.</li>
        <li>Prevents wage garnishments and bank levies.</li>
        <li>Halts foreclosure proceedings, giving homeowners time to explore repayment options.</li>
        <li>Eliminates eligible unsecured debts, offering a fresh start.</li>
        <li>Provides an opportunity to rebuild credit over time.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Who Qualifies for Bankruptcy?</h2>
      <p className="mb-4">
        Eligibility for **Chapter 7** bankruptcy is determined by a **Means Test**, which compares your income to the Arizona state median. **Chapter 13** bankruptcy is an option for those with regular income who want to restructure their debt under court supervision. Our attorneys evaluate each case carefully to determine the best path forward.
      </p>

      <h2 className="text-2xl font-semibold mt-6">How Our Virtual Bankruptcy Services Work</h2>
      <p className="mb-4">
        Our firm offers a streamlined **virtual bankruptcy process**, allowing clients to receive professional legal guidance from the comfort of their homes. The process includes:
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

export default SierraVistaBankruptcyPage;
