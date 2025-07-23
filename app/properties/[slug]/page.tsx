// app/properties/[slug]/page.tsx (for example)

import { getProperty } from "@/lib/data";
import { Metadata } from "next";

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const property = await getProperty(params.slug);

  if (!property) {
    return {
      title: "Property not found",
      description: "No property found for the given slug",
    };
  }

  return {
    title: property.title,
    description: property.description,
    openGraph: {
      images: [
        typeof property.image === "string"
          ? { url: property.image }
          : { url: property.image.src }
      ],
    },
  };
}

export async function PropertyDetailsPage({ params }: { params: { slug: string } }) {
  const property = await getProperty(params.slug);

  if (!property) {
    return {
      notFound: true,
    };
  }

  return (
      <div className="property-details">
            <h1 className="property-title">{property.title}</h1>
            <img
                src={typeof property.image === "string" ? property.image : property.image.src}
                alt={property.title}
                className="property-image"
            />
            <p className="property-description">{property.description}</p>
            <p className="property-price">${property.price}</p>
        </div>
  );
}

export default PropertyDetailsPage;
