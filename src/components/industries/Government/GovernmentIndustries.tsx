import RequestForServices from "../../shared/RequestForServices";
import { GovernmentIndustriesData } from "../IndustriesData";
import IndustriesBanner from "../components/IndustriesBanner";
import IndustriesOurOfferings from "../components/IndustriesOurOfferings";
import IndustriesOverview from "../components/IndustriesOverview";
import IndustriesSuccessStories from "../components/IndustriesSuccessStories";
import { Helmet } from "react-helmet";

export default function GovernmentIndustries() {
  return (
    <>
      <Helmet>
        <title>Quadcorp Labs - Emergency Services</title>
        <meta
          name="description"
          content="AI Solutions for Government Industries."
        />
      </Helmet>
      <div className="w-full flex  items-center flex-col">
        <div className="w-full h-[50vh] md:h-screen relative flex justify-center items-center ">
          <img
            src={GovernmentIndustriesData.bannerImage}
            alt="Government Industries "
            className="absolute inset-0 -z-10  w-full h-full object-cover object-center brightness-[.3] "
          />
          {/* Banner */}
          <IndustriesBanner
            title={GovernmentIndustriesData.title}
            heading={GovernmentIndustriesData.bannerHeading}
          />
        </div>
        {/* Overview */}
        <IndustriesOverview overview={GovernmentIndustriesData.overview} />
        {/* success stories */}
        <IndustriesSuccessStories
          link="government"
          successStories={GovernmentIndustriesData.successStories}
        />
        {/* our offerings */}
        <IndustriesOurOfferings
          offerings={GovernmentIndustriesData.offerings}
        />
        {/* request for services */}
        <RequestForServices
          buttonColor="bg-violet-500"
          text="Services"
          query="Government Industries"
        />
      </div>
    </>
  );
}
