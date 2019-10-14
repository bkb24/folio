import React, { Component, useState } from 'react'
import { Link } from "gatsby"

import SideMenu from './side-menu'
import Welcome from './welcome'
import Folio from './folio'
import Services from './services'
import Skills from './skills'
import Contact from './contact'

const Hero = (props) => {
    let [menuItems, ] = useState([
        { name: 'Welcome',  component: Welcome,     to: '/' },
        { name: 'Folio',    component: Folio,       to: '/folio' },
        { name: 'Services', component: Services,    to: '/services' },
        { name: 'Skills',   component: Skills,      to: '/skills' },
        { name: 'Contact',  component: Contact,     to: '/contact' }
    ]);
    let [activeScreen, setActiveScreen] = useState('Welcome');

    let heightStyle = props.isMobile ? { height: props.height } : {};

    return (
        <div className="hero" style={heightStyle}>
            <SideMenu ref={props.sideNavRef}>
                {
                    menuItems.map((item, i) => {
                        let Component = item.component;
                        let active = item.name === activeScreen;

                        return (
                            <li className="side-menu-item" key={i}>
                                <Link
                                    className={`side-menu-link ${active ? 'active' : ''}`}
                                    onMouseOver={e => setActiveScreen(item.name)} to={item.to}
                                >
                                    <span className="side-menu-item-name">{item.name}</span>
                                </Link>
                                <Component />
                            </li>
                        )
                    })
                }
            </SideMenu>
            <div className="hero-slide-down">more</div>
        </div>
    )
}

export default Hero
