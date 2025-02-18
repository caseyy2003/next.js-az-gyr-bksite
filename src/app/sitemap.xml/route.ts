import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const siteUrl = "https://myazlawfirm.com";

export async function GET() {
  // Get all page directories inside `src/app/`
  const pagesDirectory = path.join(process.cwd(), "src/app");
  const pageDirs = fs.readdirSync(pagesDirectory);

  // Filter out non-page directories and API routes
  const pages = pageDirs
    .filter((dir) => 
      !dir.startsWith("api") && 
      !dir.startsWith("(") && 
      !dir.includes(".tsx") && // Exclude TSX files like layout.tsx
      !dir.includes(".ts") // Exclude TypeScript config files
    )
    .map((dir) => `/${dir}`);

  // Manually add root-level pages if missing
  if (!pages.includes("/")) pages.unshift("/");

  // Generate the proper XML sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
      .map((page) => `
        <url>
          <loc>${siteUrl}${page}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>${page === "/" ? "1.0" : "0.7"}</priority>
        </url>
      `)
      .join("")}
  </urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
