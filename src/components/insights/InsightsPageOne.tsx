import { ChevronLeft, ChevronRight, Linkedin } from "lucide-react";
import { Helmet } from "react-helmet";

import { Link } from "react-router-dom";

export default function InsightsPageOne() {
  return (
    <>
      <Helmet>
        <title>Affirmity Corp - Research Report</title>
        <meta
          name="description"
          content=" Alliance between AI, App Modernization,
            APIs, and Microservices."
        />
      </Helmet>
      <div className="w-full min-h-screen  flex justify-center ">
        <div className="w-full h-full  flex flex-col md:flex-row mt-20 py-10  px-6 max-w-7xl   md:px-10  min-[1280px]:px-4     gap-14   ">
          <div className="w-full md:w-[90%] flex flex-col md:gap-12 gap-6">
            <Link
              to="/"
              className="flex w-fit gap-4 justify-center items-center"
            >
              <ChevronLeft className="w-4 h-4 " />
              <span>Home</span>
            </Link>

            {/* type */}

            <span className=" md:mt-10">RESEARCH REPORT</span>

            {/* title */}

            <span className="text-[24px] md:text-[48px] font-semibold md:leading-[3.4rem]">
              Illustrating the Future: Alliance between AI, App Modernization,
              APIs, and Microservices.
            </span>

            <div className="flex gap-10  max-md:justify-between max-md:font-thin">
              <span>5-MINUTE READ</span>
              <span>FEBRUARY 2, 2024</span>
            </div>
            {/* img */}
            <img
              src="/insights/research.webp"
              alt=" insights research report image 7"
              className="md:w-[60vw] md:h-[60vh]"
            />

            {/* content */}

            <div className="w-full flex flex-col gap-10 md:gap-[20vh]">
              {/* Key Points */}
              <div className="w-full flex flex-col gap-10">
                <span className="text-[24px] md:text-[48px] font-medium md:leading-[3.4rem]">
                  Key Points
                </span>

                <div className=" w-full flex gap-4 md:gap-10 flex-col">
                  <div className="w-full flex gap-4 justify-start items-center">
                    <ChevronRight className="max-h-4 max-w-4 w-full h-full text-orange-500" />
                    <span className=" md:text-[1.1rem] font-thin text-slate-300 ">
                      AI for Modernization: Automates tasks, predicts issues,
                      and personalizes experiences for faster, more scalable,
                      and engaging apps.
                    </span>
                  </div>
                  <div className="w-full flex gap-4 justify-start items-center">
                    <ChevronRight className="max-h-4 max-w-4 w-full h-full text-orange-500" />
                    <span className=" md:text-[1.1rem] font-thin text-slate-300 ">
                      Microservices & APIs: Break down complex applications for
                      quicker development, improved fault tolerance, and
                      flexible technology choices.
                    </span>
                  </div>
                  <div className="w-full flex gap-4 justify-start items-center">
                    <ChevronRight className="max-h-4 max-w-4 w-full h-full text-orange-500" />
                    <span className=" md:text-[1.1rem] font-thin text-slate-300 ">
                      AI & Microservices Synergy: Enables intelligent and
                      adaptable applications through specialized AI-powered
                      microservices and streamlined API management.
                    </span>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="w-full  flex flex-col  gap-4 md:gap-10 justify-center items-start ">
                <span className="text-[24px] md:text-[48px] font-medium md:leading-[3.4rem]">
                  A Powerful Trio: AI, App Modernization, and APIs
                </span>
                <span className="text-xl md:text-2xl md:leading-none">
                  Revolutionizing App Development:
                </span>
                <p className="md:text-[1.2rem] font-thin text-slate-300">
                  To revolutionize app modernization, AI-powered tools are
                  employed for several purposes. They can automatically analyze
                  codebases, identify inefficiencies, and suggest improvements,
                  significantly accelerating the modernization process.
                  Additionally, AI-powered analytics can predict potential
                  performance bottlenecks before they impact users, enabling
                  proactive maintenance and ensuring optimal app performance.
                  Furthermore, AI personalizes user interfaces and interactions
                  based on individual preferences and usage patterns, leading to
                  enhanced user engagement and satisfaction.
                </p>
              </div>
              {/*  */}
              <div className="w-full  flex flex-col gap-4 md:gap-10 justify-center items-start ">
                <span className="text-[24px] md:text-[48px] font-medium md:leading-[3.4rem]">
                  Building Blocks for Agility: APIs and Microservices
                </span>
                <span className="text-xl md:text-2xl md:leading-none">
                  Benefits of Microservices Architectures:
                </span>
                <p className="md:text-[1.2rem] font-thin text-slate-300">
                  Combining AI and microservices unlocks exciting possibilities.
                  Individual microservices can become intelligent by
                  incorporating AI for tasks like fraud detection or
                  recommendations. Additionally, AI can streamline API
                  management within microservices, while breaking down AI models
                  into microservices themselves simplifies development and
                  deployment. This powerful synergy creates a foundation for
                  intelligent and adaptable applications.
                </p>
              </div>
              {/*  */}
              <div className="w-full  flex flex-col gap-4 md:gap-10 justify-center items-start ">
                <span className="text-[24px] md:text-[48px] font-medium md:leading-[3.4rem]">
                  The Road Ahead:
                </span>
                <span className="text-xl md:text-2xl md:leading-none">
                  Collaborative Innovation for Success
                </span>
                <p className="md:text-[1.2rem] font-thin text-slate-300">
                  The constantly evolving landscape of AI, app modernization,
                  API economy, and microservices will significantly impact the
                  future of technology. At Affirmity Corp, we are dedicated to
                  exploring these synergies and creating innovative solutions
                  that enable businesses to thrive in this dynamic environment.
                  We aim to stay at the forefront of this exciting technological
                  revolution through cutting-edge research, collaborative
                  partnerships, and a commitment to the success of our clients.
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
              <span className=" font-bold">Sameer Bhole</span>
              <span className="text-gray-500 font-thin">
                Content Writer, Affirmity Corp
              </span>
              <Linkedin className="w-4 h-4 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
