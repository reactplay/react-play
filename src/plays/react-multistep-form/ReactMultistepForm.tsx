import React from "react";
import { useMultistepForm } from "./customHook/useMultistepForm";
import PersonalInfo from "./personalInfo";
import ContactInfo from "./contactInfo";
import AccountInfo from "./accountInfo";
import { FormEvent, useState } from "react";
import "./react-multistep-form.css";
type FormData = {
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  password: string;
};
const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  address: "",
  email: "",
  password: "",
};

function ReactMultistepForm() {
  const [data, setData] = useState(INITIAL_DATA);
  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }
  const {
    isLastStep,
    isFirstStep,
    currentStepIndex,
    step,
    next,
    back,
    totalSteps,
  } = useMultistepForm([
    <PersonalInfo {...data} updateField={updateFields} />,
    <ContactInfo {...data} updateField={updateFields} />,
    <AccountInfo {...data} updateField={updateFields} />,
  ]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!isLastStep) return next();
    alert("Logic to submit the form");
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <div
          style={{
            border: "2px solid black",
            position: "relative",
            background: "white",
            padding: "1rem",
            borderRadius: ".5rem",
            fontFamily: "Arial",
            maxWidth: "500px",
            marginTop: "1rem",
          }}
        >
          <form onSubmit={handleSubmit}>
            <div style={{ position: "absolute", top: "2px", right: ".5rem" }}>
              {currentStepIndex + 1}/{totalSteps}
            </div>
            {step}
            <div
              style={{
                marginTop: "1rem",
                display: "flex",
                gap: ".5rem",
                justifyContent: "flex-end",
              }}
            >
              {!isFirstStep && (
                <button type={"button"} onClick={back}>
                  Back
                </button>
              )}

              <button className={"rounded"} type={"submit"}>
                {isLastStep ? "Finish" : "Next"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ReactMultistepForm;
