import Image from "next/image";
import reasonImage from "../public/image/reasons.jpg";

const WhyUs = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 mt-20">
        {/* text part */}
        <div className="max-w-[450px]">
          <h1 className="text-4xl font-bold text-[#007e85]">
            You have lot of reasons to choose us.
          </h1>
          <p className="text-base mt-5">
            We believe in empowering individuals to make informed decisions
            about their healthcare and helping them achieve their goals.
          </p>
        </div>
        {/* image part */}
        <div>
          <figure className="rounded-xl overflow-hidden shadow-lg">
            <Image
              src={reasonImage}
              alt="reasons"
              className="w-[625px] h-auto"
            />
          </figure>
        </div>
      </div>
    </>
  );
};

export default WhyUs;
