import React from 'react'

import icons from '../../../content/assets/img/sprite.svg'

const Services = () => {
    return (
        <div className="hero-screen hero-screen-services">
            <div className="hero-services-logo">
                <svg>
                    <use href={`${icons}#services-icon`} />
                </svg>
                <h3 className="heading hero-services-main-heading">My services</h3>
                <h5 className="heading hero-services-subheading">What I can do for you</h5>
            </div>

            <ul className="hero-services-list">
                <li className="hero-services-item">New website</li>
                <li className="hero-services-item">Online store</li>
                <li className="hero-services-item">Web design</li>
                <li className="hero-services-item">Application, API development</li>
                <li className="hero-services-item">Hosting, management</li>
                <li className="hero-services-item">On-page, local SEO</li>
            </ul>
        </div>
    )
}

export default Services
