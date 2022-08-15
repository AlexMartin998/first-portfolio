import { FaAward } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

import './about.css';
import ME from './../../assets/me-about.jpg';

export const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years of Development</small>
            </article>
            <article className="about__card">
              <FiUser className="about__icon" />
              <h5>Clients</h5>
              <small>3+ clients</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>21+ Completed</small>
            </article>
          </div>

          <p>
            Solid backend knowledge with technologies such as: Node.js,
            Express.js, TypeScript, MongoDB, Mongoose ODM, SQL, PostgreSQL,
            Sequelize ORM, Passport, Google OAuth, Passport OAuth and testing
            with Jest and Supertest or Mocha and Chai.<br></br> Fundamentals in
            Hexagonal Architecture and DDD with Node.js, Express.js and
            TypeScript. Strong understanding of the front-end, mainly with
            React, Redux, Context API, ES7+, HTML5, CSS3, Sass, TypeScript,
            Webpack, Vite.<br></br>
            General knowledge in Linux, my main distro is Arch Linux with DWM as
            a tiling window manager.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </section>
  );
};
