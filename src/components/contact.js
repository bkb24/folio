import React from 'react'

import icons from '../../content/assets/img/sprite.svg'

const Contact = () => {
    return (
        <section className="home-contacts">
            <div className="contacts-head">
                <div className="contacts-icon">
                    <svg>
                        <use href={`${icons}#envelope`} />
                    </svg>
                </div>
                <h3 className="">Contact</h3>
                <h5>
                    If you want to work with me shoot me a message below
                    <br /> or find me on social
                </h5>
                <div className="contact-social">
                    <a href="">
                        <svg>
                            <use href={`${icons}#linkedin`} />
                        </svg>
                    </a>
                    <a href="">
                        <svg>
                            <use href={`${icons}#github`} />
                        </svg>
                    </a>
                </div>
            </div>

            <form className="contacts-form" action="">
                <div className="contact-line">
                    <label htmlFor="">Name</label>
                    <input autoComplete="off" type="text" name="name" />
                    <div className="form-field-underline"></div>
                    <svg viewBox="0 0 20 20">
                        <path d="M1 5 L10 13 L18 5" />
                    </svg>
                </div>

                <div className="contact-line">
                    <label htmlFor="">Email</label>
                    <input autoComplete="off" type="text" name="email" />
                    <div className="form-field-underline"></div>
                    <svg viewBox="0 0 20 20">
                        <path d="M1 5 L10 13 L18 5" />
                    </svg>
                </div>

                <div className="contact-line">
                    <label htmlFor="">Message</label>
                    <textarea name="message" id="" cols="30" rows="10"></textarea>
                    <div className="form-field-underline"></div>
                    <svg viewBox="0 0 20 20">
                        <path d="M1 5 L10 13 L18 5" />
                    </svg>
                </div>

                <div className="contact-line">
                    <button className="hero-send">Send</button>
                </div>

                <div className="contact-line">
                    <h5>All fields are required</h5>
                </div>
            </form>

        </section>
    )
}

export default Contact
