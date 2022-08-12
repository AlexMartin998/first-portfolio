import { CTA } from './CTA';
import ME from './../../assets/me.png';
import './header.css';

export const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I&apos;m</h5>
        <h1>Adrian Changalombo</h1>
        <h5 className="text-light">Fullstack Developer</h5>

        <CTA />

        <div className="me">
          <img src={ME} alt="me" />
        </div>
      </div>
    </header>
  );
};
