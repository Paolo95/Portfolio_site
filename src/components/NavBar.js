import { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../assets/img/logo.svg'
import navIcon1 from '../assets/img/nav-icon1.svg'

export const NavBar = () => {
    
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
                <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : "navbar-link"} 
                                onClick={() => onUpdateActiveLink('skills')}>Competenze</Nav.Link>
                <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : "navbar-link"} 
                                onClick={() => onUpdateActiveLink('projects')}>Progetti</Nav.Link>
            </Nav>
            <span className='navbar-text'>
                <div className='social-icon'>
                    <a href='https://www.linkedin.com/in/paolo-compagnoni-3749631b2/' target='_blank' rel="noreferrer"><img src={navIcon1} alt="linkedIn" /></a>
                </div>
                <a href="#contact"><button className='vvd' onClick={() => console.log('connect')}><span>Contattami!</span></button></a> 
            </span>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}