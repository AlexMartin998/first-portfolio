export const ArticlePortfolio = ({
  image,
  title,
  codeLink,
  demoLink,
  tech,
}) => {
  return (
    <article className="portfolio__item ">
      <div className="portfolio__item-image">
        <img src={image} alt="Uptask project" />
      </div>

      <h3>{title}</h3>
      <span>{tech}</span>
      <div className="portfolio__item-cta">
        <a href={codeLink} target="_blank" className="btn " rel="noreferrer">
          Github
        </a>
        <a
          href={demoLink}
          target="_blank"
          className="btn btn-primary"
          rel="noreferrer"
        >
          Live Demo
        </a>
      </div>
    </article>
  );
};
