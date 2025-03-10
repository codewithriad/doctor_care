import { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import team from "../pages/api/team";
import TeamCard from "./TeamCard";

type teamType = {
  id: number;
  name: string;
  image: StaticImageData;
  role: string;
  description: string;
};

const TeamMembers = () => {
  const [data, setData] = useState<teamType[]>([]);
  useEffect(() => {
    setData(team as teamType[]);
  }, []);
  return (
    <>
      <div className="container px-4 mx-auto my-[10rem]">
        {/* section heading */}
        <div
          className="w-[480px] text-center
        mx-auto space-y-4 max-w-[480px] mb-8"
        >
          <h2 className="text-4xl font-bold text-[#007e85]">
            Meet our team members
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
            laudantium aliquam saepe adipisci nulla molestias fugiat odit
            debitis aut commodi.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3">
          {data.map((item) => (
            <TeamCard key={item.id} team={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TeamMembers;
