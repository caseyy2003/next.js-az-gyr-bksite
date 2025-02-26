import Link from "next/link";
import { serviceAreas } from "@/constants/serviceAreas";

export const metadata = {
  title: "Bankruptcy Blog | Expert Legal Advice",
  description:
    "Explore expert bankruptcy articles on Chapter 7, Chapter 13, debt relief, and financial recovery strategies.",
  keywords:
    "Bankruptcy Blog, Chapter 7 Bankruptcy, Chapter 13 Bankruptcy, Debt Relief, Credit Score Bankruptcy, Bankruptcy Case Studies",
  openGraph: {
    title: "Bankruptcy Blog | Expert Legal Advice",
    description:
      "Explore expert bankruptcy articles on Chapter 7, Chapter 13, debt relief, and financial recovery strategies.",
    url: "https://yourwebsite.com/arizona-bankruptcy-lawyers-blog",
    type: "website",
  },
};

const BlogPage = () => {
  return (
    <div className="container mx-auto p-6">
      {/* Page Content */}
      <h1 className="text-3xl font-bold mb-4">Bankruptcy Blog</h1>
      <p className="mb-6">Get expert insights on bankruptcy laws, debt relief, and financial recovery.</p>

      {/* Blog Articles List */}
      <ul>
        <li className="mb-4">
          <h2 className="text-xl font-semibold">
            <Link href="/arizona-bankruptcy-lawyers-blog/chapter-7-bankruptcy" className="text-blue-600 hover:underline">
              Understanding Chapter 7 Bankruptcy
            </Link>
          </h2>
          <p className="text-gray-600 text-sm">Published on February 12, 2025</p>
          <p>Learn the basics of Chapter 7 bankruptcy and whether it’s the right option for you.</p>
        </li>

        <li className="mb-4">
          <h2 className="text-xl font-semibold">
            <Link href="/arizona-bankruptcy-lawyers-blog/chapter-13-bankruptcy" className="text-blue-600 hover:underline">
              Chapter 13 Bankruptcy Explained
            </Link>
          </h2>
          <p className="text-gray-600 text-sm">Published on February 15, 2025</p>
          <p>Find out how Chapter 13 bankruptcy works and how it can help you restructure debt.</p>
        </li>

        <li className="mb-4">
          <h2 className="text-xl font-semibold">
            <Link href="/arizona-bankruptcy-lawyers-blog/bankruptcy-credit-score" className="text-blue-600 hover:underline">
              Bankruptcy and Your Credit Score
            </Link>
          </h2>
          <p className="text-gray-600 text-sm">Published on February 8, 2025</p>
          <p>Understand the impact of bankruptcy on your credit score and how to rebuild credit.</p>
        </li>

        <li className="mb-4">
          <h2 className="text-xl font-semibold">
            <Link href="/arizona-bankruptcy-lawyers-blog/lehman-brothers-bankruptcy" className="text-blue-600 hover:underline">
              The Lehman Brothers Bankruptcy
            </Link>
          </h2>
          <p className="text-gray-600 text-sm">Published on February 12, 2025</p>
          <p>A detailed look at the Lehman Brothers bankruptcy and its impact on the global economy.</p>
        </li>

        <li className="mb-4">
          <h2 className="text-xl font-semibold">
            <Link href="/arizona-bankruptcy-lawyers-blog/home-loan-in-chapter-13" className="text-blue-600 hover:underline">
              Getting a Mortgage While in Chapter 13 Bankruptcy
            </Link>
          </h2>
          <p className="text-gray-600 text-sm">Published on February 21, 2025</p>
          <p>Learn how to secure a mortgage while in Chapter 13 bankruptcy, including court approval, lender requirements, and financial considerations.</p>
        </li>

        <li className="mb-4">
          <h2 className="text-xl font-semibold">
            <Link href="/arizona-bankruptcy-lawyers-blog/chapter-13-bankruptcy-benefits" className="text-blue-600 hover:underline">
              Understanding Chapter 13 Bankruptcy: A Structured Path to Debt Relief
            </Link>
          </h2>
          <p className="text-gray-600 text-sm">Published on February 21, 2025</p>
          <p>Explore how Chapter 13 bankruptcy can help protect assets, stop foreclosure, consolidate debt, and provide long-term financial stability.</p>
        </li>
      
      <li className="mb-4">
          <h2 className="text-xl font-semibold">
            <Link href="/arizona-bankruptcy-lawyers-blog/chapter-13-vehicle-cram-down" className="text-blue-600 hover:underline">
              Understanding Vehicle Cram Down in Chapter 13 Bankruptcy
            </Link>
          </h2>
          <p className="text-gray-600 text-sm">Published on February 21, 2025</p>
          <p>Learn how the vehicle cram down provision in Chapter 13 bankruptcy can help reduce car loan debt and prevent repossession.</p>
        </li>
      </ul>

      {/* Service Areas Section for Internal Linking */}
      <h2 className="text-2xl font-semibold mt-8">Nearby Cities We Serve</h2>
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

export default BlogPage;
