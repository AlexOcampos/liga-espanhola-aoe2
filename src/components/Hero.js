import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <Wrapper className="section-center">
      <article className="x1">
        <h3>Temporada 3</h3>
        <p>
          ¿La recuerdas? Que atrás ha quedado! ¿Quiénes fueron los campeones?
          Rememora viejos tiempos aquí.
        </p>
        <Link to="temporada-3">
          <button className="btn">Info T3</button>
        </Link>
        <img
          src="https://alexocampos.github.io/liga-espanhola-aoe2-static/assets/bannerF.png"
          alt="background 1"
        />
      </article>
      <article className="x2">
        <h3>Temporada 4</h3>
        <p>
          Aún parece que fue ayer, pero ya han pasado un par de meses desde la
          última edición...
        </p>
        <Link to="temporada-4">
          <button className="btn">Info T4</button>
        </Link>
        <img
          src="https://alexocampos.github.io/liga-espanhola-aoe2-static/assets/bannerE.png"
          alt="background 2"
        />
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 60vh;
  display: flex;

  article {
    background-color: var(--clr-grey-yellow);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 1rem;
  }

  article img {
    width: 100%;
    object-fit: contain;
  }

  article h3 {
    margin: 0.8rem;
    margin-top: 3rem;
  }

  article p {
    margin: 2rem;
    margin-bottom: 3rem;
  }

  article.x1 {
    width: 33%;
  }
  article.x2 {
    width: 66%;
  }
  article.x3 {
    width: 100%;
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;

    article {
      margin: 0rem;
      margin-top: 1rem;
    }

    article.x1 {
      width: 100%;
    }
    article.x2 {
      width: 100%;
    }
    article.x3 {
      width: 100%;
    }
  }
`;

export default Hero;
