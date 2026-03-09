import Marquee from "react-fast-marquee";

export default function ClientLogo() {
  const logos = [
    "hapori-coach.svg",
    "ia.svg",
    "ima.svg",
    "iocl.svg",
    "manit.svg",
    "mpcst-logo.svg",
    "mpsedc.svg",
    "mpt.svg",
    "ota.svg",
    "Territorial_Army_Crest.svg",
  ];

  return (
    <div className="w-full flex flex-col gap-10 md:gap-20  pt-20 md:py-20">
      <div className="w-full flex justify-center items-center  ">
        <span className="text-2xl md:text-[40px] font-semibold text-002E62 ">
          Our Collaborations
        </span>
      </div>
      <Marquee direction="left" speed={100}>
        {logos.map((logo) => (
          <img
            key={logo}
            src={`/client/${logo}`}
            alt={`${logo}`}
            className="md:w-[200px] md:h-[150px] object-fill object-center mx-10  w-[100px] h-[150px]"
          />
        ))}
        {/* <div className=" flex gap-24 justify-center items-center py-2 h-[250px]  "></div> */}
      </Marquee>
    </div>
  );
}
