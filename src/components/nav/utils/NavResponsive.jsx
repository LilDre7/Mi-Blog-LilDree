import React, { useState } from 'react';

const Menu = () => {
  return (
    <div className="flex items-center gap-1">
      <h5 className="text-[#A1A09A] text-base">Menu</h5>
      <img src="/images/pngIcons/iconPlus.png" alt="icons plus" />
    </div>
  );
};

const NavLinks = () => {
  return (
    <div className="w-1/3">
      <ul className="flex flex-col md:flex-row gap-3 text-center w-full bg-[#000] text-[#e2e1da] font-semibold text-[16px] p-4 rounded-xl">
        <li>Home</li>
        <li>About</li>
        <li>Blog</li>
        <li>Gear</li>
      </ul>
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
      <div className="relative w-full ">
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
