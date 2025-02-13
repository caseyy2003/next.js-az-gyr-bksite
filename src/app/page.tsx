"use client"; // ✅ Move to the very top

import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

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
        <div className="max-w-lg mx-auto bg-white shadow-lg p-6 rounded-lg border">
          <h2 className="text-xl font-semibold mb-4">Request Your Free Consultation</h2>

          {submitted ? (
            <p className="text-green-600 font-semibold">Thank you! We will contact you shortly.</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  required
                  className="border p-2 w-full rounded"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  required
                  className="border p-2 w-full rounded"
                  onChange={handleChange}
                />
              </div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                className="border p-2 w-full rounded"
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="border p-2 w-full rounded"
                onChange={handleChange}
              />
              <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded w-full">
                Get Your Free Evaluation
              </button>
            </form>
          )}
        </div>

        {/* Service Areas */}
        <h2 className="text-2xl font-semibold mt-12">Serving All of Arizona</h2>
<p className="mb-4">We provide virtual bankruptcy services throughout Arizona, including:</p>
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
      </div>
    </>
  );
};

export default HomePage;
