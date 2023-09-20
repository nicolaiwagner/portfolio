import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const [scrollY, setScrollY] = useState(0);
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  console.log(scrollY);

  const Links = () => {
    return (
      <div className="hidden md:flex w-1/5 justify-around text-xl flex-end">
        <a href="#">Work</a>
        <a href="#aboutLink">About</a>
        <a href="#">Contact</a>
      </div>
    );
  };

  return (
    <>
      <Sidebar isOpen={isOpen} />
      <header
        className={`bg-dark-background fixed top-0 z-[15] mx-auto flex w-full items-center justify-between p-8 font-fatface text-egg-white border-b-2 ${
          scrollY > 10 && "backdrop-blur-lg"
        }`}
      >
        <div className="flex flex-row ">
          <a href="#" className=" text-xl md:text-3xl">
            Nicolai Wagner
          </a>
        </div>
        <Links />

        <div className="md:hidden">
          <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </header>
      {isOpen && (
        <div>
          <Links />
        </div>
      )}
    </>
  );
};

export default Header;
