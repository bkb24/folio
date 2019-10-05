import React from "react"
import { Link } from "gatsby"

// import { rhythm, scale } from "../utils/typography"
import MainNav from "./main-nav"

import '../../content/assets/scss/main.scss'

const Layout = (props) => {

  const { location, title, children } = props
  const rootPath = `${__PATH_PREFIX__}/`

  let hideMenu = location ? location.pathname === rootPath : false;

  return (
    <React.Fragment>
        <MainNav ref={props.mainNavRef} hidden={hideMenu} />

        <main>{children}</main>

        <footer className="main-footer">
          <div className="footer-start">
              <div className="footer-shape footer-big-shape"></div>
              <div className="footer-shape"></div>
          </div>
          <div className="footer-other">
              <div className="footer-content">
                bkb24 {new Date().getFullYear()}, Built with Gatsby and NetlifyCMS
              </div>
          </div>
        </footer>
      </React.Fragment>
  )
}

export default Layout
