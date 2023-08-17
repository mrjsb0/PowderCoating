import React from 'react'
import Layout from '../../components/Layout'
import * as styles from '../../styles/services.module.css'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'


export default function allServices({ data }) {
    console.log(data)
    const services = data.allServices.nodes
    const contact  = data.contact.siteMetadata.contact
    return (
        <Layout>
          <h2 className={styles.servicesStyle}>test</h2>

          <div className={styles.servicesStyle}>
                {services.map(services =>(
                    <Link to= {"/our-services/" + services.frontmatter.slug} key={services.id}>
                        <div>
                          <Img fluid={services.frontmatter.thumb.childImageSharp.fluid}/>
                            <h4>{services.frontmatter.title}</h4>
                            <p>{services.frontmatter.stack}</p>
                        </div>
                    </Link>
                    ))}
            </div>

            <div className={styles.powderStyle}>
            <h1>testing hi</h1>
            </div>



        </Layout>
        );
}

// export page query
export const query = graphql`
query services {
  allServices: allMarkdownRemark {
    nodes {
      frontmatter {
        title
        stack
        slug
        thumb {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
  contact: site {
    siteMetadata {
      contact
    }
  }
}
`