import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MatchSummary = ({
  gameId,
  resultSummary,
  result,
  date,
  playerA,
  playerAResult,
  playerAAW,
  playerB,
  playerBResult,
  playerBAW,
}) => {
  const winnerA = playerAResult > playerBResult || playerAAW.length > 0;
  const winnerB = playerBResult > playerAResult || playerBAW.length > 0;

  const notPlayed = result === "not-played";
  let d = null;
  if (date && date != null) {
    d = new Date(date * 1000);
  }

  const humanDate =
    d && d != null ? (
      `${d.toLocaleDateString()} ${d
        .toLocaleTimeString()
        .substring(
          0,
          d
            .toLocaleTimeString()
            .indexOf(":", d.toLocaleTimeString().indexOf(":") + 1)
        )}`
    ) : (
      <i>Pendiente fecha</i>
    );

  return (
    <Wrapper>
      <Link to={`/match/${gameId}`}>
        <div
          className={`match-row  ${
            result === "not-played" ? "date-game" : "no-date"
          }`}
        >
          {result === "not-played" ? humanDate : ""}
        </div>
        <div className="match-row">
          <span className={winnerA ? "winner-player" : ""}>{playerA}</span>
          {!notPlayed ? (
            <span className={winnerA ? "winner" : "looser"}>
              {playerAAW} {playerAResult}
            </span>
          ) : (
            ""
          )}
        </div>
        <div className="match-row">
          <span className={winnerB ? "winner-player" : ""}>{playerB}</span>
          {!notPlayed ? (
            <span className={winnerB ? "winner" : "looser"}>
              {playerBAW} {playerBResult}
            </span>
          ) : (
            ""
          )}
        </div>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  border: solid 1px var(--clr-grey-1);
  border-radius: 8px;
  width: 16rem;
  height: 6rem;
  margin: 0.5rem;
  padding: 0rem;
  font-size: 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .match-row {
    display: flex;
    justify-content: space-between;
    padding: 0.3rem;
    margin-top: 0rem;
    margin-bottom: 0rem;
    margin-left: 0.2rem;
    margin-right: 0.2rem;
    height: 2rem;
  }

  .date-game {
    margin-left: 0rem;
    margin-right: 0rem;
    background-color: var(--clr-grey-1);
    color: var(--clr-black);
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  .no-date {
    height: 0rem;
  }

  .winner-player {
    font-weight: bold;
  }

  .winner {
    color: var(--clr-green-dark);
  }

  .looser {
    color: var(--clr-red-dark);
  }
`;

export default MatchSummary;
