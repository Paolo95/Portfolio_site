import React from 'react'
import './experience.css'
import {PatchCheckFill} from 'react-bootstrap-icons'

const Experience = () => {
  return (
    <section className='experience' id='experience'>
 
        <h2>Le mie competenze</h2>

        <div className="container experience-container">
            <div className="experience-fullstack">
                <h3>Fullstack Development</h3>
                <div className="experience-content">
                    <article className='experience-details'>
                        <PatchCheckFill className='experience-details-icon'/>
                        <div>
                            <h4>HTML/CSS</h4>
                            <small>Esperto</small>
                        </div>
                    </article>
                    <article className='experience-details'>
                        <PatchCheckFill className='experience-details-icon'/>
                        <div>
                            <h4>SEO Optimization</h4>
                            <small>Intermedio</small>
                        </div>   
                    </article>
                    <article className='experience-details'>
                        <PatchCheckFill className='experience-details-icon'/>
                        <div>
                            <h4>JavaScript</h4>
                            <small>Esperto</small>
                        </div>
                    </article>
                    <article className='experience-details'>
                        <PatchCheckFill className='experience-details-icon'/>
                        <div>
                            <h4>.NET/ASP.NET</h4>
                            <small>Intermedio</small>
                        </div>
                    </article>
                    <article className='experience-details'>
                        <PatchCheckFill className='experience-details-icon'/>
                        <div>
                            <h4>React</h4>
                            <small>Intermedio</small>
                        </div>
                    </article>
                    <article className='experience-details'>
                        <PatchCheckFill className='experience-details-icon'/>
                        <div>
                            <h4>Angular</h4>
                            <small>Intermedio</small>
                        </div>
                    </article>
                    <article className='experience-details'>
                        <PatchCheckFill className='experience-details-icon'/>
                        <div>
                            <h4>Bootstrap</h4>
                            <small>Intermedio</small>
                        </div>
                    </article>
                    <article className='experience-details'>
                        <PatchCheckFill className='experience-details-icon'/>
                        <div>
                            <h4>Node JS</h4>
                            <small>Intermedio</small>
                        </div>
                    </article>
                </div>
            </div>

            <div className="experience-unity">
            <h3>App Development</h3>
                <div className="experience-content">
                    <article className='experience-details'>
                        <PatchCheckFill className='experience-details-icon'/>
                        <div>
                            <h4>Unity</h4>
                            <small>Intermedio</small>
                        </div>
                    </article>
                    <article className='experience-details'>
                        <PatchCheckFill className='experience-details-icon'/>
                        <div>
                            <h4>Vuforia Engine</h4>
                            <small>Intermedio</small>
                        </div>
                    </article>
                    <article className='experience-details'>
                        <PatchCheckFill className='experience-details-icon'/>
                        <div>
                            <h4>AR App</h4>
                            <small>Intermedio</small>
                        </div>
                    </article>
                    <article className='experience-details'>
                        <PatchCheckFill className='experience-details-icon'/>
                        <div>
                            <h4>Android</h4>
                            <small>Principiante</small>
                        </div>
                    </article>
                    <article className='experience-details'>
                        <PatchCheckFill className='experience-details-icon'/>
                        <div>
                            <h4>React Native</h4>
                            <small>Intermedio</small>
                        </div>
                    </article>
                    <article className='experience-details'>
                        <PatchCheckFill className='experience-details-icon'/>
                        <div>
                            <h4>Google Firebase</h4>
                            <small>Principiante</small>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Experience