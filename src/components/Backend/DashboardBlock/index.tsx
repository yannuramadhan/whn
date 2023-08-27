import React, { useEffect } from "react";
import { Row, Col } from "antd";
import { Slide } from "react-awesome-reveal";
import { useHistory } from "react-router-dom";
import {
  DashboardSection,
  ContentWrapper,
} from "./styles";

interface LocationState {
  isLoggedIn?: boolean;
}

const Dashboard: React.FC = () => {

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      // Jika tidak ada status login di localStorage, kembali ke halaman login
      window.location.href = "/login";
    }
  }, []);

  return (
    <> 
      <DashboardSection>
        <Slide direction="right">
          <Row justify="center" align="middle">
            <ContentWrapper>
              <Col lg={24} md={24} sm={24} xs={24}>
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
