import { ChevronLeft, ChevronRight, Linkedin } from "lucide-react";
import { Helmet } from "react-helmet";

import { Link } from "react-router-dom";

export default function InsightsPageSeven() {
  return (
    <>
      <Helmet>
        <title>Affirmity Corp - Role of Machine Learning in Healthcare</title>
        <meta
          name="description"
          content="Machine learning tailors medication regimens to individual needs by analysing patient data and medical history."
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

            <span className=" md:mt-10">HEALTH CARE </span>

            {/* title */}

            <span className="text-[24px] md:text-[48px] font-semibold md:leading-[3.4rem]">
              Understanding the Role of Machine Learning in Healthcare
            </span>

            <div className="flex gap-10  max-md:justify-between max-md:font-thin">
              <span>5-MINUTE READ</span>
              <span>FEBRUARY 2, 2024</span>
            </div>
            {/* img */}
            <img
              src="/insights/healthcare-full.webp"
              alt=" insights research report image 7"
              className="md:w-[60vw] md:h-[60vh] object-cover  brightness-[.7]"
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
                      Machine learning tailors medication regimens to individual
                      needs by analysing patient data and medical history.
                    </span>
                  </div>
                  <div className="w-full flex gap-4 justify-start items-center">
                    <ChevronRight className="max-h-4 max-w-4 w-full h-full text-orange-500" />
                    <span className=" md:text-[1.1rem] font-thin text-slate-300 ">
                      Automated decision support for prescribers helps reduce
                      errors by suggesting appropriate medications based on
                      patient data and best practices.
                    </span>
                  </div>
                  <div className="w-full flex gap-4 justify-start items-center">
                    <ChevronRight className="max-h-4 max-w-4 w-full h-full text-orange-500" />
                    <span className=" md:text-[1.1rem] font-thin text-slate-300 ">
                      Machine learning optimises medication dosages based on
                      patient data, improving treatment and reducing adverse
                      events.
                    </span>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="w-full  flex flex-col  gap-4 md:gap-10 justify-center items-start ">
                <span className="text-[24px] md:text-[48px] font-medium md:leading-[3.4rem]">
                  Overview of Medication Management and Prescription Services
                </span>
                <span className="text-xl md:text-2xl md:leading-none">
                  Enhanced Personalization of Treatment Plans
                </span>
                <p className="md:text-[1.2rem] font-thin text-slate-300">
                  Machine learning plays a crucial role in transforming how
                  healthcare services are delivered. The potential applications
                  are vast, from predicting patient outcomes to optimising
                  treatment plans. One key benefit of machine learning in
                  medication management is the ability to create personalised
                  treatment plans for patients. It can generate medication plans
                  by analysing patient data and medical history.
                </p>
              </div>
              {/*  */}
              <div className="w-full  flex flex-col gap-4 md:gap-10 justify-center items-start ">
                <span className="text-[24px] md:text-[48px] font-medium md:leading-[3.4rem]">
                  Improving Prescription Services through Machine Learning
                </span>
                <span className="text-xl md:text-2xl md:leading-none">
                  Automated Decision Support for Prescribers
                </span>
                <p className="md:text-[1.2rem] font-thin text-slate-300">
                  Prescribers can make more informed decisions with the help of
                  machine learning tools and insights for prescription services.
                  Machine learning algorithms can automate medication decision
                  support, reducing errors and improving patient outcomes. They
                  can detect potential adverse drug interactions by analysing
                  vast amounts of data, preventing patient harm.
                </p>
              </div>
              {/*  */}
              <div className="w-full  flex flex-col  gap-4 md:gap-10 justify-center items-start ">
                <span className="text-[24px] md:text-[48px] font-medium md:leading-[3.4rem]">
                  Successful Applications in Medication Management
                </span>
                <span className="text-xl md:text-2xl md:leading-none">
                  Real-world Examples of Machine Learning in Medication
                  Management
                </span>
                <p className="md:text-[1.2rem] font-thin text-slate-300">
                  Machine learning can improve medication management by
                  identifying patients at high risk of non-adherence and
                  generating personalised interventions to improve medication
                  adherence rates. The system analyzes patient data and
                  recommends precise dosages tailored to individual
                  characteristics, leading to better treatment efficacy and
                  reduced adverse events.
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
