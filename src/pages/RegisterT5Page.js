import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { InputFieldText, ButtonModern } from "../components";
import { t5registerform } from "../utils/constants";
import { useNavContext } from "../context/nav_context";

const RegisterT5 = () => {
  const [stepIndex, setStepIndex] = useState(0);
  const [regForm, setRegForm] = useState({});
  const [errorMsg, setErrorMsg] = useState("");
  const [showForm, setShowForm] = useState(true);

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

  const handleClick = (name, value) => {
    setRegForm({ ...regForm, [name]: value });
  };

  const submitRegister = () => {
    console.log(regForm);
    // TODO: Save register
    setShowForm(false);
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
                    return (
                      <InputFieldText
                        key={field.fieldId}
                        title={field.title}
                        id={field.fieldId}
                        name={field.fieldId}
                        onChange={handleChange}
                      />
                    );
                  } else if (field.type === "explanation") {
                    return <p key={field.fieldId}>{field.title}</p>;
                  } else if (field.type === "single-select") {
                    return field.options.map((option, index) => {
                      return (
                        <div
                          key={`${field.fieldId}-${index}`}
                          className={`single-select-option ${
                            regForm[field.fieldId] === index
                              ? "single-select-option-selected"
                              : ""
                          }`}
                          onClick={() => handleClick(`${field.fieldId}`, index)}
                        >
                          {option}
                        </div>
                      );
                    });
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
      <div className={`${showForm ? "hide-form" : "confirmation-reg"}`}>
        <h1>Tu inscripción ha sido recibida</h1>
        <p>Gracias por unirte a la liga española!</p>
        <p>
          En breve un miembro de la organización revisará tu solicitud y te
          confirmará tu inscripción.
        </p>
        <h3>14!!</h3>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

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
    height: 50vh;
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
    margin-left: 2rem;
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
