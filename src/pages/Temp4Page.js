import React from "react";
import styled from "styled-components";
import handbook_t4 from "../assets/handbook_t4.png";

const Temp3Page = () => {
  const goToToornament = (url) => {
    return window.open(url, "_blank");
  };

  return (
    <main>
      <Wrapper className="page section section-center">
        <article>
          <div className="title">
            <h2>Temporada 4</h2>
            <div className="underline"></div>
          </div>
          <p>Puedes consultar toda la información de la Temporada 4 en:</p>
          <p></p>
          <p>
            <button
              className="btn"
              onClick={() =>
                goToToornament(
                  `https://play.toornament.com/es/tournaments/5490049043997343744/`
                )
              }
            >
              División campeones a milicias
            </button>
          </p>

          <p>
            <button
              className="btn"
              onClick={() =>
                goToToornament(
                  `https://play.toornament.com/es/tournaments/5622786528097116160/`
                )
              }
            >
              División de piqueros a lanceros
            </button>
          </p>
        </article>
        <article>
          <img
            src={handbook_t4}
            alt="Te crees muy listo?"
            className="handbook"
            onClick={() =>
              goToToornament(
                `https://drive.google.com/file/d/1v5A_eM6VyQkos3FUhlOscqoeqLRm75Hn/view?usp=sharing`
              )
            }
          />
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
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  .handbook {
    width: 200px;
    cursor: pointer;
    transition: var(--transition);
  }
  .handbook:hover {
    width: 210px;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default Temp3Page;
