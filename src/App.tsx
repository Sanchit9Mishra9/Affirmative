/* eslint-disable @typescript-eslint/no-unused-vars */
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/shared/Footer";
import Error from "./components/shared/Error";
import ScrollToTop from "./lib/ScrollToTop";
import NavBar from "./components/shared/Navbar/NavBar";
import TopScroll from "./components/shared/TopScroll";
import Contact from "./components/contact/Contact";
import ContactForm from "./components/contact/ContactForm";
import { AnimatePresence } from "framer-motion";
import AerospaceIndustries from "./components/industries/Aerospace/AerospaceIndustries";
import GovernmentIndustries from "./components/industries/Government/GovernmentIndustries";
import TravelIndustries from "./components/industries/Travel/TravelIndustries";
import HealthCareIndustries from "./components/industries/HealthCare/HealthCareIndustries";
import AerospaceSuccessStories from "./components/industries/Aerospace/AerospaceSuccessStories";
import InsightsPageOne from "./components/insights/InsightsPageOne";
import TechnicalConsulting from "./components/Services/consulting/TechnicalConsulting";
import ManagementConsulting from "./components/Services/consulting/ManagementConsulting";
import ArtificialInteligence from "./components/Services/technology/ArtificialInteligence";
import ComputingDevices from "./components/Services/manufacturing/ComputingDevices";
import DronesUAVs from "./components/Services/manufacturing/DronesUAVs";
import LoiteringMunitions from "./components/Services/manufacturing/LoiteringMunitions";
import GSS from "./components/solutions/solutions/GSS";
import InsightsPageTwo from "./components/insights/InsightsPageTwo";
import InsightsPageThree from "./components/insights/InsightsPageThree";
import InsightsPageFour from "./components/insights/InsightsPageFour";
import AboutUs from "./components/AboutUs/AboutUs";
import Intellipad from "./components/solutions/products/Intelipad";
import Intellicube from "./components/solutions/products/Intelicube";
import Shoora from "./components/solutions/products/Shoora";
import Skydeck from "./components/solutions/products/Skydeck";
import Acumen from "./components/solutions/products/Acumen";
import IronBeam from "./components/solutions/r&d/IronBeam";
import AIWeaponry from "./components/solutions/r&d/AIWeaponry";
import AntiMineVehicle from "./components/solutions/r&d/AntiMineVehicle";
import Seeker from "./components/solutions/solutions/Seeker";
import Foreguard from "./components/solutions/solutions/Foreguard";
import PSS from "./components/solutions/solutions/PSS";
import DFA from "./components/solutions/solutions/DFA";
import SarvaDrishti from "./components/solutions/solutions/SarvaDrishti";
import CMS from "./components/solutions/solutions/CMS";
import ApplicationDevelopment from "./components/Services/technology/ApplicationDevelopment";
import DataAndInsights from "./components/Services/technology/DataAndInsights";
import GovernmentSuccessStories from "./components/industries/Government/GovernmentSuccessStories";
import Innovation from "./components/insights/Innovation";
import OilAndGas from "./components/industries/OilAndGas/OilAndGas";
import Careers from "./components/careers/Careers";
import InsightsPageFive from "./components/insights/InsightsPageFive";
import InsightsPageSix from "./components/insights/InsightsPageSix";
import InsightsPageSeven from "./components/insights/InsightsPageSeven";
import InsightsPageEight from "./components/insights/InsightsPageEight";
import Cookies from "./components/shared/Cookies";
import TermsOfUse from "./components/shared/TermsOfUse";
import PrivacyStatement from "./components/shared/PrivacyStatement";
import RIDronde from "./components/solutions/uac/RIDrone";
import HealthCareSuccessStories from "./components/industries/HealthCare/HealthCareSuccessStories";
import TravelSuccessStories from "./components/industries/Travel/TravelSuccessStories";
import OilAndGasSuccessStories from "./components/industries/OilAndGas/OilAndGasSuccessStories";
import Sitemap from "./components/shared/SiteMap";
import ApplyJobs from "./components/careers/ApplyJobs";
import { Toaster } from "react-hot-toast";
import { useContext } from "react";
import { GlobalContext } from "./lib/GlobalContextProvider";
import Loading from "./components/shared/Loading";

