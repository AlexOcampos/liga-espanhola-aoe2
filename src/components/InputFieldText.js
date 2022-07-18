import React from "react";
import styled from "styled-components";

const InputFieldText = ({ title }) => {
  return (
    <Wrapper>
      <div className="inputBox">
        <input type="text" required="required" />
        <span>{title}</span>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 1rem;
  padding: 0;
  box-sizing: border-box;

  .inputBox {
    position: relative;
    width: 350px;

    input {
      width: 100%;
      padding: 10px;
      border: 1px solid rgba(255, 255, 255, 0.25);
      background: var(--clr-grey-10);
      border-radius: 5px;
      outline: none;
      color: #fff;
      font-size: 1em;
      transition: 0.5s;
    }

    span {
      position: absolute;
      left: 0;
      padding: 10px;
      pointer-events: none;
      font-size: 1em;
      color: rgba(255, 255, 255, 0.25);
      transition: 0.5s;
    }

    input:valid ~ span,
    input:focus ~ span {
      transform: translateX(10px) translateY(-7px);
      font-size: 0.65em;
      padding: 0 10px;
      background: var(--clr-primary-light-4);
      letter-spacing: 0.2em;

      background-color: var(--clr-primary-light-4);
      color: var(--clr-grey-1);
      border-radius: 2px;
    }

    input:valid,
    input:focus {
      border: 1px solid var(--clr-primary-light-4);
    }
  }
`;

export default InputFieldText;
