import UPTASK from './../../assets/admin-ut.png';
// import APV from './../../assets/admin.png';
import Calendar from './../../assets/modal.png';
import ADMIN_PANEL from './../../assets/home-admin.png';
import ECOMVISION from './../../assets/dashboard-mui-js.png';
import OMNIFOOD from './../../assets/omnifood.png';
import NODE_API from './../../assets/node-api.jpg';
import SPRING_BOOT_API from './../../assets/spring-boot-api-jwt.png';
// import IBA_PORTFOLIO from './../../assets/iba-portfolio.png';
import BOOKING from './../../assets/home-booking.png';
import HOOBANK from './../../assets/hoobank.png';
import TESLOSHOP from './../../assets/order-pay.png';
import STOREBOOK from './../../assets/storebook.png';
import AIRBNB from './../../assets/home-airbnb.png';
import QUILLPDF from './../../assets/chatpdf-page.png';
import CLEAN_ARCH from './../../assets/CleanArchitecture.jpg';
import NOTION_CLONE_CYPRESS from './../../assets/02_file_collabs.png';

const genID = () =>
  (
    performance.now().toString(36) + Math.random().toString(36).slice(2)
  ).replace(/\./g, '');

export const data = [
  {
    id: genID(),
    image: TESLOSHOP,
    title: 'TesloShop E-commerce',
    tech: 'Next.js | TypeScript | PayPal | Docker',
    github: 'https://github.com/AlexMartin998/next-teslo-shop',
    demo: 'https://next-teslo-shop-six.vercel.app/',
  },
  {
    id: genID(),
    image: QUILLPDF,
    title: 'QuillPDF AI',
    tech: 'Next.js | TypeScript | tRPC | OpenAI',
    github: 'https://github.com/AlexMartin998/quillpdf-saas-nextjs',
    demo: 'https://quillpdf-saas-nextjs.vercel.app',
  },
  {
    id: genID(),
    image: NOTION_CLONE_CYPRESS,
    title: 'Cypress | Notion Clone',
    tech: 'Next.js | TypeScript | Socket.IO | Stripe',
    github: 'https://github.com/AlexMartin998/nextjs-notion-clone',
    demo: 'https://cypress-clone-notion-production.up.railway.app',
  },
  {
    id: genID(),
    image: STOREBOOK,
    title: 'Book | Shop',
    tech: 'Angular | Spring Boot | PayPal | Docker',
    github: 'https://github.com/AlexMartin998/book-store-angular',
    demo: 'https://alx-storebook-angular-spring.netlify.app/',
  },
  {
    id: genID(),
    image: ECOMVISION,
    title: 'ECOMVISION - Dashboard',
    tech: 'React.js | Node.js | Docker - MERN Stack',
    github: 'https://github.com/AlexMartin998/admin-dashboard-mui',
    demo: 'https://ecomvision-reacmuijs-alx.netlify.app/',
  },
  {
    id: genID(),
    image: UPTASK,
    title: 'UpTask',
    tech: 'React.js | Node.js | Socket.IO - MERN Stack',
    github: 'https://github.com/adrianAlx/uptask-mern-front',
    demo: 'https://uptask-mern-io-adrianlx.netlify.app/',
  },
  {
    id: genID(),
    image: AIRBNB,
    title: 'Airbnb Clone',
    tech: 'Next.js | TypeScript | Prisma ORM | Docker',
    github: 'https://github.com/AlexMartin998/airbnb-clone-nextjs',
    demo: 'https://adralx-airbnb-nextjs.vercel.app',
  },
  {
    id: genID(),
    image: Calendar,
    title: 'Calendar',
    tech: 'React.js | Node.js - MERN Stack',
    github: 'https://github.com/AlexMartin998/calendar-front-react',
    demo: 'https://calendar-mern-alxs.netlify.app/auth/login',
  },

  {
    id: genID(),
    image: BOOKING,
    title: 'Booking',
    tech: 'React.js | Node.js | Docker - MERN Stack',
    github: 'https://github.com/AlexMartin998/booking-app-react',
    demo: 'https://booking-app-react-alxadr.netlify.app',
  },
  // {
  //   id: genID(),
  //   image: APV,
  //   title: 'Veterinary PM',
  //   tech: 'React.js | Node.js - MERN Stack',
  //   github: 'https://github.com/adrianAlx/apv-mern-frontend',
  //   demo: 'https://apv-mern-adrianlx.netlify.app/',
  // },

  {
    id: genID(),
    image: HOOBANK,
    title: 'Hoobank',
    tech: 'React.js | TypeScript | TailwindCSS',
    github: 'https://github.com/AlexMartin998/hoobank-react',
    demo: 'https://hoobank-reactts-alx.netlify.app/',
  },

  {
    id: genID(),
    image: ADMIN_PANEL,
    title: 'Admin Panel',
    tech: 'React.js | TypeScript | Sass',
    github: 'https://github.com/adrianAlx/admin-panel-react',
    demo: 'https://react-admin-panel-bld.netlify.app/',
  },

  {
    id: genID(),
    image: OMNIFOOD,
    title: 'Omnifood',
    tech: 'HTML5 | CSS3 | JavaScript',
    github: 'https://github.com/adrianAlx/omnifood',
    demo: 'https://omnifood-adrian.netlify.app/',
  },
  // {
  //   id: genID(),
  //   image: IBA_PORTFOLIO,
  //   title: 'IBA Portfolio',
  //   tech: 'React.js',
  //   github: 'https://github.com/AlexMartin998/iba-portfolio',
  //   demo: 'https://portfolio-carrera-adrian.netlify.app/',
  // },
  {
    id: genID(),
    image: CLEAN_ARCH,
    title: 'Share Ideas - Hexagonal Architecture',
    tech: 'TypeScript | Node.js | PrismaORM | JWT | PostgreSQL',
    github: 'https://github.com/AlexMartin998/share-ideas-clean-nodets',
    demo: 'https://github.com/AlexMartin998/share-ideas-clean-nodets',
  },
  {
    id: genID(),
    image: SPRING_BOOT_API,
    title: 'Inventory Management System',
    tech: 'Spring Boot | JWT | PostgreSQL',
    github: 'https://github.com/AlexMartin998/inventory-management-springboot3',
    demo: 'https://github.com/AlexMartin998/inventory-management-springboot3',
  },
  {
    id: genID(),
    image: NODE_API,
    title: 'REST API',
    tech: 'Node.js | Express.js | TypeScript',
    github: 'https://github.com/adrianAlx/rest-api-typescript-nodejs',
    demo: 'https://github.com/adrianAlx/rest-api-typescript-nodejs',
  },
];

