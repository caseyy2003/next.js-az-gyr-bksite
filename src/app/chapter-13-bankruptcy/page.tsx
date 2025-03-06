"use client";

import React from "react";
import Link from "next/link";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { serviceAreas } from "@/constants/serviceAreas";

const Chapter13BankruptcyPage: React.FC = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-6">Experienced Chapter 13 Bankruptcy Attorneys in Arizona</h1>

      <p className="mb-6">
        We know how stressful financial hardship can be. With decades of successful experience
        representing Arizona residents in Chapter 13 bankruptcy, our firm is your trusted partner in achieving financial
        stability.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Why Our Firm is the Right Choice for Chapter 13 Bankruptcy</h2>

      <p className="mb-4">
        Our attorneys aren't just legal experts; we're compassionate advocates committed to your financial recovery. Our
        unmatched experience ensures that your Chapter 13 bankruptcy case is handled professionally and efficiently,
        always aiming for the best possible outcome.
      </p>

      <ul className="list-disc ml-6 mb-6">
        <li>
          <strong>Decades of Successful Representation:</strong> With extensive experience handling Chapter 13 cases,
          our attorneys have consistently achieved positive outcomes for debtors throughout Arizona.
        </li>
        <li>
          <strong>Dedicated Personal Attention:</strong> Your case will be directly handled by seasoned bankruptcy
          attorneys, providing personalized guidance every step of the way.
        </li>
        <li>
          <strong>Customized Financial Solutions:</strong> We tailor Chapter 13 repayment plans specifically to your
          financial situation, helping you effectively manage debt while safeguarding your assets.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Understanding Chapter 13 Bankruptcy</h2>

      <p className="mb-4">
        Chapter 13 bankruptcy, also known as "reorganization bankruptcy," is designed to help individuals manage and
        repay debts over a period of three to five years. It offers numerous benefits, including:
      </p>

      <ul className="list-disc ml-6 mb-6">
        <li>Stopping foreclosure and allowing you to catch up on past-due mortgage payments.</li>
        <li>Preventing vehicle repossessions and potentially reducing car loan balances.</li>
        <li>Consolidating debts into an affordable, manageable repayment plan.</li>
        <li>Protecting co-signers and safeguarding your valuable assets.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Our Proven Chapter 13 Bankruptcy Process</h2>

      <ol className="list-decimal ml-6 mb-6">
        <li>
          <strong>Free Consultation and Evaluation:</strong> We start with a comprehensive, no-obligation virtual
          consultation to fully understand your financial situation.
        </li>
        <li>
          <strong>Tailored Repayment Plan:</strong> We carefully design a customized Chapter 13 plan tailored
          specifically to your financial capabilities, providing clear guidance and transparent communication.
        </li>
        <li>
          <strong>Expert Legal Representation:</strong> Our firm manages all legal procedures, negotiations, and
          interactions with creditors, ensuring your bankruptcy process is smooth and successful.
        </li>
      </ol>

      <h2 className="text-2xl font-semibold mb-4">Begin Your Path to Financial Stability Today</h2>

      <p className="mb-6">
        You don't have to face financial difficulties alone. With decades of Chapter 13 bankruptcy experience and an
        outstanding track record, our Arizona bankruptcy law firm is here to help you reclaim your financial independence
        and security.
      </p>

      <LeadCaptureForm />

      <p className="mt-8">
        <strong>Looking for more information?</strong> Visit our{" "}
        <Link href="/faq" className="text-blue-600 hover:underline">
          FAQ page
        </Link>{" "}
        to find comprehensive answers to your Chapter 13 bankruptcy questions.
      </p>

      <h3 className="text-xl font-semibold mt-12 mb-4">Service Areas</h3>

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

export default Chapter13BankruptcyPage;
