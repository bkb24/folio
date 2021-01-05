import React from 'react'
import SectionButton from '../partials/section-cta-btn'

import icons from '../../../content/assets/img/sprite.svg'
import graphic from '../../../content/assets/img/services-graphic-7.svg'

const Services = () => {
    return (
        <section className="services-section">
            <div className="services-head">
                <svg className="section-main-icon services-logo">
                    <use href={`${icons}#services-icon`} />
                </svg>

                <h3 className="section-heading">Services</h3>
                <h5 className="section-subheading">
                    Creating, managing and extending websites and applications
                </h5>
            </div>

            <div className="services-separator services-home-separator">
                <div className="subhero">
                    <h2>&lt;?&gt;</h2>
                    <p>
                        As a full stack web developer with more than 5 years
                        experience in web design and web technologies
                    </p>
                    <p className="what-can-i-do">what can I do for you?</p>
                    <h2>&lt;/?&gt;</h2>
                </div>
            </div>

            <div className="services-home-content">
                <h3 className="services-home-check">Check it out!</h3>

                <ul className="services-home-list">
                    <li className="services-list-item">
                        <div className="services-item-title">
                            Creating a new website
                        </div>
                        <div className="services-item-subtitle">
                            Get a new custom coded or WordPress website for you
                        </div>
                    </li>
                    <li className="services-list-item">
                        <div className="services-item-title">
                            Making an online store
                        </div>
                        <div className="services-item-subtitle">
                            Woocommerce or a custom store for your business
                        </div>
                    </li>
                    <li className="services-list-item">
                        <div className="services-item-title">
                            Application, API development
                        </div>
                        <div className="services-item-subtitle">
                            Development of a full application or a module or an API
                        </div>
                    </li>
                    <li className="services-list-item">
                        <div className="services-item-title">
                            Web design
                        </div>
                        <div className="services-item-subtitle">
                            Get a clean design like this one from me or from a professional designer
                        </div>
                    </li>
                    <li className="services-list-item">
                        <div className="services-item-title">
                            Website hosting, management
                        </div>
                        <div className="services-item-subtitle">
                            Don't deal with any hostings and management, leave that to me
                        </div>
                    </li>
                    <li className="services-list-item">
                        <div className="services-item-title">
                            On-page, local SEO
                        </div>
                        <div className="services-item-subtitle">
                            Get a basic on-page SEO
                        </div>
                    </li>
                </ul>

                <div className="services-graphic">
                    <img src={graphic} alt="web development and basic SEO" />
                </div>

                <SectionButton target="/services" label="More" class="services-home" />
            </div>

        </section>
    )
}

export default Services
