"use client";

import React from "react";
import Link from "next/link";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { serviceAreas } from "@/constants/serviceAreas";

const DebtReliefPage: React.FC = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-6">Trusted Debt Relief Attorneys in Arizona</h1>

      <p className="mb-6">
        We understand the stress and burden that overwhelming debt can bring. With decades of experience helping Arizona residents find financial freedom, our firm is dedicated to providing effective debt relief solutions tailored to your needs.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Why Choose Our Firm for Debt Relief?</h2>

      <p className="mb-4">
        Our attorneys are committed to helping individuals and families break free from debt while protecting their financial futures. Whether you're facing creditor harassment, wage garnishments, or mounting unpaid bills, we provide customized solutions to help you regain control.
      </p>

      <ul className="list-disc ml-6 mb-6">
        <li><strong>Decades of Experience:</strong> Our firm has successfully helped countless individuals and families across Arizona resolve their debts and rebuild their financial health.</li>
        <li><strong>Personalized Debt Relief Plans:</strong> We assess your financial situation and create a customized strategy that best suits your needs.</li>
        <li><strong>Protection from Creditors:</strong> We help stop creditor harassment, lawsuits, and wage garnishments so you can move forward with peace of mind.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Understanding Debt Relief Options</h2>

      <p className="mb-4">
        Debt relief comes in many forms, and our experienced legal team will guide you toward the best option for your unique situation. Some of the solutions we offer include:
      </p>

      <ul className="list-disc ml-6 mb-6">
        <li><strong>Debt Settlement:</strong> Negotiating with creditors to reduce the total amount owed.</li>
        <li><strong>Debt Consolidation:</strong> Combining multiple debts into one manageable monthly payment.</li>
        <li><strong>Bankruptcy Solutions:</strong> Exploring Chapter 7 and Chapter 13 bankruptcy options when necessary.</li>
        <li><strong>Legal Defense Against Creditors:</strong> Protecting your rights and stopping unfair collection practices.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Our Proven Debt Relief Process</h2>

      <ol className="list-decimal ml-6 mb-6">
        <li><strong>Free Consultation:</strong> We start with a no-obligation consultation to discuss your financial situation and explore available solutions.</li>
        <li><strong>Personalized Strategy:</strong> Our legal team designs a custom plan to help you eliminate or manage your debt efficiently.</li>
        <li><strong>Execution and Protection:</strong> We handle negotiations, legal filings, and creditor communications to ensure a smooth debt relief process.</li>
      </ol>

      <h2 className="text-2xl font-semibold mb-4">Take the First Step Toward Financial Freedom</h2>

      <p className="mb-6">
        You don’t have to live under the burden of overwhelming debt. With our proven legal strategies and personalized approach, we can help you regain control of your financial future and achieve lasting debt relief.
      </p>

      <LeadCaptureForm />

      <p className="mt-8">
        <strong>Want to learn more?</strong> Visit our <Link href="/faq" className="text-blue-600 hover:underline">FAQ page</Link> for additional details on debt relief options.
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

export default DebtReliefPage;
