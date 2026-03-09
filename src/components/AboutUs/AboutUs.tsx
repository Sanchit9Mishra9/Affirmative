import { Linkedin } from "lucide-react";
import { useState } from "react";

import { Link } from "react-router-dom";
import { Parallax } from "react-scroll-parallax";
import ClientLogo from "../shared/ClientLogo";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { Helmet } from "react-helmet";

export default function AboutUs() {
  return (
    <>
      <Helmet>
        <title>Quadcorp Labs - Company</title>
        <meta
          name="description"
          content=" Our portfolio of services sets us apart from others in the industry, and we have a strong presence in the digital space, providing progressive solutions."
        />
      </Helmet>
      <div className="w-full">
        {/* Section 1 */}
        <SectionOne />

        {/* section 2 */}
        <SectionTwo />
        {/* section 3 */}
        <SectionThree />

        {/* section 4 */}
        <SectionFour />

        <LeadershipTeam />

        {/* section 7 */}
        <SectionSeven />

        {/* section 8 */}
        <CSR />

        {/* <ColorCards /> */}

        <HistorySection />

        {/* section 9 */}
        <Accolades />

        <Awards />
        <ClientLogo />
      </div>
    </>
  );
}

const HistorySection = () => {
  const Card = ({ title, desc }: { title: string; desc: string[] }) => {
    const [currIndex, setCurrIndex] = useState(0);
    const controls = useAnimation();
    const bgcontrols = useAnimation();

    const handleHover = () => {
      controls.start("hover");
    };
    const handleHoverExit = () => {
      controls.start("rest");
    };

    return (
      <div
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverExit}
        className="w-full md:w-1/3 h-fit md:h-[450px] p-6 border border-slate-100 flex flex-col gap-2 hover:cursor-pointer"
      >
        <div className="w-full flex flex-col gap-2">
          <span className="text-xl font-medium">{title}</span>
          <motion.span
            variants={{
              rest: { width: "15%" },
              hover: { width: "30%" },
            }}
            initial="rest"
            animate={controls}
            transition={{ duration: 0.5, type: "spring" }}
            className="h-[4px] bg-orange-500"
          ></motion.span>
        </div>
        {desc.map((item, index) => (
          <p
            onMouseEnter={() => {
              setCurrIndex(index);
              bgcontrols.start("hover");
            }}
            onMouseLeave={() => {
              bgcontrols.start("rest");
            }}
            className="md:text-[1rem] font-thin   relative overflow-hidden p-2"
            key={index}
          >
            <AnimatePresence mode="wait">
              <motion.div
                animate={bgcontrols}
                initial="rest"
                variants={{
                  rest: { width: "0%" },
                  hover: {
                    width: "100%",
                    transition: {
                      duration: 0.4,
                    },
                  },
                }}
                exit={{
                  width: "0%",
                  transition: {
                    duration: 0.1,
                  },
                }}
                className={`absolute  h-full inset-0 -z-10 bg-gradient-to-r from-red-700 to-orange-700  origin-center ${index == currIndex ? "visible" : "hidden"
                  }`}
              ></motion.div>
            </AnimatePresence>
            {item}
          </p>
        ))}
      </div>
    );
  };
  return (
    <section className="w-full flex justify-center">
      <div className="w-full h-full flex max-md:flex-col  gap-8  pt-20 md:py-20   px-6 max-w-9xl   md:px-10  min-[1280px]:px-4  justify-evenly  ">
        <Card
          title="History"
          desc={[
            `QuadCorp was forged in 2024 by visionary founders and partners renowned for their expertise in
defence innovation and AI transformation. United by a shared mission to redefine tactical
dominance through ethically grounded technology, we emerged as pioneers of autonomous
systems engineered for mission-critical defence, maritime, and emergency operations.`,
            " Our portfolio—rooted in defence-grade AI, adaptive frameworks, and human-machine",
            ` convergence—sets a new standard for tactical readiness. With a relentless focus on silent
power and future - ready design, QuadCorp delivers solutions that dominate complexity, protect
lives, and secure frontiers.
`,
          ]}
        />
        {/* <Card
          title="Alliances"
          desc={[
            "Teritorial Army Innovation Cell (TAIC)",
            "Indian Institute of Technology, (IIT) Indore",
            "Maulana Azad National Institute of Technology (MANIT)",
          ]}
        />
        <Card
          title="Group Companies"
          desc={["Affirmity Corp Private Limited", "Zenva Biotech", "Aryavat Defence"]}
        /> */}
      </div>
    </section>
  );
};

