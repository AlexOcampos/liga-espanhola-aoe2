import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavContext } from "../context/nav_context";
import { ButtonModern } from "../components";

const HomePage = () => {
  const registerDate = "2022-07-31 22:00:00";
  //const registerDate = "2022-07-24 22:00:00";
  const { closeNotification, closeNavbar } = useNavContext();
  const twitterUrl = "https://twitter.com/Aoe2ESP";
  const discordUrl = "https://discord.gg/ZXkABxKFq5";

  useEffect(() => {
    closeNotification();
  }, []);

  const calculateTimeLeft = () => {
    const difference = +new Date(registerDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const getIntervalDescription = (interval) => {
    if (interval === "days") {
      return "días";
    }
    if (interval === "hours") {
      return "horas";
    }
    if (interval === "minutes") {
      return "minutos";
    }
    if (interval === "seconds") {
      return "segundos";
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={`interval-${interval}`}>
        {timeLeft[interval]} {getIntervalDescription(interval)}{" "}
      </span>
    );
  });

  useEffect(() => {
    closeNavbar();
  }, []);
  return (
    <Wrapper>
      <div className="container">
        <img
          className="logo"
          src="https://alexocampos.github.io/liga-espanhola-aoe2-static/assets/lea_logo.png"
          alt="Liga Española"
        />
        <h2>
          {timerComponents.length ? (
            timerComponents
          ) : (
            <div>
              <span className="message">
                Visita el canal de Twitch de{" "}
                <a
                  href="https://www.twitch.tv/craser09"
                  target="_blank"
                  rel="noreferrer"
                >
                  Craser09
                </a>{" "}
                que va a contarte + detalles de la T5
              </span>
              <ButtonModern
                text="Inscribete"
                link="/inscripcion-t5"
                marginTop="2rem"
                fontSize="1.1em"
              />
            </div>
          )}
        </h2>

        <div className="links">
          {/* <ButtonModern
            text="Inscribete"
            link="/inscripcion-t5"
            marginTop="0"
            fontSize="1.8em"
          /> */}
        </div>

        <div className="social">
          <img
            src="https://alexocampos.github.io/liga-espanhola-aoe2-static/assets/twitter.jpg"
            alt="twitter"
            onClick={() => window.open(twitterUrl, "_blank")}
          />
          <img
            src="https://alexocampos.github.io/liga-espanhola-aoe2-static/assets/discord_color.jpg"
            alt="discord"
            onClick={() => window.open(discordUrl, "_blank")}
          />
        </div>
      </div>
      <video
        className="background-video"
        src="https://alexocampos.github.io/liga-espanhola-aoe2-static/videos/home-video.mp4"
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

  h2 {
    color: var(--clr-grey-1);
  }

  .message {
    text-transform: none;
    a {
      color: var(--clr-green-light);
    }
    a:hover {
      color: var(--clr-primary-light-2);
    }
  }

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
