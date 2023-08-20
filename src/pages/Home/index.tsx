import { lazy } from "react";
import Intro from "../../content/Intro.json";
import About from "../../content/About.json";
import Goals from "../../content/Goals.json";
import OurCustomers from "../../content/OurCustomers.json";
import Product from "../../content/Product.json";
import Contact from "../../content/Contact.json";
import Services from "../../content/Services.json";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import IntroSlider from "../../components/IntroBlock/IntroSlider";

const ContactForm = lazy(() => import("../../components/ContactForm"));
const AboutBlock = lazy(() => import("../../components/AboutBlock"));
const IntroBlock = lazy(() => import("../../components/IntroBlock/IntroContentBlock"));
const OurCustomersBlock = lazy(() => import("../../components/OurCustomersBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ServicesBlock = lazy(() => import("../../components/ServicesBlock"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const ProductBlock = lazy(() => import("../../components/ProductBlock"));


const Home = () => {
  return (
    <>
      <IntroBlock id="intro" />
      <Header />
      <IntroSlider />
      <Container>
        <ScrollToTop />
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
          icon="graphs.png"
          id="goals"
        />
        <ProductBlock
          title={Product.title}
          content={Product.text}
          icon="product.png"
          id="product"
        />
        <ServicesBlock
          title={Services.title}
          content={Services.text}
          icon="services.png"
          id="services"
        />
        <OurCustomersBlock
          title={OurCustomers.title}
          content={OurCustomers.text}
          icon="ourcustomers.png"
          id="ourcustomers"
        />
        <ContactForm
          title={Contact.title}
          content={Contact.text}
          id="contact"
        />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
