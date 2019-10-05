import React, { useEffect, useRef } from 'react'
import { Link } from 'gatsby'

import icons from '../../content/assets/img/sprite.svg'

const Services = () => {
    const servicesWrapRef = useRef();
    const servicesContentRef = useRef();
    const servicesSideMenuRef = useRef();

    const handleScroll = () => {
        let fromTop = window.scrollY;
        let servicesOffsetTop = servicesWrapRef.current.offsetTop;
        let servicesMenuItems = Array
            .from(servicesContentRef.current.children)
            .map(item => item.children[0]);
        let servicesSideMenuItems = Array.from(servicesSideMenuRef.current.children);

        if (servicesOffsetTop > fromTop) return;

        servicesMenuItems.forEach((item, i) => {
            let elTop = servicesOffsetTop + item.offsetTop;
            let elBottom = elTop + item.parentElement.offsetHeight;

            if (elTop <= fromTop + 160 && elBottom - 100 > fromTop
                ) {
                    servicesSideMenuItems[i].classList.add('active');
                    item.classList.add('active');
                } else {
                    servicesSideMenuItems[i].classList.remove('active');
                    item.classList.remove('active');
                }
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <section className="services-section">

            <div className="services-head">
                <svg className="services-logo">
                    <use href={`${icons}#services-icon`} />
                </svg>

                <h3 className="services-heading">Services</h3>
                <h5>Creating, managing and extending websites and applications</h5>
            </div>

            <div className="services-separator">
                <div className="subhero">
                    <h2>&lt;?&gt;</h2>
                    <p>As a full stack web developer with more than 5 years experience in web design and web technologies</p>
                    <p className="what-can-i-do">what can I do for you?</p>
                    <h2>&lt;/?&gt;</h2>
                </div>
            </div>

            <div className="services-wrap" ref={servicesWrapRef}>
                <h2 className="services-welcome">
                    Here it is. Contact me if I can help you
                </h2>

                <ul className="services-overview" ref={servicesSideMenuRef}>
                    <li data-name="new-website">
                        <svg viewBox="0 0 20 20">
                            <path d="M1 5 L10 13 L18 5" />
                        </svg>
                        Want a new website
                    </li>

                    <li data-name="store">
                        <svg viewBox="0 0 20 20">
                            <path d="M1 5 L10 13 L18 5" />
                        </svg>
                        Online store
                    </li>
                    <li data-name="dev">
                        <svg viewBox="0 0 20 20">
                            <path d="M1 5 L10 13 L18 5" />
                        </svg>
                        Application, API development</li>
                    <li data-name="design">
                        <svg viewBox="0 0 20 20">
                            <path d="M1 5 L10 13 L18 5" />
                        </svg>
                        Web design
                    </li>
                    <li data-name="hosting">
                        <svg viewBox="0 0 20 20">
                            <path d="M1 5 L10 13 L18 5" />
                        </svg>
                        Hosting, management
                    </li>
                    <li data-name="seo">
                        <svg viewBox="0 0 20 20">
                            <path d="M1 5 L10 13 L18 5" />
                        </svg>
                        On-page, local SEO
                    </li>
                </ul>

                <div className="services-content" ref={servicesContentRef}>

                    <div className="serives-section services-new-site">
                        <h3 data-name="new-website" className="services-item-heading">
                            <svg viewBox="0 0 20 20">
                                <path d="M1 5 L10 13 L18 5" />
                            </svg>
                            Creating new website
                        </h3>

                        <p>
                            Your are a small, medium or larger business but you don't have a website
                        </p>

                        <p>
                            Or you are an artist that doesn't have any coding or website development experience.
                        </p>

                        <p>
                            Or maybe you have that project that you swear you are going to make one day
                            but never started it.
                        </p>

                        <p>
                            Whatever it is, I can make you a clean looking website for your needs.
                        </p>

                        <h4>WordPress</h4>

                        <p>
                            For most people the simple solution is a WordPress site with a built-in blog.
                        </p>

                        <p>
                            That way we can save time and save you money.
                        </p>

                        <h4>Custom coded website</h4>

                        <p>
                            Some people do not like WordPress, it's understandable. And of course for very specific and
                            complex projects WordPress is often not a very flexible
                            and maintainable solution. For projects like that please contact me to discuss
                            how to make it happen.
                        </p>

                        <h4>Landing pages / static website with minimal future changes / GatsbyJs</h4>

                        <p>
                            We are talking about a website like a landing pages where you won't need to change much at all.
                            The cool thing about those is that in some cases you won't even need to pay for hosting services.
                        </p>

                    </div>

                    <div className="serives-section services-store">
                        <h3 data-name="store" className="services-item-heading">
                            <svg viewBox="0 0 20 20">
                                <path d="M1 5 L10 13 L18 5" />
                            </svg>
                            Online store or a catalogue
                        </h3>

                        <p>
                            You have products for sale and you have found out the brick and mortar stores
                            can't quite compete with online shopping.
                        </p>

                        <p>
                            You have heard many stories how
                            people are making money from online stores and everybody is selling
                            everything but their used underwear online.
                        </p>

                        <p>
                            We can set up an online store with WooCommerce or make a custom one if you will.
                            WooCommerce is a very popular tool powered by WordPress used for creating an online store.
                        </p>

                        <p>
                            Also if requested we can use systems like OpenCart or Magento.
                        </p>

                    </div>

                    <div className="serives-section services-development">
                        <h3 data-name="dev" className="services-item-heading">
                            <svg viewBox="0 0 20 20">
                                <path d="M1 5 L10 13 L18 5" />
                            </svg>
                            Application development, API, integrations, etc
                        </h3>

                        <p>
                            As a full stack PHP developer for 5+ years, I have a lot of experience
                            in building different modules and applications.
                        </p>

                        <p>
                            You can hire me to develop a module for your application
                            when you don't need an entire team.
                        </p>

                        <p>
                            An API you want working with databases like MySQL/MariaDB or MongoDB.
                        </p>

                        <p>
                            Most of my experience on the back end is with PHP but also have experience with NodeJs.
                        </p>
                    </div>

                    <div className="serives-section services-design">
                        <h3 data-name="design" className="services-item-heading">
                            <svg viewBox="0 0 20 20">
                                <path d="M1 5 L10 13 L18 5" />
                            </svg>
                            Web design
                        </h3>

                        <p>
                            Now I am not a graphic designer, I can't draw and I don't have a beautiful imagination when it comes to design.
                            Still you can expect a clean simple design for your websites.
                        </p>

                        <p>
                            Another thing we can do is translating your already made design to a fully functioning webpage.
                        </p>

                        <p>
                            Ask me about your design requirements, if we don't think I can do it, I can
                            recommend a great designer to do that instead.
                        </p>

                    </div>

                    <div className="serives-section services-management">
                        <h3 data-name="hosting" className="services-item-heading">
                            <svg viewBox="0 0 20 20">
                                <path d="M1 5 L10 13 L18 5" />
                            </svg>
                            Hosting and server management
                        </h3>

                        <h4>Hosting</h4>

                        <p>
                            In some cases like you won't need to bother with dealing
                            with hosting companies. But in most cases you will need to do that. If you don't want to deal with any it
                            or you are tired of it I can take care of it
                        </p>

                        <h4>Management</h4>

                        <p>
                            This includes setting up database and site backups, updating plugins
                            and themes for WordPress, regularly looking up at logs and monitoring strange
                            activities on your sites.
                        </p>

                    </div>

                    <div className="serives-section services-seo">
                        <h3 data-name="seo" className="services-item-heading">
                            <svg viewBox="0 0 20 20">
                                <path d="M1 5 L10 13 L18 5" />
                            </svg>
                            Search Engine Optimization (SEO)
                        </h3>

                        <p>
                            Every business could use Search Engine Optimization. Now I am not a professional definately,
                            but can help you with basic on-page/code SEOand local SEO.
                        </p>

                        <p>
                            For your local business we will create GoogleMyBusiness account so you are visible on GoogleMaps
                            as legitimate business. We will put all relevant information about the store or your service
                            so when people living in your area search for things relevant to your business,
                            you show up in the results, hopefully on on of the top pages.
                        </p>

                    </div>
                </div>

            </div>

            <div className="services-cta">
                <h3>If you are convinced I am the man for the job contact me</h3>

                <ul className="services-timeline">
                    <li>
                        <div className="services-cta-icon">
                            <svg>
                                <use href={`${icons}#idea`} />
                            </svg>
                        </div>
                        <div className="services-cta-step">Contact me about the idea you have</div>
                    </li>
                    <li>
                        <div className="services-cta-icon">
                            <svg>
                                <use href={`${icons}#opened`} />
                            </svg>
                        </div>
                        <div className="services-cta-step">I will look at it and see if I can help you</div>
                    </li>
                    <li>
                        <div className="services-cta-icon">
                            <svg>
                                <use href={`${icons}#plan`} />
                            </svg>
                        </div>
                        <div className="services-cta-step">We talk, plan and make it happen</div>
                    </li>
                </ul>
            </div>

            <div className="services-contact-cta txt-align-center">
                <Link className="services-contact-btn" to={`/contact`}>Contact</Link>
            </div>

        </section>
    )
}

export default Services
