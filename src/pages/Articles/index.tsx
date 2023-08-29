import { lazy } from "react";
import styled from 'styled-components';
import React, { useState, useEffect } from "react";

const Navbar = lazy(() => import("../../components/Backend/NavbarSide/navbar"));
const ArtikelBlock = lazy(() => import("../../components/Backend/ArtikelBlock"));

const ArtikelContainer = styled.div`
  display: flex;
  justify-content: space-between; /* Menggunakan space-between untuk menghindari tumpang tindih */
`;

const Articles = () => {
    useEffect(() => {
      const isLoggedIn = localStorage.getItem('isLoggedIn');
      if (!isLoggedIn) {
        window.location.href = "/login";
      }
    }, []);

    return (
      <>
        <Navbar />
          <ArtikelContainer>
            <ArtikelBlock />
          </ArtikelContainer>
      </>
    );
};

export default Articles;
