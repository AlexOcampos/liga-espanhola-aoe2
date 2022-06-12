import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { divisionesT5 } from "../utils/constants";

const Temp3Page = () => {
  return (
    <main>
      <Wrapper className="page section section-center">
        <article>
          <div className="title">
            <h4>Divisiones</h4>
            <div className="underline"></div>
          </div>

          <ul>
            {divisionesT5.map((division) => {
              const { id, text, image } = division;
              return (
                <li key={id} className="container">
                  <img src={`./divisions/${image}`} alt={text} />
                  <span className="title-division">{text}</span>
                </li>
              );
            })}
          </ul>
        </article>
        <article>
          <div className="title">
            <h4>Test links</h4>
            <div className="underline"></div>
          </div>
          <Link to="match">
            <button className="btn">Match</button>
          </Link>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
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
  }
  .title {
    text-align: left;
    margin-bottom: 2rem;
  }
  .underline {
    margin-left: 0;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
  }

  li {
    width: 20rem;
    display: flex;
    align-items: center;
    margin: 1rem;
    border: var(--clr-grey-4) solid 0.1px;
    border-radius: 10px;
    cursor: pointer;
  }
  li img {
    width: 42px;
    margin-top: 0;
    margin-right: 16px;
  }

  .container {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0.5rem;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  }

  .container:hover {
    cursor: pointer;
  }

  .container img {
    filter: grayscale();
    width: 80px;
    border-radius: 50%;
    border: 2px solid whitesmoke;
    box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.5);
    transition: filter 0.4s ease-in-out;
  }

  .container:hover img {
    filter: none;
  }

  .title-division {
    font-size: 1.2rem;
    position: relative;
  }

  .title-division::after {
    position: absolute;
    content: "";
    width: 0%;
    height: 4px;
    background-color: var(--clr-primary);
    left: 50%;
    bottom: -10px;
    transition: all 0.4s ease-in-out;
  }

  .container:hover .title-division::after {
    width: 100%;
    left: 0;
  }

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default Temp3Page;
