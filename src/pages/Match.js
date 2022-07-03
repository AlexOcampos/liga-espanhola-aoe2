import React from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

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

                    <p>{matchDetail.date ? dformat : ""}</p>
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
`;
export default MatchPage;
