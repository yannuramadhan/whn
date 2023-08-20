import styled from "styled-components";
import React, { useEffect, useState } from 'react';
import ImageSlider from "./imageslider";
import { Row, Col } from "antd";

import image1 from "../../../assets/images/slider/visi.jpg";
import image2 from "../../../assets/images/slider/slide4.jpg";
import image3 from "../../../assets/images/slider/slide5.jpg";
import image4 from "../../../assets/images/slider/slide6.jpg";

const vision = image1;
const items = [image2,image3,image4];
let randomItem = items[Math.floor(Math.random() * items.length)];
let randomItem2 = randomItem;

while (randomItem2 === randomItem) {
  randomItem2 = items[Math.floor(Math.random() * items.length)];
}

const Intro = () => {
  return (
    <>
        <ImageSlider images={[vision,randomItem,randomItem2]}>
        {/* <div
            style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "#fff",
            }}
        >
            <h1>Slider</h1>
            <p></p>
        </div> */}
        </ImageSlider>
    </>
  );
};

export default Intro;
