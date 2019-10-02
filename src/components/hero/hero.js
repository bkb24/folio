import React, { Component } from 'react'
import { Link } from "gatsby"

import SideMenu from './side-menu'
import Welcome from './welcome'
import Folio from './folio'
import Services from './services'
import Skills from './skills'
import Contact from './contact'

class Hero extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menuItems: [
                { name: 'Welcome',  component: Welcome,     to: '/' },
                { name: 'Folio',    component: Folio,       to: '/folio' },
                { name: 'Services', component: Services,    to: '/services' },
                { name: 'Skills',   component: Skills,      to: '/skills' },
                { name: 'Contact',  component: Contact,     to: '/contact' }
            ],
            activeScreen: 'Welcome'
        }
    }

    setActiveScreen = item => {
        this.setState((state,props) => {
            return { activeScreen: item }
        })
    }

    render() {
        let { menuItems, activeScreen } = this.state;

        return (
            <div className="hero">
                <SideMenu ref={this.props.sideNavRef}>
                    {
                        menuItems.map((item, i) => {
                            let Component = item.component;
                            let active = item.name === activeScreen;

                            return (
                                <li className="side-menu-item" key={i}>
                                    <Link
                                        className={`side-menu-link ${active ? 'active' : ''}`}
                                        onMouseOver={e => this.setActiveScreen(item.name)} to={item.to}
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
}

export default Hero


// componentDidMount = () => {
    //     window.addEventListener('scroll', this.handleScroll);
    // }

    // componentWillUnmount = () => {
    //     window.removeEventListener('scroll', this.handleScroll);
    // }

    // handleScroll = (event) => {
    //     let mainMenuItems = Array.from(this.ref.current.children);

    //     // window.scrollY + 70 > mainMenu.offsetTop ?
    //         // fixedNav.classList.remove('hidden') : fixedNav.classList.add('hidden');

    //     mainMenuItems.forEach((item, index) => {

    //         if (window.scrollY + 100 > item.offsetTop) {
    //             if (!item.classList.contains('hidden')) {
    //                 item.classList.add('hidden');
    //                 // console.log('hide', item)
    //                 // moveMenu(index);
    //             }
    //         } else {
    //             if (item.classList.contains('hidden')) {
    //                 // console.log('show')
    //                 item.classList.remove('hidden');
    //                 // moveMenu(index - 1);
    //             }
    //         }
    //     });
    // }