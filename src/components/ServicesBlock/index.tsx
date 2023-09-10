import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import { ServicesBlockProps } from "./types";
import { Fade } from "react-awesome-reveal";
import {
  ServicesBlockContainer,
  Content,
  ContentWrapper,
  ButtonWrapper,
} from "./styles";

const ServicesBlock = ({
  title,
  content,
  button,
  icon,
  t,
  id,
}: ServicesBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <ServicesBlockContainer id={id}>
    <Row justify="space-between" align="middle">          
      <Fade direction="up">
          <Col lg={15} md={15} sm={24} xs={24}>
            <ContentWrapper>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
              <ButtonWrapper>
                {typeof button === "object" &&
                  button.map((item: any, id: number) => {
                    return (
                      <Button
                        key={id}
                        color={item.color}
                        fixedWidth={true}
                        onClick={() => scrollTo("about")}
                      >
                        {t(item.title)}
                      </Button>
                    );
                  })}
              </ButtonWrapper>
            </ContentWrapper>
          </Col>
        </Fade>
        <Fade direction="right">
            <Col lg={24} md={24} sm={24} xs={24}>
              <SvgIcon src={icon} width="100%" height="100%" />
            </Col>
        </Fade>
      </Row>
    </ServicesBlockContainer>
  );
};

export default withTranslation()(ServicesBlock);
