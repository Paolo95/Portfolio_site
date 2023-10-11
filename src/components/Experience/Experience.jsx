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
                            <h4>SEO</h4>
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
                            <h4>Vuforia <br /> Engine</h4>
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
                            <h4>React <br /> Native</h4>
                            <small>Intermedio</small>
                        </div>
                    </article>
                    <article className='experience-details'>
                        <PatchCheckFill className='experience-details-icon'/>
                        <div>
                            <h4>Google <br /> Firebase</h4>
                            <small>Principiante</small>
                        </div>
                    </article>
                </div>
            </div>

            <div className="experience-database">
            <h3>Database</h3>
                <div className="experience-content">
                    <article className='experience-details'>
                        <PatchCheckFill className='experience-details-icon'/>
                        <div>
                            <h4>MySQL</h4>
                            <small>Intermedio</small>
                        </div>
                    </article>
                    <article className='experience-details'>
                        <PatchCheckFill className='experience-details-icon'/>
                        <div>
                            <h4>PostgreSQL</h4>
                            <small>Intermedio</small>
                        </div>
                    </article>
                    <article className='experience-details'>
                        <PatchCheckFill className='experience-details-icon'/>
                        <div>
                            <h4>SQLServer</h4>
                            <small>Intermedio</small>
                        </div>
                    </article>
                    <article className='experience-details'>
                        <PatchCheckFill className='experience-details-icon'/>
                        <div>
                            <h4>MongoDB</h4>
                            <small>Intermedio</small>
                        </div>
                    </article>
                </div>
            </div>

            <div className="experience-data">
            <h3>Data Analytics</h3>
                <div className="experience-content">
                    <article className='experience-details'>
                        <PatchCheckFill className='experience-details-icon'/>
                        <div>
                            <h4>Qlik</h4>
                            <small>Intermedio</small>
                        </div>
                    </article>
                    <article className='experience-details'>
                        <PatchCheckFill className='experience-details-icon'/>
                        <div>
                            <h4>Tableau</h4>
                            <small>Intermedio</small>
                        </div>
                    </article>
                    <article className='experience-details'>
                        <PatchCheckFill className='experience-details-icon'/>
                        <div>
                            <h4>PowerBI</h4>
                            <small>Intermedio</small>
                        </div>
                    </article>
                    <article className='experience-details'>
                        <PatchCheckFill className='experience-details-icon'/>
                        <div>
                            <h4>Spark</h4>
                            <small>Intermedio</small>
                        </div>
                    </article>
                    <article className='experience-details'>
                        <PatchCheckFill className='experience-details-icon'/>
                        <div>
                            <h4>Hadoop</h4>
                            <small>Intermedio</small>
                        </div>
                    </article>
                    <article className='experience-details'>
                        <PatchCheckFill className='experience-details-icon'/>
                        <div>
                            <h4>Python for <br /> Data Science</h4>
                            <small>Intermedio</small>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Experience