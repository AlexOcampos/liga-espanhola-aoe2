import React from "react";
import styled from "styled-components";
import aboutImg from "../assets/cea_logo.png";

const AboutPage = () => {
  return (
    <main>
      <Wrapper className="page section section-center">
        <article>
          <div className="title">
            <h2>Quienes somos?</h2>
            <div className="underline"></div>
          </div>
          <p>
            Dark Knight, Birras y Tapas, Clan Templario, NHN, Conquis,
            Forocoches, Chirimoyos, Gentuzas y VN son los clanes fundadores que
            componen la Comunidad Española de Age of Empires 2.
          </p>
          <p>
            Nació como un punto de reunión donde entre todos organizamos torneos
            por y para los miembros de los clanes que formamos parte de esto,
            pero con el objetivo de recibir con los brazos abiertos a cualquier
            otro clan u miembro de la comunidad española, con el objetivo de
            expandir nuestro amado Age of Empires II.
          </p>
          <p>
            Uno de nuestros grandes hitos ha sido lograr la organización de la
            Liga Española de AoE2 que ya va por su 3ª temporada y cuenta con más
            de 170 jugadores activos.
          </p>
          <p>Bienvenidos y 14!</p>
        </article>
        <img src={aboutImg} alt="Comunidad Española Age of Empires" />
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
export default AboutPage;
