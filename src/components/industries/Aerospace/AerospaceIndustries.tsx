import RequestForServices from "../../shared/RequestForServices";
import { AerospaceAndDefenceIndustriesData } from "../IndustriesData";
import IndustriesBanner from "../components/IndustriesBanner";
import IndustriesOurOfferings from "../components/IndustriesOurOfferings";
import IndustriesOverview from "../components/IndustriesOverview";
import IndustriesSuccessStories from "../components/IndustriesSuccessStories";
import { Helmet } from "react-helmet";

export default function AerospaceIndustries() {
  return (
    <>
      <Helmet>
        <title>Quadcorp Labs - Aerospace and Defence Industries</title>
        <meta
          name="description"
          content="Transformative Solutions for Defence."
        />
      </Helmet>
      <div className="w-full flex  items-center flex-col">
        <div className="w-full h-[50vh] md:h-screen relative flex justify-center items-center ">
          <img
            src={AerospaceAndDefenceIndustriesData.bannerImage}
            alt="Aerospace and Defence Industries "
            className="absolute inset-0 -z-10  w-full h-full object-cover brightness-[.4]"
          />
          {/* Banner */}
          <IndustriesBanner
            title={AerospaceAndDefenceIndustriesData.title}
            heading={AerospaceAndDefenceIndustriesData.bannerHeading}
          />
        </div>
        {/* Overview */}
        <IndustriesOverview
          overview={AerospaceAndDefenceIndustriesData.overview}
        />
        {/* success stories */}
        <IndustriesSuccessStories
          link="aerospace-and-defence"
          successStories={AerospaceAndDefenceIndustriesData.successStories}
        />
        {/* our offerings */}
        <IndustriesOurOfferings
          offerings={AerospaceAndDefenceIndustriesData.offerings}
        />
        {/* request for services */}
        <RequestForServices
          buttonColor="bg-violet-500"
          text="Services"
          query="Aerospace and Defence Industries"
        />
      </div>
    </>
  );
}
