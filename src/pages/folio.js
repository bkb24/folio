import React from 'react'
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import FolioComponent from "../components/folio";

const Folio = (props) => {
    return (
        <Layout cssClass="folio-page">
            <FolioComponent projects={props.data.allMarkdownRemark.edges.map((item) => item.node.frontmatter)} />
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

export default Folio
