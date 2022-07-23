import React from "react";
import { Link } from "react-router-dom";
import { useNavContext } from "../context/nav_context";
import { FaTimes } from "react-icons/fa";
import { links } from "../utils/constants";
import styled from "styled-components";

const Sidebar = () => {
  const twitterUrl = "https://twitter.com/Aoe2LigaESP";
  const discordUrl = "https://discord.gg/ZXkABxKFq5";
  const { isSidebarOpen, closeSidebar } = useNavContext();

  return (
    <SidebarContainer>
      <aside
        className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}
      >
        <div className="sidebar-header">
          <img
            src="https://alexocampos.github.io/liga-espanhola-aoe2-static/assets/lea_logo.png"
            alt="Liga Española"
          />
          <button className="close-btn" type="button" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          {links.map(({ id, text, url }) => {
            return (
              <li key={id}>
                <Link to={url} onClick={closeSidebar}>
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
      </aside>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  text-align: center;

  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
    img {
      width: 175px;
      margin-left: -15px;
    }
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-primary-5);
    transition: var(--transition);
    cursor: pointer;
    color: var(--clr-red-dark);
    margin-top: 0.2rem;
  }
  .close-btn:hover {
    color: var(--clr-red-light);
  }
  .logo {
    justify-self: center;
    height: 45px;
  }
  .links {
    margin-bottom: 2rem;
  }
  .links a {
    display: block;
    text-align: left;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: var(--clr-grey-3);
    transition: var(--transition);
    letter-spacing: var(--spacing);
  }

  .links a:hover {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
    background: var(--clr-grey-10);
    color: var(--clr-grey-2);
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-white);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .cart-btn-wrapper {
    margin: 2rem auto;
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }

  .social img {
    width: 2rem;
    cursor: pointer;
    margin: 0.5rem;
  }
`;

export default Sidebar;
