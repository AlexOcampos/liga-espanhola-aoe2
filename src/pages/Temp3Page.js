import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { divisionesT3 } from "../utils/constants";

const Temp3Page = () => {
  const goToToornament = () => {
    return window.open(
      `https://play.toornament.com/es/tournaments/5019556577757560832/`,
      "_blank"
    );
  };

  return (
    <main>
      <Wrapper className="page section section-center">
        <article>
          <div className="title">
            <h2>Temporada 3</h2>
            <div className="underline"></div>
          </div>
          <p>
            Toda la información de divisiones, partidas, clasificaciones, puedes
            verla directamente en la web de Toornament.
          </p>
          <button className="btn" onClick={() => goToToornament()}>
            Ver en Toornament
          </button>
          <p>
            ¿Quieres ver todos los gloriosos participantes de esta{" "}
            <b>Temporada 3</b> junto con su seeding, elo y demás información?
          </p>
          <Link to="/players">
            <button className="btn">Ver participantes</button>
          </Link>
        </article>
        <article>
          <ul>
            {divisionesT3.map((division) => {
              const { id, text, image, link } = division;
              return (
                <li
                  key={id}
                  onClick={() => window.open(link)}
                  className="container"
                >
                  <img src={`./divisions/${image}`} alt={text} />
                  <span className="title-division">{text}</span>
                </li>
              );
            })}
          </ul>
        </article>
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
    margin-bottom: 2rem;
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  li {
    display: flex;
    align-items: center;
    margin: 1rem;
    border: var(--clr-grey-8) solid 0.1px;
    border-radius: 10px;
    cursor: pointer;
  }
  li img {
    width: 42px;
    margin-top: 0;
    margin-right: 16px;
  }

  .container {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0.5rem;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  }

  .container:hover {
    cursor: pointer;
  }

  .container img {
    filter: grayscale();
    width: 80px;
    border-radius: 50%;
    border: 2px solid whitesmoke;
    box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.5);
    transition: filter 0.4s ease-in-out;
  }

  .container:hover img {
    filter: none;
  }

  .title-division {
    font-size: 1.2rem;
    position: relative;
  }

  .title-division::after {
    position: absolute;
    content: "";
    width: 0%;
    height: 4px;
    background-color: var(--clr-primary);
    left: 50%;
    bottom: -10px;
    transition: all 0.4s ease-in-out;
  }

  .container:hover .title-division::after {
    width: 100%;
    left: 0;
  }

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default Temp3Page;
