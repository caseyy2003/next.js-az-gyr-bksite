import nodemailer from "nodemailer";

const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;
const ADMIN_EMAILS = process.env.ADMIN_EMAILS?.split(",") || [];

if (!EMAIL_USER || !EMAIL_PASS || ADMIN_EMAILS.length === 0) {
  throw new Error("Missing email configuration in environment variables.");
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: { user: EMAIL_USER, pass: EMAIL_PASS },
});

export async function sendEmailToAdmin(lead: { name: string; email: string; phone: string }) {
  const mailOptions = {
    from: `"Bankruptcy Law Firm" <${EMAIL_USER}>`,
    to: ADMIN_EMAILS,
    subject: "New Lead Submission",
    text: `New lead submitted:\n\nName: ${lead.name}\nEmail: ${lead.email}\nPhone: ${lead.phone}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Admin email sent successfully.");
  } catch (error) {
    console.error("Error sending email to admin:", error);
    throw new Error("Failed to send admin email.");
  }
}

export async function sendEmailToLead(lead: { name: string; email: string }) {
  const mailOptions = {
    from: `"Bankruptcy Law Firm" <${EMAIL_USER}>`,
    to: lead.email,
    subject: "Thank You for Contacting Us",
    text: `Hi ${lead.name},\n\nThank you for reaching out. We will get back to you shortly.\n\nBest,\nYour Law Firm`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Lead email sent successfully.");
  } catch (error) {
    console.error("Error sending email to lead:", error);
    throw new Error("Failed to send email to lead.");
  }
}
