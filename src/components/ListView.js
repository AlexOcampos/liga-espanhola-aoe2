import React, { useRef } from "react";
import styled from "styled-components";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const ListView = () => {
  const clasification = [
    {
      position: 1,
      player: "rudyairlines",
      points: 13,
      history: [
        {
          gameId: 1,
          resultSummary: "2",
          result: "win",
          playerA: "rudyairlines",
          playerAResult: 2,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 1,
          playerBAW: "",
        },
        {
          gameId: 2,
          resultSummary: "3",
          result: "win",
          playerA: "rudyairlines",
          playerAResult: 3,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 0,
          playerBAW: "",
        },
        {
          gameId: 3,
          resultSummary: "2",
          result: "win",
          playerA: "rudyairlines",
          playerAResult: 2,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 2,
          playerBAW: "",
        },
        {
          gameId: 4,
          resultSummary: "2",
          result: "win",
          playerA: "rudyairlines",
          playerAResult: 2,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 2,
          playerBAW: "",
        },
        {
          gameId: 5,
          resultSummary: "2",
          result: "defeat",
          playerA: "rudyairlines",
          playerAResult: 2,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 2,
          playerBAW: "",
        },
        {
          gameId: 6,
          resultSummary: "-",
          result: "not-played",
          playerA: "rudyairlines",
          playerAResult: 2,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 2,
          playerBAW: "",
        },
      ],
    },
    {
      position: 2,
      player: "TaToH",
      points: 13,
      history: [
        {
          gameId: 1,
          resultSummary: "2",
          result: "win",
          playerA: "rudyairlines",
          playerAResult: 2,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 1,
          playerBAW: "",
        },
        {
          gameId: 2,
          resultSummary: "3",
          result: "win",
          playerA: "rudyairlines",
          playerAResult: 3,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 0,
          playerBAW: "",
        },
        {
          gameId: 3,
          resultSummary: "2",
          result: "win",
          playerA: "rudyairlines",
          playerAResult: 2,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 2,
          playerBAW: "",
        },
        {
          gameId: 4,
          resultSummary: "2",
          result: "win",
          playerA: "rudyairlines",
          playerAResult: 2,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 2,
          playerBAW: "",
        },
        {
          gameId: 5,
          resultSummary: "2",
          result: "defeat",
          playerA: "rudyairlines",
          playerAResult: 2,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 2,
          playerBAW: "",
        },
        {
          gameId: 6,
          resultSummary: "-",
          result: "not-played",
          playerA: "rudyairlines",
          playerAResult: 2,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 2,
          playerBAW: "",
        },
      ],
    },
    {
      position: 3,
      player: "Capoch",
      points: 13,
      history: [
        {
          gameId: 1,
          resultSummary: "2",
          result: "win",
          playerA: "rudyairlines",
          playerAResult: 2,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 1,
          playerBAW: "",
        },
        {
          gameId: 2,
          resultSummary: "3",
          result: "win",
          playerA: "rudyairlines",
          playerAResult: 3,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 0,
          playerBAW: "",
        },
        {
          gameId: 3,
          resultSummary: "2",
          result: "win",
          playerA: "rudyairlines",
          playerAResult: 2,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 2,
          playerBAW: "",
        },
        {
          gameId: 4,
          resultSummary: "2",
          result: "win",
          playerA: "rudyairlines",
          playerAResult: 2,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 2,
          playerBAW: "",
        },
        {
          gameId: 5,
          resultSummary: "2",
          result: "defeat",
          playerA: "rudyairlines",
          playerAResult: 2,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 2,
          playerBAW: "",
        },
        {
          gameId: 6,
          resultSummary: "2",
          result: "not-played",
          playerA: "rudyairlines",
          playerAResult: 2,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 2,
          playerBAW: "",
        },
      ],
    },
    {
      position: 4,
      player: "LaN",
      points: 13,
      history: [
        {
          gameId: 1,
          resultSummary: "2",
          result: "win",
          playerA: "rudyairlines",
          playerAResult: 2,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 1,
          playerBAW: "",
        },
        {
          gameId: 2,
          resultSummary: "3",
          result: "win",
          playerA: "rudyairlines",
          playerAResult: 3,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 0,
          playerBAW: "",
        },
        {
          gameId: 3,
          resultSummary: "2",
          result: "win",
          playerA: "rudyairlines",
          playerAResult: 2,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 2,
          playerBAW: "",
        },
        {
          gameId: 4,
          resultSummary: "2",
          result: "win",
          playerA: "rudyairlines",
          playerAResult: 2,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 2,
          playerBAW: "",
        },
        {
          gameId: 5,
          resultSummary: "2",
          result: "defeat",
          playerA: "rudyairlines",
          playerAResult: 2,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 2,
          playerBAW: "",
        },
        {
          gameId: 6,
          resultSummary: "2",
          result: "not-played",
          playerA: "rudyairlines",
          playerAResult: 2,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 2,
          playerBAW: "",
        },
      ],
    },
    {
      position: 5,
      player: "Moneimon",
      points: 13,
      history: [
        {
          gameId: 1,
          resultSummary: "2",
          result: "win",
          playerA: "rudyairlines",
          playerAResult: 2,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 1,
          playerBAW: "",
        },
        {
          gameId: 2,
          resultSummary: "3",
          result: "win",
          playerA: "rudyairlines",
          playerAResult: 3,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 0,
          playerBAW: "",
        },
        {
          gameId: 3,
          resultSummary: "2",
          result: "win",
          playerA: "rudyairlines",
          playerAResult: 2,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 2,
          playerBAW: "",
        },
        {
          gameId: 4,
          resultSummary: "2",
          result: "win",
          playerA: "rudyairlines",
          playerAResult: 2,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 2,
          playerBAW: "",
        },
        {
          gameId: 5,
          resultSummary: "2",
          result: "defeat",
          playerA: "rudyairlines",
          playerAResult: 2,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 2,
          playerBAW: "",
        },
        {
          gameId: 6,
          resultSummary: "2",
          result: "not-played",
          playerA: "rudyairlines",
          playerAResult: 2,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 2,
          playerBAW: "",
        },
      ],
    },
    {
      position: 6,
      player: "Gauss",
      points: 13,
      history: [
        {
          gameId: 1,
          resultSummary: "2",
          result: "win",
          playerA: "rudyairlines",
          playerAResult: 2,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 1,
          playerBAW: "",
        },
        {
          gameId: 2,
          resultSummary: "3",
          result: "win",
          playerA: "rudyairlines",
          playerAResult: 3,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 0,
          playerBAW: "",
        },
        {
          gameId: 3,
          resultSummary: "2",
          result: "win",
          playerA: "rudyairlines",
          playerAResult: 2,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 2,
          playerBAW: "",
        },
        {
          gameId: 4,
          resultSummary: "2",
          result: "win",
          playerA: "rudyairlines",
          playerAResult: 2,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 2,
          playerBAW: "",
        },
        {
          gameId: 5,
          resultSummary: "2",
          result: "defeat",
          playerA: "rudyairlines",
          playerAResult: 2,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 2,
          playerBAW: "",
        },
        {
          gameId: 6,
          resultSummary: "2",
          result: "not-played",
          playerA: "rudyairlines",
          playerAResult: 2,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 2,
          playerBAW: "",
        },
      ],
    },
    {
      position: 7,
      player: "m0re",
      points: 13,
      history: [
        {
          gameId: 1,
          resultSummary: "2",
          result: "win",
          playerA: "rudyairlines",
          playerAResult: 2,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 1,
          playerBAW: "",
        },
        {
          gameId: 2,
          resultSummary: "3",
          result: "win",
          playerA: "rudyairlines",
          playerAResult: 3,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 0,
          playerBAW: "",
        },
        {
          gameId: 3,
          resultSummary: "2",
          result: "win",
          playerA: "rudyairlines",
          playerAResult: 2,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 2,
          playerBAW: "",
        },
        {
          gameId: 4,
          resultSummary: "2",
          result: "win",
          playerA: "rudyairlines",
          playerAResult: 2,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 2,
          playerBAW: "",
        },
        {
          gameId: 5,
          resultSummary: "2",
          result: "defeat",
          playerA: "rudyairlines",
          playerAResult: 2,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 2,
          playerBAW: "",
        },
        {
          gameId: 6,
          resultSummary: "2",
          result: "not-played",
          playerA: "rudyairlines",
          playerAResult: 2,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 2,
          playerBAW: "",
        },
      ],
    },
    {
      position: 8,
      player: "LMC | Duke Thomson",
      points: 13,
      history: [
        {
          gameId: 1,
          resultSummary: "2",
          result: "win",
          playerA: "rudyairlines",
          playerAResult: 2,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 1,
          playerBAW: "",
        },
        {
          gameId: 2,
          resultSummary: "3",
          result: "win",
          playerA: "rudyairlines",
          playerAResult: 3,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 0,
          playerBAW: "",
        },
        {
          gameId: 3,
          resultSummary: "2",
          result: "win",
          playerA: "rudyairlines",
          playerAResult: 2,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 2,
          playerBAW: "",
        },
        {
          gameId: 4,
          resultSummary: "2",
          result: "win",
          playerA: "rudyairlines",
          playerAResult: 2,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 2,
          playerBAW: "",
        },
        {
          gameId: 5,
          resultSummary: "2",
          result: "defeat",
          playerA: "rudyairlines",
          playerAResult: 2,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 2,
          playerBAW: "",
        },
        {
          gameId: 6,
          resultSummary: "2",
          result: "not-played",
          playerA: "rudyairlines",
          playerAResult: 2,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 2,
          playerBAW: "",
        },
      ],
    },
    {
      position: 9,
      player: "Bazing Hood",
      points: 13,
      history: [
        {
          gameId: 1,
          resultSummary: "2",
          result: "win",
          playerA: "rudyairlines",
          playerAResult: 2,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 1,
          playerBAW: "",
        },
        {
          gameId: 2,
          resultSummary: "3",
          result: "win",
          playerA: "rudyairlines",
          playerAResult: 3,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 0,
          playerBAW: "",
        },
        {
          gameId: 3,
          resultSummary: "2",
          result: "win",
          playerA: "rudyairlines",
          playerAResult: 2,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 2,
          playerBAW: "",
        },
        {
          gameId: 4,
          resultSummary: "2",
          result: "win",
          playerA: "rudyairlines",
          playerAResult: 2,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 2,
          playerBAW: "",
        },
        {
          gameId: 5,
          resultSummary: "2",
          result: "defeat",
          playerA: "rudyairlines",
          playerAResult: 2,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 2,
          playerBAW: "",
        },
        {
          gameId: 6,
          resultSummary: "2",
          result: "not-played",
          playerA: "rudyairlines",
          playerAResult: 2,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 2,
          playerBAW: "",
        },
      ],
    },
    {
      position: 10,
      player: "ReyO",
      points: 13,
      history: [
        {
          gameId: 1,
          resultSummary: "2",
          result: "win",
          playerA: "rudyairlines",
          playerAResult: 2,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 1,
          playerBAW: "",
        },
        {
          gameId: 2,
          resultSummary: "3",
          result: "win",
          playerA: "rudyairlines",
          playerAResult: 3,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 0,
          playerBAW: "",
        },
        {
          gameId: 3,
          resultSummary: "2",
          result: "win",
          playerA: "rudyairlines",
          playerAResult: 2,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 2,
          playerBAW: "",
        },
        {
          gameId: 4,
          resultSummary: "2",
          result: "win",
          playerA: "rudyairlines",
          playerAResult: 2,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 2,
          playerBAW: "",
        },
        {
          gameId: 5,
          resultSummary: "2",
          result: "defeat",
          playerA: "rudyairlines",
          playerAResult: 2,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 2,
          playerBAW: "",
        },
        {
          gameId: 6,
          resultSummary: "2",
          result: "not-played",
          playerA: "rudyairlines",
          playerAResult: 2,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 2,
          playerBAW: "",
        },
      ],
    },
    {
      position: 11,
      player: "12Tirador",
      points: 13,
      history: [
        {
          gameId: 1,
          resultSummary: "2",
          result: "win",
          playerA: "rudyairlines",
          playerAResult: 2,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 1,
          playerBAW: "",
        },
        {
          gameId: 2,
          resultSummary: "3",
          result: "win",
          playerA: "rudyairlines",
          playerAResult: 3,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 0,
          playerBAW: "",
        },
        {
          gameId: 3,
          resultSummary: "2",
          result: "win",
          playerA: "rudyairlines",
          playerAResult: 2,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 2,
          playerBAW: "",
        },
        {
          gameId: 4,
          resultSummary: "2",
          result: "win",
          playerA: "rudyairlines",
          playerAResult: 2,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 2,
          playerBAW: "",
        },
        {
          gameId: 5,
          resultSummary: "2",
          result: "defeat",
          playerA: "rudyairlines",
          playerAResult: 2,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 2,
          playerBAW: "",
        },
        {
          gameId: 6,
          resultSummary: "2",
          result: "not-played",
          playerA: "rudyairlines",
          playerAResult: 2,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 2,
          playerBAW: "",
        },
      ],
    },
    {
      position: 12,
      player: "OSO_CT",
      points: 13,
      history: [
        {
          gameId: 1,
          resultSummary: "2",
          result: "win",
          playerA: "rudyairlines",
          playerAResult: 2,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 1,
          playerBAW: "",
        },
        {
          gameId: 2,
          resultSummary: "3",
          result: "win",
          playerA: "rudyairlines",
          playerAResult: 3,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 0,
          playerBAW: "",
        },
        {
          gameId: 3,
          resultSummary: "2",
          result: "win",
          playerA: "rudyairlines",
          playerAResult: 2,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 2,
          playerBAW: "",
        },
        {
          gameId: 4,
          resultSummary: "2",
          result: "win",
          playerA: "rudyairlines",
          playerAResult: 2,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 2,
          playerBAW: "",
        },
        {
          gameId: 5,
          resultSummary: "2",
          result: "defeat",
          playerA: "rudyairlines",
          playerAResult: 2,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 2,
          playerBAW: "",
        },
        {
          gameId: 6,
          resultSummary: "2",
          result: "not-played",
          playerA: "rudyairlines",
          playerAResult: 2,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 2,
          playerBAW: "",
        },
      ],
    },
    {
      position: 13,
      player: "Jorge García",
      points: 13,
      history: [
        {
          gameId: 1,
          resultSummary: "2",
          result: "win",
          playerA: "rudyairlines",
          playerAResult: 2,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 1,
          playerBAW: "",
        },
        {
          gameId: 2,
          resultSummary: "3",
          result: "win",
          playerA: "rudyairlines",
          playerAResult: 3,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 0,
          playerBAW: "",
        },
        {
          gameId: 3,
          resultSummary: "2",
          result: "win",
          playerA: "rudyairlines",
          playerAResult: 2,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 2,
          playerBAW: "",
        },
        {
          gameId: 4,
          resultSummary: "2",
          result: "win",
          playerA: "rudyairlines",
          playerAResult: 2,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 2,
          playerBAW: "",
        },
        {
          gameId: 5,
          resultSummary: "2",
          result: "defeat",
          playerA: "rudyairlines",
          playerAResult: 2,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 2,
          playerBAW: "",
        },
        {
          gameId: 6,
          resultSummary: "2",
          result: "not-played",
          playerA: "rudyairlines",
          playerAResult: 2,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 2,
          playerBAW: "",
        },
      ],
    },
    {
      position: 14,
      player: "Flavius",
      points: 13,
      history: [
        {
          gameId: 1,
          resultSummary: "2",
          result: "win",
          playerA: "rudyairlines",
          playerAResult: 2,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 1,
          playerBAW: "",
        },
        {
          gameId: 2,
          resultSummary: "3",
          result: "win",
          playerA: "rudyairlines",
          playerAResult: 3,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 0,
          playerBAW: "",
        },
        {
          gameId: 3,
          resultSummary: "2",
          result: "win",
          playerA: "rudyairlines",
          playerAResult: 2,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 2,
          playerBAW: "",
        },
        {
          gameId: 4,
          resultSummary: "2",
          result: "win",
          playerA: "rudyairlines",
          playerAResult: 2,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 2,
          playerBAW: "",
        },
        {
          gameId: 5,
          resultSummary: "2",
          result: "defeat",
          playerA: "rudyairlines",
          playerAResult: 2,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 2,
          playerBAW: "",
        },
        {
          gameId: 6,
          resultSummary: "2",
          result: "not-played",
          playerA: "rudyairlines",
          playerAResult: 2,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 2,
          playerBAW: "",
        },
      ],
    },
    {
      position: 15,
      player: "FerV",
      points: 13,
      history: [
        {
          gameId: 1,
          resultSummary: "2",
          result: "win",
          playerA: "rudyairlines",
          playerAResult: 2,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 1,
          playerBAW: "",
        },
        {
          gameId: 2,
          resultSummary: "3",
          result: "win",
          playerA: "rudyairlines",
          playerAResult: 3,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 0,
          playerBAW: "",
        },
        {
          gameId: 3,
          resultSummary: "2",
          result: "win",
          playerA: "rudyairlines",
          playerAResult: 2,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 2,
          playerBAW: "",
        },
        {
          gameId: 4,
          resultSummary: "2",
          result: "win",
          playerA: "rudyairlines",
          playerAResult: 2,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 2,
          playerBAW: "",
        },
        {
          gameId: 5,
          resultSummary: "2",
          result: "defeat",
          playerA: "rudyairlines",
          playerAResult: 2,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 2,
          playerBAW: "",
        },
        {
          gameId: 6,
          resultSummary: "2",
          result: "not-played",
          playerA: "rudyairlines",
          playerAResult: 2,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 2,
          playerBAW: "",
        },
      ],
    },
    {
      position: 16,
      player: "NHN_Forever",
      points: 13,
      history: [
        {
          gameId: 1,
          resultSummary: "2",
          result: "win",
          playerA: "rudyairlines",
          playerAResult: 2,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 1,
          playerBAW: "",
        },
        {
          gameId: 2,
          resultSummary: "3",
          result: "win",
          playerA: "rudyairlines",
          playerAResult: 3,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 0,
          playerBAW: "",
        },
        {
          gameId: 3,
          resultSummary: "2",
          result: "win",
          playerA: "rudyairlines",
          playerAResult: 2,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 2,
          playerBAW: "",
        },
        {
          gameId: 4,
          resultSummary: "2",
          result: "win",
          playerA: "rudyairlines",
          playerAResult: 2,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 2,
          playerBAW: "",
        },
        {
          gameId: 5,
          resultSummary: "2",
          result: "defeat",
          playerA: "rudyairlines",
          playerAResult: 2,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 2,
          playerBAW: "",
        },
        {
          gameId: 6,
          resultSummary: "2",
          result: "not-played",
          playerA: "rudyairlines",
          playerAResult: 2,
          playerAAW: "AW",
          playerB: "DK Cid Campeador",
          playerBResult: 2,
          playerBAW: "",
        },
      ],
    },
  ];

  const lastPosition = clasification.length;

  return (
    <Wrapper>
      <div className="row header">
        <div className="x1">#</div>
        <div className="x4">Jugador</div>
        <div className="x2">Puntos</div>
        <div className="x3">Partidas</div>
      </div>
      <hr />
      {clasification.map((player) => {
        return (
          <>
            <div className="row">
              {player.position === 1 ? (
                <div className="position pos-1"></div>
              ) : (
                ""
              )}
              {player.position === 2 || player.position === 3 ? (
                <div className="position pos-promotion"></div>
              ) : (
                ""
              )}
              {player.position === lastPosition - 1 ||
              player.position === lastPosition - 2 ? (
                <div className="position pos-playoff-descent"></div>
              ) : (
                ""
              )}
              {player.position === lastPosition ? (
                <div className="position pos-last"></div>
              ) : (
                ""
              )}
              <div className="x1">{player.position}</div>
              <div className="x4">{player.player}</div>
              <div className="x2">{player.points}</div>
              <div className="x3 matches-history">
                {player.history.map((match) => {
                  return (
                    <div className={`match ${match.result}`}>
                      {match.resultSummary}
                    </div>
                  );
                })}
              </div>
              <FaAngleDown />
              {
                //<FaAngleUp />
              }
            </div>
            <div className="matches-history-detail detail-hidden">
              {player.history.map((match) => {
                return (
                  <div className={`match ${match.result}`}>
                    {match.resultSummary}
                  </div>
                );
              })}
            </div>
            <hr />
          </>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
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

  .header {
    font-weight: bold;
  }

  .position {
    width: 5px;
    height: 90%;
    border-radius: 8px;
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

  .detail-hidden {
    display: none;
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
`;

export default ListView;
