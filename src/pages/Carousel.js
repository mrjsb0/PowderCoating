import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import mediaBlasting from "../images/mediaBlasting.png"
import mountBalance from "../images/mountBalance.png"

export default () => (
  <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} style={{ position: "relative", top: "20px"}}>
    <div>
      <img src={mediaBlasting} img alt="Error" style={{ width: "640px", height: "480px" }}  />
    </div>
    <div>
      <img src={mountBalance} img alt="Error" style={{ width: "640px", height: "480px" }}  />
    </div>
  </Carousel>
);
