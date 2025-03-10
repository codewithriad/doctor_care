import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import { RiFacebookFill } from "react-icons/ri";

interface TeamType {
  id: number;
  name: string;
  image: StaticImageData;
  role: string;
  description: string;
}

const TeamCard = ({ team }: { team: TeamType }) => {
  return (
    <>
      <div className="card max-w-96 bg-white shadow-sm rounded-4xl">
        <figure className="px-4 py-4 flex justify-center">
          <Image
            src={team.image}
            alt={team.name}
            className="w-[100px] h-[100px] rounded-full"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="text-2xl text-[#007e85] font-bold pl-4 py-6">
            {team.name}
          </h2>
          <p className="text-lg text-[#555] font-medium">{team.role}</p>

          <p className="text-[#555] text-lg leading-[30px] px-4 py-3 font-normal">
            {team.description}
          </p>
          <div className="card-actions px-4 py-8">
            <div className="flex justify-center items-center space-x-4">
              <Link
                href="#"
                onClick={() => window.open("https://www.facebook.com/")}
                passHref
              >
                <div className="border-none bg-[#007e852f] rounded-md h-8 w-8 flex justify-center items-center">
                  <RiFacebookFill fill={"#00a3ff"} className="w-4.5 h-4.5" />
                </div>
              </Link>
              <Link
                href="#"
                onClick={() => window.open("https://www.twitter.com/")}
                passHref
              >
                <div className="border-none bg-[#007e852f] rounded-md h-8 w-8 flex justify-center items-center">
                  <BsTwitterX fill={"#00a3ff"} className="w-4.5" />
                </div>
              </Link>
              <Link
                href="#"
                onClick={() => window.open("https://www.instagram.com/")}
                passHref
              >
                <div className="border-none bg-[#007e852f] rounded-md h-8 w-8 flex justify-center items-center">
                  <AiOutlineInstagram fill={"#b88400"} className="w-4.5" />
                </div>
              </Link>
              <Link
                href="#"
                onClick={() => window.open("https://www.linkdin.com/")}
                passHref
              >
                <div className="border-none bg-[#007e852f] rounded-md h-8 w-8 flex justify-center items-center">
                  <FaLinkedinIn fill={"#00a3ff"} className="w-4.5" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamCard;
