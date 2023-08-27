import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import { VisionSection, Content, ContentWrapper } from "./styles";

interface VisionProps {
  title: string;
  content: string;
  t: any;
  id: string;
}

const Vision = ({ title, content, t , id}: VisionProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <VisionSection id={id}>
      <Slide direction="right">
        <Row justify="center" align="middle">
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
            </Col>
          </ContentWrapper>
        </Row>
      </Slide>
    </VisionSection>
  );
};

export default withTranslation()(Vision);
