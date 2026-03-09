import { motion, useAnimation } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactLoading from "react-loading";
import { Helmet } from "react-helmet";

export default function Careers() {
  return (
    <>
      <Helmet>
        <title>Quadcorp Labs - Careers | Jobs | Internships</title>
        <meta
          name="description"
          content="Advance your career, collaborate, and make a difference with Quadcorp Labs."
        />
      </Helmet>
      <div className="w-full flex  items-center flex-col">
        <div className="w-full h-[50vh] md:h-screen relative flex justify-center items-center ">
          <img
            src="/career/careerback.webp"
            alt="career background image"
            className="absolute inset-0 -z-10  w-full h-full object-cover brightness-[.4] object-center scale-x-[-1]"
          />
          {/* Banner */}
          <Banner />
        </div>
        {/* Explore Jobs */}
        <ExploreJobs />

        {/* Post Resume */}
        {/* <PostResume /> */}
      </div>
    </>
  );
}

const Banner = () => {
  return (
    <div className="   w-full h-full  flex flex-col pt-20 md:py-20  px-6 max-w-7xl   md:px-10  min-[1280px]:px-4  z-10">
      <div className="w-full md:w-1/2 flex flex-col items-start  justify-start h-full">
        {/* navigation */}
        <div className="flex w-fit gap-3 md:mt-8">
          <div className="w-fit flex gap-2 justify-center items-center">
            <span className="text-xs md:text-sm">Careers</span>

            <div className="bg-slate-200">
              <ChevronRight className="w-2 h-2 md:w-3 md:h-3 text-black" />
            </div>
          </div>
        </div>

        {/* content */}

        <div className=" w-full flex flex-col  gap-6 md:gap-8 justify-center items-start  h-full ">
          <p className="text-[24px] m md:text-[48px] font-thin text-slate-200 md:leading-[4rem]">
            Elevate Your Impact

          </p>
        </div>
      </div>
    </div>
  );
};
export interface IJob {
  jobid: number;
  post: string;
  department: string;
  experience: number;
  location: string;
  job_desc: string;
  category: "graduates" | "professionals" | "internships";
  ctc: string;
  salary: string;
}

interface IJobs {
  graduates: IJob[];
  professionals: IJob[];
  internships: IJob[];
}

