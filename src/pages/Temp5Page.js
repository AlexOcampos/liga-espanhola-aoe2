import React from "react";
import styled from "styled-components";
import muyListo from "../assets/muy-listo.jpg";

const Temp3Page = () => {
  return (
    <main>
      <Wrapper className="page section section-center">
        <article>
          <div className="title">
            <h2>te crees muy listo?</h2>
            <div className="underline"></div>
          </div>
          <p>¿Así que eres te crees muy listo eeeeh...?</p>
          <p>
            Sé paciente, anunciaremos cuando esté disponible la Temporada 5...
          </p>
        </article>
        <img src={muyListo} alt="Te crees muy listo?" />
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    margin-top: 5rem;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
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
export default Temp3Page;
