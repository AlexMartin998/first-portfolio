import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { SiUdemy } from 'react-icons/si';

import './footer.css';

export const Footer = () => {
  let year = new Date().getFullYear();

  return (
    <footer>
      <a href="#" className="footer__logo">
        ADRIAN
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      
      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/adrian-changalombo-iba"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/AlexMartin998"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.udemy.com/user/adrian-alexander-changalombo-travez-2/"
          target="_blank"
          rel="noreferrer"
        >
          <SiUdemy />
        </a>
      </div>

      <div className="footer__copyright">
        <small>Copyright &copy; {year} AC. All rights reserved</small>
      </div>
    </footer>
  );
};
