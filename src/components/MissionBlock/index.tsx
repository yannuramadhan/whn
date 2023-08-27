import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import { MissionSection, Content, ContentWrapper } from "./styles";

interface MissionProps {
  title: string;
  content1: string;
  content2: string;
  content3: string;
  content4: string;
  content5: string;
  t: any;
  id: string;
}

const Mission = ({ title, content1, content2, content3, content4, content5 , t , id}: MissionProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <MissionSection id={id}>
      <Slide direction="left">
        <Row justify="center" align="middle">
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6>{t(title)}</h6>
              <Content>{t(content1)} : </Content>
              <Slide direction="left">
              <Content>{t(content2)}</Content></Slide>
              <Slide direction="left">
              <Content>{t(content3)}</Content></Slide>
              <Slide direction="left">
              <Content>{t(content4)}</Content></Slide>
              <Slide direction="left">
              <Content>{t(content5)}</Content></Slide>
            </Col>
          </ContentWrapper>
        </Row>
      </Slide>
    </MissionSection>
  );
};

export default withTranslation()(Mission);
