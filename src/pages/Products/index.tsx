import { lazy } from "react";
import React, { useState, useEffect } from "react";
import styled from 'styled-components';

const Navbar = lazy(() => import("../../components/Backend/NavbarSide/navbar"));
const ProductBlock = lazy(() => import("../../components/Backend/ProductBlock"));

const ProductContainer = styled.div`
  display: flex;
  justify-content: space-between; /* Menggunakan space-between untuk menghindari tumpang tindih */
`;

const Products = () => {
  useEffect(() => {
      const isLoggedIn = localStorage.getItem('isLoggedIn');
      if (!isLoggedIn) {
        window.location.href = "/login";
      }
    }, []);
    return (
      <>
        <Navbar />
        <ProductContainer>
          <ProductBlock />
        </ProductContainer>
      </>
    );
};

export default Products;
