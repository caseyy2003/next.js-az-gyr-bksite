import Head from "next/head";

const AboutPage = () => {
  return (
    <div className="container mx-auto p-6">
      {/* SEO Metadata */}
      <Head>
        <title>About Our Bankruptcy Attorneys | Top Arizona Bankruptcy Lawyers</title>
        <meta 
          name="description" 
          content="Meet the top bankruptcy attorneys in Arizona—Casey Yontz, Glenn Roethler, and Scott Greeves. Over 50 years of combined bankruptcy experience, now offering virtual services statewide."
        />
        <meta 
          name="keywords" 
          content="Arizona Bankruptcy Lawyers, Best Bankruptcy Attorneys in Arizona, Virtual Bankruptcy Law Firm, Chapter 7 Bankruptcy, Chapter 13 Bankruptcy, Debt Relief Experts"
        />
      </Head>

      {/* Page Content */}
      <h1 className="text-3xl font-bold mb-4">About Our Firm</h1>
      <p>
        When facing bankruptcy, experience matters. With over 50 years of combined bankruptcy experience, our attorneys—Casey Yontz, Glenn Roethler, and Scott Greeves—have successfully helped thousands of Arizona residents achieve financial freedom.
      </p>
      <p>
        Bankruptcy is complex, but it doesn’t have to be difficult. Our firm was founded to provide high-quality legal representation statewide—without the hassle of multiple in-person visits.
      </p>
      <p>
        Many top-tier bankruptcy attorneys require in-person consultations and multiple office visits. With our fully remote service model, you receive the same elite legal representation without leaving your home. We handle everything electronically and virtually, allowing you to focus on your financial recovery.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Meet Our Attorneys</h2>

      <h3 className="text-xl font-bold mt-4">Casey Yontz</h3>
      <p>
        Experience: 17+ years of bankruptcy law, former Bar Counsel at the State Bar of Arizona  
      </p>
      <p>Education:</p>
      <ul className="list-disc ml-6 mt-2">
        <li>Ohio University, BA</li>
        <li>Massachusettes Institute of Technology, Postgrad Certificates, Computer Science, Machine Learning</li>
        <li>Western State College of Law, JD</li>
      </ul>
      <br />
      <p>
        Casey Yontz has over 17 years of experience handling hundreds, if not thousands, of bankruptcy cases in Arizona. His career has been dedicated to helping individuals navigate Chapter 7 and Chapter 13 bankruptcy with expert guidance.
      </p>
      <p>
        Previously, Casey served as Bar Counsel at the State Bar of Arizona, where he upheld the integrity of the legal profession. His deep understanding of bankruptcy law, combined with his technological expertise, ensures that our firm remains at the forefront of efficiency and innovation.
      </p>

      <h3 className="text-xl font-bold mt-4">Glenn Roethler</h3>
      <p>
        Experience: 17+ years of bankruptcy law, extensive casework in Arizona courts  
      </p>
      <p>Education:</p>
      <ul className="list-disc ml-6 mt-2">
        <li>BA, University of Washington</li>
        <li>JD, Arizona State University</li>
      </ul>
      <br />
      <p>
        Glenn Roethler is one of Arizona’s most experienced bankruptcy attorneys, with a proven track record in handling complex bankruptcy cases. With over 17 years of practice, Glenn has assisted hundreds, if not thousands, of clients in finding relief from debt through Chapter 7 and Chapter 13 filings.
      </p>
      <p>
        Glenn is known for his strategic problem-solving skills and deep understanding of bankruptcy law. Whether guiding clients through asset protection strategies or ensuring a smooth bankruptcy filing, his thorough and meticulous approach helps clients achieve the best possible financial outcome.
      </p>

      <h3 className="text-xl font-bold mt-4">Scott Greeves</h3>
      <p>
        Experience: 20+ years of bankruptcy law, former attorney at the Arizona Department of Revenue  
      </p>
      <p>Education:</p>
      <ul className="list-disc ml-6 mt-2">
        <li>BA, Iowa State University</li>
        <li>JD, University of Iowa</li>
      </ul>
      <br />
      <p>
        With over 20 years of bankruptcy experience, Scott Greeves has been a powerful advocate for individuals and businesses in financial distress. Before entering private practice, Scott worked for the Arizona Department of Revenue, giving him first-hand experience in handling tax-related bankruptcy issues.
      </p>
      <p>
        His deep knowledge of bankruptcy and tax law makes him an invaluable asset to clients seeking relief from IRS tax debt, wage garnishments, and foreclosure prevention. Scott’s decades of experience allow him to foresee and mitigate legal challenges before they arise, ensuring a smooth and stress-free bankruptcy process.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Why Choose Our Firm?</h2>
      <p>
        Finding a highly experienced bankruptcy attorney in Arizona shouldn’t require multiple office visits. That’s why our firm was founded—to make top-tier bankruptcy representation available to every resident in the state, no matter where they live.
      </p>
      <p>Our firm offers:</p>
      <ul className="list-disc ml-6 mt-2">
        <li>Decades of Bankruptcy Experience: Over 50+ years of combined experience handling Arizona bankruptcy cases.</li>
        <li>Thousands of Cases Handled: Our attorneys have successfully guided hundreds, if not thousands, of clients through bankruptcy.</li>
        <li>Remote Consultations & Virtual Case Handling: No need for in-person office visits—handle everything from the comfort of your home.</li>
        <li>Proven Track Record of Success: Our firm has helped countless Arizona residents eliminate debt and rebuild their financial future.</li>
        <li>Personalized Legal Strategies: Every bankruptcy case is different. We create tailored legal solutions for each client.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Get Expert Bankruptcy Help Today</h2>
      <p>
        If you’re struggling with credit card debt, medical bills, foreclosure, or wage garnishment, we can help. Our highly experienced bankruptcy attorneys provide trusted guidance and proven results—without requiring in-person office visits.
      </p>
      <p>Contact us today for a free consultation and take the first step toward financial relief.</p>

      {/* Lead Capture Form */}
      <div className="mt-8 p-6 border rounded shadow-lg bg-gray-100">
        <h2 className="text-xl font-semibold">Request Your Free Bankruptcy Consultation</h2>
        <form className="space-y-3">
          <input type="text" placeholder="Full Name" className="w-full p-2 border rounded" required />
          <input type="email" placeholder="Email Address" className="w-full p-2 border rounded" required />
          <input type="tel" placeholder="Phone Number" className="w-full p-2 border rounded" required />
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Schedule Consultation
          </button>
        </form>
      </div>
    </div>
  );
};

export default AboutPage;
