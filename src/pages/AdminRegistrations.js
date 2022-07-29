import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const AdminRegistrations = () => {
  const [regInProgress, setRegInProgress] = useState(true);
  const [regError, setRegError] = useState(false);
  const [regCompleted, setRegCompleted] = useState(false);
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    loadRegisters();
  }, []);

  const loadRegisters = async () => {
    setRegInProgress(true);
    const url = "https://liga-espanhola-aoe2.herokuapp.com/registrations";

    try {
      setRegInProgress(true);
      const response = await axios.get(url);
      if (response.status === 200) {
        setRegistrations(response.data);
        setRegInProgress(false);
        setRegCompleted(true);
        return true;
      } else {
        console.log(`(${response.status}) response: ${response.data}`);
        setRegInProgress(false);
        setRegError(true);
        return false;
      }
    } catch (error) {
      setRegInProgress(false);
      setRegError(true);
      return false;
    }
  };

  return (
    <main>
      <Wrapper className="page section section-center">
        <div className={`${regInProgress ? "loading" : "not-loading"}`}>
          <div className="lds-dual-ring"></div>
        </div>
        <div className={regError ? "error" : "not-error"}></div>
        <div className={`register-list ${regCompleted ? "" : "not-loaded"}`}>
          {registrations.map((registration) => {
            return (
              <div className="register">
                <p>{registration.username}</p>
                <p>
                  <a href={registration.aoe2net_principal}>AoE2net principal</a>
                </p>

                {registration.aoe2net_secondary_1 ? (
                  <p>
                    <a href={registration.aoe2net_secondary_1}>
                      AoE2net secondary #01
                    </a>
                  </p>
                ) : (
                  ""
                )}
                {registration.aoe2net_secondary_2 ? (
                  <p>
                    <a href={registration.aoe2net_secondary_2}>
                      AoE2net secondary #02
                    </a>
                  </p>
                ) : (
                  ""
                )}

                <p>Discord: {registration.discord}</p>
                <p>Email: {registration.email}</p>
              </div>
            );
          })}
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  .not-loading {
    display: none;
  }

  .register {
    margin: 0.5rem;
    padding: 0.8rem;
    border: 1px solid #fff;
    border-radius: 8px;
  }

  a:hover {
    color: var(--clr-primary);
  }

  .not-loaded,
  .not-error,
  .not-loading {
    display: none;
  }

  .lds-dual-ring {
    display: inline-block;
    width: 80px;
    height: 80px;
  }
  .lds-dual-ring:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
export default AdminRegistrations;
