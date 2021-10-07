import React from "react";
import styled from "styled-components";
import { date, matches } from "../utils/featured-games.json";
import { FeaturedGame } from "../components";

const FeaturedGamesPage = () => {
  return (
    <main>
      <Wrapper className="page section section-center">
        <article>
          <div className="title">
            <h2>Partidas destacadas</h2>
            <div className="underline"></div>
          </div>
          <h3>{date}</h3>
          {matches.length > 0 ? (
            matches.map((match) => {
              return <FeaturedGame match={match} />;
            })
          ) : (
            <p>No hay partidas destacadas para hoy</p>
          )}
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
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
  h3 {
    margin-top: 3rem;
  }
`;
export default FeaturedGamesPage;
