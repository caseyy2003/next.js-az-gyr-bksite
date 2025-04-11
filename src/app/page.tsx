"use client"; 

import Link from "next/link";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { serviceAreas } from "@/constants/serviceAreas";
import Head from "next/head"; // ✅ Import Head for SEO

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Bankruptcy Lawyer in Phoenix - Bankruptcy Attorney Near Me</title>
        <meta name="description" content="Looking for a Bankruptcy Lawyer in Phoenix or an experienced Bankruptcy Attorney Near Me? Let us help you find the debt relief you deserve." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://myazlawfirm.com/" />
        {/* Open Graph for social sharing */}
        <meta property="og:title" content="Arizona Bankruptcy Attorney | Free Virtual Consultations" />
        <meta property="og:description" content="Virtual bankruptcy services in Arizona. Free evaluation for Chapter 7 & Chapter 13 bankruptcy." />
        <meta property="og:url" content="https://myazlawfirm.com/" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="container mx-auto text-center py-16">
        <h1 className="text-3xl font-bold mb-4">Arizona Bankruptcy Attorney</h1>
        <h3 className="text-xl mb-4"></h3>
        <p className="text-lg mb-6">
          Struggling with debt? We offer expert bankruptcy consultations for Chapter 7 & Chapter 13—all handled virtually. Get a free evaluation today.
        </p>

        {/* Lead Generation Form */}
        <LeadCaptureForm />

        {/* Service Areas */}
        <h2 className="text-2xl font-semibold mt-12">Is There a Bankruyptcy Lawyer Near Me? Yes. We Serve All of Arizona</h2>
        <br />
        <h4 className="text-lg mb-4">Asking is there a bankruptcy lawyer near me? Whether you're looking for a bankruptcy lawyer in Phoenix or anywhere in Ariozna, we've got you cover. We serve all of Arizona. </h4>
        
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
