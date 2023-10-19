import { useEffect, useState } from "react";
import "@fontsource/macondo-swash-caps";
import "@fontsource-variable/lora";
import "../css/nav.css";

const Nav = () => {
  const [navRespon, setNavRespon] = useState(false);

  const handleClickNav = () => {
    setNavRespon(!navRespon);
  };

  return (
    // <h2 className="text-3xl md:text-4xl">Blog Lil Dre</h2>
    <nav
      style={{
        fontFamily: "Lora Variable",
      }}
      className={` text-white absolute top-full ${
        navRespon ? "left-0 z-50 min-h-screen dark:text-white" : "-left-full"
      } duration-300 flex flex-col gap-5 font-[600] bg-[#f5f0e8] min-h-screen w-full justify-center items-center text-3xl md:static md:flex md:flex-row md:gap-10 md:w-auto md:min-h-0 md:bg-transparent md:text-base md:items-center md:text-white md:p-0`}
    >
      <label onClick={handleClickNav} htmlFor="burger" className="burger">
        <input id="burger" type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
      </label>

      <ul className="flex flex-col md:flex-row justify-around items-center md:space-x-4">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Blog</li>
      </ul>
    </nav>
  );
};

export default Nav;
