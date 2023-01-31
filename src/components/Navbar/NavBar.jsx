import { useState, useEffect } from 'react';
import { Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import logo from '../../assets/img/logo_2_transparent.png'
import navIcon1 from '../../assets/img/nav-icon1.svg'
import CV from '../../assets/doc/Curriculum Paolo Compagnoni.pdf'
import './navbar.css'

const NavBar = () => {
    
    // useState imposta una variabile di stato activeLink e una funzione setActiveLink che lo aggiorna

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false);

    //con useEffect diciamo a React che il componente deve fare qualcosa dopo il suo render

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                seScrolled(true);
            }else{
                seScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);
        
        //rimuovo il listener quando il componente viene rimosso

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

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
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : "navbar-link"} 
                                onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : "navbar-link"} 
                                onClick={() => onUpdateActiveLink('about')}>Chi sono</Nav.Link>
                <Nav.Link href="#experience" className={activeLink === 'experience' ? 'active navbar-link' : "navbar-link"} 
                                onClick={() => onUpdateActiveLink('experience')}>Competenze</Nav.Link>
                <Nav.Link href="#services" className={activeLink === 'services' ? 'active navbar-link' : "navbar-link"} 
                                onClick={() => onUpdateActiveLink('services')}>Servizi</Nav.Link>
                <NavDropdown title="Altro" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#portfolio" className={"navbar-link"} 
                                onClick={() => onUpdateActiveLink('portfolio')}>Portfolio</NavDropdown.Item>
                    <NavDropdown.Item href="#testimonials" className={"navbar-link"}
                                onClick={() => onUpdateActiveLink('testimonials')}>Feedback</NavDropdown.Item>                    
                    <NavDropdown.Divider />
                    <NavDropdown.Item download={'Curriculum Paolo Compagnoni'} href={CV}>Scarica CV</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <span className='navbar-text'>
                <div className='social-icon'>
                    <a href='https://www.linkedin.com/in/paolo-compagnoni-3749631b2/' target='_blank' rel="noreferrer"><img src={navIcon1} alt="linkedIn" /></a>
                </div>
                <div className="navBtns">
                    <a href="#contact"><button ><span>Contattami</span></button></a>
                </div>
                
            </span>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

export default NavBar;