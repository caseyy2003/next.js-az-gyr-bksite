"use client"; // ✅ Move to the very top

import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { serviceAreas } from "@/constants/serviceAreas";

const HomePage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <>
      <Head>
        <title>Arizona Bankruptcy Attorney | Virtual Debt Relief Assistance</title>
        <meta name="description" content="Get expert bankruptcy assistance in Arizona. We provide Chapter 7 & Chapter 13 consultations virtually. Free case evaluation." />
        <meta name="keywords" content="Bankruptcy Attorney, Debt Relief, Chapter 7, Chapter 13, Virtual Bankruptcy Lawyer" />

        {/* JSON-LD Structured Data */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              "name": "Arizona Bankruptcy Law Firm",
              "description": "Virtual bankruptcy assistance for Chapter 7 & Chapter 13. Get expert debt relief guidance today.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "4425 E Agave Rd. Suite 110",
                "addressLocality": "Phoenix",
                "addressRegion": "AZ",
                "postalCode": "85044",
                "addressCountry": "US",
              },
              "telephone": "+1-555-555-5555",
              "url": "https://yourwebsite.com",
            }),
          }} 
        />
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
