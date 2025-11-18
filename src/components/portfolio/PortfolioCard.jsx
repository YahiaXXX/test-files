import React from 'react'

function PortfolioCard({url,title,github,demo}) {
  return (
    <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={url} alt="" />
          </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
            <a href={github} className="btn" target='_blank' rel="noreferrer">
              Github
            </a>
            <a
              href={demo}
              className="btn btn-primary"
              target='_blank'
              rel="noreferrer"
            >
              Live Demo
            </a>
            </div>
          
        </article>
  )
}

export default PortfolioCard