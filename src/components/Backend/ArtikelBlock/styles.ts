import styled from "styled-components";

export const ArtikelSection = styled("section")`
  position: relative;
  padding: 10rem 5rem 0rem 22rem;

  @media only screen and (max-width: 1024px) {
    padding: 10rem 0rem 0rem 0rem;
  }
`;

export const Content = styled("p")`
  margin: 10rem 0rem 0rem 20rem;
`;

export const ContentWrapper = styled("div")`
  position: relative;

  @media only screen and (max-width: 575px) {
    padding-top: 4rem;
  }
`;

export const ServiceWrapper = styled("div")`
  justify-content: space-between;
  max-width: 100%;
`;

export const MinTitle = styled("h6")`
  font-size: 15px;
  line-height: 1rem;
  padding: 0rem 0;
  text-transform: uppercase;
  color: #000;
  font-family: "Motiva Sans Light", sans-serif;
`;

export const MinPara = styled("p")`
  font-size: 13px;
`;

