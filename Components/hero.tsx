import Image from "next/image";
import Link from "next/link";
import { FaCirclePlay } from "react-icons/fa6";
import heroImageBg from "../public/image/hero-image-bg.png";
import heroImage from "../public/image/hero.png";
import doctor1 from "../public/image/team/doctor1.jpg";
import doctor2 from "../public/image/team/doctor2.jpg";
import doctor3 from "../public/image/team/doctor3.jpg";
import doctor4 from "../public/image/team/doctor4.jpg";
export default function Hero() {
  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center min-h-[80vh] lg:min-h-[90vh] ">
        {/* hero text */}
        <div className="max-w-[650px]">
          <h1 className="text-4xl font-semibold leading-snug text-gray-800">
            Providing Quality <span className="text-[#007E85]">Healthcare</span>{" "}
            for a Brighter and <span className="text-[#6EAB36]">Healthy</span>{" "}
            Future
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed mt-4">
            At our hospital, we are dedicated to providing exceptional medical
            care to our patients and their families. Our experienced team of
            medical professionals, cutting-edge technology, and compassionate
            approach make us a leader in the healthcare industry
          </p>
          <div className="flex mt-6 space-x-4">
            <button className="px-6 py-2 bg-[#007E85] text-white rounded-md">
              Book Appointment
            </button>
            <Link
              href={"/"}
              className="px-6 py-2 bg-transparent text-[#007E85] rounded-md flex items-center space-x-2"
            >
              <FaCirclePlay className="w-[27px] h-[27px]" />
              <span className="text-black">Watch Video</span>
            </Link>
          </div>
        </div>
        {/* hero image */}
        <div className="flex justify-center items-center relative">
          <Image src={heroImage} alt="hero image" className=" z-10 mb-5" />
          <Image
            src={heroImageBg}
            alt="hero image"
            className="absolute -bottom-4"
          />
          {/* our professionals team */}
          <div className="bg-white px-10 py-4 rounded-lg shadow-md absolute bottom-10 -left-16 p-2">
            <p className="text-[12px] text-center font-bold mb-1">
              Our Professionals
            </p>
            <div className="flex -space-x-1 items-center justify-center">
              <Image
                src={doctor1}
                alt="doctors"
                className="w-[27px] h-[27px] rounded-full"
              />
              <Image
                src={doctor2}
                alt="doctors"
                className="w-[27px] h-[27px] rounded-full"
              />
              <Image
                src={doctor3}
                alt="doctors"
                className="w-[27px] h-[27px] rounded-full"
              />
              <Image
                src={doctor4}
                alt="doctors"
                className="w-[27px] h-[27px] rounded-full"
              />
              <p className="text-[12px] text-white bg-[#007E85] rounded-full p-3 h-[27px] w-[27px] flex items-center justify-center">
                30+
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
