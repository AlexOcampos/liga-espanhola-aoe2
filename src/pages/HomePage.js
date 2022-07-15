import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavContext } from "../context/nav_context";
import { ButtonModern } from "../components";

import logo from "../assets/lea_logo.png";
import twitter from "../assets/twitter.jpg";
import discord from "../assets/discord_color.jpg";

const HomePage = () => {
  const { openNavbar, closeNavbar } = useNavContext();
  const twitterUrl = "https://twitter.com/Aoe2LigaESP";
  const discordUrl = "https://discord.gg/cK9ZgpfH";

  useEffect(() => {
    closeNavbar();
  }, []);
  return (
    <Wrapper>
      <div className="container">
        <img className="logo" src={logo} alt="Liga Española" />
        <h2>15/Septiembre</h2>
        <div className="links">
          <ButtonModern
            text="Inscribete"
            link="/inscripcion-t5"
            marginTop="0"
            fontSize="1.8em"
          />
        </div>
        <div className="social">
          <img
            src={twitter}
            alt="twitter"
            onClick={() => window.open(twitterUrl, "_blank")}
          />
          <img
            src={discord}
            alt="discord"
            onClick={() => window.open(discordUrl, "_blank")}
          />
        </div>
      </div>
      <video
        className="background-video"
        src="/home-video.mp4"
        muted
        autoPlay
        preload="auto"
        loop
        type="video/mp4"
      ></video>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .background-video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    position: absolute;
    z-index: -1;
  }
  .container {
    margin-top: 8rem;
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-bottom: 8rem;

    h2 {
      margin-top: 2rem;
    }
  }

  .links {
    margin-top: 5rem;
  }

  .logo {
    width: 20rem;
  }

  .social {
    margin-top: 5rem;
    width: 60%;
    display: flex;
    justify-content: center;
    img {
      width: 3rem;
      cursor: pointer;
      margin: 0.5rem;
      margin-left: 2rem;
      margin-right: 2rem;
    }
  }
`;

export default HomePage;
