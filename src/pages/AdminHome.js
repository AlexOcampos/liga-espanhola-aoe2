import React from "react";
import styled from "styled-components";
import { ButtonModern } from "../components";

const AdminHome = () => {
  return (
    <main>
      <Wrapper className="page section section-center">
        <article>
          <div className="title">
            <h2>Admin Panel</h2>
            <div className="underline"></div>
          </div>
          <div className="options">
            <ButtonModern
              text="Inscripciones"
              link="/admin/registrations"
              marginTop="0"
              fontSize="1.2em"
            />
          </div>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;

  .options {
    margin-top: 3rem;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AdminHome;
