import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import Link from "next/link";
import ClientMDXRenderer from "@/components/ClientMDXRenderer";
import { serviceAreas } from "@/constants/serviceAreas";

// Generate static paths for all posts
export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);
  return filenames.map((file) => ({
    slug: file.replace(/\.mdx?$/, ""),
  }));
}

// Generate SEO metadata based on MDX front matter
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filePath = path.join(postsDirectory, `${params.slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContents);

  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    openGraph: {
      title: data.title,
      description: data.description,
      url: `https://www.myazlawfirm.com/arizona-bankruptcy-lawyers-blog/${params.slug}`,
      type: "article",
    },
  };
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filePath = path.join(postsDirectory, `${params.slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(fileContents);
  const mdxSource = await serialize(content);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
      <p className="text-gray-600 text-sm">
        Published on {data.date} by <strong>{data.author}</strong>
      </p>
      <article className="prose">
        <ClientMDXRenderer mdxSource={mdxSource} />
      </article>

      {/* Service Areas Section */}
      <h2 className="text-2xl font-semibold mt-6">Service Areas</h2>
      <ul className="grid grid-cols-2 gap-4">
        {serviceAreas.map((area) => (
          <li key={area.slug}>
            <Link
              href={`/bankruptcy-attorney-${area.slug}`}
              className="text-blue-500 hover:underline"
            >
              Bankruptcy Attorney in {area.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Back to Blog (Keep only one; remove duplicate from MDX if present) */}
      <div className="mt-6">
        <Link
          href="/arizona-bankruptcy-lawyers-blog"
          className="text-blue-500 hover:underline"
        >
          ← Back to Blog
        </Link>
      </div>
    </div>
  );
}
