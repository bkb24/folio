import React from 'react'

import icons from '../../content/assets/img/sprite.svg'

const Project = (props) => {
    const { project } = props;

    return (
        <div className="project-item">
            <div className="project-img-wrap">
                <div className="project-img project-img-main">
                    <img src={project.main_img_d} alt={`${project.name} desktop shot`} />
                </div>
                <div className="project-img project-img-secondary">
                    <img src={project.main_img_m} alt={`${project.name} mobile shot`} />
                </div>
            </div>

            <div className="project-content">
                <h3 className="project-title">{project.title}</h3>

                <div className="project-link-wrap">
                    <a className="project-link" href={project.url}>{project.url}</a>
                </div>

                <div className="project-description">
                    <p className="project-text">
                        { project.description }
                    </p>
                </div>

                <div className="project-tech">
                    <h4 className="project-tech-title">Technologies used</h4>
                    <ul className="project-tech-list">
                        {
                            project.tech.map((tech, j) => {
                                return <li key={j} className="project-tech-list-item">{ tech }</li>
                            })
                        }
                    </ul>
                </div>

                <div className="project-cta">
                    <div className="project-address"></div>
                    { project.code.trim()
                        &&
                        <div className="project-code">
                            <a className="project-code-link" href={project.code}>
                                <svg>
                                    <use href={`${icons}#${project.repo_service}`} />
                                </svg>
                                code
                            </a>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Project
