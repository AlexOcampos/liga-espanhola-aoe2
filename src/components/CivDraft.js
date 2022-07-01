import React from "react";
import styled from "styled-components";
import CivDataHelper from "../utils/CivDataHelper";

const CivDraft = ({ civBans, civPicks, civSnipeds }) => {
  return (
    <Wrapper>
      <div className="civlist">
        {civBans.map((civId, index) => {
          var civ = CivDataHelper.getCivName(civId);
          var civImg = CivDataHelper.getCivImage(civId);
          return (
            <div key={`civban-${civId}-${index}`} className="civIcon">
              <img className="ban" src="/ban-map.png" alt="ban map" />
              <img className="civImg" src={civImg} alt={civ} title={civ} />
            </div>
          );
        })}
        {civPicks.map((civId, index) => {
          var civ = CivDataHelper.getCivName(civId);
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
  .civIcon {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
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
