import { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import service from "../pages/api/service";
import Card from "./Card";

interface ServiceType {
  id: number;
  image: StaticImageData;
  name: string;
  description: string;
  price: number;
}

const Services = () => {
  const [data, setData] = useState<ServiceType[]>([]);
  useEffect(() => {
    setData(service);
  }, []);
  return (
    <>
      <div className="container px-4 mx-auto my-[4rem]">
        {/* section heading */}
        <div
          className="w-[480px] text-center
        mx-auto space-y-4 max-w-[480px] mb-8"
        >
          <h2 className="text-4xl font-bold text-[#007e85]">
            Services we provide
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
            laudantium aliquam saepe adipisci nulla molestias fugiat odit
            debitis aut commodi.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3">
          {data.map((item) => (
            <Card key={item.id} service={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