const ExploreJobs = () => {
  const [jobs, setJobs] = useState<IJobs | null>(null);
  const [index, setIndex] = useState(0);

  const [displayJobs, setDisplayJobs] = useState<IJob[] | null>();

  const getJobs = async () => {
    const res = await fetch("https://affirmity.in/api/job");
    const data = await res.json();
    setJobs(data);
    setDisplayJobs(data["graduates"]);
  };

  useEffect(() => {
    getJobs();
  }, []);

  const Card = ({ job }: { job: IJob }) => {
    const controls = useAnimation();
    const handleMouseEnter = () => {
      controls.start("hover");
    };

    const handleMouseLeave = () => {
      controls.start("unhover");
    };
    return (
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="w-full h-[300px] flex flex-col justify-evenly  text-slate-300  border relative cursor-pointer"
      >
        <motion.div
          variants={{
            hover: {
              height: "100%",
            },
            unhover: {
              height: "0%",
            },
          }}
          initial="unhover"
          animate={controls}
          transition={{ duration: 0.2 }}
          className="w-full absolute   -z-10 bg-gradient-to-br from-purple-700 to-violet-700 brightness-110 origin-center"
        ></motion.div>
        <div className="flex w-full flex-col gap-4 justify-around p-6">
          <span className="text-slate-200 text-xl font-medium">
            {job.department}
          </span>

          <span>{job.post}</span>

          <span className="mt-6">Experience : {job.experience} years</span>
          <span>Location : {job.location}</span>
          <Link to={`/careers/job/${job.jobid}`}>
            <button className="border w-full   md:py-2 md:px-6 p-2 hover:bg-slate-50 hover:text-black transition-all duration-300  mt-6">
              Apply
            </button>
          </Link>
        </div>
      </div>
    );
  };
  // const jobs1 = [
  //   [
  //     {
  //       type: "IT",
  //       title: "Software Developer",
  //       experience: "0-1 years",
  //       location: "Bhopal, MP",
  //       link: "/careers",
  //     },
  //     {
  //       type: "IT",
  //       title: "Software Developer",
  //       experience: "0-1 years",
  //       location: "Bhopal, MP",
  //       link: "/careers",
  //     },
  //     {
  //       type: "IT",
  //       title: "Software Developer",
  //       experience: "0-1 years",
  //       location: "Bhopal, MP",
  //       link: "/careers",
  //     },
  //     {
  //       type: "IT",
  //       title: "Software Developer",
  //       experience: "0-1 years",
  //       location: "Bhopal, MP",
  //       link: "/careers",
  //     },
  //   ],
  //   [
  //     {
  //       type: "IT",
  //       title: "Software Developer",
  //       experience: "0-1 years",
  //       location: "Bhopal, MP",
  //       link: "/careers",
  //     },
  //     {
  //       type: "IT",
  //       title: "Software Developer",
  //       experience: "0-1 years",
  //       location: "Bhopal, MP",
  //       link: "/careers",
  //     },
  //     {
  //       type: "IT",
  //       title: "Software Developer",
  //       experience: "0-1 years",
  //       location: "Bhopal, MP",
  //       link: "/careers",
  //     },
  //     {
  //       type: "IT",
  //       title: "Software Developer",
  //       experience: "0-1 years",
  //       location: "Bhopal, MP",
  //       link: "/careers",
  //     },
  //     {
  //       type: "IT",
  //       title: "Software Developer",
  //       experience: "0-1 years",
  //       location: "Bhopal, MP",
  //       link: "/careers",
  //     },
  //   ],
  //   [
  //     {
  //       type: "IT",
  //       title: "Software Developer",
  //       experience: "0-1 years",
  //       location: "Bhopal, MP",
  //       link: "/careers",
  //     },
  //     {
  //       type: "IT",
  //       title: "Software Developer",
  //       experience: "0-1 years",
  //       location: "Bhopal, MP",
  //       link: "/careers",
  //     },
  //     {
  //       type: "IT",
  //       title: "Software Developer",
  //       experience: "0-1 years",
  //       location: "Bhopal, MP",
  //       link: "/careers",
  //     },
  //     {
  //       type: "IT",
  //       title: "Software Developer",
  //       experience: "0-1 years",
  //       location: "Bhopal, MP",
  //       link: "/careers",
  //     },
  //   ],
  // ];
  return (
    <section className="w-full justify-center flex relative  min-h-screen">
      <div className="w-full h-full flex flex-col  gap-12 pt-20 md:py-20   px-6 max-w-7xl   md:px-10  min-[1280px]:px-4   ">
        <div className="w-full flex flex-col justify-center items-center gap-12">
          <span className="text-[24px] md:text-[48px] font-medium ">
            Grow. Adapt. Prevail.
          </span>
          <p className=" md:text-[1.1rem] font-thin md:text-center md:w-[80%] ">
            At QuadCorp, we forge elite innovators with defence-grade AI systems and a tactical alliance of
            visionaries. Equip yourself to master autonomous dominance, adapt to evolving threats, and
            engineer solutions that secure frontiers. Whether neutralizing crises, advancing silent
            operations, or pioneering ethical breakthroughs—partner with us to conquer complexity and
            protect humanity.
          </p>
        </div>

        <div className="w-full flex  p-4 justify-center  ">
          <button
            onClick={() => {
              setIndex(0);
              setDisplayJobs(jobs?.graduates);
            }}
            className={`border w-min-fit   md:py-3 md:px-6 p-2 transition-all duration-300 ${index == 0 ? "bg-purple-500  border-purple-300 z-10" : ""
              }`}
          >
            Graduates
          </button>
          <button
            onClick={() => {
              setIndex(1);
              setDisplayJobs(jobs?.professionals);
            }}
            className={`border w-min-fit   md:py-3 md:px-6 p-2 transition-all duration-300 ${index == 1 ? "bg-purple-500  outline-purple-300" : ""
              }`}
          >
            Experienced Professionals
          </button>
          <button
            onClick={() => {
              setIndex(2);
              setDisplayJobs(jobs?.internships);
            }}
            className={`border w-min-fit   md:py-3 md:px-6 p-2 transition-all duration-300 ${index == 2 ? "bg-purple-500  outline-purple-300" : ""
              }`}
          >
            Internships
          </button>
        </div>
        {jobs !== null ? (
          <div className="grid w-full grid-cols-1 md:grid-cols-2 min-[996px]:grid-cols-4 gap-8">
            {displayJobs &&
              displayJobs.map((job, index) => {
                return <Card job={job} key={index} />;
              })}
          </div>
        ) : (
          <div className="w-full py-10 flex justify-center items-center">
            <ReactLoading
              type="spokes"
              color="rgb(168 85 247)"
              width={100}
              height={100}
            />
          </div>
        )}
      </div>
    </section>
  );
};
