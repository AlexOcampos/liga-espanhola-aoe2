import React from "react";
import styled from "styled-components";
import { InputFieldText } from "../components";

const RegisterT5 = () => {
  return (
    <main>
      <Wrapper className="page section section-center">
        <article>
          <div className="title">
            <h4>Perfil</h4>
            <div className="underline"></div>
          </div>
          <div className="register-form">
            <InputFieldText title={"username"} />
            <InputFieldText title={"discord user"} />
            <InputFieldText title={"email"} />
          </div>
        </article>
        <article>
          <div className="title">
            <h4>Origen</h4>
            <div className="underline"></div>
          </div>
          <div className="register-form">
            <InputFieldText title={"username"} />
            <InputFieldText title={"discord user"} />
            <InputFieldText title={"email"} />
          </div>
        </article>
        <article>
          <div className="title">
            <h4>Perfil AoE</h4>
            <div className="underline"></div>
          </div>
          <div className="register-form">
            <InputFieldText title={"url AoE2net cuenta principal"} />
            <p>
              ¿Tienes alguna cuenta secundaria? Por favor ponla en conocimiento
              de la organización.
            </p>
            <InputFieldText title={"url AoE2net cuenta secundaria"} />
            <InputFieldText title={"url AoE2net cuenta secundaria"} />
          </div>
        </article>
        <article>
          <div className="title">
            <h4>Social</h4>
            <div className="underline"></div>
          </div>
          <div className="register-form">
            <p>¿Tienes alguna red social? Compártela con nosotros!</p>
            <InputFieldText title={"canal twitch"} />
            <InputFieldText title={"canal youtube"} />
            <InputFieldText title={"twitter"} />
          </div>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`;
export default RegisterT5;
