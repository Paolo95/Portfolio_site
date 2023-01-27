import React from 'react'
import IMG1 from '../../assets/img/portfolio3.jpg'
import './portfolio.css'

const Portfolio = () => {
  return (
    <section className='portfolio'>
        <div className='gap' id='portfolio'>
        </div>

        <h2>Portfolio</h2>

        <div className="container portfolio-container">
            <article className='portfolio-item'>
                <div className="portfolio-item-image">
                    <img src={IMG1} alt="" />
                </div>
                <h3>Titolo progetto 1</h3>
                <div className="portfolio-item-cta">
                    <a href="https://github.com" className='btn'>Github</a>
                    <a href="https://github.com" className='btn btn-primary' target='_blank' rel='noreferrer'>Vai al sito</a>
                </div>
            </article>
            <article className='portfolio-item'>
                <div className="portfolio-item-image">
                    <img src={IMG1} alt="" />
                </div>
                <h3>Titolo progetto 1</h3>
                <div className="portfolio-item-cta">
                    <a href="https://github.com" className='btn'>Github</a>
                    <a href="https://github.com" className='btn btn-primary' target='_blank' rel='noreferrer'>Vai al sito</a>
                </div>
            </article>
            <article className='portfolio-item'>
                <div className="portfolio-item-image">
                    <img src={IMG1} alt="" />
                </div>
                <h3>Titolo progetto 1</h3>
                <div className="portfolio-item-cta">
                    <a href="https://github.com" className='btn'>Github</a>
                    <a href="https://github.com" className='btn btn-primary' target='_blank' rel='noreferrer'>Vai al sito</a>
                </div>
            </article>
            <article className='portfolio-item'>
                <div className="portfolio-item-image">
                    <img src={IMG1} alt="" />
                </div>
                <h3>Titolo progetto 1</h3>
                <div className="portfolio-item-cta">
                    <a href="https://github.com" className='btn'>Github</a>
                    <a href="https://github.com" className='btn btn-primary' target='_blank' rel='noreferrer'>Vai al sito</a>
                </div>
            </article>
            <article className='portfolio-item'>
                <div className="portfolio-item-image">
                    <img src={IMG1} alt="" />
                </div>
                <h3>Titolo progetto 1</h3>
                <div className="portfolio-item-cta">
                    <a href="https://github.com" className='btn'>Github</a>
                    <a href="https://github.com" className='btn btn-primary' target='_blank' rel='noreferrer'>Vai al sito</a>
                </div>
            </article>
            <article className='portfolio-item'>
                <div className="portfolio-item-image">
                    <img src={IMG1} alt="" />
                </div>
                <h3>Titolo progetto 1</h3>
                <div className="portfolio-item-cta">
                    <a href="https://github.com" className='btn'>Github</a>
                    <a href="https://github.com" className='btn btn-primary' target='_blank' rel='noreferrer'>Vai a sito</a>
                </div>
            </article>
            
            
        </div>
    </section>
  )
}

export default Portfolio