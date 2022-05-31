import React, { useRef, useState } from "react";
import styled from "styled-components";
import { date, matches } from "../utils/featured-games.json";
import { FeaturedGame } from "../components";

import domtoimage from "dom-to-image";

import logo from "../assets/lea_logo.png";

const FeaturedGamesPagePoster = () => {
  let posterImg = useRef(null);
  let resultPosterImg = useRef(null);

  const [showingElements, setShowingElements] = useState(true);

  const provideImg = () => {
    console.log(posterImg);
    domtoimage
      .toPng(posterImg.current)
      .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        resultPosterImg.current.appendChild(img);
        setShowingElements(false);
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
  };

  return (
    <main>
      <Wrapper className="page section section-center">
        <button
          className="btn poster-btn"
          onClick={() => provideImg()}
          style={{ display: showingElements ? "flex" : "none" }}
        >
          Generar imagen para poster
        </button>

        <article
          className="poster"
          ref={posterImg}
          style={{ display: showingElements ? "flex" : "none" }}
        >
          <img src={logo} alt="Liga Española" className="poster-logo" />
          <div className="title">
            <h2>Partidas destacadas</h2>
            <div className="underline"></div>
          </div>
          <h3>{date}</h3>
          {matches.length > 0 ? (
            matches.map((match, index) => {
              return <FeaturedGame match={match} key={index} />;
            })
          ) : (
            <p>No hay partidas destacadas para hoy</p>
          )}
        </article>

        <div
          className="help-info"
          style={{ display: !showingElements ? "flex" : "none" }}
        >
          Haz click derecho encima de la imagen de abajo para descargarla
        </div>
        <div className="result-img" ref={resultPosterImg}></div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  .poster-btn {
    margin-bottom: 2rem;
  }

  .help-info {
    background-color: #1c1f22;
    padding: 1rem;
  }

  /* latin-ext */
  @font-face {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/raleway/v22/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVvaorCGPrEHJA.woff2)
      format("woff2");
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
      U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/raleway/v22/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVvaorCIPrE.woff2)
      format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }

  .poster {
    font-family: "Raleway";
    background-color: #1c1f22;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 5rem;
    padding-top: 5rem;

    .title {
      margin-top: 1.5rem;
    }

    .poster-logo {
      display: block;
      width: 160px;
      margin: 0;
    }

    .underline {
      display: none;
    }

    h2,
    h3 {
      font-size: 2rem;
      font-weight: lighter;
    }

    h3 {
      margin-top: 0px;
      margin-bottom: 2rem;
    }

    .featured-game {
      width: 880px;
    }

    .players {
    }
  }

  .poster-logo {
    display: none;
  }

  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    margin-top: 5rem;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  h3 {
    margin-top: 3rem;
  }
`;
export default FeaturedGamesPagePoster;
