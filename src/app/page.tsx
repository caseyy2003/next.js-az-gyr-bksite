"use client"; 

import Link from "next/link";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { serviceAreas } from "@/constants/serviceAreas";
import Head from "next/head"; // ✅ Import Head for SEO

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Your Trusted Bankruptcy Lawyer in Phoenix | My AZ Law Firm</title>
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
