import { ChevronLeft, ChevronRight, Linkedin } from "lucide-react";
import { Helmet } from "react-helmet";

import { Link } from "react-router-dom";

export default function InsightsPageEight() {
  return (
    <>
      <Helmet>
        <title>Affirmity Corp - Defining AI and Its Role in Government</title>
        <meta
          name="description"
          content="AI has the potential to revolutionize public services and policy-making, making governments work smarter."
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

            <span className=" md:mt-10">GOVERNMENT</span>

            {/* title */}

            <span className="text-[24px] md:text-[48px] font-semibold md:leading-[3.4rem]">
              Defining AI and Its Role in Government
            </span>

            <div className="flex gap-10  max-md:justify-between max-md:font-thin">
              <span>5-MINUTE READ</span>
              <span>FEBRUARY 2, 2024</span>
            </div>
            {/* img */}
            <img
              src="/insights/govt.webp"
              alt="insights two image"
              className="md:w-[60vw] md:h-[60vh] brightness-[.8]"
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
                      Advantages of AI in government operations through
                      data-driven decision-making.
                    </span>
                  </div>
                  <div className="w-full flex gap-4 justify-start items-center">
                    <ChevronRight className="max-h-4 max-w-4 w-full h-full text-orange-500" />
                    <span className=" md:text-[1.1rem] font-thin text-slate-300 ">
                      AI improves citizen engagement by providing personalised,
                      efficient, and user-friendly government services.
                    </span>
                  </div>
                  <div className="w-full flex gap-4 justify-start items-center">
                    <ChevronRight className="max-h-4 max-w-4 w-full h-full text-orange-500" />
                    <span className=" md:text-[1.1rem] font-thin text-slate-300 ">
                      AI in the public sector requires ethical standards and
                      regulatory frameworks for serving the greater good.
                    </span>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="w-full  flex flex-col  gap-4 md:gap-10 justify-center items-start ">
                <span className="text-[24px] md:text-[48px] font-medium md:leading-[3.4rem]">
                  Applications of AI in Government Services
                </span>
                <span className="text-xl md:text-2xl md:leading-none">
                  AI and Its Role in Government
                </span>
                <p className="md:text-[1.2rem] font-thin text-slate-300">
                  Governments are now using AI to offer citizens a seamless and
                  user-friendly experience. AI automates tasks, optimises
                  processes, and predicts trends to help officials make informed
                  decisions faster. This boosts operational efficiency and
                  enhances security and transparency while reducing costs and
                  errors. It's like having a trusty sidekick that increases
                  productivity and effectiveness in government operations.
                </p>
              </div>
              {/*  */}
              <div className="w-full  flex flex-col gap-4 md:gap-10 justify-center items-start ">
                <span className="text-[24px] md:text-[48px] font-medium md:leading-[3.4rem]">
                  Successful AI Implementation in Government
                </span>
                <span className="text-xl md:text-2xl md:leading-none">
                  AI Transforming Government Operations
                </span>
                <p className="md:text-[1.2rem] font-thin text-slate-300">
                  Let's talk AI success stories! Singapore and Estonia are two
                  examples of how AI can improve government operations. In
                  Singapore, AI-optimized bus routes make commutes faster. In
                  Estonia, AI streamlined digital governance services, making
                  paperwork disappear. AI can be a real game-changer in making
                  things run smoothly.
                </p>
              </div>
              {/*  */}
              <div className="w-full  flex flex-col  gap-4 md:gap-10 justify-center items-start ">
                <span className="text-[24px] md:text-[48px] font-medium md:leading-[3.4rem]">
                  The Role of AI in Shaping Government Operations
                </span>
                <span className="text-xl md:text-2xl md:leading-none">
                  The Future Outlook
                </span>
                <p className="md:text-[1.2rem] font-thin text-slate-300">
                  AI has the potential to revolutionize public services and
                  policy-making, making governments work smarter. As we navigate
                  the complexities of AI ethics, governance, and implementation,
                  it is crucial to harness the transformative power of AI for
                  more effective and citizen-centric governance. The continued
                  evolution of AI in government holds great promise for driving
                  innovation, enhancing service delivery, and ultimately shaping
                  a more connected and inclusive society.
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
