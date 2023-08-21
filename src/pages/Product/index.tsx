import { lazy } from "react";

const Navbar = lazy(() => import("../../components/Backend/NavbarSide/navbar"));
const ProductBlock = lazy(() => import("../../components/Backend/ProductBlock"));

const Product = () => {
  return (
    <>
        <ProductBlock />
        <Navbar />
   </> 
  );
};

export default Product;
