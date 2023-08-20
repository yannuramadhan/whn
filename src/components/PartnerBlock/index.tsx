import { Row, Col, Empty } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import { MiddleBlockSection, Content, ContentWrapper } from "./styles";

interface MiddleBlockProps {
  title: string;
  content: string;
  t: any;
  id: string;
  icon1: string;
  icon2: string;
  icon3: string;  
  icon4: string;
}

const MiddleBlock = ({ title, content, t , id, icon1, icon2, icon3, icon4}: MiddleBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <MiddleBlockSection id={id}>
      <Slide direction="up">
        <Row justify="center" align="middle">
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6>{t(title)}</h6>
            </Col>
          </ContentWrapper>
          <Col />
          <Col />
            <Col>
            <Content>
              <SvgIcon src={icon1} width="20%" height="20%" /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <SvgIcon src={icon2} width="20%" height="20%" /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <SvgIcon src={icon3} width="20%" height="20%" /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <SvgIcon src={icon4} width="20%" height="20%" /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            </Content>
            </Col>
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);
