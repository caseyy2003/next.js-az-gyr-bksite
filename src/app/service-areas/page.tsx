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
  { name: "Gilbert", slug: "gilbert" }
];

const ServiceAreas = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Bankruptcy Services in Arizona</h1>
      <p className="mb-6">We provide expert bankruptcy services across Arizona.</p>

      <h2 className="text-2xl font-semibold mt-6">Cities We Serve</h2>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {cities.map((city) => (
          <li key={city.slug} className="text-blue-600 hover:underline">
            <Link href={`/bankruptcy-attorney-${city.slug}`}>
              Bankruptcy Attorney in {city.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceAreas;
