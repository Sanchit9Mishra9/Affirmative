import { motion } from "framer-motion";
import { AerospaceAndDefenceIndustriesData } from "../IndustriesData";
import { Link } from "react-router-dom";

export default function IndustriesSuccessStories({
  successStories,
  link,
}: {
  successStories: typeof AerospaceAndDefenceIndustriesData.successStories;
  link: string;
}) {
  return (
    <div className="w-full   flex justify-center ">
      <div className="w-full h-full max-w-7xl flex flex-col pt-20 md:py-20  px-6   md:px-10  min-[1280px]:px-4    gap-14  ">
        <div className="w-full flex flex-col gap-4 items-start">
          <span className="text-[6vw] md:text-[4vw] font-medium leading-none text-purple-600">
            Success Stories
          </span>
          <p className="text-[1rem] md:text-[2rem] md:leading-none">
            {successStories.title}
          </p>
        </div>
        {/* grid grid-cols-1 md:grid-cols-3 min-[1280px]:grid-cols-4 gap-10 */}
        <div className="w-full   flex md:flex-row flex-col gap-8">
          {/* Cards */}
          {successStories.stories.map((item, i) => (
            <Cards key={i} item={item} index={i} link={link} />
          ))}
        </div>
      </div>
    </div>
  );
}

const Cards = ({
  item,
  index,
  link,
}: {
  item: (typeof AerospaceAndDefenceIndustriesData.successStories.stories)[0];
  index: number;
  link: string;
}) => {
  return (
    <div className="md:w-1/4 h-[300px] flex flex-col gap-2 bg-[#1d1d1d] overflow-hidden">
      <div className="w-full   h-2/3 p-4 flex justify-start items-end relative">
        <motion.img
          initial={{ x: 0, scale: 1.1 }}
          whileHover={{ x: 10 }}
          transition={{ duration: 0.5 }}
          src={item.img}
          alt={`${item.heading} image`}
          className="inset-0 absolute w-full h-full  object-cover object-center"
        />
      </div>

      <div className="w-full  h-full flex flex-col  items-start  p-4 gap-4  justify-evenly ">
        <p className="  font-thin text-purple-50">{item.heading}</p>
        <Link to={`/industries/${link}/success-stories/${index}`}>
          <span>Read more</span>
        </Link>
      </div>
    </div>
  );
};
