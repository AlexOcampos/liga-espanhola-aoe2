import React from "react";
import styled from "styled-components";
const Notification = () => {
  return (
    <Wrapper>
      En curso la Jornada 2.
      <span>Finaliza el Miércoles 13/Oct/2020 a las 23:59!</span>
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
    font-weight: bold;
    margin-left: 8px;
  }

  @media (min-width: 776px) {
    flex-direction: row;
  }
`;

export default Notification;
