import Link from "next/link";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { serviceAreas } from "@/constants/serviceAreas";
import { generateMetadata } from "@/utils/generateMetadata"; // Import the function

export const metadata = generateMetadata("Phoenix"); // Dynamic Metadata

const PhoenixBankruptcyPage = () => {
  return (
    <div className="container mx-auto p-6">
      
      {/* Page Content */}
      <h1 className="text-3xl font-bold mb-4">Bankruptcy Attorney in Phoenix</h1>
      <p className="mb-6 text-lg">
        Struggling with overwhelming debt in Phoenix? Bankruptcy may offer a financial reset. Our experienced bankruptcy attorneys provide **virtual legal services**, allowing you to complete the process remotely. Whether you need assistance with **Chapter 7 bankruptcy** to eliminate debt or **Chapter 13 bankruptcy** to restructure it, we offer expert legal guidance.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Understanding Your Bankruptcy Options</h2>
      <p className="mb-4">
        Bankruptcy can help individuals eliminate or restructure their debts. Understanding the difference between **Chapter 7** and **Chapter 13** bankruptcy is crucial when evaluating your financial options.
      </p>
      <ul className="list-disc ml-6">
        <li><strong>Chapter 7 Bankruptcy</strong> – Eliminates most unsecured debts, such as credit card balances and medical bills, giving you a fresh financial start.</li>
        <li><strong>Chapter 13 Bankruptcy</strong> – Allows individuals with regular income to develop a structured repayment plan, preventing foreclosure and repossession.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Benefits of Filing for Bankruptcy in Phoenix</h2>
      <p className="mb-4">
        Bankruptcy provides immediate legal protections and financial relief:
      </p>
      <ul className="list-disc ml-6">
        <li>Stops creditor harassment and collection calls.</li>
        <li>Prevents wage garnishments and bank levies.</li>
        <li>Halts foreclosure proceedings, allowing homeowners to explore repayment options.</li>
        <li>Discharges eligible unsecured debts, offering financial relief.</li>
        <li>Gives individuals the opportunity to rebuild their credit over time.</li>
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

      <h2 className="text-2xl font-semibold mt-6">Frequently Asked Questions</h2>

      <details className="border rounded-md p-4 my-4">
        <summary className="font-semibold cursor-pointer">Can I keep my house if I file for bankruptcy?</summary>
        <p className="mt-2">
          Yes, Arizona offers a **homestead exemption**, which protects a certain amount of home equity. **Chapter 13 bankruptcy** also helps homeowners avoid foreclosure.
        </p>
      </details>

      <details className="border rounded-md p-4 my-4">
        <summary className="font-semibold cursor-pointer">How often can I file for bankruptcy?</summary>
        <p className="mt-2">
          You must wait **8 years** after a previous **Chapter 7** discharge or **2 years** after a **Chapter 13** discharge before filing again.
        </p>
      </details>

      <details className="border rounded-md p-4 my-4">
        <summary className="font-semibold cursor-pointer">Will bankruptcy remove all of my debts?</summary>
        <p className="mt-2">
          Bankruptcy eliminates **most unsecured debts** like credit cards, but **student loans, child support, and some taxes** are typically not dischargeable.
        </p>
      </details>

      <p className="mt-4">
        <Link href="/faq" className="text-blue-600 hover:underline">
          Read more frequently asked questions →
        </Link>
      </p>

      <h2 className="text-2xl font-semibold mt-6">Schedule a Free Bankruptcy Consultation</h2>
      <p className="mb-4">
        If you are considering bankruptcy, speaking with an attorney can help you determine the best course of action. Contact us today for a **free consultation** and take the first step toward financial relief.
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

export default PhoenixBankruptcyPage;
