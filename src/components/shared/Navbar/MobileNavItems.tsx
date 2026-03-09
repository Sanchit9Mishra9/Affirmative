import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Collapse } from "react-collapse";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { mobileNavLinkItems } from "./navData";

const MobileNavItems = ({ setClicked }: { setClicked: any }) => {
  const [open, setOpen] = useState<number | null>();

  const toggle = (index: number) => {
    if (index === open) {
      setOpen(null);
    } else {
      setOpen(index);
    }
  };
  return (
    <ul className="w-full list-none flex flex-col gap-10 p-8 ">
      {mobileNavLinkItems.map((item, index) => (
        <li
          key={item.name}
          className={`w-full ${index !== open && ""} flex flex-col `}
        >
          <div className="w-full flex justify-between items-center">
            <span
              className={`text-xl transition-all duration-300 ease-in-out ${index === open ? "text-002E62" : "text-slate-500"
                } `}
            >
              {["Company", "Careers", "Contact"].includes(item.name) ? (
                <Link
                  onClick={() => setClicked(false)}
                  to={item.link}
                  className="cursor-pointer hover:underline underline-offset-4"
                >
                  {item.name}
                </Link>
              ) : (
                <span onClick={() => toggle(index)}>{item.name}</span>
              )}
            </span>

            {item.sublinks && (
              <motion.div
                initial={"closed"}
                animate={open == index ? "open" : "closed"}
                variants={{
                  open: {
                    rotate: 180,
                  },
                  closed: {
                    rotate: 0,
                  },
                }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <ChevronDown
                  className="w-5 h-5 ml-1 font-bold cursor-pointer"
                  onClick={() => toggle(index)}
                />
              </motion.div>
            )}
          </div>

          {item.sublinks && item.name === "Industries" && (
            <Collapse isOpened={open == index}>
              <ul className="w-full flex-col   flex  gap-2 p-4 ">
                <LinkCard
                  link="/industries/aerospace-and-defence"
                  name="Aerospace & Defence"
                  onclick={() => setClicked(false)}
                />
                <LinkCard
                  link="/industries/travel"
                  name="Travel & Hospitality"
                  onclick={() => setClicked(false)}
                />
                <LinkCard
                  link="/industries/government"
                  name="Government"
                  onclick={() => setClicked(false)}
                />
                <LinkCard
                  link="/industries/healthcare"
                  name="Health Care"
                  onclick={() => setClicked(false)}
                />
                <LinkCard
                  link="/industries/oilandgas"
                  name="Oil & Gas"
                  onclick={() => setClicked(false)}
                />
              </ul>
            </Collapse>
          )}

          {item.sublinks && item.name === "Services" && (
            <Collapse isOpened={open == index}>
              <ul className="w-full flex-col   flex  gap-2 p-4 ">
                <span className="font-thin">Consulting</span>
                <LinkCard
                  link="/services/technology-consulting"
                  name="Technology Consulting"
                  onclick={() => setClicked(false)}
                />
                <LinkCard
                  link="/services/management-consulting"
                  name="Management Consulting"
                  onclick={() => setClicked(false)}
                />
                <span className="font-thin">Technology</span>
                <LinkCard
                  link="/services/artificial-intelligence"
                  name="Artificial Intelligence"
                  onclick={() => setClicked(false)}
                />
                <LinkCard
                  link="/services/application-development"
                  name="Application Development"
                  onclick={() => setClicked(false)}
                />
                <LinkCard
                  link="/services/data-insights"
                  name="Data Insights"
                  onclick={() => setClicked(false)}
                />

                <span className="font-thin">Manufacturing</span>
                <LinkCard
                  link="/services/computing-devices"
                  name="Computing Devices"
                  onclick={() => setClicked(false)}
                />
                <LinkCard
                  link="/services/drones-uav"
                  name="Drones & UAVs"
                  onclick={() => setClicked(false)}
                />
                <LinkCard
                  link="/services/loitering-munitions"
                  name="Loitering Munitions"
                  onclick={() => setClicked(false)}
                />
              </ul>
            </Collapse>
          )}
          {item.sublinks && item.name === "Solutions" && (
            <Collapse isOpened={open == index}>
              <ul className="w-full flex-col   flex  gap-2 p-4 ">
                <span className="font-thin">Solutions</span>
                <LinkCard
                  link="/solutions/pss"
                  name="Perimeter Security System"
                  onclick={() => setClicked(false)}
                />
                <LinkCard
                  link="/solutions/gss"
                  name="Garrison Security System"
                  onclick={() => setClicked(false)}
                />
                <LinkCard
                  link="/solutions/dfa"
                  name="Drone Feed Analysis"
                  onclick={() => setClicked(false)}
                />
                <LinkCard
                  link="/solutions/cms"
                  name="Change Monitoring System"
                  onclick={() => setClicked(false)}
                />
                <LinkCard
                  link="/solutions/sarvadrishti"
                  name="Sarva Drishti"
                  onclick={() => setClicked(false)}
                />
                <LinkCard
                  link="/solutions/seeker"
                  name="Seeker"
                  onclick={() => setClicked(false)}
                />
                <LinkCard
                  link="/solutions/foreguard"
                  name="Foreguard"
                  onclick={() => setClicked(false)}
                />
                <span className="font-thin">Products</span>
                <LinkCard
                  link="/solutions/intellicube"
                  name="IntelliCube"
                  onclick={() => setClicked(false)}
                />
                <LinkCard
                  link="/solutions/intellipad"
                  name="IntelliPad"
                  onclick={() => setClicked(false)}
                />
                <LinkCard
                  link="/solutions/acumen"
                  name="Acumen"
                  onclick={() => setClicked(false)}
                />
                <span className="font-thin">UAC</span>
                <LinkCard
                  link="/solutions/ridrone"
                  name="Room Intervention Drone"
                  onclick={() => setClicked(false)}
                />
                <LinkCard
                  link="/solutions/shoora"
                  name="Shoora"
                  onclick={() => setClicked(false)}
                />
                <LinkCard
                  link="/solutions/skydeck"
                  name="Skydeck"
                  onclick={() => setClicked(false)}
                />
                <span className="font-thin">R&D</span>
                <LinkCard
                  link="/solutions/ironbeam"
                  name="ironbeam"
                  onclick={() => setClicked(false)}
                />
                <LinkCard
                  link="/solutions/antimine-vehicle"
                  name="Anti-Mine Vehicle"
                  onclick={() => setClicked(false)}
                />
                <LinkCard
                  link="/solutions/aiweaponry"
                  name="AI Weaponry"
                  onclick={() => setClicked(false)}
                />
              </ul>
            </Collapse>
          )}
        </li>
      ))}
    </ul>
  );
};

export default MobileNavItems;

const LinkCard = ({
  link,
  name,
  onclick,
}: {
  link: string;
  name: string;
  onclick: any;
}) => {
  return (
    <Link onClick={onclick} className="flex gap-2 items-center" to={link}>
      <ChevronRight className="w-4 h-4  text-slate-300" />
      <span className="font-thin hover:underline underline-offset-4  transition-all ">
        {name}
      </span>
    </Link>
  );
};
