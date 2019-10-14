import React, { useRef, useEffect, useState } from "react"
import { Link, graphql } from "gatsby"

// import Bio from "../components/bio"
import Layout from "../components/layout"
// import SEO from "../components/seo"
// import { rhythm } from "../utils/typography"

import Hero from "../components/hero/hero"
import Folio from '../components/folio'
import Services from '../components/home/services'
import Skills from '../components/home/skills'
import Contact from '../components/contact'

const Index = (props) => {
  const [menuHidden, setMenuHidden] = useState(true);
  const [winHeight, setWinHeight] = useState(null);

  useEffect(() => {
    toggleMainNav();
    setWinHeight(window.outerHeight);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener("resize", handleResize);
    }
  }, []);

  const { data } = props;
  const projects = data.allMarkdownRemark.edges.map((item) => item.node.frontmatter);
  const homeProjects = projects.filter(item => item.show_on_home);

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
    setWinHeight(window.outerHeight);

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
      <Layout
        cssClass="index-page"
        location={props.location}
        // title={siteTitle}
        mainMenuRef={mainMenuRef}
        menuHidden={menuHidden}
      >
        <Hero height={winHeight} isMobile={!menuHidden} sideNavRef={sideNavRef} projects={projects} />
        <Folio projects={homeProjects}>
          <div className="home-goto-wrap">
            <Link className="home-goto-projects" to={`/folio`}>See all</Link>
          </div>
        </Folio>
        <Services />
        <Skills />
        <Contact />
      </Layout>
  )
};

export const pageQuery = graphql`
  query HomePage {
    allMarkdownRemark(
      filter: {
        frontmatter: {
          type: { eq: "project" }
        }
      }
      sort: {
        fields: [frontmatter___order]
        order: ASC
      }
      limit: 5
    ) {
      edges {
        node {
          frontmatter {
            type
            title
            short
            url
            code
            repo_service
            order
            show_on_home
            description
            main_img_d
            main_img_m
            tech
            screens {
              screen
            }
            work {
              work
            }
            partners {
              name
              work
              social {
                social_name
                url
              }
            }
          }
        }
      }
    }
  }
`

export default Index
