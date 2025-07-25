import getUser from "@/app/services/getUser";
import { getProperty, getProps } from "@/lib/data";
import { Metadata } from "next";
import Image from "next/image";


export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  'use client';
  const property = await getProperty(params.slug);
  const baseUrl = process.env.NEXT_BASE_URL as string;

  if (!property) {
    return {
      title: "Property not found",
      description: "No property found for the given slug",
    };
  };
  
  return {
    title: property.title,
    description: property.description,
    openGraph: {
      images: [
        typeof property.image === "string"
        ? { url: property.image }
        : { url: property.image.src },
      ],
      title: property.title,
      description: property.description,
      url: `${baseUrl}/properties/${property.slug}`,
    },
  };
}

type User = {
  name: string;
  role: string;
}
export async function PropertyDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  const property = await getProperty(params.slug);

  if (!property) {
    return {
      notFound: true,
    };
  };

    const propertyList = getProps();
    const user = await getUser();

    console.log(user);
    
  

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-4">
      <h1 className="text-3xl font-bold">{property.title}</h1>
      <Image src={property.image} alt={property.title} width={800} height={400} />
      <p>{property.description}</p>

      {/* {user?.role === "admin" && (
        <div className="text-red-600">⚠️ Freeze Property Option Available</div>
      )}

      {user?.role === "renter" && (
        <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded">Contact Landlord</button>
      )}

      {user?.role === "landlord" && (
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">Edit Listing</button>
      )}

      {user?.role === "public" && (
        <button className="mt-4 px-4 py-2 bg-pink-600 text-white rounded">This is for general</button>
      )} */}

      {!user && <p className="text-gray-600">Sign in to contact landlord.</p>}
    </div>
  );
}

export default PropertyDetailsPage;
