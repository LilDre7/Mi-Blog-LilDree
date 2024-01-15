import { useEffect, useState } from 'react';
import '../css/navStyle.css';

const NavLinks = () => {
  useEffect(() => {
    // Obtén la ruta actual
    const currentPath = window.location.pathname;

    // Obtén todos los elementos de enlace dentro de la lista
    const links = document.querySelectorAll('.link-menu');

    // Itera sobre los enlaces y compara las rutas
    links.forEach((link) => {
      // Obtén la ruta del enlace
      const linkPath = link.getAttribute('href');

      // Compara las rutas
      if (currentPath === linkPath) {
        // Agrega las clases de Tailwind al enlace activo
        link.classList.add('text-red-600', 'bg-blue-500');
      }
    });
  }, []);

  return (
    <section className="list-menu">
      <ul className="list-ul flex flex-col md:flex md:flex-row">
        <li className="list-li overflow-hidden p-2 md:p-3 text-base font-normal">
          <a className="link-menu text-[#a1a09a] block w-full" href="/">
            Home
          </a>
        </li>
        <li className="list-li overflow-hidden p-2 md:p-3 text-base font-normal">
          <a className="link-menu text-[#a1a09a] block w-full" href="/About/">
            About
          </a>
        </li>
        <li className="list-li overflow-hidden p-2 md:p-3 text-base font-normal">
          <a className="link-menu text-[#a1a09a] block w-full" href="/Blog/">
            Blog
          </a>
        </li>
        <li className="list-li overflow-hidden p-2 md:p-3 text-base font-normal">
          <a className="link-menu text-[#a1a09a] block w-full" href="/Gear/">
            Gear
          </a>
        </li>
      </ul>
    </section>
  );
};

const Menu = () => {
  return (
    <div className="flex items-center gap-2 pr-3">
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
      <nav className="flex sm:justify-between cursor-pointer">
        <div className="hidden md:flex items-center gap-1">
          <NavLinks />
        </div>
        <div className="md:hidden">
          <button className="cursor-pointer" onClick={handleClickNav}>
            {isOpen ? <Menu /> : <Menu />}
          </button>
        </div>
      </nav>
      <div className="relative w-full">
        {isOpen && (
          <div className="absolute bg-[#000] transition-shadow duration-150 w-36 sm:w-full sm:relative -translate-x-20 translate-y-2 rounded-xl z-50">
            <NavLinks />
          </div>
        )}
      </div>
    </>
  );
};

export default NavResponsive;
