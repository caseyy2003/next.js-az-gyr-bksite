import Head from "next/head";
import LeadCaptureForm from "@/components/LeadCaptureForm";

const ContactPage = () => {
  return (
    <div className="container mx-auto p-6">
      {/* SEO Metadata */}
      <Head>
        <title>Contact Us | Arizona Bankruptcy Attorneys</title>
        <meta 
          name="description" 
          content="Contact our experienced Arizona bankruptcy attorneys for a free consultation. We provide expert Chapter 7 &amp; Chapter 13 legal services remotely, serving all of Arizona."
        />
        <meta 
          name="keywords" 
          content="Contact Arizona Bankruptcy Attorney, Bankruptcy Law Firm, Chapter 7 Lawyer, Chapter 13 Attorney, Virtual Bankruptcy Consultation"
        />
      </Head>

      {/* Contact Section */}
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p>
        We provide expert bankruptcy representation to clients across Arizona. Whether you need guidance on Chapter 7 or Chapter 13 bankruptcy, our team is ready to help.
      </p>
      <p>
        Reach out today to schedule your <strong>free bankruptcy consultation</strong> and take the first step toward financial freedom.
      </p>

      {/* Contact Grid */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="p-6 border rounded shadow-lg bg-gray-100">
          <h2 className="text-xl font-semibold mb-4">Office Information</h2>
          <p><strong>Arizona Bankruptcy Law Firm</strong></p>
          <p>4425 E Agave Rd, Suite 110</p>
          <p>Phoenix, AZ 85044</p>
          <p className="mt-4"><strong>Phone:</strong> <a href="tel:+14808860339" className="text-blue-600 hover:underline">480-886-0339</a></p>
          <p><strong>Email:</strong> <a href="mailto:info@yourlawfirm.com" className="text-blue-600 hover:underline">info@yourlawfirm.com</a></p>
        </div>

        {/* Contact Form */}
        <LeadCaptureForm />
      </div>

      {/* Additional Contact Options */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-2">Serving Clients Across Arizona</h2>
        <p>
          Our firm serves clients throughout the entire state of Arizona. Whether you&apos;re in Phoenix, Tucson, Mesa, or anywhere else, 
          our <strong>virtual consultations make the process easy and convenient</strong>.
        </p>
      </div>

      {/* Map Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
        <iframe
          title="Office Location"
          width="100%"
          height="350"
          style={{ border: "0" }}
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed/v1/place?q=4425+E+Agave+Rd,+Suite+110,+Phoenix,+AZ+85044&amp;key=YOUR_GOOGLE_MAPS_API_KEY"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
