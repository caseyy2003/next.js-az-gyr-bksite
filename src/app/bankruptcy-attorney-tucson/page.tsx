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
        If you are struggling with overwhelming debt in Tucson, bankruptcy may offer a fresh financial start. Our **experienced bankruptcy attorneys** provide **virtual legal services**, allowing you to navigate the bankruptcy process with ease. Whether you need **Chapter 7 bankruptcy** to eliminate debt or **Chapter 13 bankruptcy** to reorganize payments, we offer professional guidance every step of the way.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Understanding Your Bankruptcy Options</h2>
      <p className="mb-4">
        Bankruptcy is a powerful legal tool that can help you regain control of your finances. The two most common types are:
      </p>
      <ul className="list-disc ml-6">
        <li><strong>Chapter 7 Bankruptcy</strong> – Eliminates most unsecured debts, such as credit card balances and medical bills, giving you a clean slate.</li>
        <li><strong>Chapter 13 Bankruptcy</strong> – Allows individuals to restructure debts into a manageable repayment plan, helping to avoid foreclosure or repossession.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Benefits of Filing for Bankruptcy in Tucson</h2>
      <p className="mb-4">
        Bankruptcy provides immediate legal protections and financial benefits:
      </p>
      <ul className="list-disc ml-6">
        <li>Stops creditor harassment and collection calls.</li>
        <li>Prevents wage garnishments and bank levies.</li>
        <li>Halts foreclosure proceedings, allowing homeowners time to explore repayment solutions.</li>
        <li>Eliminates qualifying unsecured debts, offering financial relief.</li>
        <li>Provides an opportunity to rebuild credit over time.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Who Qualifies for Bankruptcy?</h2>
      <p className="mb-4">
        To qualify for **Chapter 7**, you must pass a **Means Test**, which determines if your income is below the Arizona state median. **Chapter 13** is an option for individuals with regular income who want to reorganize their debts. Our attorneys assess eligibility and guide clients through the process.
      </p>

      <h2 className="text-2xl font-semibold mt-6">How Our Virtual Bankruptcy Services Work</h2>
      <p className="mb-4">
        Our law firm provides a **virtual bankruptcy process**, allowing you to receive expert legal assistance remotely. The process includes:
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

export default TucsonBankruptcyPage;
