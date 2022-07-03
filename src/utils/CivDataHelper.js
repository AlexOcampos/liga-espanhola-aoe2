import { Component } from "react";
import CivData from "./CivData.js";

class CivDataHelper extends Component {
  static getCivName = (civId) => {
    const civs = CivData.civilizations;
    var result = civs.filter((civ) => {
      if (civ.id === civId) {
        return civ.name;
      }
      return undefined;
    });

    if (!result || result.length < 1) {
      console.log(`civ ${civId} is not recognized`);
      return "unknow";
    }

    return result[0].name;
  };

  static getCivImage = (civId) => {
    if (civId === 0) {
      return "/civs/generic_civ.png";
    }

    const civs = CivData.civilizations;
    var result = civs.filter((civ) => {
      if (civ.id === civId) {
        return civ.name;
      }
      return undefined;
    });

    if (!result || result.length < 1) {
      console.log(`civ ${civId} is not recognized`);
      return "unknow";
    }

    return `/civs/${result[0].name}.png`;
  };
}

export default CivDataHelper;
