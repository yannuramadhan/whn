import { lazy } from "react";
import React from 'react';
import styled from 'styled-components';

const Navbar = lazy(() => import("../../components/Backend/NavbarSide/navbar"));
const ProductBlock = lazy(() => import("../../components/Backend/ProductBlock"));

const ProductContainer = styled.div`
  display: flex;
  justify-content: space-between; /* Menggunakan space-between untuk menghindari tumpang tindih */
`;

const Products = () => {
    return (
      <ProductContainer>
        <Navbar />
        <ProductBlock />
      </ProductContainer>
    );
};

export default Products;
