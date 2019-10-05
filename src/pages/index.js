import React, { useRef, useEffect } from "react"
import { Link, graphql } from "gatsby"

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

  useEffect(() => {
    toggleMainNav();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  const { data } = props;
  const siteTitle = data.site.siteMetadata.title;

  let mainNavRef = useRef()
  let sideNavRef = useRef()

  const handleScroll = (event) => {
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

  const moveMenu = (index) => {
    let len = 0;
    let arr = Array.from(mainNavRef.current.children[0].children);

    arr.forEach((item, i) => {
        if (i > index) return;
        len += item.offsetWidth;
    });
    mainNavRef.current.children[0].style.transform = `translateX(${mainNavRef.current.children[0].offsetWidth - len}px)`;
  }

  const toggleMainNav = () => {
    window.scrollY + 100 > sideNavRef.current.offsetTop ?
      mainNavRef.current.classList.remove('hidden') :
      mainNavRef.current.classList.add('hidden');
  }

  return (
    <div className="index-page">
      <Layout location={props.location} title={siteTitle} mainNavRef={mainNavRef}>
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
