import React from 'react'
import useForm from '../../hooks/useForm'
import validateContact from '../../utils/validateContact'

const Contact = () => {
    const initialData = { name: '', email: '', message: '' }

    const {
        data,
        errors,
        onChange,
        onBlur,
        handleSubmit
    } = useForm(
        initialData,
        validateContact
    );

    return (
        <div className="hero-screen hero-screen-contact">

            <div className="hero-contact-col">
                <h3 className="heading hero-contact-heading">Contact</h3>
                <p className="hero-contact-text">
                    If you think I can help you with your web projects or issues,
                    then contact me for more information about the task at hand.
                </p>

                <p className="hero-contact-text">
                    Also If you are a designer or developer
                    and you are looking to work with someone
                    leave me a message.
                </p>

                <p className="hero-contact-text">Best regards</p>
            </div>

            <div className="hero-contact-col hero-contact-area">
                <form name="contact" className="hero-contact-form" method="POST" onSubmit={handleSubmit} data-netlify="true" data-netlify-recaptcha="true">
                    <input type="hidden" name="form-name" value="contact" />

                    <div className="hero-contact-line">
                        <label className="hero-contact-label" htmlFor="contact-name">Name</label>
                        <input
                            className="hero-contact-item"
                            id="contact-name"
                            type="text"
                            name="name"
                            autoComplete="off"
                            value={data.name}
                            onChange={onChange}
                            onBlur={onBlur}
                        />
                        { errors.name && <p className="validation-error">{errors.name}</p> }
                    </div>

                    <div className="hero-contact-line">
                        <label className="hero-contact-label" htmlFor="contact-email">Email</label>
                        <input
                            className="hero-contact-item"
                            id="contact-email"
                            type="text"
                            name="email"
                            autoComplete="off"
                            value={data.email}
                            onChange={onChange}
                            onBlur={onBlur}
                        />
                        { errors.email && <p className="validation-error">{errors.email}</p> }
                    </div>

                    <div className="hero-contact-line">
                        <label className="hero-contact-label" htmlFor="contact-message">Message</label>
                        <textarea
                            className="hero-contact-item"
                            id="contact-message"
                            name="message"
                            cols="30"
                            rows="10"
                            value={data.message}
                            onChange={onChange}
                            onBlur={onBlur}
                            ></textarea>
                        { errors.message && <p className="validation-error">{errors.message}</p> }
                    </div>

                    <div className="hero-contact-line">
                        <button type="submit" className="hero-send">Send</button>
                    </div>

                    <div data-netlify-recaptcha="true"></div>

                    <div className="hero-contact-line">
                        <h5 className="heading contact-hint">All fields are required</h5>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact
