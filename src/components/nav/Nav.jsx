import { useEffect, useState } from 'react';
import NavResponsive from './utils/NavResponsive';
import Moon from './icons/Moon';
import Sun from './icons/Sun';


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
    <nav className="w-[390px] h-[60px] flex justify-between items-center mx-auto dark:bg-black ">
      <div className="translate-x-5 pt-1">
        <img
          className="w-10 h-10 rounded-md"
          src="/images/logoPersonalWhite.png"
          alt="logoPersonal"
        />
      </div>
      <div className="flex gap-3 items-center">
        <NavResponsive />
        <button className="container" onClick={handleTheme}>
          <label className="toggle" htmlFor="switch">
            <input id="switch" className="input" type="checkbox" />
            <Moon />
            <Sun />
          </label>
        </button>
      </div>
    </nav>
  );
};

export default Nav;
