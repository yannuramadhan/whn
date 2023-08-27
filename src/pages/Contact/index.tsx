import { lazy } from "react";
import Intro from "../../content/Intro.json";
import About from "../../content/About.json";
import Goals from "../../content/Goals.json";
import OurCustomers from "../../content/OurCustomers.json";
import Product from "../../content/Product.json";
import ContactItem from "../../content/Contact.json";
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


const Contact = () => {
  return (
    <>
      <IntroBlock id="intro" />
      <Header />
      <Container>
        <ContactForm
          title={ContactItem.title}
          content={ContactItem.text}
          id="contact"
        />
      </Container>
      <Footer />
    </>
  );
};

export default Contact;
