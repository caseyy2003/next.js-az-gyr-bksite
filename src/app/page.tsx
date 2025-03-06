"use client"; 

import Link from "next/link";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { serviceAreas } from "@/constants/serviceAreas";
import Head from "next/head"; // ✅ Import Head for SEO

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Arizona Bankruptcy Attorney | Free Virtual Consultations</title>
        <meta name="description" content="Struggling with debt? Our Arizona bankruptcy attorneys provide expert virtual consultations for Chapter 7 & Chapter 13. Get a free evaluation today." />
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
        <p className="text-lg mb-6">
          Struggling with debt? We offer expert bankruptcy consultations for Chapter 7 & Chapter 13—all handled virtually. Get a free evaluation today.
        </p>

        {/* Lead Generation Form */}
        <LeadCaptureForm />

        {/* Service Areas */}
        <h2 className="text-2xl font-semibold mt-12">Serving All of Arizona</h2>
        <br />
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
