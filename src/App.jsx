import { BrowserRouter } from 'react-router-dom';

import { About } from './components/about/About';
import { Contact } from './components/contact/Contact';
import { Experience } from './components/experience/Experience';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { Nav } from './components/nav/Nav';
import { Portfolio } from './components/portfolio/Portfolio';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
