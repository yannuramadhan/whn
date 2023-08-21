import { lazy } from "react";
import Partner from "../../content/Partner.json";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useState, useEffect } from "react";

const PartnerBlock = lazy(() => import("../../components/PartnerBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const IntroBlock = lazy(() => import("../../components/IntroBlock/IntroContentBlock"));
const ProductListBlock = lazy(() => import("../../components/ProductListBlock"));

const ProductList = () => {
  const [product, setProduct] = useState<{ id: number; judul: string; deskripsi: string; foto: string}[]>([]);

  useEffect(() => {
    // Fetch data when the component mounts
    fetch('http://localhost:4000/product', {
      mode: 'cors',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*'
      },
    })
      .then(response => response.json())
      .then(data => {
        setProduct(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      <IntroBlock id="intro" />

      <div style={{ backgroundColor: "#7e95ff69" }}>
        <Header />
        <Container>
          <ScrollToTop />
          <div>
            {product.map(item => (
              <ProductListBlock
                key={item.id}
                type="left"
                title={item.judul}
                content={item.deskripsi}
                icon={item.foto}
                id={`product${item.id}`}
              />
            ))}
          </div>
        </Container>
      {/* <div style={{backgroundColor:"#7e953699"}}>
      <Container>
        <ProductListBlock
          type="left"
          title={ProductListview.judul}
          content={ProductListview.deskripsi}
          icon="smartrecord.jpg"
          id="product3"
        />
      </Container>
      </div> */}
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
