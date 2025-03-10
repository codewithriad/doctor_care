import { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import testimonial from "../pages/api/testimonials";
import TestimonialCard from "./TestimonialCard";

interface testimonialType {
  id: number;
  name: string;
  role: string;
  description: string;
  image: StaticImageData;
  comment: string;
}

const Testimonials = () => {
  const [testData, setTestData] = useState<testimonialType[]>([]);

  useEffect(() => {
    setTestData(testimonial);
  }, []);

  return (
    <>
      <section className="container">
        <div className="px-4 mx-auto my-[10rem]">
          {/* section heading */}
          <div
            className="w-[480px] text-center
        mx-auto space-y-4 max-w-[480px] mb-8"
          >
            <h2 className="text-4xl font-bold text-[#007e85]">Testimonial</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
              laudantium aliquam saepe adipisci nulla molestias fugiat odit
              debitis aut commodi.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3">
            {testData.map((item) => (
              <TestimonialCard key={item.id} testimonial={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
