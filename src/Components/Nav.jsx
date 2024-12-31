import React, { useState } from 'react';
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" className="m-0 w-[129px] h-[29px]" />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-900"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img
            src={hamburger}
            alt="Hamburger"
            onClick={toggleMenu}
            className="cursor-pointer h-[25px] w-[25px]"
          />
        </div>
      </nav>
      {isMenuOpen && (
        <ul className="flex flex-col-2 p-2 gap-6 mt-4 lg:hidden justify-evenly  bg-slate-200 rounded-xl">
          {navLinks.map((item) => (
            <li key={item.label} className='hover:text-slate-400'>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-900">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Nav;
