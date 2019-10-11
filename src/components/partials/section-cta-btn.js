import React from 'react'
import { Link } from 'gatsby'

const SectionButton = (props) => {
    return (
        <div className={`section-cta${props.class ? ' section-cta-' + props.class : ''}`}>
            {
                props.standartLink ?
                <a href={props.target} className="section-cta-btn">{props.label}</a> :
                <Link className="section-cta-btn" to={props.target}>{props.label}</Link>
            }
        </div>
    )
}

export default SectionButton
