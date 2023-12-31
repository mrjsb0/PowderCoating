import * as React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Carousel from "./Carousel";


export default function Home({ data }) {
  console.log(data);
  return (
    <Layout>
      
      <div className="carousel-container">
        <Carousel autoPlay showThumbs={false} />
      </div>
      
      <div className="banner-container">
  <div className="banner-text">
    <h1 style={{color: 'black'}}>Trusted brands</h1>
  </div>
  <div className="banner-logos">
    <img src='/logo.jpg' alt="JB Coatings" />
    <img src='/logo.jpg' alt="JB Coatings" />
    <img src='/logo.jpg' alt="JB Coatings" />
  </div>
</div>
      
      <div className="content-container">
        <h3 style={{ color: 'black' }}>At JB Coatings, we take immense pride...</h3>
      </div>
    
    </Layout>
  );
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