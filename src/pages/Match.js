import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { FaEdit } from "react-icons/fa";
//import DateTimePicker from "react-datetime-picker";
import DateTimePicker from "react-datetime-picker/dist/entry.nostyle";

import { MatchGame, Flag, MapDraft, CivDraft } from "../components";

import { seasons } from "../utils/constants";
import hero1 from "../assets/bannerE.png";

const MatchPage = () => {
  const { matchId } = useParams();

  const matches = [
    {
      matchId: 1,
      seasonId: 5,
      groupId: 1,
      status: "FINISHED",
      resultSummary: "2",
      date: 1656534606,
      playerA: "rudyairlines",
      playerAResult: 2,
      playerAAW: "",
      playerB: "DK Cid Campeador",
      playerBResult: 1,
      playerBAW: "",
      draft: {
        template: {
          mapBans: 1,
          mapPicks: 1,
          mapSnipes: 0,
          civBans: 1,
          civPicks: 5,
          civSnipes: 1,
        },
        mapBans: {
          playerA: [25],
          playerB: [23],
        },
        mapPicks: {
          playerA: [17],
          playerB: [50],
        },
        civBans: {
          playerA: [25],
          playerB: [22],
        },
        civPicks: {
          playerA: [12, 2, 3, 43, 5],
          playerB: [6, 7, 8, 9, 10],
        },
        civSnipeds: {
          playerA: [2],
          playerB: [10],
        },
      },
      games: [
        {
          gameId: 123456789,
          recUrl: "",
          winner: "playerA",
          winnerAW: false,
          mapId: 12,
          playerAcivId: 1,
          playerBcivId: 2,
        },
        {
          gameId: 123456789,
          recUrl: "",
          winner: "playerA",
          winnerAW: false,
          mapId: 16,
          playerAcivId: 3,
          playerBcivId: 4,
        },
        {
          gameId: 123456789,
          recUrl: "",
          winner: "playerB",
          winnerAW: false,
          mapId: 9,
          playerAcivId: 14,
          playerBcivId: 15,
        },
      ],
    },
    {
      matchId: 2,
      seasonId: 5,
      groupId: 1,
      status: "NOT_STARTED",
      resultSummary: "2",
      date: 1656534606,
      playerA: "rudyairlines",
      playerAResult: 0,
      playerAAW: "",
      playerB: "DK Verlok",
      playerBResult: 0,
      playerBAW: "",
      draft: {
        template: {
          mapBans: 1,
          mapPicks: 1,
          mapSnipes: 0,
          civBans: 1,
          civPicks: 5,
          civSnipes: 1,
        },
        mapBans: {
          playerA: [],
          playerB: [],
        },
        mapPicks: {
          playerA: [],
          playerB: [],
        },
        civBans: {
          playerA: [],
          playerB: [],
        },
        civPicks: {
          playerA: [],
          playerB: [],
        },
        civSnipeds: {
          playerA: [],
          playerB: [],
        },
      },
      games: [],
    },
  ];

  const findMatch = matches.filter(
    (match) => match.matchId === parseInt(matchId)
  );
  const matchDetail =
    findMatch && findMatch.length > 0 ? findMatch[0] : matches[0];

  const d = new Date(matchDetail.date * 1000);
  const dformat = d
    .toISOString()
    .replace(/T/, " ")
    .replace(/:\d\d\..+/, "");
  const seasonFilter = seasons.filter(
    (item) => parseInt(matchDetail.seasonId) === item.id
  );

  const [matchDate, setMatchDate] = useState(d);

  const season =
    seasonFilter && seasonFilter.length > 0
      ? seasonFilter[0]
      : { id: -1, name: "Temporada no existe" };
  const groupFilter = season.groups.filter(
    (item) => parseInt(matchDetail.groupId) === item.id
  );
  const group =
    groupFilter && groupFilter.length > 0
      ? groupFilter[0]
      : { id: -1, name: "Grupo no existe" };

  if (season.id === -1) {
    return (
      <main>
        <Wrapper className="page section section-center">
          <div className="error">La temporada no existe</div>
        </Wrapper>
      </main>
    );
  }

  if (group.id === -1) {
    return (
      <main>
        <Wrapper className="page section section-center">
          <div className="error">La división no existe</div>
        </Wrapper>
      </main>
    );
  }

  const seasonLink = season.id === 5 ? "/temporada-5" : `/season/${season.id}`;
  const groupLink = `/season/${season.id}/group/${group.id}`;

  return (
    <main>
      <Wrapper className="page section section-center">
        <article>
          <p className="breadcrumb">
            Liga Española <span className="separator">&gt;</span>{" "}
            <span>
              <Link to={seasonLink}>{season.name}</Link>
            </span>{" "}
            <span className="separator">&gt;</span>
            <span>
              <Link to={groupLink}>{group.text}</Link>
            </span>
            <span className="separator">&gt;</span>
            <span>
              {matchDetail.playerA} vs {matchDetail.playerB}
            </span>
          </p>

          <div className="row-2">
            <div className="flag">
              <Flag
                playerName={matchDetail.playerA}
                playerImg="https://annapulley.com/wp-content/uploads/2010/02/meerkat-200x300.jpg"
                playerClan="/clans/dark-knight.png"
                haloColor="#6bb621"
                flagColor="#6be675"
              />
              <MapDraft
                template={matchDetail.draft.template}
                mapBans={matchDetail.draft.mapBans.playerA}
                mapPicks={matchDetail.draft.mapPicks.playerA}
              />
              <CivDraft
                template={matchDetail.draft.template}
                civBans={matchDetail.draft.civBans.playerA}
                civPicks={matchDetail.draft.civPicks.playerA}
                civSnipeds={matchDetail.draft.civSnipeds.playerA}
              />
            </div>

            <div className="matches">
              <h1 className="result">
                {matchDetail.status === "NOT_STARTED" ? (
                  <div>
                    <p>No ha comenzado</p>
                    {/* <p>
                      {matchDetail.date ? dformat : ""}
                      <FaEdit className="edit-icon" />
                    </p> */}
                    <div>
                      <DateTimePicker
                        className="date-picker"
                        onChange={setMatchDate}
                        value={matchDate}
                        disabled={false}
                      />
                    </div>
                  </div>
                ) : (
                  `${matchDetail.playerAResult} : ${matchDetail.playerBResult}`
                )}
              </h1>
              {matchDetail.games.map((game, index) => {
                return <MatchGame key={index} {...game} />;
              })}
            </div>

            <div className="flag">
              <Flag
                playerName={matchDetail.playerB}
                playerImg="https://www.aceros-de-hispania.com/imagen/espadas-cid/el-cid-campeador.gif"
                flagColor="#6d6d6d"
              />
              <MapDraft
                template={matchDetail.draft.template}
                mapBans={matchDetail.draft.mapBans.playerB}
                mapPicks={matchDetail.draft.mapPicks.playerB}
              />
              <CivDraft
                template={matchDetail.draft.template}
                civBans={matchDetail.draft.civBans.playerB}
                civPicks={matchDetail.draft.civPicks.playerB}
                civSnipeds={matchDetail.draft.civSnipeds.playerB}
              />
            </div>
          </div>
        </article>

        <img className="background" src={hero1} alt="background 1" />
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  padding: 1rem 0;

  .breadcrumb {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    margin-bottom: 5rem;

    .separator {
      margin-left: 0.5rem;
      margin-right: 0.5rem;
    }
  }

  article {
    display: flex;
  }

  .row-2 {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .flag {
  }

  .background {
    width: 100%;
    position: absolute;
    z-index: -10;
    top: var(--header-height);
    right: 0;
    opacity: 0.5;
  }

  article {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .opponents {
    font-size: 2rem;

    b {
      margin-right: 2.5rem;
      margin-left: 2.5rem;
      font-size: 2.5rem;
    }
  }

  .result {
    display: flex;
    justify-content: center;
    font-size: 4.5rem;

    div {
      font-size: 1.5rem;
      text-transform: none;
    }
  }
  .edit-icon {
    margin-left: 0.5rem;
    cursor: pointer;
  }
  .date-picker {
    color: var(--clr-grey-1);
  }

  .react-datetime-picker {
    display: inline-flex;
    position: relative;
    color: var(--clr-grey-1);
  }
  .react-datetime-picker,
  .react-datetime-picker *,
  .react-datetime-picker *:before,
  .react-datetime-picker *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .react-datetime-picker--disabled {
    background-color: #f0f0f0;
    color: var(--clr-grey-1);
  }
  .react-datetime-picker__wrapper {
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
    border: thin solid gray;
  }
  .react-datetime-picker__inputGroup {
    min-width: calc(4px + (4px * 3) + 0.54em * 6 + 0.217em * 2);
    flex-grow: 1;
    padding: 0 2px;
  }
  .react-datetime-picker__inputGroup__divider {
    padding: 1px 0;
    white-space: pre;
  }
  .react-datetime-picker__inputGroup__input {
    min-width: 0.54em;
    height: calc(100% - 2px);
    position: relative;
    padding: 1px;
    border: 0;
    background: none;
    font: inherit;
    box-sizing: content-box;
    -moz-appearance: textfield;
    color: var(--clr-grey-1);
  }
  .react-datetime-picker__inputGroup__input::-webkit-outer-spin-button,
  .react-datetime-picker__inputGroup__input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .react-datetime-picker__inputGroup__input:invalid {
    background: rgba(255, 0, 0, 0.1);
  }
  .react-datetime-picker__inputGroup__input--hasLeadingZero {
    margin-left: -0.54em;
    padding-left: calc(1px + 0.54em);
  }
  .react-datetime-picker__inputGroup__amPm {
    font: inherit;
    -moz-appearance: menulist;
  }
  .react-datetime-picker__button {
    border: 0;
    background: transparent;
    padding: 4px 6px;
  }
  .react-datetime-picker__button:enabled {
    cursor: pointer;
  }
  .react-datetime-picker__button:enabled:hover
    .react-datetime-picker__button__icon,
  .react-datetime-picker__button:enabled:focus
    .react-datetime-picker__button__icon {
    stroke: #0078d7;
  }
  .react-datetime-picker__button:disabled .react-datetime-picker__button__icon {
    stroke: #6d6d6d;
  }
  .react-datetime-picker__button svg {
    display: inherit;
  }
  .react-datetime-picker__calendar,
  .react-datetime-picker__clock {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1;
  }
  .react-datetime-picker__calendar--closed,
  .react-datetime-picker__clock--closed {
    display: none;
  }
  .react-datetime-picker__calendar {
    width: 350px;
    max-width: 100vw;
  }
  .react-datetime-picker__calendar .react-calendar {
    border-width: thin;
  }
  .react-datetime-picker__clock {
    width: 200px;
    height: 200px;
    max-width: 100vw;
    padding: 25px;
    background-color: white;
    border: thin solid #a0a096;
  }
  .react-datetime-picker__clear-button svg {
    stroke: var(--clr-grey-1);
  }
  .react-datetime-picker__calendar-button svg {
    stroke: var(--clr-grey-1);
  }

  /* calendar */
  .react-calendar {
    width: 350px;
    max-width: 100%;
    background: white;
    border: 1px solid #a0a096;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.125em;
  }
  .react-calendar--doubleView {
    width: 700px;
  }
  .react-calendar--doubleView .react-calendar__viewContainer {
    display: flex;
    margin: -0.5em;
  }
  .react-calendar--doubleView .react-calendar__viewContainer > * {
    width: 50%;
    margin: 0.5em;
  }
  .react-calendar,
  .react-calendar *,
  .react-calendar *:before,
  .react-calendar *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .react-calendar button {
    margin: 0;
    border: 0;
    outline: none;
  }
  .react-calendar button:enabled:hover {
    cursor: pointer;
  }
  .react-calendar__navigation {
    display: flex;
    height: 44px;
    margin-bottom: 1em;
  }
  .react-calendar__navigation button {
    min-width: 44px;
    background: none;
  }
  .react-calendar__navigation button:disabled {
    background-color: #f0f0f0;
  }
  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: #e6e6e6;
  }
  .react-calendar__month-view__weekdays {
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.75em;
  }
  .react-calendar__month-view__weekdays__weekday {
    padding: 0.5em;
  }
  .react-calendar__month-view__weekNumbers .react-calendar__tile {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75em;
    font-weight: bold;
  }
  .react-calendar__month-view__days__day--weekend {
    color: #d10000;
  }
  .react-calendar__month-view__days__day--neighboringMonth {
    color: #757575;
  }
  .react-calendar__year-view .react-calendar__tile,
  .react-calendar__decade-view .react-calendar__tile,
  .react-calendar__century-view .react-calendar__tile {
    padding: 2em 0.5em;
  }
  .react-calendar__tile {
    max-width: 100%;
    padding: 10px 6.6667px;
    background: none;
    text-align: center;
    line-height: 16px;
  }
  .react-calendar__tile:disabled {
    background-color: #f0f0f0;
  }
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background-color: #e6e6e6;
  }
  .react-calendar__tile--now {
    background: #ffff76;
  }
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: #ffffa9;
  }
  .react-calendar__tile--hasActive {
    background: #76baff;
  }
  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
    background: #a9d4ff;
  }
  .react-calendar__tile--active {
    background: #006edc;
    color: white;
  }
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: #1087ff;
  }
  .react-calendar--selectRange .react-calendar__tile--hover {
    background-color: #e6e6e6;
  }

  /* Clock */
  .react-clock {
    display: block;
    position: relative;
  }
  .react-clock,
  .react-clock *,
  .react-clock *:before,
  .react-clock *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .react-clock__face {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border: 1px solid black;
    border-radius: 50%;
  }
  .react-clock__hand {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    right: 50%;
  }
  .react-clock__hand__body {
    position: absolute;
    background-color: black;
    transform: translateX(-50%);
  }
  .react-clock__mark {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    right: 50%;
  }
  .react-clock__mark__body {
    position: absolute;
    background-color: black;
    transform: translateX(-50%);
  }
  .react-clock__mark__number {
    position: absolute;
    left: -40px;
    width: 80px;
    text-align: center;
  }
  .react-clock__second-hand__body {
    background-color: red;
  }
`;
export default MatchPage;
