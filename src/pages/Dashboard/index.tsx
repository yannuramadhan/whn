import { lazy } from "react";
import React, { Component } from 'react';
const DashboardBlock = lazy(() => import("../../components/Backend/DashboardBlock"));
const Navbar = lazy(() => import("../../components/Backend/NavbarSide/navbar"));

const Dashboard = () => {
    return (
      <div>
        <DashboardBlock />
        <Navbar />
      </div>
    );
  
};

export default Dashboard;