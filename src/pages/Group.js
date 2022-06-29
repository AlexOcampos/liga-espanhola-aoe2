import React from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import hero1 from "../assets/bannerE.png";
import { seasons } from "../utils/constants";
import { ListView } from "../components";

// URL: /season/:seasonId/group/:groupId
const Group = () => {
  const { seasonId, groupId } = useParams();
  const seasonFilter = seasons.filter((item) => parseInt(seasonId) === item.id);
  const season =
    seasonFilter && seasonFilter.length > 0
      ? seasonFilter[0]
      : { id: -1, name: "Temporada no existe" };
  const groupFilter = season.groups.filter(
    (item) => parseInt(groupId) === item.id
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
            <span>{group.text}</span>
          </p>
          <ListView />
        </article>

        <img className="background" src={hero1} alt="background 1" />
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  padding: 1rem 0;

  article {
    display: flex;
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

  .breadcrumb {
    display: flex;
    justify-content: flex-start;
    width: 100%;

    .separator {
      margin-left: 0.5rem;
      margin-right: 0.5rem;
    }
  }

  .error {
    margin: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export default Group;
