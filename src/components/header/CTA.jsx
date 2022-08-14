import { Link } from 'react-router-dom';

import CV from './../../assets/ADRIAN_CHANGALOMBO.pdf';

export const CTA = () => {
  const scrollTo = () => {
    const section = document.getElementById('contact');
    section && section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>

      <Link to="/contact" className="btn btn-primary" onClick={scrollTo}>
        Let&apos;s Talk
      </Link>
    </div>
  );
};
