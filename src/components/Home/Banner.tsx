function Banner() {
  return (
    <>
      <MediumBanner />
      <MobileBanner />
    </>
  );
}

export default Banner;

const MobileBanner = () => {
  return (
    <div className="w-full md:hidden flex  py-20  px-6">
      <div className="w-full grid grid-cols-2  gap-x-4 gap-y-8">
        <div className="flex w-full  flex-col gap-2 justify-center items-center  ">
          <div className="flex items-center">
            <span className="text-5xl font-thin text-002E62 leading-none">
              3
            </span>
            <span className="text-3xl font-thin text-002E62 leading-none">
              +
            </span>
          </div>
          <span className="font-thin text-002E62">Years of R&D</span>
        </div>
        <div className="flex w-full  flex-col gap-2 justify-center items-center ">
          <div className="flex items-center">
            <span className="text-5xl font-thin text-002E62 leading-none">
              20
            </span>
            <span className="text-3xl font-thin text-002E62 leading-none">
              +
            </span>
          </div>
          <span className="font-thin text-002E62">Team Members</span>
        </div>
        <div className="flex w-full  flex-col gap-2 justify-center items-center ">
          <div className="flex items-center">
            <span className="text-5xl font-thin text-002E62 leading-none">
              3
            </span>
          </div>
          <span className="font-thin text-002E62">Global Locations</span>
        </div>
        <div className="flex w-full  flex-col gap-2 justify-center items-center ">
          <div className="flex items-center">
            <span className="text-5xl font-thin text-002E62 leading-none">
              2x
            </span>
          </div>
          <span className="font-thin text-002E62">Annual Growth</span>
        </div>
        <div className="flex w-full  flex-col gap-2 justify-center items-center ">
          <div className="flex items-center">
            <span className="text-5xl font-thin text-002E62 leading-none">
              95
            </span>
            <span className="text-3xl font-thin text-002E62 leading-none">
              %
            </span>
          </div>
          <span className="font-thin text-002E62">Repeat Business</span>
        </div>
        <div className="flex w-full  flex-col gap-2 justify-center items-center ">
          <div className="flex items-center">
            <span className="text-5xl font-thin text-002E62 leading-none">
              100
            </span>
            <span className="text-3xl font-thin text-002E62 leading-none">
              %
            </span>
          </div>
          <span className="font-thin text-002E62">Bootstrapped</span>
        </div>
      </div>
    </div>
  );
};

const MediumBanner = () => {
  return (
    <div className="hidden w-full md:flex flex-col gap-20 pt-20 md:py-20">
      <div
        className=" w-full    px-6  md:px-10  min-[1280px]:px-4    z-10 flex gap-8 
      flex-row justify-evenly items-center  "
      >
        <div className="flex w-fit flex-col gap-2 justify-center items-center ">
          <div className="flex items-center">
            <span className="text-[7vw] font-thin text-002E62 leading-none">
              3
            </span>
            <span className="text-6xl font-thin text-002E62 leading-none">
              +
            </span>
          </div>
          <span className="font-thin text-002E62">Years of R&D</span>
        </div>
        <div className="flex w-fit flex-col gap-2 justify-center items-center ">
          <div className="flex items-center">
            <span className="text-[7vw] font-thin text-002E62 leading-none">
              20
            </span>
            <span className="text-6xl font-thin text-002E62 leading-none">
              +
            </span>
          </div>
          <span className="font-thin text-002E62">Team Members</span>
        </div>
        <div className="flex w-fit flex-col gap-2 justify-center items-center ">
          <span className="text-[7vw] font-thin text-002E62 leading-none">
            1
          </span>

          <span className="font-thin text-002E62">Global Partner</span>
        </div>
      </div>
      <div
        className="w-full    px-6  md:px-10  min-[1280px]:px-4   z-10 flex gap-8 
      flex-row justify-evenly items-center  cursor-grab"
      >
        <div className="flex w-fit flex-col gap-2 justify-center items-center ">
          <div className="flex items-center">
            <span className="text-[7vw] font-thin text-002E62 leading-none">
              100
            </span>
            <span className="text-6xl font-thin text-002E62 leading-none">
              %
            </span>
          </div>
          <span className="font-thin text-002E62">Indigenously Developed</span>
        </div>
        <div className="flex w-fit flex-col gap-2 justify-center items-center ">
          <div className="flex items-center">
            <span className="text-[7vw] font-thin text-002E62 leading-none">
              100
            </span>
            <span className="text-6xl font-thin text-002E62 leading-none">
              %
            </span>
          </div>
          <span className="font-thin text-002E62">Bootstrapped</span>
        </div>
        <div className="flex w-fit flex-col gap-2 justify-center items-center ">
          <span className="text-[7vw] font-thin text-002E62 leading-none">
            3
          </span>

          <span className="font-thin text-002E62">National Locations</span>
        </div>
      </div>
    </div>
  );
};
