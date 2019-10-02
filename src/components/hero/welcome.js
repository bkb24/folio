import React from 'react'

import image from '../../../content/assets/img/hero-welcome.svg'

const Welcome = () => {
    return (
        <div className="hero-screen hero-screen-welcome">
            <div className="hero-welcome-bg">
                <img className="hero-welcome-graphic" src={image} alt="" />
            </div>

            <div className="hero-welcome-copy">
                <h1 className="heading main-heading">Web design <br /> & development</h1>
                <h3 className="hero-welcome-subheading">Creating, managing and extending websites, web applications and services</h3>

                <ul className="hero-welcome-services">
                    <li className="hero-welcome-services-item">
                        Making WordPress, Woocommerce sites
                    </li>
                    <li className="hero-welcome-services-item">
                        Translating your own designs from Figma, AdobeXD, Phostoshop to a fully functioning website
                    </li>
                    <li className="hero-welcome-services-item">
                        Building apps, APIs, web services with PHP, Laravel, NodeJs, express, Vue and React
                    </li>
                    <li className="hero-welcome-services-item">
                        Managing hosting and domains
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Welcome
