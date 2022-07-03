import React from "react";
import styled from "styled-components";
import CivDataHelper from "../utils/CivDataHelper";

const CivDraft = ({ template, civBans, civPicks, civSnipeds }) => {
  const civBansPlaceholder = Array.apply(null, Array(template.civBans)).map(
    (pos, index) => {
      if (index > civBans.length - 1) {
        return 0;
      } else {
        return civBans[index];
      }
    }
  );
  const civPicksPlaceholder = Array.apply(null, Array(template.civPicks)).map(
    (pos, index) => {
      if (index > civPicks.length - 1) {
        return 0;
      } else {
        return civPicks[index];
      }
    }
  );
  return (
    <Wrapper>
      <div className="civlist">
        {civBansPlaceholder.map((civId, index) => {
          var civ = civId !== 0 ? CivDataHelper.getCivName(civId) : "pending";
          var civImg = CivDataHelper.getCivImage(civId);
          return (
            <div key={`civban-${civId}-${index}`} className="civIcon">
              <img className="ban" src="/ban-map.png" alt="ban map" />
              <img className="civImg" src={civImg} alt={civ} title={civ} />
            </div>
          );
        })}
        {civPicksPlaceholder.map((civId, index) => {
          var civ = civId !== 0 ? CivDataHelper.getCivName(civId) : "pending";
          var civImg = CivDataHelper.getCivImage(civId);
          return (
            <div key={`civpick-${civId}-${index}`} className="civIcon">
              <img className="civImg" src={civImg} alt={civ} title={civ} />
              {civSnipeds.includes(civId) ? (
                <img className="snipped" src="/snipe.png" alt="snipe" />
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  .civIcon {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.2rem;
  }
  .civImg {
    width: 5rem;
  }

  .ban {
    width: 5rem;
    height: 5rem;
    position: absolute;
  }

  .snipped {
    width: 5rem;
    height: 5rem;
    position: absolute;
  }

  .civlist {
    display: grid;
    grid-template:
      "a a a"
      "b b b";
    margin: 0.5rem;
  }
`;

export default CivDraft;
