import Head from "next/head";
import Link from "next/link";
import LeadCaptureForm from "@/components/LeadCaptureForm";

const PrescottBankruptcyPage = () => {
  return (
    <div>
      {/* SEO Metadata */}
      <Head>
        <title>Bankruptcy Attorney in Prescott | Virtual Debt Relief Assistance</title>
        <meta 
          name="description" 
          content="Facing financial difficulties in Prescott, Arizona? Our expert bankruptcy attorneys provide virtual Chapter 7 & Chapter 13 services to help you regain control."
        />
        <meta 
          name="keywords" 
          content="Bankruptcy Attorney Prescott, Prescott Chapter 7 Lawyer, Prescott Chapter 13 Attorney, Virtual Bankruptcy Lawyer, Debt Relief Prescott"
        />
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              "name": "Prescott Bankruptcy Attorney",
              "description": "Trusted virtual bankruptcy services in Prescott, Arizona. We assist with Chapter 7 and Chapter 13 filings from the comfort of your home.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "4425 E Agave Rd. Suite 110",
                "addressLocality": "Phoenix",
                "addressRegion": "AZ",
                "postalCode": "85044",
                "addressCountry": "US"
              },
              "telephone": "+1-480-886-0339",
              "url": "https://yourwebsite.com/bankruptcy-attorney-prescott"
            })
          }} 
        />
      </Head>

      {/* Page Content */}
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Bankruptcy Attorney in Prescott, Arizona</h1>
        <p className="text-gray-600 text-sm">Helping individuals and families in Prescott achieve financial freedom.</p>

        <img 
          src="/images/bankruptcy-attorney-prescott.jpg" 
          alt="Bankruptcy Attorney in Prescott"
          className="w-full my-6 rounded shadow-lg"
        />

        <h2 className="text-2xl font-semibold mt-6">Get Reliable Bankruptcy Help in Prescott</h2>
        <p>
          Financial hardship can be overwhelming, but **you don’t have to face it alone**. Our experienced bankruptcy attorneys provide 
          **virtual Chapter 7 and Chapter 13 bankruptcy services** to Prescott residents, making the process convenient and stress-free.
        </p>
        <p>
          Whether you’re struggling with **credit card debt, medical bills, wage garnishments, or foreclosure**, we can guide you through the legal 
          process of filing for bankruptcy and getting a fresh financial start.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Chapter 7 & Chapter 13 Bankruptcy in Prescott</h2>
        <p>
          Understanding the differences between **Chapter 7 and Chapter 13 bankruptcy** can help you make an informed decision:
        </p>
        <ul className="list-disc ml-6 mt-2">
          <li><strong>Chapter 7 Bankruptcy:</strong> Ideal for those with **overwhelming unsecured debt** and little disposable income. Most debts are discharged in a few months.</li>
          <li><strong>Chapter 13 Bankruptcy:</strong> Best for individuals who want to **keep their assets** while restructuring debt into a **manageable repayment plan** over 3-5 years.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">Who Qualifies for Bankruptcy in Prescott?</h2>
        <p>
          Eligibility for bankruptcy depends on your **income, assets, and financial situation**. Our attorneys can evaluate your case and 
          determine the best solution for your debt relief needs. 
        </p>

        <h2 className="text-2xl font-semibold mt-6">The Virtual Bankruptcy Process</h2>
        <p>
          We make the bankruptcy process simple and stress-free for Prescott residents. Our virtual consultations allow you to get legal 
          assistance **from the comfort of your home**. The process includes:
        </p>
        <ol className="list-decimal ml-6 mt-2">
          <li>📞 **Free Consultation:** Discuss your situation with an experienced bankruptcy attorney.</li>
          <li>📄 **Document Review:** We assess your debts, income, and assets to determine eligibility.</li>
          <li>📝 **Filing Your Case:** Our team prepares and files the necessary bankruptcy paperwork.</li>
          <li>⚖️ **Court Process:** Attend a virtual or in-person **341 Meeting of Creditors**.</li>
          <li>🎉 **Debt Discharge:** Once approved, eligible debts are eliminated or restructured.</li>
        </ol>

        <h2 className="text-2xl font-semibold mt-6">Benefits of Virtual Bankruptcy Services</h2>
        <ul className="list-disc ml-6 mt-2">
          <li>✔️ No need to visit a law office in person.</li>
          <li>✔️ Expert legal guidance via **phone, email, or video consultation**.</li>
          <li>✔️ **Save time & money** with an efficient virtual process.</li>
          <li>✔️ Flexible appointment scheduling for Prescott residents.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">Schedule Your Free Bankruptcy Consultation</h2>
        <p>
          Take the first step toward **financial relief**. Contact us today for a **free, no-obligation bankruptcy consultation**. Our team is here to help 
          you regain control and find a solution that works for you.
        </p>

        {/* Lead Capture Form */}
       <LeadCaptureForm />  

        {/* Nearby Cities Section */}
        <h2 className="text-2xl font-semibold mt-12">Nearby Cities We Serve</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
  <li><Link href="/bankruptcy-attorney-phoenix">Phoenix</Link></li>
  <li><Link href="/bankruptcy-attorney-mesa">Mesa</Link></li>
  <li><Link href="/bankruptcy-attorney-chandler">Chandler</Link></li>
  <li><Link href="/bankruptcy-attorney-tempe">Tempe</Link></li>
  <li><Link href="/bankruptcy-attorney-glendale">Glendale</Link></li>
  <li><Link href="/bankruptcy-attorney-scottsdale">Scottsdale</Link></li>
  <li><Link href="/bankruptcy-attorney-peoria">Peoria</Link></li>
  <li><Link href="/bankruptcy-attorney-surprise">Surprise</Link></li>
  <li><Link href="/bankruptcy-attorney-avondale">Avondale</Link></li>
  <li><Link href="/bankruptcy-attorney-goodyear">Goodyear</Link></li>
  <li><Link href="/bankruptcy-attorney-tucson">Tucson</Link></li>
  <li><Link href="/bankruptcy-attorney-flagstaff">Flagstaff</Link></li>
  <li><Link href="/bankruptcy-attorney-prescott">Prescott</Link></li>
  <li><Link href="/bankruptcy-attorney-kingman">Kingman</Link></li>
  <li><Link href="/bankruptcy-attorney-casa-grande">Casa Grande</Link></li>
  <li><Link href="/bankruptcy-attorney-sierra-vista">Sierra Vista</Link></li>
  <li><Link href="/bankruptcy-attorney-apache-junction">Apache Junction</Link></li>
  <li><Link href="/bankruptcy-attorney-bullhead-city">Bullhead City</Link></li>
  <li><Link href="/bankruptcy-attorney-lake-havasu-city">Lake Havasu City</Link></li>
  <li><Link href="/bankruptcy-attorney-maricopa">Maricopa</Link></li>
  <li><Link href="/bankruptcy-attorney-yuma">Yuma</Link></li>
</ul>

        {/* Back to Service Areas */}
        <div className="mt-6">
          <Link href="/service-areas" className="text-blue-500 hover:underline">← Back to Service Areas</Link>
        </div>
      </div>
    </div>
  );
};

export default PrescottBankruptcyPage;
