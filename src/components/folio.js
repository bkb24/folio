import React from 'react'

import icons from '../../content/assets/img/sprite.svg'

const Folio = () => {
    return (
        <section className="folio-section">
             <div className="section-head-folio">
                <h2 className="projects-heading">Projects</h2>
                <h5 className="projects-subheading">
                    Here is some of my most notable work
                </h5>
            </div>

            <div className="project-item">
                <div className="project-img-wrap">
                    <div className="project-img project-img-main">
                        <img src="./projects/ufo.png" alt="" />
                    </div>
                    <div className="project-img project-img-secondary">
                        <img src="./projects/ufo-game.png" alt="" />
                    </div>
                </div>

                <div className="project-content">
                    <h3 className="project-title">UFO Battles Duel</h3>
                    <div className="project-link-wrap">
                        <a className="project-link" href="https://ufo-battles.herokuapp.com">https://ufo-battles.herokuapp.com</a>
                    </div>
                    <div className="project-description">
                        <p className="project-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, exercitationem cupiditate?
                            Reiciendis animi provident necessitatibus aliquid optio expedita quia accusantium.</p>

                        <p className="project-text">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit dolore quos odio nobis animi.
                            Ullam laudantium accusantium quos laborum excepturi commodi sapiente beatae ea, laboriosam libero impedit ratione aspernatur illo.
                        </p>
                    </div>
                    <div className="project-tech">
                        <h4 className="project-tech-title">Technologies used</h4>
                        <ul className="project-tech-list">
                            <li className="project-tech-list-item">NodeJs</li>
                            <li className="project-tech-list-item">express.js</li>
                            <li className="project-tech-list-item">Websockets</li>
                            <li className="project-tech-list-item">MongoDB</li>
                            <li className="project-tech-list-item">Redis</li>
                            <li className="project-tech-list-item">Vue</li>
                            <li className="project-tech-list-item">Vuex</li>
                            <li className="project-tech-list-item">SCSS</li>
                            <li className="project-tech-list-item">SVG</li>
                        </ul>
                    </div>
                    <div className="project-cta">
                        <div className="project-address"></div>
                        <div className="project-code">
                            <a className="project-code-link" href="https://github.com/bkb24/simple-user-behavior-recording">
                                <svg>
                                    <use href={`${icons}#github`} />
                                </svg>
                                code
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="project-item">
                <div className="project-img-wrap">
                    <div className="project-img project-img-main">
                        <img src="./projects/kostinbrod.png" alt="" />
                    </div>
                    <div className="project-img project-img-secondary">
                        <img src="./projects/kostinbrod.png" alt="" />
                    </div>
                </div>

                <div className="project-content">
                    <h3 className="project-title">City of Kostinbrod</h3>
                    <div className="project-link-wrap">
                        <a className="project-link" href="https://ufo-battles.herokuapp.com">https://ufo-battles.herokuapp.com</a>
                    </div>
                    <div className="project-description">
                        <p className="project-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, exercitationem cupiditate?
                            Reiciendis animi provident necessitatibus aliquid optio expedita quia accusantium.</p>

                        <p className="project-text">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit dolore quos odio nobis animi.
                            Ullam laudantium accusantium quos laborum excepturi commodi sapiente beatae ea, laboriosam libero impedit ratione aspernatur illo.
                        </p>
                    </div>
                    <div className="project-tech">
                        <h4 className="project-tech-title">Technologies used</h4>
                        <ul className="project-tech-list">
                            <li className="project-tech-list-item">NodeJs</li>
                            <li className="project-tech-list-item">express.js</li>
                            <li className="project-tech-list-item">Websockets</li>
                            <li className="project-tech-list-item">MongoDB</li>
                            <li className="project-tech-list-item">Redis</li>
                            <li className="project-tech-list-item">Vue</li>
                            <li className="project-tech-list-item">Vuex</li>
                            <li className="project-tech-list-item">SCSS</li>
                            <li className="project-tech-list-item">SVG</li>
                        </ul>
                    </div>
                    <div className="project-cta">
                        <div className="project-address"></div>
                        <div className="project-code"></div>
                    </div>
                </div>
            </div>

            <div className="project-item">
                <div className="project-img-wrap">
                    <div className="project-img project-img-main">
                        <img src="./projects/kostinbrod.png" alt="" />
                    </div>
                    <div className="project-img project-img-secondary">
                        <img src="./projects/kostinbrod.png" alt="" />
                    </div>
                </div>

                <div className="project-content">
                    <h3 className="project-title">City of Kostinbrod</h3>
                    <div className="project-link-wrap">
                        <a className="project-link" href="https://ufo-battles.herokuapp.com">https://ufo-battles.herokuapp.com</a>
                    </div>
                    <div className="project-description">
                        <p className="project-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, exercitationem cupiditate?
                            Reiciendis animi provident necessitatibus aliquid optio expedita quia accusantium.</p>

                        <p className="project-text">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit dolore quos odio nobis animi.
                            Ullam laudantium accusantium quos laborum excepturi commodi sapiente beatae ea, laboriosam libero impedit ratione aspernatur illo.
                        </p>
                    </div>
                    <div className="project-tech">
                        <h4 className="project-tech-title">Technologies used</h4>
                        <ul className="project-tech-list">
                            <li className="project-tech-list-item">NodeJs</li>
                            <li className="project-tech-list-item">express.js</li>
                            <li className="project-tech-list-item">Websockets</li>
                            <li className="project-tech-list-item">MongoDB</li>
                            <li className="project-tech-list-item">Redis</li>
                            <li className="project-tech-list-item">Vue</li>
                            <li className="project-tech-list-item">Vuex</li>
                            <li className="project-tech-list-item">SCSS</li>
                            <li className="project-tech-list-item">SVG</li>
                        </ul>
                    </div>
                    <div className="project-cta">
                        <div className="project-address"></div>
                        <div className="project-code"></div>
                    </div>
                </div>
            </div>

            <div className="project-item">
                <div className="project-img-wrap">
                    <div className="project-img project-img-main">
                        <img src="./projects/kostinbrod.png" alt="" />
                    </div>
                    <div className="project-img project-img-secondary">
                        <img src="./projects/kostinbrod.png" alt="" />
                    </div>
                </div>

                <div className="project-content">
                    <h3 className="project-title">City of Kostinbrod</h3>
                    <div className="project-link-wrap">
                        <a className="project-link" href="https://ufo-battles.herokuapp.com">https://ufo-battles.herokuapp.com</a>
                    </div>
                    <div className="project-description">
                        <p className="project-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, exercitationem cupiditate?
                            Reiciendis animi provident necessitatibus aliquid optio expedita quia accusantium.</p>

                        <p className="project-text">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit dolore quos odio nobis animi.
                            Ullam laudantium accusantium quos laborum excepturi commodi sapiente beatae ea, laboriosam libero impedit ratione aspernatur illo.
                        </p>
                    </div>
                    <div className="project-tech">
                        <h4 className="project-tech-title">Technologies used</h4>
                        <ul className="project-tech-list">
                            <li className="project-tech-list-item">NodeJs</li>
                            <li className="project-tech-list-item">express.js</li>
                            <li className="project-tech-list-item">Websockets</li>
                            <li className="project-tech-list-item">MongoDB</li>
                            <li className="project-tech-list-item">Redis</li>
                            <li className="project-tech-list-item">Vue</li>
                            <li className="project-tech-list-item">Vuex</li>
                            <li className="project-tech-list-item">SCSS</li>
                            <li className="project-tech-list-item">SVG</li>
                        </ul>
                    </div>
                    <div className="project-cta">
                        <div className="project-address"></div>
                        <div className="project-code"></div>
                    </div>
                </div>
            </div>

            <div className="home-goto-wrap">
                <a className="home-goto-projects" href="#">See all</a>
            </div>

        </section>

    )
}

// query MyQuery {
//     allMarkdownRemark(
//       filter: {
//           frontmatter: {
//             type: { eq: "project" },
//             show_on_home: { eq: true }
//           }
//         },
//       limit: 3
//     ) {
//       edges {
//         node {
//           frontmatter {
//             title
//           }
//         }
//       }
//     }
//   }

export default Folio
