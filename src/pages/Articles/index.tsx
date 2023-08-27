import { lazy } from "react";
import React from 'react';
import styled from 'styled-components';

const Navbar = lazy(() => import("../../components/Backend/NavbarSide/navbar"));
const ArtikelBlock = lazy(() => import("../../components/Backend/ArtikelBlock"));

const ArtikelContainer = styled.div`
  display: flex;
  justify-content: space-between; /* Menggunakan space-between untuk menghindari tumpang tindih */
`;

const Articles = () => {
    return (
      <ArtikelContainer>
        <Navbar />
        <ArtikelBlock />
      </ArtikelContainer>
    );
};

export default Articles;
