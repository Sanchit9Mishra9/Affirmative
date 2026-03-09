import { ChevronLeft, ChevronRight, Linkedin } from "lucide-react";
import { Helmet } from "react-helmet";

import { Link } from "react-router-dom";

export default function InsightsPageFour() {
  return (
    <>
      <Helmet>
        <title>
          Affirmity Corp - Building the Intelligent Enterprise of Tomorrow
        </title>
        <meta
          name="description"
          content="The future lies in seamlessly integrating AI, app modernization, API economy, and microservices to unlock new potential."
        />
      </Helmet>
      <div className="w-full min-h-screen  flex justify-center ">
        <div className="w-full h-full  flex flex-col md:flex-row mt-10 md:mt-20 py-10  px-6 max-w-7xl   md:px-10  min-[1280px]:px-4    gap-14   ">
          <div className="w-full md:w-[90%] flex flex-col md:gap-12 gap-6">
            <Link
              to="/"
              className="flex w-fit gap-4 justify-center items-center"
            >
              <ChevronLeft className="w-4 h-4 " />
              <span>Home</span>
            </Link>
            {/* Martian Mono */}

            {/* type */}

            <span className=" md:mt-10">RESEARCH</span>

            {/* title */}

            <span className="text-[24px] md:text-[48px] font-semibold md:leading-[3.4rem]">
              Building the Intelligent Enterprise of Tomorrow
            </span>

            <div className="flex gap-10  max-md:justify-between max-md:font-thin">
              <span>5-MINUTE READ</span>
              <span>FEBRUARY 2, 2024</span>
            </div>
            {/* img */}
            <img
              src="/insights/research2.webp"
              alt=" insights research report image 4"
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
                      The future lies in seamlessly integrating AI, app
                      modernization, API economy, and microservices to unlock
                      new potential.
                    </span>
                  </div>
                  <div className="w-full flex gap-4 justify-start items-center">
                    <ChevronRight className="max-h-4 max-w-4 w-full h-full text-orange-500" />
                    <span className=" md:text-[1.1rem] font-thin text-slate-300 ">
                      Breaking down silos and fostering collaboration between
                      technologies creates an agile and adaptable.
                    </span>
                  </div>
                  <div className="w-full flex gap-4 justify-start items-center">
                    <ChevronRight className="max-h-4 max-w-4 w-full h-full text-orange-500" />
                    <span className=" md:text-[1.1rem] font-thin text-slate-300 ">
                      AI plays a central role in driving this transformation by
                      streamlining processes, extracting insights from data,
                      empowering microservices, and enabling personalized
                      experiences.
                    </span>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="w-full  flex flex-col  gap-4 md:gap-10 justify-center items-start ">
                <span className="text-[24px] md:text-[48px] font-medium md:leading-[3.4rem]">
                  The Rise of the Intelligent Enterprise
                </span>
                <span className="text-xl md:text-2xl md:leading-none">
                  A Symbiotic Ecosystem
                </span>
                <p className="md:text-[1.2rem] font-thin text-slate-300">
                  The intelligent enterprise of tomorrow is not about isolated
                  innovations, but a seamless convergence of technologies like
                  AI, app modernization, API economy, and microservices. Imagine
                  a world where legacy applications, empowered by AI, become
                  agile and efficient. Applications seamlessly communicate
                  through a robust API ecosystem, enabling modularity and rapid
                  innovation. Microservices act as building blocks, each powered
                  by intelligent algorithms, creating innovative and adaptive
                  systems.
                </p>
              </div>
              {/*  */}
              <div className="w-full  flex flex-col gap-4 md:gap-10 justify-center items-start ">
                <span className="text-[24px] md:text-[48px] font-medium md:leading-[3.4rem]">
                  Breaking Down the Barriers
                </span>
                <span className="text-xl md:text-2xl md:leading-none"></span>
                <p className="md:text-[1.2rem] font-thin text-slate-300">
                  For decades, businesses have struggled with siloed data and
                  incompatible systems. Traditional app modernization efforts
                  often fail, delivering piecemeal solutions without addressing
                  core issues. The answer lies in a holistic approach, breaking
                  down the walls between technologies and fostering a symbiotic
                  ecosystem.
                </p>
              </div>
              {/*  */}
              <div className="w-full  flex flex-col  gap-4 md:gap-10 justify-center items-start ">
                <span className="text-[24px] md:text-[48px] font-medium md:leading-[3.4rem]">
                  AI as the Catalyst
                </span>
                <span className="text-xl md:text-2xl md:leading-none">
                  AI sits at the heart of this ecosystem, playing a
                  transformative role
                </span>
                <p className="md:text-[1.2rem] font-thin text-slate-300">
                  AI-powered refactoring streamlines legacy applications, while
                  predictive maintenance prevents downtime, empowering faster
                  development and adaptation. AI analyzes vast data sets,
                  unearthing hidden patterns and predicting user behavior,
                  driving personalized experiences and intelligent
                  decision-making. Each microservice can leverage AI for
                  specific tasks like fraud detection or sentiment analysis,
                  creating intelligent and interconnected components.
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
