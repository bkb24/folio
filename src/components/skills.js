import React from 'react'

import backEndImg from '../../content/assets/img/back-end.svg'
import fronEndImg from '../../content/assets/img/fron-end.svg'
import otherSkillsImg from '../../content/assets/img/other-skills.svg'

const Skills = () => {
    return (
        <section className="skills-section">
            <div className="section-head-tilted-bottom">
                <div className="skills-icon">{`{ ... }`}</div>
                <h1 className="section-heading">Skills</h1>
                <h5 className="section-subheading">My most used arsenal for development</h5>
            </div>

            <div className="skills-content">

                <div className="skills-content-bg"></div>

                <div className="skills-component skills-backend">
                    <h3 className="skills-component-heading">Back End Development</h3>

                    <div className="skill-items-wrap">
                        <div className="skills-general">
                            <h3>General experience</h3>

                            <p>
                                5+ years experience in development with back end technologies. Mostly with PHP, Laravel, MySQL / MariDB.
                                I have knowledge in HTTP, Web Services, Restful APIs, authentication, authorization, web security and so on.
                            </p>

                            <p>
                                Professionally I have 3+ years as a full stach PHP developer at <a href="https://ucha.se">ucha.se</a>. This
                                is one of the most popular learning platforms in Bulgaria. There I was working on their in-house MVC framework
                                and ORM (data mapper), so I have some raw PHP experience outside of implementing some other parts or the application.
                            </p>
                        </div>

                        <div className="skills-item">
                            <h3>PHP</h3>
                            <ul>
                                <li>Raw PHP 5/7</li>
                                <li>OOP</li>
                                <li>Laravel 5.x, 6.x</li>
                            </ul>
                        </div>

                        <div className="skills-item">
                            <h3>NodeJs</h3>
                            <ul>
                                <li>ES6, npm</li>
                                <li>Express Js</li>
                                <li>JWT</li>
                                <li>Websockets</li>
                            </ul>
                        </div>

                        <div className="skills-item">
                            <h3>MySQL / MariaDB</h3>
                            <ul>
                                <li>Complex raw queries</li>
                                <li>Database design</li>
                                <li>Transactions</li>
                            </ul>
                        </div>

                        <div className="skills-item">
                            <h3>MongoDB</h3>
                            <ul>
                                <li>Basic</li>
                            </ul>
                        </div>

                        <div className="skills-item">
                            <h3>Redis</h3>
                            <ul>
                                <li>Cachin</li>
                            </ul>
                        </div>

                    </div>

                    <div className="skills-graphic">
                        <img src={backEndImg} alt="back end development" />
                    </div>
                </div>

                <div className="skills-component skills-frontend">
                    <h3 className="skills-component-heading">Front End Development</h3>
                    <div className="skills-graphic">
                        <img src={fronEndImg} alt="front end development" />
                    </div>

                    <div className="skill-items-wrap">
                        <div className="skills-general">
                            <h3>General experience</h3>

                            <p>
                                Originally I started as a front end developer trying to make
                                good looking designs. But it became increasingly difficult to
                                make an application without knowing to code. So I got into CSS and javascript.
                            </p>

                            <p>
                                I have most of my time spent with javascript with vanilla and after that jquery.
                            </p>

                            <p>
                                But now I mostly like using Vue and Vuex, then React and Gatsby according to the project.
                            </p>
                        </div>

                        <div className="skills-item">
                            <h3>HTML, CSS</h3>
                            <ul>
                                <li>Semantic markup</li>
                                <li>Responsive design</li>
                                <li>SCSS</li>
                                <li>Bootstrap 2/3/4</li>
                                <li>Clarity UI</li>
                            </ul>
                        </div>
                        <div className="skills-item">
                            <h3>Javascript</h3>
                            <ul>
                                <li>Vue, Vuex</li>
                                <li>React</li>
                                <li>GatsbyJs</li>
                                <li>jQuery</li>
                            </ul>
                        </div>
                        <div className="skills-item">
                            <h3>Build tools</h3>
                            <ul>
                                <li>Gulp</li>
                                <li>Webpack</li>
                                <li>vue-cli, create-react-app</li>
                            </ul>
                        </div>
                        <div className="skills-item">
                            <h3>SVG</h3>
                            <ul>
                                <li>Inline, external SVG with changing colors and animations</li>
                                <li>Creating icon systems</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="skills-component skills-other">
                    <h3 className="skills-component-heading">Other relevant skills</h3>

                    <div className="skills-graphic">
                        <img src={otherSkillsImg} alt="other relevant skills" />
                    </div>

                    <div className="skills-item">
                        <h3>Version control</h3>
                        <ul>
                            <li>SVN - Tortoise SVN</li>
                            <li>Git, Github, Gitlab</li>
                        </ul>
                    </div>
                    <div className="skills-item">
                        <h3>Project management</h3>
                        <ul>
                            <li>JIRA</li>
                            <li>Confluence</li>
                            <li>Gitlab</li>
                        </ul>
                    </div>
                    <div className="skills-item">
                        <h3>Design</h3>
                        <ul>
                            <li>Photoshop</li>
                            <li>Gravit Designer</li>
                            <li>Adobe XD</li>
                        </ul>
                    </div>
                    <div className="skills-item">
                        <h3>Server management</h3>
                        <ul>
                            <li>Linux</li>
                            <li>cPanel</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="txt-align-center">
                <a href="/pdf/CV.pdf" className="skills-resume-btn">See Resume</a>
            </div>
        </section>
    )
}

export default Skills
