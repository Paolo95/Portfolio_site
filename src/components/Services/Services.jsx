import React from 'react'
import {Check2} from 'react-bootstrap-icons'
import './services.css'

const Services = () => {
  return (
    <section className='services'>
        <div className='gap' id='services'>
        </div>
            <h2>Servizi</h2>

            <div className="container services-container">
                <article className='service'>
                    <div className="service-head">
                        <h3>Full Stack Development</h3>
                    </div>

                    <ul className="service-list">
                        <li>
                            <Check2 className='service-list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, commodi?</p>
                        </li>
                        <li>
                            <Check2 className='service-list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, commodi?</p>
                        </li>
                        <li>
                            <Check2 className='service-list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, commodi?</p>
                        </li>
                        <li>
                            <Check2 className='service-list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, commodi?</p>
                        </li>
                        <li>
                            <Check2 className='service-list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, commodi?</p>
                        </li>
                    </ul>
                </article>

                <article className='service'>
                    <div className="service-head">
                        <h3>App development</h3>
                    </div>

                    <ul className="service-list">
                        <li>
                            <Check2 className='service-list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, commodi?</p>
                        </li>
                        <li>
                            <Check2 className='service-list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, commodi?</p>
                        </li>
                        <li>
                            <Check2 className='service-list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, commodi?</p>
                        </li>
                        <li>
                            <Check2 className='service-list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, commodi?</p>
                        </li>
                        <li>
                            <Check2 className='service-list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, commodi?</p>
                        </li>
                    </ul>
                </article>

                <article className='service'>
                    <div className="service-head">
                        <h3>Other Services</h3>
                    </div>

                    <ul className="service-list">
                        <li>
                            <Check2 className='service-list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, commodi?</p>
                        </li>
                        <li>
                            <Check2 className='service-list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, commodi?</p>
                        </li>
                        <li>
                            <Check2 className='service-list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, commodi?</p>
                        </li>
                        <li>
                            <Check2 className='service-list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, commodi?</p>
                        </li>
                        <li>
                            <Check2 className='service-list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, commodi?</p>
                        </li>
                    </ul>
                </article>
            </div>
    </section>
  )
}

export default Services