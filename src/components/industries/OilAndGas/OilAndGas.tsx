import RequestForServices from "../../shared/RequestForServices";
import { OilAndGasData } from "../IndustriesData";
import IndustriesBanner from "../components/IndustriesBanner";
import IndustriesOurOfferings from "../components/IndustriesOurOfferings";
import IndustriesOverview from "../components/IndustriesOverview";
import IndustriesSuccessStories from "../components/IndustriesSuccessStories";
import { Helmet } from "react-helmet";

export default function OilAndGas() {
  return (
    <>
      <Helmet>
        <title>Quadcorp Labs - Marinetime</title>
        <meta
          name="description"
          content="AI Solutions for Oil and Gas Industries."
        />
      </Helmet>
      <div className="w-full flex  items-center flex-col">
        <div className="w-full h-[50vh] md:h-screen relative flex justify-center items-center ">
          <img
            src={OilAndGasData.bannerImage}
            alt=" Oil and Gas Industries"
            className="absolute inset-0 -z-10  w-full h-full object-cover brightness-[.2]"
          />
          {/* Banner */}
          <IndustriesBanner
            title={OilAndGasData.title}
            heading={OilAndGasData.bannerHeading}
          />
        </div>
        {/* Overview */}
        <IndustriesOverview overview={OilAndGasData.overview} />
        {/* success stories */}
        <IndustriesSuccessStories
          link="oilandgas"
          successStories={OilAndGasData.successStories}
        />
        {/* our offerings */}
        <IndustriesOurOfferings offerings={OilAndGasData.offerings} />
        {/* request for services */}
        <RequestForServices
          buttonColor="bg-violet-500"
          text="Services"
          query="Oil and Gas Industries"
        />
      </div>
    </>
  );
}
