import React, { useState } from 'react'

import icons from  '../../../content/assets/img/sprite.svg'

const SideMenu = React.forwardRef((props, ref) => (
    <nav className="side-nav">
        <div className="quick-menu-social">
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

        <h5 className="side-menu-title">Quick view menu</h5>

        <ul className="side-menu" ref={ref}>
            {props.children}
        </ul>
    </nav>
))

export default SideMenu
