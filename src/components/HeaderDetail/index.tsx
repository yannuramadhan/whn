import { useState } from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { Row, Col, Drawer } from "antd";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { HashLink } from 'react-router-hash-link';
import { Button } from "../../common/Button";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
} from "./styles";

const Header = ({ t }: any) => {
  const [visible, setVisibility] = useState(false);

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
    const scrollTo = (id: string) => {
      const element = document.getElementById(id) as HTMLDivElement;
      element.scrollIntoView({
        behavior: "smooth",
      });
      setVisibility(false);
    };

  return (
      <>
        <CustomNavLinkSmall >
        <HashLink smooth to="/#about"><Span>{t("About")}</Span></HashLink>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall>
        <HashLink smooth to="/#product"><Span>{t("Product")}</Span></HashLink>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall>
        <HashLink smooth to="/#services"><Span>{t("Services")}</Span></HashLink>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall>
        <HashLink smooth to="/#ourcustomers"><Span>{t("Our Customers")}</Span></HashLink>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall
          style={{ width: "180px" }}
        >
          <Span>
            <HashLink smooth to="/#contact">
              <Button>{t("Contact")}</Button>
            </HashLink> 
          </Span>
        </CustomNavLinkSmall>
        
        
        {/* <CustomNavLinkSmall onClick={() => scrollTo("product")}>
          <Span>{t("Product")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("ourcustomers")}>
          <Span>{t("Our Customers")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("services")}>
          <Span>{t("Services")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall
          style={{ width: "180px" }}
          onClick={() => scrollTo("contact")}
        >
          <Span>
            <Button>{t("Contact")}</Button>
          </Span>
        </CustomNavLinkSmall> */}
      </>
    );
  };

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <SvgIcon src="logo.png" width="" height="64px" />
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={showDrawer}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} visible={visible} onClose={onClose}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={onClose}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
