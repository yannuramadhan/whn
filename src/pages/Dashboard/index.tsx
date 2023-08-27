import { lazy } from "react";
import React from 'react';
import styled from 'styled-components';

const Navbar = lazy(() => import("../../components/Backend/NavbarSide/navbar"));
const DashboardBlock = lazy(() => import("../../components/Backend/DashboardBlock"));

const DashboardContainer = styled.div`
  display: flex;
  justify-content: space-between; /* Menggunakan space-between untuk menghindari tumpang tindih */
`;

const Dashboard = () => {
    return (
      <DashboardContainer>
        <Navbar />
        <DashboardBlock />
      </DashboardContainer>
    );
};

export default Dashboard;
