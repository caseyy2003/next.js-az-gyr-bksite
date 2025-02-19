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

const Chapter13BankruptcyPage = () => {
  return (
    <div className="container mx-auto p-6">
      {/* SEO Metadata */}
      <Head>
        <title>Chapter 13 Bankruptcy Explained | Debt Repayment & Legal Help</title>
        <meta 
          name="description" 
          content="Learn about Chapter 13 bankruptcy, how it helps restructure debt, and whether it's the right option for you. Get expert insights from an experienced bankruptcy attorney."
        />
        <meta 
          name="keywords" 
          content="Chapter 13 Bankruptcy, Debt Restructuring, Bankruptcy Attorney, Repayment Plan, Debt Relief, Bankruptcy Process"
        />
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              "name": "Chapter 13 Bankruptcy Attorney",
              "description": "Expert bankruptcy attorney services for Chapter 13 bankruptcy, helping individuals restructure debt and avoid foreclosure.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "4425 E Agave Rd. Suite 110",
                "addressLocality": "Phoenix",
                "addressRegion": "AZ",
                "postalCode": "85044",
                "addressCountry": "US"
              },
              "url": "https://yourwebsite.com/blog/chapter-13-bankruptcy"
            })
          }} 
        />
      </Head>

      {/* Blog Content */}
      <h1 className="text-3xl font-bold mb-4">Chapter 13 Bankruptcy: A Debt Repayment Solution</h1>
      <p className="text-gray-600 text-sm">Published on February 14, 2025 by <strong>Casey Yontz</strong>, Bankruptcy Attorney</p>

    {/* Removed the image since it does not exist */}


      <h2 className="text-2xl font-semibold mt-6">What Is Chapter 13 Bankruptcy?</h2>
      <p>
        Chapter 13 bankruptcy, also known as a **wage earner’s plan**, is a form of debt relief that allows individuals 
        with regular income to develop a **structured repayment plan** over 3 to 5 years. Unlike **Chapter 7 bankruptcy**, 
        which eliminates most debts, Chapter 13 **helps you reorganize your debts** while keeping your assets.
      </p>
      <p>
        This option is especially beneficial for those who are facing **foreclosure, vehicle repossession, or excessive unsecured debt** 
        but want to **avoid liquidation** of their assets.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Who Qualifies for Chapter 13 Bankruptcy?</h2>
      <p>
        To be eligible for Chapter 13 bankruptcy, you must meet the following criteria:
      </p>
      <ul className="list-disc ml-6 mt-2">
        <li>✅ Have **regular income** (employment, self-employment, or benefits).</li>
        <li>✅ Your **secured debts** (e.g., mortgages, car loans) must be under **$1,257,850**.</li>
        <li>✅ Your **unsecured debts** (e.g., credit cards, medical bills) must be under **$419,275**.</li>
        <li>✅ Must have **filed tax returns** for the past four years.</li>
        <li>✅ Complete **credit counseling** before filing.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">How Does Chapter 13 Bankruptcy Work?</h2>
      <p>
        Chapter 13 bankruptcy follows a structured process that typically takes between **3 to 5 years**:
      </p>
      <ol className="list-decimal ml-6 mt-2">
        <li><strong>Filing the Petition:</strong> Submit necessary forms to start the process.</li>
        <li><strong>Automatic Stay:</strong> Creditors must **immediately stop** collection actions, including foreclosures.</li>
        <li><strong>Creating a Repayment Plan:</strong> Work with the court to create a **manageable** debt repayment plan.</li>
        <li><strong>341 Meeting of Creditors:</strong> Attend a short hearing where creditors can ask questions.</li>
        <li><strong>Making Monthly Payments:</strong> Begin making payments to the trustee as per the agreed plan.</li>
        <li><strong>Debt Discharge:</strong> After successfully completing the repayment plan, remaining eligible debts are **eliminated**.</li>
      </ol>

      <h2 className="text-2xl font-semibold mt-6">What Debts Are Included in Chapter 13?</h2>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="p-4 bg-green-100 border rounded">
          <h3 className="font-semibold">✅ Debts Included in the Repayment Plan</h3>
          <ul className="list-disc ml-6">
            <li>Mortgage arrears</li>
            <li>Car loans</li>
            <li>Credit card debt</li>
            <li>Medical bills</li>
            <li>Personal loans</li>
            <li>Unpaid taxes</li>
          </ul>
        </div>
        <div className="p-4 bg-red-100 border rounded">
          <h3 className="font-semibold">❌ Debts Not Included</h3>
          <ul className="list-disc ml-6">
            <li>Child support & alimony</li>
            <li>Student loans (except in rare cases)</li>
            <li>Criminal fines</li>
            <li>Most tax debts</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-6">Get a Free Bankruptcy Consultation</h2>
      <p>Considering Chapter 13? An **experienced bankruptcy attorney** can guide you through the process.</p>

      {/* Lead Capture Form */}
    <LeadCaptureForm />

      {/* Service Areas */}
      <h2 className="text-2xl font-semibold mt-6">Service Areas</h2>
      <ul className="grid grid-cols-2 gap-4">
        {serviceAreas.map((area) => (
          <li key={area.slug}>
            <Link href={`/bankruptcy-attorney-${area.slug}`} className="text-blue-500 hover:underline">
              Bankruptcy Attorney in {area.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Back to Blog */}
      <div className="mt-6">
      <Link href="/arizona-bankruptcy-lawyers-blog" className="text-blue-500 hover:underline">← Back to Blog</Link>

      </div>
    </div>
  );
};

export default Chapter13BankruptcyPage;
