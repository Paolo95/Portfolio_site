import { useState, useEffect } from 'react';
import { Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import logo from '../../assets/img/logo_2_transparent.png'
import navIcon1 from '../../assets/img/nav-icon1.svg'
import CV from '../../assets/doc/Curriculum Compagnoni Paolo.pdf'
import './navbar.css'

const NavBar = () => {
    
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    
    useEffect(() => {
        const onScroll = () => {
            
            if (window.scrollY > 50) {
                setScrolled(true);
            }else{
                setScrolled(false);
            }
            
            if(window.scrollY >= 0 && window.scrollY < 721){
                
                setActiveLink('home');

            }else if (window.scrollY >= 721 && window.scrollY < 1441){
                
                setActiveLink('about');

            }else if (window.scrollY >= 1441 && window.scrollY < 2099){
                
                setActiveLink('experience');

            }else if (window.scrollY >= 2099 && window.scrollY < 2754){
                
                setActiveLink('services');

            }else if (window.scrollY >= 2754 && window.scrollY < 3573){
                
                setActiveLink('portfolio');

            }else if (window.scrollY >= 3573 && window.scrollY < 4026){
                
                setActiveLink('testimonials');

            }else setActiveLink('');
        }

        window.addEventListener("scroll", onScroll);
        
    },[])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" >
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                
                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="me-auto">
                        <a  href="#home" 
                            className={activeLink === 'home' ? 'nav-link navbar-link active' : "nav-link navbar-link"}
                            onClick={() => onUpdateActiveLink('home')}>
                            Home
                        </a>
                        <a  href="#about" 
                            className={activeLink === 'about' ? 'nav-link navbar-link active' : "nav-link navbar-link"}
                            onClick={() => onUpdateActiveLink('about')}>
                            Chi sono
                        </a>
                        <a  href="#experience" 
                            className={activeLink === 'experience' ? 'nav-link navbar-link active' : "nav-link navbar-link"}
                            onClick={() => onUpdateActiveLink('experience')}>
                            Competenze
                        </a>
                        <a  href="#services" 
                            className={activeLink === 'services' ? 'nav-link navbar-link active' : "nav-link navbar-link"}
                            onClick={() => onUpdateActiveLink('services')}>
                            Servizi
                        </a>
                        <NavDropdown title="Altro">
                            <NavDropdown.Item   
                                                href="#portfolio" 
                                                className={activeLink === 'portfolio' ? 'navbar-link active' : "navbar-link"}
                                                onClick={() => onUpdateActiveLink('portfolio')}>
                                                Portfolio
                            </NavDropdown.Item>
                            <NavDropdown.Item   href="#testimonials" 
                                                className={activeLink === 'testimonials' ? 'navbar-link active' : "navbar-link"}
                                                onClick={() => onUpdateActiveLink('testimonials')}>
                                                Feedback
                            </NavDropdown.Item>          

                            <NavDropdown.Divider />

                            <NavDropdown.Item   download={'Curriculum Compagnoni Paolo'} 
                                                href={CV}>
                                                Scarica CV
                            </NavDropdown.Item>

                        </NavDropdown>
                    </Nav>                             
            
                        <span className='navbar-text'>
                            <div className='social-icon'>
                                <a href='https://www.linkedin.com/in/paolo-compagnoni-3749631b2/' target='_blank' rel="noreferrer">
                                    <img src={navIcon1} alt="linkedIn" />
                                </a>
                            </div>
                            <div className="navBtns">
                                <a href="#contact">
                                    <button>
                                        <span>Contattami</span>
                                    </button>
                                </a>
                            </div>
                        </span>
            
                </Navbar.Collapse>
                  
            </Container>
        </Navbar>
             
    );
}

export default NavBar;