/* export const data = [
  {
    id: genID(),
    image: TESLOSHOP,
    title: 'TesloShop E-commerce',
    tech: 'Next.js | TypeScript | PayPal | Docker',
    github: 'https://github.com/AlexMartin998/next-teslo-shop',
    demo: 'https://next-teslo-shop-six.vercel.app/',
  },
  {
    id: genID(),
    image: UPTASK,
    title: 'UpTask',
    tech: 'React.js | Node.js | Socket.IO - MERN Stack',
    github: 'https://github.com/adrianAlx/uptask-mern-front',
    demo: 'https://uptask-mern-io-adrianlx.netlify.app/',
  },
  {
    id: genID(),
    image: Calendar,
    title: 'Calendar',
    tech: 'React.js | Node.js - MERN Stack',
    github: 'https://github.com/AlexMartin998/calendar-front-react',
    demo: 'https://calendar-mern-alxs.netlify.app/auth/login',
  },

  {
    id: genID(),
    image: ECOMVISION,
    title: 'ECOMVISION - Dashboard',
    tech: 'React.js | Node.js | Docker - MERN Stack',
    github: 'https://github.com/AlexMartin998/admin-dashboard-mui',
    demo: 'https://ecomvision-reacmuijs-alx.netlify.app/',
  },
  {
    id: genID(),
    image: BOOKING,
    title: 'Booking',
    tech: 'React.js | Node.js | Docker - MERN Stack',
    github: 'https://github.com/AlexMartin998/booking-app-react',
    demo: 'https://booking-app-react-alxadr.netlify.app',
  },
  {
    id: genID(),
    image: APV,
    title: 'Veterinary PM',
    tech: 'React.js | Node.js - MERN Stack',
    github: 'https://github.com/adrianAlx/apv-mern-frontend',
    demo: 'https://apv-mern-adrianlx.netlify.app/',
  },

  {
    id: genID(),
    image: HOOBANK,
    title: 'Hoobank',
    tech: 'React.js | TypeScript | TailwindCSS',
    github: 'https://github.com/AlexMartin998/hoobank-react',
    demo: 'https://hoobank-reactts-alx.netlify.app/',
  },

  {
    id: genID(),
    image: ADMIN_PANEL,
    title: 'Admin Panel',
    tech: 'React.js | TypeScript | Sass',
    github: 'https://github.com/adrianAlx/admin-panel-react',
    demo: 'https://react-admin-panel-bld.netlify.app/',
  },

  {
    id: genID(),
    image: OMNIFOOD,
    title: 'Omnifood',
    tech: 'HTML5 | CSS3 | JavaScript',
    github: 'https://github.com/adrianAlx/omnifood',
    demo: 'https://omnifood-adrian.netlify.app/',
  },
  {
    id: genID(),
    image: IBA_PORTFOLIO,
    title: 'IBA Portfolio',
    tech: 'React.js',
    github: 'https://github.com/AlexMartin998/iba-portfolio',
    demo: 'https://portfolio-carrera-adrian.netlify.app/',
  },
  {
    id: genID(),
    image: NODE_API,
    title: 'REST API',
    tech: 'Node.js | Express.js | TypeScript',
    github: 'https://github.com/adrianAlx/rest-api-typescript-nodejs',
    demo: 'https://github.com/adrianAlx/rest-api-typescript-nodejs',
  },
  {
    id: genID(),
    image: SPRING_BOOT_API,
    title: 'Inventory Management System',
    tech: 'Spring Boot | JWT | PostgreSQL',
    github: 'https://github.com/AlexMartin998/inventory-management-springboot3',
    demo: 'https://github.com/AlexMartin998/inventory-management-springboot3',
  },
];
 */
