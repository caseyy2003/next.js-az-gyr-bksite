import Link from "next/link";
import Head from "next/head";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import Image from 'next/image';

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

const BankruptcyCreditScorePage = () => {
  return (
    <div className="container mx-auto p-6">
      {/* SEO Metadata */}
      <Head>
        <title>How Bankruptcy Affects Your Credit Score | Rebuilding Credit After Bankruptcy</title>
        <meta 
          name="description" 
          content="Learn how bankruptcy impacts your credit score and how you can rebuild credit after filing for Chapter 7 or Chapter 13 bankruptcy."
        />
        <meta 
          name="keywords" 
          content="Bankruptcy and Credit Score, Credit After Bankruptcy, Rebuilding Credit, Chapter 7 Bankruptcy, Chapter 13 Bankruptcy, Debt Relief"
        />
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              "name": "Bankruptcy & Credit Score Guidance",
              "description": "Expert legal advice on how bankruptcy impacts credit scores and strategies for rebuilding credit.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "4425 E Agave Rd. Suite 110",
                "addressLocality": "Phoenix",
                "addressRegion": "AZ",
                "postalCode": "85044",
                "addressCountry": "US"
              },
              "url": "https://yourwebsite.com/blog/bankruptcy-credit-score"
            })
          }} 
        />
      </Head>

      {/* Blog Content */}
      <h1 className="text-3xl font-bold mb-4">How Bankruptcy Affects Your Credit Score & How to Rebuild</h1>
      <p className="text-gray-600 text-sm">Published on February 15, 2025 by <strong>Casey Yontz</strong>, Bankruptcy Attorney</p>

      <Image
        src="/images/bankruptcy-credit-score.jpg"
        alt="Bankruptcy and Credit Score"
        width={800}  // Set an appropriate width
        height={400} // Set an appropriate height
        className="w-full my-6 rounded shadow-lg"
      />

      <h2 className="text-2xl font-semibold mt-6">Does Bankruptcy Ruin Your Credit Score?</h2>
      <p>
        Bankruptcy does have an impact on your **credit score**, but it is not the **end of your financial future**. Many people believe 
        that bankruptcy permanently ruins credit, but in reality, it provides a **fresh start** for rebuilding financial health.
      </p>
      <p>
        A bankruptcy filing **stays on your credit report** for a period of:
      </p>
      <ul className="list-disc ml-6 mt-2">
        <li>✅ **Chapter 7 bankruptcy** – Remains on your credit report for **10 years**.</li>
        <li>✅ **Chapter 13 bankruptcy** – Stays on your credit report for **7 years** from the filing date.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">How Much Does Bankruptcy Lower Your Credit Score?</h2>
      <p>
        The **exact credit score drop** varies based on your financial history. If you have **excellent credit** (700+), bankruptcy can 
        reduce your score by **100 to 200 points**. If your credit is already low (under 600), the impact is **less severe**.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Can You Get Credit After Bankruptcy?</h2>
      <p>
        Yes! Many people **successfully rebuild their credit** after bankruptcy. Here’s how:
      </p>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="p-4 bg-green-100 border rounded">
          <h3 className="font-semibold">✅ Ways to Rebuild Credit</h3>
          <ul className="list-disc ml-6">
            <li>Apply for a **secured credit card**.</li>
            <li>Make **on-time payments** every month.</li>
            <li>Keep **credit utilization low** (below 30%).</li>
            <li>Monitor your **credit report** for errors.</li>
            <li>Consider a **credit-builder loan**.</li>
          </ul>
        </div>
        <div className="p-4 bg-red-100 border rounded">
          <h3 className="font-semibold">❌ Mistakes to Avoid</h3>
          <ul className="list-disc ml-6">
            <li>Taking on **high-interest loans** too soon.</li>
            <li>Missing **bill payments**.</li>
            <li>Closing old accounts (hurts credit length).</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-6">How Long Does It Take to Rebuild Credit?</h2>
      <p>
        Most individuals can see **significant credit improvement** within **12 to 24 months** of responsible financial management.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6">Get a Free Bankruptcy Consultation</h2>
      <p>Concerned about bankruptcy and your credit score? An **experienced bankruptcy attorney** can help.</p>

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

export default BankruptcyCreditScorePage;
