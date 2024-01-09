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
    <section className="mx-auto w-[342px] dark:bg-[#FCFCFC]">
      <header className="flex justify-between items-center pt-4 dark:bg-[#FCFCFC] ">
        <a href="/">
          <img
            className="w-10 h-10 rounded-md"
            src="/images/logoPersonalWhite.png"
            alt="logoPersonal"

          />
        </a>
        <div className="flex gap-3 items-center dark:bg-[#FCFCFC] ">
          <NavResponsive />
          <button className="container" onClick={handleTheme}>
            <Moon />
            {/* <Sun /> */}
          </button>
        </div>
      </header>
    </section>
  );
};

export default Nav;
