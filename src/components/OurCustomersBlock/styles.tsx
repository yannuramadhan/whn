import styled from "styled-components";

export const MiddleBlockSection = styled("section")`
  position: relative;
  padding: 7rem 0 5rem;
  text-align: center;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 1024px) {
    padding: 8rem 0 6rem;
  }

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 3rem;
  }
`;

export const Content = styled("p")`
  padding: 0.75rem 0 0.75rem;
`;

export const ContentWrapper = styled("div")`
  max-width: 1024px;

  @media only screen and (max-width: 1024px) {
    max-width: 100%;
  }
`;
