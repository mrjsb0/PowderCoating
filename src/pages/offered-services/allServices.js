import React from 'react'
import Layout from '../../components/Layout'
import * as styles from '../../styles/services.module.css'
import { Link, graphql } from 'gatsby'


export default function allServices({ data }) {
    console.log(data)
    const services = data.allServices.nodes
    const contact  = data.contact.siteMetadata.contact
    return (
        <Layout>
          <div className={styles.servicesStyle}>
                {services.map(services =>(
                    <Link to= {"/our-services/" + services.frontmatter.slug} key={services.id}>
                        <div>
                            <h4>{services.frontmatter.title}</h4>
                            <p>{services.frontmatter.stack}</p>
                        </div>
                    </Link>
                    ))}
                    <h2>Like what you see? email at { contact } for a quote!</h2>
            </div>
        </Layout>
        );
}

// export page query
export const query = graphql`
query services {
    allServices: allMarkdownRemark {
      nodes {
        html
        frontmatter {
          title
          stack
          slug
        }
      }
    }

    contact: site{
      siteMetadata {
        contact
      }    
    }
}
`