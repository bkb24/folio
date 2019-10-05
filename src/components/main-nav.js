import React, { Component } from 'react'
import { Link } from "gatsby"

import icons from '../../content/assets/img/sprite.svg'

const MainNav = React.forwardRef((props, ref) => (
    <nav className={`main-nav${props.hidden ? ' hidden' : ''}`} ref={ref}>
        <ul className="main-menu" style={{
            transform: props.hidden ? `translateX(100%)` : ``
        }}>
            <li className="main-menu-item">
                <Link className="main-menu-link home"
                    to={`/`}
                >
                    Home
                </Link>
            </li>
            <li className="main-menu-item">
                <Link className="main-menu-link projects"
                    to={`/folio`}
                >
                    Folio
                </Link>
            </li>
            <li className="main-menu-item">
                <Link className="main-menu-link services"
                    to={`/services`}
                >
                    Services
                </Link>
            </li>
            <li className="main-menu-item">
                <Link className="main-menu-link skills"
                    to={`/skills`}
                >
                    Skills
                </Link>
            </li>
            <li className="main-menu-item">
                <Link className="main-menu-link contact"
                    to={`/contact`}
                >
                    Contact
                </Link>
            </li>
        </ul>
        <div className="main-nav-social">
            <a className="main-nav-social-link" href="">
                <svg>
                    <use href={`${icons}#linkedin`} />
                </svg>
            </a>
            <a className="main-nav-social-link" href="">
                <svg>
                    <use href={`${icons}#github`} />
                </svg>
            </a>
            <a href="/pdf/CV.pdf" className="main-nav-social-link">
                <span className="resume">Resume</span>
            </a>
        </div>
    </nav>
))

export default MainNav


// class MainNav extends Component {
//     constructor(props) {
//         super(props)
//         this.ref = React.createRef();
//     }

//     componentDidMount = () => {
//         window.addEventListener('scroll', this.handleScroll);
//     }

//     componentWillUnmount = () => {
//         window.removeEventListener('scroll', this.handleScroll);
//     }

//     handleScroll = (event) => {
//         // let mainMenuItems = Array.from(this.ref.current.children);

//         window.scrollY + 100 > mainMenu.offsetTop ?
//             this.ref.current.classList.remove('hidden') :
//             this.ref.current.classList.add('hidden');

//         mainMenuItems.forEach((item, index) => {

//             if (window.scrollY + 100 > item.offsetTop) {
//                 if (!item.classList.contains('hidden')) {
//                     item.classList.add('hidden');
//                     // console.log('hide', item)
//                     // moveMenu(index);
//                 }
//             } else {
//                 if (item.classList.contains('hidden')) {
//                     // console.log('show')
//                     item.classList.remove('hidden');
//                     // moveMenu(index - 1);
//                 }
//             }
//         });
//     }

//     render() {
//         return (
//             <nav id="main-nav-js" className="main-nav" ref={this.ref}>
//                 <ul className="main-menu">
//                     <li className="main-menu-item">
//                         <Link className="main-menu-link home"
//                             to={`/`}
//                         >
//                             Home
//                         </Link>
//                     </li>
//                     <li className="main-menu-item">
//                         <Link className="main-menu-link projects"
//                             to={`/folio`}
//                         >
//                             Folio
//                         </Link>
//                     </li>
//                     <li className="main-menu-item">
//                         <Link className="main-menu-link services"
//                             to={`/services`}
//                         >
//                             Services
//                         </Link>
//                     </li>
//                     <li className="main-menu-item">
//                         <Link className="main-menu-link skills"
//                             to={`/skills`}
//                         >
//                             Skills
//                         </Link>
//                     </li>
//                     <li className="main-menu-item">
//                         <Link className="main-menu-link contact"
//                             to={`/contact`}
//                         >
//                             Contact
//                         </Link>
//                     </li>
//                 </ul>
//                 <div className="main-nav-social">
//                     <a className="main-nav-social-link" href="">
//                         <svg>
//                             <use href={`${icons}#linkedin`} />
//                         </svg>
//                     </a>
//                     <a className="main-nav-social-link" href="">
//                         <svg>
//                             <use href={`${icons}#github`} />
//                         </svg>
//                     </a>
//                 </div>
//             </nav>
//         )
//     }
// }

// export default MainNav
