import React from "react";
import styled from "styled-components";
import MapDataHelper from "../utils/MapDataHelper";

const MapDraft = ({ mapBans, mapPicks }) => {
  return (
    <Wrapper>
      <div className="maplist">
        {mapBans.map((mapId, index) => {
          var mapName = MapDataHelper.getMapNameById(mapId);
          var mapImage = MapDataHelper.getMapImageById(mapId);
          return (
            <div key={`mapban-${mapId}-${index}`}>
              <img className="ban" src="/ban-map.png" alt="ban map" />
              <img
                className="mapImg"
                src={mapImage}
                alt={mapName}
                title={mapName}
              />
            </div>
          );
        })}
      </div>
      <div className="maplist">
        {mapPicks.map((mapId, index) => {
          var mapName = MapDataHelper.getMapNameById(mapId);
          var mapImage = MapDataHelper.getMapImageById(mapId);
          return (
            <img
              className="mapImg"
              key={`mappick-${mapId}-${index}`}
              src={mapImage}
              alt={mapName}
              title={mapName}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  .mapImg {
    width: 7rem;
  }

  .ban {
    width: 7rem;
    height: 7rem;
    position: absolute;
  }

  .maplist {
    display: flex;
    flex-direction: column;
    margin: 0.5rem;
  }
`;

export default MapDraft;
