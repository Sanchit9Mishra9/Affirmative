import { ChevronLeft, ChevronRight, Linkedin } from "lucide-react";
import { Helmet } from "react-helmet";

import { Link } from "react-router-dom";

export default function InsightsPageTwo() {
  return (
    <>
      <Helmet>
        <title>Affirmity Corp - AI in Hyperdrive</title>
        <meta
          name="description"
          content="AI advancements: Generative AI, Multimodal AI, and Democratization of AI are leading the way."
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

            {/* type */}

            <span className=" md:mt-10">ARTIFICIAL INTELIGENCE</span>

            {/* title */}

            <span className="text-[24px] md:text-[48px] font-semibold md:leading-[3.4rem]">
              AI in Hyperdrive: Top Trends Reshaping the Landscape in 2024
            </span>

            <div className="flex gap-10  max-md:justify-between max-md:font-thin">
              <span>5-MINUTE READ</span>
              <span>FEBRUARY 2, 2024</span>
            </div>
            {/* img */}
            <img
              src="/insights/ai-full.webp"
              alt=" insights research report image 2"
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
                      AI advancements: Generative AI, Multimodal AI, and
                      Democratization of AI are leading the way.
                    </span>
                  </div>
                  <div className="w-full flex gap-4 justify-start items-center">
                    <ChevronRight className="max-h-4 max-w-4 w-full h-full text-orange-500" />
                    <span className=" md:text-[1.1rem] font-thin text-slate-300 ">
                      AI in various sectors: AI is transforming workplaces,
                      exploring new frontiers, and enabling personalisation at
                      scale.
                    </span>
                  </div>
                  <div className="w-full flex gap-4 justify-start items-center">
                    <ChevronRight className="max-h-4 max-w-4 w-full h-full text-orange-500" />
                    <span className=" md:text-[1.1rem] font-thin text-slate-300 ">
                      Responsible development: Ethical considerations like
                      Explainable AI (XAI) ensure that AI benefits everyone.
                    </span>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="w-full  flex flex-col  gap-4 md:gap-10 justify-center items-start ">
                <span className="text-[24px] md:text-[48px] font-medium md:leading-[3.4rem]">
                  The Rise of Powerful AI Models
                </span>
                <span className="text-xl md:text-2xl md:leading-none">
                  Generative AI: From text-based art to multimodal marvels.
                </span>
                <p className="md:text-[1.2rem] font-thin text-slate-300">
                  Witness the remarkable transformation of Generative AI! No
                  longer confined to text-based art, it has blossomed into a
                  mighty "multimodal" marvel. This cutting-edge technology
                  seamlessly integrates text, images, and video, opening a
                  treasure trove of possibilities for personalised experiences.
                  Imagine describing your dream house and having an AI instantly
                  generate its 3D model! This paves the way for a future filled
                  with innovative applications in design, product creation, and
                  even education.
                </p>
              </div>
              {/*  */}
              <div className="w-full  flex flex-col gap-4 md:gap-10 justify-center items-start ">
                <span className="text-[24px] md:text-[48px] font-medium md:leading-[3.4rem]">
                  AI Transforming Our World
                </span>
                <span className="text-xl md:text-2xl md:leading-none">
                  AI in the Workplace: Boosting efficiency and predicting needs.
                </span>
                <p className="md:text-[1.2rem] font-thin text-slate-300">
                  AI is transforming the workplace by boosting efficiency and
                  predicting employee needs. Organisations are utilising
                  intelligent assistants to streamline tasks, and AI-powered
                  talent management systems are helping anticipate and address
                  workforce requirements. This digital transformation promises
                  to optimise operations, improve employee satisfaction, and
                  unlock new possibilities for organisational success.
                </p>
              </div>
              {/*  */}
              <div className="w-full  flex flex-col gap-4 md:gap-10 justify-center items-start ">
                <span className="text-[24px] md:text-[48px] font-medium md:leading-[3.4rem]">
                  Building a Responsible Future with AI
                </span>
                <span className="text-xl md:text-2xl">
                  The Ethics Conversation Continues: Addressing bias,
                  transparency, and accountability.
                </span>
                <p className="md:text-[1.2rem] font-thin text-slate-300">
                  As AI's influence grows, ethical considerations remain
                  paramount. Addressing bias, transparency, and accountability
                  is crucial for ensuring the responsible development and
                  deployment of AI that benefits everyone. Open dialogue,
                  ongoing research, and industry best practices are essential to
                  building a future where AI is a force for good in society.
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
