import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import { ProductBlockProps } from "./types";
import { Fade } from "react-awesome-reveal";
import {
  ProductBlockContainer,
  Content,
  ContentWrapper,
  ButtonWrapper,
} from "./styles";

const ProductBlock = ({
  title,
  content,
  button,
  icon,
  t,
  id,
}: ProductBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <ProductBlockContainer id={id}>
      <Fade direction="left">
        <Row justify="space-between" align="middle">
          <Col lg={8} md={24} sm={24} xs={24}>
            <ContentWrapper>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
              <button type="button">
                <a href="/productlist"><b>Detail Product</b></a>
              </button>
            </ContentWrapper>
          </Col>
          <Col lg={16} md={24} sm={24} xs={24}>
            <SvgIcon src={icon} width="100%" height="100%" />
          </Col>
        </Row>
      </Fade>
    </ProductBlockContainer>
  );
};

export default withTranslation()(ProductBlock);
