import './App.css';
import NavBar from "./components/Navbar/NavBar"
import Banner from './components/Banner/Banner'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import About from './components/About/About';
import Experience from './components/Experience/Experience';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;