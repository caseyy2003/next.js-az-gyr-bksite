import "./globals.css"; // ✅ Ensure correct global styles
import Navigation from "../components/Navigation"; // ✅ Ensure this path is correct

export const metadata = {
  title: "My Blogs - Expert Bankruptcy Advice",
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
