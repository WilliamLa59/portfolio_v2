import './App.scss';
import { About } from './components/About/About';
import { Hamburger } from './components/BurgerIcon/Hamburger';
import { Contact } from './components/Contact/Contact';
import { Experience } from './components/Experience/Experience';
import { Footer } from './components/Footer/Footer';
import { Hero } from './components/Hero/Hero';
import { Navbar } from './components/Navbar/Navbar';
import { Projects } from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hamburger/>
      <Hero/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App;
