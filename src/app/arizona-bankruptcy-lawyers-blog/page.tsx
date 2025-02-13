import Link from "next/link";
import Head from "next/head";

const BlogPage = () => {
  return (
    <div className="container mx-auto p-6">
      <Head>
        <title>Bankruptcy Blog | Expert Legal Advice</title>
        <meta 
          name="description" 
          content="Explore expert bankruptcy articles on Chapter 7, Chapter 13, debt relief, and financial recovery strategies."
        />
      </Head>

      <h1 className="text-3xl font-bold mb-4">Bankruptcy Blog</h1>
      <p className="mb-6">Get expert insights on bankruptcy laws, debt relief, and financial recovery.</p>

      <ul>
        <li className="mb-4">
          <h2 className="text-xl font-semibold">
            <Link href="/blog/chapter-7-bankruptcy" className="text-blue-600 hover:underline">
              Understanding Chapter 7 Bankruptcy
            </Link>
          </h2>
          <p className="text-gray-600 text-sm">Published on February 12, 2025</p>
          <p>Learn the basics of Chapter 7 bankruptcy and whether it’s the right option for you.</p>
        </li>

        <li className="mb-4">
          <h2 className="text-xl font-semibold">
            <Link href="/blog/chapter-13-bankruptcy" className="text-blue-600 hover:underline">
              Chapter 13 Bankruptcy Explained
            </Link>
          </h2>
          <p className="text-gray-600 text-sm">Published on February 15, 2025</p>
          <p>Find out how Chapter 13 bankruptcy works and how it can help you restructure debt.</p>
        </li>

        <li className="mb-4">
          <h2 className="text-xl font-semibold">
            <Link href="/blog/bankruptcy-credit-score" className="text-blue-600 hover:underline">
              Bankruptcy and Your Credit Score
            </Link>
          </h2>
          <p className="text-gray-600 text-sm">Published on February 8, 2025</p>
          <p>Understand the impact of bankruptcy on your credit score and how to rebuild credit.</p>
        </li>
      </ul>
    </div>
  );
};

export default BlogPage;
