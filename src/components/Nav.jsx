import { useState } from "react";
import "@fontsource/macondo-swash-caps";
import "@fontsource-variable/lora";

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
          navRespon ? "bg-black" : "bg-orange-600"
        }  `}
      >
        <h2 className="text-3xl md:text-4xl">Blog Lil Dre</h2>

        <i
          onClick={handleClickNav}
          className="bx bx-menu text-4xl text-[#00000056] md:block cursor-pointer "
        ></i>
      </nav>
    </>
  );
};

export default Nav;
