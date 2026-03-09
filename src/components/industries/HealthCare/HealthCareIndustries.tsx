import RequestForServices from "../../shared/RequestForServices";
import { HealthCareIndustriesData } from "../IndustriesData";
import IndustriesBanner from "../components/IndustriesBanner";
import IndustriesOurOfferings from "../components/IndustriesOurOfferings";
import IndustriesOverview from "../components/IndustriesOverview";
import IndustriesSuccessStories from "../components/IndustriesSuccessStories";
import { Helmet } from "react-helmet";

export default function HealthCareIndustries() {
  return (
    <>
      <Helmet>
        <title>Affirmity Corp - HealthCare Industries</title>
        <meta
          name="description"
          content="AI Solutions for HealthCare Industries."
        />
      </Helmet>
      <div className="w-full flex  items-center flex-col">
        <div className="w-full h-[50vh] md:h-screen relative flex justify-center items-center ">
          <img
            src={HealthCareIndustriesData.bannerImage}
            alt=" HealthCare Industries "
            className="absolute inset-0 -z-10  w-full h-full object-cover brightness-[.4]"
          />
          {/* Banner */}
          <IndustriesBanner
            title={HealthCareIndustriesData.title}
            heading={HealthCareIndustriesData.bannerHeading}
          />
        </div>
        {/* Overview */}
        <IndustriesOverview overview={HealthCareIndustriesData.overview} />
        {/* success stories */}
        <IndustriesSuccessStories
          link="healthcare"
          successStories={HealthCareIndustriesData.successStories}
        />
        {/* our offerings */}
        <IndustriesOurOfferings
          offerings={HealthCareIndustriesData.offerings}
        />
        {/* request for services */}
        <RequestForServices
          buttonColor="bg-violet-500"
          text="Services"
          query="Heathcare Industries "
        />
      </div>
    </>
  );
}
