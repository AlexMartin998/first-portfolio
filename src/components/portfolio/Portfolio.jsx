import { ArticlePortfolio } from './ArticlePortfolio';
import { data } from './data';
import './portfolio.css';

export const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ image, title, github, demo, id, tech }) => (
          <ArticlePortfolio
            key={id}
            image={image}
            title={title}
            codeLink={github}
            demoLink={demo}
            tech={tech}
          />
        ))}
      </div>
    </section>
  );
};
