import { getProps } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export default function PropertyPage() {
  const propertyList = getProps();
  console.log(propertyList);
  
  return (
    <>
    <div className="text mt-20 flex flex-wrap items-center justify-center gap-5">
    {propertyList.map((props) => (
      <Link href={`/properties/${props?.slug}`} key={props?.id} className="property-card border">
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
    </>
  );
}
