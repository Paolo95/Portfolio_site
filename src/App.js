import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from "./components/Navbar/NavBar"
import Banner from './components/Banner/Banner'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Services from './components/Services/Services';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About />
      <Experience />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;