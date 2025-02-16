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
        Are you facing financial difficulties in Scottsdale? Filing for bankruptcy may provide a path to financial stability. Our experienced bankruptcy attorneys offer **virtual legal services**, allowing you to complete the process remotely. Whether you need assistance with **Chapter 7 bankruptcy** to eliminate debt or **Chapter 13 bankruptcy** to restructure it, we provide expert legal guidance.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Understanding Your Bankruptcy Options</h2>
      <p className="mb-4">
        Bankruptcy can help individuals eliminate or restructure their debts. Understanding the difference between **Chapter 7** and **Chapter 13** bankruptcy is crucial when evaluating your financial options.
      </p>
      <ul className="list-disc ml-6">
        <li><strong>Chapter 7 Bankruptcy</strong> – Eliminates most unsecured debts, such as credit card balances and medical bills, giving you a fresh financial start.</li>
        <li><strong>Chapter 13 Bankruptcy</strong> – Allows individuals with regular income to develop a structured repayment plan, preventing foreclosure and repossession.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Benefits of Filing for Bankruptcy in Scottsdale</h2>
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
        <summary className="font-semibold cursor-pointer">Can I keep my car if I file for bankruptcy?</summary>
        <p className="mt-2">
          It depends on the value of your vehicle and the available **Arizona bankruptcy exemptions**. In **Chapter 7**, if your car is below the exemption limit, you can keep it. In **Chapter 13**, you may be able to include car payments in your repayment plan.
        </p>
      </details>

      <details className="border rounded-md p-4 my-4">
        <summary className="font-semibold cursor-pointer">How does bankruptcy affect my spouse?</summary>
        <p className="mt-2">
          If you file for bankruptcy individually, your **spouse’s credit is generally not affected**, but joint debts remain their responsibility. If you file together, both of your debts will be included in the case.
        </p>
      </details>

      <details className="border rounded-md p-4 my-4">
        <summary className="font-semibold cursor-pointer">Will I lose my home if I file for bankruptcy?</summary>
        <p className="mt-2">
          Filing for **Chapter 7** may put your home at risk if it has significant equity above the **Arizona homestead exemption**. **Chapter 13** can help you **catch up on mortgage payments** and prevent foreclosure.
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

export default ScottsdaleBankruptcyPage;
