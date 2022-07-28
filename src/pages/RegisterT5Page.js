import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { InputFieldText, ButtonModern } from "../components";
import { t5registerform } from "../utils/constants";
import { useNavContext } from "../context/nav_context";
import axios from "axios";

const RegisterT5 = () => {
  const [stepIndex, setStepIndex] = useState(0);
  const [regForm, setRegForm] = useState({});
  const [errorMsg, setErrorMsg] = useState("");
  const [showForm, setShowForm] = useState(true);
  const [hideOptions, setHideOptions] = useState(true);
  const [regInProgress, setRegInProgress] = useState(false);
  const [regError, setRegError] = useState(false);
  const [regCompleted, setRegCompleted] = useState(false);
  const [regErrorMsg, setRegErrorMsg] = useState("");

  const { openNotification } = useNavContext();

  useEffect(() => {
    openNotification();
  }, []);

  const checkNumber = (number) => {
    if (number > t5registerform.length - 1) {
      return 0;
    }
    if (number < 0) {
      return t5registerform.length - 1;
    }
    return number;
  };

  const nextStep = () => {
    // Check mandatory inputs
    var stepFields = t5registerform.filter(
      (step) => step.stepId === stepIndex + 1
    )[0].fields;

    var mandatoryFields = stepFields.filter(
      (field) => field.mandatory === true
    );

    for (var i = 0; i < mandatoryFields.length; i++) {
      let field = mandatoryFields[i];

      if (!regForm[field.fieldId] && regForm[field.fieldId] !== 0) {
        setErrorMsg(
          `Por favor rellena todos los campos obligatorios: ${field.title}`
        );
        return;
      }
    }

    setErrorMsg("");

    setStepIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevStep = () => {
    setErrorMsg("");

    setStepIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setRegForm({ ...regForm, [name]: value });
  };

  const handleClick = (name, value, showHideOptions) => {
    if (hideOptions && showHideOptions) {
      setHideOptions(false);
    } else if (!hideOptions) {
      setHideOptions(true);
    }
    setRegForm({ ...regForm, [name]: value });
  };

  const registerUser = async (registration) => {
    const url = "https://liga-espanhola-aoe2.herokuapp.com/registrations";
    console.log(registration);

    try {
      setShowForm(false);
      setRegInProgress(true);
      const response = await axios.post(url, registration);
      if (response.status === 201) {
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
      if (error.response.status === 400) {
        setRegInProgress(false);
        setRegError(true);
        setRegErrorMsg(error.response.data.message);
      } else {
        setRegInProgress(false);
        setRegError(true);
      }
      return false;
    }
  };

  const submitRegister = () => {
    var registrationData = {
      username: regForm.username,
      email: regForm.email,
      discord: regForm.discord,
      country_selector: regForm.country_selector,
      clan: regForm.clan,
      aoe2net_principal: regForm.aoe2net_principal,
    };

    if (regForm.clan_other_name) {
      registrationData.clan_other_name = regForm.clan_other_name;
    }
    if (regForm.aoe2net_secondary_1) {
      registrationData.aoe2net_secondary_1 = regForm.aoe2net_secondary_1;
    }
    if (regForm.aoe2net_secondary_2) {
      registrationData.aoe2net_secondary_2 = regForm.aoe2net_secondary_2;
    }
    if (regForm.twitch) {
      registrationData.twitch = regForm.twitch;
    }
    if (regForm.twitter) {
      registrationData.twitter = regForm.twitter;
    }
    if (regForm.youtube) {
      registrationData.youtube = regForm.youtube;
    }

    registerUser(registrationData);
  };

  return (
    <Wrapper className="page section section-center">
      <div className={`${!showForm ? "hide-form" : "column-steplist"}`}>
        {t5registerform.map((step, index) => {
          return (
            <div
              key={`steplist-${step.stepId}`}
              className={stepIndex === index ? `step-index-active` : ""}
            >
              {step.stepName}
            </div>
          );
        })}
      </div>
      <div className={`${!showForm ? "hide-form" : "column-form"}`}>
        <div className="form-fields">
          {t5registerform.map((step, index) => {
            return (
              <article
                key={`stepform-${step.stepId}`}
                className={
                  stepIndex === index
                    ? `step-form step-active`
                    : "step-form step-inactive"
                }
              >
                {step.fields.map((field) => {
                  if (field.type === "text") {
                    if (!(field.hide && hideOptions)) {
                      return (
                        <InputFieldText
                          key={field.fieldId}
                          title={field.title}
                          id={field.fieldId}
                          name={field.fieldId}
                          onChange={handleChange}
                        />
                      );
                    }
                  } else if (field.type === "explanation") {
                    return (
                      <p
                        key={field.fieldId}
                        className={`${
                          field.hide && hideOptions ? "hideField" : ""
                        }`}
                      >
                        {field.title}
                      </p>
                    );
                  } else if (field.type === "single-select") {
                    return field.options.map((option, index) => {
                      return (
                        <div
                          key={`${field.fieldId}-${index}`}
                          className={`single-select-option ${
                            regForm[field.fieldId] === index
                              ? "single-select-option-selected"
                              : ""
                          } `}
                          onClick={() => handleClick(`${field.fieldId}`, index)}
                        >
                          {option}
                        </div>
                      );
                    });
                  } else if (field.type === "single-select-big") {
                    return (
                      <div
                        className={`single-select-big ${
                          field.affectedHideOptions && hideOptions
                            ? "hide-options"
                            : "show-hide-options"
                        }`}
                        key={`${field.fieldId}-${index}`}
                      >
                        {field.options.map((option, index) => {
                          return (
                            <div
                              key={`big-${field.fieldId}-${index}`}
                              className={`single-select-option-big ${
                                regForm[field.fieldId] === option.id
                                  ? "single-select-option-selected"
                                  : ""
                              }`}
                              onClick={() =>
                                handleClick(
                                  `${field.fieldId}`,
                                  option.id,
                                  option.showHideOptions
                                )
                              }
                            >
                              {option.image ? (
                                <img
                                  src={`https://alexocampos.github.io/liga-espanhola-aoe2-static/clans/${option.image}`}
                                  alt={option.name}
                                  title={option.name}
                                />
                              ) : (
                                ""
                              )}

                              <span>{option.name}</span>
                            </div>
                          );
                        })}
                      </div>
                    );
                  }
                  return "";
                })}
              </article>
            );
          })}
        </div>
        <div className="notification-errors">{errorMsg}</div>
        <div className="nav-steps">
          {stepIndex === 0 ? "" : <div onClick={prevStep}>Atrás</div>}
          {stepIndex === t5registerform.length - 1 ? (
            ""
          ) : (
            <ButtonModern
              text="Siguiente"
              marginLeft="2rem"
              fontSize="0.8em"
              onClick={nextStep}
            />
          )}
          {stepIndex === t5registerform.length - 1 ? (
            <ButtonModern
              text="INSCRIBIRME!"
              marginLeft="2rem"
              fontSize="1.5em"
              onClick={submitRegister}
            />
          ) : (
            ""
          )}
        </div>
      </div>

      <div className={`${!regInProgress ? "hide-form" : "confirmation-reg"}`}>
        <div className="lds-dual-ring"></div>
      </div>

      <div className={`${!regCompleted ? "hide-form" : "confirmation-reg"}`}>
        <h1>Tu inscripción ha sido recibida</h1>
        <p>Gracias por unirte a la liga española!</p>
        <p>
          En breve un miembro de la organización revisará tu solicitud y te
          confirmará tu inscripción.
        </p>
        <p>
          Mientras tanto, puedes consultar toda la info de la nueva temporada
          aquí:
        </p>
        <ButtonModern
          text="Temporada 5"
          link="/temporada-5"
          marginTop="0"
          fontSize="1.2em"
        />
      </div>

      <div className={`${!regError ? "hide-form" : "confirmation-reg"}`}>
        <h1>Ooops esto es embarazoso</h1>
        <p>Parece que ha habido un problema con la inscripción.</p>
        <p>{regErrorMsg}</p>
        <p>
          <i>(seguro que la culpa es de tu ISP 11)</i>
        </p>
        <p>Refresca la página o haz click aquí:</p>
        <ButtonModern
          text="Inscribete"
          link="/inscripcion-t5"
          marginTop="0"
          fontSize="1.8em"
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

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

  .single-select-big {
    overflow: auto;
    width: 26rem;
    margin-bottom: 1rem;
  }

  .hide-options {
    height: 48vh;
  }

  .show-hide-options {
    height: 24vh;
  }

  .hideField {
    display: none;
  }

  .single-select-option-big {
    margin: 0.5rem;
    padding: 1.2rem;
    width: 22rem;
    border-radius: 8px;
    border: solid 1px var(--clr-grey-10);
    background-color: var(--clr-grey-10);
    cursor: pointer;
    transition: 0.5s;
    display: flex;
    align-items: center;
    img {
      width: 2rem;
    }
    span {
      margin-left: 0.5rem;
    }
  }

  .hide-form {
    display: none;
  }

  .column-steplist {
    border-right: 3px solid var(--clr-primary);
    height: 50vh;
    width: 160px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    div {
      margin-right: 2rem;
    }
  }

  .step-index-active {
    font-weight: bolder;
    font-size: 1.3rem;
    transition: 0.5s;
    color: var(--clr-primary);
    transform: translateX(15px);
  }

  .register-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .column-form {
    padding: 1rem;
    height: 60vh;
    width: 700px;
    transition: 0.5s;
    position: relative;
  }

  .nav-steps {
    display: flex;
    justify-content: left;
    align-items: center;
    margin-top: 2rem;
    height: 5rem;

    bottom: 0;
    left: 0;
    position: absolute;

    div {
      margin-left: 2rem;
      margin-right: 2rem;
      cursor: pointer;
    }
  }

  .form-fields {
    //display: none;
    width: 100%;
    height: 100%;
    margin-left: 0.5rem;
  }

  .step-form {
    position: absolute;
    opacity: 0;
    transition: 0.5s;
    top: 0;
    left: 0;
    height: 30vh;
    max-width: 450px;
    padding: 1.5rem;
  }

  .step-inactive {
    transform: translateX(+100%);
  }

  .step-active {
    opacity: 1;
    transform: translateX(0);
  }

  .single-select-option {
    margin: 1.5rem;
    padding: 1.2rem;
    width: 24rem;
    border-radius: 8px;
    border: solid 1px var(--clr-grey-10);
    background-color: var(--clr-grey-10);
    cursor: pointer;
    transition: 0.5s;
  }

  .single-select-option-selected {
    background-color: var(--clr-primary-light-4);
  }

  .single-select-option:hover {
    background-color: var(--clr-primary-light-3);
  }

  .notification-errors {
    margin-top: 2rem;
    font-style: italic;
  }
`;
export default RegisterT5;
