import Link from "next/link";
import Head from "next/head";
import LeadCaptureForm from "@/components/LeadCaptureForm";
const serviceAreas = [
  { name: "Phoenix", slug: "phoenix" },
  { name: "Mesa", slug: "mesa" },
  { name: "Chandler", slug: "chandler" },
  { name: "Glendale", slug: "glendale" },
  { name: "Tempe", slug: "tempe" },
  { name: "Peoria", slug: "peoria" },
  { name: "Scottsdale", slug: "scottsdale" },
  { name: "Surprise", slug: "surprise" },
  { name: "Avondale", slug: "avondale" },
  { name: "Goodyear", slug: "goodyear" }
];

const Chapter7BankruptcyPage = () => {
  return (
    <div className="container mx-auto p-6">
      {/* SEO Metadata */}
      <Head>
        <title>Chapter 7 Bankruptcy Explained | Debt Relief & Fresh Start</title>
        <meta 
          name="description" 
          content="Learn about Chapter 7 bankruptcy, eligibility, and how it helps eliminate debt. Expert insights from an experienced bankruptcy attorney."
        />
        <meta 
          name="keywords" 
          content="Chapter 7 Bankruptcy, Debt Relief, Bankruptcy Lawyer, Financial Freedom, Bankruptcy Process, Filing Bankruptcy"
        />
      </Head>

      {/* Blog Content */}
      <h1 className="text-3xl font-bold mb-4">Chapter 7 Bankruptcy: A Fresh Start for Debt Relief</h1>
      <p className="text-gray-600 text-sm">Published on February 12, 2025 by <strong>Casey Yontz</strong>, Bankruptcy Attorney</p>

      <img 
        src="/images/chapter-7-bankruptcy.jpg" 
        alt="Chapter 7 Bankruptcy Process"
        className="w-full my-6 rounded shadow-lg"
      />

      <h2 className="text-2xl font-semibold mt-6">What Is Chapter 7 Bankruptcy?</h2>
      <p>
        Chapter 7 bankruptcy is a legal process designed to provide individuals and families with a **fresh financial start** by 
        eliminating most unsecured debts. If you're facing overwhelming bills, wage garnishment, or creditor harassment, Chapter 7 
        may be a solution to help you regain control.
      </p>
      <p>
        Unlike **Chapter 13 bankruptcy**, which requires a repayment plan, Chapter 7 **eliminates qualifying debts** entirely. 
        This is why it’s commonly referred to as **"liquidation bankruptcy."** However, most filers can keep their essential 
        property under bankruptcy exemptions.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Who Qualifies for Chapter 7 Bankruptcy?</h2>
      <p>
        Not everyone is eligible for Chapter 7 bankruptcy. To qualify, you must pass the **"Means Test"**, which determines 
        whether your income is **low enough** to file under Chapter 7.
      </p>
      <ul className="list-disc ml-6 mt-2">
        <li>✅ Your income must be below the **median household income** in your state.</li>
        <li>✅ If your income is higher, you may still qualify if you have significant **deductible expenses** (like rent, medical bills, or child support).</li>
        <li>✅ You must not have filed for **Chapter 7 bankruptcy in the past 8 years.**</li>
        <li>✅ You must complete **credit counseling** from an approved agency before filing.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">What Debts Can Be Discharged?</h2>
      <p>
        Chapter 7 bankruptcy eliminates **most** unsecured debts, but not all. Below is a breakdown:
      </p>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="p-4 bg-green-100 border rounded">
          <h3 className="font-semibold">✅ Dischargeable Debts</h3>
          <ul className="list-disc ml-6">
            <li>Credit card balances</li>
            <li>Medical bills</li>
            <li>Personal loans</li>
            <li>Utility bills</li>
            <li>Past-due rent</li>
            <li>Some lawsuit judgments</li>
          </ul>
        </div>
        <div className="p-4 bg-red-100 border rounded">
          <h3 className="font-semibold">❌ Non-Dischargeable Debts</h3>
          <ul className="list-disc ml-6">
            <li>Student loans (except in rare cases)</li>
            <li>Child support & alimony</li>
            <li>Recent tax debts</li>
            <li>Government fines & court fees</li>
            <li>Debts from fraud</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-6">The Chapter 7 Bankruptcy Process</h2>
      <p>Filing for Chapter 7 bankruptcy typically takes **3 to 6 months** and involves several key steps:</p>
      <ol className="list-decimal ml-6 mt-2">
        <li><strong>Pre-filing Credit Counseling:</strong> A mandatory session with an approved credit counselor.</li>
        <li><strong>Filing the Petition:</strong> Submitting official bankruptcy forms with a list of debts, assets, and income.</li>
        <li><strong>Automatic Stay:</strong> Once filed, creditors must **immediately stop** collection actions.</li>
        <li><strong>341 Meeting of Creditors:</strong> A brief court meeting where a trustee reviews your case.</li>
        <li><strong>Debt Discharge:</strong> If approved, your qualifying debts are **eliminated permanently.**</li>
      </ol>

      <h2 className="text-2xl font-semibold mt-6">Pros and Cons of Filing Chapter 7</h2>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="p-4 bg-green-100 border rounded">
          <h3 className="font-semibold">✔️ Pros</h3>
          <ul className="list-disc ml-6">
            <li>Eliminates most debts</li>
            <li>Stops creditor harassment</li>
            <li>Process is relatively fast</li>
            <li>Gives a fresh financial start</li>
          </ul>
        </div>
        <div className="p-4 bg-red-100 border rounded">
          <h3 className="font-semibold">❌ Cons</h3>
          <ul className="list-disc ml-6">
            <li>May lose non-exempt assets - Rare if you hire an experienced lawyer</li>
            <li>Stays on credit report for 10 years</li>
            <li>Can’t file again for 8 years</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-6">Get a Free Bankruptcy Consultation</h2>
      <p>If you're considering Chapter 7, speaking with an **experienced bankruptcy attorney** can help you make the right decision.</p>

      {/* Lead Capture Form */}
      <LeadCaptureForm />

      {/* Back to Blog */}
      <div className="mt-6">
      <Link href="/arizona-bankruptcy-lawyers-blog" className="text-blue-500 hover:underline">← Back to Blog</Link>

      </div>
    </div>
  );
};

export default Chapter7BankruptcyPage;