function App() {
  const { loading } = useContext(GlobalContext!) || {};

  return (
    <main className="w-full  flex flex-col !scroll-smooth overflow-hidden relative">
      {/* <TopAddress /> */}
      <TopScroll />
      <NavBar />
      <ScrollToTop />
      {loading && <Loading />}
      <Toaster />
      <AnimatePresence mode="wait">
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* industries */}
          <Route
            path="/industries/aerospace-and-defence"
            element={<AerospaceIndustries />}
          />
          <Route
            path="/industries/aerospace-and-defence/success-stories/:id"
            element={<AerospaceSuccessStories />}
          />
          <Route
            path="/industries/government/success-stories/:id"
            element={<GovernmentSuccessStories />}
          />
          <Route
            path="/industries/healthcare/success-stories/:id"
            element={<HealthCareSuccessStories />}
          />
          <Route
            path="/industries/travel/success-stories/:id"
            element={<TravelSuccessStories />}
          />
          <Route
            path="/industries/oilandgas/success-stories/:id"
            element={<OilAndGasSuccessStories />}
          />
          <Route path="/industries/travel" element={<TravelIndustries />} />

          <Route
            path="/industries/government"
            element={<GovernmentIndustries />}
          />

          <Route
            path="/industries/healthcare"
            element={<HealthCareIndustries />}
          />

          <Route path="/industries/oilandgas" element={<OilAndGas />} />

          {/* Services */}
          <Route
            path="/services/technology-consulting"
            element={<TechnicalConsulting />}
          />
          <Route
            path="/services/management-consulting"
            element={<ManagementConsulting />}
          />
          <Route
            path="/services/artificial-intelligence"
            element={<ArtificialInteligence />}
          />
          <Route
            path="/services/application-development"
            element={<ApplicationDevelopment />}
          />
          <Route path="/services/data-insights" element={<DataAndInsights />} />
          <Route
            path="/services/computing-devices"
            element={<ComputingDevices />}
          />
          <Route path="/services/drones-uav" element={<DronesUAVs />} />
          <Route
            path="/services/loitering-munitions"
            element={<LoiteringMunitions />}
          />

          {/* Solutions */}

          <Route path="/solutions/gss" element={<GSS />} />
          <Route path="/solutions/intellicube" element={<Intellicube />} />
          <Route path="/solutions/intellipad" element={<Intellipad />} />
          <Route path="/solutions/shoora" element={<Shoora />} />
          <Route path="/solutions/skydeck" element={<Skydeck />} />
          <Route path="/solutions/acumen" element={<Acumen />} />
          <Route path="/solutions/ironbeam" element={<IronBeam />} />
          <Route
            path="/solutions/antimine-vehicle"
            element={<AntiMineVehicle />}
          />
          <Route path="/solutions/aiweaponry" element={<AIWeaponry />} />
          <Route path="/solutions/seeker" element={<Seeker />} />
          <Route path="/solutions/foreguard" element={<Foreguard />} />
          <Route path="/solutions/pss" element={<PSS />} />
          <Route path="/solutions/dfa" element={<DFA />} />
          <Route path="/solutions/sarvadrishti" element={<SarvaDrishti />} />
          <Route path="/solutions/cms" element={<CMS />} />
          <Route path="/solutions/ridrone" element={<RIDronde />} />

          {/* Reports */}

          <Route path="/innovation" element={<Innovation />} />
          <Route path="/insights/one" element={<InsightsPageOne />} />
          <Route path="/insights/two" element={<InsightsPageTwo />} />
          <Route path="/insights/three" element={<InsightsPageThree />} />
          <Route path="/insights/four" element={<InsightsPageFour />} />
          <Route path="/insights/five" element={<InsightsPageFive />} />
          <Route path="/insights/six" element={<InsightsPageSix />} />
          <Route path="/insights/seven" element={<InsightsPageSeven />} />
          <Route path="/insights/eight" element={<InsightsPageEight />} />

          <Route path="/contact" element={<Contact />} />
          <Route
            path="/contact/request-for-contact"
            element={<ContactForm />}
          />

          <Route path="/company" element={<AboutUs />} />

          <Route path="/careers" element={<Careers />} />
          <Route path="/careers/job/:jobid" element={<ApplyJobs />} />

          <Route path="/cookies" element={<Cookies />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/privacy-statements" element={<PrivacyStatement />} />
          <Route path="/sitemap" element={<Sitemap />} />

          {/* Error */}
          <Route path="*" element={<Error />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </main>
  );
}

export default App;
