import React, { useEffect, useState } from "react"

import MainNav from "./MainNav"

import '../../content/assets/scss/main.scss'

const Layout = (props) => {

  const { location, title, children, menuHidden } = props
  // const rootPath = `${__PATH_PREFIX__}/`
  // let hideMenu = location ? location.pathname === rootPath : false;

  const [transparent, setTransparent] = useState(false);

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const handleScroll = e => {
    window.scrollY > 100 ?
      setTransparent(false) :
      setTransparent(true);
  }

  const scrollTop = e => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
        <MainNav ref={props.mainMenuRef} hidden={menuHidden} transparent={transparent} />

        <main className={props.cssClass}>{children}</main>

        <footer className="main-footer">
          <div className="footer-start">
              <div className="footer-shape footer-big-shape" onClick={scrollTop}>
                <svg viewBox="0 0 20 20">
                    <path d="M1 5 L10 13 L18 5" />
                </svg>
              </div>
              <div className="footer-shape"></div>
          </div>
          <div className="footer-other">
              <div className="footer-content">
                bkb24 {new Date().getFullYear()}, Built with Gatsby and NetlifyCMS
              </div>
          </div>
        </footer>
      </>
  )
}

export default Layout
