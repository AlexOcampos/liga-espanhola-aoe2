import React from "react";
import styled from "styled-components";
import { divisionesT3 } from "../utils/constants";
import "animate.css";

const FeaturedGame = ({ match }) => {
  const {
    division,
    hour,
    playerA,
    playerB,
    caster,
    casterPlatform,
    casterUrl,
  } = match;
  const divisionObj = divisionesT3.filter((div) => div.id === division);
  const divisionImg = divisionObj[0].image;
  const divisionName = divisionObj[0].text;

  return (
    <Wrapper className="featured-game">
      <div className="match-info">
        <img src={`/divisions/${divisionImg}`} alt={divisionName} />
        <span>
          <b>{hour}</b>
        </span>
        <span className="players">
          <b>{playerA.length > 20 ? `${playerA.slice(0, 20)}...` : playerA}</b>{" "}
          vs{" "}
          <b>{playerB.length > 20 ? `${playerB.slice(0, 20)}...` : playerB}</b>
        </span>
      </div>
      <div className="caster" onClick={() => window.open(casterUrl, "_blank")}>
        <span>{caster}</span>
        <img
          src={
            casterPlatform === "twitch"
              ? "https://alexocampos.github.io/liga-espanhola-aoe2-static/assets/twitch.png"
              : casterPlatform === "youtube"
              ? "https://alexocampos.github.io/liga-espanhola-aoe2-static/assets/youtube.png"
              : ""
          }
          alt={caster}
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: var(--clr-grey-8) solid 0.1px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  border-radius: 4px;
  margin: 16px;
  padding: 8px;
  height: 66px;

  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .match-info img {
    width: 48px;
    margin: 0;
    margin-right: 2rem;
  }

  span {
    margin-right: 2rem;
  }

  .caster {
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
  }
  .caster img {
    margin: 0;
    width: 20px;
  }
  .caster span {
    margin-right: 0.5rem;
  }

  @media (max-width: 600px) {
    margin: 8px;
    span {
      margin-right: 0.5rem;
    }

    .match-info img {
      width: 48px;
      margin: 0;
      margin-right: 0.5rem;
    }

    .caster span {
      display: none;
    }
  }
`;

export default FeaturedGame;
