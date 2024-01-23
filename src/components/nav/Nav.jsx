import { useEffect, useState } from 'react';
import NavResponsive from './utils/NavResponsive';
import Moon from './icons/Moon';
import Sun from './icons/Sun';
import './css/navStyle.css';

const Nav = () => {
  const [isTheme, setIsTheme] = useState(
    localStorage.getItem('theme') || 'light',
  );

  useEffect(() => {
    // Aplica el tema al cargar la página
    applyTheme();

    // Guarda el tema en localStorage cada vez que cambia
    localStorage.setItem('theme', isTheme);
  }, [isTheme]);

  const applyTheme = () => {
    if (isTheme === 'dark') {
      document.querySelector('html').classList.add('dark');
    } else {
      document.querySelector('html').classList.remove('dark');
    }
  };

  const handleTheme = () => {
    // Cambia el tema
    setIsTheme(isTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <header className="relative md:sticky top-0 z-20 bg-[#101010] dark:bg-[#FCFCFC]">
      <nav className="px-4 sm:px-6 py-3 max-w-[700px] gap-3 flex justify-between items-center pt-2 dark:bg-[#FCFCFC] sm:mx-auto dark:text-[#706f6c]">
        <div>
          <a href="/">
            <img
              className="w-10 h-10 rounded-md cursor-pointer"
              src="/public/images/logoPersonalWhite.png"
              alt="logoPersonal"
            />
          </a>
        </div>
        <div className="dark:bg-[#FCFCFC] flex justify-between md:w-full">
          <div className="flex justify-between w-full items-center">
            <div className="sm:mx-auto">
              <NavResponsive />
            </div>
            <button
              className="flex items-center justify-center w-[40px] "
              onClick={handleTheme}
            >
              <Moon />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
