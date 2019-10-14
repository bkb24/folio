import React from 'react'
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import FolioComponent from "../components/folio";

const Folio = (props) => {
    console.log('props', props)

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
    ) {
      edges {
        node {
          frontmatter {
            type
            title
            url
            code
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
