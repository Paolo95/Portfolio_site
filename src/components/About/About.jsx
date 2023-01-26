import React from 'react'
import './about.css'
import Me from '../../assets/img/Me.png'
import { Award, People, FolderCheck } from 'react-bootstrap-icons';

const About = () => {
  return (
    <section className='about' id='about'>
        <h2>Chi sono</h2>

        <div className="container about-container">
            <div className="about-me">
                <div className="about_me-image">
                    <img src={Me} alt="About_image" />
                </div>
            </div>
            <div className="about-content">
                <div className="about-cards">
                    <article className="about-card">
                        <Award className='about-icon'/>
                        <h5>Esperienza</h5>
                        <small>1+ Anni operativo</small>
                    </article>
                    <article className="about-card">
                        <People className='about-icon'/>
                        <h5>Clienti</h5>
                        <small>2+ Clienti in tutta Italia</small>
                    </article>
                    <article className="about-card">
                        <FolderCheck className='about-icon'/>
                        <h5>Progetti</h5>
                        <small>5+ progetti completati</small>
                    </article>
                </div>

                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus praesentium modi rem doloribus nesciunt quaerat quidem eum minima officiis, aliquam illum doloremque itaque iusto pariatur eaque exercitationem tenetur tempore ad.
                </p>

                <a href="#contact" className='btn btn-primary'>Lavoriamo ad un nuovo progetto insieme!</a>
            </div>
        </div>
    </section>
  )
}

export default About