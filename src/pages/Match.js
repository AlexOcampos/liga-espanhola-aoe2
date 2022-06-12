import React from "react";
import styled from "styled-components";
import hero1 from "../assets/bannerE.png";
import logo from "../assets/lea_logo.png";

const Temp3Page = () => {
  return (
    <main>
      <Wrapper className="page section section-center">
        <article>
          <div className="opponents">
            DK_RUDYAIRLINES <b>VS</b> DK_CID CAMPEADOR
          </div>
          <div className="row-2">
            <div className="flag">
              <div className="flag-generator">
                <div className="halo"></div>
                <img className="lea-logo" src={logo} alt="Liga Española" />
                <img
                  className="clan-logo"
                  src={`/clans/dark-knight.png`}
                  alt="dark-knight"
                />
                <div className="flag-player-name">DK_RUDYAIRLINES</div>
                <img
                  className="profile-image-icon"
                  src="https://annapulley.com/wp-content/uploads/2010/02/meerkat-200x300.jpg"
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
                    fill="#D9D9D9"
                    stroke="black"
                    strokeWidth="3"
                  />
                  <rect width="128" height="7" fill="#FF0000" />
                </svg>
              </div>
            </div>

            <div className="flag">
              <div className="flag-generator">
                <div className="halo"></div>
                <img className="lea-logo" src={logo} alt="Liga Española" />
                <img
                  className="clan-logo"
                  src={`/clans/dark-knight.png`}
                  alt="dark-knight"
                />
                <div className="flag-player-name">DK_RUDYAIRLINES</div>
                <img
                  className="profile-image-icon"
                  src="https://annapulley.com/wp-content/uploads/2010/02/meerkat-200x300.jpg"
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
                    fill="#D9D9D9"
                    stroke="black"
                    strokeWidth="3"
                  />
                  <rect width="128" height="7" fill="#FF0000" />
                </svg>
              </div>
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

  article {
    display: flex;
  }

  .row-2 {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .flag {
    position: relative;
    margin: 64px;
    transform: scale(1.5);
  }

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
    right: 15px;
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
    background: rgb(63, 94, 251);
    background: radial-gradient(
      circle,
      rgb(0 78 255 / 50%) 0%,
      rgba(63, 94, 251, 0) 49%
    );
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
`;
export default Temp3Page;
