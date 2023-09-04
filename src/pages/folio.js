import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import FolioComponent from '../components/Folio'

const Folio = (props) => {
    const projects = props.data.allMarkdownRemark.edges
        .map((item) => item.node.frontmatter);
    const activeProjects = projects.filter(item => !item.is_hidden);
    
    return (
        <Layout cssClass="folio-page">
            <FolioComponent
                projects={activeProjects}
            />
        </Layout>
    )
}

export const pageQuery = graphql`
  query ProjectsPage {
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
          }
        }
      }
    }
  }
`

export default Folio
