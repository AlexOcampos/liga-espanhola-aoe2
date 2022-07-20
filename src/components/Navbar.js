import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import styled from "styled-components";
import { links } from "../utils/constants";
import { useNavContext } from "../context/nav_context";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const twitterUrl = "https://twitter.com/Aoe2LigaESP";
  const discordUrl = "https://discord.gg/cK9ZgpfH";
  const location = useLocation();
  const url = links.filter((link) => link.url === location.pathname);

  console.log(`Location: ${location.pathname}`);
  let activePageUrl = -1;
  if (url && url.length > 0) {
    activePageUrl = url[0].id;
  }

  const [activePage, setActivePage] = useState(activePageUrl);
  const { openSidebar, isNavbarOpen } = useNavContext();

  return (
    <NavContainer style={{ display: `${isNavbarOpen ? "flex" : "none"}` }}>
      <div>
        <header>
          <div className="nav-center">
            <div className="nav-header">
              <Link to="/">
                <img
                  src="https://alexocampos.github.io/liga-espanhola-aoe2-static/assets/lea_logo.png"
                  alt="Liga Española"
                />
              </Link>
              <button
                type="button"
                className="nav-toggle"
                onClick={openSidebar}
              >
                <FiMenu />
              </button>
            </div>
            <ul className="nav-links">
              {links.map((link) => {
                const { id, text, url } = link;
                return (
                  <li key={id}>
                    <Link
                      to={url}
                      className={`${activePage === id ? "active" : null}`}
                      onClick={() => setActivePage(id)}
                    >
                      {text}
                    </Link>
                  </li>
                );
              })}
            </ul>
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
        </header>
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  height: var(--header-height);
  align-items: center;
  justify-content: center;

  .navbar {
    display: none;
  }

  .show-navbar {
    display: flex;
  }

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 80px;
      margin-left: -15px;
    }
  }

  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-dark-1);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }

  .active {
    border-bottom: 2px solid var(--clr-primary);
    padding-bottom: 0.5rem;
    font-weight: bold;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
        list-style: none;
      }
      a {
        color: var(--clr-grey-2);
        font-size: 1.1rem;
        text-transform: uppercase;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary);
        }
      }
    }
  }

  .social img {
    width: 2rem;
    cursor: pointer;
    margin: 0.5rem;
  }

  @media (max-width: 600px) {
    .social {
      display: none;
    }
  }
`;

export default Nav;
