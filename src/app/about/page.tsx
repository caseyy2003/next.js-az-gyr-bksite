import LeadCaptureForm from "@/components/LeadCaptureForm";
import { serviceAreas } from "@/constants/serviceAreas";
import Link from "next/link";

export const metadata = {
  title: "About Our Bankruptcy Attorneys | Top Arizona Bankruptcy Lawyers",
  description:
    "Meet the top bankruptcy attorneys in Arizona—Casey Yontz, Glenn Roethler, and Scott Greeves. Over 50 years of combined bankruptcy experience, now offering virtual services statewide.",
  keywords:
    "Arizona Bankruptcy Lawyers, Best Bankruptcy Attorneys in Arizona, Virtual Bankruptcy Law Firm, Chapter 7 Bankruptcy, Chapter 13 Bankruptcy, Debt Relief Experts",
};

const AboutPage = () => {
  return (
    <div className="container mx-auto p-6">
      {/* Page Content */}
      <h1 className="text-3xl font-bold mb-4">About Our Firm</h1>
      <p>
        When facing bankruptcy, experience matters. With over 17 years of bankruptcy experience, our attorney—Casey
        Yontz, has successfully helped thousands of Arizona residents achieve financial freedom.
      </p>
      <p>
        Bankruptcy is complex, but it doesn’t have to be difficult. Our firm was founded to provide high-quality legal
        representation statewide—without the hassle of multiple in-person visits.
      </p>
      <p>
        Many top-tier bankruptcy attorneys require in-person consultations and multiple office visits. With our fully remote service
        model, you receive the same elite legal representation without leaving your home. We handle everything electronically and
        virtually, allowing you to focus on your financial recovery.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Meet Our Attorneys</h2>

      <h3 className="text-xl font-bold mt-4">Casey Yontz</h3>
      <p>Experience: 17+ years of bankruptcy law, former Bar Counsel at the State Bar of Arizona</p>
      <p>Education:</p>
      <ul className="list-disc ml-6 mt-2">
        <li>Ohio University, BA</li>
        <li>Massachusetts Institute of Technology, Postgrad Certificates, Computer Science, Machine Learning</li>
        <li>Western State College of Law, JD</li>
      </ul>

 

      

      <h2 className="text-2xl font-semibold mt-6">Why Choose Our Firm?</h2>
      <ul className="list-disc ml-6 mt-2">
        <li>Over 50 years of combined experience handling Arizona bankruptcy cases.</li>
        <li>Thousands of successful bankruptcy cases.</li>
        <li>Remote consultations & virtual case handling.</li>
        <li>Proven track record of success in eliminating debt.</li>
        <li>Personalized legal strategies tailored to each case.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Get Expert Bankruptcy Help Today</h2>
      <p>
        If you’re struggling with debt, our experienced attorneys can help. Contact us today for a free consultation and take the
        first step toward financial relief.
      </p>

      {/* Lead Capture Form */}
      <LeadCaptureForm />

      {/* Nearby Service Areas */}
      <h2 className="text-2xl font-semibold mt-8">Areas We Serve</h2>
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

export default AboutPage;
