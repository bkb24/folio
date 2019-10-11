import React from 'react'
import { Link } from 'gatsby'

import backEndImg from '../../../content/assets/img/back-end.svg'
import fronEndImg from '../../../content/assets/img/fron-end.svg'
import otherSkillsImg from '../../../content/assets/img/other-skills.svg'

const Skills = () => {
    return (
        <section className="skills-section-home">

            <div className="skills-head">
                <div className="skills-icon">{`{ ... }`}</div>
                <h3 className="section-heading section-heading-skills-home">Skills</h3>
                <h5 className="section-subheading section-subheading-skills-home">My most used arsenal for development</h5>
            </div>

            <div className="skills-home-content container">

                <div className="skills-home-section skills-home-backend">

                    <div className="skills-graphic skills-graphic-home">
                        <img src={backEndImg} alt="back end development" />
                    </div>

                    <h3 className="skills-home-heading">Back End</h3>

                    <ul className="skill-items-home">
                        <li className="skill-items-list-home"><div className="skill-main-item">PHP</div>PHP 5/7, OOP, Design Patterns, Laravel 4/5</li>
                        <li className="skill-items-list-home"><div className="skill-main-item">Node</div>ES6, npm, express, socket.io, ws</li>
                        <li className="skill-items-list-home"><div className="skill-main-item">MySQL/MariaDB</div>database design, transactions, raw queries no ORM</li>
                        <li className="skill-items-list-home"><div className="skill-main-item">MongoDB</div></li>
                        <li className="skill-items-list-home"><div className="skill-main-item">Redis</div></li>
                    </ul>
                </div>

                <div className="skills-home-section skills-home-frontend">

                    <div className="skills-graphic skills-graphic-home">
                        <img src={fronEndImg} alt="front end development" />
                    </div>

                    <h3 className="skills-home-heading">Front End</h3>

                    <ul className="skill-items-home">
                        <li className="skill-items-list-home"><div className="skill-main-item">HTML, CSS</div>responsive design, SCSS, Bootstrap 2/3/4</li>
                        <li className="skill-items-list-home"><div className="skill-main-item">Javascript</div>Vue, Vuex, React, Gatsby, jQuery</li>
                        <li className="skill-items-list-home"><div className="skill-main-item">Build tools </div>gulp, Webpack, vue-cli, create-react-app</li>
                        <li className="skill-items-list-home"><div className="skill-main-item">SVG </div>icons systems, inline, external, animations</li>
                    </ul>
                </div>

                <div className="skills-home-section skills-home-other">

                    <div className="skills-graphic skills-graphic-home">
                        <img src={otherSkillsImg} alt="front end development" />
                    </div>

                    <h3 className="skills-home-heading">Other relevant skills</h3>

                    <ul className="skill-items-home">
                        <li className="skill-items-list-home">
                            <div className="skill-main-item">Version control</div>
                            SVN, Tortoise SVN,
                            Git, Github, Gitlab
                        </li>
                        <li className="skill-items-list-home">
                            <div className="skill-main-item">Project management</div>
                            JIRA, Confluence, Gitlab
                        </li>
                        <li className="skill-items-list-home">
                            <div className="skill-main-item">Design</div>
                            Photoshop, Gravit Designer, Adobe XD
                        </li>
                        <li className="skill-items-list-home">
                            <div className="skill-main-item">Server management</div>
                            Linux, cPanel
                        </li>
                    </ul>
                </div>
            </div>

            <div className="section-cta section-cta-home-skills">
                <Link className="section-cta-btn" to={`/skills`}>More</Link>
                <a href="/pdf/CV.pdf" className="section-cta-btn">Resume</a>
            </div>

        </section>
    )
}

export default Skills
