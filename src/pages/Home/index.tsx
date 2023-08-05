import { lazy } from "react";
import Intro from "../../content/Intro.json";
import About from "../../content/About.json";
import Goals from "../../content/Goals.json";
import Bisnis from "../../content/Bisnis.json";
import MissionContent from "../../content/MissionContent.json";
import Product from "../../content/Product.json";
import ContactContent from "../../content/ContactContent.json";
import ReleaseContent from "../../content/ReleaseContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const AboutBlock = lazy(() => import("../../components/AboutBlock"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="right"
        title={Intro.title}
        content={Intro.text}
        icon="developer.png"
        id="intro"
      />
      <AboutBlock
        title={About.title}
        content={About.text}
        id="about"
      />
      <ContentBlock
        type="left"
        title={Goals.title}
        content={Goals.text}
        section={Goals.section}
        icon="graphs.svg"
        id="goals"
      />
      <MiddleBlock
        title={Bisnis.title}
        content={Bisnis.text}
        icon="bisnis.png"
        id="bisnis"
      />
      {/* <ContentBlock
        type="left"
        title={ReleaseContent.title}
        content={ReleaseContent.text}
        section={ReleaseContent.section}
        icon="graphs.svg"
        id="release"
      />
      <ContentBlock
        type="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="product-launch.svg"
        id="mission"
      /> */}
      <ContentBlock
        type="left"
        title={Product.title}
        content={Product.text}
        icon="product.png"
        id="product"
      />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
