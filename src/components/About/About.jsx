import React from 'react'
import './about.css'
import Me from '../../assets/img/Me.png'
import { Award, FolderCheck, Mortarboard } from 'react-bootstrap-icons';

const About = () => {
  return (
    <section className='about'>
        <div className='gap' id='about'>
        </div>
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
                        <Mortarboard className='about-icon'/>
                        <h5>Laurea</h5>
                        <small>Ingegneria Informatica e dell'Automazione</small>
                    </article>
                    <article className="about-card">
                        <Award className='about-icon'/>
                        <h5>Esperienza</h5>
                        <small>Operativo da 2 anni nel settore</small>
                    </article>
                    <article className="about-card">
                        <FolderCheck className='about-icon'/>
                        <h5>Progetti</h5>
                        <small>5+ progetti completati</small>
                    </article>
                </div>

                <p>
                    Ho 27 anni, amo l'informatica, suonare la chitarra e andare in giro con la mia bici da corsa. <br /><br />
                    
                    Durante gli ultimi anni dell'università ho iniziato a sviluppare i primi progetti per mettere in pratica le competenze acquisite.
    
                </p>

                <a href="#contact" className='btn btn-primary'>Lavoriamo insieme!</a>
            </div>
        </div>
    </section>
    
    
  )
}

export default About