import { ChevronRight, Linkedin } from "lucide-react";
import { Link, useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import { TravelSuccessStoriesData } from "./TravelSuccessStoriesData";

export default function TravelSuccessStories() {
  const { id } = useParams();
  const [data, setData] = useState<(typeof TravelSuccessStoriesData)[0] | null>(
    null
  );

  useEffect(() => {
    if (id) {
      setData(TravelSuccessStoriesData[parseInt(id)]);
    }
  }, [id]);

  return (
    <div className="w-full min-h-screen  flex justify-center ">
      <div className="w-full h-full  flex flex-col md:flex-row mt-10 md:mt-20 py-10  px-6 max-w-7xl   md:px-10  min-[1280px]:px-4    gap-14   ">
        <div className="w-full md:w-[90%] flex flex-col gap-6 md:gap-10 ">
          <div className="flex w-fit gap-3 md:mt-8 ">
            <Link
              to="/industries/travel"
              className="w-fit flex gap-2 justify-center items-center"
            >
              <span className="text-xs md:text-sm hover:text-primary">
                Industries
              </span>

              <div className="bg-slate-200">
                <ChevronRight className="w-2 h-2 md:w-3 md:h-3 text-black" />
              </div>
            </Link>
            <Link
              to="/industries/travel"
              className="w-fit flex gap-2 justify-center items-center"
            >
              <span className="text-xs md:text-sm hover:text-primary">
                Travel
              </span>

              <div className="bg-slate-200">
                <ChevronRight className="w-2 h-2 md:w-3 md:h-3 text-black" />
              </div>
            </Link>
            <div className="w-fit flex gap-2 justify-center items-center">
              <span className="text-xs md:text-sm">Success Stories</span>

              <div className="bg-slate-200">
                <ChevronRight className="w-2 h-2 md:w-3 md:h-3 text-black" />
              </div>
            </div>
          </div>

          {/* type */}

          {/* <span className=" md:mt-10">Success Stories</span> */}

          {/* title */}

          <span className="text-[24px] md:text-[48px] font-thin md:leading-[3.6rem]">
            {data?.title}
          </span>

          {/* sub heading */}
          {/* <span className=" md:text-2xl ">{data?.subtitle}</span> */}

          <div className="flex gap-10  max-md:justify-between max-md:font-thin">
            <span>{data?.time}</span>
            <span>{data?.date}</span>
          </div>
          {/* img */}
          <img src={data?.img} alt="" className="md:w-[60vw] md:h-[60vh]" />
          <div className="w-full flex flex-col gap-10 md:gap-[20vh] mt-10 ">
            {/* Challange */}

            <div className="w-full  flex flex-col  gap-4 md:gap-10 justify-center items-start ">
              <span className="text-[24px] md:text-[48px] font-semibold md:leading-[3.4rem]">
                {data?.challange.title}
              </span>

              {data?.challange.paragraph.map((item, i) => (
                <p
                  key={i}
                  className="md:text-[1.2rem] font-thin text-slate-300"
                >
                  {item}
                </p>
              ))}
            </div>
            {/* Solution */}

            <div className="w-full flex flex-col gap-4 md:gap-10 justify-center items-start ">
              <span className="text-[24px] md:text-[48px] font-semibold md:leading-[3.4rem]">
                {data?.solution.title}
              </span>
              {/* <span className="text-xl md:text-2xl md:leading-none">
                {data?.solution.subtitle}
              </span> */}
              {data?.solution.paragraph.map((item, i) => (
                <p
                  key={i}
                  className="md:text-[1.2rem] font-thin text-slate-300"
                >
                  {item}
                </p>
              ))}
            </div>

            {/* Results */}

            <div className="w-full  flex flex-col  gap-4 md:gap-10 justify-center items-start ">
              <span className="text-[24px] md:text-[48px] font-semibold md:leading-[3.4rem]">
                {data?.results.title}
              </span>
              {/* <span className="text-xl md:text-2xl md:leading-none">
                {data?.results.subtitle}
              </span> */}
              {data?.results.paragraph.map((item, i) => (
                <p
                  key={i}
                  className="md:text-[1.2rem] font-thin text-slate-300"
                >
                  {item}
                </p>
              ))}
            </div>

            {/* Conclusion */}

            <div className="w-full  flex flex-col gap-10 justify-center items-start md:mb-[10vh]">
              <span className="text-[24px] md:text-[48px] font-semibold md:leading-[3.4rem]">
                {data?.conclusion.title}
              </span>

              <p className="md:text-[1.2rem] font-thin text-slate-300">
                {data?.conclusion.paragraph}
              </p>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="w-full md:w-[30%] flex flex-col gap-4 md:gap-10 items-end">
          <div className="w-full md:w-1/2 ">
            <span className="text-gray-500 font-bold">WRITTEN BY</span>
          </div>

          <div className="w-full md:w-1/2 flex flex-col ">
            <span className=" font-bold">Samantha Sen</span>
            <span className="text-gray-500 font-bold">Senior Manager</span>
            <Linkedin className="w-4 h-4 text-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
}
