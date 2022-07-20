import React from "react";
import styled from "styled-components";

function convertHex(hexCode, opacity = 1) {
  var hex = hexCode.replace("#", "");

  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }

  var r = parseInt(hex.substring(0, 2), 16),
    g = parseInt(hex.substring(2, 4), 16),
    b = parseInt(hex.substring(4, 6), 16);

  /* Backward compatibility for whole number based opacity values. */
  if (opacity > 1 && opacity <= 100) {
    opacity = opacity / 100;
  }

  return "rgba(" + r + "," + g + "," + b + "," + opacity + ")";
}

const Flag = ({ playerName, playerImg, playerClan, haloColor, flagColor }) => {
  const haloPlayerColor = haloColor ? haloColor : "#EB5757";
  const rgbHalo1 = convertHex(haloPlayerColor, 0.5);
  const rgbHalo2 = convertHex(haloPlayerColor, 0);
  const flagColorHex = flagColor ? flagColor : "#dae2ec";

  return (
    <Wrapper>
      <div className="flag-generator">
        <div
          className="halo"
          style={{
            background: `radial-gradient(circle, ${rgbHalo1} 0%, ${rgbHalo2} 49%)`,
          }}
        ></div>
        <img
          className="lea-logo"
          src="https://alexocampos.github.io/liga-espanhola-aoe2-static/assets/lea_logo.png"
          alt="Liga Española"
        />
        {playerClan && playerClan.length > 1 ? (
          <img
            className="clan-logo"
            src={`https://alexocampos.github.io/liga-espanhola-aoe2-static${playerClan}`}
            alt="clan"
          />
        ) : (
          ""
        )}
        <div className="flag-player-name">{playerName}</div>
        <img
          className="profile-image-icon"
          src={playerImg}
          alt="profileImage"
        />
        <svg
          className="flag-background"
          width="128"
          height="211"
          viewBox="0 0 128 211"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 208V192.738V4H122V192.738V208L103 193.756L83.5 208L63.5 193.756L43.5 208L23.5 193.756L4 208Z"
            fill={flagColorHex}
            stroke="black"
            strokeWidth="3"
          />
          <rect width="128" height="7" fill="#FF0000" />
        </svg>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  margin: 64px;
  transform: scale(1.5);

  .flag-generator {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .lea-logo {
    position: absolute;
    width: 60px;
    top: -20px;
    z-index: 20;
  }

  .flag-player-name {
    position: absolute;
    max-width: 110px;
    word-break: break-all;
    margin-top: 70px;
    font-size: 0.7rem;
    color: #000000;
    font-family: "Cabin Sketch", cursive;
  }

  .profile-image-icon {
    top: 24px;
    width: 100px;
    height: 100px;
    clip-path: circle(50% at 50% 50%);
    object-fit: cover;
    position: absolute;
  }

  .clan-logo {
    position: absolute;
    width: 60px;
    bottom: 16px;
    opacity: 0.4;
  }

  .halo {
    width: 300px;
    height: 300px;
    position: absolute;
    z-index: -10;
  }
`;

export default Flag;
