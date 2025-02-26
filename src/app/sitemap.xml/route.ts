import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const siteUrl = "https://www.myazlawfirm.com"; // ✅ Ensure the correct domain

// Function to recursively get all routes from the app directory
function getRoutes(dir: string, basePath = ""): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  return entries.flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    let routePath = `${basePath}/${entry.name}`;

    if (entry.isDirectory()) {
      // Ignore special Next.js folders and directories
      if (
        entry.name.startsWith("(") ||
        entry.name.startsWith("_") ||
        entry.name.startsWith("api") ||
        entry.name === "sitemap.xml"
      ) {
        return [];
      }
      return getRoutes(fullPath, routePath);
    }

    // ✅ If it's "page.tsx" or "page.js", return the **folder path** only
    if (entry.name === "page.tsx" || entry.name === "page.js") {
      return [basePath.replace(/\/page$/, "") || "/"];
    }

    return [];
  });
}

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
