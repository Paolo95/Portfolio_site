import React from 'react'
import {Check2} from 'react-bootstrap-icons'
import fullstack from './fullstack.js'
import app from './app.js'
import other from './other.js'
import './services.css'

const Services = () => {
  return (
    <section className='services' id='services'>
     
            <h2>Servizi</h2>

            <div className="container services-container">
                <article className='service'>
                    <div className="service-head">
                        <h3>Full Stack Development</h3>
                    </div>

                    <ul className="service-list">
                        {
                            fullstack.map((value, index) => {
                                return(
                                    <li key={index}>
                                        <Check2 className='service-list-icon' />
                                        <div>{value.item}</div>
                                    </li>
                                )
                            })  
                        }
                    </ul>
                </article>

                <article className='service'>
                    <div className="service-head">
                        <h3>App development</h3>
                    </div>

                    <ul className="service-list">
                    {
                        app.map((value, index) => {
                            return(
                                <li key={index}>
                                    <Check2 className='service-list-icon' />
                                    <div>{value.item}</div>
                                </li>
                            )
                        })  
                    }
                    </ul>
                </article>

                <article className='service'>
                    <div className="service-head">
                        <h3>Altri servizi</h3>
                    </div>

                    <ul className="service-list">
                    {
                        other.map((value, index) => {
                            return(
                                <li key={index}>
                                    <Check2 className='service-list-icon' />
                                    <div>{value.item}</div>
                                </li>
                            )
                        })  
                    }
                    </ul>
                </article>
            </div>
    </section>
  )
}

export default Services