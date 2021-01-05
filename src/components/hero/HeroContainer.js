import React, { Component, useState } from 'react'
import { Link } from "gatsby"

import SideMenu from './SideMenu'
import Welcome from './Welcome'
import FolioSection from './FolioSection'
import ServicesSection from './ServicesSection'
import SkillsSection from './SkillsSection'
import ContactSection from './ContactSection'

const HeroContainer = (props) => {
    let [menuItems, ] = useState([
        { name: 'Welcome',  component: Welcome,         to: '/' },
        { name: 'Folio',    component: FolioSection,    to: '/folio' },
        { name: 'Services', component: ServicesSection, to: '/services' },
        { name: 'Skills',   component: SkillsSection,   to: '/skills' },
        { name: 'Contact',  component: ContactSection,  to: '/contact' }
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
                        let data = item.name === 'Folio' ? props.projects : [];

                        return (
                            <li className="side-menu-item" key={i}>
                                <Link
                                    className={`side-menu-link ${active ? 'active' : ''}`}
                                    onMouseOver={e => setActiveScreen(item.name)} to={item.to}
                                >
                                    <span className="side-menu-item-name">{item.name}</span>
                                </Link>
                                <Component data={data} />
                            </li>
                        )
                    })
                }
            </SideMenu>
            <div className="hero-slide-down">more</div>
        </div>
    )
}

export default HeroContainer
