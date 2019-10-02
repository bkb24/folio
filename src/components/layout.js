import React from "react"
import { Link } from "gatsby"

// import { rhythm, scale } from "../utils/typography"
import MainNav from "./main-nav"

import '../../content/assets/scss/main.scss'

class Layout extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    let hideMenu = location ? location.pathname === rootPath : false;

    return (
      <React.Fragment>
        <MainNav ref={this.props.mainNavRef} hidden={hideMenu} />

        <main>{children}</main>

        <footer className="main-footer">
          <div className="footer-start">
              <div className="footer-shape footer-big-shape"></div>
              <div className="footer-shape"></div>
          </div>
          <div className="footer-other">
              <div className="footer-content">bkb24 {new Date().getFullYear()}, Built with {` `}
                <a href="https://www.gatsbyjs.org">Gatsby</a> and NetlifyCMS
              </div>
          </div>
        </footer>
      </React.Fragment>
    )
  }

  // render() {
  //   const { location, title, children } = this.props
  //   const rootPath = `${__PATH_PREFIX__}/`
  //   let header

  //   if (location.pathname === rootPath) {
  //     header = (
  //       <h1
  //         style={{
  //           ...scale(1.5),
  //           marginBottom: rhythm(1.5),
  //           marginTop: 0,
  //         }}
  //       >
  //         <Link
  //           style={{
  //             boxShadow: `none`,
  //             textDecoration: `none`,
  //             color: `inherit`,
  //           }}
  //           to={`/`}
  //         >
  //           {title}
  //         </Link>
  //       </h1>
  //     )
  //   } else {
  //     header = (
  //       <h3
  //         style={{
  //           fontFamily: `Montserrat, sans-serif`,
  //           marginTop: 0,
  //         }}
  //       >
  //         <Link
  //           style={{
  //             boxShadow: `none`,
  //             textDecoration: `none`,
  //             color: `inherit`,
  //           }}
  //           to={`/`}
  //         >
  //           {title}
  //         </Link>
  //       </h3>
  //     )
  //   }
  //   return (
  //     <div
  //       style={{
  //         marginLeft: `auto`,
  //         marginRight: `auto`,
  //         maxWidth: rhythm(24),
  //         padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
  //       }}
  //     >
  //       <header>{header}</header>
  //       <main>{children}</main>
  //       <footer>
  //         © {new Date().getFullYear()}, Built with
  //         {` `}
  //         <a href="https://www.gatsbyjs.org">Gatsby</a>
  //       </footer>
  //     </div>
  //   )
  // }
}

export default Layout
