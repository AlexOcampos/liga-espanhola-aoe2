import React from "react";
import styled from "styled-components";
import { Hero } from "../components";
const ErrorPage = () => {
  return (
    <Wrapper>
      <Hero />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  background: var(--clr-primary-10);
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
`;

export default ErrorPage;
