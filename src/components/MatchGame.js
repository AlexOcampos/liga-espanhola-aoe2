import React from "react";
import styled from "styled-components";

import CivDataHelper from "../utils/CivDataHelper";
import MapDataHelper from "../utils/MapDataHelper";

const MatchGame = (game) => {
  var mapName = MapDataHelper.getMapNameById(game.mapId);
  var mapImage = MapDataHelper.getMapImageById(game.mapId);
  var civA = CivDataHelper.getCivName(game.playerAcivId);
  var civB = CivDataHelper.getCivName(game.playerBcivId);
  var winnerA = game.winner === "playerA";
  var winnerB = game.winner === "playerB";

  return (
    <Wrapper>
      <div className={winnerA ? "winner" : ""}>
        <img
          src={`https://alexocampos.github.io/liga-espanhola-aoe2-static/civs/${civA.toLowerCase()}.png`}
          alt={civA}
          title={civA}
        />
      </div>
      <div>
        <img
          src={`https://alexocampos.github.io/liga-espanhola-aoe2-static${mapImage}`}
          alt={mapName}
          title={mapName}
        />
      </div>
      <div className={winnerB ? "winner" : ""}>
        <img
          src={`https://alexocampos.github.io/liga-espanhola-aoe2-static/civs/${civB.toLowerCase()}.png`}
          alt={civB}
          title={civB}
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  margin-top: 3rem;
  margin-bottom: 3rem;

  div {
    margin: 0.7rem;
  }

  .winner {
    border: var(--clr-yellow-dark) 1px solid;
    border-radius: 8px;
  }

  img {
    width: 6rem;
  }
`;
export default MatchGame;
