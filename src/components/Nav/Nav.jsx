import React from 'react'
import { Book, HouseDoor, Person, Clipboard2Check, ChatDots } from "react-bootstrap-icons"
import { useState } from 'react'
import './nav.css'

const Nav = () => {

  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav id='floatingNav'>
        <a href="#home" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active': ''} ><HouseDoor /></a>
        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''}><Person /></a>
        <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active': ''}><Book /></a>
        <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active': ''}><Clipboard2Check /></a>
        <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active': ''}><ChatDots /></a>
    </nav>
  )
}

export default Nav