import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { SvgIcon } from "../../../common/SvgIcon";
import { Button } from "../../../common/Button";
import { ProductSection, Content, ContentWrapper } from "./styles";
import { useState, useEffect } from "react";
import Navbar from "../NavbarSide/navbar";

interface ArtikelProps {
  // title: string;
  // content: string;
  // t: any;
  // id: string;
}

const Product = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  const [product, setProduct] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    fetch('http://localhost:4000/product', {
      mode: 'cors',
      method: 'GET',
      headers: {
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*'
      },
    })
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // const getArtikel = () => {
  //   fetch('localhost:4000/users', {
  //     method: 'GET',
  //     headers: {
  //        Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //       'Access-Control-Allow-Origin': '*',
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((res) => {
  //       setArtikel(res);
  //     });
  // };

  // useEffect(() => {
  //   getArtikel();
  // }, []);

  // ✅ Works
// async function getArtikel() {
//   try {
//     const response = await fetch('http://localhost:4000/artikel', {
//       method: 'GET',
//       headers: {
//         accept: 'application/json',
//       },
//     });

//     if (!response.ok) {
//       throw new Error(`Error! status: ${response.status}`);
//     }

//     const result = await response.json();
//     return result;
//   } catch (err) {
//     console.log(err);
//   }
// }

// getArtikel().then(result => {
//   console.log(result);
// });


  return (
    <>

    <ProductSection >
      <Slide direction="right">
        <Row justify="center" align="middle">
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              {JSON.stringify(product)}
              {/* <h6>{t(title)}</h6>
              <Content>{t(content)}</Content> */}
            </Col>
          </ContentWrapper>
        </Row>
      </Slide>
    </ProductSection>
        <Navbar /> 
    </>
  );
};

export default withTranslation()(Product);
