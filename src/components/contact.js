import React from 'react'

import icons from '../../content/assets/img/sprite.svg'
import useForm from '../hooks/useForm'
import validateContact from '../utils/validateContact'
import MessageSent from './MessageSent'

const Contact = () => {
    const initialData = { name: '', email: '', message: '' }

    const {
        data,
        errors,
        onChange,
        onBlur,
        handleSubmit,
        success
    } = useForm(
        initialData,
        validateContact
    );

    return (
        <section className="contact-section">
            <div className="section-head-tilted section-head-tilted-contact">
                <div className="section-main-icon-wrap">
                    <svg className="section-main-icon contact-section-main-icon">>
                        <use href={`${icons}#envelope`} />
                    </svg>
                </div>
                <h3 className="section-heading">Contact</h3>
                <h5 className="section-subheading">
                    If you want to work with me shoot me a message below
                    <br /> or find me on social
                </h5>
                <div className="contact-social">
                    <a href="https://www.linkedin.com/in/borislav-borisov-92564b170">
                        <svg>
                            <use href={`${icons}#linkedin`} />
                        </svg>
                    </a>
                    <a href="https://github.com/bkb24">
                        <svg>
                            <use href={`${icons}#github`} />
                        </svg>
                    </a>
                </div>
            </div>

            {   success ?

                <MessageSent />

                :

                <form
                    name="contact"
                    className="contact-form"
                    method="POST"
                    onSubmit={handleSubmit}
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                >
                    <input type="hidden" name="bot-field" />
                    <input type="hidden" name="form-name" value="contact" />

                    <div className="contact-line">
                        <label htmlFor="">Name</label>
                        <input
                            autoComplete="off"
                            type="text"
                            name="name"
                            value={data.name}
                            onChange={onChange}
                            onBlur={onBlur}
                        />
                        <div className="form-field-underline"></div>
                        { errors.name && <p className="validation-error">{errors.name}</p> }
                        <svg viewBox="0 0 20 20">
                            <path d="M1 5 L10 13 L18 5" />
                        </svg>
                    </div>

                    <div className="contact-line">
                        <label htmlFor="">Email</label>
                        <input
                            autoComplete="off"
                            type="text"
                            name="email"
                            value={data.email}
                            onChange={onChange}
                            onBlur={onBlur}
                        />
                        <div className="form-field-underline"></div>
                        { errors.email && <p className="validation-error">{errors.email}</p> }
                        <svg viewBox="0 0 20 20">
                            <path d="M1 5 L10 13 L18 5" />
                        </svg>
                    </div>

                    <div className="contact-line">
                        <label htmlFor="">Message</label>
                        <textarea
                            name="message"
                            id=""
                            cols="30"
                            rows="10"
                            value={data.message}
                            onChange={onChange}
                            onBlur={onBlur}
                        ></textarea>
                        <div className="form-field-underline"></div>
                        { errors.message && <p className="validation-error">{errors.message}</p> }
                        <svg viewBox="0 0 20 20">
                            <path d="M1 5 L10 13 L18 5" />
                        </svg>
                    </div>

                    <div data-netlify-recaptcha="true"></div>

                    <div className="contact-line">
                        <button className="hero-send">Send</button>
                    </div>

                    <div className="contact-line">
                        <h5>All fields are required</h5>
                    </div>
                </form>
            }

        </section>
    )
}

export default Contact
