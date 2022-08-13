import { useState } from 'react';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { TiShoppingBag } from 'react-icons/ti';

import './nav.css';

export const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  const setActiveClass = hash => (activeNav === hash && 'active') || '';

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav('#')}
        className={setActiveClass('#')}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav('#about')}
        className={setActiveClass('#about')}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav('#experience')}
        className={setActiveClass('#experience')}
      >
        <BiBook />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav('#portfolio')}
        className={setActiveClass('#portfolio')}
      >
        <TiShoppingBag />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav('#contact')}
        className={setActiveClass('#contact')}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};
