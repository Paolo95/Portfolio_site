import React from 'react'
import './portfolio.css'
import data from './portfolio.js'

const Portfolio = () => {
  return (
    <section className='portfolio' id='portfolio'>

        <h2>Portfolio</h2>

        <div className="container portfolio-container">
            {
                data.map((value, index) => {
                    return(
                        <>
                            <article key={index} className='portfolio-item'>
                                <div className="portfolio-item-image">
                                    <img src={value.cover} alt="portfolio_image" />
                                </div>
                                <h3>{value.title}</h3>
                                <div className="portfolio-item-descr">{value.desc}</div>
                                <div className="portfolio-item-cta">
                                    {
                                        value.hasGithub === true 
                                            ? <a href={value.github} 
                                                className='btn github'
                                                target='_blank'
                                                rel='noreferrer'>Github</a>
                                            : null
                                        
                                    }
                                
                                    {
                                        value.hasSite === true 
                                            ? <a href={value.site} 
                                                className='btn btn-primary' 
                                                target='_blank' 
                                                rel='noreferrer'>Vai al sito</a>
                                            : null
                                    }   
                                </div>
                            </article>
                        </>
                    )
                })
            }
            
        </div>
    </section>
  )
}

export default Portfolio