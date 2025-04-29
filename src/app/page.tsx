"use client"; 

import Link from "next/link";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { serviceAreas } from "@/constants/serviceAreas";
import Head from "next/head"; // ✅ Import Head for SEO

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Bankruptcy Lawyer in Phoenix Serving All of Arizona</title>
        <meta name="description" content="Looking for a Bankruptcy Lawyer in Phoenix? Asking, is there an experienced bankruptcy attorney near me? We serve all areas in Arizona." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://myazlawfirm.com/" />
        {/* Open Graph for social sharing */}
        <meta property="og:title" content="Wherever you are in Arizona, we have an experienced bankruptcy lawyer near you." />
        <meta property="og:description" content="Bankruptcy services in Arizona. Free evaluation for Chapter 7 & Chapter 13 bankruptcy." />
        <meta property="og:url" content="https://myazlawfirm.com/" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="container mx-auto text-center py-16">
        <h1 className="text-3xl font-bold mb-4">Bankruptcy Lawyer in Phoenix - Serving All of Arizona</h1>
        <h3 className="text-xl mb-4"></h3>
        <p className="text-lg mb-6">
          Struggling with debt? We offer expert bankruptcy consultations for Chapter 7 & Chapter 13 everywhere in Arizona. Get a free evaluation today.
        </p>

        {/* Lead Generation Form */}
        <LeadCaptureForm />

        {/* Service Areas */}
        <h1 className="text-2xl font-semibold mt-12">Get a Fresh Start Through Bankruptcy in Arizona</h1>
        <p className="text-lg mb-6">For many individuals and families in Arizona, overwhelming debt can create significant anxiety and uncertainty. Filing for bankruptcy offers a structured path to address these challenges, either by eliminating certain debts or by arranging manageable repayment terms (United States Courts, 2023). Although bankruptcy is governed by federal law, Arizona residents must also follow state-specific regulations, especially regarding property exemptions. Collaborating with a bankruptcy attorney near me or searching for bankruptcy lawyers near me can help clarify your options and streamline the entire process.</p>
        
        <h2 className="text-2xl font-semibold mt-12">Stop Garnishment, Law Suits and Creditors through Bankruptcy</h2>
        <p className="text-lg mb-6">A key component of filing for bankruptcy is the automatic stay, which immediately suspends most collection efforts, such as phone calls, lawsuits, and wage garnishments (11 U.S.C. § 362). This court-ordered pause on creditor actions can be particularly valuable for Arizonans facing threats of foreclosure or vehicle repossession. The stay remains active until the bankruptcy case is closed or the judge modifies the order.</p>
        
        <h2 className="text-2xl font-semibold mt-12">Chapter 7 vs Chapter 13 Bankruptcy</h2>
        <p className="text-lg mb-6">Consumers commonly opt for either Chapter 7 or Chapter 13 bankruptcy, each with its own goals and requirements (United States Bankruptcy Court for the District of Arizona, 2023). When comparing bankruptcy chapter 7 vs 13, one major difference lies in the handling of assets. Chapter 7—often called “liquidation bankruptcy”—permits the appointed trustee to sell certain non-exempt property to repay creditors. On the other hand, Chapter 13 establishes a structured repayment plan spanning three to five years, offering individuals the possibility to maintain ownership of valuable assets if they fulfill plan payments.</p>
        

        <h2 className="text-2xl font-semibold mt-12">Asking, is thre a high-quality a bankruyptcy Lawyer Near Me? Yes. We Serve All of Arizona</h2>
        <br />
        <h4 className="text-lg mb-4">Whether you are looking for a bankruptcy attorney in Phoenix or anywhere in Ariozna, we have you covered. We serve all of Arizona. </h4>
        
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {serviceAreas.map((area) => (
            <li key={area.slug}>
              <Link href={`/bankruptcy-attorney-${area.slug}`} className="text-blue-600 hover:underline">
                Bankruptcy Attorney in {area.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default HomePage;
