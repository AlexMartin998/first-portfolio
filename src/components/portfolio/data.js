import UPTASK from './../../assets/projectPage.png';
import APV from './../../assets/admin.png';
import Calendar from './../../assets/modal.png';
import ADMIN_PANEL from './../../assets/home-admin.png';
import OMNIFOOD from './../../assets/omnifood.png';
import NODE_API from './../../assets/node-api.jpg';
import IBA_PORTFOLIO from './../../assets/iba-portfolio.png';

const genID = () =>
  (
    performance.now().toString(36) + Math.random().toString(36).slice(2)
  ).replace(/\./g, '');

export const data = [
  {
    id: genID(),
    image: UPTASK,
    title: 'UpTask',
    github: 'https://github.com/adrianAlx/uptask-mern-front',
    demo: 'https://uptask-mern-io-adrianlx.netlify.app/',
  },
  {
    id: genID(),
    image: APV,
    title: 'Veterinary PM',
    github: 'https://github.com/adrianAlx/apv-mern-frontend',
    demo: 'https://apv-mern-adrianlx.netlify.app/',
  },
  {
    id: genID(),
    image: Calendar,
    title: 'Calendar',
    github: 'https://github.com/AlexMartin998/calendar-front-react',
    demo: 'https://calendar-mern-alxs.netlify.app/auth/login',
  },
  {
    id: genID(),
    image: ADMIN_PANEL,
    title: 'Admin Panel',
    github: 'https://github.com/adrianAlx/admin-panel-react',
    demo: 'https://react-admin-panel-bld.netlify.app/',
  },
  {
    id: genID(),
    image: OMNIFOOD,
    title: 'Omnifood',
    github: 'https://github.com/adrianAlx/omnifood',
    demo: 'https://omnifood-adrian.netlify.app/',
  },
  {
    id: genID(),
    image: IBA_PORTFOLIO,
    title: 'IBA Portfolio',
    github: 'https://github.com/AlexMartin998/iba-portfolio',
    demo: 'https://portfolio-carrera-adrian.netlify.app/',
  },
  {
    id: genID(),
    image: NODE_API,
    title: 'REST API',
    github: 'https://github.com/adrianAlx/rest-api-typescript-nodejs',
    demo: 'https://github.com/adrianAlx/rest-api-typescript-nodejs',
  },
];
