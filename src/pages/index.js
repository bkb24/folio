import React, { useRef, useEffect, useState } from "react"
import { graphql } from "gatsby"

// import Bio from "../components/bio"
import Layout from "../components/layout"
// import SEO from "../components/seo"
// import { rhythm } from "../utils/typography"

import Hero from "../components/hero/hero"
import Folio from '../components/folio'
import Services from '../components/services'
import Skills from '../components/skills'
import Contact from '../components/contact'

const Index = (props) => {
  const [menuHidden, setMenuHidden] = useState(true);

  useEffect(() => {
    toggleMainNav();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener("resize", handleResize);
    }
  }, []);

  const { data } = props;
  const siteTitle = data.site.siteMetadata.title;

  let mainMenuRef = useRef()
  let sideNavRef = useRef()

  const handleScroll = () => {
    if (!window.matchMedia('(min-width: 1025px)').matches) return;

    let sideMenuItems = Array.from(sideNavRef.current.children);

    toggleMainNav();

    sideMenuItems.forEach((item, index) => {
        if (window.scrollY + 100 > item.offsetTop) {
            if (!item.classList.contains('hidden')) {
              item.classList.add('hidden');
              moveMenu(index);
            }
        } else {
            if (item.classList.contains('hidden')) {
              item.classList.remove('hidden');
              moveMenu(index - 1);
            }
        }
    });
  }

  const handleResize = () => {
    if (window.matchMedia('(min-width: 1025px)').matches) {
      setMenuHidden(true)
    } else {
      setMenuHidden(false)
    }
  }

  const moveMenu = (index) => {
    let len = 0;
    let arr = Array.from(mainMenuRef.current.children);

    arr.forEach((item, i) => {
      if (i > index) return;
      len += item.offsetWidth;
    });
    mainMenuRef.current.style.transform =
      `translateX(${mainMenuRef.current.offsetWidth - len}px)`;
  }

  const toggleMainNav = () => {
    if (!window.matchMedia('(min-width: 1025px)').matches) return setMenuHidden(false);

    window.scrollY + 100 > sideNavRef.current.offsetTop ?
      mainMenuRef.current.parentElement.classList.remove('hidden') :
      mainMenuRef.current.parentElement.classList.add('hidden');
  }

  return (
    <div className="index-page">
      <Layout location={props.location} title={siteTitle} mainMenuRef={mainMenuRef} menuHidden={menuHidden}>
        <Hero sideNavRef={sideNavRef} />
        <Folio />
        <Services />
        <Skills />
        <Contact />
      </Layout>
    </div>
  )
};

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
