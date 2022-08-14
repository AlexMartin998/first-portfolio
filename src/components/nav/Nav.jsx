import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { TiShoppingBag } from 'react-icons/ti';

import './nav.css';

export const Nav = () => {
  const location = useLocation();
  const [activeNav, setActiveNav] = useState('#header');

  useEffect(() => {
    const section = document.getElementById(location.pathname.substring(1));
    section && section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const scrollTo = sectionId => {
    const section = document.getElementById(sectionId);
    section && section.scrollIntoView({ behavior: 'smooth', block: 'start' });

    setActiveNav(`#${sectionId}`);
  };

  const setActiveClass = hash => (activeNav === hash && 'active') || '';

  return (
    <nav>
      <NavLink
        to={'/'}
        onClick={() => scrollTo('header')}
        className={setActiveClass('header')}
      >
        <AiOutlineHome />
      </NavLink>
      <NavLink
        to={'/about'}
        onClick={() => scrollTo('about')}
        className={setActiveClass('#about')}
      >
        <AiOutlineUser />
      </NavLink>
      <NavLink
        to="experience"
        onClick={() => scrollTo('experience')}
        className={setActiveClass('#experience')}
      >
        <BiBook />
      </NavLink>
      <NavLink
        to="portfolio"
        onClick={() => scrollTo('portfolio')}
        className={setActiveClass('#portfolio')}
      >
        <TiShoppingBag />
      </NavLink>
      <NavLink
        to="contact"
        onClick={() => scrollTo('contact')}
        className={setActiveClass('#contact')}
      >
        <BiMessageSquareDetail />
      </NavLink>
    </nav>
  );
};
