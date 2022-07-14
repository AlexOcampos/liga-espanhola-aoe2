import React from "react";
import styled from "styled-components";
import { Flag } from "../components";
import { Link } from "react-router-dom";

const MatchDraft = ({ match, seasonLink, season, groupLink, group }) => {
  return (
    <Wrapper>
      <div className="container">
        <p className="breadcrumb">
          Liga Española <span className="separator">&gt;</span>{" "}
          <span>
            <Link to={seasonLink}>{season.name}</Link>
          </span>{" "}
          <span className="separator">&gt;</span>
          <span>
            <Link to={groupLink}>{group.text}</Link>
          </span>
          <span className="separator">&gt;</span>
          <span>
            {match.playerA} vs {match.playerB}
          </span>
        </p>
        <div className="draft">
          <Flag
            playerName={match.playerA}
            playerImg="https://annapulley.com/wp-content/uploads/2010/02/meerkat-200x300.jpg"
            playerClan="/clans/dark-knight.png"
            haloColor="#6bb621"
            flagColor="#6be675"
          />
          <div className="column">
            <h2>ANTES DE EMPEZAR...</h2>
            <article>
              <span>
                <b>1º Draft de mapas</b>
              </span>
              <div className="map-turns">
                {match.draft.mapTurns.map((turn, index) => (
                  <div
                    classname="draft-turn"
                    id={`turn-map-icon-${index}`}
                    key={`turn-map-icon-${index}`}
                  >
                    {turn.action === "BAN" ? (
                      <svg
                        width="27"
                        height="35"
                        viewBox="0 0 27 35"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.37324 14.7254L6.69718 11.2394L11.5257 16.0679L18.1056 3L23.0704 3.84507C23.0704 3.84507 19.6007 12.8067 15.2401 19.7823L25.0775 29.6197L14.0097 21.6577C13.4812 22.4223 12.9437 23.1456 12.4014 23.8099C9.15454 27.7871 3 33 3 33L10.12 18.8595L4.37324 14.7254Z"
                          fill={`var(--clr-${turn.player})`}
                          stroke={`var(--clr-${turn.player})`}
                          stroke-width="5"
                        />
                      </svg>
                    ) : turn.action === "PICK" ? (
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="2.12132"
                          y="15.5564"
                          width="19"
                          height="19"
                          transform="rotate(-45 2.12132 15.5564)"
                          stroke={`var(--clr-${turn.player})`}
                          stroke-width="3"
                        />
                      </svg>
                    ) : (
                      // SNIPE
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="15.2723"
                          cy="14.7272"
                          r="9.40906"
                          stroke={`var(--clr-${turn.player})`}
                          stroke-width="3"
                        />
                        <line
                          x1="14.8633"
                          y1="30"
                          x2="14.8633"
                          y2="-1.19209e-07"
                          stroke={`var(--clr-${turn.player})`}
                          stroke-width="3"
                        />
                        <line
                          y1="13.7727"
                          x2="30"
                          y2="13.7727"
                          stroke={`var(--clr-${turn.player})`}
                          stroke-width="3"
                        />
                      </svg>
                    )}
                  </div>
                ))}
              </div>
              <p>url draft mapas</p>
            </article>
            <article>
              <span>
                <b>2º Draft de civis</b>
              </span>
              <div className="map-turns">
                {match.draft.civTurns.map((turn, index) => (
                  <div
                    classname="draft-turn"
                    id={`turn-civ-icon-${index}`}
                    key={`turn-civ-icon-${index}`}
                  >
                    {turn.action === "BAN" ? (
                      <svg
                        width="27"
                        height="35"
                        viewBox="0 0 27 35"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.37324 14.7254L6.69718 11.2394L11.5257 16.0679L18.1056 3L23.0704 3.84507C23.0704 3.84507 19.6007 12.8067 15.2401 19.7823L25.0775 29.6197L14.0097 21.6577C13.4812 22.4223 12.9437 23.1456 12.4014 23.8099C9.15454 27.7871 3 33 3 33L10.12 18.8595L4.37324 14.7254Z"
                          fill={`var(--clr-${turn.player})`}
                          stroke={`var(--clr-${turn.player})`}
                          stroke-width="5"
                        />
                      </svg>
                    ) : turn.action === "PICK" ? (
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="15"
                          cy="15"
                          r="13.5"
                          stroke={`var(--clr-${turn.player})`}
                          stroke-width="3"
                        />
                      </svg>
                    ) : (
                      // SNIPE
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="15.2723"
                          cy="14.7272"
                          r="9.40906"
                          stroke={`var(--clr-${turn.player})`}
                          stroke-width="3"
                        />
                        <line
                          x1="14.8633"
                          y1="30"
                          x2="14.8633"
                          y2="-1.19209e-07"
                          stroke={`var(--clr-${turn.player})`}
                          stroke-width="3"
                        />
                        <line
                          y1="13.7727"
                          x2="30"
                          y2="13.7727"
                          stroke={`var(--clr-${turn.player})`}
                          stroke-width="3"
                        />
                      </svg>
                    )}
                  </div>
                ))}
              </div>
              <p>url draft civis</p>
            </article>
            <article>
              <span>
                <b>3º Jugar y publicar el id de las partidas</b>
              </span>
              <p>
                Este año para evitar tener que subir las recs de las partidas y
                publicar resultados via Discord, simplemente os pediremos el id
                de cada partida. Nosotros nos encargamos del resto.
              </p>
            </article>
          </div>
          <Flag
            playerName={match.playerB}
            playerImg="https://annapulley.com/wp-content/uploads/2010/02/meerkat-200x300.jpg"
            haloColor="#6bb621"
            flagColor="#C9CC1F"
          />
        </div>
      </div>
      <video
        className="background-video"
        src="/home-video.mp4"
        muted
        autoPlay
        preload="auto"
        loop
        type="video/mp4"
      ></video>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: 80vh;
  .background-video {
    width: 100%;
    height: 80vh;
    object-fit: cover;
    position: absolute;
    z-index: -1;
  }
  .container {
    margin-top: 8rem;
    width: 100%;

    position: absolute;
    display: flex;
    justify-content: center;
  }

  .breadcrumb {
    width: 60%;
    top: -6rem;
    left: 4rem;
    position: absolute;
    .separator {
      margin-left: 0.5rem;
      margin-right: 0.5rem;
    }
  }

  .draft {
    width: 95%;
    position: absolute;
    display: flex;
    justify-content: space-around;
  }

  .column {
    width: 34%;
  }

  .map-turns {
    display: flex;
  }

  .draft-turn {
    margin: 0.2rem;
  }
`;

export default MatchDraft;
