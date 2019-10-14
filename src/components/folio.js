import React from 'react'

import icons from '../../content/assets/img/sprite.svg'

const Folio = (props) => {
    return (
        <section className="folio-section">
             <div className="section-head-folio">
                <h2 className="projects-heading">Projects</h2>
                <h5 className="projects-subheading">
                    Here is some of my most notable work
                </h5>
            </div>

            {
                props.projects.map((item, i) => {
                    return <div key={i} className="project-item">
                        <div className="project-img-wrap">
                            <div className="project-img project-img-main">
                                <img src={item.main_img_d} alt={`${item.name} desktop shot`} />
                            </div>
                            <div className="project-img project-img-secondary">
                                <img src={item.main_img_m} alt={`${item.name} mobile shot`} />
                            </div>
                        </div>

                        <div className="project-content">
                            <h3 className="project-title">{item.title}</h3>

                            <div className="project-link-wrap">
                                <a className="project-link" href={item.url}>{item.url}</a>
                            </div>

                            <div className="project-description">
                                <p className="project-text">
                                    { item.description }
                                </p>
                            </div>

                            <div className="project-tech">
                                <h4 className="project-tech-title">Technologies used</h4>
                                <ul className="project-tech-list">
                                    {
                                        item.tech.map(tech => {
                                            return <li className="project-tech-list-item">{ tech }</li>
                                        })
                                    }
                                </ul>
                            </div>

                            <div className="project-cta">
                                <div className="project-address"></div>
                                { item.code.trim()
                                    &&
                                    <div className="project-code">
                                        <a className="project-code-link" href={item.code}>
                                            <svg>
                                                <use href={`${icons}#github`} />
                                            </svg>
                                            code
                                        </a>
                                    </div>
                                }
                            </div>

                        </div>
                    </div>
                })
            }

            <div className="home-goto-wrap">
                <a className="home-goto-projects" href="#">See all</a>
            </div>

        </section>

    )
}

export default Folio
