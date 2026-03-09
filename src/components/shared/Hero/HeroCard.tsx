import { ChevronRight } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
// import { useState } from "react";
// import Slider from "react-slick";
// import { Link } from "react-router-dom";
import { useState } from "react";
import Slider from "react-slick";

const CardData = [
  {
    img: "/insights/research.webp",
    field: "FUTURE WARFARE",
    title: "Architecting the Invisible Shield",
    desc: `The future of defence lies in systems that think, adapt, and act faster than threats emerge. We 
    pioneer AI-driven ecosystems—self-learning networks, quantum-secure architectures, and multi-domain sentinels—that transform uncertainty.`,
    link: "/insights/one",
  },
  {
    img: "/insights/hyperdrive.webp",
    field: "ARTIFICIAL INTELLIGENCE",
    title: "Cognitive Dominance: Outthink the Unseen",
    desc: `Our AI doesn’t just process data—it predicts, decides, and learns. From autonomous loitering
systems to counter-swarm algorithms, we engineer machines that turn complexity into strategic
clarity.`,
    link: "/insights/two",
  },
  {
    img: "/insights/latest-crop.webp",
    field: "LATEST TRENDS",
    title: "The Silent Sentinel Revolution",
    desc: `Modern borders demand more than walls. Our unmanned systems and AI-driven surveillance
networks deliver 360° awareness—land, sea, air, and cyber—ensuring security without
compromise.`,
    link: "/insights/three",
  },
  {
    img: "/insights/research-2-crop.webp",
    field: "RESEARCH",
    title: "Cognitive Munitions: The Next Evolution in Precision",
    desc: `Loitering munitions are no longer mere weapons—they are intelligent partners. Our R&D
pioneers systems that fuse AI, swarm intelligence, and multi-domain sensing to redefine
mission success. Imagine munitions that Self-Optimize Collaborate Decide.`,
    link: "/insights/four",
  },
  {
    img: "/insights/hospitality-crop.webp",
    field: "INNOVATION",
    title: "The Silent Force Multiplier",
    desc: `In high-stakes missions, our AI becomes an invisible partner—seamlessly integrating with
human operators to prioritize threats, adapt drone swarms mid- flight, and predict logistical
needs.From guiding loitering munitions to optimizing multi - launcher deployments, this synergy
transforms data into decisive action, ensuring commanders stay three steps ahead.`,
    link: "/insights/five",
  },
  {
    img: "/insights/data-analytics.webp",
    field: "AI & AUTONOMY",
    title: "Machine Learning in Hypersonic Defence Systems",
    desc: `Hypersonic missile trajectories challenge traditional radar systems, but advances in machine
learning enable real- time tracking by analysing fragmented sensor data.Researchers are
refining neural networks to predict flight paths using historical strike patterns, while edge
computing reduces latency for faster countermeasure deployment.Ethical debates focus on
minimizing false positives in cluttered environments.`,
    link: "/insights/six",
  },
  {
    img: "/insights/healthcare.webp",
    field: "POLICY & COMPLIANCE",
    title: "Bias Mitigation in Autonomous Targeting",
    desc: `A 2024 NATO report underscores risks of algorithmic bias in AI-driven targeting systems. New
frameworks emphasize human oversight, auditable training datasets, and compliance with
international laws. Trials show hybrid human-AI models reduce civilian risk by 40% compared to
fully autonomous systems.
`,
    link: "/insights/seven",
  },
  {
    img: "/insights/govt.webp",
    field: "EMERGING TECH",
    title: "AI and Quantum-Resistant Encryption",
    desc: `As quantum computing threatens traditional encryption, AI models are being trained to detect
and neutralize quantum-based cyberattacks. Research focuses on self-healing cryptographic
protocols for unmanned systems and command hubs. Early simulations show promise in
defending satellite communication networks.
`,
    link: "/insights/eight",
  },
];

const HeroCard = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="w-full flex justify-center items-center mt-10">
      <div className="w-full max-w-7xl   px-6  md:px-10  min-[1280px]:px-4   py-10 ">
        {/* Main Grid */}
        {/* Big Screen */}
        <div className="w-full hidden  md:grid grid-cols-1 md:grid-cols-2 min-[996px]:grid-cols-3 min-[1280px]:grid-cols-4 gap-12 ">
          {CardData.map((card, index) => (
            <CardStyleTwo
              key={index}
              title={card.title}
              field={card.field}
              desc={card.desc}
              link={card.link}
              img={card.img}
            />
          ))}
        </div>

        {/* Mobile devices */}

        <div className="w-full md:hidden">
          <Slider
            dots={true}
            infinite={true}
            autoplay={true}
            speed={800}
            slidesToShow={1}
            swipeToSlide={true}
            autoplaySpeed={3000}
            cssEase="linear"
            arrows={false}
            afterChange={(index) => setActiveIndex(index)}
            customPaging={(i) => (
              <div
                className={`w-3 h-3 mt-8 ${i === activeIndex ? "bg-slate-200" : "bg-slate-400"
                  }`}
              />
            )}
          >
            {CardData.map((card, index) => (
              <CardStyleTwo
                key={index}
                title={card.title}
                field={card.field}
                desc={card.desc}
                link={card.link}
                img={card.img}
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;

const CardStyleTwo = ({
  title,
  field,
  desc,
  // link,
  img,
}: {
  title: string;
  field: string;
  desc: string;
  link: string;
  img: string;
}) => {
  const controls = useAnimation();

  const handleHover = () => {
    controls.start("hover");
  };

  const handleUnHover = () => {
    controls.start("unhover");
  };

  return (
    <motion.div
      onMouseEnter={handleHover}
      onMouseLeave={handleUnHover}
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="w-full  text-slate-200 h-[40vh]  md:h-[420px] flex flex-col cursor-pointer relative overflow-hidden group"
    >
      {/* background image */}
      <motion.img
        variants={{
          hover: {
            scale: 1,
            x: "0%",
            y: "0%",
          },
          unhover: {
            scale: 1,
            x: 0,
            y: 0,
          },
        }}
        initial="unhover"
        animate={controls}
        exit="unhover"
        transition={{ duration: 0.4, ease: "easeInOut" }}
        src={img}
        alt={title}
        className="absolute -z-10 inset-0 w-full h-full object-cover brightness-[.6]"
      />
      {/* content */}
      <div className="w-full  min-h-full overflow-hidden relative group-hover:backdrop-blur-3xl transition-all duration-200 ease-in-out ">
        {/* header */}
        <div className="w-full flex flex-col  p-6 justify-center items-start">
          <span className="">{field}</span>
          <span className="text-xl font-bold mt-6">{title}</span>
        </div>
        <motion.div
          variants={{
            hover: {
              x: "0%",
            },
            unhover: {
              x: "100%",
            },
          }}
          initial="unhover"
          animate={controls}
          exit="unhover"
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="w-full h-full   absolute"
        >
          <p className=" px-6">{desc}</p>
        </motion.div>
      </div>
      <motion.div
        variants={{
          hover: {
            y: "0%",
          },
          unhover: {
            y: "150%",
          },
        }}
        initial="unhover"
        animate={controls}
        exit="unhover"
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="w-fit  z-20 p-1  absolute bottom-4 right-4 flex gap-2 cursor-pointer  group/expand"
      >
        {/* <Link to={link}>
          <span className="font-bold group-hover:underline-offset-8 group-hover/expand:underline">
            Expand
          </span>
        </Link> */}
        <ChevronRight className="w-6 h-6" />
      </motion.div>
    </motion.div>
  );
};
