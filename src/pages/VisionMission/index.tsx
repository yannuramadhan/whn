import React, { useState, useEffect, lazy } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Visi from "../../content/Vision.json";
import Misi from "../../content/Mission.json";

const VisionBlock = lazy(() => import("../../components/VisionBlock"));
const MissionBlock = lazy(() => import("../../components/MissionBlock"));
const IntroBlock = lazy(() => import("../../components/IntroBlock/IntroContentBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const VisionMission = () => {
  return (
    <>
      <IntroBlock id="intro" />
      <Header />
      <Container>
        <ScrollToTop />
        <VisionBlock
          title={Visi.title}
          content={Visi.text}
          id="visi"
        />
        <MissionBlock
          title={Misi.title}
          content1={Misi.text1}
          content2={Misi.text2}
          content3={Misi.text3}
          content4={Misi.text4}
          content5={Misi.text5}
          id="Misi"
        />
      </Container>
      <Footer />
    </>
  );
};

export default VisionMission;
