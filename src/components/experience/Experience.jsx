import './experience.css';
import { ExperienceArticle } from './ExperienceArticle';

export const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <ExperienceArticle subtitle="HTML" level="Experienced" />
            <ExperienceArticle subtitle="CSS" level="Intermediate" />
            <ExperienceArticle subtitle="JavaScript" level="Experienced" />
            <ExperienceArticle subtitle="React.js" level="Experienced" />
            <ExperienceArticle subtitle="Bootstrap" level="Intermediate" />
            <ExperienceArticle subtitle="Tailwind" level="Intermediate" />
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <ExperienceArticle subtitle="Node.js" level="Experienced" />
            <ExperienceArticle subtitle="Express.js" level="Experienced" />
            <ExperienceArticle subtitle="MongoDB" level="Intermediate" />
            <ExperienceArticle subtitle="PostgreSQL" level="Intermediate" />
            <ExperienceArticle subtitle="TypeScript" level="Intermediate" />
            <ExperienceArticle subtitle="Docker" level="Intermediate" />
          </div>
        </div>
      </div>
    </section>
  );
};