// const ColorCards = () => {
//   return (
//     <section className="w-full flex justify-center">
//       <div className="w-full h-full flex max-md:flex-col  gap-8  pt-20 md:py-20   px-6 max-w-7xl   md:px-10  min-[1280px]:px-4  justify-evenly  ">
//         {/* Card 1 */}
//         <div
//           className={`w-full md:w-1/4 flex flex-col  relative bg-[rgb(219,142,22)] justify-between `}
//         >
//           <div className="w-full flex flex-col gap-4 p-6 z-10">
//             <span className="text-2xl font-medium">AI Capabilities</span>
//             <p className=" md:text-[1.1rem] font-thin">
//               Bridge the gap between strategy and execution with AI
//               capabilities.
//             </p>
//           </div>
//           <div className="w-full h-[150px] relative flex justify-center items-center overflow-hidden ">
//             <img
//               src="/aboutus/ai.webp"
//               alt="aboutus ai"
//               className="w-full h-full  object-scale-down object-center   absolute -bottom-4"
//             />
//           </div>
//         </div>
//         {/* Card 2 */}
//         <div
//           className={`w-full md:w-1/4 flex flex-col  relative bg-[rgb(5,149,249)] justify-between `}
//         >
//           <div className="w-full flex flex-col gap-4 p-6 z-10">
//             <span className="text-2xl font-medium"> Digital Models</span>
//             <p className=" md:text-[1.1rem] font-thin">
//               Optimise your business with adaptable digital operating models.
//             </p>
//           </div>
//           <div className="w-full h-[150px] relative flex justify-center items-center overflow-hidden ">
//             <img
//               src="/aboutus/models.webp"
//               alt=" aboutus models"
//               className="w-full h-[70%]  object-scale-down object-center   absolute bottom-0 "
//             />
//           </div>
//         </div>
//         {/* Card 3 */}
//         <div
//           className={`w-full md:w-1/4 flex flex-col  relative bg-[rgb(138,37,138)] justify-between `}
//         >
//           <div className="w-full flex flex-col gap-4 p-6 z-10">
//             <span className="text-2xl font-medium">Talent Transformations</span>
//             <p className=" md:text-[1.1rem] font-thin">
//               Empower Your Workforce to Thrive in the Evolving Landscape.
//             </p>
//           </div>
//           <div className="w-full h-[150px] relative flex justify-center items-center overflow-hidden ">
//             <img
//               src="/aboutus/talent.webp"
//               alt=" aboutus talent"
//               className="w-full h-[80%]  object-scale-down object-center   absolute  bottom-0"
//             />
//           </div>
//         </div>

//         {/* Card 4 */}
//         <div
//           className={`w-full md:w-1/4 flex flex-col  relative bg-[rgb(237,93,65)] justify-between `}
//         >
//           <div className="w-full flex flex-col gap-4 p-6 z-10">
//             <span className="text-2xl font-medium">Unleash Innovation</span>
//             <p className=" md:text-[1.1rem] font-thin">
//               Inspiring Stories of Overcoming Challenges and Reaching the
//               Unseen.
//             </p>
//           </div>
//           <div className="w-full h-[150px] relative flex justify-center items-center overflow-hidden ">
//             <img
//               src="/aboutus/innovation.webp"
//               alt=" aboutus innovation"
//               className="w-[80%] h-[80%]  object-scale-down object-center   absolute  -bottom-3"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

