import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import hero1 from "../assets/bannerE.png";
import hero2 from "../assets/bannerF.png";

const Hero = () => {
  const goToToornament = () => {
    return window.open(
      `https://play.toornament.com/es/tournaments/5019556577757560832/`,
      "_blank"
    );
  };

  return (
    <Wrapper className="section-center">
      <article className="x2">
        <h3>Temporada 3</h3>
        <p>¿Cuándo juego? ¿Cuál es mi división? Aquí tienes toda la info.</p>
        <Link to="temporada-3">
          <button className="btn">Info T3</button>
        </Link>
        <img src={hero1} alt="background 1" />
      </article>
      <article className="x1">
        <h3>Partidas destacadas</h3>
        <p>
          Cada día los streamers con los que tenemos acuerdo seleccionan las
          mejores partidas y las retransmiten en sus canales. ¿Quieres verlas y
          apoyar a tus jugadores favoritos?
        </p>
        <Link to="/featured-games">
          <button className="btn">Destacados</button>
        </Link>
        <img src={hero2} alt="background 2" />
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 60vh;
  display: flex;

  article {
    background-color: #f1ede5;
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
