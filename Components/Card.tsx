import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ServiceType {
  id: number;
  image: StaticImageData;
  name: string;
  description: string;
}

const Card = ({ service }: { service: ServiceType }) => {
  return (
    <>
      <div className="card max-w-96 bg-white shadow-sm rounded-4xl">
        <figure className="px-4 py-4">
          <Image
            src={service.image}
            alt={service.name}
            className="w-[345px] h-[220px] rounded-2xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="text-2xl text-[#007e85] font-bold text-left pl-4 py-6">
            {service.name}
          </h2>
          <p className="text-[#555] text-lg leading-[30px] px-4 py-3 font-normal text-left">
            {service.description}
          </p>
          <div className="card-actions text-left px-4 py-4">
            <Link href="/blog">
              <p className="text-lg font-bold text-[#007e85]">
                Learn more <span>&rarr;</span>
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
