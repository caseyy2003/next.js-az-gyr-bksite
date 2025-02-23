import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const siteUrl = "https://myazlawfirm.com";

// Function to recursively get all routes from the app directory
const getRoutes = (dir: string, basePath = ""): string[] => {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  return entries.flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    const routePath = `${basePath}/${entry.name}`.replace(/\/page$/, ""); // Normalize route

    if (entry.isDirectory()) {
      if (
        entry.name.startsWith("(") || // Ignore special Next.js folders
        entry.name.startsWith("_") || // Ignore private folders
        entry.name.startsWith("api") || // Ignore API routes
        entry.name === "sitemap.xml" // Ignore the sitemap route itself
      ) {
        return [];
      }
      return getRoutes(fullPath, routePath);
    }

    // Include only page directories and ignore files
    if (entry.name === "page.tsx" || entry.name === "page.js") {
      return routePath;
    }

    return [];
  });
};

export async function GET() {
  const pagesDirectory = path.join(process.cwd(), "src/app");
  const pages = getRoutes(pagesDirectory);

  // Ensure homepage `/` is included
  if (!pages.includes("/")) {
    pages.unshift("/");
  }

  // Generate XML sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
      .map((page) => {
        const priority = page === "/" ? "1.0" : page.includes("/bankruptcy-attorney") ? "0.8" : "0.7";
        const changefreq = page.includes("/blog") ? "weekly" : "monthly";

        return `
        <url>
          <loc>${siteUrl}${page}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>${changefreq}</changefreq>
          <priority>${priority}</priority>
        </url>`;
      })
      .join("")}
  </urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}