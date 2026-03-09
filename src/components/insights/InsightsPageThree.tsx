import { ChevronLeft, ChevronRight, Linkedin } from "lucide-react";
import { Helmet } from "react-helmet";

import { Link } from "react-router-dom";

export default function InsightsPageThree() {
  return (
    <>
      <Helmet>
        <title>Affirmity Corp - Latest trends in Border security</title>
        <meta
          name="description"
          content="AI, machine learning, and biometrics are enhancing border security through data analysis, predictive modeling, and automated threat detection."
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

            <span className=" md:mt-10">LATEST TRENDS</span>

            {/* title */}

            <span className="text-[24px] md:text-[48px] font-semibold md:leading-[3.4rem]">
              Latest trends in Border security.
            </span>

            <div className="flex gap-10  max-md:justify-between max-md:font-thin">
              <span>5-MINUTE READ</span>
              <span>FEBRUARY 2, 2024</span>
            </div>
            {/* img */}
            <img
              src="/insights/latest-full.webp"
              alt=" insights research report image 3"
              className="md:w-[60vw] md:h-[60vh]"
            />

            {/* content */}

            <div className="w-full flex flex-col gap-10  md:gap-[18vh]">
              {/* Key Points */}
              <div className="w-full flex flex-col gap-10">
                <span className="text-[24px] md:text-[48px] font-medium md:leading-[3.4rem]">
                  Key Points
                </span>

                <div className=" w-full flex gap-4 md:gap-10 flex-col">
                  <div className="w-full flex gap-4 justify-start items-center">
                    <ChevronRight className="max-h-4 max-w-4 w-full h-full text-orange-500" />
                    <span className=" md:text-[1.1rem] font-thin text-slate-300 ">
                      AI, machine learning, and biometrics are enhancing border
                      security through data analysis, predictive modeling, and
                      automated threat detection.
                    </span>
                  </div>
                  <div className="w-full flex gap-4 justify-start items-center">
                    <ChevronRight className="max-h-4 max-w-4 w-full h-full text-orange-500" />
                    <span className=" md:text-[1.1rem] font-thin text-slate-300 ">
                      Drones are playing a crucial role in aerial surveillance,
                      border monitoring, and search and rescue operations.
                    </span>
                  </div>
                  <div className="w-full flex gap-4 justify-start items-center">
                    <ChevronRight className="max-h-4 max-w-4 w-full h-full text-orange-500" />
                    <span className=" md:text-[1.1rem] font-thin text-slate-300 ">
                      International cooperation and information sharing are
                      essential, alongside addressing ethical concerns regarding
                      data privacy and responsible technology use.
                    </span>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="w-full  flex flex-col  gap-4 md:gap-10 justify-center items-start ">
                <span className="text-[24px] md:text-[48px] font-medium md:leading-[3.4rem]">
                  Embracing Technology for Effective Security
                </span>
                <span className="text-xl md:text-2xl md:leading-none">
                  Integration of AI and Machine Learning
                </span>
                <p className="md:text-[1.2rem] font-thin text-slate-300">
                  Embracing technology plays a key role in modern border
                  security. Artificial intelligence (AI) and machine learning
                  (ML) are revolutionizing the field by enabling the analysis of
                  vast amounts of data, from satellite imagery to social media
                  and biometric scans. This allows for identifying patterns and
                  anomalies that might indicate potential threats. Additionally,
                  ML algorithms can predict illegal crossings and other security
                  risks, enabling proactive measures and resource allocation.
                </p>
              </div>
              {/*  */}
              <div className="w-full  flex flex-col gap-4 md:gap-10 justify-center items-start ">
                <span className="text-[24px] md:text-[48px] font-medium md:leading-[3.4rem]">
                  Expanding Border Security Capabilities
                </span>
                <span className="text-xl md:text-2xl md:leading-none">
                  The Rise of Unmanned Systems
                </span>
                <p className="md:text-[1.2rem] font-thin text-slate-300">
                  Unmanned systems, particularly drones, are rapidly expanding
                  the capabilities of border security. These versatile aerial
                  vehicles provide cost-effective and flexible solutions for
                  various tasks. Drones excel in aerial surveillance, patrolling
                  remote areas and offering enhanced situational awareness.
                  Equipped with sensors and cameras, they can gather data and
                  identify potential threats along vast stretches of borders.
                  Additionally, drones play a crucial role in search and rescue
                  operations, quickly locating individuals lost or stranded in
                  challenging terrain.
                </p>
              </div>
              {/*  */}
              <div className="w-full  flex flex-col gap-4 md:gap-10 justify-center items-start ">
                <span className="text-[24px] md:text-[48px] font-medium md:leading-[3.4rem]">
                  Collaboration and Ethical Considerations for a Secure Future
                </span>
                <span className="text-xl md:text-2xl md:leading-none">
                  Increased Focus on Cybersecurity
                </span>
                <p className="md:text-[1.2rem] font-thin text-slate-300">
                  With tech-driven border security, robust cybersecurity is
                  essential. Protecting data from cyberattacks and ensuring
                  system integrity requires strong protocols and collaboration
                  between governments, technology providers, and cybersecurity
                  experts. This ongoing vigilance is crucial to stay ahead of
                  evolving threats.
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
