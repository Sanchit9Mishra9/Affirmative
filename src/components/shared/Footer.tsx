import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
export default function Footer() {
  return (
    <div className="w-full flex justify-center  " id="contact">
      <div className="w-full max-w-7xl py-10 px-6  md:px-10 min-[1280px]:px-4  flex flex-col md:flex-row  gap-10 ">
        <div className="w-full md:w-1/2  flex flex-col  gap-6 justify-between  ">
          <span className="text-[22px] md:text-3xl py-6 ">
            {`Guardian of Tomorrow’s Battlefield`.toUpperCase()}
          </span>
          <div className="w-full flex flex-col gap-10 ">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 ">
              <ul className="w-full flex flex-col gap-6">
                <li className="">
                  <Link to="/company">Company</Link>
                </li>
                <li className="">
                  <Link to="/careers">Careers</Link>
                </li>
                <li className="">
                  <Link to="/contact">Contact</Link>
                </li>

                <li className="">
                  <Link to="/sitemap">Sitemap</Link>
                </li>
              </ul>

              <ul className="w-full flex flex-col gap-6">
                <li className="">
                  <Link to="/privacy-statements">Privacy Statement</Link>
                </li>
                <li className="">
                  <Link to="/terms-of-use">Terms of Use</Link>
                </li>
                <li className="">
                  <Link to="/cookies"> Cookie Policy/Settings</Link>
                </li>
              </ul>
            </div>
            <span>© 2025 Quadcorp Labs Private Limited.</span>
          </div>
        </div>

        <div className="w-full md:w-1/2  flex justify-center items-center  ">
          <span className="text-4xl md:text-[5vw] font-semibold ">
            <Typewriter
              options={{
                strings: ["Precision".toUpperCase(), "Power".toUpperCase(), "Strike".toUpperCase()],
                autoStart: true,
                loop: true,
                deleteSpeed: 100,
              }}
            />
          </span>
        </div>
      </div>
    </div>
  );
}
