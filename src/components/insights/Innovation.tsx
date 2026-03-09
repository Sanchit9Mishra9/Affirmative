import { ChevronLeft } from "lucide-react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default function Innovation() {
  return (
    <>
      <Helmet>
        <title>Affirmity Corp - Create To Unleash Innovation</title>
        <meta
          name="description"
          content="Empowering industries with cutting-edge AI solutions for diverse needs and driven by ethical practices."
        />
      </Helmet>
      <div className="w-full min-h-screen  flex justify-center ">
        <div className="w-full h-full  flex flex-col md:flex-row mt-20 py-10  px-6 max-w-7xl   md:px-10  min-[1280px]:px-4    gap-14 ">
          <div className="w-full md:w-[90%] flex flex-col gap-6  md:gap-12 ">
            <Link
              to="/"
              className="flex w-fit gap-4 justify-center items-center"
            >
              <ChevronLeft className="w-4 h-4 " />
              <span>Home</span>
            </Link>
            {/* Martian Mono */}

            {/* type */}

            <span className="mt-6 md:mt-10">Create To Unleash Innovation</span>

            {/* title */}

            <span className="text-[24px]  md:text-[48px] font-semibold md:md:leading-[3.4rem]">
              Shaping Tomorrow through AI Excellence
            </span>
            <span className="text-xl md:text-2xl font-thin md:w-[80%]">
              Empowering industries with cutting-edge AI solutions for diverse
              needs and driven by ethical practices.
            </span>

            {/* img */}
            <img
              src="/insights/bg1.webp"
              alt=" Seeker image insights"
              className="md:w-[60vw] md:h-[60vh]"
            />

            {/* content */}

            <div className="w-full flex flex-col gap-10 md:gap-[20vh]">
              {/*  */}
              <div className="w-full  flex flex-col  gap-4 md:gap-10 justify-center items-start ">
                <span className="text-[24px] md:text-[48px] font-medium md:leading-[3.4rem]">
                  Where Creation Catalyzes Innovation Across Industries
                </span>
                <span className="text-xl md:text-2xl ">
                  Tailored AI solutions empowering progress in aerospace,
                  healthcare, government, travel & hospitality, and oil & gas.
                </span>
                <p className="md:text-[1.2rem] font-thin text-slate-300">
                  Affirmity Corp is a leader in harnessing the power of AI to
                  revolutionise diverse industries. Recognising that true
                  innovation starts with the art of creation, our team of
                  skilled professionals crafts tailored AI solutions that
                  address the unique challenges of each sector. From enhancing
                  operational efficiency in aerospace to optimising healthcare
                  decision-making, we focus on delivering generic solutions and
                  nuanced, industry-specific innovations that drive sustainable
                  growth and progress.
                </p>
                <p className="md:text-[1.2rem] font-thin text-slate-300 ">
                  Beyond creating transformative solutions, Affirmity Corp
                  remains committed to being a catalyst for change. Our approach
                  simplifies complexities through user-friendly AI integrations
                  while upholding the highest ethical standards in development
                  and deployment. Through strategic partnerships with industry
                  leaders and research institutions, we strive to amplify the
                  impact of our innovations, shaping a future where technology
                  transforms industries and empowers progress across the board.
                </p>
              </div>

              {/*  */}
            </div>
          </div>
          {/* right side */}
          {/* <div className="w-full md:w-[30%] flex flex-col md:gap-10 gap-4 items-end">
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
        </div> */}
        </div>
      </div>
    </>
  );
}
