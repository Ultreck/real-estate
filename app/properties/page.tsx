"use client";

import { getProps } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type User = {
  name: string;
  role: string;
};
export default function PropertyPage() {
  const propertyList = getProps();
  const [user, setuser] = useState<User | null>(null);

  useEffect(() => {
    fetch("/api/user", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setuser(data);
      });
  }, []);

  return (
    <>
      {!user?.role || !user.name ? (
        <div className="text flex justify-center items-center min-h-[50vh]">
          <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded">
            Sign in to contact landlord
          </button>
        </div>
      ) : (
        <div className="text mt-20 flex flex-wrap items-center justify-center gap-5">
          {propertyList.map((props) => (
            <Link
              href={`/properties/${props?.slug}`}
              key={props?.id}
              className="property-card border"
            >
              <Image
                src={props?.image}
                alt={props?.title}
                width={300}
                height={100}
                className="property-image"
              />
              <h2 className="property-title">{props?.title}</h2>
              <p className="property-description">{props?.description}</p>
              <p className="property-price">${props?.price}</p>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
