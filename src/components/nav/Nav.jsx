import { useEffect, useState } from 'react';
import NavResponsive from './utils/NavResponsive';
import Moon from './icons/Moon';
import Sun from './icons/Sun';
import './css/navStyle.css';

const Nav = () => {
  const [isTheme, setIsTheme] = useState('ligth');

  useEffect(() => {
    if (isTheme === 'dark') {
      document.querySelector('html').classList.add('dark');
    } else {
      document.querySelector('html').classList.remove('dark');
    }
  }, [isTheme]);

  const handleTheme = () => {
    setIsTheme(isTheme === 'ligth' ? 'dark' : 'ligth');
  };

  return (
    <header className="relative md:sticky top-0 z-20">
      <nav className="px-4 sm:px-6 py-3 max-w-[700px] gap-3 flex justify-between items-center pt-2 dark:bg-[#FCFCFC] sm:mx-auto">
        <div>
          <a href="/">
            <img
              className="w-10 h-10 rounded-md"
              src="/images/logoPersonalWhite.png"
              alt="logoPersonal"
            />
          </a>
        </div>
        <div className="dark:bg-[#FCFCFC] flex justify-between md:w-full">
          <div className="flex justify-between w-full items-center">
            <div className="sm:mx-auto">
              <NavResponsive />
            </div>
            <button className="container" onClick={handleTheme}>
              <Moon />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
