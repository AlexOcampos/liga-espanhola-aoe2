import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { divisiones } from "../utils/constants";
import discordLogo from "../assets/discord.png";
import aoe2netLogo from "../assets/aoe2net.png";
import { FiExternalLink } from "react-icons/fi";
import "animate.css";

const Player = ({ player }) => {
  const [copied, setCopied] = useState(false);

  const { division, seed, name, discord, avgELO, aoe2net } = player;
  const divisionObj = divisiones.filter((div) => div.id === division);
  const divisionImg = divisionObj[0].image;
  const divisionName = divisionObj[0].text;

  useEffect(() => {
    console.log(`Copied: ${copied}`);
    if (copied) {
      setTimeout(function () {
        setCopied(false);
      }, 3000);
    }
  }, [copied]);

  return (
    <Wrapper>
      <section>
        <div className="player">
          <img
            src={`/divisions/${divisionImg}`}
            alt={divisionName}
            title={divisionName}
          />

          <span className="player-web">{name}</span>
          <span className="player-mobile">
            {name.length > 20 ? `${name.slice(0, 20)}...` : name}
          </span>
        </div>
        <div className="elo-info">
          <span>Seed: {seed}</span>
          <span>ELO Medio: {avgELO}</span>
        </div>
      </section>
      <section>
        <div
          className="discord"
          onClick={() => {
            navigator.clipboard.writeText(discord);
            setCopied(true);
          }}
        >
          <img src={discordLogo} alt={discord} />
          <span>{discord}</span>
        </div>
        <span
          className={
            copied
              ? "custom-tooltip show-tooltip animate__bounce"
              : "custom-tooltip animate__bounceOut"
          }
        >
          copiado!
        </span>

        <div className="aoe2net" onClick={() => window.open(aoe2net)}>
          <img src={aoe2netLogo} alt="AoE2Net" />
          <span>AoE2Net</span>
          <FiExternalLink />
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: flex;
  justify-content: space-between;
  border: var(--clr-grey-8) solid 0.1px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  border-radius: 4px;
  margin: 16px;
  padding: 8px;

  .player {
    display: flex;
  }

  .player img {
    width: 40px;
    height: 40px;
    margin: 0;
    margin-right: 8px;
  }

  .player span {
    display: flex;
    align-items: center;
    font-weight: bold;
  }

  .player-mobile {
    display: none !important;
  }

  .elo-info span {
    margin-right: 24px;
  }

  .custom-tooltip {
    display: none; /*flex*/
    flex-direction: column;
    align-items: center;
    margin-left: 40px;
    background-color: #000000df;
    border-radius: 4px;
    color: #fff;
  }

  .show-tooltip {
    display: flex;
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .discord {
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
  }
  .discord * {
    margin: 0;
    padding: 0;
  }
  .discord img {
    margin-right: 4px;
    width: 32px;
  }
  .aoe2net {
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    margin-top: 4px;
    margin-bottom: 4px;
  }
  .aoe2net img {
    margin: 0;
    margin-right: 4px;
    width: 32px;
  }
  .aoe2net span {
    margin-right: 4px;
  }

  @media (max-width: 600px) {
    .player-web {
      display: none !important;
    }
    .player-mobile {
      display: flex !important;
    }
    .discord span {
      display: none;
    }
    .aoe2net span {
      display: none;
    }
  }
`;

export default Player;
