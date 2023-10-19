import { useEffect, useState } from "react";
import "@fontsource/macondo-swash-caps";
import "@fontsource-variable/lora";
import "../css/nav.css";

const Nav = () => {
  const [navRespon, setNavRespon] = useState(true);

  const handleClickNav = () => {
    setNavRespon(!navRespon);
  };

  return (
    <>
      <nav
        style={{
          fontFamily: "Lora Variable",
        }}
        className={` bg-[#e5e5e5] w-full flex justify-between items-center h-16 p-2 border-2 border-b-[#00000056]  ${
          navRespon ? "" : ""
        }  `}
      >
        <h2 className="text-3xl md:text-4xl">Blog Lil Dre</h2>
        <label onClick={handleClickNav} for="burger" class="burger">
          <input id="burger" type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
        </label>
      </nav>
    </>
  );
};

export default Nav;
