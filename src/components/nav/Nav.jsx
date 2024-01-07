import { useEffect, useState } from 'react';
import NavResponsive from './utils/NavResponsive';
import Moon from './icons/Moon';
import Sun from './icons/Sun';
import "./css/navStyle.css"

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
    <section className="mx-auto w-[342px]">
      <nav className="flex justify-between items-center pt-4 ">
        <a href="/" data-barba="link" data-barba-transition="fade">
          <img
            className="w-10 h-10 rounded-md"
            src="/images/logoPersonalWhite.png"
            alt="logoPersonal"
          />
        </a>
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
