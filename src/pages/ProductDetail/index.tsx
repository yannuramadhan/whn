import React, { useState, useEffect, lazy } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const ProductDetailBlock = lazy(() => import("../../components/ProductDetailBlock"));
const IntroBlock = lazy(() => import("../../components/IntroBlock/IntroContentBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

interface Product {
  id: string;
  judul: string;
  deskripsi: string;
  foto: string;
}

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product>({
  id: "",
  judul: "",
  deskripsi: "",
  foto: ""
});

  useEffect(() => {
    // Fetch the product data based on the provided ID
    fetch(`https://api.whnmandiri.co.id/products/${id}`)
      .then(response => response.json())
      .then(data => {
        setProduct(data);
      })
      .catch(error => console.error('Error fetching product data:', error));
  }, [id]);

  return (
    <>
      <IntroBlock id="intro" />
      <Header />
      <Container>
        <ScrollToTop />
        <ProductDetailBlock
          title={product.judul}
          content={product.deskripsi}
          id={product.id}
          foto={product.foto}
        />
      </Container>
      <Footer />
    </>
  );
};

export default ProductDetail;
