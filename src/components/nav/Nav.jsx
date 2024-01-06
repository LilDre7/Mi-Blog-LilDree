import { useEffect, useState } from 'react';
import NavResponsive from './utils/NavResponsive';
import Moon from './icons/Moon';
import Sun from './icons/Sun';
import "./css/NavResponsive.css"

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
    <section className="dark:bg-white mt-2 mx-auto w-[342px] ">
      <nav className="flex justify-between items-center pt-2 ">
        <div className="">
          <img
            className="w-10 h-10 rounded-md"
            src="/images/logoPersonalWhite.png"
            alt="logoPersonal"
          />
        </div>
        <div className="flex gap-3 items-center">
          <NavResponsive />
          <button className="container" onClick={handleTheme}>
            {/* <label onClick={handleTheme} className="toggle" htmlFor="switch"> */}
            {/* <input onClick={handleTheme} id="switch" className="input" type="checkbox" /> */}
            <Moon />
            <Sun />
            {/* </label> */}
          </button>
        </div>
      </nav>
    </section>
  );
};

export default Nav;
