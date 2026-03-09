import { useEffect, useState } from "react";
import Hamburger from "./Hamburger";
import RightSideOptions from "./RightSideOptions";
import LeftSideOptions from "./LeftSideOptions";
import OnHoverSubMenu from "./OnHoverSubMenu";
import MobileMenu from "./MobileMenu";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [currentSublink, setCurrentSublink] = useState<string>("");

  const [clicked, setClicked] = useState(false);
  const [inHover, setInHover] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 8;
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled);
      }
    };

    document.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <nav
      className={`fixed z-[9999] w-full  text-002E62 flex flex-col  justify-center items-center transition-all duration-500 ease-in-out font-medium  ${scrolled
        ? "bg-white bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-90 "
        : open
          ? "bg-white bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-90 "
          : "bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 "
        }`}
    >
      <div className="max-w-7xl min-h-full flex justify-between items-center  w-full px-6 md:px-10 min-[1280px]:px-4 ">
        {/* left side  */}
        <LeftSideOptions
          open={open}
          setOpen={setOpen}
          setCurrentSublink={setCurrentSublink}
          inHover={inHover}
          setInHover={setInHover}
        />
        {/* right side  */}
        <RightSideOptions />

        {/* Mobile Nav Links  */}
        {/* HamBurger */}
        <Hamburger clicked={clicked} setClicked={setClicked} />
        {/* Mobile Menu  */}

        {/* Mobile Nav Links */}
        <MobileMenu clicked={clicked} setClicked={setClicked} />
      </div>
      {/* on hover sub menu */}
      <OnHoverSubMenu
        open={open}
        setOpen={setOpen}
        currentSublink={currentSublink}
        inHover={inHover}
        setInHover={setInHover}
      />
    </nav>
  );
};

export default NavBar;
