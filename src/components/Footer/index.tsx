import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: any) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("Contact")}</Language>
              {/* <Large to="/">{t("Tell us everything")}</Large> */}
              <Para>
                {t(`Ruko Cempaka Mas Blok A5, Sumur Batu, Kemayoran, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10640 `)}
              </Para>
              <Para>
                {t(`+6221 4228400`)}
              </Para>
              <Para>
                {t(`support@whnmandiri.co.id `)}
              </Para>
              <Empty />
              <Para>
              <FooterContainer>
              <SocialLink
                href="https://facebook.com"
                src="github.svg"
              />
              <SocialLink
                href="https://twitter.com"
                src="twitter.svg"
              />
              <SocialLink
                href="https://www.linkedin.com"
                src="linkedin.svg"
              />
              <SocialLink
                href="https://instagram.com"
                src="instagram.svg"
              />
              </FooterContainer>
              {/* <a href="mailto:support@whnmandiri.co.id">
                <Chat>{t(`Let's Chat`)}</Chat>
              </a> */}
              </Para>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Title>{t("Latest Update")}</Title>
              <Large to="/" left="true">
                {t("Order Monitoring System v.2.3")}
              </Large>
              <Large left="true" to="/">
                {t("Smart Recording v.1.2")}
              </Large>
              <Large left="true" to="/">
                {t("Office Automation v.b1.1")}
              </Large>
              <Large left="true" to="/">
                {t("Smart Helpdesk v.3.5")}
              </Large>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Title>{t("Company")}</Title>
              <Large left="true" to="/">
                {t("Company 1")}
              </Large>
              <Large left="true" to="/">
                {t("Company 2")}
              </Large>
              <Large left="true" to="/">
                {t("Company 3")}
              </Large>
              <Large left="true" to="/">
                {t("Company 4")}
              </Large>
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <LogoContainer>
                © 2023 Whnmandiri.co.id
              </LogoContainer>
            </NavLink>
            
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
