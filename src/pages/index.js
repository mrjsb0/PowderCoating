import * as React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";

export default function Home({ data }) {
  console.log(data);
  


  return (
    <Layout>
        <div>
          <h3>At JB Coatings, we take immense pride in being a distinctive name in the realm of powder coating services right here in Detroit, Michigan. With a strong foothold in the 
            motor city, we have been consistently delivering top-notch powder coating solutions that reflect our commitment to quality and precision.</h3>
        </div>
        <div></div>
    </Layout>
  )
}

export const query = graphql`
  query SiteInfo{
  site{
    siteMetadata {
      description
      title
    }
  }
}
`