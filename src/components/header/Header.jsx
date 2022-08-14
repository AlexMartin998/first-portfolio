import { Link } from 'react-router-dom';

import { CTA } from './CTA';
import ME from './../../assets/me.png';
import './header.css';
import { HeaderSocials } from './HeaderSocials';

export const Header = () => {
  const scrollTo = () => {
    const section = document.getElementById('contact');
    section && section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header id="header">
      <div className="container header__container">
        <h5>Hello I&apos;m</h5>
        <h1>Adrian Changalombo</h1>
        <h5 className="text-light">Fullstack Developer</h5>

        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <Link to="/contact" className="scroll__down" onClick={scrollTo}>
          Scroll Down
        </Link>
      </div>
    </header>
  );
};
