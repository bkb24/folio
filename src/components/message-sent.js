import React from 'react'
import { Link } from 'gatsby'

import SectionButton from './partials/section-cta-btn'
import icons from '../../content/assets/img/sprite.svg'

const MessageSent = () => {
    return (
        <div className="contact-success">
            <div className="contact-success-icon">
                <svg>
                    <use href={`${icons}#success`} />
                </svg>
            </div>
            <div className="contact-success-message">
                Message sent successfully!
            </div>
            <div className="contact-success-message">
                I should get back to you shortly.
            </div>
            <SectionButton class="success" label="Home" target="/" />
        </div>
    )
}

export default MessageSent
