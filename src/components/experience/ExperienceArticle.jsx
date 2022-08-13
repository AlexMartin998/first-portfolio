import { BsPatchCheckFill } from 'react-icons/bs';

export const ExperienceArticle = ({ subtitle, level }) => {
  return (
    <article className="experience__details">
      <BsPatchCheckFill className="experience__details-icon" />
      <div className="">
        <h4>{subtitle}</h4>
        <small className="text-light">{level}</small>
      </div>
    </article>
  );
};
