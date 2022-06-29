import React, { useState } from "react";
import styled from "styled-components";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import MatchSummary from "./MatchSummary";

const getPositionCSSClass = (position, lastPosition) => {
  var playerPosition = "";
  if (position === 1) {
    playerPosition = "pos-1";
  }
  if (position === 2 || position === 3) {
    playerPosition = "pos-promotion";
  }
  if (position === lastPosition - 1 || position === lastPosition - 2) {
    playerPosition = "pos-playoff-descent";
  }
  if (position === lastPosition) {
    playerPosition = "pos-last";
  }

  return playerPosition;
};

// TODO: Aplicar efecto al desplegar matches-history-detail
const GroupRow = (player) => {
  const [matchesDetail, setMatchesDetail] = useState(false);
  const cssPosition = getPositionCSSClass(player.position, player.lastPosition);

  return (
    <Wrapper className="section-center">
      <>
        <div className="row" onClick={() => setMatchesDetail(!matchesDetail)}>
          <div className={`position ${cssPosition}`} />
          <div className="x1">{player.position}</div>
          <div className="x4">{player.player}</div>
          <div className="x2">{player.points}</div>
          <div className="x3 matches-history">
            {player.history.map((match, index) => {
              return (
                <div
                  key={`match-${match.gameId}-index`}
                  className={`match ${match.result}`}
                >
                  {match.resultSummary}
                </div>
              );
            })}
          </div>

          {matchesDetail ? <FaAngleUp /> : <FaAngleDown />}
        </div>
        <div
          className={`matches-history-detail ${
            matchesDetail ? "detail-show" : "detail-hidden"
          }`}
        >
          {player.history.map((match) => {
            return <MatchSummary key={match.gameId} {...match} />;
          })}
        </div>
        <hr />
      </>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .row {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3rem;
  }

  hr {
    border-color: var(--clr-grey-10);
  }
  .x1 {
    width: 2rem;
    margin: 1rem;
    display: flex;
    justify-content: center;
  }

  .x2 {
    width: 6rem;
    margin: 1rem;
    display: flex;
    justify-content: center;
  }

  .x3 {
    width: 28rem;
    margin: 1rem;
  }

  .x4 {
    width: 56rem;
    margin: 1rem;
  }
  .position {
    height: 100%;
    width: 0.5rem;
  }

  .pos-1 {
    background-color: var(--clr-green-dark);
  }

  .pos-promotion {
    background-color: var(--clr-yellow-dark);
  }

  .pos-playoff-descent {
    background-color: var(--clr-red-light);
  }

  .pos-last {
    background-color: var(--clr-red-dark);
  }

  .matches-history {
    display: flex;
  }

  .match {
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    margin: 0.2rem;
  }

  .win {
    background-color: var(--clr-green-dark);
  }

  .defeat {
    background-color: var(--clr-red-dark);
  }

  .not-played {
    background-color: var(--clr-grey-4);
  }

  .matches-history-detail {
  }

  .detail-hidden {
    display: none;
  }

  .detail-show {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin: 1rem;
  }
`;

export default GroupRow;
