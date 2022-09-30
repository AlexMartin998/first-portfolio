import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { SiUdemy } from 'react-icons/si';

export const HeaderSocials = () => {
  return (
    <div className="header__socials">
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
        href="https://github.com/adrianAlx?tab=repositories"
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
  );
};
