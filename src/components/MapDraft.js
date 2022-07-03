import React from "react";
import styled from "styled-components";
import MapDataHelper from "../utils/MapDataHelper";

const MapDraft = ({ template, mapBans, mapPicks }) => {
  const mapBansPlaceholder = Array.apply(null, Array(template.mapBans)).map(
    (pos, index) => {
      if (index > mapBans.length - 1) {
        return 0;
      } else {
        return mapBans[index];
      }
    }
  );
  const mapPicksPlaceholder = Array.apply(null, Array(template.mapPicks)).map(
    (pos, index) => {
      if (index > mapPicks.length - 1) {
        return 0;
      } else {
        return mapPicks[index];
      }
    }
  );
  return (
    <Wrapper>
      <div className="maplist">
        {mapBansPlaceholder.map((mapId, index) => {
          var mapName =
            mapId !== 0 ? MapDataHelper.getMapNameById(mapId) : "pending";
          var mapImage = MapDataHelper.getMapImageById(mapId);

          return (
            <div key={`mapban-${mapId}-${index}`} className="map-placeholder">
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

        {mapPicksPlaceholder.map((mapId, index) => {
          var mapName = MapDataHelper.getMapNameById(mapId);
          var mapImage = MapDataHelper.getMapImageById(mapId);
          return (
            <div className="map-placeholder">
              <img
                className="mapImg"
                key={`mappick-${mapId}-${index}`}
                src={mapImage}
                alt={mapName}
                title={mapName}
              />
            </div>
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
    display: grid;
    grid-template:
      "a a"
      "b b";
    margin: 0.5rem;
  }
  .map-placeholder {
    margin: 0.2rem;
  }
`;

export default MapDraft;
