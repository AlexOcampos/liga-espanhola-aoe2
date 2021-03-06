import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";
//import { players } from "../utils/players-t3.json";

import { Filters, Player } from "../components";

const PlayersPage = () => {
  const {
    filtered_players: players,
    players_loading: loading,
    players_error: error,
  } = useFilterContext();
  return (
    <main>
      <Wrapper className="page section section-center">
        <div>
          <div className="title">
            <h2>Participantes</h2>
            <div className="underline"></div>
          </div>
          <p>
            A continuación el listado de todos los jugadores inscritos en el
            torneo con su seeding en el momento de organizar las divisiones
            (desde el inicio del torneo el ELO de algunos jugadores puede haber
            variado)
          </p>
          <p>
            El ELO medio se ha calculado con la siguiente fórmula: (ELO actual +
            ELO máximo) / 2
          </p>
          <Filters />
        </div>
        <div>
          {loading ? <p>Cargando jugadores...</p> : ""}
          {error
            ? "Lo sentimos. Ha ocurrido un error cargando la lista de jugadores"
            : ""}
          {players.length >= 1 ? (
            players.map((player) => {
              return <Player player={player} key={player.name} />;
            })
          ) : (
            <p>Cargando jugadores...</p>
          )}
        </div>
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
export default PlayersPage;
