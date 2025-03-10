import Image, { StaticImageData } from "next/image";

interface testimonialType {
  id: number;
  name: string;
  role: string;
  description: string;
  image: StaticImageData;
  comment: string;
}

const TestimonialCard = ({ testimonial }: { testimonial: testimonialType }) => {
  return (
    <>
      <div className="card bg-white max-w-96 shadow-sm px-8 py-10 rounded-2xl">
        <figure className="flex justify-start">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            className="w-20 h-20 rounded-full object-center object-cover mb-10"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-[22px] font-bold leading-[22px]">
            <q>{testimonial.comment}</q>
          </h2>
          <p className="font-sans text-lg leading-[30px] text-[#555] py-4">
            {testimonial.description}
          </p>
          <div className="card-actions justify-end">
            <h3 className="text-[#007e85] text-lg font-bold leading-4.5 mb-3">
              {testimonial.name}
            </h3>
            <span className="text-[#555] font-sans leading-4.5 text-lg">
              {testimonial.role}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;

// id: 1,
//     name:
//     image:

//     comment:
//     description:
//
//     role:
