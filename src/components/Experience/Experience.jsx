import React from 'react'
import './experience.css'
import {PatchCheckFill} from 'react-bootstrap-icons'

const Experience = () => {
  return (
    <section id='experience'>
        <h5>Le competenze che ho</h5>
        <h2>Le mie esperienze</h2>

        <div className="container experience-container">
            <div className="experience-fullstack">
                <h3>Fullstack Development</h3>
                <div className="experience-content">
                    <article className='experience-details'>
                        <PatchCheckFill />
                        <h4>HTML</h4>
                        <small>Esperto</small>
                    </article>
                    <article className='experience-details'>
                        <PatchCheckFill />
                        <h4>CSS</h4>
                        <small>Esperto</small>
                    </article>
                    <article className='experience-details'>
                        <PatchCheckFill />
                        <h4>JavaScript</h4>
                        <small>Esperto</small>
                    </article>
                    <article className='experience-details'>
                        <PatchCheckFill />
                        <h4>Bootstrap</h4>
                        <small>Intermedio</small>
                    </article>
                    <article className='experience-details'>
                        <PatchCheckFill />
                        <h4>React</h4>
                        <small>Intermedio</small>
                    </article>
                    <article className='experience-details'>
                        <PatchCheckFill />
                        <h4>React Native</h4>
                        <small>Intermedio</small>
                    </article>
                </div>
            </div>

            <div className="experience-unity">

            </div>
        </div>
    </section>
  )
}

export default Experience