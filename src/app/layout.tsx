import "./globals.css"; // ✅ Ensure correct global styles
import Navigation from "../components/Navigation"; // ✅ Ensure this path is correct
import "bootstrap/dist/css/bootstrap.min.css";

export const metadata = {
  title: "Bankruptcy Attorney Arizona - Serving All of Arizona",
  description: "Expert bankruptcy guidance and services in Maricopa County.",
  keywords: "bankruptcy, attorney, Maricopa County, Phoenix, financial help",
  other: {
    "google-site-verification": "y1sNrjqb7N67bs6aqaQBPPGEA9w_7B-gXitGA4Qb_JQ", // ✅ Add Google Search Console verification tag
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation /> {/* Navigation bar appears on every page */}
        <main className="p-4">{children}</main> {/* Page content */}
      </body>
    </html>
  );
}
