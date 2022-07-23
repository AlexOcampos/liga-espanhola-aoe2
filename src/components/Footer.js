import React from "react";
import styled from "styled-components";
const Footer = () => {
  return (
    <Wrapper>
      <div className="row">
        <h5>
          &copy; {new Date().getFullYear()}
          <span> Liga Española AoE</span>
        </h5>
        <h5>All rights reserved</h5>
        <h5>v. 5.0.0</h5>
      </div>
      <div className="row">
        <p>Developed by rudyairlines</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  margin-top: auto;
  padding-top: 32px;
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--clr-black);
  text-align: center;
  font-size: 0.7rem;
  span {
    color: var(--clr-primary-5);
  }
  h5 {
    color: var(--clr-grey-3);
    margin: 0.1rem;
    font-size: 0.8rem;
    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  p {
    color: var(--clr-grey-4);
    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }

  @media (min-width: 776px) {
    flex-direction: column;
    .row {
      flex-direction: row;
    }
  }
`;

export default Footer;
