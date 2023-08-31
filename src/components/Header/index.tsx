import { useState } from "react";
import { Link } from 'react-router-dom';
import { Row, Col, Drawer } from "antd";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import { HashLink } from 'react-router-hash-link';
import { SvgIcon } from "../../common/SvgIcon";
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

  const scrollUp = () => {
    const element = document.getElementById("intro") as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  const MenuItem = () => {
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
        <Link to="/articlelist" onClick={scrollUp} ><Span>{t("Article")}</Span></Link>
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
      </>
    );
  };

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" onClick={scrollUp} aria-label="homepage">
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
