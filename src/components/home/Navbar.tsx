import { Link } from "react-router-dom";
import { menu } from "../../assets/home";
import Button from "../global/Button";
import { useState } from "react";

import { motion } from "framer-motion";

type Props = {
  logo: string;
  fontColor?: string;
};

const navList = [
  { name: "About", link: "/" },
  { name: "Roadmap", link: "/roadmap" },
  { name: "FAQs", link: "/" },
  { name: "NFT marketplace", link: "/" },
];

const navbar = ({ logo, fontColor }: Props) => {
  const [showNav, setShowNav] = useState(false);

  return (
    <motion.div
      initial={{ y: -1000 }} // Initial position above the viewport
      animate={{ y: 0 }} // Animate to the top of the viewport
      transition={{ duration: 1.3, damping: 15}}
      className="relative"
    >
      <div className="flex justify-between items-center w-[90%] mx-auto my-8">
        <div>
          <img src={logo} alt="Earth Logo" />
        </div>
        <ul
          className={`lg:flex gap-7 font-semibold text-[#1E0734] font-["Poppins"] hidden text-[${fontColor}]`}
        >
          {navList.map((nav) => (
            <Link to={nav.link} key={nav.name}>
              {nav.name}
            </Link>
          ))}
        </ul>
        <div className="hidden lg:block">
          <Button buttonType="button" text="Join Community" />
        </div>
        <img
          src={menu}
          alt="menu"
          className="lg:hidden"
          onClick={() => setShowNav(!showNav)}
        />
      </div>
      {showNav && (
        <ul
          className={`flex flex-col justify-center items-center w-full absolute gap-5 py-5 z-10 font-semibold bg-white text-[#1E0734]`}
        >
          {navList.map((nav) => (
            <Link to={nav.link} key={nav.name}>
              {nav.name}
            </Link>
          ))}
        </ul>
      )}
    </motion.div>
  );
};

export default navbar;
