import { lazy } from "react";
import Partner from "../../content/Partner.json";
import Vision from "../../content/Vision.json";
import ProductList1 from "../../content/ProductList1.json";
import ProductList2 from "../../content/ProductList2.json";
import ProductList3 from "../../content/ProductList3.json";
import Header from "../../components/HeaderDetail";
import Footer from "../../components/Footer";



const PartnerBlock = lazy(() => import("../../components/PartnerBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const IntroBlock = lazy(() => import("../../components/IntroBlock/IntroContentBlock"));
const ProductListBlock = lazy(() => import("../../components/ProductListBlock"));

const ProductList = () => {
  return (
    <>
    <IntroBlock id="intro" />
    <div style={{backgroundColor:"#7e95ff69"}}>
      <Header />
      <Container>
        <ScrollToTop />  
        <ProductListBlock
          type="left"
          title={ProductList1.title}
          content={ProductList1.text}
          icon="smartcenter.jpg"
          id="product1"
        />
      </Container>
      <div style={{backgroundColor:"#ffffff"}}>
        <Container>
          <ProductListBlock
            type="left"
            title={ProductList2.title}
            content={ProductList2.text}
            icon="smarttarif.jpg"
            id="product2"
          />
        </Container>
      </div>
      <div style={{backgroundColor:"#7e953699"}}>
      <Container>
        <ProductListBlock
          type="left"
          title={ProductList3.title}
          content={ProductList3.text}
          icon="smartrecord.jpg"
          id="product3"
        />
      </Container>
      </div>
      {/* <div style={{backgroundImage:background}}>
      <Container>  
        <VisionBlock
          type="right"
          title={Vision.title}
          content={Vision.text}
          icon="developer.png"
          id="vision"
        />
      </Container>
      </div> */}
      <div style={{backgroundColor:"#ffffff"}}>
        <Container>
          <PartnerBlock
            title={Partner.title}
            content={Partner.text}
            icon1="logo_avaya.png"
            icon2="logo_nec.png"
            icon3="logo_nice.png"
            icon4="logo_synway.png"
            id="partner"
          />
        </Container>
      </div>
    </div>
    <Footer /> 
   </>
  );
};

export default ProductList;
