/* eslint-disable @typescript-eslint/no-explicit-any */
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

function OnHoverSubMenu({
  open,
  setOpen,
  currentSublink,
  setInHover,
}: {
  open: boolean;
  setOpen: any;
  currentSublink: string;
  inHover: boolean;
  setInHover: any;
}) {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          onMouseEnter={() => {
            setInHover(true);
          }}
          onMouseLeave={() => {
            setOpen(false);
            setInHover(false);
          }}
          initial={{ height: 0, opacity: 1 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className=" w-full bg-[#FFFFFF]  z-30   flex justify-center  "
        >
          <div className="max-w-7xl min-h-full flex     w-full px-6 md:px-10 min-[1280px]:px-4 ">
            {currentSublink === "Markets" && (
              <ul className="  w-full grid grid-cols-4  justify-center gap-10  my-8">
                <motion.li
                  initial={{
                    opacity: 0,
                  }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="font-semibold flex justify-start items-center gap-4  w-full "
                >
                  <Link
                    onClick={() => setOpen(false)}
                    to="/industries/aerospace-and-defence"
                  >
                    <img
                      src="/navbar/aerospace.webp"
                      alt=" navbar aerospace.webp"
                      className="w-8 h-8"
                    />
                  </Link>
                  <Link
                    onClick={() => setOpen(false)}
                    to="/industries/aerospace-and-defence"
                  >
                    <span className="text-slate-600">Defence </span>
                  </Link>
                </motion.li>

                <motion.li
                  initial={{
                    opacity: 0,
                  }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="font-semibold flex justify-start items-center gap-4  w-full "
                >
                  <Link onClick={() => setOpen(false)} to="/industries/travel">
                    <img
                      src="/navbar/travel-agent.webp"
                      alt=" navbar travel-agent.webp"
                      className="w-8 h-8"
                    />
                  </Link>
                  <Link onClick={() => setOpen(false)} to="/industries/travel">
                    <span className="text-slate-600">
                      {" "}
                      Maritime
                    </span>
                  </Link>
                </motion.li>
                <motion.li
                  initial={{
                    opacity: 0,
                  }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="font-semibold flex justify-start items-center gap-4  w-full "
                >
                  <Link
                    onClick={() => setOpen(false)}
                    to="/industries/government"
                  >
                    <img
                      src="/navbar/government.webp"
                      alt=" navbar government.webp"
                      className="w-8 h-8"
                    />
                  </Link>
                  <Link
                    onClick={() => setOpen(false)}
                    to="/industries/government"
                  >
                    <span className="text-slate-600"> Emmergency Services</span>
                  </Link>
                </motion.li>
                <motion.li
                  initial={{
                    opacity: 0,
                  }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="font-semibold flex justify-start items-center gap-4  w-full "
                >
                  <Link
                    onClick={() => setOpen(false)}
                    to="/industries/healthcare"
                  >
                    <img
                      src="/navbar/healthcare.webp"
                      alt=" navbar healthcare.webp"
                      className="w-8 h-8"
                    />
                  </Link>
                  <Link
                    onClick={() => setOpen(false)}
                    to="/industries/healthcare"
                  >
                    <span className="text-slate-600">Armed Forces</span>
                  </Link>
                </motion.li>
                {/* <motion.li
                  initial={{
                    opacity: 0,
                  }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="font-semibold flex justify-start items-center gap-4  w-full "
                >
                  <Link
                    onClick={() => setOpen(false)}
                    to="/industries/oilandgas"
                  >
                    <img
                      src="/navbar/government.webp"
                      alt=" navbar government.webp"
                      className="w-8 h-8"
                    />
                  </Link>
                  <Link
                    onClick={() => setOpen(false)}
                    to="/industries/oilandgas"
                  >
                    <span className="text-slate-300"> Oil & Gas</span>
                  </Link>
                </motion.li> */}
              </ul>
            )}

            {currentSublink === "Services" && (
              <ul className="flex gap-10   p-4   w-full my-8 ">
                {/* <div className="w-full flex flex-col gap-4 justify-start  text-slate-300">
                  <span className="font-semibold ">Consulting</span>

                  <SublinksCard
                    onclick={() => setOpen(false)}
                    link="/services/technology-consulting"
                    title="Technology Consulting"
                  />

                  <SublinksCard
                    onclick={() => setOpen(false)}
                    link="services/management-consulting"
                    title="Management Consulting"
                  />
                </div>

                <div className="w-full flex flex-col gap-4 justify-start  text-slate-300">
                  <span className="font-semibold ">Technology</span>

                  <SublinksCard
                    onclick={() => setOpen(false)}
                    link="/services/artificial-intelligence"
                    title="Artificial Intelligence"
                  />

                  <SublinksCard
                    onclick={() => setOpen(false)}
                    link="/services/application-development"
                    title="Application Development"
                  />

                  <SublinksCard
                    onclick={() => setOpen(false)}
                    link="/services/data-insights"
                    title="Data & Insights"
                  />
                </div> */}

                <div className="w-full flex flex-col gap-4 justify-start  text-slate-600">
                  <span className="font-semibold ">Simulation and Training</span>

                  <SublinksCard
                    onclick={() => setOpen(false)}
                    link="/services/computing-devices"
                    title="AI Simulation Platform"
                  />

                  <SublinksCard
                    onclick={() => setOpen(false)}
                    link="/services/drones-uav"
                    title="Testing Drones and Equipments"
                  />

                  {/* <SublinksCard
                    onclick={() => setOpen(false)}
                    link="/services/loitering-munitions"
                    title="Loitering munitions"
                  /> */}
                </div>
              </ul>
            )}

            {currentSublink === "Products" && (
              <ul className="flex gap-16 justify-evenly   p-4   w-full my-8">
                <div className=" flex flex-col gap-4 justify-start  text-slate-600">
                  <span className="font-semibold ">Loitering Munations</span>
                  <SublinksCard
                    onclick={() => setOpen(false)}
                    link="/solutions/pss"
                    title="Shuura "
                  />
                  <SublinksCard
                    onclick={() => setOpen(false)}
                    link="/solutions/gss"
                    title="Shuura 10"
                  />
                  {/* <SublinksCard
                    onclick={() => setOpen(false)}
                    link="/solutions/dfa"
                    title="Drone Feed Analysis "
                  />

                  <SublinksCard
                    onclick={() => setOpen(false)}
                    link="/solutions/cms"
                    title="Change Monitoring System"
                  />
                  <SublinksCard
                    onclick={() => setOpen(false)}
                    link="/solutions/sarvadrishti"
                    title="SarvaDrishti"
                  />
                  <SublinksCard
                    onclick={() => setOpen(false)}
                    link="/solutions/seeker"
                    title="Seeker"
                  />
                  <SublinksCard
                    onclick={() => setOpen(false)}
                    link="/solutions/foreguard"
                    title="Foreguard"
                  /> */}
                </div>

                <div className=" flex flex-col gap-4 justify-start  text-slate-600">
                  <span className="font-semibold ">Unmmaned Systems</span>
                  <SublinksCard
                    onclick={() => setOpen(false)}
                    link="/solutions/intellicube"
                    title="SkyDeck 3"
                  />

                  {/* <SublinksCard
                    onclick={() => setOpen(false)}
                    link="/solutions/intellipad"
                    title="IntelliPad"
                  />

                  <SublinksCard
                    onclick={() => setOpen(false)}
                    link="/solutions/acumen"
                    title="Acumen"
                  /> */}
                </div>

                <div className=" flex flex-col gap-4 justify-start  text-slate-600">
                  <span className="font-semibold ">Multi Launcher Platform</span>
                  <SublinksCard
                    onclick={() => setOpen(false)}
                    link="/solutions/ridrone"
                    title="Rudarbaan"
                  />
                  <SublinksCard
                    onclick={() => setOpen(false)}
                    link="/solutions/shoora"
                    title="Rudarbaan 9"
                  />
                  {/* <SublinksCard
                    onclick={() => setOpen(false)}
                    link="/solutions/skydeck"
                    title="Skydeck"
                  /> */}
                </div>
                <div className=" flex flex-col gap-4 justify-start  text-slate-600">
                  <span className="font-semibold ">Ground Control Station</span>
                  <SublinksCard
                    onclick={() => setOpen(false)}
                    link="/solutions/ironbeam"
                    title="Sharanga"
                  />

                  {/* <SublinksCard
                    onclick={() => setOpen(false)}
                    link="/solutions/antimine-vehicle"
                    title="Anti Mine Vehicle"
                  />
                  <SublinksCard
                    onclick={() => setOpen(false)}
                    link="/solutions/aiweaponry"
                    title="AI Weaponary"
                  /> */}
                </div>
                <div className=" flex flex-col gap-4 justify-start  text-slate-600">
                  <span className="font-semibold ">Research and Development</span>
                  <SublinksCard
                    onclick={() => setOpen(false)}
                    link="/solutions/ridrone"
                    title="Autonomus Submarine"
                  />
                  <SublinksCard
                    onclick={() => setOpen(false)}
                    link="/solutions/shoora"
                    title="Autonomus Mine Detector"
                  />
                  {/* <SublinksCard
                    onclick={() => setOpen(false)}
                    link="/solutions/skydeck"
                    title="Skydeck"
                  /> */}
                </div>
              </ul>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default OnHoverSubMenu;

const SublinksCard = ({
  title,
  link,
  onclick,
}: {
  title: string;
  link: string;
  onclick: any;
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.3,
          delay: 0.2,
        },
      }}
    >
      <Link onClick={onclick} className="flex gap-2 items-center" to={link}>
        <ChevronRight className="w-4 h-4  text-slate-300" />
        <span className="font-thin hover:underline underline-offset-4  transition-all ">
          {title}
        </span>
      </Link>
    </motion.div>
  );
};
