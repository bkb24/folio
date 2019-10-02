import React from 'react'

const Skills = () => {
    return (
        <div className="hero-screen hero-screen-skills">
            {/* <div className="hero-skills-logos"></div> */}

            <div className="hero-skills-wrap">
                <h3 className="heading hero-skills-heading">Skills & experience through 5+ years in web</h3>
                <div className="hero-skills-card">
                    <h4 className="heading hero-skills-type-heading">WordPress</h4>
                    <p>
                        I can develop your wordpress or woocommerce website.
                        Also can customize themes and develop widgets or plugins if needed.
                    </p>
                </div>
                <div className="hero-skills-card">
                    <h4 className="heading hero-skills-type-heading">Back End</h4>
                    <ul className="hero-skills-list">
                        <li>PHP, Laravel</li>
                        <li>Node, express</li>
                        <li>MySQL / MariaDB, MongoDB, Redis</li>
                        <li>API development</li>
                        <li>Websockets</li>
                    </ul>
                </div>
                <div className="hero-skills-card">
                    <h4 className="heading hero-skills-type-heading">Front End</h4>
                    <ul className="hero-skills-list">
                        <li>vanilla javascript, CSS, HTML</li>
                        <li>Vue, Vuex, React</li>
                        <li>React, GatsbyJs</li>
                        <li>SCSS, Bootstrap</li>
                        <li>webpack, gulp</li>
                        <li>SVG</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Skills
