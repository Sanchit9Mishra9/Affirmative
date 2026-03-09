/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Collapse } from "react-collapse";

export default function MobileServicesOffering({
  data,
  cardData,
}: {
  data: any;
  cardData: any;
}) {
  const [open, setOpen] = useState<number | null>();
  const toggle = (index: number) => {
    if (index === open) {
      setOpen(null);
    } else {
      setOpen(index);
    }
  };
  return (
    <div
      id="aiservices"
      className="md:hidden w-full pt-20 flex flex-col gap-6 px-6 "
    >
      <span className="w-full text-center text-2xl  font-bold  text-slate-100">
        Service Offerings
      </span>
      <div className="w-full flex flex-col gap-4 ">
        {/*  */}

        {data.map((item: any, index: number) => (
          <Card
            key={index}
            item={item}
            index={index}
            open={open}
            toggle={toggle}
            itemData={cardData[index]}
          />
        ))}
      </div>
    </div>
  );
}

const Card = ({
  item,
  index,
  open,
  toggle,
  itemData,
}: {
  item: any;
  index: number;
  open: any;
  toggle: (index: number) => void;
  itemData: any;
}) => {
  const isClicked = open === index;
  return (
    <div
      onClick={() => toggle(index)}
      className="w-full flex flex-col  bg-[#181818]"
    >
      {/* bg-gradient-to-br from-red-700 to-orange-700 brightness-110 */}
      <div className={`w-full flex justify-between  gap-4 items-center p-4`}>
        {/*  */}
        <div className="w-fit flex gap-4 justify-start items-center">
          <img
            src={isClicked ? `${item.img}-red.webp` : `${item.img}-gray.webp`}
            alt={item.title}
            className="w-10 h-10"
          />
          <span>{item.title}</span>
        </div>
        <motion.div
          initial={"closed"}
          animate={isClicked ? "open" : "closed"}
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
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </div>
      {/*  */}
      <Collapse isOpened={open === index}>
        <div className="w-full py-6 px-4 flex flex-col gap-6">
          <span>{itemData.desc}</span>

          {itemData.list.map((item: any) => (
            <span
              key={item}
              className="w-full pl-3 border-l-4 border-orange-500"
            >
              {item}
            </span>
          ))}
        </div>
      </Collapse>
    </div>
  );
};
