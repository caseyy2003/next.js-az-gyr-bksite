"use client"; // ✅ Ensure this remains at the top

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to submit lead.");

      console.log("Lead submitted successfully:", formData);
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting lead:", error);
    }
  };

  return (
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
  );
};

export default HomePage;
