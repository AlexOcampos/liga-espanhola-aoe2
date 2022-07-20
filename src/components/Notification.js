import React from "react";
import styled from "styled-components";
import { useNavContext } from "../context/nav_context";
const Notification = () => {
  const { isNotificationOpen } = useNavContext();
  const message1 = "La temporada comienza el 31/Ago/2022.";
  const message2 = "Apúntate antes del 29/Ago/2022!";
  return (
    <Wrapper style={{ display: `${isNotificationOpen ? "flex" : "none"}` }}>
      <span className="web">{message1}</span>
      <span className="web">
        <b>{message2}</b>
      </span>
      <span className="mobile">
        {message1} <b>{message2}</b>
      </span>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 2.5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: var(--clr-primary-light-3);
  text-align: center;
  margin-top: 8px;
  margin-bottom: 8x;
  font-size: 0.8rem;
  span {
    margin-left: 8px;
  }
  .mobile {
    display: none;
  }
  @media (min-width: 776px) {
    flex-direction: row;
  }

  @media (max-width: 600px) {
    .mobile {
      display: block;
    }
    .web {
      display: none;
    }
  }
`;

export default Notification;
