import { ChevronLeft, ChevronRight, Linkedin } from "lucide-react";
import { Helmet } from "react-helmet";

import { Link } from "react-router-dom";

export default function InsightsPageFive() {
  return (
    <>
      <Helmet>
        <title>Affirmity Corp - Innovation in Virtual Assistance</title>
        <meta
          name="description"
          content="Virtual assistants enhance the guest experience in hotels and other travel & hospitality establishments. "
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

            <span className=" md:mt-10">INNOVATION</span>

            {/* title */}

            <span className="text-[24px] md:text-[48px] font-semibold md:leading-[3.4rem]">
              Defining Virtual Assistants in the Travel & Hospitality Sector
            </span>

            <div className="flex gap-10  max-md:justify-between max-md:font-thin">
              <span>5-MINUTE READ</span>
              <span>FEBRUARY 2, 2024</span>
            </div>
            {/* img */}
            <img
              src="/insights/hospitality.webp"
              alt=" insights research report image 5"
              className="md:w-[60vw] md:h-[60vh] object-cover object-center brightness-[.7]"
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
                      Virtual assistants enhance the guest experience in hotels
                      and other travel & hospitality establishments.
                    </span>
                  </div>
                  <div className="w-full flex gap-4 justify-start items-center">
                    <ChevronRight className="max-h-4 max-w-4 w-full h-full text-orange-500" />
                    <span className=" md:text-[1.1rem] font-thin text-slate-300 ">
                      Key challenges and limitations of implementing virtual
                      assistants in the hospitality sector.
                    </span>
                  </div>
                  <div className="w-full flex gap-4 justify-start items-center">
                    <ChevronRight className="max-h-4 max-w-4 w-full h-full text-orange-500" />
                    <span className=" md:text-[1.1rem] font-thin text-slate-300 ">
                      Emerging technologies are expected to shape the future of
                      virtual assistants in the hospitality industry.
                    </span>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="w-full  flex flex-col  gap-4 md:gap-10 justify-center items-start ">
                <span className="text-[24px] md:text-[48px] font-medium md:leading-[3.4rem]">
                  Historical Evolution and Adoption of Virtual Assistants in
                  Travel & Hospitality
                </span>
                <span className="text-xl md:text-2xl md:leading-none">
                  Introduction to Virtual Assistants in Hospitality
                </span>
                <p className="md:text-[1.2rem] font-thin text-slate-300">
                  From the humble beginnings of basic chatbots to the
                  sophisticated AI-powered assistants of today, virtual helpers
                  have come a long way in the hospitality industry. Hotels have
                  embraced these digital dynamos to meet the evolving needs of
                  tech-savvy guests and improve operational efficiency. Virtual
                  assistants offer guests a personalised experience, from
                  booking services to recommending local hotspots, all without
                  the need to pick up the phone.
                </p>
              </div>

              {/*  */}
              <div className="w-full  flex flex-col  gap-4 md:gap-10 justify-center items-start ">
                <span className="text-[24px] md:text-[48px] font-medium md:leading-[3.4rem]">
                  Emerging Technologies Shaping the Future of Virtual Assistants
                </span>
                <span className="text-xl md:text-2xl md:leading-none">
                  AI and Machine Learning Advancements
                </span>
                <p className="md:text-[1.2rem] font-thin text-slate-300">
                  The future of virtual assistants in hospitality is looking
                  brighter with AI and machine learning advancements. These
                  technologies enable assistants to learn from guest
                  interactions, anticipate needs, and provide tailored
                  recommendations, creating a truly personalised experience.
                  Guests can simply speak their requests; these intelligent
                  assistants will understand and respond, making interactions
                  more intuitive and efficient.
                </p>
              </div>
              {/*  */}
              <div className="w-full  flex flex-col  gap-4 md:gap-10 justify-center items-start ">
                <span className="text-[24px] md:text-[48px] font-medium md:leading-[3.4rem]">
                  Future Outlook: Innovations and Opportunities for Virtual
                  Assistants in the Sector.
                </span>
                <span className="text-xl md:text-2xl md:leading-none">
                  Expansion into New Service Areas and Markets
                </span>
                <p className="md:text-[1.2rem] font-thin text-slate-300">
                  The future looks bright for virtual assistants in hospitality
                  as they expand into new service areas and markets. From
                  concierge services to booking activities, these assistants are
                  poised to become integral parts of guest experiences across
                  various hospitality sectors. Virtual assistants are working
                  with others to shape the future of hospitality. By
                  collaborating with other emerging technologies such as AI,
                  IoT, and voice recognition, these assistants can offer even
                  more sophisticated services that enhance guest experiences and
                  streamline business operations.
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
