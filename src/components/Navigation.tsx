"use client";

import { useState } from "react";
import Link from "next/link";

const cities = [
  { name: "Phoenix", slug: "phoenix" },
  { name: "Mesa", slug: "mesa" },
  { name: "Chandler", slug: "chandler" },
  { name: "Glendale", slug: "glendale" },
  { name: "Tempe", slug: "tempe" },
  { name: "Peoria", slug: "peoria" },
  { name: "Scottsdale", slug: "scottsdale" },
  { name: "Surprise", slug: "surprise" },
  { name: "Avondale", slug: "avondale" },
  { name: "Goodyear", slug: "goodyear" },
  { name: "Tucson", slug: "tucson" },
  { name: "Flagstaff", slug: "flagstaff" },
  { name: "Prescott", slug: "prescott" },
  { name: "Kingman", slug: "kingman" },
  { name: "Casa Grande", slug: "casa-grande" },
  { name: "Sierra Vista", slug: "sierra-vista" },
  { name: "Apache Junction", slug: "apache-junction" },
  { name: "Bullhead City", slug: "bullhead-city" },
  { name: "Lake Havasu City", slug: "lake-havasu-city" },
  { name: "Maricopa", slug: "maricopa" },
  { name: "Yuma", slug: "yuma" },
];

const Navigation = () => {
  const [isServiceAreasOpen, setIsServiceAreasOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4">
      <ul className="flex space-x-6 items-center">
        <li>
          <Link href="/" className="hover:text-gray-300">Home</Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-gray-300">About</Link>
        </li>
        <li>
  <Link href="/faq" className="hover:text-gray-300">FAQ</Link>
</li>
        <li className="relative">
          <button
            className="hover:text-gray-300"
            onClick={() => setIsServiceAreasOpen(!isServiceAreasOpen)}
          >
            Service Areas ▼
          </button>
          {isServiceAreasOpen && (
            <ul className="absolute left-0 mt-2 bg-white text-gray-900 shadow-md w-64 rounded">
              {cities.map((city) => (
                <li key={city.slug} className="hover:bg-gray-200">
                  <Link
                    href={`/bankruptcy-attorney-${city.slug}`}
                    className="block px-4 py-2"
                  >
                    Bankruptcy Attorney in {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
        <li>
        <Link href="/arizona-bankruptcy-lawyers-blog" className="hover:text-gray-300">Blog</Link>

        </li>
        <li>
          <Link href="/contact" className="hover:text-gray-300">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
