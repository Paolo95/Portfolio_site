import './App.css';
import NavBar from "./components/Navbar/NavBar"
import Banner from './components/Banner/Banner'
import Skills from './components/Skills/Skills' 
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from './components/Nav/Nav';
import About from './components/About/About';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Nav />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;