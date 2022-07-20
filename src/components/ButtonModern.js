import React from "react";
import styled from "styled-components";

const ButtonModern = ({
  text,
  link,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  fontSize,
  onClick,
}) => {
  const fontTextSize = fontSize ? fontSize : "0.8em";
  const marginTopValue = marginTop ? marginTop : 0;
  const marginBottomValue = marginBottom ? marginBottom : 0;
  const marginLeftValue = marginLeft ? marginLeft : 0;
  const marginRightValue = marginRight ? marginRight : 0;
  const linkValue = link ? link : "#";
  return (
    <Wrapper
      style={{
        marginTop: marginTopValue,
        marginBottom: marginBottomValue,
        marginLeft: marginLeftValue,
        marginRight: marginRightValue,
      }}
    >
      <a href={linkValue} style={{ fontSize: fontTextSize }} onClick={onClick}>
        <span>{text}</span>
        <i></i>
      </a>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  a {
    position: relative;
    background-color: var(--clr-grey-10);
    color: var(--clr-grey-1);
    text-decoration: none;
    text-transform: uppercase;
    font-size: 0.8em;
    letter-spacing: 0.1em;
    padding: 10px 30px;
    transition: 0.5s;
  }

  a:hover {
    letter-spacing: 0.25em;
    background: var(--clr-primary);
    color: var(--clr-primary);
    box-shadow: 0 0 35px var(--clr-primary);
  }

  a::before {
    content: "";
    position: absolute;
    inset: 2px;
    background: var(--clr-white);
  }

  a span {
    position: relative;
    z-index: 1;
  }

  a i {
    position: absolute;
    inset: 0;
    display: block;
  }

  a i::before {
    content: "";
    position: absolute;
    top: -3.5px;
    left: 80%;
    width: 10px;
    height: 10px;
    border: 2px solid var(--clr-primary);
    background-color: var(--clr-grey-10);
    transform: translateX(-50%);
    transition: 0.5s;
  }

  a:hover i::before {
    width: 20px;
    left: 20%;
  }

  a i::after {
    content: "";
    position: absolute;
    bottom: -3.5px;
    left: 20%;
    width: 10px;
    height: 10px;
    border: 2px solid var(--clr-primary);
    background-color: var(--clr-grey-10);
    transform: translateX(-50%);
    transition: 0.5s;
  }

  a:hover i::after {
    width: 20px;
    left: 80%;
  }
`;

export default ButtonModern;
