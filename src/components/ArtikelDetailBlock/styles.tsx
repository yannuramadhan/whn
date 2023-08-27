import styled from "styled-components";

export const ArtikelDetailSection = styled("section")`
  position: relative;
  padding: 2rem 0 1rem;
  text-align: center;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    padding: 5.5rem 0 3rem;
  }
`;

export const Content = styled("p")`
  padding: 1rem 0 0.75rem;
`;

export const ContentWrapper = styled("div")`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;
