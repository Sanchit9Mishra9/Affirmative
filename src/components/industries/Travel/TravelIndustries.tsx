import RequestForServices from "../../shared/RequestForServices";
import { TravelIndustriesData } from "../IndustriesData";
import IndustriesBanner from "../components/IndustriesBanner";
import IndustriesOurOfferings from "../components/IndustriesOurOfferings";
import IndustriesOverview from "../components/IndustriesOverview";
import IndustriesSuccessStories from "../components/IndustriesSuccessStories";
import { Helmet } from "react-helmet";
export default function TravelIndustries() {
  return (
    <>
      <Helmet>
        <title>Affirmity Corp - Travel Industries</title>
        <meta
          name="description"
          content="Orchestrating Personalized Journeys in Travel & Hospitality"
        />
      </Helmet>
      <div className="w-full flex  items-center flex-col">
        <div className="w-full h-[50vh] md:h-screen relative flex justify-center items-center ">
          <img
            src={TravelIndustriesData.bannerImage}
            alt="  Travel Industries "
            className="absolute inset-0 -z-10  w-full h-full object-cover brightness-75"
          />
          {/* Banner */}
          <IndustriesBanner
            title={TravelIndustriesData.title}
            heading={TravelIndustriesData.bannerHeading}
          />
        </div>
        {/* Overview */}
        <IndustriesOverview overview={TravelIndustriesData.overview} />
        {/* success stories */}
        <IndustriesSuccessStories
          link="travel"
          successStories={TravelIndustriesData.successStories}
        />
        {/* our offerings */}
        <IndustriesOurOfferings offerings={TravelIndustriesData.offerings} />
        {/* request for services */}
        <RequestForServices
          buttonColor="bg-violet-500"
          text="Services"
          query="Travel Industries"
        />
      </div>
    </>
  );
}
