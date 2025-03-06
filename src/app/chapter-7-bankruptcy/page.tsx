"use client"; // ✅ Add this to ensure it's a Client Component

import React from "react";
import Link from "next/link";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { serviceAreas } from "@/constants/serviceAreas";

const Chapter7BankruptcyPage: React.FC = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-6">Expert Chapter 7 Bankruptcy Attorneys in Arizona</h1>

      <p className="mb-6">
        We understand how overwhelming financial difficulties can be, and we&apos;re here to guide you every step of the way. With nearly two decades of dedicated bankruptcy law experience, our firm stands apart as Arizona&apos;s trusted leader in providing compassionate, knowledgeable, and effective Chapter 7 bankruptcy representation.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Why Choose Our Firm for Your Chapter 7 Bankruptcy?</h2>

      <p className="mb-4">
        We are not just attorneys; we are your advocates. Our mission is clear—helping you gain financial freedom with integrity, efficiency, and unwavering dedication. With our extensive experience and proven track record, you can trust us to guide you through the Chapter 7 process seamlessly and successfully.
      </p>

      <ul className="list-disc ml-6 mb-6">
        <li><strong>17+ Years of Proven Expertise:</strong> Our lead attorney has nearly two decades of specialized experience guiding clients successfully through the complexities of Chapter 7 bankruptcy.</li>
        <li><strong>Personalized Attention:</strong> Every client receives personalized attention. Your case is handled directly by experienced attorneys who understand bankruptcy law inside and out.</li>
        <li><strong>Comprehensive Debt Relief:</strong> We will analyze your financial situation in detail and offer tailored solutions to eliminate your debt, protect your assets, and restore your peace of mind.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Understanding Chapter 7 Bankruptcy</h2>

      <p className="mb-4">
        Chapter 7 bankruptcy provides a powerful path to eliminate most or all of your unsecured debts, such as credit cards, medical bills, personal loans, and certain other financial obligations. Often referred to as a &quot;fresh start bankruptcy,&quot; Chapter 7 is designed to offer a clean financial slate by:
      </p>

      <ul className="list-disc ml-6 mb-6">
        <li>Eliminating unsecured debt like credit card bills, medical debts, personal loans, and more.</li>
        <li>Stopping creditor harassment, wage garnishments, lawsuits, and aggressive collection actions immediately upon filing.</li>
        <li>Allowing you to keep exempt assets including your home, car, retirement accounts, and personal property.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Our Proven Chapter 7 Bankruptcy Process</h2>

      <ol className="list-decimal ml-6 mb-6">
        <li><strong>Free Initial Consultation:</strong> We provide a no-obligation consultation to discuss your unique situation and outline your best options.</li>
        <li><strong>Personalized Debt Analysis:</strong> We thoroughly review your finances, guiding you every step of the way and ensuring you understand your options clearly.</li>
        <li><strong>Efficient Filing and Representation:</strong> We handle all legal paperwork, communicate directly with creditors, and represent you at every step, ensuring a smooth and stress-free process.</li>
      </ol>

      <h2 className="text-2xl font-semibold mb-4">Start Your Journey Toward Financial Freedom</h2>

      <p className="mb-6">
        Don&apos;t face your financial challenges alone. With unmatched experience and dedication, our bankruptcy law firm has helped countless clients successfully navigate Chapter 7 bankruptcy and reclaim their lives.
      </p>

      <LeadCaptureForm />

      <p className="mt-8">
        <strong>Have more questions?</strong> Visit our <Link href="/faq" className="text-blue-600 hover:underline">FAQ page</Link> for detailed answers about Chapter 7 bankruptcy.
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

export default Chapter7BankruptcyPage;
