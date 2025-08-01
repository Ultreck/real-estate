'use client';
import { getProps } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type User = {
  name: string;
  role: string
}
export default function Home() {
  const [user, setuser] = useState<User | null>(null);
  const propertyList = getProps();
  
  useEffect(() => {
    fetch('/api/user', {
      method: 'GET',
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      
      setuser(data);
    })
  
   
  }, [])
  
  
  return (
    <>
    <div className="text mt-20 flex flex-wrap items-center justify-center gap-5">
    {propertyList.map((props) => (
      <Link href={`/properties/${props?.slug}`} key={props.id} className="property-card border">
        <Image
          src={props.image}
          alt={props.title}
          width={300}
          height={200}
          className="property-image"
        />
        <h2 className="property-title">{props.title}</h2>
        <p className="property-description">{props.description}</p>
        <p className="property-price">${props.price}</p>
         {user?.role === "admin" && (
        <div className="text-red-600">⚠️ Freeze Property Option Available</div>
      )}

      {user?.role === "renter" && (
        <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded">Contact Landlord</button>
      )}

      {user?.role === "landlord" && (
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">Edit Listing</button>
      )}

      {user?.role === "public" && (
        <button className="mt-4 px-4 py-2 bg-pink-600 text-white rounded">Your role is public</button>
      )}

      {!user && <p className="text-gray-600">Sign in to contact landlord.</p>}
      </Link>
    ))}
    </div>
    </>
  );
}
