import React from 'react'
import CV from '../../assets/doc/Curriculum Paolo Compagnoni.pdf'
import {Linkedin, Instagram, Whatsapp} from 'react-bootstrap-icons'
import './footer.css'

const Footer = () => {
  return (
    <footer>
        <a href="#home" className='footer-logo'>Paolo Compagnoni</a>

        <ul className='permalinks'>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">Chi sono</a></li>
            <li><a href="#experience">Competenze</a></li>
            <li><a href="#services">Servizi</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#testimonials">Feedback</a></li>
            <li><a href={CV} download={'Curriculum Paolo Compagnoni'}>Scarica CV</a></li>
        </ul>

        <div className="footer-socials">
            <a href="https://www.linkedin.com/in/paolo-compagnoni-3749631b2/"><Linkedin /></a>
            <a href="https://www.instagram.com/paolo__compagnoni/"><Instagram /></a>
            <a href="https://api.whatsapp.com/send?phone=3397619766"><Whatsapp /></a>
        </div>

        <div className="footer-copyright">
            <small>&copy; Paolo Compagnoni. Tutti i diritti riservati.</small>
        </div>
    </footer>
  )
}

export default Footer