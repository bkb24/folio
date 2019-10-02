import React from "react"
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

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.mainNavRef = React.createRef();
    this.sideNavRef = React.createRef();
  }

  componentDidMount = () => {
    this.toggleMainNav();
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount = () => {
      window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) => {
    let sideMenuItems = Array.from(this.sideNavRef.current.children);

    this.toggleMainNav();

    sideMenuItems.forEach((item, index) => {
        if (window.scrollY + 100 > item.offsetTop) {
            if (!item.classList.contains('hidden')) {
              item.classList.add('hidden');
              this.moveMenu(index);
            }
        } else {
            if (item.classList.contains('hidden')) {
              item.classList.remove('hidden');
              this.moveMenu(index - 1);
            }
        }
    });
  }

  moveMenu = (index) => {
    let len = 0;
    let arr = Array.from(this.mainNavRef.current.children[0].children);

    arr.forEach((item, i) => {
        if (i > index) return;
        len += item.offsetWidth;
    });
    this.mainNavRef.current.children[0].style.transform = `translateX(${this.mainNavRef.current.children[0].offsetWidth - len}px)`;
  }

  toggleMainNav = () => {
    window.scrollY + 100 > this.sideNavRef.current.offsetTop ?
      this.mainNavRef.current.classList.remove('hidden') :
      this.mainNavRef.current.classList.add('hidden');
  }

  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    // const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle} mainNavRef={this.mainNavRef}>
        <Hero sideNavRef={this.sideNavRef} />
        <Folio />
        <Services />
        <Skills />
        <Contact />
      </Layout>
    )

    // return (
    //   <Layout location={this.props.location} title={siteTitle}>
    //     <SEO title="All posts" />
    //     <Bio />
    //     {posts.map(({ node }) => {
    //       const title = node.frontmatter.title || node.fields.slug
    //       return (
    //         <article key={node.fields.slug}>
    //           <header>
    //             <h3
    //               style={{
    //                 marginBottom: rhythm(1 / 4),
    //               }}
    //             >
    //               <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
    //                 {title}
    //               </Link>
    //             </h3>
    //             <small>{node.frontmatter.date}</small>
    //           </header>
    //           <section>
    //             <p
    //               dangerouslySetInnerHTML={{
    //                 __html: node.frontmatter.description || node.excerpt,
    //               }}
    //             />
    //           </section>
    //         </article>
    //       )
    //     })}
    //   </Layout>
    // )
  }
}

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
