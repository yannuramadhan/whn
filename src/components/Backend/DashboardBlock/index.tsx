import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import { Slide } from "react-awesome-reveal";
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom";
import {
  DashboardSection,
  ContentWrapper,
} from "./styles";


const Dashboard: React.FC = () => {
  const storedLoggedInStatus = localStorage.getItem('isLoggedIn');  
  const accessToken = localStorage.getItem('accessToken');
  let name = '';

  useEffect(() => {
    if (!storedLoggedInStatus && !accessToken) {
      window.location.href = "/login";
    }
  }, []);


  if (accessToken) {
    const decodedToken = jwt_decode(accessToken) as { name?: string };
    if (decodedToken && decodedToken.name) {
      name = decodedToken.name;
    }
    console.log(decodedToken);
  } else {
    console.log('Token tidak ada');
  }

  return (
    <> 
      <DashboardSection>
        <Slide direction="right">
          <Row justify="center" align="middle">
            <ContentWrapper>
              <Col lg={24} md={24} sm={24} xs={24}>
                <p>Haloooo... {name}</p>
                <p>Selamat datang di Dashboard!</p>
              </Col>
            </ContentWrapper>
          </Row>
        </Slide>
      </DashboardSection>
    </>
  );
};

export default Dashboard;
