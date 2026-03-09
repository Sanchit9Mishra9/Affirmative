import { ChevronLeft, ChevronRight, Linkedin } from "lucide-react";
import { Helmet } from "react-helmet";

import { Link } from "react-router-dom";

export default function InsightsPageSix() {
  return (
    <>
      <Helmet>
        <title>Affirmity Corp - Real-time Data Analysis</title>
        <meta
          name="description"
          content="Real-time data analysis and machine learning are transforming the oil and gas industry. Machine learning can significantly enhance real-time data analysis in the oil and gas industry."
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

            <span className=" md:mt-10">ARTIFICIAL INTELLIGENCE</span>

            {/* title */}

            <span className="text-[24px] md:text-[48px] font-semibold md:leading-[3.4rem]">
              Introduction to Real-time Data Analysis in the Oil and Gas
              Industry
            </span>

            <div className="flex gap-10  max-md:justify-between max-md:font-thin">
              <span>5-MINUTE READ</span>
              <span>FEBRUARY 2, 2024</span>
            </div>
            {/* img */}
            <img
              src="/insights/data-analytics.webp"
              alt=" insights research report image 6"
              className="md:w-[60vw] md:h-[60vh] object-cover object-center"
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
                      Machine learning can significantly enhance real-time data
                      analysis in the oil and gas industry.
                    </span>
                  </div>
                  <div className="w-full flex gap-4 justify-start items-center">
                    <ChevronRight className="max-h-4 max-w-4 w-full h-full text-orange-500" />
                    <span className=" md:text-[1.1rem] font-thin text-slate-300 ">
                      Importance: Real-time data analysis provides crucial
                      insights for optimising operations, ensuring safety, and
                      making informed decisions.
                    </span>
                  </div>
                  <div className="w-full flex gap-4 justify-start items-center">
                    <ChevronRight className="max-h-4 max-w-4 w-full h-full text-orange-500" />
                    <span className=" md:text-[1.1rem] font-thin text-slate-300 ">
                      Emerging technologies include advanced sensors and
                      cloud-based platforms that enable real-time analytics.
                    </span>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="w-full  flex flex-col  gap-4 md:gap-10 justify-center items-start ">
                <span className="text-[24px] md:text-[48px] font-medium md:leading-[3.4rem]">
                  Real-time data analysis and machine learning are transforming
                  the oil and gas industry.
                </span>
                <span className="text-xl md:text-2xl md:leading-none">
                  Defining Real-time Data Analysis
                </span>
                <p className="md:text-[1.2rem] font-thin text-slate-300">
                  Real-time data analysis is the art of processing and
                  interpreting data as soon as it is generated, allowing
                  companies in the oil and gas industry to make timely decisions
                  based on up-to-the-minute information. It's like constantly
                  checking what's happening, enabling organisations to react
                  swiftly to changing conditions and trends. Monitoring
                  equipment performance, detecting anomalies, and accessing
                  accurate data is crucial for operational efficiency, safety,
                  and performance optimisation in this industry.
                </p>
              </div>
              {/*  */}
              <div className="w-full  flex flex-col gap-4 md:gap-10 justify-center items-start ">
                <span className="text-[24px] md:text-[48px] font-medium md:leading-[3.4rem]">
                  Applications of Machine Learning for Real-time Data Analysis
                </span>
                <span className="text-xl md:text-2xl md:leading-none">
                  Predictive Maintenance in Oil and Gas Infrastructure
                </span>
                <p className="md:text-[1.2rem] font-thin text-slate-300">
                  Machine learning opens up a treasure trove of possibilities
                  for real-time data analysis in the oil and gas industry,
                  offering solutions to enhance maintenance practices, optimise
                  production processes, and drive operational excellence.
                  Machine learning can optimise production processes by
                  analysing real-time pressure, temperature, and flow rate data.
                  By fine-tuning operations based on data-driven insights,
                  companies can increase output, reduce waste, and improve
                  profitability.
                </p>
              </div>
              {/*  */}
              <div className="w-full  flex flex-col  gap-4 md:gap-10 justify-center items-start ">
                <span className="text-[24px] md:text-[48px] font-medium md:leading-[3.4rem]">
                  Future Trends and Innovations in Machine Learning for Oil and
                  Gas
                </span>
                <span className="text-xl md:text-2xl md:leading-none">
                  Emerging Technologies and Tools in the Industry
                </span>
                <p className="md:text-[1.2rem] font-thin text-slate-300">
                  Oil and gas companies are adopting new technologies to enhance
                  machine learning. Advanced sensors and cloud-based platforms
                  are used for real-time analytics to drive efficiency and
                  productivity. Oil and gas companies can overcome challenges
                  and seize growth opportunities by leveraging data-driven
                  insights and keeping up with emerging trends.
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
