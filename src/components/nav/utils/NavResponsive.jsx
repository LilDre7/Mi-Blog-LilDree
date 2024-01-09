import { useState } from 'react';

const NavLinks = () => {
  return (
    <div class="w-1/3">
      <ul class="flex flex-col md:flex-row gap-3 text-center w-full bg-[#000] text-[#e2e1da] font-semibold text-[16px] p-4 rounded-xl">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/About/">About</a>
        </li>
        <li>
          <a href="/Blog/">Blog</a>
        </li>
        <li>
          <a href="/Gear/">Gear</a>
        </li>
      </ul>
    </div>
  );
};

const Menu = () => {
  return (
    <div className="flex items-center gap-1">
      <h5 className="text-[#A1A09A] text-base">Menu</h5>
      <img src="/images/pngIcons/iconPlus.png" alt="icons plus" />
    </div>
  );
};

const NavResponsive = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="w-1/3 flex justify-end">
        <div className="hidden w-full justify-between md:flex">
          <NavLinks />
        </div>
        <div className="md:hidden">
          <button onClick={handleClickNav}>
            {isOpen ? <Menu /> : <Menu />}
          </button>
        </div>
      </nav>
      <div className="relative w-full z-50">
        {isOpen && (
          <div className="absolute bg-[#000] w-36 -translate-x-36 translate-y-6 rounded-xl">
            <NavLinks />
          </div>
        )}
      </div>
    </>
  );
};

export default NavResponsive;
