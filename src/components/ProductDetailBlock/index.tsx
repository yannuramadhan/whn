import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { ImageContent } from "../../common/ImageContent";
import { ProductDetailSection, Content, ContentWrapper } from "./styles";

interface ProductDetailProps {
  title: string;
  content: string;
  t: any;
  id: string;
  foto: string;
}

const ProductDetailBlock = ({ title, content, t , id, foto}: ProductDetailProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <ProductDetailSection id={id}>
      <Slide direction="left">
        <Row justify="center" align="middle">
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6>{t(title)}</h6>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <ImageContent src={foto} width="100%" height="auto" />
              </div>
              <Content>{t(content)}</Content>
              <button type="button">
                <a href="/productlist"><b>&lt;&lt; Back to Product</b></a>
              </button>
            </Col>
          </ContentWrapper>
        </Row>
      </Slide>
    </ProductDetailSection>
  );
};

export default withTranslation()(ProductDetailBlock);
