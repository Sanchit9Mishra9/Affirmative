import { teamExpertList } from "@/lib/utils";
import { Linkedin } from "lucide-react";

function MeetLeadership() {
  const Card = ({
    name,
    position,
  }: {
    img: string;
    name: string;
    position: string;
  }) => {
    return (
      <div className="w-full h-[350px] flex flex-col gap-4 text-002E63 ">
        <div className="w-full h-[65%]">
          <img
            src="/aboutus/user.webp"
            alt={`team member ${name} image`}
            className="w-full h-full object-scale-down origin-center  object-center brightness-75 "
          />
        </div>
        <span className="text-xl md:font-semibold leading-none">{name}</span>
        <span className=" md:text-[1.1rem] font-thin leading-none">
          {position}
        </span>

        <Linkedin className="w-4 h-4 text-002E63  " />
      </div>
    );
  };
  return (
    <div className="w-full  flex justify-center   ">
      <div className="w-full h-full  flex flex-col pt-20 md:py-20  px-6 max-w-7xl   md:px-10  min-[1280px]:px-4      justify-center gap-16  ">
        <div className="w-full flex  justify-center items-center">
          <span className="text-2xl md:text-5xl font-bold leading-none text-002E62">
            Meet Our Leadership
          </span>
        </div>
        <div className="grid w-full grid-cols-1 md:grid-cols-2 min-[996px]:grid-cols-4 gap-8 md:gap-10">
          {teamExpertList.slice(0, 4).map((member, index) => (
            <Card
              img={member.img}
              name={member.name}
              position={member.post}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MeetLeadership;