const LeadershipTeam = () => {
  const Card = ({
    name,
    position,
    link,
  }: {
    img: string;
    name: string;
    position: string;
    link: string;
  }) => {
    return (
      <div className="w-full h-[350px] flex flex-col gap-4 text-slate-300 ">
        <div className="w-full h-[65%]">
          <img
            src="/aboutus/user.webp"
            alt=" aboutus user image"
            className="w-full h-full object-scale-down origin-center  object-center brightness-75 "
          />
        </div>
        <span className="text-xl md:font-semibold leading-none">{name}</span>
        <span className=" md:text-[1.1rem] font-thin leading-none">
          {position}
        </span>
        <Link to={link} className="w-fit bg-slate-900 p-1 rounded-[50%]">
          <Linkedin className="w-4 h-4 text-slate-300  " />
        </Link>
      </div>
    );
  };
  const [index, setIndex] = useState(0);
  const team = [
    [
      {
        post: "CEO and Managing Director",
        name: "Shantanu Bisaria",
        img: "/aboutus/user.webp",
        link: "/about",
      },

      {
        post: "Chief Technology Officer",
        name: "Akhil Tiwari",
        img: "/aboutus/user.webp",
        link: "/about",
      },

      // {
      //   post: "Director, Government Business",
      //   name: "Shivam Tripathi",
      //   img: "/aboutus/user.webp",
      //   link: "/about",
      // },
      {
        post: "Chief Operating Officer",
        name: "Ritik Batham",
        img: "/aboutus/user.webp",
        link: "/about",
      },
    ],
    [
      {
        post: "CEO and Managing Director",
        name: "Shantanu Bisaria",
        img: "/aboutus/user.webp",
        link: "/about",
      },
      {
        post: "Chief Financial Officer",
        name: "Shashank Bangad",
        img: "/aboutus/user.webp",
        link: "/about",
      },

      {
        post: "Chief Technology Officer",
        name: "Akhil Tiwari",
        img: "/aboutus/user.webp",
        link: "/about",
      },
      {
        post: "Chief Technology Officer",
        name: "Ritik Batham",
        img: "/aboutus/user.webp",
        link: "/about",
      },

      {
        post: "Director, Government Business",
        name: "Shivam Tripathi",
        img: "/aboutus/user.webp",
        link: "/about",
      },
      {
        post: "Director, Stategic Business",
        name: "Siddharth Kurrey",
        img: "/aboutus/user.webp",
        link: "/about",
      },

    ],
    [
      {
        post: "Indian Navy",
        name: "Rear Admiral S.P. Lal (Retd.)",
        img: "/aboutus/user.webp",
        link: "/about",
      },
      {
        post: "Indian Army",
        name: "Col. U.S. Upadhyaya (Retd.)",
        img: "/aboutus/user.webp",
        link: "/about",
      },
      {
        post: "Indian Army",
        name: "Col. Arun Nura (Retd.)",
        img: "/aboutus/user.webp",
        link: "/about",
      },
      {
        post: "Indian Army",
        name: "Maj. Jai Upadhyaya",
        img: "/aboutus/user.webp",
        link: "/about",
      },
    ],
  ];
  return (
    <section className="w-full justify-center flex relative  min-h-screen">
      <div className="w-full h-full flex flex-col  gap-6 pt-10 md:gap-12 md:pt-20 md:py-20   px-6 max-w-7xl   md:px-10  min-[1280px]:px-4   ">
        <div className="w-full flex flex-col justify-center items-center gap-6">
          <span className="text-[24px] md:text-[48px] font-medium ">
            Leadership
          </span>
          <p className="md:text-2xl font-thin text-center w-[90%] ">
            Visionaries Commanding the Future

          </p>
        </div>

        <div className="w-full flex  p-4 justify-center  ">
          <button
            onClick={() => setIndex(0)}
            className={`border w-min-fit   md:py-3 md:px-6 p-2 transition-all duration-300 ${index == 0 ? "bg-orange-300 text-slate-900 border-orange-300" : ""
              }`}
          >
            Founders
          </button>
          <button
            onClick={() => setIndex(1)}
            className={`border w-min-fit   md:py-3 md:px-6 p-2 transition-all duration-300 ${index == 1 ? "bg-orange-300 text-slate-900 border-orange-300" : ""
              }`}
          >
            Leadership
          </button>
          <button
            onClick={() => setIndex(2)}
            className={`border w-min-fit   md:py-3 md:px-6 p-2 transition-all duration-300 ${index == 2 ? "bg-orange-300 text-slate-900 border-orange-300" : ""
              }`}
          >
            Strategic Advisors
          </button>
        </div>
        <div className="grid w-full grid-cols-1 md:grid-cols-2 min-[996px]:grid-cols-4 gap-8 md:gap-10">
          {team[index].length > 0 &&
            team[index].map((member, index) => (
              <Card
                img={member.img}
                name={member.name}
                position={member.post}
                link={member.link}
                key={index}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

const Accolades = () => {
  return (
    <section className="w-full justify-center flex relative ">
      <div className="w-full h-full flex flex-col  md:gap-[10vh] pt-10 md:py-10   px-6 max-w-7xl   md:px-10  min-[1280px]:px-4  justify-center  ">
        <div className="w-full flex flex-col justify-center items-center gap-4  ">
          <span className="text-[24px] md:text-[48px] font-medium ">
            Accolades
          </span>
          <p className=" md:text-[1.1rem] font-thin md:text-center md:w-[70%]  ">
            QuadCorp’s relentless pursuit of tactical excellence and ethical innovation has earned global
            recognition as a pioneer in defence-grade AI and autonomous systems. Our solutions—
            celebrated for redefining industry standards—reflect a commitment to mission-critical
            reliability, human-machine synergy, and sustainable impact. Awards and accolades underscore
            our leadership in silent power, operational dominance, and future-ready design, while our
            culture of collaborative ingenuity continues to drive breakthroughs that protect lives and secure
            frontiers.
          </p>
        </div>
      </div>
    </section>
  );
};

const Awards = () => {
  return (
    <section className="w-full justify-center flex relative ">
      <div className="w-full h-full flex flex-col  md:gap-[10vh] pt-10 md:py-20  px-6 max-w-7xl   md:px-10  min-[1280px]:px-4  justify-center  ">
        <div className="w-full flex flex-col justify-center items-center gap-4 md:gap-6 ">
          <span className="text-[24px] md:text-[48px] font-medium ">
            Certifications
          </span>
          {/* <div className="w-full grid grid-cols-3 md:grid-cols-3 min-[996px]:grid-cols-5 gap-6 place-content-center "> */}
          <div className="w-full flex flex-row gap-x-14 gap-y-8 flex-wrap justify-center items-center">
            <div className="h-[150px] w-[180px]">
              <img
                src="/certificate/9001.webp"
                alt=" startup"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="h-[150px] w-[180px]">
              <img
                src="/certificate/start.webp"
                alt=" startup"
                className="w-full h-full object-contain object-center scale-[1.1]"
              />
            </div>
            <div className="h-[150px] w-[180px]">
              <img
                src="/certificate/27001.webp"
                alt=" startup"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="h-[150px] w-[180px]">
              <img
                src="/certificate/msme.webp"
                alt=" msme"
                className="w-full h-full object-cover object-center invert"
              />
            </div>
            <div className="h-[150px] w-[180px]">
              <img
                src="/certificate/27701.webp"
                alt=" startup"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="h-[150px] w-[180px]">
              <img
                src="/certificate/cmmi5.webp"
                alt=" startup"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="h-[150px] w-[180px]">
              <img
                src="/certificate/42001.webp"
                alt=" startup"
                className="w-full h-full object-contain object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CSR = () => {
  return (
    <section className="w-full justify-center flex relative ">
      <div className="w-full h-full flex max-md:flex-col  gap-6 pt-10 md:gap-12 md:pt-20 md:py-20   px-6 max-w-7xl   md:px-10  min-[1280px]:px-4     ">
        <div className="w-1/2 md:flex min-h-full relative overflow-hidden justify-center items-center hidden">
          {/* left */}
          <img
            src="/team-expert1.webp"
            alt=" aboutus team expert1"
            className="absolute top-0 left-[15%] w-[250px] h-[300px] object-cover object-center  brightness-75"
          />
          {/* center */}
          <img
            src="/team-expert3.webp"
            alt=" aboutus team expert3"
            className="absolute top-0 right-[10%] w-[250px] h-[300px] object-cover object-center brightness-75"
          />

          {/* right */}
          <img
            src="/team-expert2.webp"
            alt=" aboutus team expert2"
            className="absolute top-[40%] left-[20%] w-[350px] h-[250px] object-cover object-center brightness-75"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-6 md:gap-10 text-slate-300 ">
          <span className="text-[22px] md:text-[48px] font-medium  md:leading-[3.4rem]">
            Responsibility: Agents of Sustainable Impact
          </span>
          <div className="w-full  flex h-[30vh]  relative overflow-hidden justify-center items-center md:hidden">
            {/* left */}
            <img
              src="/team-expert1.webp"
              alt=" aboutus team expert11"
              className="absolute top-0 left-0  w-[180px] h-[150px] object-cover object-center  brightness-75"
            />
            {/* center */}
            <img
              src="/team-expert3.webp"
              alt=" aboutus team expert33"
              className="absolute top-0 right-0  w-[180px] h-[150px] object-cover object-center brightness-75"
            />

            {/* right */}
            <img
              src="/team-expert2.webp"
              alt=" aboutus team expert22"
              className="absolute top-[40%] left-[20%]  w-[200px] h-[150px] object-cover object-center brightness-75"
            />
          </div>
          <p className=" md:text-[1.1rem] font-thin ">
            At QuadCorp, ethical progress fuels our innovation. We bridge societal divides through Equity,
            deploying inclusive AI solutions and skill programs to empower underserved communities.
            Simultaneously, Planetary Care drives our pursuit of efficiency—reducing environmental
            footprints while amplifying tactical excellence
          </p>
          <p className=" md:text-[1.1rem] font-thin  ">
            When crises strike, Crisis Aid defines our resolve. We deploy AI to fortify disaster resilience,
            deliver critical healthcare access, and shield vulnerable populations—proving technology’s
            power to protect humanity and the planet it inhabits.

          </p>
        </div>
      </div>
    </section>
  );
};
const SectionSeven = () => {
  return (
    <section className="w-full justify-center flex relative ">
      <div className="w-full h-full flex max-md:flex-col  gap-6 pt-10 md:gap-12 md:pt-20 md:py-20   px-6 max-w-7xl   md:px-10  min-[1280px]:px-4     ">
        <div className="w-full md:w-2/3 flex flex-col  gap-6 md:gap-12 text-slate-300 ">
          <span className="text-[24px] md:text-[48px] font-thin  text-orange-500">
            Culture
          </span>
          <div className=" w-full md:w-1/3 flex h-[30vh] relative md:hidden   overflow-hidden ">
            {/* left */}
            <div className="absolute top-0 left-0 md:w-[200px] md:h-[250px]   w-[180px] h-[100px] ">
              <Parallax speed={6}>
                <img
                  src="/team-expert4.webp"
                  alt=" aboutus team expert4"
                  className=" w-full h-full object-cover object-center brightness-75"
                />
              </Parallax>
            </div>

            {/* center */}
            <div className="absolute top-0 md:right-10 right-0 md:w-[200px] md:h-[250px]  w-[180px] h-[100px]  ">
              <Parallax speed={8}>
                <img
                  src="/team-expert5.webp"
                  alt=" aboutus team expert5"
                  className=" w-full h-full object-cover object-center brightness-75"
                />
              </Parallax>
            </div>

            {/* right */}
            <Parallax speed={10} className="relative w-full">
              <div className="absolute top-[50%] md:left-[10%] left-[18%]  md:w-[300px] md:h-[200px] w-[230px] h-[150px]">
                <img
                  src="/team-expert5.webp"
                  alt=" aboutus team expert6"
                  className=" w-full h-full object-cover object-center brightness-75"
                />
              </div>
            </Parallax>
          </div>
          <p className=" md:text-[1.1rem] font-thin text-slate-600">
            Embrace. Empower. Uplift
          </p>
          <p className=" md:text-[1.1rem] font-thin text-slate-600">
            We unite diverse minds to forge solutions that transcend limits. By fostering ownership and
            accountability, we ignite innovation that uplifts organizations and communities—creating
            ripples of progress worldwide.

          </p>
        </div>
        <div className="w-1/3 md:flex min-h-full relative hidden  ">
          {/* left */}
          <div className="absolute top-0 left-0 w-[200px] h-[250px]  ">
            <Parallax speed={6}>
              <img
                src="/team-expert4.webp"
                alt="aboutus team expert44"
                className=" w-full h-full object-cover object-center brightness-75"
              />
            </Parallax>
          </div>

          {/* center */}
          <div className="absolute top-0 right-10 w-[200px] h-[250px]   ">
            <Parallax speed={8}>
              <img
                src="/team-expert5.webp"
                alt=" aboutus team expert55"
                className=" w-full h-full object-cover object-center brightness-75"
              />
            </Parallax>
          </div>

          {/* right */}
          <Parallax speed={10} className="relative w-full">
            <div className="absolute top-[50%] left-[10%] w-[300px] h-[200px]">
              <img
                src="/team-expert5.webp"
                alt=" aboutus team expert66"
                className=" w-full h-full object-cover object-center brightness-75"
              />
            </div>
          </Parallax>
        </div>
      </div>
    </section>
  );
};

const SectionFour = () => {
  const SectionFourCard = ({
    title,
    description,
    index,
  }: {
    title: string;
    description: string;
    index: number;
  }) => {
    const controls = useAnimation();

    const handleHover = () => {
      controls.start("hover");
    };
    const handleHoverExit = () => {
      controls.start("rest");
    };
    return (
      <div
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverExit}
        className="w-full h-full flex flex-col gap-2  "
      >
        <motion.span
          variants={{
            rest: { width: "8%" },
            hover: { width: "14%" },
          }}
          initial="rest"
          animate={controls}
          transition={{ duration: 0.5, type: "spring" }}
          className="h-[4px] bg-orange-500"
        ></motion.span>
        <span className=" text-[24px] md:text-[48px] font-medium leading-none ">
          {index}.
        </span>
        <span className="md:text-[24px] font-semibold">{title}</span>
        <p className=" md:text-[1.1rem] font-thin text-slate-300">
          {description}
        </p>
      </div>
    );
  };
  return (
    <section className="w-full justify-center flex relative ">
      <div className="w-full h-full flex flex-col  gap-6 pt-10 md:gap-12 md:pt-20 md:py-20   px-6 max-w-7xl   md:px-10  min-[1280px]:px-4    ">
        <div className="w-full flex flex-col justify-center items-center">
          <span className="text-[24px] md:text-[48px] font-medium ">
            With Values That Command Us
          </span>
          <p className="md:text-2xl font-thin text-center w-full  md:w-[70%]  mt-3">
            We’re driven by an uncompromising code—principles that forge dominance, demand integrity,
            and define legacy.
          </p>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 min-[996px]:grid-cols-3 gap-x-10 gap-y-8 mt-6">
          <SectionFourCard
            title="Innovation"
            description="Pioneering tomorrow’s tools to dominate today’s threats."
            index={1}
          />
          <SectionFourCard
            title="Dominance"
            description="No margin for mediocrity. Every system is engineered to master complexity and command superiority."
            index={2}
          />
          <SectionFourCard
            title="Integrity"
            description="Victory without humanity is defeat. We engineer to protect, never to exploit."
            index={3}
          />
          <SectionFourCard
            title="Excellence"
            description="Systems that command resilience—silent, unyielding, unstoppable."
            index={4}
          />
          <SectionFourCard
            title="Unity"
            description="Uniting human genius and machine precision to conquer the unseen."
            index={5}
          />
          <SectionFourCard
            title="Stewardship"
            description="Winning today while safeguarding tomorrow’s battlefield."
            index={6}
          />
        </div>
      </div>
    </section>
  );
};

const SectionThree = () => {
  return (
    <section className="w-full justify-center flex relative ">
      <div className="w-full h-full flex  max-md:flex-col gap-6 pt-10 md:gap-12 md:pt-20 md:py-20   px-6 max-w-7xl   md:px-10  min-[1280px]:px-4    ">
        <div className="w-full md:w-1/2 flex max-md:h-[30vh]  md:min-h-full relative overflow-hidden ">
          {/* left */}
          <div className="absolute inset-0 md:w-[250px] md:h-[200px] w-[150px]  h-[100px]">
            <Parallax speed={2}>
              <img
                src="/team-expert1.webp"
                alt=" aboutus team expert11"
                className=" w-full h-full object-cover object-center  brightness-75"
              />
            </Parallax>
          </div>
          {/* center */}

          <div className="absolute top-[100px] left-[30%] md:w-[200px] md:h-[250px] w-[130px] h-[150px] ">
            <Parallax speed={4}>
              <img
                src="/team-expert2.webp"
                alt=" aboutus team expert222"
                className=" w-full h-full object-cover object-center brightness-75"
              />
            </Parallax>
          </div>

          {/* right */}
          <div className="absolute top-10 max-md:right-0  md:right-[50px] md:w-[200px] md:h-[250px] w-[130px] h-[150px]  ">
            <Parallax speed={6}>
              <img
                src="/team-expert3.webp"
                alt=" aboutus team expert333"
                className=" w-full h-full object-cover object-center brightness-75"
              />
            </Parallax>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-6  md:gap-12 text-slate-600 ">
          <span className="text-[24px] md:text-[48px] font-medium leading-none">
            Journey
          </span>
          <p className=" md:text-[1.1rem] font-thin ">
            Founded in 2024 by pioneers of artificial intelligence, QuadCorp began with a mission to
            redefine possibility.
          </p>
          <p className=" md:text-[1.1rem] font-thin ">
            We now stand as architects of AI systems that erase boundaries between
            strategy and execution.
          </p>
        </div>
      </div>
    </section>
  );
};

const SectionTwo = () => {
  return (
    <section className="w-full justify-center flex relative ">
      <div className="w-full h-full flex max-md:flex-col gap-8 pt-8 md:gap-12 md:pt-20 md:py-20   px-6 max-w-7xl   md:px-10  min-[1280px]:px-4    ">
        <div className="w-full h-full md:hidden ">
          <img
            src="/blog3.webp"
            alt=" aboutus blog3"
            className="w-full h-full object-cover object-center brightness-75"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-6 md:gap-12 text-slate-600">
          <span className="text-[24px] md:text-[48px] font-medium ">
            We Are
          </span>
          <p className=" md:text-[1.1rem] font-thin ">
            A global leader in autonomous intelligence, crafting adaptive systems for Defence, Maritime,
            Emergency Services, and Armed Forces.
          </p>
          <p className=" md:text-[1.1rem] font-thin">
            We empower organizations to dominate operational
            landscapes, safeguard lives, and pioneer progress through ethically anchored innovation.
          </p>
        </div>
        <div className="w-1/2 h-full max-md:hidden ">
          <img
            src="/blog3.webp"
            alt=" aboutus blog32"
            className="w-full h-full object-cover object-center brightness-75"
          />
        </div>
      </div>
    </section>
  );
};

const SectionOne = () => {
  return (
    <section className="w-full justify-center flex relative  md:h-screen h-[50vh] ">
      <img
        src="/aboutus/company.webp"
        alt=" aboutus company"
        className="w-full h-full absolute inset-0  -z-10 brightness-[.3] md:hidden object-cover"
      />
      <video
        src="/aboutus/ai-bg.mp4"
        loop
        muted
        autoPlay
        className="absolute inset-0 -z-10  w-full h-full object-cover brightness-[.7] max-md:hidden"
      />
      <div className="w-full  md:py-20   px-6 max-w-7xl   md:px-10  min-[1280px]:px-4  flex flex-col md:gap-20 gap-6  justify-center items-center">
        <p className="w-full text-[24px] md:text-[48px] font-thin md:leading-[3.4rem] md:w-[80%] text-center text-slate-300">
          Where Intelligence Meets{" "}
          <span className="font-bold text-orange-600">Innovation</span>{" "}
          Unveiling the Power of AI
        </p>

        <p className="text-xl md:text-2xl font-thin text-slate-300 text-center">
          We deliver innovative AI solutions engineered to conquer complexity and transform challenges
          into strategic victories.

        </p>
      </div>
    </section>
  );
};
