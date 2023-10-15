import React, { useEffect, useState } from "react";
import "@fontsource/macondo-swash-caps";

const Nav = () => {
  const [navRespon, setNavRespon] = useState(false);

  const handleClickNav = () => {
    setNavRespon(!navRespon);
    console.log("No funciona");
  };

  return (
    <>
      <i
        onClick={handleClickNav}
        className="bx bx-menu md:hidden cursor-pointer bg-slate-400/25 p-1 rounded-[3px] text-xl"
      ></i>
      <nav
        className={` text-white  ${
          navRespon ? "left-0 z-50 min-h-screen" : "-left-full  bg-red-50 "
        } duration-300 flex flex-col gap-5 font-[600] bg-[#f5f0e8] min-h-screen w-full justify-center items-center text-3xl md:static md:flex md:flex-row md:gap-10 md:w-auto md:min-h-0 md:bg-transparent md:text-base md:items-center md:text-white md:p-0`}
      >
        <h2>hello Wordl</h2>
      </nav>
    </>
  );
};

export default Nav;
