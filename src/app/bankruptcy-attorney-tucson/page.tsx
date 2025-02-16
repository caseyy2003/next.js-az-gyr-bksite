import Link from "next/link";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { serviceAreas } from "@/constants/serviceAreas";
import { generateMetadata } from "@/utils/generateMetadata"; // Import the function

export const metadata = generateMetadata("Tucson"); // Dynamic Metadata

const TucsonBankruptcyPage = () => {
  return (
    <div className="container mx-auto p-6">
      
      {/* Page Content */}
      <h1 className="text-3xl font-bold mb-4">Bankruptcy Attorney in Tucson</h1>
      <p className="mb-6 text-lg">
        If you&rsquo;re struggling with debt in Tucson, bankruptcy may provide the financial relief you need. Our experienced attorneys offer **virtual bankruptcy services**, allowing you to complete the process remotely.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Understanding Your Bankruptcy Options</h2>
      <p className="mb-4">
        Bankruptcy is a legal solution that can help individuals eliminate or restructure debt. Knowing the difference between **Chapter 7** and **Chapter 13** bankruptcy can help you make an informed decision.
      </p>
      <ul className="list-disc ml-6">
        <li><strong>Chapter 7 Bankruptcy</strong> – Eliminates most unsecured debts, such as credit card balances and medical bills, giving you a fresh financial start.</li>
        <li><strong>Chapter 13 Bankruptcy</strong> – Allows individuals with regular income to develop a structured repayment plan, preventing foreclosure and repossession.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Frequently Asked Questions</h2>

      <details className="border rounded-md p-4 my-4">
        <summary className="font-semibold cursor-pointer">Will bankruptcy erase all my debts?</summary>
        <p className="mt-2">
          Bankruptcy eliminates many unsecured debts, but certain debts like student loans, child support, and most taxes are not dischargeable.
        </p>
      </details>

      <details className="border rounded-md p-4 my-4">
        <summary className="font-semibold cursor-pointer">Can I keep my car if I file for bankruptcy?</summary>
        <p className="mt-2">
          In most cases, you can keep your car if you continue making payments or use exemptions to protect its value.
        </p>
      </details>

      <details className="border rounded-md p-4 my-4">
        <summary className="font-semibold cursor-pointer">What happens to my credit after bankruptcy?</summary>
        <p className="mt-2">
          Your credit will be impacted, but many people see their credit scores improve within a year as they rebuild financially.
        </p>
      </details>

      <p className="mt-4">
        <Link href="/faq" className="text-blue-600 hover:underline">
          Read more frequently asked questions →
        </Link>
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

export default TucsonBankruptcyPage;
