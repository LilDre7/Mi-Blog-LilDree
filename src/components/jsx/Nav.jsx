import { useEffect, useState } from "react";
import "@fontsource/macondo-swash-caps";
import "@fontsource-variable/lora";

const Nav = () => {
  const [navRespon, setNavRespon] = useState(false);

  const handleClickNav = () => {
    setNavRespon(!navRespon);
  };

  return (
    <header
      style={{
        fontFamily: "Lora Variable",
      }}
      className={"w-full fixed top-0 left-0 z-50 h-[50px] bg-white shadow-lg"}
    >
      <div className="flex justify-between items-center h-full px-5 md:px-10">
        <h1 className="text-2xl">
          <a href="">Blog Lil Dree</a>
        </h1>
        <i
          onClick={handleClickNav}
          className="bx bx-menu-alt-right bx-fade-left text-3xl cursor-pointer"
        ></i>
      </div>
      <nav
        className={`absolute top-full ${
          navRespon ? "left-0 z-50 min-h-screen " : "-left-full"
        } duration-300 flex flex-col gap-5 font-[600] bg-[#f5f0e8] min-h-screen w-full justify-center items-center text-3xl md:static md:flex md:flex-row md:gap-10 md:w-auto md:min-h-0 md:bg-transparent md:text-base md:items-center md:text-white md:p-0`}
      >
        <ul>
          <li>Home</li>
          <li>Blog</li>
          <li>Contactme</li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
