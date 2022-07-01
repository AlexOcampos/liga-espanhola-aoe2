import { Component } from "react";
import MapData from "./MapData.js";

class MapDataHelper extends Component {
  static getMapName = (map) => {
    if (map.map === "Generic" && map.custom_map_name) {
      return map.custom_map_name.replace(".rms", "").replace("RBW4 - ", "");
    } else {
      return map.map;
    }
  };

  static getMapNameById = (mapId) => {
    const maps = MapData.maps;

    var result = maps.filter((map) => {
      if (map.id === mapId) {
        return map.name;
      }
      return undefined;
    });

    if (!result || result.length < 1) {
      console.log(`map ${mapId} is not recognized`);
      return "unknow";
    }
    return result[0].name;
  };

  static getMapImage = (mapName) => {
    const maps = MapData.maps;

    var result = maps.filter((map) => {
      if (map.name === mapName) {
        return `/maps/${map.image}`;
      }
      return undefined;
    });

    if (!result || result.length < 1) {
      console.log(`map ${mapName} is not recognized`);
      return "/maps/cm_generic.png";
    }
    return `/maps/${result[0].image}`;
  };

  static getMapImageById = (mapId) => {
    const maps = MapData.maps;

    var result = maps.filter((map) => {
      if (map.id === mapId) {
        return `/maps/${map.image}`;
      }
      return undefined;
    });

    if (!result || result.length < 1) {
      console.log(`map ${mapId} is not recognized`);
      return "/maps/cm_generic.png";
    }
    return `/maps/${result[0].image}`;
  };
}

export default MapDataHelper;
