import React, { Component } from 'react'
import { Link } from "gatsby"

import icons from '../../content/assets/img/sprite.svg'

const MainNav = React.forwardRef((props, ref) => (
    <>
        <input id="menu-toggler" type="checkbox" />

        <label className="main-menu-toggler" htmlFor="menu-toggler"></label>

        <nav className={`main-nav${props.hidden ? ' hidden' : ''}`}>
            <ul className="main-menu" ref={ref} style={{
                transform: props.hidden ? `translateX(100%)` : ``
            }}>
                <li className="main-menu-item">
                    <Link className="main-menu-link home"
                        to={`/`}
                    >
                        Home
                    </Link>
                </li>
                <li className="main-menu-item">
                    <Link className="main-menu-link projects"
                        to={`/folio`}
                    >
                        Folio
                    </Link>
                </li>
                <li className="main-menu-item">
                    <Link className="main-menu-link services"
                        to={`/services`}
                    >
                        Services
                    </Link>
                </li>
                <li className="main-menu-item">
                    <Link className="main-menu-link skills"
                        to={`/skills`}
                    >
                        Skills
                    </Link>
                </li>
                <li className="main-menu-item">
                    <Link className="main-menu-link contact"
                        to={`/contact`}
                    >
                        Contact
                    </Link>
                </li>
            </ul>
            <div className="main-nav-social">
                <a className="main-nav-social-link" href="">
                    <svg>
                        <use href={`${icons}#linkedin`} />
                    </svg>
                </a>
                <a className="main-nav-social-link" href="">
                    <svg>
                        <use href={`${icons}#github`} />
                    </svg>
                </a>
                <a href="/pdf/CV.pdf" className="main-nav-social-link">
                    <span className="resume">Resume</span>
                </a>
            </div>
        </nav>
    </>
))

export default MainNav
